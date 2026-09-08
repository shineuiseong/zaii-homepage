<template>
  <section ref="sectionRef" class="medical-team">
    <!-- =====================================================
         BACKGROUND
    ====================================================== -->
    <div class="medical-team__background" aria-hidden="true">
      <span class="medical-team__watermark">MEDICAL TEAM</span>
    </div>

    <div class="container medical-team__inner">
      <!-- =====================================================
           INTRO
      ====================================================== -->
      <header ref="introRef" class="medical-team__intro">
        <div class="medical-team__intro-left">
          <div class="medical-team__eyebrow">
            <span class="medical-team__eyebrow-line" />
            <span>MEDICAL TEAM</span>
          </div>

          <h2 class="medical-team__title">
            환자를 바라보는
            <br />
            <strong>경험의 깊이</strong>
          </h2>
        </div>

        <div class="medical-team__intro-right">
          <p class="medical-team__lead">
            자이비뇨의학과병원의 의료진은
            <strong>오랜 임상 경험을 바탕으로 직접 진료합니다.</strong>
          </p>

          <p class="medical-team__description">
            환자의 증상과 전립선 상태, 연령과 기저질환까지 함께 고려해 필요한 검사와 치료 방향을
            세심하게 판단합니다.
          </p>
        </div>
      </header>

      <!-- =====================================================
           DOCTOR 01
      ====================================================== -->
      <article ref="directorRef" class="doctor">
        <div class="doctor__top">
          <!-- IMAGE -->
          <div class="doctor__visual">
            <div class="doctor__image">
              <img
                src="/images/main/director-profile.webp"
                alt="자이비뇨의학과병원 변재상 병원장"
              />

              <div class="doctor__image-bottom">
                <span>01</span>
                <span>MEDICAL DIRECTOR</span>
              </div>
            </div>
          </div>

          <!-- INTRO -->
          <div class="doctor__intro">
            <span class="doctor__role">병원장</span>

            <div class="doctor__name">
              <h3>변재상</h3>
              <span>병원장</span>
            </div>

            <p class="doctor__summary">
              전립선 질환 치료에 오랜 시간 집중해온 경험을 바탕으로 환자의 상태에 따라 필요한 검사와
              치료 방향을 세심하게 판단합니다.
            </p>

            <div class="doctor__keywords">
              <span>전립선비대증</span>
              <span>유로리프트</span>
              <span>전립선 정밀진료</span>
            </div>
          </div>
        </div>

        <!-- CAREER -->
        <div class="doctor__detail">
          <div class="doctor__detail-heading">
            <span>CAREER</span>
            <h4>주요 약력</h4>
          </div>

          <div class="doctor__career">
            <div
              v-for="(item, index) in directorCareer"
              :key="item.period"
              class="doctor__career-item"
            >
              <span class="doctor__career-number">
                {{ String(index + 1).padStart(2, '0') }}
              </span>

              <strong>{{ item.period }}</strong>

              <p>{{ item.text }}</p>
            </div>
          </div>
        </div>
      </article>

      <!-- =====================================================
           DOCTOR DIVIDER
      ====================================================== -->
      <div class="medical-team__divider">
        <span />
      </div>

      <!-- =====================================================
           DOCTOR 02
      ====================================================== -->
      <article ref="viceRef" class="doctor">
        <div class="doctor__top">
          <!-- IMAGE -->
          <div class="doctor__visual">
            <div class="doctor__image doctor__image--vice">
              <img
                src="/images/main/vice-director-profile.webp"
                alt="자이비뇨의학과병원 이홍우 원장"
              />

              <div class="doctor__image-bottom">
                <span>02</span>
                <span>UROLOGIST</span>
              </div>
            </div>
          </div>

          <!-- INTRO -->
          <div class="doctor__intro">
            <span class="doctor__role">원장</span>

            <div class="doctor__name">
              <h3>이홍우</h3>
              <span>원장</span>
            </div>

            <p class="doctor__summary">
              비뇨의학과 전반에 대한 폭넓은 임상 경험을 바탕으로 전립선질환, 배뇨장애, 요실금,
              요로결석 등 다양한 비뇨기계 질환을 진료합니다.
            </p>

            <div class="doctor__keywords">
              <span>전립선질환</span>
              <span>배뇨장애</span>
              <span>요실금</span>
              <span>요로결석</span>
            </div>
          </div>
        </div>

        <!-- SPECIALTY -->
        <div class="doctor__detail">
          <div class="doctor__detail-heading">
            <span>SPECIALTY</span>
            <h4>주요 진료분야</h4>
          </div>

          <div class="doctor__specialty">
            <div v-for="(item, index) in specialties" :key="item" class="doctor__specialty-item">
              <span>
                {{ String(index + 1).padStart(2, '0') }}
              </span>

              <strong>{{ item }}</strong>
            </div>
          </div>
        </div>

        <!-- EDUCATION -->
        <div class="doctor__detail doctor__detail--career">
          <div class="doctor__detail-heading">
            <span>EDUCATION &amp; CAREER</span>
            <h4>학력 및 경력</h4>
          </div>

          <div class="doctor__career doctor__career--simple">
            <div v-for="(item, index) in viceCareer" :key="item" class="doctor__career-item">
              <span class="doctor__career-number">
                {{ String(index + 1).padStart(2, '0') }}
              </span>

              <p>{{ item }}</p>
            </div>
          </div>
        </div>
      </article>

      <!-- =====================================================
           CLOSING
      ====================================================== -->
      <footer ref="closingRef" class="medical-team__closing">
        <div class="medical-team__closing-label">
          <span>ZAII UROLOGY HOSPITAL</span>
        </div>

        <div class="medical-team__closing-content">
          <h3>
            필요한 치료를 판단하는 것,
            <br />
            <strong>그 시작은 충분한 경험입니다.</strong>
          </h3>

          <p>
            자이비뇨의학과병원은 의료진의 임상 경험과 환자에 대한 세심한 평가를 바탕으로 검사부터
            치료, 사후관리까지 일관된 진료를 이어가고 있습니다.
          </p>
        </div>
      </footer>
    </div>
  </section>
