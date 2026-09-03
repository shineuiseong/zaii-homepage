<!-- components/main/MainHero.vue -->
<template>
  <section ref="heroRef" class="main-hero" aria-label="자이비뇨의학과 주요 소개">
    <!-- =====================================================
        SWIPER
      ====================================================== -->
    <Swiper
      class="main-hero__swiper"
      :modules="swiperModules"
      :slides-per-view="1"
      :loop="true"
      :speed="850"
      :grab-cursor="true"
      :allow-touch-move="true"
      :simulate-touch="true"
      :touch-ratio="1"
      :threshold="8"
      :resistance="true"
      :resistance-ratio="0.75"
      :watch-slides-progress="true"
      :autoplay="autoplayOptions"
      @swiper="handleSwiper"
      @slide-change="handleSlideChange"
    >
      <SwiperSlide v-for="slide in slides" :key="slide.id" class="main-hero__slide">
        <!-- =================================================
            IMAGE
          ================================================== -->
        <div class="main-hero__media">
          <img
            :src="slide.image"
            :alt="slide.alt"
            class="main-hero__image"
            :style="{
              '--hero-position-desktop': slide.desktopPosition,
              '--hero-position-tablet': slide.tabletPosition,
              '--hero-position-mobile': slide.mobilePosition
            }"
            draggable="false"
          />
        </div>

        <!-- =================================================
            OVERLAY
          ================================================== -->
        <div class="main-hero__overlay" />

        <div class="main-hero__gradient" />

        <!-- =================================================
            CONTENT
          ================================================== -->
        <div class="container main-hero__content">
          <div class="main-hero__copy">
            <p class="main-hero__eyebrow">
              {{ slide.eyebrow }}
            </p>

            <h1 class="main-hero__title">
              <template v-for="(line, lineIndex) in slide.title" :key="`${slide.id}-${lineIndex}`">
                <span
                  :class="{
                    'main-hero__title-accent': line.accent
                  }"
                >
                  {{ line.text }}
                </span>

                <br v-if="lineIndex < slide.title.length - 1" />
              </template>
            </h1>

            <p class="main-hero__description">
              {{ slide.description }}
            </p>

            <!-- =================================================
                ACTIONS
              ================================================== -->
            <div class="main-hero__actions">
              <NuxtLink
                :to="slide.primary.href"
                class="main-hero__button main-hero__button--primary"
                @pointerdown.stop
              >
                <span>
                  {{ slide.primary.label }}
                </span>

                <Icon name="lucide:arrow-up-right" class="main-hero__button-icon" />
              </NuxtLink>

              <NuxtLink
                v-if="slide.secondary"
                :to="slide.secondary.href"
                class="main-hero__button main-hero__button--ghost"
                @pointerdown.stop
              >
                {{ slide.secondary.label }}
              </NuxtLink>
            </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>

    <!-- =====================================================
        BOTTOM UI
      ====================================================== -->
    <div class="main-hero__bottom">
      <div class="container main-hero__bottom-inner">
        <!-- =================================================
            PAGINATION
          ================================================== -->
        <div class="main-hero__pagination">
          <button
            v-for="(_, index) in slides"
            :key="index"
            type="button"
            class="main-hero__dot"
            :class="{
              'is-active': currentIndex === index
            }"
            :aria-label="`${index + 1}번째 배너 보기`"
            @pointerdown.stop
            @click.stop="goToSlide(index)"
          >
            <span />
          </button>
        </div>

        <!-- =================================================
            CONTROLS
          ================================================== -->
        <div class="main-hero__controls">
          <button
            type="button"
            class="main-hero__control"
            aria-label="이전 배너"
            @pointerdown.stop
            @click.stop="prevSlide"
          >
            <Icon name="lucide:arrow-left" />
          </button>

          <div class="main-hero__counter">
            <strong>
              {{ displayCurrent }}
            </strong>

            <span class="main-hero__counter-line" />

            <small>
              {{ displayTotal }}
            </small>
          </div>

          <button
            type="button"
            class="main-hero__control"
            aria-label="다음 배너"
            @pointerdown.stop
            @click.stop="nextSlide"
          >
            <Icon name="lucide:arrow-right" />
          </button>
        </div>
      </div>
    </div>

    <!-- =====================================================
        SCROLL
      ====================================================== -->
    <button
      type="button"
      class="main-hero__scroll"
      aria-label="다음 콘텐츠로 이동"
      @pointerdown.stop
      @click.stop="scrollNextSection"
    >
      <span>SCROLL</span>

      <span class="main-hero__scroll-track">
        <span />
      </span>
    </button>
  </section>
