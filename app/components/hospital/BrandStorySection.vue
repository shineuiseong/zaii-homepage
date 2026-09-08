<template>
  <section ref="sectionRef" class="brand-story">
    <!-- =====================================================
           BACKGROUND
      ====================================================== -->
    <div class="brand-story__background" aria-hidden="true">
      <span class="brand-story__watermark">PROSTATE CARE</span>
    </div>

    <div class="container brand-story__inner">
      <!-- =====================================================
             INTRO
        ====================================================== -->
      <header ref="introRef" class="brand-story__intro">
        <div class="brand-story__intro-left">
          <div class="brand-story__eyebrow">
            <span class="brand-story__eyebrow-line" />
            <span>OUR SPECIALTY</span>
          </div>

          <h2 class="brand-story__title">
            한 분야에 집중할수록
            <br />
            <strong>진료는 더 깊어집니다.</strong>
          </h2>
        </div>

        <div class="brand-story__intro-right">
          <p class="brand-story__lead">
            자이비뇨의학과병원은
            <strong>전립선 질환을 중심으로 진료 경험을 축적해왔습니다.</strong>
          </p>

          <p class="brand-story__description">
            약물치료부터 최소침습 시술, 수술적 치료 그리고 정밀검사까지. 환자의 연령과 전립선 상태,
            기저질환, 증상 정도를 함께 살펴 한 가지 방법만을 고집하지 않고 적절한 치료 방향을
            고민합니다.
          </p>
        </div>
      </header>

      <!-- =====================================================
             SPECIALTY OVERVIEW
        ====================================================== -->
      <div ref="overviewRef" class="brand-story__overview">
        <article
          v-for="(item, index) in specialties"
          :key="item.title"
          class="brand-story__overview-card"
        >
          <div class="brand-story__overview-top">
            <span class="brand-story__overview-number">
              {{ String(index + 1).padStart(2, '0') }}
            </span>

            <span class="brand-story__overview-en">
              {{ item.eyebrow }}
            </span>
          </div>

          <h3 v-html="item.title" />

          <p>{{ item.description }}</p>

          <span class="brand-story__overview-line" />
        </article>
      </div>

      <!-- =====================================================
             HIGH RISK
        ====================================================== -->
      <section ref="highRiskRef" class="brand-story__clinic brand-story__clinic--highrisk">
        <div class="brand-story__clinic-visual">
          <img src="/images/brand/brand-highrisk-bg.webp" alt="고위험군 전립선비대증 진료" />

          <div class="brand-story__clinic-image-overlay" />

          <div class="brand-story__clinic-image-label">
            <span>01</span>
            <strong>HIGH-RISK BPH</strong>
          </div>
        </div>

        <div class="brand-story__clinic-content">
          <span class="brand-story__section-label">SPECIAL CLINIC 01</span>

          <h3>
            수술 부담이 큰 환자까지 고려하는
            <br />
            <strong>고위험군 전립선비대증 클리닉</strong>
          </h3>

          <p class="brand-story__clinic-lead">
            연령이나 기저질환 때문에 일반적인 수술이나 마취에 부담이 큰 경우, 환자의 전신상태와 치료
            필요성을 함께 고려한 접근이 중요합니다.
          </p>

          <div class="brand-story__risk-list">
            <div v-for="(item, index) in riskItems" :key="item" class="brand-story__risk-item">
              <span>
                {{ String(index + 1).padStart(2, '0') }}
              </span>

              <p>{{ item }}</p>
            </div>
          </div>

          <div class="brand-story__clinic-note">
            <span>OUR APPROACH</span>

            <p>
              자이비뇨의학과병원은 환자의 전립선 크기와 형태, 복용 중인 약물과 기저질환 등을
              종합적으로 살펴 유로리프트를 포함한 다양한 치료 방법 가운데 적절한 방향을 검토합니다.
            </p>
          </div>
        </div>
      </section>

      <!-- =====================================================
             PELVIC PAIN
        ====================================================== -->
      <section ref="pelvicRef" class="brand-story__pelvic">
        <div class="brand-story__section-heading">
          <div>
            <span class="brand-story__section-number">02</span>
            <p class="brand-story__section-label">CHRONIC PROSTATITIS</p>

            <h3>
              오래 지속되는 불편함을
              <br />
              <strong>한 가지 원인으로만 보지 않습니다.</strong>
            </h3>
          </div>

          <p>
            만성전립선염과 만성골반통증은 증상과 원인이 복합적으로 나타날 수 있어 환자마다 다른
            접근이 필요합니다.
          </p>
        </div>

        <div class="brand-story__pelvic-layout">
          <div class="brand-story__pelvic-image">
            <img src="/images/brand/brand-story-patient.webp" alt="만성골반통증과 전립선염 진료" />

            <span class="brand-story__image-caption"> CHRONIC PELVIC PAIN · PROSTATITIS </span>
          </div>

          <div class="brand-story__pelvic-content">
            <div class="brand-story__quote">
              <span>DIFFERENT APPROACH</span>

              <strong>
                반복되는 증상일수록
                <br />
                더 세심한 평가가 필요합니다.
              </strong>
            </div>

            <p>
              일반적인 약물치료 후에도 통증이나 배뇨 불편이 반복되는 경우에는 증상이 나타나는 양상과
              기간, 골반 주변의 상태 등을 함께 살펴볼 필요가 있습니다.
            </p>

            <p>
              자이비뇨의학과병원은 오랜 임상 경험을 바탕으로 약물치료뿐 아니라 환자의 상태에 따라
              체외충격파 ESWT, 템프로 등 다양한 치료 방법을 종합적으로 검토합니다.
            </p>

            <div class="brand-story__pelvic-points">
              <div>
                <span>01</span>
                <strong>반복되는 증상과 통증 평가</strong>
              </div>

              <div>
                <span>02</span>
                <strong>환자 상태에 따른 복합적 접근</strong>
              </div>

              <div>
                <span>03</span>
                <strong>장기적인 증상 관리 방향 제안</strong>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- =====================================================
             FAST CANCER
        ====================================================== -->
      <section ref="cancerRef" class="brand-story__cancer">
        <div class="brand-story__cancer-background">
          <img src="/images/brand/brand-fast-cancer-bg.webp" alt="" aria-hidden="true" />
        </div>

        <div class="brand-story__cancer-overlay" />

        <div class="brand-story__cancer-inner">
          <div class="brand-story__cancer-heading">
            <div>
              <span class="brand-story__section-number brand-story__section-number--light">
                03
              </span>

              <p class="brand-story__section-label brand-story__section-label--light">
                PROSTATE CANCER
              </p>

              <h3>
                기다림을 줄이고
                <br />
                <strong>다음 진료까지 빠르게 연결합니다.</strong>
              </h3>
            </div>

            <p>
              전립선암이 의심되는 상황에서 긴 대기 시간은 환자와 보호자 모두에게 큰 부담이 될 수
              있습니다. 검사와 결과 안내, 필요한 경우 상급병원 연계까지 보다 효율적인 진료 흐름을
              지향합니다.
            </p>
          </div>

          <div class="brand-story__cancer-process">
            <article
              v-for="(item, index) in cancerProcess"
              :key="item.title"
              class="brand-story__process-item"
            >
              <div class="brand-story__process-top">
                <span> STEP {{ String(index + 1).padStart(2, '0') }} </span>

                <strong>{{ item.number }}</strong>
              </div>

              <h4>{{ item.title }}</h4>
              <p>{{ item.description }}</p>

              <div
                v-if="index < cancerProcess.length - 1"
                class="brand-story__process-arrow"
                aria-hidden="true"
              >
                →
              </div>
            </article>
          </div>

          <div class="brand-story__cancer-highlight">
            <div>
              <span>RESULT GUIDE</span>

              <strong>
                검사 후
                <em>5~7일 내</em>
                결과 안내를 목표로 합니다.
              </strong>
            </div>

            <p>
              결과에 따라 추가 진료가 필요한 경우 환자가 원하는 상급병원으로 진료가 이어질 수 있도록
              필요한 자료 준비와 연계를 돕습니다.
            </p>
          </div>
        </div>
      </section>

      <!-- =====================================================
             CLOSING
        ====================================================== -->
      <footer ref="closingRef" class="brand-story__closing">
        <div class="brand-story__closing-label">
          <span>ZAII UROLOGY HOSPITAL</span>
        </div>

        <div class="brand-story__closing-content">
          <h3>
            치료법이 아니라
            <br />
            <strong>환자에게 필요한 방향을 봅니다.</strong>
          </h3>

          <p>
            전립선 질환은 같은 진단명이라도 환자의 연령과 전립선 상태, 증상, 기저질환에 따라 치료
            방향이 달라질 수 있습니다. 자이비뇨의학과병원은 축적된 경험을 바탕으로 환자 한 분 한
            분에게 적합한 선택지를 고민합니다.
          </p>
        </div>
      </footer>
    </div>
  </section>
