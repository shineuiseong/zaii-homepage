<template>
  <section ref="sectionRef" class="cancer-fast-track">
    <div class="cancer-fast-track__background" aria-hidden="true">
      <span class="cancer-fast-track__glow cancer-fast-track__glow--left" />
      <span class="cancer-fast-track__glow cancer-fast-track__glow--right" />

      <span class="cancer-fast-track__watermark"> FAST TRACK </span>
    </div>

    <div class="container cancer-fast-track__inner">
      <!-- =====================================================
             HEADER
        ====================================================== -->
      <div class="cancer-fast-track__header">
        <div class="cancer-fast-track__header-left">
          <div ref="eyebrowRef" class="cancer-fast-track__eyebrow">
            <span class="cancer-fast-track__eyebrow-line" />
            <span>PROSTATE CANCER FAST TRACK</span>
          </div>

          <h2 ref="titleRef" class="cancer-fast-track__title">
            의심되는 순간부터
            <br />
            <strong>빠르게 확인할 수 있도록</strong>
          </h2>
        </div>

        <div ref="descriptionRef" class="cancer-fast-track__header-right">
          <p>
            전립선암은 검사 결과를 기다리는 시간조차
            <br class="desktop-only" />
            환자와 보호자에게 큰 부담이 될 수 있습니다.
          </p>

          <p>
            자이비뇨의학과병원은 불필요한 대기 시간을 줄이고
            <br class="desktop-only" />
            다음 진료 방향을 빠르게 결정할 수 있도록 돕습니다.
          </p>
        </div>
      </div>

      <!-- =====================================================
             STATEMENT
        ====================================================== -->
      <div ref="statementRef" class="cancer-fast-track__statement">
        <div class="cancer-fast-track__statement-label">FAST DIAGNOSIS</div>

        <p>
          축적된 전립선 조직검사 경험을 바탕으로
          <strong> 검사 후 5~7일 내 결과 안내 </strong>
          를 목표로 합니다.
        </p>
      </div>

      <!-- =====================================================
             PROCESS
        ====================================================== -->
      <div ref="processRef" class="cancer-fast-track__process">
        <article class="cancer-fast-track__step">
          <div class="cancer-fast-track__step-top">
            <span class="cancer-fast-track__step-number"> 01 </span>

            <div class="cancer-fast-track__step-icon">
              <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path
                  d="M8 3V6M16 3V6M4.5 9H19.5M6.5 5H17.5C18.6046 5 19.5 5.89543 19.5 7V18C19.5 19.1046 18.6046 20 17.5 20H6.5C5.39543 20 4.5 19.1046 4.5 18V7C4.5 5.89543 5.39543 5 6.5 5Z"
                  stroke="currentColor"
                  stroke-width="1.7"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />

                <path
                  d="M9.5 14L11.2 15.7L14.8 12"
                  stroke="currentColor"
                  stroke-width="1.7"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          </div>

          <div class="cancer-fast-track__step-content">
            <span class="cancer-fast-track__step-caption"> EXAMINATION </span>

            <h3>신속한 검사 진행</h3>

            <p>
              전립선암이 의심되는 환자의 상태를 확인하고 필요한 검사를 신속하게 진행할 수 있도록
              진료 과정을 안내합니다.
            </p>
          </div>
        </article>

        <div class="cancer-fast-track__connector" aria-hidden="true">
          <span />

          <svg viewBox="0 0 20 20" fill="none">
            <path
              d="M6 4L12 10L6 16"
              stroke="currentColor"
              stroke-width="1.7"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>

        <article class="cancer-fast-track__step cancer-fast-track__step--accent">
          <div class="cancer-fast-track__step-top">
            <span class="cancer-fast-track__step-number"> 02 </span>

            <div class="cancer-fast-track__step-icon">
              <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <circle cx="12" cy="12" r="8.5" stroke="currentColor" stroke-width="1.7" />

                <path
                  d="M12 7.5V12L15 14"
                  stroke="currentColor"
                  stroke-width="1.7"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          </div>

          <div class="cancer-fast-track__step-content">
            <span class="cancer-fast-track__step-caption"> RESULT </span>

            <h3>
              <strong>5~7일 내</strong>
              결과 안내 목표
            </h3>

            <p>
              검사 후 결과를 가능한 빠르게 확인할 수 있도록 하여 결과를 기다리는 환자와 보호자의
              심리적인 부담을 줄이는 것을 중요하게 생각합니다.
            </p>
          </div>

          <div class="cancer-fast-track__badge">
            <span>검사 후</span>
            <strong>5–7 DAYS</strong>
          </div>
        </article>

        <div class="cancer-fast-track__connector" aria-hidden="true">
          <span />

          <svg viewBox="0 0 20 20" fill="none">
            <path
              d="M6 4L12 10L6 16"
              stroke="currentColor"
              stroke-width="1.7"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>

        <article class="cancer-fast-track__step">
          <div class="cancer-fast-track__step-top">
            <span class="cancer-fast-track__step-number"> 03 </span>

            <div class="cancer-fast-track__step-icon">
              <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path
                  d="M4 19V9.5L12 5L20 9.5V19"
                  stroke="currentColor"
                  stroke-width="1.7"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />

                <path
                  d="M8 19V14H16V19M9 10H15"
                  stroke="currentColor"
                  stroke-width="1.7"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />

                <path
                  d="M18 5V2.5M16.75 3.75H19.25"
                  stroke="currentColor"
                  stroke-width="1.7"
                  stroke-linecap="round"
                />
              </svg>
            </div>
          </div>

          <div class="cancer-fast-track__step-content">
            <span class="cancer-fast-track__step-caption"> COOPERATION </span>

            <h3>상급병원 진료 연계</h3>

            <p>
              전립선암이 의심되거나 추가적인 치료가 필요한 경우 환자가 원하는 상급병원으로 빠르게
              이어질 수 있도록 진료 연계를 돕습니다.
            </p>
          </div>
        </article>
      </div>

      <!-- =====================================================
             COOPERATION
        ====================================================== -->
      <div ref="cooperationRef" class="cancer-fast-track__cooperation">
        <div class="cancer-fast-track__cooperation-mark">
          <svg viewBox="0 0 32 32" fill="none" aria-hidden="true">
            <path
              d="M16 4V28M4 16H28"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
            />
          </svg>
        </div>

        <div class="cancer-fast-track__cooperation-content">
          <span>CONTINUITY OF CARE</span>

          <h3>
            검사에서 끝나는 것이 아니라
            <br />
            <strong>다음 치료까지 이어질 수 있도록</strong>
          </h3>

          <p>
            검사 결과 전립선암이 의심되는 경우 환자가 원하는 상급병원으로의 진료 연계를 빠르게
            도와드리며, 수술 등 추가적인 치료가 필요한 경우에도 연속성 있는 진료 협력체계를
            지향합니다.
          </p>
        </div>
      </div>

      <!-- =====================================================
             BOTTOM
        ====================================================== -->
      <div ref="bottomRef" class="cancer-fast-track__bottom">
        <div class="cancer-fast-track__quote-mark">“</div>

        <div class="cancer-fast-track__bottom-content">
          <p>
            환자와 보호자가 긴 기다림으로 지치지 않고
            <br class="desktop-only" />
            보다 빠르게 치료 방향을 결정할 수 있도록,
            <br class="desktop-only" />
            신속한 검사와 충분한 설명 그리고 진료 연계를 함께 고민합니다.
          </p>

          <div class="cancer-fast-track__signature">
            <span>ZAII UROLOGY HOSPITAL</span>

            <strong> 자이비뇨의학과병원 대표원장 변재상 </strong>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const sectionRef = ref<HTMLElement | null>(null)

