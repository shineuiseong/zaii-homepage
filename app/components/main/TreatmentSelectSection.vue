<template>
  <section ref="sectionRef" class="treatment-section">
    <!-- =====================================================
           Desktop Background
      ====================================================== -->
    <div
      class="background-current"
      :style="{
        backgroundImage: `url(${currentTreatment.image})`
      }"
    />

    <!-- =====================================================
           Desktop Reveal Layer
      ====================================================== -->
    <div ref="revealLayerRef" class="background-reveal" aria-hidden="true">
      <div
        v-for="index in 4"
        :key="index"
        :ref="(el) => setSliceRef(el, index - 1)"
        class="reveal-slice"
      >
        <div
          class="reveal-image"
          :style="{
            backgroundImage: `url(${nextImage})`,
            '--slice-index': index - 1
          }"
        />
      </div>
    </div>

    <div class="background-dim" />

    <!-- =====================================================
           Desktop Grid
      ====================================================== -->
    <div class="treatment-grid">
      <article
        v-for="(treatment, index) in treatments"
        :key="treatment.id"
        class="treatment-panel"
        :class="{
          'is-active': treatment.id === activeId
        }"
        tabindex="0"
        @mouseenter="activateTreatment(treatment, index)"
        @focus="activateTreatment(treatment, index)"
      >
        <div class="panel-hover" />

        <span class="panel-number">
          {{ String(index + 1).padStart(2, '0') }}
        </span>

        <div class="panel-content">
          <span class="panel-category">
            {{ treatment.category }}
          </span>

          <h3 class="panel-title">
            {{ treatment.title }}
          </h3>

          <div
            class="panel-detail"
            :class="{
              'is-visible': treatment.id === activeId
            }"
          >
            <p>
              {{ treatment.description }}
            </p>

            <NuxtLink :to="treatment.href" class="panel-more" @click.stop>
              자세히 보기

              <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path
                  d="M5 12H19M13 6L19 12L13 18"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </NuxtLink>
          </div>
        </div>

        <span class="panel-arrow">
          <svg viewBox="0 0 32 20" fill="none" aria-hidden="true">
            <path
              d="M1 10H29M22 3L29 10L22 17"
              stroke="currentColor"
              stroke-width="1.4"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </span>
      </article>
    </div>

    <!-- =====================================================
           Mobile Swiper
      ====================================================== -->
    <div class="treatment-mobile">
      <div class="mobile-heading">
        <span class="mobile-eyebrow"> ZAI UROLOGY </span>

        <h2>
          환자에게 맞는
          <br />
          <strong>전립선 치료</strong>
        </h2>

        <p>
          환자의 증상과 상태를 고려해
          <br />
          적절한 치료 방법을 제안합니다.
        </p>
      </div>

      <Swiper
        class="mobile-swiper"
        :slides-per-view="1.16"
        :space-between="14"
        :speed="620"
        :allow-touch-move="true"
        :simulate-touch="true"
        :grab-cursor="true"
        :resistance="true"
        :resistance-ratio="0.65"
        :threshold="5"
        :touch-ratio="1"
        :short-swipes="true"
        :long-swipes="true"
        :long-swipes-ratio="0.2"
        :long-swipes-ms="250"
        :follow-finger="true"
        :watch-slides-progress="true"
        :observer="true"
        :observe-parents="true"
        @swiper="handleSwiperInit"
        @slide-change="handleMobileSlideChange"
      >
        <SwiperSlide v-for="(treatment, index) in treatments" :key="treatment.id">
          <article
            class="mobile-card"
            :class="{
              'is-active': index === mobileActiveIndex
            }"
            @click="selectMobileSlide(index)"
          >
            <div
              class="mobile-card-image"
              :style="{
                backgroundImage: `url(${treatment.image})`
              }"
            />

            <div class="mobile-card-overlay" />

            <span class="mobile-card-number">
              {{ String(index + 1).padStart(2, '0') }}
            </span>

            <div class="mobile-card-content">
              <span class="mobile-card-category">
                {{ treatment.category }}
              </span>

              <h3>
                {{ treatment.title }}
              </h3>

              <p>
                {{ treatment.description }}
              </p>

              <NuxtLink :to="treatment.href" class="mobile-card-more" @click.stop>
                자세히 보기

                <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path
                    d="M5 12H19M13 6L19 12L13 18"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </NuxtLink>
            </div>

            <span class="mobile-card-arrow">
              <svg viewBox="0 0 32 20" fill="none" aria-hidden="true">
                <path
                  d="M1 10H29M22 3L29 10L22 17"
                  stroke="currentColor"
                  stroke-width="1.4"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </span>
          </article>
        </SwiperSlide>
      </Swiper>

      <div class="mobile-navigation">
        <div class="mobile-progress">
          <div class="mobile-progress-bg">
            <span
              class="mobile-progress-value"
              :style="{
                transform: `scaleX(${mobileProgress})`
              }"
            />
          </div>
        </div>

        <div class="mobile-counter">
          <strong>
            {{ String(mobileActiveIndex + 1).padStart(2, '0') }}
          </strong>

          <span>/</span>

          <span>
            {{ String(treatments.length).padStart(2, '0') }}
          </span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import {
  computed,
  nextTick,
  onBeforeUnmount,
  onMounted,
  ref,
  type ComponentPublicInstance
} from 'vue'