</template>

<script setup lang="ts">
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const specialties = [
  {
    eyebrow: 'HIGH-RISK BPH',
    title: '고위험군<br />전립선비대증',
    description:
      '고령, 심혈관 질환, 항응고제 복용 등 일반적인 수술 판단에 더 세심한 고려가 필요한 환자를 진료합니다.'
  },
  {
    eyebrow: 'CHRONIC PROSTATITIS',
    title: '만성골반통증<br />전립선염',
    description:
      '반복되는 통증과 배뇨 불편을 세심하게 살펴 환자의 상태에 따른 다양한 치료 방향을 검토합니다.'
  },
  {
    eyebrow: 'PROSTATE CANCER',
    title: '전립선암<br />신속검사',
    description:
      '조직검사부터 결과 안내, 필요한 경우 상급병원 진료 연계까지 효율적인 진료 흐름을 지향합니다.'
  }
]

const riskItems = [
  '80세 이상의 고령으로 수술 및 마취 부담을 신중하게 고려해야 하는 경우',
  '뇌혈관질환 등으로 거동이 불편하거나 전신상태에 대한 고려가 필요한 경우',
  '심혈관질환으로 항응고제를 복용하고 있어 치료 방법 선택에 주의가 필요한 경우',
  '만성신부전 등으로 투석 치료를 받고 있는 경우',
  '만성폐질환 등으로 전신마취나 척추마취에 대한 부담이 큰 경우'
]