const eyebrowRef = ref<HTMLElement | null>(null)
const titleRef = ref<HTMLElement | null>(null)
const descriptionRef = ref<HTMLElement | null>(null)

const statementRef = ref<HTMLElement | null>(null)
const processRef = ref<HTMLElement | null>(null)

const cooperationRef = ref<HTMLElement | null>(null)
const bottomRef = ref<HTMLElement | null>(null)

let ctx: gsap.Context | null = null

onMounted(() => {
  const section = sectionRef.value

  // DOM이 아직 없으면 실행하지 않음
  if (!section) return

  gsap.registerPlugin(ScrollTrigger)

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

  if (reduceMotion) return

  ctx = gsap.context(() => {
    /* =====================================================
       HEADER
    ====================================================== */

    const headerTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: 'top 78%',
        once: true
      }
    })

    if (eyebrowRef.value) {
      headerTimeline.from(eyebrowRef.value, {
        opacity: 0,
        y: 18,
        duration: 0.6,
        ease: 'power3.out'
      })
    }

    if (titleRef.value) {
      headerTimeline.from(
        titleRef.value,
        {
          opacity: 0,
          y: 38,
          duration: 0.9,
          ease: 'power3.out'
        },
        '-=0.35'
      )
    }

    if (descriptionRef.value) {
      headerTimeline.from(
        descriptionRef.value,
        {
          opacity: 0,
          y: 30,
          duration: 0.8,
          ease: 'power3.out'
        },
        '-=0.48'
      )
    }

    /* =====================================================
       STATEMENT
    ====================================================== */

    const statement = statementRef.value

    if (statement) {
      gsap.from(statement, {
        opacity: 0,
        y: 35,
        duration: 0.85,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: statement,
          start: 'top 87%',
          once: true
        }
      })
    }

    /* =====================================================
       PROCESS
    ====================================================== */

    const process = processRef.value

    if (process) {
      const steps = process.querySelectorAll<HTMLElement>('.cancer-fast-track__step')

      const connectors = process.querySelectorAll<HTMLElement>('.cancer-fast-track__connector')

      if (steps.length) {
        gsap.from(steps, {
          opacity: 0,
          y: 55,
          duration: 0.8,
          stagger: 0.18,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: process,
            start: 'top 82%',
            once: true
          }
        })
      }

      if (connectors.length) {
        gsap.from(connectors, {
          opacity: 0,
          scaleX: 0,
          transformOrigin: 'left center',
          duration: 0.55,
          stagger: 0.18,
          delay: 0.35,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: process,
            start: 'top 82%',
            once: true
          }
        })
      }
    }

    /* =====================================================
       COOPERATION
    ====================================================== */

    const cooperation = cooperationRef.value

    if (cooperation) {
      gsap.from(cooperation, {
        opacity: 0,
        y: 50,
        duration: 0.95,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: cooperation,
          start: 'top 84%',
          once: true
        }
      })
    }

    /* =====================================================
       BOTTOM
    ====================================================== */

    const bottom = bottomRef.value

    if (bottom) {
      gsap.from(bottom, {
        opacity: 0,
        y: 35,
        duration: 0.9,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: bottom,
          start: 'top 88%',
          once: true
        }
      })
    }
  }, section)
})