import { Swiper, SwiperSlide } from 'swiper/vue'
import type { Swiper as SwiperInstance } from 'swiper'

/* =========================================================
   Types
========================================================= */

type TreatmentId = 'rezum' | 'urolift' | 'prostate' | 'checkup'

type Treatment = {
  id: TreatmentId
  category: string
  title: string
  description: string
  image: string
  href: string
}

/* =========================================================
   Data
========================================================= */

const treatments: readonly Treatment[] = [
  {
    id: 'urolift',
    category: 'UROLIFT',
    title: '유로리프트',
    description: '특수 결찰사를 이용해 전립선 조직을 당겨 막혀 있던 요도를 확보하는 치료입니다.',
    image: '/images/treatment/urolift-bg.webp',
    href: '/urolift'
  },

  {
    id: 'rezum',
    category: 'REZUM',
    title: '리줌 수증기 치료',
    description: '수증기 에너지를 이용해 비대해진 전립선 조직을 치료하는 최소침습 치료입니다.',
    image: '/images/treatment/rezum-bg.webp',
    href: '/rezum'
  },

  {
    id: 'prostate',
    category: 'PROSTATE',
    title: '전립선 정밀 진료',
    description:
      '환자의 배뇨 증상과 전립선 상태를 세밀하게 확인하여 개인에게 맞는 치료 방향을 결정합니다.',
    image: '/images/treatment/prostate-bg.webp',
    href: '/prostate'
  },

  {
    id: 'checkup',
    category: 'PROSTATE CANCER TEST',
    title: '전립선암 신속검사',
    description:
      '간편하고 신속한 검사를 통해 전립선암 위험도를 확인하고, 필요한 경우 정밀검사와 진료 방향을 안내합니다.',
    image: '/images/treatment/checkup-bg.webp',
    href: '/prostate-cancer'
  }
]

const DEFAULT_TREATMENT = treatments[0]!

/* =========================================================
   State
========================================================= */

const activeId = ref<TreatmentId>(DEFAULT_TREATMENT.id)

const currentTreatment = ref<Treatment>(DEFAULT_TREATMENT)

const nextImage = ref(DEFAULT_TREATMENT.image)

/* =========================================================
   DOM refs
========================================================= */

const sectionRef = ref<HTMLElement | null>(null)

const revealLayerRef = ref<HTMLElement | null>(null)

const sliceRefs = ref<Array<HTMLElement | null>>([null, null, null, null])

function setSliceRef(el: Element | ComponentPublicInstance | null, index: number) {
  if (el instanceof HTMLElement) {
    sliceRefs.value[index] = el
  }
}