</template>

<script setup lang="ts">
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const directorCareer = [
  {
    period: '1998 — 2006',
    text: '연세플러스비뇨기과 대표원장'
  },
  {
    period: '2007 — 2014',
    text: '자이비뇨기과병원 병원장'
  },
  {
    period: '2016 — 2017',
    text: '나은병원 전립선센터장 · 비뇨기과 과장'
  },
  {
    period: '2018 — 2019',
    text: '강남베드로병원 전립선센터장 · 비뇨기과 원장'
  },
  {
    period: '2020 — 2022',
    text: '자이비뇨의학과 원장'
  },
  {
    period: '2022 — TODAY',
    text: '자이비뇨의학과병원 병원장'
  }
]

const specialties = [
  '전립선비대증',
  '전립선염',
  '배뇨장애',
  '요실금 · 과민성방광',
  '요로결석',
  '기타 비뇨기계 질환'
]

const viceCareer = [
  '가톨릭대학교 의과대학 졸업',
  '가톨릭의대 성모병원 인턴 · 레지던트 수료',
  '가톨릭대학교 의과대학 석사 · 의학박사',
  '가톨릭의대 성모병원 조교수 · 부교수',
  '청주 유로센터 비뇨기과',
  '미국 University of Virginia Health Science Center 전립선 연수',
  '대한비뇨의학회 이사 · 정회원',
  '대한전립선학회 이사 · 정회원',
  '대한배뇨장애요실금학회 정회원',
  '대한비뇨기종양학회 정회원'
]

const sectionRef = ref<HTMLElement | null>(null)
const introRef = ref<HTMLElement | null>(null)
const directorRef = ref<HTMLElement | null>(null)
const viceRef = ref<HTMLElement | null>(null)
const closingRef = ref<HTMLElement | null>(null)

let ctx: gsap.Context | null = null

onMounted(() => {
  const section = sectionRef.value

  if (!section) return

  gsap.registerPlugin(ScrollTrigger)

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

  if (reduceMotion) return

  ctx = gsap.context(() => {
    const reveal = (target: HTMLElement | null, y = 38, start = 'top 84%') => {
      if (!target) return

      gsap.from(target, {
        opacity: 0,
        y,
        duration: 0.9,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: target,
          start,
          once: true
        }
      })
    }

    reveal(introRef.value, 30, 'top 78%')
    reveal(directorRef.value)
    reveal(viceRef.value)
    reveal(closingRef.value)
  }, section)
})

onBeforeUnmount(() => {
  ctx?.revert()
  ctx = null
})
</script>

<style scoped lang="scss">
.medical-team {
  position: relative;
  overflow: hidden;
  padding: 140px 0 130px;
  background: #ffffff;
  color: #1d2d3e;
}

/* ========================================================
   BACKGROUND
======================================================== */