const cancerProcess = [
  {
    number: '01',
    title: '전립선 정밀검사',
    description: 'PSA와 영상검사 등 기존 검사 결과를 바탕으로 조직검사 필요 여부를 확인합니다.'
  },
  {
    number: '02',
    title: '조직검사',
    description: '필요한 경우 전립선 조직검사를 진행하고 이후 결과 확인 일정을 안내합니다.'
  },
  {
    number: '03',
    title: '결과 안내',
    description: '검사 후 가능한 빠른 일정으로 조직검사 결과와 향후 진료 방향을 설명합니다.'
  },
  {
    number: '04',
    title: '상급병원 연계',
    description:
      '전립선암이 확인되거나 추가 치료가 필요한 경우 상급병원 진료가 이어질 수 있도록 돕습니다.'
  }
]

const sectionRef = ref<HTMLElement | null>(null)

const introRef = ref<HTMLElement | null>(null)
const overviewRef = ref<HTMLElement | null>(null)
const highRiskRef = ref<HTMLElement | null>(null)
const pelvicRef = ref<HTMLElement | null>(null)
const cancerRef = ref<HTMLElement | null>(null)
const closingRef = ref<HTMLElement | null>(null)

let ctx: gsap.Context | null = null

onMounted(() => {
  const section = sectionRef.value

  if (!section) return

  gsap.registerPlugin(ScrollTrigger)

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

  if (reduceMotion) return

  ctx = gsap.context(() => {
    const reveal = (target: HTMLElement | null, y = 45, start = 'top 84%') => {
      if (!target) return

      gsap.from(target, {
        opacity: 0,
        y,
        duration: 0.95,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: target,
          start,
          once: true
        }
      })
    }

    reveal(introRef.value, 35, 'top 78%')
    reveal(highRiskRef.value)
    reveal(pelvicRef.value)
    reveal(cancerRef.value)
    reveal(closingRef.value)

    if (overviewRef.value) {
      const cards = overviewRef.value.querySelectorAll<HTMLElement>('.brand-story__overview-card')

      gsap.from(cards, {
        opacity: 0,
        y: 38,
        duration: 0.8,
        stagger: 0.12,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: overviewRef.value,
          start: 'top 84%',
          once: true
        }
      })
    }

    if (highRiskRef.value) {
      const items = highRiskRef.value.querySelectorAll<HTMLElement>('.brand-story__risk-item')

      gsap.from(items, {
        opacity: 0,
        x: 25,
        duration: 0.7,
        stagger: 0.08,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: highRiskRef.value,
          start: 'top 72%',
          once: true
        }
      })
    }

    if (cancerRef.value) {
      const steps = cancerRef.value.querySelectorAll<HTMLElement>('.brand-story__process-item')

      gsap.from(steps, {
        opacity: 0,
        y: 35,
        duration: 0.75,
        stagger: 0.1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: cancerRef.value,
          start: 'top 74%',
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
.brand-story {
  position: relative;
  overflow: hidden;
  padding: 140px 0 130px;
  background: #ffffff;
  color: #1d2d3e;
}

.brand-story__background {
  position: absolute;
  inset: 0;
  overflow: hidden;
  pointer-events: none;
}

.brand-story__watermark {
  position: absolute;
  top: 70px;
  right: -35px;

  font-size: clamp(100px, 11vw, 175px);
  line-height: 0.8;

  font-weight: 800;
  letter-spacing: -0.065em;

  color: rgba(30, 66, 98, 0.022);

  white-space: nowrap;
}

.brand-story__inner {
  position: relative;
  z-index: 1;
}

/* ========================================================
     INTRO
  ======================================================== */

.brand-story__intro {
  display: grid;
  grid-template-columns:
    minmax(0, 0.95fr)
    minmax(420px, 1.05fr);

  gap: 100px;
  align-items: end;
}

.brand-story__eyebrow {
  display: flex;
  align-items: center;
  gap: 14px;

  margin-bottom: 22px;

  font-size: 11px;
  line-height: 1;

  font-weight: 700;
  letter-spacing: 0.2em;

  color: #668198;
}

.brand-story__eyebrow-line {
  display: block;

  width: 34px;
  height: 1px;

  background: #668198;
}

.brand-story__title {
  margin: 0;

  font-size: clamp(44px, 4.3vw, 66px);
  line-height: 1.27;

  letter-spacing: -0.055em;
  font-weight: 400;

  color: #172b3f;

  word-break: keep-all;

  strong {
    font-weight: 700;
    color: #245f95;
  }
}

.brand-story__lead {
  margin: 0;

  font-size: 25px;
  line-height: 1.58;

  letter-spacing: -0.035em;
  font-weight: 500;

  color: #30475b;

  word-break: keep-all;

  strong {
    font-weight: 700;
    color: #245f95;
  }
}

.brand-story__description {
  max-width: 690px;

  margin: 24px 0 0;

  font-size: 16px;
  line-height: 1.9;

  color: #74818d;

  word-break: keep-all;
}

/* ========================================================
     OVERVIEW
  ======================================================== */

.brand-story__overview {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));

  margin-top: 90px;

  border-top: 1px solid #dce5eb;
  border-bottom: 1px solid #dce5eb;
}

.brand-story__overview-card {
  position: relative;

  min-width: 0;

  padding: 42px 38px 46px;

  + .brand-story__overview-card {
    border-left: 1px solid #dce5eb;
  }
}

.brand-story__overview-top {
  display: flex;
  align-items: center;
  justify-content: space-between;

  gap: 20px;

  margin-bottom: 28px;
}

.brand-story__overview-number {
  font-size: 11px;
  line-height: 1;

  font-weight: 700;

  color: #4177a5;
}

.brand-story__overview-en {
  font-size: 8px;
  line-height: 1;

  font-weight: 700;
  letter-spacing: 0.16em;

  color: #95a5b2;
}

.brand-story__overview-card h3 {
  margin: 0;

  font-size: 26px;
  line-height: 1.42;

  font-weight: 700;
  letter-spacing: -0.04em;

  color: #263c50;

  word-break: keep-all;
}

.brand-story__overview-card p {
  margin: 16px 0 0;

  font-size: 14px;
  line-height: 1.8;

  color: #778590;

  word-break: keep-all;
}

.brand-story__overview-line {
  display: block;

  width: 0;
  height: 2px;

  margin-top: 27px;

  background: #3978ac;

  transition: width 0.5s cubic-bezier(0.22, 1, 0.36, 1);
}

.brand-story__overview-card:hover {
  .brand-story__overview-line {
    width: 46px;
  }
}

/* ========================================================
     COMMON
  ======================================================== */

.brand-story__section-label {
  display: block;

  margin: 0 0 15px;

  font-size: 9px;
  line-height: 1;

  font-weight: 700;
  letter-spacing: 0.19em;

  color: #718da5;
}

.brand-story__section-label--light {
  color: rgba(255, 255, 255, 0.5);
}

.brand-story__section-number {
  display: block;

  margin-bottom: 14px;

  font-size: 10px;
  line-height: 1;

  font-weight: 700;
  letter-spacing: 0.12em;

  color: #a2afb9;
}

.brand-story__section-number--light {
  color: rgba(255, 255, 255, 0.35);
}

.brand-story__section-heading {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;

  gap: 70px;

  margin-bottom: 58px;
}

.brand-story__section-heading h3 {
  margin: 0;

  font-size: 35px;
  line-height: 1.48;

  font-weight: 400;
  letter-spacing: -0.045em;

  color: #21374a;

  word-break: keep-all;

  strong {
    color: #245f95;
    font-weight: 700;
  }
}

.brand-story__section-heading > p {
  max-width: 390px;

  margin: 0 0 4px;

  font-size: 14px;
  line-height: 1.85;

  color: #7b8995;

  word-break: keep-all;
}

/* ========================================================
     HIGH RISK
  ======================================================== */

.brand-story__clinic {
  display: grid;
  grid-template-columns:
    minmax(0, 0.82fr)
    minmax(0, 1.18fr);

  margin-top: 120px;
}

.brand-story__clinic-visual {
  position: relative;

  min-height: 720px;

  overflow: hidden;

  background: #dfe7ed;

  img {
    display: block;

    width: 100%;
    height: 100%;

    object-fit: cover;
  }
}

.brand-story__clinic-image-overlay {
  position: absolute;
  inset: 0;

  background: linear-gradient(180deg, rgba(15, 34, 50, 0.03) 30%, rgba(15, 34, 50, 0.6) 100%);
}

.brand-story__clinic-image-label {
  position: absolute;

  right: 30px;
  bottom: 30px;
  left: 30px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  gap: 20px;

  span,
  strong {
    color: #ffffff;
  }

  span {
    font-size: 10px;
    letter-spacing: 0.12em;
  }

  strong {
    font-size: 10px;
    letter-spacing: 0.16em;
  }
}

.brand-story__clinic-content {
  padding: 68px 70px 70px;

  background: #f3f7fa;
}

.brand-story__clinic-content h3 {
  margin: 0;

  font-size: 34px;
  line-height: 1.5;

  font-weight: 400;
  letter-spacing: -0.045em;

  color: #203649;

  word-break: keep-all;

  strong {
    color: #245f95;
    font-weight: 700;
  }
}

.brand-story__clinic-lead {
  margin: 25px 0 0;

  font-size: 16px;
  line-height: 1.9;

  color: #6f7e8a;

  word-break: keep-all;
}

.brand-story__risk-list {
  margin-top: 35px;

  border-top: 1px solid #d5e0e7;
}

.brand-story__risk-item {
  display: grid;
  grid-template-columns: 38px minmax(0, 1fr);

  gap: 14px;

  padding: 17px 0;

  border-bottom: 1px solid #d5e0e7;

  span {
    padding-top: 2px;

    font-size: 9px;
    font-weight: 700;

    color: #7592aa;
  }

  p {
    margin: 0;

    font-size: 14px;
    line-height: 1.7;

    color: #566b7c;

    word-break: keep-all;
  }
}

.brand-story__clinic-note {
  margin-top: 32px;
  padding: 23px 24px;

  background: #ffffff;

  span {
    display: block;

    margin-bottom: 9px;

    font-size: 8px;

    font-weight: 700;
    letter-spacing: 0.16em;

    color: #7490a6;
  }

  p {
    margin: 0;

    font-size: 13px;
    line-height: 1.8;

    color: #667784;

    word-break: keep-all;
  }
}

/* ========================================================
     PELVIC
  ======================================================== */

.brand-story__pelvic {
  margin-top: 125px;
}

.brand-story__pelvic-layout {
  display: grid;
  grid-template-columns:
    minmax(0, 0.92fr)
    minmax(0, 1.08fr);

  gap: 80px;

  align-items: center;
}

.brand-story__pelvic-image {
  position: relative;

  aspect-ratio: 1 / 1;

  overflow: hidden;

  background: #e5ebef;

  img {
    display: block;

    width: 100%;
    height: 100%;

    object-fit: cover;
  }
}

.brand-story__image-caption {
  position: absolute;

  right: 22px;
  bottom: 20px;
  left: 22px;

  font-size: 9px;

  font-weight: 700;
  letter-spacing: 0.12em;

  color: rgba(255, 255, 255, 0.82);

  text-shadow: 0 1px 8px rgba(0, 0, 0, 0.35);
}

.brand-story__quote {
  margin-bottom: 30px;

  span {
    display: block;

    margin-bottom: 12px;

    font-size: 8px;

    font-weight: 700;
    letter-spacing: 0.17em;

    color: #7991a5;
  }

  strong {
    display: block;

    font-size: 27px;
    line-height: 1.5;

    letter-spacing: -0.04em;

    color: #2a4155;

    word-break: keep-all;
  }
}

.brand-story__pelvic-content > p {
  margin: 0;

  font-size: 15px;
  line-height: 1.9;

  color: #75838e;

  word-break: keep-all;
}

.brand-story__pelvic-content > p + p {
  margin-top: 18px;
}

.brand-story__pelvic-points {
  margin-top: 35px;

  border-top: 1px solid #dce4e9;

  > div {
    display: grid;
    grid-template-columns: 48px minmax(0, 1fr);

    align-items: center;

    gap: 14px;

    padding: 17px 0;

    border-bottom: 1px solid #dce4e9;
  }

  span {
    font-size: 9px;
    font-weight: 700;

    color: #7390a8;
  }

  strong {
    font-size: 14px;
    line-height: 1.6;

    font-weight: 600;

    color: #42586b;

    word-break: keep-all;
  }
}

/* ========================================================
     CANCER
  ======================================================== */

.brand-story__cancer {
  position: relative;

  margin-top: 130px;

  overflow: hidden;

  color: #ffffff;

  background: #1b354e;
}

.brand-story__cancer-background,
.brand-story__cancer-overlay {
  position: absolute;
  inset: 0;
}

.brand-story__cancer-background {
  img {
    display: block;

    width: 100%;
    height: 100%;

    object-fit: cover;
  }
}

.brand-story__cancer-overlay {
  background: linear-gradient(
    90deg,
    rgba(19, 44, 65, 0.96) 0%,
    rgba(19, 44, 65, 0.91) 43%,
    rgba(19, 44, 65, 0.75) 100%
  );
}

.brand-story__cancer-inner {
  position: relative;
  z-index: 1;

  padding: 80px 70px;
}

.brand-story__cancer-heading {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;

  gap: 70px;
}

.brand-story__cancer-heading h3 {
  margin: 0;

  font-size: 35px;
  line-height: 1.48;

  font-weight: 400;
  letter-spacing: -0.045em;

  color: #ffffff;

  word-break: keep-all;

  strong {
    color: #aed2ee;
    font-weight: 700;
  }
}

.brand-story__cancer-heading > p {
  max-width: 420px;

  margin: 0 0 4px;

  font-size: 14px;
  line-height: 1.85;

  color: rgba(255, 255, 255, 0.65);

  word-break: keep-all;
}

/* PROCESS */

.brand-story__cancer-process {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));

  margin-top: 62px;

  border-top: 1px solid rgba(255, 255, 255, 0.17);
  border-bottom: 1px solid rgba(255, 255, 255, 0.17);
}

