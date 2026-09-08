<template>
  <section ref="sectionRef" class="history-journey">
    <!-- =====================================================
             BACKGROUND DECORATION
        ====================================================== -->
    <div class="history-journey__background" aria-hidden="true">
      <span class="history-journey__watermark"> ZAII HISTORY </span>
    </div>

    <div class="container history-journey__inner">
      <!-- =====================================================
               INTRO
          ====================================================== -->
      <div class="history-journey__intro">
        <div class="history-journey__intro-left">
          <div ref="introEyebrowRef" class="history-journey__eyebrow">
            <span class="history-journey__eyebrow-line" />
            <span>OUR JOURNEY</span>
          </div>

          <h2 ref="introTitleRef" class="history-journey__title">
            한 분야를 오래,
            <br />
            <strong>깊이 있게 다뤄온 시간</strong>
          </h2>
        </div>

        <div ref="introTextRef" class="history-journey__intro-right">
          <p class="history-journey__lead">
            오직 전립선 치료의 깊이를 쌓아온
            <strong>자이비뇨의학과병원</strong>
          </p>

          <p class="history-journey__description">
            수술 경험의 양보다 중요한 것은 환자에게 적합한 치료 방향을 제시하는 판단력입니다.
            자이비뇨의학과병원은 한 분야를 오래 깊게 다뤄온 경험을 바탕으로 더 정교하고 안정적인
            치료를 이어가고 있습니다.
          </p>
        </div>
      </div>

      <!-- =====================================================
               KEY NUMBERS
          ====================================================== -->
      <div ref="statsRef" class="history-journey__stats">
        <div class="history-journey__stat">
          <span class="history-journey__stat-label"> CLINICAL EXPERIENCE </span>

          <strong> 30<em>년+</em> </strong>

          <p>전립선 질환 중심의 임상 경험</p>
        </div>

        <div class="history-journey__stat">
          <span class="history-journey__stat-label"> PROSTATE TREATMENT </span>

          <strong> 10,000<em>례+</em> </strong>

          <p>전립선 수술 및 치료 경험 축적</p>
        </div>

        <div class="history-journey__stat history-journey__stat--accent">
          <span class="history-journey__stat-label"> UROLIFT </span>

          <strong> 4,000<em>례</em> </strong>

          <p>유로리프트 시술 경험</p>
        </div>
      </div>

      <!-- =====================================================
               TIMELINE
          ====================================================== -->
      <div class="history-journey__timeline-section">
        <div ref="timelineHeaderRef" class="history-journey__section-header">
          <div>
            <span class="history-journey__section-number"> 01 </span>

            <p class="history-journey__section-eyebrow">HISTORY</p>

            <h3>
              전립선 치료를 향한
              <br />
              <strong>자이의 발자취</strong>
            </h3>
          </div>

          <p class="history-journey__section-description">
            다양한 치료법을 경험하고 더 나은 치료 방식을 고민해온 시간이 현재의 자이비뇨의학과병원을
            만들었습니다.
          </p>
        </div>

        <div ref="timelineRef" class="history-journey__timeline">
          <article
            v-for="(item, index) in items"
            :key="item.period"
            class="history-journey__timeline-item"
          >
            <div class="history-journey__timeline-period">
              <span>
                {{ item.period }}
              </span>
            </div>

            <div class="history-journey__timeline-marker">
              <span />
            </div>

            <div class="history-journey__timeline-content">
              <span class="history-journey__timeline-index">
                {{ String(index + 1).padStart(2, '0') }}
              </span>

              <h4>
                {{ item.title }}
              </h4>

              <ul v-if="item.points?.length">
                <li v-for="point in item.points" :key="point">
                  {{ point }}
                </li>
              </ul>

              <p v-if="item.note" class="history-journey__timeline-note">
                {{ item.note }}
              </p>
            </div>
          </article>
        </div>
      </div>

      <!-- =====================================================
               SPECIALIZED CARE
          ====================================================== -->
      <div class="history-journey__special">
        <div ref="specialHeaderRef" class="history-journey__section-header">
          <div>
            <span class="history-journey__section-number"> 02 </span>

            <p class="history-journey__section-eyebrow">SPECIALIZED CARE</p>

            <h3>
              경험이 쌓일수록
              <br />
              <strong>치료는 더 정교해집니다.</strong>
            </h3>
          </div>

          <p class="history-journey__section-description">
            하나의 치료법만 고집하지 않고 환자의 상태와 질환의 특성에 따라 적절한 치료 방향을
            제안합니다.
          </p>
        </div>

        <div ref="careCardsRef" class="history-journey__care-grid">
          <article
            v-for="(card, index) in careCards"
            :key="card.title"
            class="history-journey__care-card"
          >
            <div class="history-journey__care-image">
              <img :src="card.image" :alt="card.title" />

              <div class="history-journey__care-overlay" />

              <span class="history-journey__care-number">
                {{ String(index + 1).padStart(2, '0') }}
              </span>
            </div>

            <div class="history-journey__care-content">
              <span class="history-journey__care-eyebrow">
                {{ card.eyebrow }}
              </span>

              <h4 v-html="card.title" />

              <p>
                {{ card.description }}
              </p>
            </div>
          </article>
        </div>
      </div>

      <!-- =====================================================
               TODAY
          ====================================================== -->
      <div ref="todayRef" class="history-journey__today">
        <div class="history-journey__today-left">
          <span class="history-journey__today-label"> TODAY </span>

          <strong> 4,000 </strong>

          <span class="history-journey__today-unit"> UROLIFT CASES </span>
        </div>

        <div class="history-journey__today-right">
          <h3>
            30년 가까운 임상 경험 위에
            <br />
            <strong>유로리프트 4,000례 달성</strong>
          </h3>

          <p>
            자이비뇨의학과병원은 단순한 시술 건수보다 환자 상태를 정확히 판단하고 적절한 치료를
            선택하는 경험의 밀도를 중요하게 생각합니다.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

