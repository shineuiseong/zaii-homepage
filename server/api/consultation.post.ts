import { google } from 'googleapis'
import type { H3Event } from 'h3'

type ConsultationRequestBody = {
  name: string
  phone: string
  age?: string
  insurance?: string
  region?: string
  content?: string
  agreePrivacy: boolean
  agreeSensitive?: boolean
}

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

  const map = Object.fromEntries(parts.map((p) => [p.type, p.value]))
  return `${map.year}-${map.month}-${map.day} ${map.hour}:${map.minute}:${map.second}`
}

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig(event)
  const body = await readBody<ConsultationRequestBody>(event)

  const name = body.name?.trim() || ''
  const phone = body.phone?.replace(/\D/g, '') || ''
  const age = body.age?.trim() || '모름'
  const insurance = body.insurance?.trim() || '모름'
  const region = body.region?.trim() || '모름'
  const content = body.content?.trim() || ''
  const agreePrivacy = !!body.agreePrivacy
  const agreeSensitive = !!body.agreeSensitive

  if (!name) {
    throw createError({ statusCode: 400, statusMessage: '성함을 입력해주세요.' })
  }

  if (!phone || phone.length < 10) {
    throw createError({ statusCode: 400, statusMessage: '연락처를 정확히 입력해주세요.' })
  }

  if (!agreePrivacy) {
    throw createError({
      statusCode: 400,
      statusMessage: '개인정보 수집 및 이용 동의가 필요합니다.'
    })
  }

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

  const auth = new google.auth.JWT({
    email: clientEmail,
    key: privateKey.replace(/\\n/g, '\n'),
    scopes: ['https://www.googleapis.com/auth/spreadsheets']
  })

  const sheets = google.sheets({
    version: 'v4',
    auth
  })

  const submittedAt = getKstTimestamp()
  const userAgent = getHeader(event, 'user-agent') || ''
  const ip = getClientIp(event)
  const referer = getHeader(event, 'referer') || ''

  const row = [
    submittedAt,
    name,
    `'${phone}`,
    age,
    insurance,
    region,
    content,
    agreePrivacy ? '동의' : '미동의',
    agreeSensitive ? '동의' : '미동의',
    ip,
    userAgent,
    referer
  ]

  try {
    const res = await sheets.spreadsheets.values.append({
      spreadsheetId,
      range: `${sheetName}!A2:L`,
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
