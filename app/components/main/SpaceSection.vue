<template>
  <section ref="sectionRef" class="space-section">
    <!-- =====================================================
           Header
      ====================================================== -->
    <div class="space-header">
      <div class="space-header-left">
        <div class="space-eyebrow">
          <span class="space-eyebrow-line" />
          <span>SPACE</span>
        </div>

        <h2 class="space-title">
          편안한 진료를 위한
          <br />
          <strong>자이의 공간</strong>
        </h2>
      </div>

      <div class="space-header-right">
        <p class="space-description">
          환자분들이 보다 편안하고 쾌적하게
          <br class="desktop-only" />
          진료받으실 수 있도록 세심하게 준비했습니다.
        </p>

        <div class="space-navigation">
          <button
            type="button"
            class="space-nav-button"
            aria-label="이전 이미지"
            :disabled="activeIndex === 0"
            @click="slidePrev"
          >
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M15 5L8 12L15 19"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>

          <button
            type="button"
            class="space-nav-button"
            aria-label="다음 이미지"
            :disabled="activeIndex === spaces.length - 1"
            @click="slideNext"
          >
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M9 5L16 12L9 19"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>

    <!-- =====================================================
           Gallery
      ====================================================== -->
    <div class="space-gallery-wrap">
      <Swiper
        class="space-swiper"
        :slides-per-view="1.12"
        :space-between="12"
        :speed="850"
        :grab-cursor="true"
        :watch-slides-progress="true"
        :resistance-ratio="0.65"
        :breakpoints="swiperBreakpoints"
        @swiper="handleSwiper"
        @slide-change="handleSlideChange"
      >
        <SwiperSlide v-for="(space, index) in spaces" :key="space.image" class="space-slide">
          <article class="space-card" :class="{ active: activeIndex === index }">
            <div class="space-image-wrap">
              <img
                :src="space.image"
                :alt="space.alt"
                class="space-image"
                draggable="false"
                loading="lazy"
              />

              <div class="space-image-overlay" />

              <div class="space-image-number">
                {{ String(index + 1).padStart(2, '0') }}
              </div>

              <div class="space-image-caption">
                <span>{{ space.english }}</span>
                <strong>{{ space.title }}</strong>
              </div>
            </div>
          </article>
        </SwiperSlide>
      </Swiper>
    </div>

    <!-- =====================================================
           Bottom
      ====================================================== -->
    <div class="space-bottom">
      <div class="space-pagination">
        <span class="space-pagination-current">
          {{ String(activeIndex + 1).padStart(2, '0') }}
        </span>

        <span class="space-pagination-divider" />

        <span class="space-pagination-total">
          {{ String(spaces.length).padStart(2, '0') }}
        </span>
      </div>

      <div class="space-progress">
        <div
          class="space-progress-bar"
          :style="{
            width: `${((activeIndex + 1) / spaces.length) * 100}%`
          }"
        />
      </div>

      <div class="space-drag-guide">
        <span>DRAG</span>

        <svg viewBox="0 0 40 10" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1 5H39M35 1L39 5L35 9" stroke="currentColor" stroke-width="1" />
        </svg>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import type { Swiper as SwiperType } from 'swiper'

type SpaceItem = {
  image: string
  title: string
  english: string
  alt: string
}

const spaces: SpaceItem[] = [
  {
    image: '/images/space/space-01.webp',
    title: '병원 내부',
    english: 'ZAI UROLOGY',
    alt: '자이비뇨의학과 병원 내부 전경'
  },
  {
    image: '/images/space/space-03.webp',
    title: '안내 데스크',
    english: 'RECEPTION',
    alt: '자이비뇨의학과 안내 및 접수 데스크'
  },
  {
    image: '/images/space/space-02.webp',
    title: '대기 공간',
    english: 'LOUNGE',
    alt: '자이비뇨의학과 환자 대기 공간'
  },
  {
    image: '/images/space/space-11.webp',
    title: '원장님 진료실',
    english: "DOCTOR'S OFFICE",
    alt: '자이비뇨의학과 원장 진료실'
  },
  {
    image: '/images/space/space-10.webp',
    title: '검사 구역',
    english: 'EXAMINATION AREA',
    alt: '자이비뇨의학과 검사 구역'
  },
  {
    image: '/images/space/space-07.webp',
    title: '방광경 검사실',
    english: 'CYSTOSCOPY ROOM',
    alt: '자이비뇨의학과 방광경 검사실'
  },
  {
    image: '/images/space/space-12.webp',
    title: '초음파 검사실',
    english: 'ULTRASOUND ROOM',
    alt: '자이비뇨의학과 초음파 검사실'
  },
  {
    image: '/images/space/space-08.webp',
    title: '수술실',
    english: 'OPERATING ROOM',
    alt: '자이비뇨의학과 수술실'
  },
  {
    image: '/images/space/space-06.webp',
    title: '입원실 복도',
    english: 'INPATIENT HALLWAY',
    alt: '자이비뇨의학과 입원실 복도'
  },
  {
    image: '/images/space/space-09.webp',
    title: '입원실',
    english: 'PATIENT ROOM',
    alt: '자이비뇨의학과 입원실 내부'
  }
]