function getSlices(): HTMLElement[] {
  return sliceRefs.value.filter((slice): slice is HTMLElement => slice instanceof HTMLElement)
}

/* =========================================================
   GSAP
========================================================= */

let gsap: (typeof import('gsap'))['default'] | null = null

let transition: ReturnType<(typeof import('gsap'))['default']['timeline']> | null = null

/*
 * 지금 배경 전환 중인지.
 */
let isAnimating = false

/*
 * 애니메이션 도중 새로운 hover가 들어오면
 * 마지막 대상만 여기에 저장.
 */
let queuedTreatment: Treatment | null = null
let queuedIndex = -1

/* =========================================================
   Hover buffering
========================================================= */

let hoverTimer: ReturnType<typeof setTimeout> | null = null

const HOVER_DELAY = 60

/* =========================================================
   Image preload
========================================================= */

const imageCache = new Map<string, HTMLImageElement>()

function preloadImage(src: string): Promise<void> {
  return new Promise((resolve) => {
    const cached = imageCache.get(src)

    if (cached?.complete && cached.naturalWidth > 0) {
      resolve()
      return
    }

    const image = cached ?? new Image()

    imageCache.set(src, image)

    const finish = () => {
      resolve()
    }

    image.onload = finish
    image.onerror = finish

    if (!image.src) {
      image.src = src
    }

    if (image.complete && image.naturalWidth > 0) {
      resolve()
    }
  })
}

function preloadImages() {
  treatments.forEach((treatment) => {
    void preloadImage(treatment.image)
  })
}

/* =========================================================
   Slice helpers
========================================================= */

function getInitialClip(index: number) {
  /*
   * 계단형 느낌.
   *
   * 기존처럼 위/아래를 번갈아 쓰는 것보다
   * 모두 같은 방향으로 열리면서
   * 시간차를 주는 게 훨씬 안정적이다.
   */
  return 'inset(100% 0% 0% 0%)'
}

function prepareSlices() {
  if (!gsap) {
    return
  }

  const slices = getSlices()

  gsap.killTweensOf(slices)

  slices.forEach((slice, index) => {
    gsap?.set(slice, {
      visibility: 'visible',
      clipPath: getInitialClip(index)
    })
  })
}

function hideSlices() {
  if (!gsap) {
    return
  }

  const slices = getSlices()

  slices.forEach((slice, index) => {
    gsap?.set(slice, {
      visibility: 'hidden',
      clipPath: getInitialClip(index)
    })
  })
}

/* =========================================================
   Run queued animation
========================================================= */

function runQueuedAnimation() {
  if (!queuedTreatment) {
    return
  }

  const treatment = queuedTreatment
  const index = queuedIndex

  queuedTreatment = null
  queuedIndex = -1

  /*
   * 방금 끝난 이미지와 같으면
   * 다시 애니메이션할 필요 없음.
   */
  if (treatment.id === currentTreatment.value.id) {
    return
  }

  void animateBackground(treatment, index)
}

/* =========================================================
   Background animation
========================================================= */

