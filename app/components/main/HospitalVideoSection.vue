<template>
  <section ref="sectionRef" class="hospital-video-section">
    <div class="hospital-video-section__inner">
      <!-- =========================
           INTRO
      ========================== -->
      <div class="hospital-video-section__intro">
        <div class="hospital-video-section__eyebrow">
          <span class="hospital-video-section__line" />
          <span>자이비뇨의학과병원</span>
        </div>

        <div class="hospital-video-section__heading-wrap">
          <h2 class="hospital-video-section__heading">
            더 나은 진료를 위해
            <br />
            <strong>공간과 과정까지 고민합니다.</strong>
          </h2>

          <p class="hospital-video-section__description">
            자이비뇨의학과병원의 진료 환경과
            <br class="desktop-only" />
            의료진의 진료 과정을 영상으로 만나보세요.
          </p>
        </div>
      </div>

      <!-- =========================
           VIDEO
      ========================== -->
      <div class="hospital-video-section__video-wrap">
        <video
          ref="videoRef"
          class="hospital-video-section__video"
          autoplay
          muted
          loop
          playsinline
          preload="metadata"
          poster="/images/main/hospital-video-poster.webp"
          aria-label="자이비뇨의학과병원 소개 영상"
        >
          <source src="/videos/hospital-intro.mp4" type="video/mp4" />

          브라우저가 동영상 재생을 지원하지 않습니다.
        </video>

        <div class="hospital-video-section__overlay" />

        <div class="hospital-video-section__video-label">
          <span>자이</span>
          <strong>비뇨의학과병원</strong>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue'

const sectionRef = ref<HTMLElement | null>(null)
const videoRef = ref<HTMLVideoElement | null>(null)

let observer: IntersectionObserver | null = null

onMounted(() => {
  if (!sectionRef.value || !videoRef.value) return

  observer = new IntersectionObserver(
    ([entry]) => {
      const video = videoRef.value

      if (!video) return

      if (entry?.isIntersecting) {
        void video.play().catch(() => {})
      } else {
        video.pause()
      }
    },
    {
      threshold: 0.25
    }
  )

  observer.observe(sectionRef.value)
})

onBeforeUnmount(() => {
  observer?.disconnect()
  observer = null
})
</script>

<style scoped lang="scss">
.hospital-video-section {
  position: relative;
  overflow: hidden;
  padding: 140px 0;
  background: #f7f7f5;

  &__inner {
    width: min(1440px, calc(100% - 96px));
    margin: 0 auto;
  }

  /* ========================================================
     INTRO
  ======================================================== */

  &__intro {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    gap: 80px;
    margin-bottom: 56px;
  }

  &__eyebrow {
    display: flex;
    align-items: center;
    gap: 14px;
    flex-shrink: 0;

    color: #7d7d78;
    font-size: 12px;
    font-weight: 600;
    line-height: 1;
    letter-spacing: 0.18em;
  }

  &__line {
    display: block;
    width: 36px;
    height: 1px;
    background: #9b9b95;
  }

  &__heading-wrap {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    gap: 80px;
    width: 100%;
    max-width: 1050px;
  }

  &__heading {
    margin: 0;

    color: #171717;
    font-size: clamp(36px, 3vw, 56px);
    font-weight: 300;
    line-height: 1.25;
    letter-spacing: -0.045em;

    strong {
      font-weight: 600;
    }
  }

  &__description {
    flex-shrink: 0;
    margin: 0 0 4px;

    color: #6e6e68;
    font-size: 16px;
    font-weight: 400;
    line-height: 1.8;
    letter-spacing: -0.025em;
  }

  /* ========================================================
     VIDEO
  ======================================================== */

  &__video-wrap {
    position: relative;
    overflow: hidden;

    width: 100%;
    aspect-ratio: 16 / 8.5;

    background: #111;
    border-radius: 2px;
  }

  &__video {
    position: absolute;
    inset: 0;

    display: block;

    width: 100%;
    height: 100%;

    object-fit: cover;
    object-position: center;
  }

  &__overlay {
    position: absolute;
    inset: 0;
    z-index: 1;

    pointer-events: none;

    background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.04) 0%,
      rgba(0, 0, 0, 0) 45%,
      rgba(0, 0, 0, 0.32) 100%
    );
  }

  &__video-label {
    position: absolute;
    right: 42px;
    bottom: 36px;
    z-index: 2;

    display: flex;
    align-items: center;
    gap: 12px;

    color: rgba(255, 255, 255, 0.92);

    span {
      font-size: 13px;
      font-weight: 700;
      letter-spacing: 0.2em;
    }

    strong {
      padding-left: 12px;
      border-left: 1px solid rgba(255, 255, 255, 0.35);

      font-size: 11px;
      font-weight: 400;
      letter-spacing: 0.15em;
    }
  }
}

/* ========================================================
   TABLET
======================================================== */

@media (max-width: 1100px) {
  .hospital-video-section {
    padding: 110px 0;

    &__inner {
      width: min(100% - 64px, 1440px);
    }

    &__intro {
      display: block;
      margin-bottom: 42px;
    }

    &__eyebrow {
      margin-bottom: 28px;
    }

    &__heading-wrap {
      align-items: flex-start;
    }

    &__description {
      margin-top: 7px;
    }

    &__video-wrap {
      aspect-ratio: 16 / 9;
    }
  }
}

/* ========================================================
   MOBILE
======================================================== */

@media (max-width: 767px) {
  .hospital-video-section {
    padding: 72px 0;

    &__inner {
      width: calc(100% - 32px);
    }

    &__intro {
      margin-bottom: 28px;
    }

    &__eyebrow {
      gap: 10px;
      margin-bottom: 20px;

      font-size: 10px;
      letter-spacing: 0.12em;
    }

    &__line {
      width: 24px;
    }

    &__heading-wrap {
      display: block;
    }

    &__heading {
      font-size: 30px;
      line-height: 1.35;
      letter-spacing: -0.05em;
    }

    &__description {
      margin-top: 18px;

      font-size: 14px;
      line-height: 1.7;
    }

    /* 핵심: 모바일도 영상 원본 비율 유지 */
    &__video-wrap {
      width: 100%;
      aspect-ratio: 16 / 9;

      border-radius: 2px;
      background: #111;
    }

    &__video {
      width: 100%;
      height: 100%;

      object-fit: cover;
      object-position: center center;
    }

    &__video-label {
      right: 14px;
      bottom: 12px;
      left: auto;

      gap: 8px;

      span {
        font-size: 9px;
        letter-spacing: 0.15em;
      }

      strong {
        padding-left: 8px;

        font-size: 8px;
        letter-spacing: 0.08em;
      }
    }
  }

  .desktop-only {
    display: none;
  }
}
</style>