</template>

<script setup lang="ts">
import { computed, ref, shallowRef } from 'vue'

import { Swiper, SwiperSlide } from 'swiper/vue'

import { Autoplay } from 'swiper/modules'

import type { Swiper as SwiperInstance } from 'swiper'

/* ========================================================
    TYPES
  ======================================================== */

type HeroTitleLine = {
  text: string
  accent?: boolean
}

type HeroLink = {
  label: string
  href: string
}

type HeroSlide = {
  id: string

  image: string
  alt: string

  eyebrow: string

  title: HeroTitleLine[]

  description: string

  primary: HeroLink

  secondary?: HeroLink

  desktopPosition: string

  tabletPosition: string

  mobilePosition: string
}

/* ========================================================
    SWIPER MODULES
  ======================================================== */

const swiperModules = [Autoplay]

/* ========================================================
    AUTOPLAY
  ======================================================== */

const autoplayOptions = {
  delay: 6000,

  /*
   * 사용자가 직접 넘긴 뒤에도
   * 자동재생 유지
   */
  disableOnInteraction: false,

  /*
   * PC에서 Hero에 마우스를 올리면
   * 잠시 자동재생 정지
   */
  pauseOnMouseEnter: true,

  waitForTransition: true
}

/* ========================================================
    SLIDES
  ======================================================== */

const slides: HeroSlide[] = [
  /* ======================================================
      01
    ====================================================== */
  {
    id: 'doctor',

    image: '/images/hero/hero-01.webp',

    alt: '자이비뇨의학과 변재상 원장',

    eyebrow: 'ZAII UROLOGY · BYUN JAE SANG',

    title: [
      {
        text: '변재상 원장님의',
        accent: true
      },
      {
        text: '한결같은 책임 진료.'
      }
    ],

    description:
      '처음 상담부터 치료 이후까지, 환자 한 분 한 분의 상태를 세심하게 살피며 꼭 필요한 치료 방향을 함께 찾아갑니다.',

    primary: {
      label: '변재상 원장 소개',
      href: '/hospital/medical-team'
    },

    secondary: {
      label: '병원 둘러보기',
      href: '/hospital/tour'
    },

    desktopPosition: 'center 40%',

    tabletPosition: 'center center',

    mobilePosition: '47% center'
  },

  /* ======================================================
      02
    ====================================================== */
  {
    id: 'prostate',

    image: '/images/hero/hero-02.webp',

    alt: '자이비뇨의학과 전립선 진료',

    eyebrow: 'PROSTATE TREATMENT CENTER',

    title: [
      {
        text: '전립선 치료의 기준,'
      },
      {
        text: '환자의 삶까지',
        accent: true
      },
      {
        text: '생각합니다.'
      }
    ],

    description:
      '전립선비대증의 증상과 상태를 정확히 살피고 유로리프트, 리줌 등 환자에게 적합한 치료 방법을 안내합니다.',

    primary: {
      label: '전립선비대증',
      href: '/prostate'
    },

    secondary: {
      label: '유로리프트 알아보기',
      href: '/urolift'
    },

    desktopPosition: 'center center',

    tabletPosition: '45% center',

    mobilePosition: '40% center'
  },

  /* ======================================================
      03
    ====================================================== */
  {
    id: 'procedure',

    image: '/images/hero/hero-03.webp',

    alt: '자이비뇨의학과 전립선 시술 의료진',

    eyebrow: 'SPECIALIZED PROSTATE CARE',

    title: [
      {
        text: '정확한 진단에서'
      },
      {
        text: '섬세한 치료까지,',
        accent: true
      },
      {
        text: '한 곳에서 이어집니다.'
      }
    ],

    description:
      '진단부터 시술, 회복 과정까지 환자의 상태를 세심하게 확인하며 체계적인 전립선 치료를 이어갑니다.',

    primary: {
      label: '전립선 치료 안내',
      href: '/prostate'
    },

    secondary: {
      label: '진료 안내',
      href: '/hospital/guide'
    },

    desktopPosition: 'center center',

    tabletPosition: 'center center',

    mobilePosition: '58% center'
  }
]