const sectionRef = ref<HTMLElement | null>(null)

const swiperInstance = ref<SwiperType | null>(null)
const activeIndex = ref(0)

const swiperBreakpoints = {
  0: {
    slidesPerView: 1.12,
    spaceBetween: 12
  },

  768: {
    slidesPerView: 1.3,
    spaceBetween: 20
  },

  1200: {
    slidesPerView: 1.42,
    spaceBetween: 24
  },

  1600: {
    slidesPerView: 1.5,
    spaceBetween: 28
  }
}

const handleSwiper = (swiper: SwiperType) => {
  swiperInstance.value = swiper
  activeIndex.value = swiper.activeIndex
}

const handleSlideChange = (swiper: SwiperType) => {
  activeIndex.value = swiper.activeIndex
}

const slidePrev = () => {
  swiperInstance.value?.slidePrev()
}

const slideNext = () => {
  swiperInstance.value?.slideNext()
}

/* =========================================================
     Entrance animation
  ========================================================= */

let observer: IntersectionObserver | null = null

onMounted(() => {
  observer = new IntersectionObserver(
    ([entry]) => {
      if (!entry?.isIntersecting) return

      sectionRef.value?.classList.add('is-visible')

      observer?.disconnect()
      observer = null
    },
    {
      threshold: 0.15
    }
  )

  if (sectionRef.value) {
    observer.observe(sectionRef.value)
  }
})

onBeforeUnmount(() => {
  observer?.disconnect()
  swiperInstance.value = null
})
</script>

<style scoped>
/* =========================================================
     Section
  ========================================================= */

.space-section {
  position: relative;
  overflow: hidden;

  padding: 150px 0 135px;

  background: #f6f5f2;
  color: #161616;
}

/* =========================================================
     Header
  ========================================================= */

.space-header {
  width: min(100% - 96px, 1680px);
  margin: 0 auto 64px;

  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 80px;
}

.space-header-left {
  opacity: 0;
  transform: translateY(28px);

  transition:
    opacity 0.9s cubic-bezier(0.22, 1, 0.36, 1),
    transform 0.9s cubic-bezier(0.22, 1, 0.36, 1);
}

.space-section.is-visible .space-header-left {
  opacity: 1;
  transform: translateY(0);
}

.space-eyebrow {
  display: flex;
  align-items: center;
  gap: 14px;

  margin-bottom: 28px;

  font-size: 11px;
  font-weight: 600;
  line-height: 1;
  letter-spacing: 0.24em;

  color: #a58d6f;
}

.space-eyebrow-line {
  display: block;

  width: 28px;
  height: 1px;

  background: currentColor;
}

.space-title {
  margin: 0;

  font-size: clamp(42px, 3.5vw, 66px);

  font-weight: 300;
  line-height: 1.25;
  letter-spacing: -0.045em;
}

.space-title strong {
  font-weight: 600;
}

.space-header-right {
  display: flex;
  align-items: flex-end;
  gap: 68px;

  opacity: 0;
  transform: translateY(24px);

  transition:
    opacity 0.9s 0.16s cubic-bezier(0.22, 1, 0.36, 1),
    transform 0.9s 0.16s cubic-bezier(0.22, 1, 0.36, 1);
}

.space-section.is-visible .space-header-right {
  opacity: 1;
  transform: translateY(0);
}

.space-description {
  margin: 0;

  font-size: 15px;
  font-weight: 400;
  line-height: 1.9;
  letter-spacing: -0.025em;

  color: #77736e;
}

