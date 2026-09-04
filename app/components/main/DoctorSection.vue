<template>
  <section ref="sectionRef" class="doctor-section">
    <!-- =====================================================
           Background
      ====================================================== -->
    <div class="doctor-bg" />

    <!-- =====================================================
           Decorative typography
      ====================================================== -->
    <div class="doctor-watermark" aria-hidden="true">ZAII</div>

    <!-- =====================================================
           Content
      ====================================================== -->
    <div class="doctor-inner">
      <!-- =========================
             Left
        ========================== -->
      <div ref="introRef" class="doctor-intro">
        <span class="doctor-eyebrow"> 의료진 소개 </span>

        <h2 class="doctor-heading">
          환자의 건강을
          <br />
          <strong>최우선으로 생각합니다.</strong>
        </h2>

        <div class="doctor-name">
          <strong>변재상</strong>
          <span>병원장</span>
        </div>

        <p class="doctor-message">
          오랜 임상 경험을 바탕으로
          <br />
          환자 한 분 한 분에게 필요한
          <br />
          진료를 고민합니다.
        </p>

        <NuxtLink to="/hospital/medical-team" class="doctor-more">
          의료진 자세히 보기

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

      <!-- =========================
             Doctor
        ========================== -->
      <div ref="doctorVisualRef" class="doctor-visual">
        <div class="doctor-glow" />

        <div class="doctor-image-mask">
          <img
            ref="doctorImageRef"
            src="/images/doctor/byun-jae-sang.webp"
            alt="변재상 병원장"
            class="doctor-image"
          />
        </div>
      </div>

      <!-- =========================
             Career
        ========================== -->
      <div ref="careerRef" class="doctor-career">
        <div class="career-heading">
          <div class="career-heading-text">
            <span>CAREER</span>
            <strong>주요 약력</strong>
          </div>

          <span class="career-heading-line" />
        </div>

        <ol class="career-list">
          <li v-for="(career, index) in careers" :key="career.period" class="career-item">
            <span class="career-number">
              {{ String(index + 1).padStart(2, '0') }}
            </span>

            <div class="career-content">
              <span class="career-period">
                {{ career.period }}
              </span>

              <p>
                {{ career.position }}
              </p>
            </div>
          </li>
        </ol>
      </div>
    </div>

    <!-- =====================================================
           Bottom line
      ====================================================== -->
    <div ref="lineRef" class="doctor-bottom-line">
      <span />
    </div>
  </section>
</template>

<script setup lang="ts">
import { nextTick, onBeforeUnmount, onMounted, ref } from 'vue'

/* =========================================================
     Data
  ========================================================= */

const careers = [
  {
    period: '1998 — 2006',
    position: '전) 연세플러스비뇨기과 대표원장'
  },
  {
    period: '2007 — 2014',
    position: '전) 자이비뇨기과병원 병원장'
  },
  {
    period: '2016 — 2017',
    position: '전) 나은병원 전립선센터장, 비뇨기과 과장'
  },
  {
    period: '2018 — 2019',
    position: '전) 강남베드로병원 전립선센터장, 비뇨기과 원장'
  },
  {
    period: '2020 — 2022',
    position: '전) 자이비뇨의학과 원장'
  },
  {
    period: '2022 — 현재',
    position: '현) 자이비뇨의학과병원 병원장'
  }
] as const

/* =========================================================
     Refs
  ========================================================= */

const sectionRef = ref<HTMLElement | null>(null)

const introRef = ref<HTMLElement | null>(null)

const doctorVisualRef = ref<HTMLElement | null>(null)

const doctorImageRef = ref<HTMLImageElement | null>(null)

const careerRef = ref<HTMLElement | null>(null)

const lineRef = ref<HTMLElement | null>(null)

/* =========================================================
     GSAP
  ========================================================= */

let gsap: (typeof import('gsap'))['default'] | null = null

let observer: IntersectionObserver | null = null

let timeline: ReturnType<(typeof import('gsap'))['default']['timeline']> | null = null

let hasAnimated = false

/* =========================================================
     Animation
  ========================================================= */