/* ========================================================
    REFERENCES
  ======================================================== */

const heroRef = ref<HTMLElement | null>(null)

const swiperInstance = shallowRef<SwiperInstance | null>(null)

/* ========================================================
    CURRENT INDEX
  ======================================================== */

const currentIndex = ref(0)

/* ========================================================
    COUNTER
  ======================================================== */

const displayCurrent = computed(() => {
  return String(currentIndex.value + 1).padStart(2, '0')
})

const displayTotal = computed(() => {
  return String(slides.length).padStart(2, '0')
})

/* ========================================================
    SWIPER READY
  ======================================================== */

function handleSwiper(swiper: SwiperInstance) {
  swiperInstance.value = swiper

  currentIndex.value = swiper.realIndex
}

/* ========================================================
    SLIDE CHANGE
  ======================================================== */

function handleSlideChange(swiper: SwiperInstance) {
  currentIndex.value = swiper.realIndex
}

/* ========================================================
    RESTART AUTOPLAY
  ======================================================== */

function restartAutoplay() {
  const swiper = swiperInstance.value

  if (!swiper) {
    return
  }

  swiper.autoplay?.stop()

  swiper.autoplay?.start()
}

/* ========================================================
    NEXT
  ======================================================== */

function nextSlide() {
  const swiper = swiperInstance.value

  if (!swiper) {
    return
  }

  swiper.slideNext(850)

  restartAutoplay()
}

/* ========================================================
    PREVIOUS
  ======================================================== */

function prevSlide() {
  const swiper = swiperInstance.value

  if (!swiper) {
    return
  }

  swiper.slidePrev(850)

  restartAutoplay()
}

/* ========================================================
    GO TO
  ======================================================== */

function goToSlide(index: number) {
  const swiper = swiperInstance.value

  if (!swiper) {
    return
  }

  if (index < 0 || index >= slides.length) {
    return
  }

  swiper.slideToLoop(index, 850)

  restartAutoplay()
}

/* ========================================================
    SCROLL NEXT
  ======================================================== */

function scrollNextSection() {
  if (!import.meta.client) {
    return
  }

  const nextElement = heroRef.value?.nextElementSibling

  if (nextElement instanceof HTMLElement) {
    nextElement.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })

    return
  }

  window.scrollTo({
    top: window.innerHeight,
    behavior: 'smooth'
  })
}
</script>

<style scoped lang="scss">
/* ========================================================
   HERO
======================================================== */

.main-hero {
  position: relative;

  width: 100%;

  /*
   * 중요
   *
   * 현재 layout/main 쪽에서 header 높이만큼
   * 공간이 확보되어 있기 때문에
   * Hero를 Header 뒤까지 끌어올린다.
   */
  margin-top: -88px;

  /*
   * Header까지 포함해서
   * 첫 화면 전체를 Hero로 사용
   */
  height: 100svh;

  min-height: 720px;

  overflow: hidden;

  background: #071321;

  color: #fff;
}