async function animateBackground(treatment: Treatment, targetIndex: number) {
  activeId.value = treatment.id

  /*
   * 이미 해당 이미지면 종료.
   */
  if (treatment.id === currentTreatment.value.id && !isAnimating) {
    return
  }

  /*
   * 애니메이션 중이면 절대 kill하지 않는다.
   *
   * 마지막 hover만 queue에 저장.
   */
  if (isAnimating) {
    queuedTreatment = treatment
    queuedIndex = targetIndex

    return
  }

  if (!gsap) {
    currentTreatment.value = treatment
    nextImage.value = treatment.image

    return
  }

  isAnimating = true

  /*
   * 다음 이미지는 애니메이션 전에 확실하게 로드.
   */
  await preloadImage(treatment.image)

  /*
   * 기다리는 동안 더 최신 hover가 들어왔으면
   * 굳이 오래된 target을 그리지 않는다.
   */
  if (queuedTreatment && queuedTreatment.id !== treatment.id) {
    isAnimating = false

    runQueuedAnimation()

    return
  }

  nextImage.value = treatment.image

  await nextTick()

  requestAnimationFrame(() => {
    if (!gsap) {
      isAnimating = false
      return
    }

    const slices = getSlices()

    if (!slices.length) {
      currentTreatment.value = treatment

      isAnimating = false

      runQueuedAnimation()

      return
    }

    /*
     * 기존 timeline 완전히 끝난 상태에서만
     * 새 timeline이 시작되므로 꿀렁임 없음.
     */
    prepareSlices()

    const currentIndex = treatments.findIndex((item) => item.id === currentTreatment.value.id)

    const movingRight = targetIndex >= currentIndex

    const order = movingRight ? [0, 1, 2, 3] : [3, 2, 1, 0]

    const orderedSlices = order
      .map((index) => slices[index])
      .filter((slice): slice is HTMLElement => Boolean(slice))

    transition = gsap.timeline({
      defaults: {
        overwrite: false
      },

      onComplete: () => {
        /*
         * reveal 이미지를 실제 background로 확정.
         */
        currentTreatment.value = treatment

        transition = null

        /*
         * base background가 Vue에 반영된 뒤
         * reveal layer 숨김.
         */
        nextTick(() => {
          requestAnimationFrame(() => {
            hideSlices()

            isAnimating = false

            /*
             * 사용자가 그 사이 다른 패널로
             * 이동했다면 마지막 요청 하나만 실행.
             */
            runQueuedAnimation()
          })
        })
      }
    })

    /*
     * =====================================================
     * 핵심 계단 애니메이션
     *
     * scale 없음
     * kill 없음
     * 중간 reverse 없음
     *
     * clip-path만 사용.
     * =====================================================
     */

    orderedSlices.forEach((slice, orderIndex) => {
      transition?.to(
        slice,
        {
          clipPath: 'inset(0% 0% 0% 0%)',

          duration: 0.85,

          ease: 'power2.out'
        },

        orderIndex * 0.09
      )
    })
  })
}

/* =========================================================
   Desktop Hover
========================================================= */

function activateTreatment(treatment: Treatment, index: number) {
  /*
   * 글씨는 마우스에 즉각 반응.
   */
  activeId.value = treatment.id

  /*
   * hover timer 초기화.
   */
  if (hoverTimer) {
    clearTimeout(hoverTimer)
  }

  /*
   * 현재 transition 중이라면
   * 45ms 기다리지 않고 queue만 최신으로 교체.
   *
   * 이렇게 해야 빠른 hover에도
   * 최종 대상이 정확히 남는다.
   */
  if (isAnimating) {
    queuedTreatment = treatment

    queuedIndex = index

    return
  }

  /*
   * 현재 실제 background와 같으면
   * 애니메이션 불필요.
   */
  if (treatment.id === currentTreatment.value.id) {
    queuedTreatment = null

    queuedIndex = -1

    return
  }

  hoverTimer = setTimeout(
    () => {
      hoverTimer = null

      void animateBackground(treatment, index)
    },

    HOVER_DELAY
  )
}

/* =========================================================
   Mobile Swiper
========================================================= */

const mobileSwiper = ref<SwiperInstance | null>(null)

const mobileActiveIndex = ref(0)

const mobileProgress = computed(() => {
  return (mobileActiveIndex.value + 1) / treatments.length
})

function handleSwiperInit(swiper: SwiperInstance) {
  mobileSwiper.value = swiper

  mobileActiveIndex.value = swiper.activeIndex
}

function handleMobileSlideChange(swiper: SwiperInstance) {
  const index = swiper.activeIndex

  mobileActiveIndex.value = index

  const treatment = treatments[index]

  if (!treatment) {
    return
  }

  activeId.value = treatment.id
}

function selectMobileSlide(index: number) {
  if (index === mobileActiveIndex.value) {
    return
  }

  mobileSwiper.value?.slideTo(index, 620)
}

/* =========================================================
   Lifecycle
========================================================= */

