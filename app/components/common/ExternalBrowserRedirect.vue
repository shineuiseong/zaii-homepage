<!-- components/common/ExternalBrowserRedirect.vue -->
<template>
  <span class="external-browser-redirect" aria-hidden="true" />
</template>

<script setup lang="ts">
import { onMounted } from 'vue'

const REDIRECT_KEY = 'zaii-external-browser-redirect-attempted'

/* ========================================================
     USER AGENT
  ======================================================== */

function getUserAgent() {
  if (!import.meta.client) {
    return ''
  }

  return navigator.userAgent || ''
}

/* ========================================================
     DEVICE
  ======================================================== */

function isAndroid() {
  return /Android/i.test(getUserAgent())
}

function isIOS() {
  return /iPhone|iPad|iPod/i.test(getUserAgent())
}

/* ========================================================
     IN-APP BROWSER
  ======================================================== */

function isKakaoTalk() {
  return /KAKAOTALK/i.test(getUserAgent())
}

function isNaverApp() {
  const ua = getUserAgent()

  return /NAVER/i.test(ua) || /NaverApp/i.test(ua)
}

function isInstagram() {
  return /Instagram/i.test(getUserAgent())
}

function isFacebook() {
  const ua = getUserAgent()

  return /FBAN|FBAV/i.test(ua)
}

function isLine() {
  return /\bLine\//i.test(getUserAgent())
}

function isDaumApp() {
  return /DaumApps/i.test(getUserAgent())
}

function isSamsungWebView() {
  const ua = getUserAgent()

  return /SamsungBrowser/i.test(ua) && /; wv\)/i.test(ua)
}

function isAndroidWebView() {
  const ua = getUserAgent()

  return (
    /\bwv\b/i.test(ua) ||
    /; wv\)/i.test(ua) ||
    (/Version\/[\d.]+/i.test(ua) && /Chrome\/[\d.]+ Mobile/i.test(ua))
  )
}

function isInAppBrowser() {
  return (
    isKakaoTalk() ||
    isNaverApp() ||
    isInstagram() ||
    isFacebook() ||
    isLine() ||
    isDaumApp() ||
    isAndroidWebView() ||
    isSamsungWebView()
  )
}

/* ========================================================
     CURRENT URL
  ======================================================== */

function getCurrentUrl() {
  return window.location.href
}

/* ========================================================
     ANDROID
  ======================================================== */

function openAndroidExternalBrowser() {
  const currentUrl = getCurrentUrl()

  try {
    const url = new URL(currentUrl)

    const scheme = url.protocol.replace(':', '')

    const path = `${url.host}` + `${url.pathname}` + `${url.search}` + `${url.hash}`

    /*
     * Android에서 가장 호환성이 좋은 방식.
     *
     * Chrome 우선.
     */
    const chromeIntent =
      `intent://${path}` +
      `#Intent;` +
      `scheme=${scheme};` +
      `package=com.android.chrome;` +
      `S.browser_fallback_url=${encodeURIComponent(currentUrl)};` +
      `end`

    window.location.href = chromeIntent
  } catch {
    /*
     * URL 파싱 실패 시에는 아무 동작하지 않음.
     */
  }
}

/* ========================================================
     IOS KAKAO
  ======================================================== */

function openIOSKakaoExternal() {
  const currentUrl = getCurrentUrl()

  /*
   * 카카오톡 전용 외부 브라우저 호출.
   */
  window.location.href = `kakaotalk://web/openExternal?url=${encodeURIComponent(currentUrl)}`
}

/* ========================================================
     IOS CHROME
  ======================================================== */

function openIOSChrome() {
  const currentUrl = getCurrentUrl()

  try {
    const url = new URL(currentUrl)

    let chromeUrl = ''

    if (url.protocol === 'https:') {
      chromeUrl = currentUrl.replace(/^https:/i, 'googlechromes:')
    } else {
      chromeUrl = currentUrl.replace(/^http:/i, 'googlechrome:')
    }

    window.location.href = chromeUrl
  } catch {
    // ignore
  }
}

/* ========================================================
     IOS
  ======================================================== */

function openIOSExternalBrowser() {
  /*
   * 카카오톡은 카카오 전용 scheme이
   * 가장 성공률이 높음.
   */
  if (isKakaoTalk()) {
    openIOSKakaoExternal()

    return
  }

  /*
   * Instagram / Facebook / Naver / Line 등은
   * Safari를 JS만으로 강제 실행할 공식 scheme이 없음.
   *
   * 그래서 Chrome scheme을 우선 시도.
   *
   * Chrome이 설치되어 있지 않으면
   * 해당 scheme은 실패할 수 있음.
   */
  if (isInstagram() || isFacebook() || isNaverApp() || isLine() || isDaumApp()) {
    openIOSChrome()
  }
}

/* ========================================================
     REDIRECT
  ======================================================== */

function redirectToExternalBrowser() {
  if (!import.meta.client) {
    return
  }

  /*
   * 일반 Safari / Chrome / Edge 등에서는
   * 아무 동작하지 않음.
   */
  if (!isInAppBrowser()) {
    return
  }

  /*
   * 무한 반복 방지.
   */
  if (sessionStorage.getItem(REDIRECT_KEY) === '1') {
    return
  }

  sessionStorage.setItem(REDIRECT_KEY, '1')

  if (isAndroid()) {
    openAndroidExternalBrowser()

    return
  }

  if (isIOS()) {
    openIOSExternalBrowser()
  }
}

/* ========================================================
     MOUNT
  ======================================================== */

onMounted(() => {
  /*
   * 앱 WebView가 초기 URL 처리를 끝낸 다음
   * 외부 브라우저 전환 시도.
   */
  window.setTimeout(() => {
    redirectToExternalBrowser()
  }, 150)
})
</script>

<style scoped>
.external-browser-redirect {
  display: none;
}
</style>