/* =========================================================
     Navigation
  ========================================================= */

.space-navigation {
  display: flex;
  gap: 8px;
}

.space-nav-button {
  width: 54px;
  height: 54px;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 0;

  border: 1px solid rgba(0, 0, 0, 0.14);
  border-radius: 50%;

  background: transparent;
  color: #161616;

  cursor: pointer;

  transition:
    color 0.3s ease,
    background-color 0.3s ease,
    border-color 0.3s ease,
    opacity 0.3s ease;
}

.space-nav-button svg {
  width: 19px;
  height: 19px;
}

.space-nav-button:hover:not(:disabled) {
  border-color: #1a1a1a;

  background: #1a1a1a;
  color: #ffffff;
}

.space-nav-button:disabled {
  cursor: default;
  opacity: 0.3;
}

/* =========================================================
     Gallery
  ========================================================= */

.space-gallery-wrap {
  width: 100%;

  opacity: 0;
  transform: translateY(40px);

  transition:
    opacity 1.1s 0.2s cubic-bezier(0.22, 1, 0.36, 1),
    transform 1.1s 0.2s cubic-bezier(0.22, 1, 0.36, 1);
}

.space-section.is-visible .space-gallery-wrap {
  opacity: 1;
  transform: translateY(0);
}

/*
    swiper 자체에 좌측 여백을 주면
    첫 번째 사진이 header와 같은 시작선에서 시작함
  */
.space-swiper {
  overflow: visible;

  padding-left: max(48px, calc((100vw - 1680px) / 2));
  padding-right: 48px;
}

/*
    Swiper의 실제 wrapper 폭 계산에
    padding이 포함되면서 어긋나는 걸 방지
  */
.space-swiper :deep(.swiper-wrapper) {
  box-sizing: border-box;
  align-items: stretch;
}

.space-slide {
  height: auto;
}

.space-card {
  width: 100%;
  height: 100%;
}

/* =========================================================
     Image
  ========================================================= */

.space-image-wrap {
  position: relative;
  overflow: hidden;

  width: 100%;
  aspect-ratio: 16 / 9;

  background: #e7e5e1;
}

.space-image {
  width: 100%;
  height: 100%;

  display: block;

  object-fit: cover;

  pointer-events: none;
  user-select: none;

  transform: scale(1.035);

  transition:
    transform 1.1s cubic-bezier(0.22, 1, 0.36, 1),
    filter 0.7s ease;
}

/*
    활성 슬라이드가 아닐 때는 살짝 눌러줘서
    현재 보고 있는 사진이 더 잘 보이게
  */
.space-slide:not(.swiper-slide-active) .space-image {
  filter: saturate(0.82) brightness(0.84);
}

/*
    activeIndex뿐 아니라 swiper active 상태에도 대응
  */
.space-slide.swiper-slide-active .space-image,
.space-card.active .space-image {
  transform: scale(1);

  filter: saturate(1) brightness(1);
}

.space-image-overlay {
  position: absolute;
  inset: 0;

  pointer-events: none;

  background: linear-gradient(180deg, rgba(0, 0, 0, 0.02) 45%, rgba(0, 0, 0, 0.36) 100%);

  opacity: 0.85;
}

/* =========================================================
     Image info
  ========================================================= */

.space-image-number {
  position: absolute;
  top: 34px;
  right: 38px;

  font-family: Georgia, 'Times New Roman', serif;

  font-size: 15px;
  font-weight: 400;
  letter-spacing: 0.12em;

  color: rgba(255, 255, 255, 0.9);

  pointer-events: none;
}

.space-image-caption {
  position: absolute;
  left: 42px;
  bottom: 38px;

  display: flex;
  flex-direction: column;
  gap: 10px;

  color: #ffffff;

  opacity: 0;
  transform: translateY(14px);

  pointer-events: none;

  transition:
    opacity 0.45s ease,
    transform 0.6s cubic-bezier(0.22, 1, 0.36, 1);
}

.space-slide.swiper-slide-active .space-image-caption,
.space-card.active .space-image-caption {
  opacity: 1;
  transform: translateY(0);
}

.space-image-caption span {
  font-size: 10px;
  font-weight: 500;
  line-height: 1;
  letter-spacing: 0.22em;

  color: rgba(255, 255, 255, 0.65);
}