/* ========================================================
   SWIPER
======================================================== */

.main-hero__swiper {
  position: relative;

  z-index: 1;

  width: 100%;
  height: 100%;

  user-select: none;
  -webkit-user-select: none;

  -webkit-tap-highlight-color: transparent;
}

.main-hero__swiper :deep(.swiper-wrapper) {
  height: 100%;
}

.main-hero__swiper :deep(.swiper-slide) {
  width: 100%;
  height: 100%;
}

/* ========================================================
   SLIDE
======================================================== */

.main-hero__slide {
  position: relative;

  width: 100%;
  height: 100%;

  overflow: hidden;
}

/* ========================================================
   MEDIA
======================================================== */

.main-hero__media {
  position: absolute;

  inset: 0;

  width: 100%;
  height: 100%;

  overflow: hidden;

  background: #071321;
}

/* ========================================================
   IMAGE
======================================================== */

.main-hero__image {
  display: block;

  width: 100%;
  height: 100%;

  object-fit: cover;

  object-position: var(--hero-position-desktop, center center);

  pointer-events: none;

  user-select: none;
  -webkit-user-select: none;

  -webkit-user-drag: none;

  transform: scale(1.01);

  transition: transform 6s ease;
}

.main-hero__swiper :deep(.swiper-slide-active) .main-hero__image {
  transform: scale(1.035);
}

/* ========================================================
   OVERLAY
======================================================== */

.main-hero__overlay {
  position: absolute;

  inset: 0;

  z-index: 1;

  background: rgba(2, 10, 20, 0.15);

  pointer-events: none;
}

/* ========================================================
   GRADIENT
======================================================== */

.main-hero__gradient {
  position: absolute;

  inset: 0;

  z-index: 2;

  /*
   * 왼쪽 텍스트 가독성 확보.
   *
   * 상단은 Header도 같이 올라가기 때문에
   * 너무 밝은 사진에서도 흰 메뉴가 보이도록
   * 살짝 어둡게 처리.
   */
  background:
    linear-gradient(
      90deg,
      rgba(3, 11, 22, 0.76) 0%,
      rgba(3, 11, 22, 0.56) 30%,
      rgba(3, 11, 22, 0.2) 58%,
      rgba(3, 11, 22, 0.03) 100%
    ),
    linear-gradient(180deg, rgba(3, 10, 20, 0.28) 0%, rgba(3, 10, 20, 0.06) 18%, transparent 35%);

  pointer-events: none;
}

/* ========================================================
   CONTENT
======================================================== */

.main-hero__content {
  position: relative;

  z-index: 5;

  display: flex;
  align-items: center;

  height: 100%;

  /*
   * Hero 자체는 header 밑으로 들어가지만
   * 텍스트는 header와 겹치지 않도록 확보.
   */
  padding-top: 88px;

  padding-bottom: 110px;

  pointer-events: none;
}

/* ========================================================
   COPY
======================================================== */

.main-hero__copy {
  width: min(660px, 53vw);

  opacity: 0;

  transform: translateY(24px);

  transition:
    opacity 0.8s ease 0.15s,
    transform 0.8s ease 0.15s;
}

.main-hero__swiper :deep(.swiper-slide-active) .main-hero__copy {
  opacity: 1;

  transform: translateY(0);
}

/* ========================================================
   EYEBROW
======================================================== */

.main-hero__eyebrow {
  margin: 0 0 18px;

  color: rgba(255, 255, 255, 0.82);

  font-size: clamp(18px, 1.45vw, 25px);

  font-weight: 400;

  line-height: 1.4;

  letter-spacing: -0.035em;

  word-break: keep-all;
}

/* ========================================================
   TITLE
======================================================== */