onBeforeUnmount(() => {
  ctx?.revert()
  ctx = null
})
</script>

<style scoped lang="scss">
.cancer-fast-track {
  position: relative;
  overflow: hidden;
  padding: 140px 0;
  background: #f4f7fa;
  color: #182638;
}

/* ========================================================
     BACKGROUND
  ======================================================== */

.cancer-fast-track__background {
  position: absolute;
  inset: 0;
  overflow: hidden;
  pointer-events: none;
}

.cancer-fast-track__glow {
  position: absolute;
  display: block;
  border-radius: 50%;
}

.cancer-fast-track__glow--left {
  top: 240px;
  left: -240px;
  width: 520px;
  height: 520px;
  background: rgba(78, 124, 173, 0.06);
}

.cancer-fast-track__glow--right {
  right: -220px;
  bottom: 80px;
  width: 500px;
  height: 500px;
  background: rgba(46, 87, 133, 0.055);
}

.cancer-fast-track__watermark {
  position: absolute;
  top: 70px;
  right: -12px;
  font-size: clamp(100px, 11vw, 190px);
  line-height: 0.8;
  font-weight: 800;
  letter-spacing: -0.06em;
  white-space: nowrap;
  color: rgba(31, 54, 80, 0.027);
}

.cancer-fast-track__inner {
  position: relative;
  z-index: 1;
}

/* ========================================================
     HEADER
  ======================================================== */

.cancer-fast-track__header {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(360px, 0.72fr);
  align-items: end;
  gap: 80px;
}

.cancer-fast-track__eyebrow {
  display: flex;
  align-items: center;
  gap: 14px;
  margin-bottom: 20px;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.2em;
  color: #55728f;
}

.cancer-fast-track__eyebrow-line {
  width: 34px;
  height: 1px;
  background: #55728f;
}

.cancer-fast-track__title {
  margin: 0;
  font-size: clamp(42px, 4vw, 62px);
  line-height: 1.26;
  letter-spacing: -0.045em;
  font-weight: 400;
  color: #17283b;

  strong {
    font-weight: 700;
    color: #234f7e;
  }
}

.cancer-fast-track__header-right {
  p {
    margin: 0;
    font-size: 17px;
    line-height: 1.9;
    color: #667586;
    word-break: keep-all;
  }

  p + p {
    margin-top: 14px;
  }
}

/* ========================================================
     STATEMENT
  ======================================================== */