defineProps<{
  items: {
    period: string
    title: string
    points?: string[]
    note?: string
  }[]
}>()

const careCards = [
  {
    eyebrow: 'BPH',
    image: '/images/main/road-01.webp',
    title: '고위험군<br />전립선비대증',
    description:
      '환자의 전립선 크기와 상태를 고려해 유로리프트, 플라즈마기화술 등 적절한 치료 방향을 제안합니다.'
  },
  {
    eyebrow: 'PROSTATITIS',
    image: '/images/main/road-02.webp',
    title: '만성전립선염과<br />만성골반통증',
    description:
      '반복되는 증상과 통증을 세심하게 확인하고 템프로, 체외충격파 ESWT 등 다양한 치료를 적용합니다.'
  },
  {
    eyebrow: 'PROSTATE CANCER',
    image: '/images/main/road-03.webp',
    title: '전립선암<br />조직검사',
    description:
      '검사부터 결과 안내, 필요한 경우 상급병원 진료 연계까지 빠르게 이어질 수 있도록 돕습니다.'
  }
]

const sectionRef = ref<HTMLElement | null>(null)

const introEyebrowRef = ref<HTMLElement | null>(null)
const introTitleRef = ref<HTMLElement | null>(null)
const introTextRef = ref<HTMLElement | null>(null)

const statsRef = ref<HTMLElement | null>(null)

const timelineHeaderRef = ref<HTMLElement | null>(null)
const timelineRef = ref<HTMLElement | null>(null)

const specialHeaderRef = ref<HTMLElement | null>(null)
const careCardsRef = ref<HTMLElement | null>(null)

const todayRef = ref<HTMLElement | null>(null)

let ctx: gsap.Context | null = null