.space-image-caption strong {
  font-size: 25px;
  font-weight: 500;
  line-height: 1.2;
  letter-spacing: -0.035em;
}

/* =========================================================
     Bottom
  ========================================================= */

.space-bottom {
  width: min(100% - 96px, 1680px);

  margin: 36px auto 0;

  display: grid;
  grid-template-columns:
    auto
    minmax(180px, 440px)
    1fr;

  align-items: center;
  gap: 28px;

  opacity: 0;

  transition: opacity 0.8s 0.45s ease;
}

.space-section.is-visible .space-bottom {
  opacity: 1;
}

/* =========================================================
     Pagination
  ========================================================= */

.space-pagination {
  display: flex;
  align-items: center;
  gap: 9px;

  font-family: Georgia, 'Times New Roman', serif;

  font-size: 13px;
}

.space-pagination-current {
  color: #161616;
}

.space-pagination-total {
  color: #a8a49e;
}

.space-pagination-divider {
  width: 18px;
  height: 1px;

  background: #c6c2bc;
}

/* =========================================================
     Progress
  ========================================================= */

.space-progress {
  position: relative;

  width: 100%;
  height: 1px;

  overflow: hidden;

  background: rgba(0, 0, 0, 0.13);
}

.space-progress-bar {
  position: absolute;
  top: 0;
  left: 0;

  height: 100%;

  background: #1a1a1a;

  transition: width 0.5s cubic-bezier(0.22, 1, 0.36, 1);
}

/* =========================================================
     Drag Guide
  ========================================================= */

.space-drag-guide {
  justify-self: end;

  display: flex;
  align-items: center;
  gap: 14px;

  font-size: 9px;
  font-weight: 600;
  letter-spacing: 0.22em;

  color: #88847e;
}

.space-drag-guide svg {
  width: 40px;
  height: 10px;
}

/* =========================================================
     Tablet
  ========================================================= */

@media (max-width: 1200px) {
  .space-section {
    padding: 120px 0 110px;
  }

  .space-header {
    width: calc(100% - 64px);

    gap: 40px;
  }

  .space-header-right {
    gap: 36px;
  }

  .space-swiper {
    padding-left: 32px;
    padding-right: 32px;
  }

  .space-bottom {
    width: calc(100% - 64px);
  }
}

/* =========================================================
     Mobile
  ========================================================= */

@media (max-width: 767px) {
  .space-section {
    padding: 88px 0 80px;
  }

  .space-header {
    width: calc(100% - 40px);

    margin-bottom: 38px;

    display: block;
  }

  .space-eyebrow {
    margin-bottom: 20px;

    font-size: 9px;
  }

  .space-eyebrow-line {
    width: 22px;
  }

  .space-title {
    font-size: 36px;
    line-height: 1.3;
  }

  .space-header-right {
    margin-top: 26px;

    display: block;
  }

  .space-description {
    font-size: 14px;
    line-height: 1.75;
  }

  .desktop-only {
    display: none;
  }

  .space-navigation {
    display: none;
  }

  .space-swiper {
    padding-left: 20px;
    padding-right: 20px;
  }

  .space-image-wrap {
    aspect-ratio: 4 / 5;
  }

  .space-image-number {
    top: 20px;
    right: 20px;

    font-size: 12px;
  }

  .space-image-caption {
    left: 22px;
    bottom: 23px;

    gap: 8px;
  }

  .space-image-caption span {
    font-size: 8px;
  }

  .space-image-caption strong {
    font-size: 21px;
  }

  .space-bottom {
    width: calc(100% - 40px);

    margin-top: 25px;

    grid-template-columns:
      auto
      minmax(0, 1fr);

    gap: 20px;
  }

  .space-progress {
    min-width: 0;
  }

  .space-drag-guide {
    display: none;
  }

  .space-pagination {
    font-size: 12px;
  }
}

/* =========================================================
     Small Mobile
  ========================================================= */

@media (max-width: 390px) {
  .space-title {
    font-size: 32px;
  }
}

/* =========================================================
     Reduced Motion
  ========================================================= */

@media (prefers-reduced-motion: reduce) {
  .space-header-left,
  .space-header-right,
  .space-gallery-wrap,
  .space-bottom,
  .space-image,
  .space-image-caption,
  .space-progress-bar {
    transition: none;
  }
}
</style>