onMounted(async () => {
  /*
   * 먼저 이미지 모두 preload.
   */
  preloadImages()

  const module = await import('gsap')

  gsap = module.default

  await nextTick()

  hideSlices()
})

onBeforeUnmount(() => {
  if (hoverTimer) {
    clearTimeout(hoverTimer)
  }

  hoverTimer = null

  queuedTreatment = null

  queuedIndex = -1

  /*
   * 컴포넌트 제거 시에만
   * GSAP kill.
   *
   * 사용자 hover 중에는
   * timeline kill을 하지 않는다.
   */
  transition?.kill()

  transition = null

  isAnimating = false

  if (gsap) {
    gsap.killTweensOf(getSlices())
  }

  mobileSwiper.value?.destroy(true, true)

  mobileSwiper.value = null
})
</script>

<style scoped>
/* =========================================================
     Section
  ========================================================= */

.treatment-section {
  position: relative;

  width: 100%;
  height: 820px;

  overflow: hidden;

  background: #070b10;

  color: #fff;
}

/* =========================================================
     Desktop background
  ========================================================= */

.background-current {
  position: absolute;

  inset: 0;

  z-index: 0;

  background-position: center;

  background-size: cover;

  background-repeat: no-repeat;

  transform: translateZ(0);

  backface-visibility: hidden;
}

/* =========================================================
     Reveal
  ========================================================= */

.background-reveal {
  position: absolute;

  inset: 0;

  z-index: 1;

  display: grid;

  grid-template-columns: repeat(4, minmax(0, 1fr));

  overflow: hidden;

  pointer-events: none;

  transform: translateZ(0);
}

.reveal-slice {
  position: relative;

  width: 100%;

  height: 100%;

  overflow: hidden;

  visibility: hidden;

  transform: translateZ(0);

  backface-visibility: hidden;

  will-change: clip-path;

  contain: paint;
}

.reveal-slice::after {
  content: '';

  position: absolute;

  top: 0;
  right: 0;
  bottom: 0;

  z-index: 2;

  width: 1px;

  background: rgba(255, 255, 255, 0.09);

  pointer-events: none;
}

.reveal-image {
  position: absolute;

  top: 0;

  left: calc(var(--slice-index) * -100%);

  width: 400%;
  height: 100%;

  background-position: center;

  background-size: cover;

  background-repeat: no-repeat;

  transform: translateZ(0);

  transform-origin: center;

  backface-visibility: hidden;

  will-change: transform;
}

/* =========================================================
     Dim
  ========================================================= */

.background-dim {
  position: absolute;

  inset: 0;

  z-index: 2;

  pointer-events: none;

  background: linear-gradient(
    180deg,
    rgba(4, 9, 14, 0.12) 0%,

    rgba(4, 9, 14, 0.2) 44%,

    rgba(4, 9, 14, 0.54) 100%
  );
}

/* =========================================================
     Desktop grid
  ========================================================= */

.treatment-grid {
  position: relative;

  z-index: 3;

  width: 100%;
  height: 100%;

  display: grid;

  grid-template-columns: repeat(4, minmax(0, 1fr));
}

.treatment-panel {
  position: relative;

  min-width: 0;

  height: 100%;

  overflow: hidden;

  cursor: pointer;

  outline: none;

  border-right: 1px solid rgba(255, 255, 255, 0.22);
}

.treatment-panel:first-child {
  border-left: 1px solid rgba(255, 255, 255, 0.22);
}

/* =========================================================
     Panel hover
  ========================================================= */

.panel-hover {
  position: absolute;

  inset: 0;

  z-index: 0;

  background: rgba(4, 9, 14, 0.28);

  transition: background-color 0.42s ease;
}

.treatment-panel.is-active .panel-hover {
  background: rgba(4, 9, 14, 0.04);
}

@media (hover: hover) {
  .treatment-panel:hover .panel-hover {
    background: rgba(4, 9, 14, 0.07);
  }
}

/* =========================================================
     Number
  ========================================================= */