.brand-story__process-item {
  position: relative;

  min-width: 0;

  padding: 30px 28px 32px 0;

  + .brand-story__process-item {
    padding-left: 28px;

    border-left: 1px solid rgba(255, 255, 255, 0.17);
  }
}

.brand-story__process-top {
  display: flex;
  align-items: center;
  justify-content: space-between;

  gap: 20px;

  margin-bottom: 24px;

  span {
    font-size: 8px;

    font-weight: 700;
    letter-spacing: 0.14em;

    color: rgba(255, 255, 255, 0.4);
  }

  strong {
    font-size: 26px;

    color: rgba(172, 210, 239, 0.65);
  }
}

.brand-story__process-item h4 {
  margin: 0;

  font-size: 20px;
  line-height: 1.4;

  color: #ffffff;
}

.brand-story__process-item p {
  margin: 13px 0 0;

  font-size: 13px;
  line-height: 1.75;

  color: rgba(255, 255, 255, 0.59);

  word-break: keep-all;
}

.brand-story__process-arrow {
  position: absolute;

  top: 50%;
  right: -10px;

  z-index: 2;

  width: 20px;

  font-size: 18px;
  line-height: 1;

  color: rgba(174, 210, 238, 0.55);

  transform: translateY(-50%);
}

.brand-story__cancer-highlight {
  display: grid;
  grid-template-columns:
    minmax(0, 0.9fr)
    minmax(0, 1.1fr);

  gap: 70px;

  align-items: center;

  margin-top: 55px;
  padding: 33px 36px;

  background: rgba(255, 255, 255, 0.07);

  border: 1px solid rgba(255, 255, 255, 0.12);

  > div > span {
    display: block;

    margin-bottom: 10px;

    font-size: 8px;

    font-weight: 700;
    letter-spacing: 0.16em;

    color: rgba(255, 255, 255, 0.42);
  }

  strong {
    display: block;

    font-size: 22px;
    line-height: 1.55;

    font-weight: 500;

    color: #ffffff;

    word-break: keep-all;

    em {
      margin: 0 4px;

      font-style: normal;
      font-weight: 700;

      color: #b7d9f2;
    }
  }

  > p {
    margin: 0;

    font-size: 14px;
    line-height: 1.8;

    color: rgba(255, 255, 255, 0.62);

    word-break: keep-all;
  }
}

