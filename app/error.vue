<!-- error.vue -->

<template>
  <div class="error-page">
    <header class="error-header">
      <div class="container error-header__inner">
        <NuxtLink to="/" class="error-logo">
          <img src="/images/logo.svg" alt="자이비뇨의학과" />
        </NuxtLink>
      </div>
    </header>

    <main class="error-main">
      <div class="container error-main__inner">
        <div class="error-content">
          <span class="error-eyebrow"> ZAII UROLOGY </span>

          <strong class="error-code">
            {{ statusCode }}
          </strong>

          <h1>
            {{ errorTitle }}
          </h1>

          <p>
            {{ errorDescription }}
          </p>

          <div class="error-actions">
            <NuxtLink to="/" class="error-button error-button--primary" @click="clearCurrentError">
              메인으로 가기
            </NuxtLink>

            <button type="button" class="error-button error-button--secondary" @click="goBack">
              이전 페이지
            </button>
          </div>
        </div>

        <div class="error-quick">
          <p class="error-quick__label">QUICK MENU</p>

          <div class="error-quick__grid">
            <NuxtLink to="/hospital/history" class="error-quick__item" @click="clearCurrentError">
              <span>01</span>
              <strong>병원소개</strong>
              <small>자이의 발자취와 의료진을 소개합니다.</small>
            </NuxtLink>

            <NuxtLink to="/prostate" class="error-quick__item" @click="clearCurrentError">
              <span>02</span>
              <strong>전립선비대증</strong>
              <small>증상과 치료 방법을 확인해보세요.</small>
            </NuxtLink>

            <NuxtLink to="/consultation" class="error-quick__item" @click="clearCurrentError">
              <span>03</span>
              <strong>온라인 상담</strong>
              <small>궁금한 내용을 편하게 남겨주세요.</small>
            </NuxtLink>
          </div>
        </div>
      </div>
    </main>

    <div class="error-watermark" aria-hidden="true">ZAII</div>
  </div>
</template>

<script setup lang="ts">
import type { NuxtError } from '#app'

/* ========================================================
  PROPS
======================================================== */

const props = defineProps<{
  error: NuxtError
}>()

/* ========================================================
  STATUS CODE
======================================================== */

const statusCode = computed(() => {
  return props.error?.statusCode ?? 500
})

/* ========================================================
  ERROR TITLE
======================================================== */

const errorTitle = computed(() => {
  if (statusCode.value === 404) {
    return '페이지를 찾을 수 없습니다.'
  }

  return '페이지를 불러오는 중 문제가 발생했습니다.'
})

/* ========================================================
  ERROR DESCRIPTION
======================================================== */

const errorDescription = computed(() => {
  if (statusCode.value === 404) {
    return '요청하신 페이지의 주소가 변경되었거나 삭제되었을 수 있습니다.'
  }

  return '잠시 후 다시 시도하시거나 메인 페이지로 이동해주세요.'
})

/* ========================================================
  SEO / META
======================================================== */

useHead(() => ({
  title:
    statusCode.value === 404
      ? '페이지를 찾을 수 없습니다 | 자이비뇨의학과병원'
      : '오류가 발생했습니다 | 자이비뇨의학과병원',

  meta: [
    {
      name: 'robots',
      content: 'noindex, nofollow'
    }
  ]
}))

/* ========================================================
  CLEAR ERROR
======================================================== */

async function clearCurrentError() {
  await clearError({
    redirect: '/'
  })
}

/* ========================================================
  GO BACK
======================================================== */

function goBack() {
  if (import.meta.client && window.history.length > 1) {
    window.history.back()
    return
  }

  clearError({
    redirect: '/'
  })
}
</script>

<style scoped lang="scss">
.error-page {
  position: relative;

  min-height: 100dvh;

  overflow: hidden;

  background: radial-gradient(circle at 75% 25%, rgba(37, 95, 149, 0.06), transparent 30%), #ffffff;

  color: #172b3f;
}

/* ========================================================
    HEADER
  ======================================================== */

.error-header {
  position: relative;

  z-index: 5;

  border-bottom: 1px solid rgba(15, 23, 42, 0.08);

  background: rgba(255, 255, 255, 0.92);

  backdrop-filter: blur(12px);

  -webkit-backdrop-filter: blur(12px);
}

.error-header__inner {
  display: flex;

  align-items: center;

  min-height: 94px;
}

.error-logo {
  display: flex;

  align-items: center;

  width: 196px;

  height: 44px;
}

.error-logo img {
  display: block;

  width: 100%;

  height: 100%;

  object-fit: contain;

  object-position: left center;
}

/* ========================================================
    MAIN
  ======================================================== */

.error-main {
  position: relative;

  z-index: 2;

  display: flex;

  align-items: center;

  min-height: calc(100dvh - 95px);

  padding: 80px 0;
}

.error-main__inner {
  display: grid;

  grid-template-columns:
    minmax(0, 0.95fr)
    minmax(420px, 1.05fr);

  gap: 100px;

  align-items: center;
}

/* ========================================================
    CONTENT
  ======================================================== */

.error-content {
  max-width: 620px;
}

.error-eyebrow {
  display: block;

  margin-bottom: 18px;

  color: #668198;

  font-size: 11px;

  font-weight: 800;

  letter-spacing: 0.22em;
}