onMounted(() => {
  const section = sectionRef.value

  if (!section) return

  gsap.registerPlugin(ScrollTrigger)

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

  if (reduceMotion) return

  ctx = gsap.context(() => {
    /* =====================================================
           INTRO
        ====================================================== */

    const introTl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: 'top 76%',
        once: true
      }
    })

    if (introEyebrowRef.value) {
      introTl.from(introEyebrowRef.value, {
        opacity: 0,
        y: 18,
        duration: 0.6,
        ease: 'power3.out'
      })
    }

    if (introTitleRef.value) {
      introTl.from(
        introTitleRef.value,
        {
          opacity: 0,
          y: 40,
          duration: 0.9,
          ease: 'power3.out'
        },
        '-=0.3'
      )
    }

    if (introTextRef.value) {
      introTl.from(
        introTextRef.value,
        {
          opacity: 0,
          y: 32,
          duration: 0.85,
          ease: 'power3.out'
        },
        '-=0.45'
      )
    }

    /* =====================================================
           STATS
        ====================================================== */

    const stats = statsRef.value

    if (stats) {
      const statItems = stats.querySelectorAll<HTMLElement>('.history-journey__stat')

      gsap.from(statItems, {
        opacity: 0,
        y: 40,
        duration: 0.8,
        stagger: 0.12,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: stats,
          start: 'top 86%',
          once: true
        }
      })
    }

    /* =====================================================
           TIMELINE HEADER
        ====================================================== */

    const timelineHeader = timelineHeaderRef.value

    if (timelineHeader) {
      gsap.from(timelineHeader, {
        opacity: 0,
        y: 35,
        duration: 0.9,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: timelineHeader,
          start: 'top 84%',
          once: true
        }
      })
    }

    /* =====================================================
           TIMELINE
        ====================================================== */

    const timeline = timelineRef.value

    if (timeline) {
      const items = timeline.querySelectorAll<HTMLElement>('.history-journey__timeline-item')

      items.forEach((item) => {
        gsap.from(item, {
          opacity: 0,
          y: 40,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: item,
            start: 'top 88%',
            once: true
          }
        })
      })
    }

    /* =====================================================
           SPECIAL
        ====================================================== */

    const specialHeader = specialHeaderRef.value

    if (specialHeader) {
      gsap.from(specialHeader, {
        opacity: 0,
        y: 35,
        duration: 0.9,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: specialHeader,
          start: 'top 84%',
          once: true
        }
      })
    }

    const cards = careCardsRef.value

    if (cards) {
      const cardItems = cards.querySelectorAll<HTMLElement>('.history-journey__care-card')

      gsap.from(cardItems, {
        opacity: 0,
        y: 48,
        duration: 0.85,
        stagger: 0.14,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: cards,
          start: 'top 82%',
          once: true
        }
      })
    }

    /* =====================================================
           TODAY
        ====================================================== */

    const today = todayRef.value

    if (today) {
      gsap.from(today, {
        opacity: 0,
        y: 55,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: today,
          start: 'top 86%',
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
.history-journey {
  position: relative;
  overflow: hidden;
  padding: 140px 0 130px;
  background: #ffffff;
  color: #1d2d3e;
}

.history-journey__background {
  position: absolute;
  inset: 0;
  pointer-events: none;
  overflow: hidden;
}

.history-journey__watermark {
  position: absolute;
  top: 80px;
  right: -20px;
  font-size: clamp(100px, 11vw, 180px);
  line-height: 0.8;
  font-weight: 800;
  letter-spacing: -0.06em;
  color: rgba(34, 69, 101, 0.025);
  white-space: nowrap;
}

.history-journey__inner {
  position: relative;
  z-index: 1;
}

/* ========================================================
     INTRO
  ======================================================== */

.history-journey__intro {
  display: grid;
  grid-template-columns: minmax(0, 0.95fr) minmax(420px, 1.05fr);
  gap: 100px;
  align-items: end;
}

.history-journey__eyebrow {
  display: flex;
  align-items: center;
  gap: 14px;
  margin-bottom: 22px;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.2em;
  color: #668198;
}

.history-journey__eyebrow-line {
  display: block;
  width: 34px;
  height: 1px;
  background: #668198;
}

.history-journey__title {
  margin: 0;
  font-size: clamp(44px, 4.3vw, 66px);
  line-height: 1.27;
  letter-spacing: -0.05em;
  font-weight: 400;
  color: #172b3f;
  word-break: keep-all;

  strong {
    font-weight: 700;
    color: #245f95;
  }
}

.history-journey__lead {
  margin: 0;
  font-size: 27px;
  line-height: 1.55;
  letter-spacing: -0.035em;
  font-weight: 500;
  color: #2e4357;
  word-break: keep-all;

  strong {
    font-weight: 700;
    color: #235d91;
  }
}

.history-journey__description {
  max-width: 700px;
  margin: 26px 0 0;
  font-size: 17px;
  line-height: 1.9;
  color: #72808d;
  word-break: keep-all;
}

/* ========================================================
     STATS
  ======================================================== */

.history-journey__stats {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  margin-top: 90px;
  border-top: 1px solid #dfe6eb;
  border-bottom: 1px solid #dfe6eb;
}

.history-journey__stat {
  position: relative;
  padding: 46px 42px 42px;

  + .history-journey__stat {
    border-left: 1px solid #dfe6eb;
  }
}

.history-journey__stat-label {
  display: block;
  margin-bottom: 20px;
  font-size: 9px;
  line-height: 1;
  font-weight: 700;
  letter-spacing: 0.18em;
  color: #8498a9;
}

.history-journey__stat strong {
  display: block;
  font-size: 48px;
  line-height: 1;
  letter-spacing: -0.05em;
  font-weight: 700;
  color: #233c53;

  em {
    margin-left: 5px;
    font-size: 18px;
    font-style: normal;
    letter-spacing: -0.02em;
    color: #7e909f;
  }
}

.history-journey__stat p {
  margin: 16px 0 0;
  font-size: 15px;
  line-height: 1.65;
  color: #73818d;
  word-break: keep-all;
}

.history-journey__stat--accent {
  background: #1d3f60;

  .history-journey__stat-label {
    color: rgba(255, 255, 255, 0.46);
  }

  strong {
    color: #ffffff;

    em {
      color: #afd0eb;
    }
  }

  p {
    color: rgba(255, 255, 255, 0.66);
  }
}

/* ========================================================
     SECTION HEADER
  ======================================================== */

.history-journey__timeline-section,
.history-journey__special {
  margin-top: 120px;
}

.history-journey__section-header {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 60px;
  margin-bottom: 64px;
}

.history-journey__section-number {
  display: block;
  margin-bottom: 16px;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.12em;
  color: #a1adb7;
}

.history-journey__section-eyebrow {
  margin: 0 0 11px;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.2em;
  color: #718ba1;
}

.history-journey__section-header h3 {
  margin: 0;
  font-size: 36px;
  line-height: 1.45;
  letter-spacing: -0.045em;
  font-weight: 400;
  color: #21364a;
  word-break: keep-all;

  strong {
    font-weight: 700;
    color: #245f95;
  }
}

.history-journey__section-description {
  max-width: 350px;
  margin: 0 0 4px;
  font-size: 14px;
  line-height: 1.8;
  color: #7b8995;
  word-break: keep-all;
}

/* ========================================================
     TIMELINE
  ======================================================== */

.history-journey__timeline {
  position: relative;
}

.history-journey__timeline::before {
  content: '';
  position: absolute;
  top: 18px;
  bottom: 18px;
  left: 30%;
  width: 1px;
  background: #dbe4eb;
}

.history-journey__timeline-item {
  display: grid;
  grid-template-columns: 30% 48px minmax(0, 1fr);
  align-items: start;
  min-height: 185px;
}

.history-journey__timeline-item + .history-journey__timeline-item {
  margin-top: 10px;
}

.history-journey__timeline-period {
  padding: 5px 34px 0 0;
  text-align: right;

  span {
    font-size: 28px;
    line-height: 1.2;
    letter-spacing: -0.035em;
    font-weight: 600;
    color: #376f9f;
  }
}

.history-journey__timeline-marker {
  position: relative;
  height: 100%;

  span {
    position: absolute;
    top: 12px;
    left: 50%;
    width: 13px;
    height: 13px;
    border-radius: 50%;
    border: 3px solid #3475ad;
    background: #ffffff;
    transform: translateX(-50%);
    z-index: 2;
  }
}

.history-journey__timeline-content {
  position: relative;
  padding: 0 0 46px 24px;
}

.history-journey__timeline-index {
  display: block;
  margin-bottom: 12px;
  font-size: 9px;
  line-height: 1;
  letter-spacing: 0.12em;
  font-weight: 700;
  color: #a5b0b9;
}

.history-journey__timeline-content h4 {
  margin: 0;
  font-size: 24px;
  line-height: 1.45;
  letter-spacing: -0.035em;
  font-weight: 700;
  color: #22374a;
  word-break: keep-all;
}

.history-journey__timeline-content ul {
  display: grid;
  gap: 7px;
  margin: 18px 0 0;
  padding: 0;
  list-style: none;
}

.history-journey__timeline-content li {
  position: relative;
  padding-left: 14px;
  font-size: 15px;
  line-height: 1.75;
  color: #6d7b87;
  word-break: keep-all;
}

.history-journey__timeline-content li::before {
  content: '';
  position: absolute;
  top: 10px;
  left: 0;
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background: #6ea6d2;
}

.history-journey__timeline-note {
  margin: 14px 0 0;
  font-size: 14px;
  line-height: 1.7;
  color: #8794a0;
}

/* ========================================================
     CARE
  ======================================================== */

.history-journey__care-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 42px;
}

.history-journey__care-card {
  position: relative;
  min-width: 0;
}

/*
    기존 4:5 세로형 이미지를 정사각형으로 변경.
    카드 폭 전체를 사용하지 않고 최대 330px로 제한해서
    전체적으로 더 작고 정돈된 느낌으로 구성.
  */
.history-journey__care-image {
  position: relative;
  width: min(100%, 330px);
  aspect-ratio: 1 / 1;
  overflow: hidden;
  background: #e6ebef;

  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.8s cubic-bezier(0.22, 1, 0.36, 1);
  }
}

.history-journey__care-card:hover {
  .history-journey__care-image img {
    transform: scale(1.045);
  }
}

.history-journey__care-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, rgba(9, 25, 40, 0.04) 20%, rgba(9, 25, 40, 0.3) 100%);
}

