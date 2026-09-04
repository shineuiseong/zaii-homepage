<template>
  <section ref="sectionRef" class="record-section">
    <!-- =====================================================
           Background
      ====================================================== -->
    <div class="record-bg">
      <div class="record-watermark" aria-hidden="true">ZAII</div>
    </div>

    <!-- =====================================================
           Content
      ====================================================== -->
    <div class="record-inner">
      <!-- ===================================================
             Header
        ==================================================== -->
      <div ref="headingRef" class="record-heading">
        <p class="record-kicker">
          국내 유일 비뇨의학과 병원
          <span>2차 의료기관</span>
        </p>

        <h2>
          전립선 치료의 경험,
          <br />
          <strong>숫자로 증명합니다.</strong>
        </h2>

        <p class="record-description">
          전립선 질환을 중심으로 축적된 풍부한 진료 경험과
          <br class="desktop-only" />
          치료 노하우를 바탕으로 환자에게 필요한 치료를 고민합니다.
        </p>
      </div>

      <!-- ===================================================
             Stats
        ==================================================== -->
      <div ref="statsRef" class="record-stats">
        <!-- =========================
               전립선 치료
          ========================== -->
        <article class="record-stat">
          <div class="record-stat-head">
            <span class="record-stat-index"> 01 </span>

            <span class="record-stat-label"> 전립선 치료 </span>
          </div>

          <div class="record-stat-number">
            <strong class="count-number" :data-target="10000"> 0 </strong>

            <span>례 이상</span>
          </div>

          <div class="record-stat-copy">
            <h3>
              전립선 관련
              <strong>10,000례 이상</strong>
            </h3>

            <p>
              전립선비대증을 비롯한 전립선 질환에 대한 풍부한 진료 및 치료 경험을 축적하고 있습니다.
            </p>
          </div>
        </article>

        <!-- =========================
               유로리프트
          ========================== -->
        <article class="record-stat">
          <div class="record-stat-head">
            <span class="record-stat-index"> 02 </span>

            <span class="record-stat-label"> 유로리프트 </span>
          </div>

          <div class="record-stat-number">
            <strong class="count-number" :data-target="4000"> 0 </strong>

            <span>례 이상</span>
          </div>

          <div class="record-stat-copy">
            <h3>
              유로리프트
              <strong>4,000례 이상</strong>
            </h3>

            <p>축적된 유로리프트 시술 경험을 바탕으로 환자의 상태에 맞는 치료 방향을 제안합니다.</p>
          </div>
        </article>
      </div>

      <!-- ===================================================
             Bottom
        ==================================================== -->
      <div ref="bottomRef" class="record-bottom">
        <span class="record-bottom-label"> 자이비뇨의학과병원의 치료 경험 </span>

        <p>
          <strong>전립선 관련 10,000례 이상</strong>
          <span class="record-bottom-dot" />
          <strong>유로리프트 4,000례 이상</strong>
        </p>
      </div>
    </div>

    <!-- =====================================================
           Bottom Accent
      ====================================================== -->
    <div ref="accentRef" class="record-accent">
      <span />
    </div>
  </section>
</template>

<script setup lang="ts">
import { nextTick, onBeforeUnmount, onMounted, ref } from 'vue'

/* =========================================================
     Refs
  ========================================================= */

const sectionRef = ref<HTMLElement | null>(null)

const headingRef = ref<HTMLElement | null>(null)

const statsRef = ref<HTMLElement | null>(null)

const bottomRef = ref<HTMLElement | null>(null)

const accentRef = ref<HTMLElement | null>(null)

/* =========================================================
     GSAP
  ========================================================= */

let gsap: (typeof import('gsap'))['default'] | null = null

let observer: IntersectionObserver | null = null

let timeline: ReturnType<(typeof import('gsap'))['default']['timeline']> | null = null

let hasAnimated = false

/* =========================================================
     Number
  ========================================================= */

function formatNumber(value: number) {
  return Math.floor(value).toLocaleString('ko-KR')
}

/* =========================================================
     Prepare Animation
  ========================================================= */

