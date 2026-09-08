<template>
  <section ref="sectionRef" class="medical-guide">
    <!-- =====================================================
           BACKGROUND
      ====================================================== -->
    <div class="medical-guide__background" aria-hidden="true">
      <span class="medical-guide__watermark">MEDICAL GUIDE</span>
    </div>

    <div class="container medical-guide__inner">
      <!-- =====================================================
             INTRO
        ====================================================== -->
      <header ref="introRef" class="medical-guide__intro">
        <div class="medical-guide__intro-left">
          <div class="medical-guide__eyebrow">
            <span class="medical-guide__eyebrow-line" />
            <span>INFORMATION</span>
          </div>

          <h2 class="medical-guide__title">
            편안한 진료를 위한
            <br />
            <strong>안내를 확인하세요.</strong>
          </h2>
        </div>

        <div class="medical-guide__intro-right">
          <p class="medical-guide__lead">
            예약부터 진료시간, 진료과목까지
            <strong>내원 전 필요한 정보를 한눈에 확인할 수 있습니다.</strong>
          </p>

          <p class="medical-guide__description">
            보다 원활한 진료를 위해 방문 전 예약을 권장하며, 진료 일정과 휴진일을 미리 확인해주시기
            바랍니다.
          </p>
        </div>
      </header>

      <!-- =====================================================
             CONTACT
        ====================================================== -->
      <section ref="contactRef" class="medical-guide__contact">
        <div class="medical-guide__section-heading">
          <div>
            <span class="medical-guide__section-number">01</span>
            <p class="medical-guide__section-label">CONTACT</p>

            <h3>
              예약과 상담은
              <br />
              <strong>전화로 편하게 문의하세요.</strong>
            </h3>
          </div>

          <p>
            진료 예약과 시술 상담은 각각 전용 연락처로 안내하고 있습니다. 방문 전 문의하시면 보다
            원활한 안내를 받으실 수 있습니다.
          </p>
        </div>

        <div class="medical-guide__contact-grid">
          <a href="tel:0262075678" class="medical-guide__contact-card">
            <div class="medical-guide__contact-top">
              <span>01</span>
              <span>MEDICAL INQUIRY</span>
            </div>

            <div class="medical-guide__contact-icon">
              <Icon name="lucide:phone-call" size="26" />
            </div>

            <div class="medical-guide__contact-content">
              <span class="medical-guide__contact-label">진료 문의</span>
              <strong>02-6207-5678</strong>
            </div>

            <span class="medical-guide__contact-arrow">→</span>
          </a>

          <a href="tel:01026386034" class="medical-guide__contact-card">
            <div class="medical-guide__contact-top">
              <span>02</span>
              <span>CONSULTATION</span>
            </div>

            <div class="medical-guide__contact-icon">
              <Icon name="lucide:headphones" size="26" />
            </div>

            <div class="medical-guide__contact-content">
              <span class="medical-guide__contact-label">상담 문의</span>
              <strong>010-2638-6034</strong>
            </div>

            <span class="medical-guide__contact-arrow">→</span>
          </a>
        </div>

        <div class="medical-guide__flow">
          <div v-for="(item, index) in bookingFlow" :key="item" class="medical-guide__flow-item">
            <span>{{ String(index + 1).padStart(2, '0') }}</span>
            <strong>{{ item }}</strong>
          </div>
        </div>
      </section>

      <!-- =====================================================
             SCHEDULE
        ====================================================== -->
      <section ref="scheduleRef" class="medical-guide__schedule">
        <div class="medical-guide__section-heading">
          <div>
            <span class="medical-guide__section-number">02</span>
            <p class="medical-guide__section-label">SCHEDULE</p>

            <h3>
              진료시간을
              <br />
              <strong>미리 확인해주세요.</strong>
            </h3>
          </div>

          <p>평일 오전·오후 진료를 운영하며, 토요일은 매달 셋째 주에만 정상 진료합니다.</p>
        </div>

        <div class="medical-guide__schedule-layout">
          <div class="medical-guide__schedule-main">
            <div
              v-for="(item, index) in scheduleItems"
              :key="item.label"
              class="medical-guide__schedule-row"
              :class="{
                'medical-guide__schedule-row--highlight': item.highlight
              }"
            >
              <span class="medical-guide__schedule-index">
                {{ String(index + 1).padStart(2, '0') }}
              </span>

              <div class="medical-guide__schedule-label">
                <strong>{{ item.label }}</strong>
                <small v-if="item.subLabel">{{ item.subLabel }}</small>
              </div>

              <div class="medical-guide__schedule-time">
                <strong>{{ item.time }}</strong>
                <span v-if="item.note">{{ item.note }}</span>
              </div>
            </div>
          </div>

          <aside class="medical-guide__schedule-aside">
            <span class="medical-guide__schedule-aside-label"> CLOSED </span>

            <strong>
              일요일 · 공휴일
              <br />
              휴진
            </strong>

            <p>
              원활한 진료를 위해 예약제를 운영하고 있습니다. 당일 방문 시에도 가능하면 미리 연락
              부탁드립니다.
            </p>
          </aside>
        </div>
      </section>

      <!-- =====================================================
             SUBJECT
        ====================================================== -->
      <section ref="subjectRef" class="medical-guide__subject">
        <div class="medical-guide__section-heading">
          <div>
            <span class="medical-guide__section-number">03</span>
            <p class="medical-guide__section-label">SPECIALIZED CARE</p>

            <h3>
              자이비뇨의학과병원의
              <br />
              <strong>주요 진료분야</strong>
            </h3>
          </div>

          <p>
            전립선비대증, 만성골반통증과 전립선염, 전립선암 조직검사까지 전립선 질환을 중심으로
            진료합니다.
          </p>
        </div>

        <div class="medical-guide__subject-grid">
          <article
            v-for="(card, index) in subjects"
            :key="card.title"
            class="medical-guide__subject-card"
          >
            <div class="medical-guide__subject-image">
              <img :src="card.image" :alt="card.titlePlain" />

              <div class="medical-guide__subject-overlay" />

              <span class="medical-guide__subject-number">
                {{ String(index + 1).padStart(2, '0') }}
              </span>
            </div>

            <div class="medical-guide__subject-content">
              <span>{{ card.eyebrow }}</span>

              <h4 v-html="card.title" />

              <p>{{ card.description }}</p>
            </div>
          </article>
        </div>
      </section>

      <!-- =====================================================
             CLOSING
        ====================================================== -->
      <footer ref="closingRef" class="medical-guide__closing">
        <div class="medical-guide__closing-label">
          <span>ZAII UROLOGY HOSPITAL</span>
        </div>

        <div class="medical-guide__closing-content">
          <h3>
            방문 전 한 번의 확인이
            <br />
            <strong>더 편안한 진료로 이어집니다.</strong>
          </h3>

          <p>진료 일정이나 예약과 관련해 궁금한 사항이 있으시면 언제든지 병원으로 문의해주세요.</p>
        </div>
      </footer>
    </div>
  </section>