.cancer-fast-track__statement {
  display: flex;
  align-items: center;
  gap: 42px;
  margin-top: 72px;
  padding: 31px 38px;
  border-top: 1px solid rgba(39, 70, 102, 0.14);
  border-bottom: 1px solid rgba(39, 70, 102, 0.14);
}

.cancer-fast-track__statement-label {
  flex: 0 0 auto;
  padding-right: 42px;
  border-right: 1px solid rgba(39, 70, 102, 0.14);
  font-size: 11px;
  letter-spacing: 0.2em;
  font-weight: 700;
  color: #7890a8;
}

.cancer-fast-track__statement p {
  margin: 0;
  font-size: 20px;
  line-height: 1.7;
  color: #34485c;

  strong {
    color: #174f83;
  }
}

/* ========================================================
     PROCESS
  ======================================================== */

.cancer-fast-track__process {
  display: grid;
  grid-template-columns:
    minmax(0, 1fr)
    54px
    minmax(0, 1fr)
    54px
    minmax(0, 1fr);
  align-items: stretch;
  margin-top: 62px;
}

.cancer-fast-track__step {
  position: relative;
  min-height: 410px;
  padding: 38px 34px 36px;
  overflow: hidden;
  background: #ffffff;
  border: 1px solid rgba(27, 56, 84, 0.09);
  box-shadow: 0 18px 55px rgba(30, 55, 82, 0.055);
}

.cancer-fast-track__step--accent {
  background: #234f7e;
  border-color: #234f7e;
  box-shadow: 0 25px 70px rgba(27, 65, 106, 0.18);

  .cancer-fast-track__step-number {
    color: rgba(255, 255, 255, 0.45);
  }

  .cancer-fast-track__step-icon {
    color: #ffffff;
    background: rgba(255, 255, 255, 0.11);
  }

  .cancer-fast-track__step-caption {
    color: rgba(255, 255, 255, 0.58);
  }

  .cancer-fast-track__step-content {
    h3 {
      color: #ffffff;

      strong {
        color: #ffe086;
      }
    }

    p {
      color: rgba(255, 255, 255, 0.75);
    }
  }
}

.cancer-fast-track__step-top {
  display: flex;
  justify-content: space-between;
}

.cancer-fast-track__step-number {
  font-size: 12px;
  font-weight: 700;
  color: #9aabba;
}

.cancer-fast-track__step-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 54px;
  height: 54px;
  border-radius: 50%;
  color: #315e89;
  background: #eef3f7;

  svg {
    width: 25px;
    height: 25px;
  }
}

.cancer-fast-track__step-content {
  margin-top: 65px;

  h3 {
    margin: 8px 0 0;
    font-size: 27px;
    line-height: 1.4;
    color: #1e3145;

    strong {
      color: #285f94;
    }
  }

  p {
    margin: 21px 0 0;
    font-size: 15px;
    line-height: 1.85;
    color: #75818e;
    word-break: keep-all;
  }
}

.cancer-fast-track__step-caption {
  font-size: 10px;
  letter-spacing: 0.18em;
  font-weight: 700;
  color: #8197aa;
}

.cancer-fast-track__badge {
  position: absolute;
  right: 26px;
  bottom: 24px;
  text-align: right;

  span {
    display: block;
    font-size: 10px;
    color: rgba(255, 255, 255, 0.48);
  }

  strong {
    display: block;
    margin-top: 3px;
    color: #ffe086;
  }
}

/* ========================================================
     CONNECTOR
  ======================================================== */

.cancer-fast-track__connector {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #88a0b7;

  span {
    position: absolute;
    left: 0;
    right: 0;
    height: 1px;
    background: rgba(62, 91, 120, 0.18);
  }

  svg {
    position: relative;
    width: 20px;
    height: 20px;
    padding: 2px;
    background: #f4f7fa;
  }
}

/* ========================================================
     COOPERATION
  ======================================================== */

.cancer-fast-track__cooperation {
  display: grid;
  grid-template-columns: 170px minmax(0, 1fr);
  gap: 54px;
  margin-top: 80px;
  padding: 62px 66px;
  background: #172b41;
}

.cancer-fast-track__cooperation-mark {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 112px;
  height: 112px;
  border: 1px solid rgba(255, 255, 255, 0.17);
  border-radius: 50%;
  color: #ffffff;

  svg {
    width: 38px;
    height: 38px;
  }
}