function prepareAnimation() {
  if (!gsap) {
    return
  }

  const heading = headingRef.value
  const stats = statsRef.value
  const bottom = bottomRef.value
  const accent = accentRef.value

  if (!heading || !stats || !bottom || !accent) {
    return
  }

  const kicker = heading.querySelector('.record-kicker')

  const title = heading.querySelector('h2')

  const description = heading.querySelector('.record-description')

  const statItems = stats.querySelectorAll('.record-stat')

  const bottomContent = bottom.querySelectorAll('.record-bottom-label, .record-bottom p')

  const accentLine = accent.querySelector('span')

  gsap.set([kicker, title, description], {
    opacity: 0,
    y: 24
  })

  gsap.set(statItems, {
    opacity: 0,
    y: 40
  })

  gsap.set(bottomContent, {
    opacity: 0,
    y: 18
  })

  gsap.set(accentLine, {
    scaleX: 0,
    transformOrigin: 'left center'
  })
}

/* =========================================================
     Number Animation
  ========================================================= */

function animateNumbers() {
  if (!gsap || !statsRef.value) {
    return
  }

  const numbers = statsRef.value.querySelectorAll<HTMLElement>('.count-number')

  numbers.forEach((element) => {
    const target = Number(element.dataset.target || 0)

    const counter = {
      value: 0
    }

    gsap?.to(counter, {
      value: target,

      duration: 1.8,

      ease: 'power3.out',

      onUpdate: () => {
        element.textContent = formatNumber(counter.value)
      },

      onComplete: () => {
        element.textContent = formatNumber(target)
      }
    })
  })
}

/* =========================================================
     Play Animation
  ========================================================= */