.main-hero__title {
  margin: 0;

  color: #fff;

  font-size: clamp(45px, 4.1vw, 72px);

  font-weight: 500;

  line-height: 1.14;

  letter-spacing: -0.055em;

  word-break: keep-all;

  text-shadow:
    0 2px 18px rgba(0, 0, 0, 0.14),
    0 1px 5px rgba(0, 0, 0, 0.12);
}

.main-hero__title-accent {
  font-weight: 800;
}

/* ========================================================
   DESCRIPTION
======================================================== */

.main-hero__description {
  max-width: 580px;

  margin: 27px 0 0;

  color: rgba(255, 255, 255, 0.8);

  font-size: 16px;

  line-height: 1.8;

  letter-spacing: -0.03em;

  word-break: keep-all;
}

/* ========================================================
   ACTIONS
======================================================== */

.main-hero__actions {
  display: flex;
  align-items: center;

  gap: 10px;

  margin-top: 36px;

  pointer-events: auto;
}

/* ========================================================
   BUTTON
======================================================== */

.main-hero__button {
  display: inline-flex;
  align-items: center;
  justify-content: center;

  gap: 11px;

  min-width: 150px;
  height: 50px;

  padding: 0 21px;

  border-radius: 999px;

  font-size: 14px;
  font-weight: 700;

  line-height: 1;

  text-decoration: none;

  cursor: pointer;

  transition:
    background 0.2s ease,
    color 0.2s ease,
    border-color 0.2s ease,
    transform 0.2s ease;
}

.main-hero__button:hover {
  transform: translateY(-2px);
}

.main-hero__button--primary {
  background: #fff;

  color: #11294e;
}

.main-hero__button--primary:hover {
  background: #eef5ff;
}

.main-hero__button--ghost {
  border: 1px solid rgba(255, 255, 255, 0.38);

  background: rgba(255, 255, 255, 0.08);

  color: #fff;

  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
}

.main-hero__button--ghost:hover {
  border-color: rgba(255, 255, 255, 0.7);

  background: rgba(255, 255, 255, 0.14);
}

.main-hero__button-icon {
  width: 16px;
  height: 16px;
}

/* ========================================================
   BOTTOM
======================================================== */

.main-hero__bottom {
  position: absolute;

  right: 0;
  bottom: 38px;
  left: 0;

  z-index: 50;

  pointer-events: none;
}

.main-hero__bottom-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;

  pointer-events: none;
}

/* ========================================================
   PAGINATION
======================================================== */

.main-hero__pagination {
  position: relative;

  z-index: 52;

  display: flex;
  align-items: center;

  gap: 7px;

  pointer-events: auto;
}

.main-hero__dot {
  display: flex;
  align-items: center;

  width: 25px;
  height: 30px;

  padding: 0;

  border: 0;

  background: transparent;

  cursor: pointer;

  touch-action: manipulation;

  transition: width 0.25s ease;
}

.main-hero__dot span {
  display: block;

  width: 100%;
  height: 2px;

  border-radius: 999px;

  background: rgba(255, 255, 255, 0.32);

  transition: background 0.25s ease;
}

.main-hero__dot.is-active {
  width: 55px;
}

.main-hero__dot.is-active span {
  background: #fff;
}

/* ========================================================
   CONTROLS
======================================================== */

.main-hero__controls {
  position: relative;

  z-index: 52;

  display: flex;
  align-items: center;

  gap: 13px;

  pointer-events: auto;
}

.main-hero__control {
  display: flex;
  align-items: center;
  justify-content: center;

  width: 44px;
  height: 44px;

  padding: 0;

  border: 1px solid rgba(255, 255, 255, 0.36);

  border-radius: 999px;

  background: rgba(8, 15, 25, 0.18);

  color: #fff;

  cursor: pointer;

  touch-action: manipulation;

  pointer-events: auto;

  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);

  transition:
    border-color 0.2s ease,
    background 0.2s ease,
    transform 0.2s ease;
}