.cancer-fast-track__cooperation-content {
  > span {
    display: block;
    margin-bottom: 14px;
    font-size: 10px;
    letter-spacing: 0.22em;
    color: rgba(255, 255, 255, 0.42);
  }

  h3 {
    margin: 0;
    font-size: 34px;
    line-height: 1.45;
    font-weight: 400;
    color: #ffffff;

    strong {
      color: #9bc2e7;
    }
  }

  p {
    margin: 24px 0 0;
    font-size: 16px;
    line-height: 1.9;
    color: rgba(255, 255, 255, 0.66);
    word-break: keep-all;
  }
}

/* ========================================================
     BOTTOM
  ======================================================== */

.cancer-fast-track__bottom {
  display: grid;
  grid-template-columns: 120px minmax(0, 1fr);
  gap: 35px;
  margin-top: 80px;
  padding-top: 70px;
  border-top: 1px solid rgba(38, 66, 94, 0.12);
}

.cancer-fast-track__quote-mark {
  font-family: Georgia, serif;
  font-size: 110px;
  line-height: 1;
  color: rgba(39, 83, 125, 0.14);
}

.cancer-fast-track__bottom-content {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  gap: 70px;

  > p {
    margin: 0;
    max-width: 680px;
    font-size: 21px;
    line-height: 1.85;
    color: #374b5e;
  }
}

.cancer-fast-track__signature {
  flex: 0 0 auto;
  text-align: right;

  span {
    display: block;
    margin-bottom: 7px;
    font-size: 9px;
    letter-spacing: 0.16em;
    color: #96a4b1;
  }

  strong {
    font-size: 17px;
    color: #293d50;
  }
}

/* ========================================================
     LAPTOP
  ======================================================== */

@include laptop-down {
  .cancer-fast-track {
    padding: 100px 0;
  }

  .cancer-fast-track__header {
    grid-template-columns: 1fr;
    gap: 30px;
  }

  .cancer-fast-track__process {
    grid-template-columns: 1fr;
    max-width: 700px;
    margin: 48px auto 0;
  }

  .cancer-fast-track__step {
    min-height: auto;
  }

  .cancer-fast-track__connector {
    height: 64px;

    span {
      top: 0;
      bottom: 0;
      left: 50%;
      width: 1px;
      height: auto;
    }

    svg {
      transform: rotate(90deg);
    }
  }

  .cancer-fast-track__cooperation {
    grid-template-columns: 110px minmax(0, 1fr);
  }

  .cancer-fast-track__bottom-content {
    flex-direction: column;
    align-items: flex-start;
  }

  .cancer-fast-track__signature {
    text-align: left;
  }
}

/* ========================================================
     MOBILE
  ======================================================== */

@include mobile {
  .cancer-fast-track {
    padding: 78px 0 82px;
  }

  .cancer-fast-track__title {
    font-size: 34px;
  }

  .cancer-fast-track__header-right p {
    font-size: 15px;
  }

  .cancer-fast-track__statement {
    display: block;
    margin-top: 38px;
    padding: 23px 0;
  }

  .cancer-fast-track__statement-label {
    margin-bottom: 12px;
    padding: 0;
    border: 0;
  }

  .cancer-fast-track__statement p {
    font-size: 17px;
  }

  .cancer-fast-track__step {
    padding: 28px 24px 30px;
  }

  .cancer-fast-track__step-content {
    margin-top: 34px;

    h3 {
      font-size: 23px;
    }

    p {
      font-size: 14px;
    }
  }

  .cancer-fast-track__badge {
    position: static;
    margin-top: 24px;
    text-align: left;
  }

  .cancer-fast-track__cooperation {
    display: block;
    padding: 34px 26px 38px;
  }

  .cancer-fast-track__cooperation-mark {
    width: 66px;
    height: 66px;
    margin-bottom: 30px;
  }

  .cancer-fast-track__cooperation-content h3 {
    font-size: 25px;
  }

  .cancer-fast-track__cooperation-content p {
    font-size: 14px;
  }

  .cancer-fast-track__bottom {
    display: block;
    margin-top: 48px;
    padding-top: 42px;
  }

  .cancer-fast-track__quote-mark {
    height: 55px;
    font-size: 78px;
  }

  .cancer-fast-track__bottom-content {
    gap: 27px;

    > p {
      font-size: 17px;
    }
  }
}

@media (prefers-reduced-motion: reduce) {
  .cancer-fast-track *,
  .cancer-fast-track *::before,
  .cancer-fast-track *::after {
    animation: none !important;
    transition: none !important;
  }
}
</style>