function prepareAnimation() {
  if (!gsap) {
    return
  }

  const intro = introRef.value
  const visual = doctorVisualRef.value
  const image = doctorImageRef.value
  const career = careerRef.value
  const line = lineRef.value

  if (!intro || !visual || !image || !career || !line) {
    return
  }

  const eyebrow = intro.querySelector('.doctor-eyebrow')
  const heading = intro.querySelector('.doctor-heading')
  const name = intro.querySelector('.doctor-name')
  const message = intro.querySelector('.doctor-message')
  const more = intro.querySelector('.doctor-more')

  const careerHeading = career.querySelector('.career-heading')
  const careerItems = career.querySelectorAll('.career-item')

  const bottomLine = line.querySelector('span')

  gsap.set([eyebrow, heading, name, message, more], {
    opacity: 0,
    y: 26
  })

  gsap.set(careerHeading, {
    opacity: 0,
    y: 20
  })

  gsap.set(careerItems, {
    opacity: 0,
    x: 28
  })

  gsap.set(visual, {
    opacity: 1
  })

  gsap.set(image, {
    y: 100,
    scale: 1.055
  })

  gsap.set('.doctor-image-mask', {
    clipPath: 'inset(100% 0% 0% 0%)'
  })

  gsap.set(bottomLine, {
    scaleX: 0,
    transformOrigin: 'left center'
  })
}

function playAnimation() {
  if (!gsap || hasAnimated) {
    return
  }

  const intro = introRef.value
  const image = doctorImageRef.value
  const career = careerRef.value
  const line = lineRef.value

  if (!intro || !image || !career || !line) {
    return
  }

  hasAnimated = true

  const eyebrow = intro.querySelector('.doctor-eyebrow')
  const heading = intro.querySelector('.doctor-heading')
  const name = intro.querySelector('.doctor-name')
  const message = intro.querySelector('.doctor-message')
  const more = intro.querySelector('.doctor-more')

  const careerHeading = career.querySelector('.career-heading')
  const careerItems = career.querySelectorAll('.career-item')

  const bottomLine = line.querySelector('span')

  timeline = gsap.timeline({
    defaults: {
      ease: 'power3.out'
    }
  })

  timeline.to(
    eyebrow,
    {
      opacity: 1,
      y: 0,
      duration: 0.7
    },
    0.05
  )

  timeline.to(
    heading,
    {
      opacity: 1,
      y: 0,
      duration: 0.95
    },
    0.14
  )

  timeline.to(
    name,
    {
      opacity: 1,
      y: 0,
      duration: 0.75
    },
    0.34
  )

  timeline.to(
    message,
    {
      opacity: 1,
      y: 0,
      duration: 0.75
    },
    0.48
  )

  timeline.to(
    '.doctor-image-mask',
    {
      clipPath: 'inset(0% 0% 0% 0%)',
      duration: 1.25,
      ease: 'power4.out'
    },
    0.18
  )

  timeline.to(
    image,
    {
      y: 0,
      scale: 1,
      duration: 1.35,
      ease: 'power3.out'
    },
    0.18
  )

  timeline.to(
    careerHeading,
    {
      opacity: 1,
      y: 0,
      duration: 0.72
    },
    0.48
  )

  timeline.to(
    careerItems,
    {
      opacity: 1,
      x: 0,
      duration: 0.7,
      stagger: 0.075,
      ease: 'power2.out'
    },
    0.62
  )

  timeline.to(
    more,
    {
      opacity: 1,
      y: 0,
      duration: 0.7
    },
    0.82
  )

  timeline.to(
    bottomLine,
    {
      scaleX: 1,
      duration: 1.2,
      ease: 'power3.inOut'
    },
    0.65
  )
}

/* =========================================================
     Lifecycle
  ========================================================= */

onMounted(async () => {
  const module = await import('gsap')

  gsap = module.default

  await nextTick()

  prepareAnimation()

  const section = sectionRef.value

  if (!section) {
    return
  }

  observer = new IntersectionObserver(
    ([entry]) => {
      if (!entry || !entry.isIntersecting) {
        return
      }

      playAnimation()

      observer?.disconnect()
    },
    {
      threshold: 0.28
    }
  )

  observer.observe(section)
})

onBeforeUnmount(() => {
  observer?.disconnect()

  observer = null

  timeline?.kill()

  timeline = null
})
</script>