.history-journey__care-number {
  position: absolute;
  top: 18px;
  right: 18px;
  font-size: 10px;
  letter-spacing: 0.12em;
  color: rgba(255, 255, 255, 0.75);
}

.history-journey__care-content {
  max-width: 330px;
  padding: 25px 0 0;
}

.history-journey__care-eyebrow {
  display: block;
  margin-bottom: 12px;
  font-size: 9px;
  line-height: 1;
  font-weight: 700;
  letter-spacing: 0.18em;
  color: #7890a4;
}

.history-journey__care-content h4 {
  margin: 0;
  font-size: 25px;
  line-height: 1.4;
  letter-spacing: -0.04em;
  font-weight: 700;
  color: #22374a;
  word-break: keep-all;
}

.history-journey__care-content p {
  margin: 15px 0 0;
  font-size: 14px;
  line-height: 1.8;
  color: #778490;
  word-break: keep-all;
}

/* ========================================================
     TODAY
  ======================================================== */

.history-journey__today {
  display: grid;
  grid-template-columns: 0.8fr 1.2fr;
  margin-top: 120px;
  background: #1b3956;
  overflow: hidden;
}

.history-journey__today-left {
  position: relative;
  padding: 72px 62px;
  border-right: 1px solid rgba(255, 255, 255, 0.12);
}