.main-hero__control:hover {
  border-color: rgba(255, 255, 255, 0.8);

  background: rgba(255, 255, 255, 0.15);

  transform: scale(1.05);
}

.main-hero__control:active {
  transform: scale(0.96);
}

.main-hero__control svg {
  width: 18px;
  height: 18px;

  pointer-events: none;
}

/* ========================================================
   COUNTER
======================================================== */

.main-hero__counter {
  display: flex;
  align-items: center;

  gap: 9px;

  min-width: 84px;

  pointer-events: none;
}

.main-hero__counter strong {
  color: #fff;

  font-size: 14px;
  font-weight: 800;
}

.main-hero__counter small {
  color: rgba(255, 255, 255, 0.56);

  font-size: 12px;
}

.main-hero__counter-line {
  width: 27px;
  height: 1px;

  background: rgba(255, 255, 255, 0.35);
}

/* ========================================================
   SCROLL
======================================================== */

.main-hero__scroll {
  position: absolute;

  bottom: 28px;
  left: 50%;

  z-index: 51;

  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 9px;

  padding: 0;

  border: 0;

  background: transparent;

  color: rgba(255, 255, 255, 0.65);

  cursor: pointer;

  pointer-events: auto;

  transform: translateX(-50%);
}

.main-hero__scroll > span:first-child {
  font-size: 8px;
  font-weight: 700;

  letter-spacing: 0.22em;
}

/* ========================================================
   SCROLL TRACK
======================================================== */

.main-hero__scroll-track {
  position: relative;

  display: block;

  width: 1px;
  height: 34px;

  overflow: hidden;

  background: rgba(255, 255, 255, 0.24);
}

.main-hero__scroll-track span {
  position: absolute;

  top: -60%;
  left: 0;

  width: 1px;
  height: 50%;

  background: #fff;

  animation: hero-scroll-line 1.7s ease-in-out infinite;
}

@keyframes hero-scroll-line {
  0% {
    top: -60%;
  }

  65% {
    top: 100%;
  }

  100% {
    top: 100%;
  }
}

/* ========================================================
   DESKTOP DOWN
======================================================== */

@include desktop-down {
  .main-hero {
    min-height: 680px;
  }

  .main-hero__copy {
    width: min(600px, 56vw);
  }

  .main-hero__title {
    font-size: clamp(42px, 4.1vw, 62px);
  }

  .main-hero__description {
    max-width: 520px;

    font-size: 15px;
  }
}

/* ========================================================
   LAPTOP / TABLET
======================================================== */

@include laptop-down {
  .main-hero {
    /*
     * Header 76px 공간을
     * 다시 위로 당긴다.
     */
    margin-top: -76px;

    height: 100svh;

    min-height: 650px;
  }

  .main-hero__image {
    object-position: var(--hero-position-tablet, center center);
  }

  .main-hero__content {
    padding-top: 76px;

    padding-bottom: 100px;
  }

  .main-hero__copy {
    width: min(580px, 68vw);
  }

  .main-hero__title {
    font-size: clamp(39px, 5.5vw, 56px);
  }
}

/* ========================================================
   MOBILE
======================================================== */

