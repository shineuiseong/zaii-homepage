import { google } from 'googleapis'
import type { H3Event } from 'h3'

type ConsultationRequestBody = {
  name: string
  phone: string
  content?: string
  agreePrivacy: boolean
  agreeSensitive?: boolean
}

/* =========================================================
   Client IP
========================================================= */

function getClientIp(event: H3Event) {
  const xForwardedFor = getHeader(event, 'x-forwarded-for')

  if (xForwardedFor) {
    return xForwardedFor.split(',')[0]?.trim() || ''
  }

  const xRealIp = getHeader(event, 'x-real-ip')

  if (xRealIp) {
    return xRealIp
  }

  return event.node.req.socket.remoteAddress || ''
}

/* =========================================================
   KST Timestamp
========================================================= */

function getKstTimestamp() {
  const now = new Date()

  const parts = new Intl.DateTimeFormat('sv-SE', {
    timeZone: 'Asia/Seoul',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false
  }).formatToParts(now)

  const map = Object.fromEntries(parts.map((part) => [part.type, part.value]))

  return `${map.year}-${map.month}-${map.day} ${map.hour}:${map.minute}:${map.second}`
}

/* =========================================================
   Handler
========================================================= */

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig(event)

  const body = await readBody<ConsultationRequestBody>(event)

  /* =======================================================
     Normalize
  ======================================================= */

  const name = body.name?.trim() || ''

  const phone = body.phone?.replace(/\D/g, '') || ''

  const content = body.content?.trim() || ''

  const agreePrivacy = Boolean(body.agreePrivacy)

  const agreeSensitive = Boolean(body.agreeSensitive)

  /* =======================================================
     Validation
  ======================================================= */

  if (!name) {
    throw createError({
      statusCode: 400,
      statusMessage: '성함을 입력해주세요.'
    })
  }

  if (!phone || phone.length < 10 || phone.length > 11) {
    throw createError({
      statusCode: 400,
      statusMessage: '연락처를 정확히 입력해주세요.'
    })
  }

  if (!agreePrivacy) {
    throw createError({
      statusCode: 400,
      statusMessage: '개인정보 수집 및 이용 동의가 필요합니다.'
    })
  }

  /*
   * 상담내용에 건강정보가 포함되어 있으면서
   * 민감정보 동의를 받지 않은 경우를 엄격하게
   * 차단하려면 여기에서 agreeSensitive 검증 가능.
   *
   * 현재 프론트에서는 선택 동의이므로
   * 서버에서도 필수 검증은 하지 않는다.
   */

  /* =======================================================
     Google Sheets Config
  ======================================================= */

  const clientEmail = config.googleClientEmail

  const privateKey = config.googlePrivateKey

  const spreadsheetId = config.googleSpreadsheetId

  const sheetName = config.googleSheetName

  if (!clientEmail || !privateKey || !spreadsheetId || !sheetName) {
    throw createError({
      statusCode: 500,
      statusMessage: '구글시트 설정이 누락되었습니다.'
    })
  }

  /* =======================================================
     Google Auth
  ======================================================= */

  const auth = new google.auth.JWT({
    email: clientEmail,

    key: privateKey.replace(/\\n/g, '\n'),

    scopes: ['https://www.googleapis.com/auth/spreadsheets']
  })

  const sheets = google.sheets({
    version: 'v4',
    auth
  })

  /* =======================================================
     Request Metadata
  ======================================================= */

  const submittedAt = getKstTimestamp()

  const userAgent = getHeader(event, 'user-agent') || ''

  const ip = getClientIp(event)

  const referer = getHeader(event, 'referer') || ''

  /* =======================================================
     Sheet Row
  ======================================================= */

  const row = [
    submittedAt, // A 접수일시
    name, // B 성함
    `'${phone}`, // C 연락처
    content, // D 상담내용
    agreePrivacy ? '동의' : '미동의', // E 개인정보 동의
    agreeSensitive ? '동의' : '미동의', // F 건강정보 동의
    ip, // G IP
    userAgent, // H User-Agent
    referer // I Referer
  ]

  /* =======================================================
     Append
  ======================================================= */

  try {
    await sheets.spreadsheets.values.append({
      spreadsheetId,

      range: `${sheetName}!A2:I`,

      valueInputOption: 'USER_ENTERED',

      insertDataOption: 'INSERT_ROWS',

      includeValuesInResponse: true,

      requestBody: {
        majorDimension: 'ROWS',

        values: [row]
      }
    })
  } catch (error) {
    console.error('[consultation] google sheets append error:', error)

    throw createError({
      statusCode: 500,
      statusMessage: '상담 접수 저장 중 오류가 발생했습니다.'
    })
  }

  return {
    ok: true,

    message: '상담 신청이 접수되었습니다.'
  }
})