.history-journey__today-label {
  display: block;
  margin-bottom: 28px;
  font-size: 10px;
  letter-spacing: 0.2em;
  font-weight: 700;
  color: rgba(255, 255, 255, 0.4);
}

.history-journey__today-left strong {
  display: block;
  font-size: 86px;
  line-height: 0.9;
  letter-spacing: -0.07em;
  font-weight: 700;
  color: #ffffff;
}

.history-journey__today-unit {
  display: block;
  margin-top: 16px;
  font-size: 11px;
  line-height: 1;
  letter-spacing: 0.15em;
  color: #a7cae6;
}

.history-journey__today-right {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 70px 68px;
}

.history-journey__today-right h3 {
  margin: 0;
  font-size: 34px;
  line-height: 1.5;
  letter-spacing: -0.045em;
  font-weight: 400;
  color: #ffffff;
  word-break: keep-all;

  strong {
    font-weight: 700;
    color: #a8d0ed;
  }
}

.history-journey__today-right p {
  max-width: 700px;
  margin: 26px 0 0;
  font-size: 16px;
  line-height: 1.9;
  color: rgba(255, 255, 255, 0.64);
  word-break: keep-all;
}

/* ========================================================
     DESKTOP DOWN
  ======================================================== */

@include desktop-down {
  .history-journey {
    padding: 120px 0;
  }

  .history-journey__intro {
    gap: 70px;
  }

  .history-journey__lead {
    font-size: 24px;
  }

  .history-journey__section-header h3 {
    font-size: 32px;
  }

  .history-journey__timeline-content h4 {
    font-size: 22px;
  }

  .history-journey__care-grid {
    gap: 32px;
  }

  .history-journey__care-image {
    width: min(100%, 300px);
  }

  .history-journey__care-content {
    max-width: 300px;
  }

  .history-journey__care-content h4 {
    font-size: 24px;
  }
}

/* ========================================================
     LAPTOP
  ======================================================== */