</template>

<script setup lang="ts">
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const bookingFlow = ['전화상담', '상담원 연결', '진료상담 및 예약', '예약일 방문']

const scheduleItems = [
  {
    label: '평일 오전',
    time: '09:00 — 12:00',
    note: '11:30 접수 마감'
  },
  {
    label: '평일 오후',
    time: '13:00 — 18:00',
    note: '17:30 접수 마감'
  },
  {
    label: '토요일',
    subLabel: '매달 셋째 주',
    time: '09:00 — 18:00',
    note: '17:30 접수 마감',
    highlight: true
  },
  {
    label: '점심시간',
    time: '12:00 — 13:00'
  }
]

const subjects = [
  {
    eyebrow: 'BPH',
    image: '/images/main/road-01.webp',
    title: '전립선비대증',
    titlePlain: '전립선비대증',
    description: '유로리프트 · 플라즈마기화술'
  },
  {
    eyebrow: 'PROSTATITIS',
    image: '/images/main/road-02.webp',
    title: '만성골반통증<br />전립선염',
    titlePlain: '만성골반통증, 전립선염',
    description: '템프로 · 체외충격파 ESWT'
  },
  {
    eyebrow: 'PROSTATE CANCER',
    image: '/images/main/road-03.webp',
    title: '전립선암<br />조직검사',
    titlePlain: '전립선암 조직검사',
    description: '검사 · 결과 안내 · 상급병원 진료 연계'
  }
]