.panel-number {
  position: absolute;

  z-index: 2;

  top: 145px;

  left: clamp(26px, 2.6vw, 50px);

  color: rgba(255, 255, 255, 0.94);

  font-size: clamp(48px, 4.3vw, 76px);

  font-weight: 300;

  line-height: 1;

  letter-spacing: -0.055em;

  pointer-events: none;
}

/* =========================================================
     Panel content
  ========================================================= */

.panel-content {
  position: absolute;

  z-index: 2;

  left: clamp(26px, 2.6vw, 50px);

  right: clamp(22px, 2vw, 38px);

  bottom: 138px;

  height: 220px;

  pointer-events: none;
}

.panel-category {
  display: block;

  margin-bottom: 12px;

  color: rgba(255, 255, 255, 0.58);

  font-size: 10px;

  font-weight: 500;

  line-height: 1;

  letter-spacing: 0.2em;
}

.panel-title {
  margin: 0;

  color: #fff;

  font-size: clamp(25px, 2vw, 35px);

  font-weight: 400;

  line-height: 1.3;

  letter-spacing: -0.045em;

  word-break: keep-all;
}

/* =========================================================
     Detail
  ========================================================= */

.panel-detail {
  position: absolute;

  top: 76px;
  left: 0;

  width: 100%;
  max-width: 390px;

  opacity: 0;

  visibility: hidden;

  transform: translateY(8px);

  pointer-events: none;

  transition:
    opacity 0.24s ease,
    transform 0.42s cubic-bezier(0.22, 1, 0.36, 1),
    visibility 0s linear 0.28s;
}

.panel-detail.is-visible {
  opacity: 1;

  visibility: visible;

  transform: translateY(0);

  transition:
    opacity 0.34s ease 0.1s,
    transform 0.48s cubic-bezier(0.22, 1, 0.36, 1) 0.06s,
    visibility 0s;
}

.panel-detail p {
  margin: 0;

  color: rgba(255, 255, 255, 0.72);

  font-size: 14px;

  font-weight: 300;

  line-height: 1.75;

  word-break: keep-all;
}

/* =========================================================
     Desktop More Link
  ========================================================= */

.panel-more {
  width: fit-content;

  margin-top: 22px;

  padding-bottom: 7px;

  display: flex;

  align-items: center;

  gap: 26px;

  border-bottom: 1px solid rgba(255, 255, 255, 0.68);

  color: #fff;

  font-size: 13px;

  text-decoration: none;

  pointer-events: auto;

  transition:
    gap 0.35s cubic-bezier(0.22, 1, 0.36, 1),
    border-color 0.3s ease;
}

.panel-more:hover {
  gap: 34px;

  border-color: rgba(255, 255, 255, 1);
}

.panel-more svg {
  width: 17px;
  height: 17px;

  flex-shrink: 0;
}

/* =========================================================
     Arrow
  ========================================================= */

.panel-arrow {
  position: absolute;

  z-index: 2;

  right: 28px;
  bottom: 28px;

  color: rgba(255, 255, 255, 0.7);

  opacity: 0.7;

  pointer-events: none;

  transition:
    opacity 0.3s ease,
    transform 0.38s cubic-bezier(0.22, 1, 0.36, 1);
}

.panel-arrow svg {
  display: block;

  width: 31px;
  height: 20px;
}

.treatment-panel.is-active .panel-arrow {
  opacity: 1;

  transform: translateX(5px);
}

/* =========================================================
     Tablet
  ========================================================= */

@media (max-width: 1180px) {
  .panel-number,
  .panel-content {
    left: 25px;
  }

  .panel-content {
    right: 20px;
  }

  .panel-title {
    font-size: 25px;
  }

  .panel-detail p {
    font-size: 13px;
  }
}

/* =========================================================
     Mobile
  ========================================================= */

.treatment-mobile {
  display: none;
}