function playAnimation() {
  if (!gsap || hasAnimated) {
    return
  }

  const heading = headingRef.value
  const stats = statsRef.value
  const bottom = bottomRef.value
  const accent = accentRef.value

  if (!heading || !stats || !bottom || !accent) {
    return
  }

  hasAnimated = true

  const kicker = heading.querySelector('.record-kicker')

  const title = heading.querySelector('h2')

  const description = heading.querySelector('.record-description')

  const statItems = stats.querySelectorAll('.record-stat')

  const bottomContent = bottom.querySelectorAll('.record-bottom-label, .record-bottom p')

  const accentLine = accent.querySelector('span')

  timeline = gsap.timeline({
    defaults: {
      ease: 'power3.out'
    }
  })

  /* 상단 안내 */
  timeline.to(
    kicker,
    {
      opacity: 1,
      y: 0,
      duration: 0.65
    },
    0.05
  )

  /* 메인 타이틀 */
  timeline.to(
    title,
    {
      opacity: 1,
      y: 0,
      duration: 0.9
    },
    0.14
  )

  /* 설명 */
  timeline.to(
    description,
    {
      opacity: 1,
      y: 0,
      duration: 0.7
    },
    0.32
  )

  /* 실적 */
  timeline.to(
    statItems,
    {
      opacity: 1,
      y: 0,

      duration: 0.85,

      stagger: 0.12
    },
    0.4
  )

  /* 숫자 카운트 */
  timeline.call(
    () => {
      animateNumbers()
    },
    [],
    0.52
  )

  /* 하단 */
  timeline.to(
    bottomContent,
    {
      opacity: 1,
      y: 0,

      duration: 0.65,

      stagger: 0.08
    },
    0.88
  )

  /* 하단 블루라인 */
  timeline.to(
    accentLine,
    {
      scaleX: 1,

      duration: 1.2,

      ease: 'power3.inOut'
    },
    0.68
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
      threshold: 0.2
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

.record-section {
  position: relative;

  width: 100%;

  overflow: hidden;

  background: #0b1d32;

  color: #ffffff;
}

/* =========================================================
     Background
  ========================================================= */

.record-bg {
  position: absolute;

  inset: 0;

  overflow: hidden;

  background:
    radial-gradient(circle at 50% 12%, rgba(65, 123, 177, 0.075), transparent 38%),
    linear-gradient(180deg, #102640 0%, #0b1d32 58%, #08182a 100%);
}

/* =========================================================
     Watermark
  ========================================================= */

.record-watermark {
  position: absolute;

  top: -115px;
  right: 1%;

  color: rgba(255, 255, 255, 0.022);

  font-size: clamp(320px, 31vw, 600px);

  font-weight: 700;

  line-height: 1;

  letter-spacing: -0.1em;

  pointer-events: none;

  user-select: none;
}

/* =========================================================
     Inner
  ========================================================= */

.record-inner {
  position: relative;

  z-index: 2;

  width: min(1180px, calc(100% - 80px));

  margin: 0 auto;

  padding: 95px 0 72px;
}

/* =========================================================
     Heading
  ========================================================= */

.record-heading {
  max-width: 680px;

  margin: 0 auto;

  text-align: center;
}

/* =========================================================
     Kicker
  ========================================================= */

.record-kicker {
  margin: 0 0 20px;

  color: rgba(255, 255, 255, 0.7);

  font-size: 16px;

  font-weight: 450;

  line-height: 1.5;

  letter-spacing: -0.025em;
}

.record-kicker span {
  position: relative;

  margin-left: 12px;

  padding-left: 13px;

  color: rgba(255, 255, 255, 0.4);

  font-size: 13px;

  font-weight: 350;
}

.record-kicker span::before {
  content: '';

  position: absolute;

  top: 50%;
  left: 0;

  width: 1px;
  height: 11px;

  transform: translateY(-50%);

  background: rgba(255, 255, 255, 0.24);
}

/* =========================================================
     Title
  ========================================================= */

.record-heading h2 {
  margin: 0;

  color: #ffffff;

  font-size: clamp(42px, 4vw, 60px);

  font-weight: 300;

  line-height: 1.18;

  letter-spacing: -0.055em;

  word-break: keep-all;
}

.record-heading h2 strong {
  font-weight: 650;
}

/* =========================================================
     Description
  ========================================================= */

.record-description {
  margin: 24px 0 0;

  color: rgba(255, 255, 255, 0.43);

  font-size: 14px;

  font-weight: 300;

  line-height: 1.8;

  letter-spacing: -0.02em;
}

/* =========================================================
     Stats
  ========================================================= */

.record-stats {
  position: relative;

  margin-top: 58px;

  display: grid;

  grid-template-columns: repeat(2, minmax(0, 1fr));

  border-top: 1px solid rgba(255, 255, 255, 0.16);

  border-bottom: 1px solid rgba(255, 255, 255, 0.12);
}

/* 중앙선 */

.record-stats::after {
  content: '';

  position: absolute;

  top: 34px;
  bottom: 34px;
  left: 50%;

  width: 1px;

  background: rgba(255, 255, 255, 0.09);
}

/* =========================================================
     Stat
  ========================================================= */

.record-stat {
  position: relative;

  min-height: 330px;

  padding: 30px 50px 38px;
}

.record-stat:first-child {
  padding-left: 0;

  padding-right: 58px;
}

.record-stat:last-child {
  padding-left: 58px;

  padding-right: 0;
}

/* =========================================================
     Stat head
  ========================================================= */

.record-stat-head {
  display: flex;

  align-items: center;

  justify-content: space-between;

  gap: 20px;
}

.record-stat-index {
  color: rgba(255, 255, 255, 0.25);

  font-size: 11px;

  font-weight: 400;

  letter-spacing: 0.08em;
}

.record-stat-label {
  color: rgba(112, 167, 218, 0.75);

  font-size: 13px;

  font-weight: 450;

  letter-spacing: -0.02em;
}

/* =========================================================
     Number
  ========================================================= */

.record-stat-number {
  margin-top: 42px;

  display: flex;

  align-items: flex-end;

  gap: 15px;
}

.record-stat-number strong {
  display: block;

  color: #ffffff;

  font-size: clamp(76px, 7vw, 110px);

  font-weight: 450;

  line-height: 0.82;

  letter-spacing: -0.075em;

  font-variant-numeric: tabular-nums;
}

.record-stat-number span {
  padding-bottom: 7px;

  color: #6da5d9;

  font-size: 17px;

  font-weight: 450;

  white-space: nowrap;

  letter-spacing: -0.04em;
}

/* =========================================================
     Stat copy
  ========================================================= */

.record-stat-copy {
  margin-top: 31px;
}

.record-stat-copy h3 {
  margin: 0;

  color: rgba(255, 255, 255, 0.55);

  font-size: 16px;

  font-weight: 350;

  line-height: 1.5;

  letter-spacing: -0.035em;
}

.record-stat-copy h3 strong {
  margin-left: 6px;

  color: rgba(255, 255, 255, 0.95);

  font-weight: 550;
}

.record-stat-copy p {
  max-width: 420px;

  margin: 12px 0 0;

  color: rgba(255, 255, 255, 0.35);

  font-size: 13px;

  font-weight: 300;

  line-height: 1.7;

  letter-spacing: -0.02em;

  word-break: keep-all;
}

/* =========================================================
     Bottom
  ========================================================= */

.record-bottom {
  margin-top: 30px;

  text-align: center;
}

.record-bottom-label {
  display: block;

  color: rgba(103, 160, 212, 0.8);

  font-size: 12px;

  font-weight: 450;

  letter-spacing: -0.02em;
}

.record-bottom p {
  margin: 11px 0 0;

  display: flex;

  align-items: center;

  justify-content: center;

  gap: 14px;

  color: rgba(255, 255, 255, 0.45);

  font-size: 14px;

  font-weight: 300;

  letter-spacing: -0.025em;
}

.record-bottom p strong {
  color: rgba(255, 255, 255, 0.76);

  font-weight: 450;
}

.record-bottom-dot {
  width: 3px;
  height: 3px;

  flex: 0 0 auto;

  border-radius: 50%;

  background: #5f9dd5;
}

/* =========================================================
     Accent
  ========================================================= */

.record-accent {
  position: absolute;

  z-index: 10;

  left: 0;
  right: 0;
  bottom: 0;

  height: 3px;
}

.record-accent span {
  display: block;

  width: 100%;
  height: 100%;

  background: #3e80bc;

  transform: scaleX(0);

  transform-origin: left center;
}

/* =========================================================
     Tablet
  ========================================================= */

@media (max-width: 1024px) {
  .record-inner {
    width: calc(100% - 56px);

    padding-top: 85px;
  }

  .record-stat:first-child {
    padding-right: 35px;
  }

  .record-stat:last-child {
    padding-left: 35px;
  }

  .record-stat-number strong {
    font-size: 82px;
  }
}

/* =========================================================
     Mobile
  ========================================================= */

@media (max-width: 767px) {
  .record-inner {
    width: calc(100% - 40px);

    padding: 70px 0 62px;
  }

  /* =========================
       Heading
    ========================== */

  .record-heading {
    max-width: none;

    text-align: left;
  }

  .record-kicker {
    margin-bottom: 15px;

    font-size: 14px;
  }

  .record-kicker span {
    margin-left: 8px;

    padding-left: 9px;

    font-size: 11px;
  }

  .record-heading h2 {
    font-size: 36px;

    line-height: 1.23;
  }

  .record-description {
    margin-top: 20px;

    font-size: 13px;

    line-height: 1.75;
  }

  .desktop-only {
    display: none;
  }

  /* =========================
       Stats
    ========================== */

  .record-stats {
    margin-top: 46px;

    display: block;
  }

  .record-stats::after {
    display: none;
  }

  .record-stat,
  .record-stat:first-child,
  .record-stat:last-child {
    min-height: auto;

    padding: 26px 0 35px;
  }

  .record-stat + .record-stat {
    border-top: 1px solid rgba(255, 255, 255, 0.1);
  }

  .record-stat-number {
    margin-top: 29px;

    gap: 10px;
  }

  .record-stat-number strong {
    font-size: clamp(68px, 21vw, 90px);
  }

  .record-stat-number span {
    padding-bottom: 5px;

    font-size: 15px;
  }

  .record-stat-copy {
    margin-top: 25px;
  }

  .record-stat-copy h3 {
    font-size: 15px;
  }

  .record-stat-copy p {
    max-width: 340px;

    font-size: 12px;
  }

  /* =========================
       Bottom
    ========================== */

  .record-bottom {
    margin-top: 27px;

    text-align: left;
  }

  .record-bottom-label {
    font-size: 11px;
  }

  .record-bottom p {
    margin-top: 10px;

    display: block;

    font-size: 13px;

    line-height: 1.75;
  }

  .record-bottom p strong {
    display: block;
  }

  .record-bottom-dot {
    display: none;
  }

  /* =========================
       Watermark
    ========================== */

  .record-watermark {
    top: 5px;
    right: -70px;

    font-size: 260px;
  }
}

/* =========================================================
     Small Mobile
  ========================================================= */

@media (max-width: 420px) {
  .record-heading h2 {
    font-size: 33px;
  }

  .record-stat-number strong {
    font-size: 67px;
  }

  .record-stat-number span {
    font-size: 14px;
  }
}

/* =========================================================
     Reduced Motion
  ========================================================= */

@media (prefers-reduced-motion: reduce) {
  .record-accent span {
    transform: scaleX(1);
  }
}
</style>