/* ========================================================
     CLOSING
  ======================================================== */

.brand-story__closing {
  display: grid;
  grid-template-columns: 0.65fr 1.35fr;

  gap: 70px;

  margin-top: 120px;
  padding-top: 60px;

  border-top: 1px solid #dce4e9;
}

.brand-story__closing-label {
  span {
    font-size: 9px;

    font-weight: 700;
    letter-spacing: 0.17em;

    color: #879aa9;
  }
}

.brand-story__closing-content {
  h3 {
    margin: 0;

    font-size: 35px;
    line-height: 1.48;

    letter-spacing: -0.045em;
    font-weight: 400;

    color: #21364a;

    word-break: keep-all;

    strong {
      font-weight: 700;
      color: #245f95;
    }
  }

  p {
    max-width: 720px;

    margin: 26px 0 0;

    font-size: 15px;
    line-height: 1.9;

    color: #788590;

    word-break: keep-all;
  }
}

/* ========================================================
     DESKTOP DOWN
  ======================================================== */

@include desktop-down {
  .brand-story {
    padding: 120px 0;
  }

  .brand-story__intro {
    gap: 70px;
  }

  .brand-story__clinic-content {
    padding: 58px 52px;
  }

  .brand-story__clinic-content h3,
  .brand-story__section-heading h3,
  .brand-story__cancer-heading h3,
  .brand-story__closing-content h3 {
    font-size: 31px;
  }

  .brand-story__pelvic-layout {
    gap: 60px;
  }

  .brand-story__cancer-inner {
    padding: 70px 55px;
  }
}