.medical-team__background {
  position: absolute;
  inset: 0;
  overflow: hidden;
  pointer-events: none;
}

.medical-team__watermark {
  position: absolute;
  top: 70px;
  right: -30px;

  font-size: clamp(100px, 11vw, 175px);
  line-height: 0.8;

  font-weight: 800;
  letter-spacing: -0.065em;

  color: rgba(31, 67, 98, 0.022);

  white-space: nowrap;
}

.medical-team__inner {
  position: relative;
  z-index: 1;
}

/* ========================================================
   INTRO
======================================================== */

.medical-team__intro {
  display: grid;
  grid-template-columns:
    minmax(0, 0.95fr)
    minmax(420px, 1.05fr);

  gap: 100px;
  align-items: end;
}

.medical-team__eyebrow {
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

.medical-team__eyebrow-line {
  display: block;

  width: 34px;
  height: 1px;

  background: #668198;
}

.medical-team__title {
  margin: 0;

  font-size: clamp(44px, 4.3vw, 66px);
  line-height: 1.27;

  font-weight: 400;
  letter-spacing: -0.055em;

  color: #172b3f;

  word-break: keep-all;

  strong {
    color: #245f95;
    font-weight: 700;
  }
}

.medical-team__lead {
  margin: 0;

  font-size: 25px;
  line-height: 1.58;

  letter-spacing: -0.035em;
  font-weight: 500;

  color: #30475b;

  word-break: keep-all;

  strong {
    color: #245f95;
    font-weight: 700;
  }
}

.medical-team__description {
  max-width: 690px;

  margin: 24px 0 0;

  font-size: 16px;
  line-height: 1.9;

  color: #74818d;

  word-break: keep-all;
}

/* ========================================================
   DOCTOR
======================================================== */

.doctor {
  margin-top: 110px;
}

/* ========================================================
   DOCTOR TOP
======================================================== */

.doctor__top {
  display: grid;

  /*
   * 사진이 너무 커지지 않도록
   * 최대 420px 정도만 사용
   */
  grid-template-columns:
    minmax(300px, 400px)
    minmax(0, 1fr);

  gap: clamp(55px, 7vw, 110px);

  align-items: center;
}

.doctor__visual {
  min-width: 0;
}

.doctor__image {
  position: relative;

  width: 100%;

  aspect-ratio: 4 / 5;

  overflow: hidden;

  background: #e8edf1;

  img {
    display: block;

    width: 100%;
    height: 100%;

    object-fit: cover;
    object-position: center top;
  }
}

.doctor__image--vice {
  /*
   * 이홍우 원장 이미지는 기존 캡처처럼
   * 얼굴이 지나치게 확대되지 않도록 조정
   */
  img {
    object-position: center center;
  }
}

.doctor__image-bottom {
  position: absolute;

  right: 22px;
  bottom: 20px;
  left: 22px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  gap: 20px;

  &::before {
    content: '';

    position: absolute;

    inset: -90px -22px -20px;

    z-index: -1;

    background: linear-gradient(180deg, rgba(13, 30, 45, 0) 0%, rgba(13, 30, 45, 0.55) 100%);
  }

  span {
    position: relative;

    font-size: 9px;
    line-height: 1;

    font-weight: 700;
    letter-spacing: 0.15em;

    color: rgba(255, 255, 255, 0.86);
  }
}

/* ========================================================
   DOCTOR INTRO
======================================================== */

.doctor__intro {
  max-width: 690px;
}

.doctor__role {
  display: block;

  margin-bottom: 14px;

  font-size: 10px;
  line-height: 1;

  font-weight: 700;
  letter-spacing: 0.15em;

  color: #6d8aa2;
}

.doctor__name {
  display: flex;
  align-items: baseline;

  gap: 13px;

  h3 {
    margin: 0;

    font-size: 58px;
    line-height: 1;

    letter-spacing: -0.06em;
    font-weight: 700;

    color: #20364a;
  }

  span {
    font-size: 16px;

    color: #7b8a96;
  }
}

.doctor__summary {
  max-width: 650px;

  margin: 28px 0 0;

  font-size: 17px;
  line-height: 1.9;

  color: #71808c;

  word-break: keep-all;
}

.doctor__keywords {
  display: flex;
  flex-wrap: wrap;

  gap: 8px;

  margin-top: 30px;

  span {
    display: inline-flex;
    align-items: center;

    min-height: 35px;

    padding: 0 15px;

    border: 1px solid #dbe5ec;

    font-size: 11px;
    font-weight: 600;

    color: #557189;

    background: #ffffff;
  }
}

/* ========================================================
   DETAILS
======================================================== */

.doctor__detail {
  display: grid;

  grid-template-columns:
    240px
    minmax(0, 1fr);

  gap: 55px;

  margin-top: 62px;
  padding-top: 30px;

  border-top: 1px solid #d8e2e8;
}

.doctor__detail--career {
  margin-top: 55px;
}

.doctor__detail-heading {
  span {
    display: block;

    margin-bottom: 10px;

    font-size: 8px;
    line-height: 1;

    font-weight: 700;
    letter-spacing: 0.17em;

    color: #8ba0b0;
  }

  h4 {
    margin: 0;

    font-size: 18px;
    line-height: 1.45;

    font-weight: 700;

    color: #344d61;
  }
}

/* ========================================================
   CAREER
======================================================== */

.doctor__career {
  border-top: 1px solid #e0e7ec;
}

.doctor__career-item {
  display: grid;

  grid-template-columns:
    38px
    150px
    minmax(0, 1fr);

  gap: 15px;

  align-items: center;

  min-height: 58px;

  padding: 12px 0;

  border-bottom: 1px solid #e0e7ec;
}

.doctor__career-number {
  font-size: 8px;

  font-weight: 700;

  color: #9cabb6;
}

.doctor__career-item strong {
  font-size: 13px;
  line-height: 1.6;

  font-weight: 700;

  color: #557f9f;
}

.doctor__career-item p {
  margin: 0;

  font-size: 14px;
  line-height: 1.7;

  color: #617381;

  word-break: keep-all;
}

.doctor__career--simple {
  .doctor__career-item {
    grid-template-columns:
      38px
      minmax(0, 1fr);
  }
}

/* ========================================================
   SPECIALTY
======================================================== */

.doctor__specialty {
  display: grid;

  grid-template-columns: repeat(2, minmax(0, 1fr));

  border-top: 1px solid #e0e7ec;
}

.doctor__specialty-item {
  display: grid;

  grid-template-columns:
    40px
    minmax(0, 1fr);

  align-items: center;

  gap: 12px;

  min-height: 65px;

  border-bottom: 1px solid #e0e7ec;

  &:nth-child(odd) {
    padding-right: 25px;
  }

  &:nth-child(even) {
    padding-left: 25px;

    border-left: 1px solid #e0e7ec;
  }

  span {
    font-size: 8px;

    color: #98a9b5;
  }

  strong {
    font-size: 14px;
    line-height: 1.6;

    font-weight: 600;

    color: #506575;

    word-break: keep-all;
  }
}

/* ========================================================
   DIVIDER
======================================================== */

.medical-team__divider {
  margin: 120px 0 0;

  span {
    display: block;

    width: 100%;
    height: 1px;

    background: #dce4e9;
  }
}

/* ========================================================
   CLOSING
======================================================== */

.medical-team__closing {
  display: grid;

  grid-template-columns:
    240px
    minmax(0, 1fr);

  gap: 55px;

  margin-top: 120px;
  padding-top: 55px;

  border-top: 1px solid #dce4e9;
}

.medical-team__closing-label {
  span {
    font-size: 9px;

    font-weight: 700;
    letter-spacing: 0.17em;

    color: #879aa9;
  }
}

.medical-team__closing-content {
  h3 {
    margin: 0;

    font-size: 34px;
    line-height: 1.5;

    font-weight: 400;
    letter-spacing: -0.045em;

    color: #21364a;

    word-break: keep-all;

    strong {
      color: #245f95;
      font-weight: 700;
    }
  }

  p {
    max-width: 720px;

    margin: 24px 0 0;

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
  .medical-team {
    padding: 120px 0;
  }

  .medical-team__intro {
    gap: 70px;
  }

  .doctor__top {
    grid-template-columns:
      minmax(280px, 360px)
      minmax(0, 1fr);

    gap: 60px;
  }

  .doctor__name h3 {
    font-size: 50px;
  }

  .doctor__detail,
  .medical-team__closing {
    grid-template-columns: 190px minmax(0, 1fr);
    gap: 40px;
  }
}

/* ========================================================
   LAPTOP
======================================================== */

@include laptop-down {
  .medical-team {
    padding: 95px 0;
  }

  .medical-team__intro {
    grid-template-columns: 1fr;
    gap: 35px;
  }

  .medical-team__intro-right {
    max-width: 760px;
  }

  .doctor {
    margin-top: 80px;
  }

  .doctor__top {
    grid-template-columns:
      minmax(250px, 330px)
      minmax(0, 1fr);

    gap: 42px;
  }

  .doctor__name h3 {
    font-size: 43px;
  }

  .doctor__summary {
    margin-top: 21px;

    font-size: 15px;
  }

  .doctor__detail {
    grid-template-columns: 1fr;
    gap: 22px;

    margin-top: 48px;
  }

  .medical-team__divider {
    margin-top: 85px;
  }

  .medical-team__closing {
    grid-template-columns: 1fr;
    gap: 20px;

    margin-top: 90px;
  }
}

/* ========================================================
   MOBILE
======================================================== */

@include mobile {
  .medical-team {
    padding: 72px 0 78px;
  }

  .medical-team__watermark {
    top: 40px;
    right: -10px;

    font-size: 64px;
  }

  /* INTRO */

  .medical-team__eyebrow {
    gap: 10px;

    margin-bottom: 16px;

    font-size: 9px;
  }

  .medical-team__eyebrow-line {
    width: 24px;
  }

  .medical-team__title {
    font-size: 35px;
  }

  .medical-team__lead {
    font-size: 20px;
  }

  .medical-team__description {
    margin-top: 18px;

    font-size: 14px;
    line-height: 1.8;
  }

  /* DOCTOR */

  .doctor {
    margin-top: 65px;
  }

  .doctor__top {
    grid-template-columns: 1fr;

    gap: 28px;
  }

  /*
   * 모바일에서는 사진 전체폭.
   * 화면 끝까지가 아니라 container 폭 기준이라
   * 안정적으로 보임.
   */
  .doctor__visual {
    width: 100%;
  }

  .doctor__image {
    width: 100%;

    aspect-ratio: 4 / 4.7;
  }

  .doctor__image--vice {
    aspect-ratio: 4 / 4.3;
  }

  .doctor__image-bottom {
    right: 16px;
    bottom: 15px;
    left: 16px;
  }

  .doctor__role {
    margin-bottom: 11px;

    font-size: 9px;
  }

  .doctor__name {
    gap: 9px;

    h3 {
      font-size: 39px;
    }

    span {
      font-size: 13px;
    }
  }

  .doctor__summary {
    margin-top: 18px;

    font-size: 14px;
    line-height: 1.8;
  }

  .doctor__keywords {
    gap: 6px;

    margin-top: 22px;

    span {
      min-height: 32px;

      padding: 0 11px;

      font-size: 10px;
    }
  }

  /* DETAIL */

  .doctor__detail {
    gap: 18px;

    margin-top: 38px;
    padding-top: 23px;
  }

  .doctor__detail-heading {
    span {
      margin-bottom: 7px;
    }

    h4 {
      font-size: 16px;
    }
  }

  /* CAREER */

  .doctor__career-item {
    grid-template-columns:
      25px
      88px
      minmax(0, 1fr);

    gap: 7px;

    min-height: 52px;

    padding: 10px 0;
  }

  .doctor__career-item strong {
    font-size: 10px;
  }

  .doctor__career-item p {
    font-size: 11px;
    line-height: 1.6;
  }

  .doctor__career--simple {
    .doctor__career-item {
      grid-template-columns:
        25px
        minmax(0, 1fr);
    }
  }

  /* SPECIALTY */

  .doctor__specialty {
    grid-template-columns: 1fr;
  }

  .doctor__specialty-item,
  .doctor__specialty-item:nth-child(odd),
  .doctor__specialty-item:nth-child(even) {
    grid-template-columns: 28px minmax(0, 1fr);

    min-height: 50px;

    padding: 10px 0;

    border-left: 0;
  }

  .doctor__specialty-item strong {
    font-size: 12px;
  }

  /* DIVIDER */

  .medical-team__divider {
    margin-top: 70px;
  }

  /* CLOSING */

  .medical-team__closing {
    gap: 17px;

    margin-top: 70px;
    padding-top: 38px;
  }

  .medical-team__closing-content h3 {
    font-size: 25px;
  }

  .medical-team__closing-content p {
    margin-top: 18px;

    font-size: 14px;
    line-height: 1.8;
  }
}

/* ========================================================
   REDUCED MOTION
======================================================== */

@media (prefers-reduced-motion: reduce) {
  .medical-team *,
  .medical-team *::before,
  .medical-team *::after {
    animation: none !important;
    transition: none !important;
  }
}
</style>