@include laptop-down {
  .history-journey {
    padding: 95px 0;
  }

  .history-journey__intro {
    grid-template-columns: 1fr;
    gap: 36px;
  }

  .history-journey__intro-right {
    max-width: 740px;
  }

  .history-journey__stats {
    grid-template-columns: 1fr;
    margin-top: 65px;
  }

  .history-journey__stat {
    padding: 34px 30px;

    + .history-journey__stat {
      border-left: 0;
      border-top: 1px solid #dfe6eb;
    }
  }

  .history-journey__timeline-section,
  .history-journey__special {
    margin-top: 85px;
  }

  .history-journey__section-header {
    display: block;
    margin-bottom: 45px;
  }

  .history-journey__section-description {
    max-width: 550px;
    margin-top: 20px;
  }

  .history-journey__timeline::before {
    left: 6px;
  }

  .history-journey__timeline-item {
    grid-template-columns: 28px minmax(0, 1fr);
    min-height: auto;
  }

  .history-journey__timeline-period {
    grid-column: 2;
    grid-row: 1;
    padding: 0 0 12px 16px;
    text-align: left;

    span {
      font-size: 25px;
    }
  }

  .history-journey__timeline-marker {
    grid-column: 1;
    grid-row: 1 / span 2;

    span {
      left: 6px;
      transform: translateX(-50%);
    }
  }

  .history-journey__timeline-content {
    grid-column: 2;
    grid-row: 2;
    padding: 0 0 40px 16px;
  }

  /*
      태블릿/작은 노트북에서는 세로 한 줄 배치.
      이미지 250px 정사각형 + 우측 텍스트.
    */
  .history-journey__care-grid {
    grid-template-columns: 1fr;
    gap: 46px;
  }

  .history-journey__care-card {
    display: grid;
    grid-template-columns: 250px minmax(0, 1fr);
    gap: 38px;
    align-items: center;
  }

  .history-journey__care-image {
    width: 250px;
    max-width: none;
    aspect-ratio: 1 / 1;
  }

  .history-journey__care-content {
    max-width: 520px;
    padding: 0;
  }

  .history-journey__today {
    grid-template-columns: 1fr;
  }

  .history-journey__today-left {
    border-right: 0;
    border-bottom: 1px solid rgba(255, 255, 255, 0.12);
  }
}

/* ========================================================
     MOBILE
  ======================================================== */

@include mobile {
  .history-journey {
    padding: 72px 0 78px;
  }

  .history-journey__watermark {
    top: 48px;
    right: -10px;
    font-size: 72px;
  }

  .history-journey__eyebrow {
    gap: 10px;
    margin-bottom: 16px;
    font-size: 9px;
  }

  .history-journey__eyebrow-line {
    width: 24px;
  }

  .history-journey__title {
    font-size: 35px;
  }

  .history-journey__lead {
    font-size: 20px;
  }

  .history-journey__description {
    margin-top: 19px;
    font-size: 14px;
    line-height: 1.8;
  }

  .history-journey__stats {
    margin-top: 48px;
  }

  .history-journey__stat {
    padding: 28px 23px;
  }

  .history-journey__stat strong {
    font-size: 40px;

    em {
      font-size: 15px;
    }
  }

  .history-journey__timeline-section,
  .history-journey__special {
    margin-top: 65px;
  }

  .history-journey__section-header {
    margin-bottom: 34px;
  }

  .history-journey__section-header h3 {
    font-size: 26px;
  }

  .history-journey__section-description {
    font-size: 13px;
  }

  .history-journey__timeline-period span {
    font-size: 22px;
  }

  .history-journey__timeline-content h4 {
    font-size: 19px;
  }

  .history-journey__timeline-content li {
    font-size: 14px;
  }

  /*
      모바일에서도 이미지가 화면 너비 전체로 커지지 않게 제한.
      정사각형 230px 기준.
    */
  .history-journey__care-grid {
    gap: 44px;
  }

  .history-journey__care-card {
    display: block;
  }

  .history-journey__care-image {
    width: 230px;
    max-width: 100%;
    aspect-ratio: 1 / 1;
  }

  .history-journey__care-number {
    top: 15px;
    right: 15px;
  }

  .history-journey__care-content {
    max-width: 100%;
    padding-top: 20px;
  }

  .history-journey__care-content h4 {
    font-size: 22px;
  }

  .history-journey__care-content p {
    max-width: 400px;
    font-size: 14px;
  }

  .history-journey__today {
    margin-top: 70px;
    margin-left: calc(var(--container-padding, 20px) * -1);
    margin-right: calc(var(--container-padding, 20px) * -1);
  }

  .history-journey__today-left {
    padding: 42px 20px;
  }

  .history-journey__today-left strong {
    font-size: 66px;
  }

  .history-journey__today-right {
    padding: 38px 20px 42px;
  }

  .history-journey__today-right h3 {
    font-size: 25px;
  }

  .history-journey__today-right p {
    margin-top: 20px;
    font-size: 14px;
    line-height: 1.8;
  }
}

@media (prefers-reduced-motion: reduce) {
  .history-journey *,
  .history-journey *::before,
  .history-journey *::after {
    animation: none !important;
    transition: none !important;
  }
}
</style>