.error-code {
  display: block;

  margin-left: -5px;

  font-size: clamp(110px, 12vw, 190px);

  line-height: 0.85;

  font-weight: 800;

  letter-spacing: -0.08em;

  color: #245f95;
}

.error-content h1 {
  margin: 35px 0 0;

  font-size: clamp(34px, 3.3vw, 52px);

  line-height: 1.25;

  font-weight: 800;

  letter-spacing: -0.05em;

  color: #172b3f;

  word-break: keep-all;
}

.error-content p {
  max-width: 520px;

  margin: 22px 0 0;

  color: #748290;

  font-size: 17px;

  line-height: 1.8;

  word-break: keep-all;
}

/* ========================================================
    ACTIONS
  ======================================================== */

.error-actions {
  display: flex;

  gap: 12px;

  margin-top: 38px;
}

.error-button {
  display: inline-flex;

  align-items: center;

  justify-content: center;

  min-width: 150px;

  height: 52px;

  padding: 0 24px;

  border-radius: 999px;

  font-size: 15px;

  font-weight: 700;

  letter-spacing: -0.03em;

  text-decoration: none;

  cursor: pointer;

  transition:
    background 0.2s ease,
    border-color 0.2s ease,
    color 0.2s ease,
    transform 0.2s ease;
}

.error-button:hover {
  transform: translateY(-2px);
}

.error-button--primary {
  border: 1px solid #245f95;

  background: #245f95;

  color: #fff;
}

.error-button--primary:hover {
  background: #1d507f;
}

.error-button--secondary {
  border: 1px solid #dce4eb;

  background: #fff;

  color: #33485d;
}

.error-button--secondary:hover {
  border-color: rgba(36, 95, 149, 0.3);

  color: #245f95;
}

/* ========================================================
    QUICK
  ======================================================== */

.error-quick {
  position: relative;
}

.error-quick__label {
  margin: 0 0 18px;

  color: #8294a3;

  font-size: 10px;

  font-weight: 800;

  letter-spacing: 0.2em;
}

.error-quick__grid {
  display: grid;

  grid-template-columns: 1fr;

  gap: 12px;
}

.error-quick__item {
  position: relative;

  display: grid;

  grid-template-columns: 52px minmax(0, 1fr);

  column-gap: 18px;

  padding: 25px 28px;

  border: 1px solid #e4eaf0;

  background: rgba(255, 255, 255, 0.84);

  color: #172b3f;

  text-decoration: none;

  transition:
    border-color 0.22s ease,
    transform 0.22s ease,
    box-shadow 0.22s ease;
}

.error-quick__item:hover {
  border-color: rgba(36, 95, 149, 0.28);

  transform: translateX(5px);

  box-shadow: 0 18px 45px rgba(27, 57, 86, 0.07);
}

.error-quick__item > span {
  grid-row: 1 / span 2;

  color: #9baab6;

  font-size: 11px;

  font-weight: 700;

  letter-spacing: 0.12em;
}

.error-quick__item strong {
  font-size: 19px;

  line-height: 1.35;

  font-weight: 750;

  letter-spacing: -0.04em;
}

.error-quick__item small {
  margin-top: 7px;

  color: #7c8995;

  font-size: 13px;

  line-height: 1.6;

  word-break: keep-all;
}

/* ========================================================
    WATERMARK
  ======================================================== */

.error-watermark {
  position: absolute;

  right: -30px;

  bottom: -40px;

  z-index: 0;

  color: rgba(36, 95, 149, 0.035);

  font-size: clamp(180px, 25vw, 430px);

  line-height: 0.8;

  font-weight: 900;

  letter-spacing: -0.08em;

  pointer-events: none;

  user-select: none;
}

/* ========================================================
    LAPTOP
  ======================================================== */

@include laptop-down {
  .error-header__inner {
    min-height: 76px;
  }

  .error-logo {
    width: 170px;

    height: 38px;
  }

  .error-main {
    min-height: calc(100dvh - 77px);

    padding: 65px 0;
  }

  .error-main__inner {
    grid-template-columns: 1fr;

    gap: 55px;
  }

  .error-content {
    max-width: 700px;
  }

  .error-quick {
    max-width: 700px;
  }
}

/* ========================================================
    MOBILE
  ======================================================== */

@include mobile {
  .error-header__inner {
    min-height: 70px;
  }

  .error-logo {
    width: 150px;

    height: 34px;
  }

  .error-main {
    align-items: flex-start;

    min-height: calc(100dvh - 71px);

    padding: 55px 0 90px;
  }

  .error-main__inner {
    gap: 48px;
  }

  .error-eyebrow {
    margin-bottom: 14px;

    font-size: 9px;
  }

  .error-code {
    font-size: 104px;
  }

  .error-content h1 {
    margin-top: 26px;

    font-size: 30px;
  }

  .error-content p {
    margin-top: 16px;

    font-size: 14px;

    line-height: 1.75;
  }

  .error-actions {
    flex-direction: column;

    margin-top: 30px;
  }

  .error-button {
    width: 100%;

    height: 50px;
  }

  .error-quick__item {
    grid-template-columns: 38px minmax(0, 1fr);

    column-gap: 12px;

    padding: 20px 18px;
  }

  .error-quick__item strong {
    font-size: 17px;
  }

  .error-quick__item small {
    font-size: 12px;
  }

  .error-watermark {
    right: -30px;

    bottom: 10px;

    font-size: 170px;
  }
}
</style>