/* ========================================================
     LAPTOP
  ======================================================== */

@include laptop-down {
  .brand-story {
    padding: 95px 0;
  }

  .brand-story__intro {
    grid-template-columns: 1fr;
    gap: 35px;
  }

  .brand-story__intro-right {
    max-width: 760px;
  }

  /* OVERVIEW */

  .brand-story__overview {
    grid-template-columns: 1fr;

    margin-top: 65px;
  }

  .brand-story__overview-card {
    padding: 30px 28px;

    + .brand-story__overview-card {
      border-top: 1px solid #dce5eb;
      border-left: 0;
    }
  }

  .brand-story__overview-line {
    display: none;
  }

  /* HIGH RISK */

  .brand-story__clinic {
    grid-template-columns: 1fr;

    margin-top: 85px;
  }

  .brand-story__clinic-visual {
    min-height: 500px;
  }

  .brand-story__clinic-content {
    padding: 50px 42px;
  }

  /* SECTION */

  .brand-story__section-heading {
    display: block;

    margin-bottom: 43px;
  }

  .brand-story__section-heading > p {
    max-width: 600px;

    margin-top: 20px;
  }

  /* PELVIC */

  .brand-story__pelvic {
    margin-top: 90px;
  }

  .brand-story__pelvic-layout {
    grid-template-columns: 1fr;

    gap: 40px;
  }

  .brand-story__pelvic-image {
    width: min(100%, 600px);
  }

  .brand-story__pelvic-content {
    max-width: 720px;
  }

  /* CANCER */

  .brand-story__cancer {
    margin-top: 95px;
  }

  .brand-story__cancer-heading {
    display: block;
  }

  .brand-story__cancer-heading > p {
    max-width: 650px;

    margin-top: 22px;
  }

  .brand-story__cancer-process {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .brand-story__process-item {
    padding: 28px;

    &:nth-child(2) {
      border-right: 0;
    }

    &:nth-child(3) {
      border-top: 1px solid rgba(255, 255, 255, 0.17);
      border-left: 0;
    }

    &:nth-child(4) {
      border-top: 1px solid rgba(255, 255, 255, 0.17);
    }
  }

  .brand-story__process-arrow {
    display: none;
  }

  .brand-story__cancer-highlight {
    grid-template-columns: 1fr;

    gap: 20px;
  }

  /* CLOSING */

  .brand-story__closing {
    grid-template-columns: 1fr;

    gap: 25px;

    margin-top: 90px;
  }
}

/* ========================================================
     MOBILE
  ======================================================== */

@include mobile {
  .brand-story {
    padding: 72px 0 78px;
  }

  .brand-story__watermark {
    top: 40px;
    right: -10px;
    font-size: 62px;
  }

  /* INTRO */

  .brand-story__eyebrow {
    gap: 10px;
    margin-bottom: 16px;
    font-size: 9px;
  }

  .brand-story__eyebrow-line {
    width: 24px;
  }

  .brand-story__title {
    font-size: 35px;
  }

  .brand-story__lead {
    font-size: 20px;
  }

  .brand-story__description {
    margin-top: 18px;
    font-size: 14px;
    line-height: 1.8;
  }

  /* OVERVIEW */

  .brand-story__overview {
    margin-top: 48px;
  }

  .brand-story__overview-card {
    padding: 25px 20px 27px;
  }

  .brand-story__overview-top {
    margin-bottom: 18px;
  }

  .brand-story__overview-card h3 {
    font-size: 21px;
  }

  .brand-story__overview-card p {
    margin-top: 12px;
    font-size: 13px;
    line-height: 1.75;
  }

  /* HIGH RISK */

  .brand-story__clinic {
    margin-top: 65px;
    margin-left: calc(var(--container-padding, 20px) * -1);
    margin-right: calc(var(--container-padding, 20px) * -1);
  }

  .brand-story__clinic-visual {
    min-height: 380px;
  }

  .brand-story__clinic-image-label {
    right: 20px;
    bottom: 18px;
    left: 20px;
  }

  .brand-story__clinic-content {
    padding: 40px 20px 44px;
  }

  .brand-story__clinic-content h3,
  .brand-story__section-heading h3,
  .brand-story__cancer-heading h3,
  .brand-story__closing-content h3 {
    font-size: 25px;
  }

  .brand-story__clinic-lead {
    margin-top: 20px;
    font-size: 14px;
    line-height: 1.8;
  }

  .brand-story__risk-list {
    margin-top: 28px;
  }

  .brand-story__risk-item {
    grid-template-columns: 30px minmax(0, 1fr);
    gap: 8px;
    padding: 14px 0;

    p {
      font-size: 13px;
    }
  }

  .brand-story__clinic-note {
    margin-top: 25px;
    padding: 19px 18px;

    p {
      font-size: 12px;
    }
  }

  /* PELVIC */

  .brand-story__pelvic {
    margin-top: 70px;
  }

  .brand-story__section-heading {
    margin-bottom: 31px;
  }

  .brand-story__section-heading > p {
    margin-top: 17px;
    font-size: 13px;
    line-height: 1.8;
  }

  .brand-story__pelvic-layout {
    gap: 30px;
  }

  /*
   * 모바일에서는 이미지 가로폭을
   * 컨테이너 전체로 사용
   */
  .brand-story__pelvic-image {
    width: 100%;
    max-width: none;
    aspect-ratio: 1 / 1;
  }

  .brand-story__pelvic-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .brand-story__quote {
    margin-bottom: 22px;

    strong {
      font-size: 21px;
    }
  }

  .brand-story__pelvic-content > p {
    font-size: 14px;
    line-height: 1.8;
  }

  .brand-story__pelvic-points {
    margin-top: 27px;

    > div {
      grid-template-columns: 34px minmax(0, 1fr);
      padding: 14px 0;
    }

    strong {
      font-size: 13px;
    }
  }

  /* CANCER */

  .brand-story__cancer {
    margin-top: 70px;
    margin-left: calc(var(--container-padding, 20px) * -1);
    margin-right: calc(var(--container-padding, 20px) * -1);
  }

  .brand-story__cancer-inner {
    padding: 44px 20px;
  }

  .brand-story__cancer-heading > p {
    margin-top: 18px;
    font-size: 13px;
    line-height: 1.8;
  }

  .brand-story__cancer-process {
    grid-template-columns: 1fr;
    margin-top: 38px;
  }

  .brand-story__process-item,
  .brand-story__process-item + .brand-story__process-item {
    padding: 23px 0;
    border-top: 0;
    border-right: 0;
    border-left: 0;
  }

  .brand-story__process-item + .brand-story__process-item {
    border-top: 1px solid rgba(255, 255, 255, 0.17);
  }

  .brand-story__process-top {
    margin-bottom: 15px;
  }

  .brand-story__process-item h4 {
    font-size: 18px;
  }

  .brand-story__process-item p {
    margin-top: 9px;
    font-size: 12px;
  }

  .brand-story__cancer-highlight {
    gap: 17px;
    margin-top: 35px;
    padding: 22px 20px;

    strong {
      font-size: 18px;
    }

    > p {
      font-size: 12px;
    }
  }

  /* CLOSING */

  .brand-story__closing {
    gap: 20px;
    margin-top: 70px;
    padding-top: 40px;
  }

  .brand-story__closing-content p {
    margin-top: 20px;
    font-size: 14px;
    line-height: 1.8;
  }
}

@media (prefers-reduced-motion: reduce) {
  .brand-story *,
  .brand-story *::before,
  .brand-story *::after {
    animation: none !important;
    transition: none !important;
  }
}
</style>