const sectionRef = ref<HTMLElement | null>(null)
const introRef = ref<HTMLElement | null>(null)
const contactRef = ref<HTMLElement | null>(null)
const scheduleRef = ref<HTMLElement | null>(null)
const subjectRef = ref<HTMLElement | null>(null)
const closingRef = ref<HTMLElement | null>(null)

let ctx: gsap.Context | null = null

onMounted(() => {
  const section = sectionRef.value

  if (!section) return

  gsap.registerPlugin(ScrollTrigger)

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

  if (reduceMotion) return

  ctx = gsap.context(() => {
    const reveal = (target: HTMLElement | null, y = 40, start = 'top 84%') => {
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
    reveal(contactRef.value)
    reveal(scheduleRef.value)
    reveal(subjectRef.value)
    reveal(closingRef.value)

    if (subjectRef.value) {
      const cards = subjectRef.value.querySelectorAll<HTMLElement>('.medical-guide__subject-card')

      gsap.from(cards, {
        opacity: 0,
        y: 35,
        duration: 0.75,
        stagger: 0.12,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: subjectRef.value,
          start: 'top 80%',
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
.medical-guide {
  position: relative;
  overflow: hidden;
  padding: 140px 0 130px;
  background: #ffffff;
  color: #1d2d3e;
}

/* ========================================================
     BACKGROUND
  ======================================================== */

.medical-guide__background {
  position: absolute;
  inset: 0;
  overflow: hidden;
  pointer-events: none;
}

.medical-guide__watermark {
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

.medical-guide__inner {
  position: relative;
  z-index: 1;
}

/* ========================================================
     INTRO
  ======================================================== */

.medical-guide__intro {
  display: grid;
  grid-template-columns:
    minmax(0, 0.95fr)
    minmax(420px, 1.05fr);
  gap: 100px;
  align-items: end;
}

.medical-guide__eyebrow {
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

.medical-guide__eyebrow-line {
  display: block;
  width: 34px;
  height: 1px;
  background: #668198;
}

.medical-guide__title {
  margin: 0;
  font-size: clamp(44px, 4.3vw, 66px);
  line-height: 1.27;
  letter-spacing: -0.055em;
  font-weight: 400;
  color: #172b3f;
  word-break: keep-all;

  strong {
    color: #245f95;
    font-weight: 700;
  }
}

.medical-guide__lead {
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

.medical-guide__description {
  max-width: 690px;
  margin: 24px 0 0;
  font-size: 16px;
  line-height: 1.9;
  color: #74818d;
  word-break: keep-all;
}

/* ========================================================
     SECTION HEADING
  ======================================================== */

.medical-guide__contact,
.medical-guide__schedule,
.medical-guide__subject {
  margin-top: 120px;
}

.medical-guide__section-heading {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 70px;
  margin-bottom: 55px;
}

.medical-guide__section-number {
  display: block;
  margin-bottom: 14px;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.12em;
  color: #a2afb9;
}

.medical-guide__section-label {
  margin: 0 0 11px;
  font-size: 9px;
  font-weight: 700;
  letter-spacing: 0.19em;
  color: #718da5;
}

.medical-guide__section-heading h3 {
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

.medical-guide__section-heading > p {
  max-width: 390px;
  margin: 0 0 4px;
  font-size: 14px;
  line-height: 1.85;
  color: #7b8995;
  word-break: keep-all;
}

/* ========================================================
     CONTACT
  ======================================================== */

.medical-guide__contact-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  border-top: 1px solid #dbe4ea;
  border-bottom: 1px solid #dbe4ea;
}

.medical-guide__contact-card {
  position: relative;
  min-width: 0;
  padding: 36px 40px 40px;
  color: inherit;
  text-decoration: none;
  transition: background 0.3s ease;

  + .medical-guide__contact-card {
    border-left: 1px solid #dbe4ea;
  }

  &:hover {
    background: #f5f8fa;
  }
}

.medical-guide__contact-top {
  display: flex;
  justify-content: space-between;
  margin-bottom: 35px;

  span {
    font-size: 8px;
    font-weight: 700;
    letter-spacing: 0.15em;
    color: #90a2af;
  }
}

.medical-guide__contact-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 52px;
  height: 52px;
  margin-bottom: 25px;
  background: #edf4f8;
  color: #3977aa;
}

.medical-guide__contact-content {
  .medical-guide__contact-label {
    display: block;
    margin-bottom: 10px;
    font-size: 13px;
    font-weight: 700;
    color: #60798e;
  }

  strong {
    display: block;
    font-size: clamp(31px, 3vw, 45px);
    line-height: 1;
    letter-spacing: -0.045em;
    color: #213c52;
  }

  p {
    margin: 13px 0 0;
    font-size: 13px;
    color: #84929d;
  }
}

.medical-guide__contact-arrow {
  position: absolute;
  right: 40px;
  bottom: 40px;
  font-size: 20px;
  color: #86a1b6;
}

.medical-guide__flow {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  margin-top: 26px;
}

.medical-guide__flow-item {
  position: relative;
  padding: 19px 20px;
  border-top: 1px solid #e0e7ec;

  + .medical-guide__flow-item {
    border-left: 1px solid #e0e7ec;
  }

  span {
    display: block;
    margin-bottom: 8px;
    font-size: 8px;
    color: #9aabb6;
  }

  strong {
    font-size: 13px;
    font-weight: 600;
    color: #536a7b;
  }
}

/* ========================================================
     SCHEDULE
  ======================================================== */

.medical-guide__schedule-layout {
  display: grid;
  grid-template-columns: minmax(0, 1.35fr) minmax(280px, 0.65fr);
  gap: 0;
  border-top: 1px solid #d9e3e9;
  border-bottom: 1px solid #d9e3e9;
}

.medical-guide__schedule-main {
  border-right: 1px solid #d9e3e9;
}

.medical-guide__schedule-row {
  display: grid;
  grid-template-columns: 50px 180px minmax(0, 1fr);
  align-items: center;
  min-height: 88px;
  padding: 0 28px;
  border-bottom: 1px solid #e1e8ed;

  &:last-child {
    border-bottom: 0;
  }
}

.medical-guide__schedule-row--highlight {
  background: #f5f8fa;
}

.medical-guide__schedule-index {
  font-size: 8px;
  color: #9babb6;
}

.medical-guide__schedule-label {
  display: flex;
  flex-direction: column;
  gap: 5px;

  strong {
    font-size: 14px;
    color: #40576a;
  }

  small {
    font-size: 11px;
    color: #8b9aa5;
  }
}

.medical-guide__schedule-time {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 20px;

  strong {
    font-size: 20px;
    letter-spacing: -0.02em;
    color: #2d4960;
  }

  span {
    font-size: 12px;
    color: #8a99a4;
  }
}

.medical-guide__schedule-aside {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 45px 42px;
  background: #1d405f;
}

.medical-guide__schedule-aside-label {
  margin-bottom: 18px;
  font-size: 8px;
  font-weight: 700;
  letter-spacing: 0.17em;
  color: rgba(255, 255, 255, 0.4);
}

.medical-guide__schedule-aside strong {
  font-size: 28px;
  line-height: 1.45;
  letter-spacing: -0.035em;
  color: #ffffff;
}

.medical-guide__schedule-aside p {
  margin: 25px 0 0;
  font-size: 13px;
  line-height: 1.8;
  color: rgba(255, 255, 255, 0.62);
  word-break: keep-all;
}

/* ========================================================
     SUBJECT
  ======================================================== */

.medical-guide__subject-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 40px;
}

.medical-guide__subject-card {
  min-width: 0;
}

.medical-guide__subject-image {
  position: relative;
  width: min(100%, 320px);
  aspect-ratio: 1 / 1;
  overflow: hidden;
  background: #e5ebef;

  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.75s cubic-bezier(0.22, 1, 0.36, 1);
  }
}

.medical-guide__subject-card:hover {
  .medical-guide__subject-image img {
    transform: scale(1.04);
  }
}

.medical-guide__subject-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, rgba(12, 30, 45, 0.03) 25%, rgba(12, 30, 45, 0.35) 100%);
}

.medical-guide__subject-number {
  position: absolute;
  top: 17px;
  right: 17px;
  font-size: 9px;
  letter-spacing: 0.12em;
  color: rgba(255, 255, 255, 0.78);
}

.medical-guide__subject-content {
  max-width: 330px;
  padding-top: 22px;

  > span {
    display: block;
    margin-bottom: 11px;
    font-size: 8px;
    font-weight: 700;
    letter-spacing: 0.17em;
    color: #7890a4;
  }

  h4 {
    margin: 0;
    font-size: 24px;
    line-height: 1.4;
    letter-spacing: -0.04em;
    color: #263d50;
    word-break: keep-all;
  }

  p {
    margin: 13px 0 0;
    font-size: 13px;
    line-height: 1.7;
    color: #788590;
    word-break: keep-all;
  }
}

/* ========================================================
     CLOSING
  ======================================================== */

.medical-guide__closing {
  display: grid;
  grid-template-columns: 240px minmax(0, 1fr);
  gap: 55px;
  margin-top: 120px;
  padding-top: 55px;
  border-top: 1px solid #dce4e9;
}

.medical-guide__closing-label {
  span {
    font-size: 9px;
    font-weight: 700;
    letter-spacing: 0.17em;
    color: #879aa9;
  }
}

.medical-guide__closing-content {
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
    max-width: 700px;
    margin: 24px 0 0;
    font-size: 15px;
    line-height: 1.9;
    color: #788590;
  }
}

/* ========================================================
     DESKTOP DOWN
  ======================================================== */

@include desktop-down {
  .medical-guide {
    padding: 120px 0;
  }

  .medical-guide__intro {
    gap: 70px;
  }

  .medical-guide__section-heading h3 {
    font-size: 31px;
  }
}

/* ========================================================
     LAPTOP
  ======================================================== */

@include laptop-down {
  .medical-guide {
    padding: 95px 0;
  }

  .medical-guide__intro {
    grid-template-columns: 1fr;
    gap: 35px;
  }

  .medical-guide__intro-right {
    max-width: 760px;
  }

  .medical-guide__contact,
  .medical-guide__schedule,
  .medical-guide__subject {
    margin-top: 85px;
  }

  .medical-guide__section-heading {
    display: block;
    margin-bottom: 42px;
  }

  .medical-guide__section-heading > p {
    max-width: 600px;
    margin-top: 20px;
  }

  .medical-guide__schedule-layout {
    grid-template-columns: 1fr;
  }

  .medical-guide__schedule-main {
    border-right: 0;
  }

  .medical-guide__schedule-aside {
    min-height: 240px;
  }

  .medical-guide__subject-grid {
    grid-template-columns: 1fr;
    gap: 42px;
  }

  .medical-guide__subject-card {
    display: grid;
    grid-template-columns: 250px minmax(0, 1fr);
    gap: 34px;
    align-items: center;
  }

  .medical-guide__subject-image {
    width: 250px;
  }

  .medical-guide__subject-content {
    max-width: 500px;
    padding-top: 0;
  }

  .medical-guide__closing {
    grid-template-columns: 1fr;
    gap: 20px;
    margin-top: 90px;
  }
}

/* ========================================================
     MOBILE
  ======================================================== */

@include mobile {
  .medical-guide {
    padding: 72px 0 78px;
  }

  .medical-guide__watermark {
    top: 40px;
    right: -10px;
    font-size: 62px;
  }

  /* INTRO */

  .medical-guide__eyebrow {
    gap: 10px;
    margin-bottom: 16px;
    font-size: 9px;
  }

  .medical-guide__eyebrow-line {
    width: 24px;
  }

  .medical-guide__title {
    font-size: 35px;
  }

  .medical-guide__lead {
    font-size: 20px;
  }

  .medical-guide__description {
    margin-top: 18px;
    font-size: 14px;
    line-height: 1.8;
  }

  /* SECTION */

  .medical-guide__contact,
  .medical-guide__schedule,
  .medical-guide__subject {
    margin-top: 65px;
  }

  .medical-guide__section-heading {
    margin-bottom: 30px;
  }

  .medical-guide__section-heading h3 {
    font-size: 25px;
  }

  .medical-guide__section-heading > p {
    margin-top: 17px;
    font-size: 13px;
    line-height: 1.8;
  }

  /* CONTACT */

  .medical-guide__contact-grid {
    grid-template-columns: 1fr;
  }

  .medical-guide__contact-card {
    padding: 26px 20px 30px;

    + .medical-guide__contact-card {
      border-top: 1px solid #dbe4ea;
      border-left: 0;
    }
  }

  .medical-guide__contact-top {
    margin-bottom: 24px;
  }

  .medical-guide__contact-icon {
    width: 45px;
    height: 45px;
    margin-bottom: 20px;
  }

  .medical-guide__contact-content {
    strong {
      font-size: 31px;
    }

    p {
      font-size: 12px;
    }
  }

  .medical-guide__contact-arrow {
    right: 20px;
    bottom: 30px;
  }

  .medical-guide__flow {
    grid-template-columns: repeat(2, 1fr);
  }

  .medical-guide__flow-item {
    padding: 15px 10px;

    &:nth-child(3) {
      border-left: 0;
      border-top: 1px solid #e0e7ec;
    }

    &:nth-child(4) {
      border-top: 1px solid #e0e7ec;
    }

    strong {
      font-size: 11px;
    }
  }

  /* SCHEDULE */

  .medical-guide__schedule-row {
    grid-template-columns: 25px minmax(0, 0.8fr) minmax(0, 1.2fr);
    min-height: 72px;
    padding: 0 10px;
  }

  .medical-guide__schedule-label {
    strong {
      font-size: 12px;
    }

    small {
      font-size: 9px;
    }
  }

  .medical-guide__schedule-time {
    display: block;

    strong {
      display: block;
      font-size: 14px;
    }

    span {
      display: block;
      margin-top: 4px;
      font-size: 9px;
    }
  }

  .medical-guide__schedule-aside {
    min-height: auto;
    padding: 35px 20px;

    strong {
      font-size: 24px;
    }

    p {
      margin-top: 18px;
      font-size: 12px;
    }
  }

  /* SUBJECT */

  .medical-guide__subject-card {
    display: block;
  }

  .medical-guide__subject-image {
    width: 100%;
    max-width: none;
    aspect-ratio: 1 / 1;
  }

  .medical-guide__subject-content {
    max-width: none;
    padding-top: 19px;

    h4 {
      font-size: 21px;
    }

    p {
      font-size: 13px;
    }
  }

  /* CLOSING */

  .medical-guide__closing {
    gap: 17px;
    margin-top: 70px;
    padding-top: 38px;
  }

  .medical-guide__closing-content h3 {
    font-size: 25px;
  }

  .medical-guide__closing-content p {
    margin-top: 18px;
    font-size: 14px;
    line-height: 1.8;
  }
}

@media (prefers-reduced-motion: reduce) {
  .medical-guide *,
  .medical-guide *::before,
  .medical-guide *::after {
    animation: none !important;
    transition: none !important;
  }
}
</style>