@include mobile {
  .main-hero {
    /*
     * Mobile Header 70px 공간을
     * Hero가 먹도록 위로 이동
     */
    margin-top: -70px;

    height: 100svh;

    min-height: 620px;
  }

  /* ======================================================
     IMAGE
  ====================================================== */

  .main-hero__image {
    object-position: var(--hero-position-mobile, center center);

    transform: scale(1.005);
  }

  .main-hero__swiper :deep(.swiper-slide-active) .main-hero__image {
    transform: scale(1.02);
  }

  /* ======================================================
     OVERLAY
  ====================================================== */

  .main-hero__overlay {
    background: rgba(4, 12, 22, 0.08);
  }

  /* ======================================================
     GRADIENT
  ====================================================== */

  .main-hero__gradient {
    background: linear-gradient(
      180deg,
      rgba(3, 10, 20, 0.2) 0%,
      rgba(3, 10, 20, 0.06) 22%,
      rgba(3, 10, 20, 0.1) 39%,
      rgba(3, 10, 20, 0.43) 56%,
      rgba(3, 10, 20, 0.84) 78%,
      rgba(3, 10, 20, 0.96) 100%
    );
  }

  /* ======================================================
     CONTENT
  ====================================================== */

  .main-hero__content {
    align-items: flex-end;

    padding-top: 70px;

    padding-bottom: 108px;
  }

  .main-hero__copy {
    width: 100%;
  }

  /* ======================================================
     EYEBROW
  ====================================================== */

  .main-hero__eyebrow {
    margin-bottom: 11px;

    font-size: 14px;

    font-weight: 500;

    line-height: 1.4;

    letter-spacing: -0.03em;
  }

  /* ======================================================
     TITLE
  ====================================================== */

  .main-hero__title {
    font-size: clamp(33px, 10vw, 45px);

    line-height: 1.14;

    letter-spacing: -0.06em;
  }

  /* ======================================================
     DESCRIPTION
  ====================================================== */

  .main-hero__description {
    display: -webkit-box;

    overflow: hidden;

    max-width: 93%;

    margin-top: 16px;

    font-size: 13px;

    line-height: 1.6;

    -webkit-line-clamp: 2;

    -webkit-box-orient: vertical;
  }

  /* ======================================================
     ACTIONS
  ====================================================== */

  .main-hero__actions {
    gap: 7px;

    margin-top: 21px;
  }

  .main-hero__button {
    min-width: 0;

    height: 44px;

    padding: 0 15px;

    font-size: 12px;
  }

  /* ======================================================
     BOTTOM
  ====================================================== */

  .main-hero__bottom {
    bottom: 22px;
  }

  /* ======================================================
     PAGINATION
  ====================================================== */

  .main-hero__pagination {
    gap: 4px;
  }

  .main-hero__dot {
    width: 17px;

    height: 28px;
  }

  .main-hero__dot.is-active {
    width: 35px;
  }

  /* ======================================================
     CONTROLS
  ====================================================== */

  .main-hero__control {
    display: none;
  }

  /* ======================================================
     COUNTER
  ====================================================== */

  .main-hero__counter {
    min-width: 64px;

    gap: 6px;
  }

  .main-hero__counter-line {
    width: 19px;
  }

  /* ======================================================
     SCROLL
  ====================================================== */

  .main-hero__scroll {
    display: none;
  }
}

/* ========================================================
   SMALL MOBILE
======================================================== */

@media (max-width: 380px) {
  .main-hero {
    min-height: 600px;
  }

  .main-hero__content {
    padding-top: 70px;

    padding-bottom: 98px;
  }

  .main-hero__title {
    font-size: 31px;
  }

  .main-hero__description {
    font-size: 12px;
  }

  .main-hero__button {
    height: 41px;

    padding: 0 12px;
  }
}

/* ========================================================
   LOW HEIGHT DESKTOP
======================================================== */

@media (min-width: 1025px) and (max-height: 760px) {
  .main-hero {
    min-height: 650px;
  }

  .main-hero__content {
    padding-top: 88px;

    padding-bottom: 90px;
  }

  .main-hero__eyebrow {
    margin-bottom: 15px;
  }

  .main-hero__description {
    margin-top: 20px;
  }

  .main-hero__actions {
    margin-top: 25px;
  }

  .main-hero__bottom {
    bottom: 24px;
  }

  .main-hero__scroll {
    bottom: 20px;
  }
}

/* ========================================================
   REDUCED MOTION
======================================================== */

@media (prefers-reduced-motion: reduce) {
  .main-hero__image,
  .main-hero__copy {
    transition: none;
  }

  .main-hero__scroll-track span {
    animation: none;
  }
}
</style>