<style scoped>
/* =========================================================
     Section
  ========================================================= */

.doctor-section {
  position: relative;

  width: 100%;
  height: 880px;

  overflow: hidden;

  color: #172334;

  background: #ffffff;
}

/* =========================================================
     Background
  ========================================================= */

.doctor-bg {
  position: absolute;

  inset: 0;

  background:
    radial-gradient(circle at 50% 60%, rgba(40, 105, 170, 0.045) 0%, rgba(40, 105, 170, 0) 38%),
    linear-gradient(180deg, #ffffff 0%, #fbfcfd 100%);
}

/* =========================================================
     Watermark
  ========================================================= */

.doctor-watermark {
  position: absolute;

  z-index: 1;

  top: 92px;
  left: 49%;

  transform: translateX(-50%);

  color: rgba(25, 56, 91, 0.03);

  font-size: clamp(160px, 18vw, 340px);

  font-weight: 700;

  line-height: 1;

  letter-spacing: -0.08em;

  pointer-events: none;

  user-select: none;
}

/* =========================================================
     Inner
  ========================================================= */

.doctor-inner {
  position: relative;

  z-index: 2;

  width: min(100%, 1920px);
  height: 100%;

  margin: 0 auto;

  display: grid;

  grid-template-columns:
    minmax(390px, 0.9fr)
    minmax(380px, 0.72fr)
    minmax(550px, 1.15fr);
}

/* =========================================================
     Left intro
  ========================================================= */

.doctor-intro {
  position: relative;

  z-index: 4;

  padding: 154px 35px 90px clamp(45px, 6.5vw, 130px);
}

.doctor-eyebrow {
  display: block;

  margin-bottom: 29px;

  color: #2d71b7;

  font-size: 12px;

  font-weight: 600;

  letter-spacing: 0.24em;
}

.doctor-heading {
  margin: 0;

  color: #172334;

  font-size: clamp(38px, 3.25vw, 60px);

  font-weight: 300;

  line-height: 1.24;

  letter-spacing: -0.055em;

  word-break: keep-all;
}

.doctor-heading strong {
  font-weight: 650;
}

.doctor-name {
  margin-top: 46px;

  display: flex;

  align-items: baseline;

  gap: 12px;
}

.doctor-name strong {
  color: #172334;

  font-size: 25px;

  font-weight: 650;

  letter-spacing: -0.045em;
}

.doctor-name span {
  color: #79838f;

  font-size: 14px;

  font-weight: 400;
}

.doctor-message {
  margin: 23px 0 0;

  color: #78828d;

  font-size: 15px;

  font-weight: 350;

  line-height: 1.9;

  letter-spacing: -0.02em;
}

/* =========================================================
     More
  ========================================================= */

.doctor-more {
  width: fit-content;

  margin-top: 38px;

  padding-bottom: 9px;

  display: flex;

  align-items: center;

  gap: 28px;

  border-bottom: 1px solid rgba(23, 35, 52, 0.35);

  color: #172334;

  font-size: 14px;

  font-weight: 450;

  letter-spacing: -0.02em;

  text-decoration: none;

  transition:
    gap 0.35s cubic-bezier(0.22, 1, 0.36, 1),
    color 0.3s ease,
    border-color 0.3s ease;
}

.doctor-more:hover {
  gap: 38px;

  color: #266db3;

  border-color: #266db3;
}

.doctor-more svg {
  width: 18px;
  height: 18px;
}

/* =========================================================
     Doctor visual
  ========================================================= */

.doctor-visual {
  position: relative;

  z-index: 5;

  height: 100%;

  pointer-events: none;
}

.doctor-glow {
  position: absolute;

  z-index: 0;

  left: 50%;
  bottom: 45px;

  width: 500px;
  height: 500px;

  transform: translateX(-50%);

  border-radius: 50%;

  background: radial-gradient(
    circle,
    rgba(68, 126, 183, 0.08) 0%,
    rgba(68, 126, 183, 0.025) 40%,
    rgba(255, 255, 255, 0) 72%
  );

  filter: blur(20px);
}

.doctor-image-mask {
  position: absolute;

  z-index: 2;

  left: 50%;
  bottom: 0;

  width: min(640px, 42vw);

  height: 94%;

  transform: translateX(-50%);

  overflow: hidden;

  clip-path: inset(100% 0 0 0);

  will-change: clip-path;
}

.doctor-image {
  position: absolute;

  left: 50%;
  bottom: -1px;

  width: 100%;
  height: 100%;

  transform: translateX(-50%);

  object-fit: contain;

  object-position: center bottom;

  will-change: transform;
}

/* =========================================================
     Career
  ========================================================= */

.doctor-career {
  position: relative;

  z-index: 4;

  padding: 120px clamp(48px, 5vw, 100px) 72px clamp(50px, 4vw, 78px);

  color: #172334;
}

/* =========================================================
     Career heading
  ========================================================= */

.career-heading {
  margin-bottom: 27px;
}

.career-heading-text {
  display: flex;

  align-items: flex-end;

  justify-content: space-between;

  gap: 30px;
}

.career-heading-text span {
  color: #47729e;

  font-size: 12px;

  font-weight: 600;

  letter-spacing: 0.25em;
}

.career-heading-text strong {
  color: #172334;

  font-size: 18px;

  font-weight: 550;

  letter-spacing: -0.035em;
}

.career-heading-line {
  display: block;

  width: 100%;
  height: 1px;

  margin-top: 23px;

  background: #1f5d98;

  opacity: 0.48;
}

/* =========================================================
     Career list
  ========================================================= */

.career-list {
  margin: 0;
  padding: 0;

  list-style: none;
}

.career-item {
  position: relative;

  min-height: 108px;

  display: grid;

  grid-template-columns: 68px minmax(0, 1fr);

  align-items: center;

  gap: 25px;

  border-bottom: 1px solid #dfe4e9;

  transition:
    padding-left 0.35s cubic-bezier(0.22, 1, 0.36, 1),
    border-color 0.3s ease;
}

.career-item::before {
  content: '';

  position: absolute;

  left: 0;
  bottom: -1px;

  width: 0;
  height: 1px;

  background: #286cae;

  transition: width 0.45s cubic-bezier(0.22, 1, 0.36, 1);
}

.career-item:hover {
  padding-left: 8px;

  border-color: transparent;
}

.career-item:hover::before {
  width: 100%;
}

/* =========================================================
     Career number
  ========================================================= */

.career-number {
  position: relative;

  color: #9aa8b5;

  font-size: 20px;

  font-weight: 400;

  line-height: 1;

  letter-spacing: 0.07em;
}

.career-number::after {
  content: '';

  position: absolute;

  top: 50%;
  right: -12px;

  width: 4px;
  height: 4px;

  transform: translateY(-50%);

  border-radius: 50%;

  background: #3676b5;

  opacity: 0.7;
}

/* =========================================================
     Career content
  ========================================================= */

.career-content {
  min-width: 0;

  padding: 19px 0 18px;
}

.career-period {
  display: block;

  margin-bottom: 9px;

  color: #7f8d9b;

  font-size: 14px;

  font-weight: 450;

  line-height: 1.2;

  letter-spacing: 0.1em;
}

.career-content p {
  margin: 0;

  color: #202e40;

  font-size: clamp(17px, 1.1vw, 21px);

  font-weight: 400;

  line-height: 1.48;

  letter-spacing: -0.045em;

  word-break: keep-all;
}

/* =========================================================
     Bottom line
  ========================================================= */

.doctor-bottom-line {
  position: absolute;

  z-index: 10;

  left: 0;
  right: 0;
  bottom: 0;

  height: 3px;
}

.doctor-bottom-line span {
  display: block;

  width: 100%;
  height: 100%;

  background: #3277ba;

  transform: scaleX(0);

  transform-origin: left center;
}

/* =========================================================
     Tablet
  ========================================================= */

@media (max-width: 1400px) {
  .doctor-inner {
    grid-template-columns:
      minmax(340px, 0.9fr)
      minmax(320px, 0.65fr)
      minmax(470px, 1.1fr);
  }

  .doctor-intro {
    padding-left: 48px;
    padding-right: 20px;
  }

  .doctor-heading {
    font-size: 44px;
  }

  .doctor-career {
    padding-left: 42px;
    padding-right: 42px;
  }

  .career-content p {
    font-size: 17px;
  }
}

@media (max-width: 1180px) {
  .doctor-section {
    height: 830px;
  }

  .doctor-inner {
    grid-template-columns:
      minmax(300px, 0.88fr)
      280px
      minmax(430px, 1.12fr);
  }

  .doctor-intro {
    padding-left: 32px;
    padding-right: 18px;
  }

  .doctor-heading {
    font-size: 38px;
  }

  .doctor-career {
    padding: 110px 30px 65px 35px;
  }

  .career-item {
    min-height: 102px;

    grid-template-columns: 55px 1fr;

    gap: 18px;
  }

  .career-number {
    font-size: 17px;
  }

  .career-period {
    font-size: 12px;
  }

  .career-content p {
    font-size: 15px;
  }

  .doctor-image-mask {
    width: 470px;
  }
}

/* =========================================================
     Mobile
  ========================================================= */

@media (max-width: 767px) {
  .doctor-section {
    height: auto;

    overflow: hidden;

    background: #ffffff;
  }

  .doctor-bg {
    background:
      radial-gradient(circle at 50% 35%, rgba(44, 108, 172, 0.055), rgba(255, 255, 255, 0) 38%),
      #ffffff;
  }

  .doctor-inner {
    display: flex;

    flex-direction: column;
  }

  /* =========================
       Intro
    ========================== */

  .doctor-intro {
    min-height: 390px;

    padding: 80px 22px 0;
  }

  .doctor-eyebrow {
    margin-bottom: 18px;

    font-size: 10px;
  }

  .doctor-heading {
    font-size: 35px;

    line-height: 1.28;
  }

  .doctor-name {
    margin-top: 28px;
  }

  .doctor-name strong {
    font-size: 22px;
  }

  .doctor-message {
    display: none;
  }

  .doctor-more {
    margin-top: 23px;

    font-size: 13px;
  }

  /* =========================
       Image
    ========================== */

  .doctor-visual {
    height: 420px;

    margin-top: -100px;
  }

  .doctor-image-mask {
    width: 430px;
    max-width: 118vw;

    height: 100%;
  }

  .doctor-glow {
    width: 330px;
    height: 330px;
  }

  /* =========================
       Career
    ========================== */

  .doctor-career {
    padding: 56px 22px 72px;

    background: #ffffff;

    border-top: 1px solid #edf0f3;
  }

  .career-heading {
    margin-bottom: 20px;
  }

  .career-heading-text {
    align-items: center;
  }

  .career-heading-text span {
    font-size: 10px;
  }

  .career-heading-text strong {
    font-size: 16px;
  }

  .career-heading-line {
    margin-top: 17px;
  }

  .career-item {
    min-height: 105px;

    grid-template-columns: 48px 1fr;

    gap: 15px;
  }

  .career-number {
    font-size: 16px;
  }

  .career-number::after {
    right: -7px;
  }

  .career-content {
    padding: 20px 0;
  }

  .career-period {
    margin-bottom: 8px;

    font-size: 12px;
  }

  .career-content p {
    font-size: 16px;

    line-height: 1.5;
  }

  .career-item:hover {
    padding-left: 0;
  }

  .doctor-watermark {
    top: 170px;

    font-size: 160px;

    color: rgba(25, 56, 91, 0.025);
  }
}

/* =========================================================
     Small Mobile
  ========================================================= */

@media (max-width: 420px) {
  .doctor-heading {
    font-size: 32px;
  }

  .doctor-visual {
    height: 390px;
  }

  .doctor-image-mask {
    width: 400px;
  }

  .career-item {
    grid-template-columns: 42px 1fr;

    gap: 12px;
  }

  .career-number {
    font-size: 15px;
  }

  .career-content p {
    font-size: 15px;
  }
}

/* =========================================================
     Reduced Motion
  ========================================================= */

@media (prefers-reduced-motion: reduce) {
  .doctor-image-mask {
    clip-path: inset(0);
  }

  .doctor-image {
    transform: translateX(-50%);
  }

  .career-item {
    transition: none;
  }

  .career-item::before {
    transition: none;
  }
}
</style>