@media (max-width: 767px) {
  .treatment-section {
    height: auto;

    min-height: 720px;

    overflow: hidden;

    background: #08101a;
  }

  .background-current,
  .background-reveal,
  .background-dim,
  .treatment-grid {
    display: none;
  }

  .treatment-mobile {
    position: relative;

    display: block;

    width: 100%;

    padding: 72px 0 44px;

    overflow: hidden;
  }

  /* =========================================
       Heading
    ========================================= */

  .mobile-heading {
    padding: 0 20px;

    margin-bottom: 34px;
  }

  .mobile-eyebrow {
    display: block;

    margin-bottom: 12px;

    color: rgba(255, 255, 255, 0.48);

    font-size: 10px;

    font-weight: 500;

    letter-spacing: 0.2em;
  }

  .mobile-heading h2 {
    margin: 0;

    color: #fff;

    font-size: clamp(31px, 9vw, 38px);

    font-weight: 300;

    line-height: 1.24;

    letter-spacing: -0.05em;
  }

  .mobile-heading h2 strong {
    font-weight: 600;
  }

  .mobile-heading p {
    margin: 16px 0 0;

    color: rgba(255, 255, 255, 0.52);

    font-size: 13px;

    font-weight: 300;

    line-height: 1.7;
  }

  /* =========================================
       Swiper
    ========================================= */

  .mobile-swiper {
    width: 100%;

    overflow: visible;

    padding-left: 20px;

    padding-right: 20px;

    cursor: grab;

    touch-action: pan-y;

    user-select: none;

    -webkit-user-select: none;
  }

  .mobile-swiper:active {
    cursor: grabbing;
  }

  .mobile-swiper :deep(.swiper-wrapper) {
    align-items: stretch;
  }

  .mobile-swiper :deep(.swiper-slide) {
    height: auto;

    opacity: 0.62;

    filter: brightness(0.82);

    transition:
      opacity 0.35s ease,
      filter 0.35s ease;
  }

  .mobile-swiper :deep(.swiper-slide-active) {
    opacity: 1;

    filter: brightness(1);
  }

  .mobile-swiper :deep(.swiper-slide-next) {
    opacity: 0.76;

    filter: brightness(0.9);
  }

  /* =========================================
       Mobile Card
    ========================================= */

  .mobile-card {
    position: relative;

    width: 100%;
    height: 470px;

    overflow: hidden;

    border-radius: 16px;

    background: #111820;

    color: #fff;

    cursor: pointer;

    user-select: none;

    -webkit-user-select: none;

    -webkit-tap-highlight-color: transparent;
  }

  .mobile-card-image {
    position: absolute;

    inset: 0;

    background-position: center;

    background-size: cover;

    background-repeat: no-repeat;

    pointer-events: none;

    user-select: none;

    -webkit-user-select: none;

    -webkit-user-drag: none;

    transform: scale(1.025);

    transition: transform 0.75s cubic-bezier(0.22, 1, 0.36, 1);

    will-change: transform;
  }

  .mobile-swiper :deep(.swiper-slide-active) .mobile-card-image {
    transform: scale(1);
  }

  /* =========================================
       Overlay
    ========================================= */

  .mobile-card-overlay {
    position: absolute;

    inset: 0;

    z-index: 1;

    pointer-events: none;

    background: linear-gradient(
      180deg,
      rgba(4, 8, 12, 0.08) 0%,

      rgba(4, 8, 12, 0.14) 32%,

      rgba(4, 8, 12, 0.42) 62%,

      rgba(4, 8, 12, 0.94) 100%
    );
  }

  /* =========================================
       Number
    ========================================= */

  .mobile-card-number {
    position: absolute;

    z-index: 2;

    top: 24px;
    left: 23px;

    color: rgba(255, 255, 255, 0.86);

    font-size: 38px;

    font-weight: 300;

    line-height: 1;

    letter-spacing: -0.05em;

    pointer-events: none;
  }

  /* =========================================
       Mobile Content
    ========================================= */

  .mobile-card-content {
    position: absolute;

    z-index: 2;

    left: 23px;
    right: 23px;

    bottom: 54px;

    pointer-events: none;
  }

  .mobile-card-category {
    display: block;

    margin-bottom: 10px;

    color: rgba(255, 255, 255, 0.55);

    font-size: 9px;

    font-weight: 500;

    line-height: 1;

    letter-spacing: 0.2em;
  }

  .mobile-card-content h3 {
    margin: 0;

    color: #fff;

    font-size: 27px;

    font-weight: 400;

    line-height: 1.28;

    letter-spacing: -0.045em;

    word-break: keep-all;
  }

  .mobile-card-content p {
    max-width: 280px;

    margin: 14px 0 0;

    color: rgba(255, 255, 255, 0.68);

    font-size: 12px;

    font-weight: 300;

    line-height: 1.7;

    word-break: keep-all;

    opacity: 0;

    transform: translateY(6px);

    transition:
      opacity 0.3s ease,
      transform 0.4s cubic-bezier(0.22, 1, 0.36, 1);
  }

  .mobile-card.is-active .mobile-card-content p {
    opacity: 1;

    transform: translateY(0);
  }

  /* =========================================
       Mobile More Link
    ========================================= */

  .mobile-card-more {
    width: fit-content;

    margin-top: 18px;

    padding-bottom: 6px;

    display: flex;

    align-items: center;

    gap: 18px;

    border-bottom: 1px solid rgba(255, 255, 255, 0.58);

    color: rgba(255, 255, 255, 0.9);

    font-size: 12px;

    text-decoration: none;

    pointer-events: auto;

    transition:
      gap 0.3s ease,
      border-color 0.3s ease;
  }

  .mobile-card-more svg {
    width: 15px;
    height: 15px;

    flex-shrink: 0;
  }

  /* =========================================
       Arrow
    ========================================= */

  .mobile-card-arrow {
    position: absolute;

    z-index: 2;

    right: 22px;
    bottom: 22px;

    width: 32px;
    height: 20px;

    color: rgba(255, 255, 255, 0.8);

    pointer-events: none;
  }

  .mobile-card-arrow svg {
    display: block;

    width: 32px;
    height: 20px;
  }

  /* =========================================
       Progress
    ========================================= */

  .mobile-navigation {
    padding: 28px 20px 0;

    display: flex;

    align-items: center;

    gap: 18px;
  }

  .mobile-progress {
    flex: 1;
  }

  .mobile-progress-bg {
    position: relative;

    width: 100%;
    height: 2px;

    overflow: hidden;

    background: rgba(255, 255, 255, 0.16);
  }

  .mobile-progress-value {
    position: absolute;

    inset: 0;

    background: rgba(255, 255, 255, 0.92);

    transform-origin: left center;

    transition: transform 0.45s cubic-bezier(0.22, 1, 0.36, 1);
  }

  /* =========================================
       Counter
    ========================================= */

  .mobile-counter {
    display: flex;

    align-items: center;

    gap: 5px;

    color: rgba(255, 255, 255, 0.4);

    font-size: 11px;

    letter-spacing: 0.08em;

    font-variant-numeric: tabular-nums;
  }

  .mobile-counter strong {
    color: rgba(255, 255, 255, 0.94);

    font-weight: 500;
  }
}

/* =========================================================
     Small mobile
  ========================================================= */

@media (max-width: 390px) {
  .treatment-mobile {
    padding-top: 60px;
  }

  .mobile-heading {
    margin-bottom: 28px;
  }

  .mobile-heading h2 {
    font-size: 31px;
  }

  .mobile-card {
    height: 440px;
  }

  .mobile-card-content h3 {
    font-size: 25px;
  }

  .mobile-swiper {
    padding-left: 18px;

    padding-right: 18px;
  }
}

/* =========================================================
     Reduced motion
  ========================================================= */

@media (prefers-reduced-motion: reduce) {
  .panel-hover,
  .panel-detail,
  .panel-arrow,
  .mobile-card-image,
  .mobile-card-content p,
  .mobile-card-more,
  .mobile-progress-value {
    transition: none;
  }
}
</style>
