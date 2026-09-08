<template>
  <section ref="sectionRef" class="urolift-story">
    <!-- =====================================================
           BACKGROUND
      ====================================================== -->
    <div class="urolift-story__background" aria-hidden="true">
      <span class="urolift-story__watermark">UROLIFT</span>
    </div>

    <div class="container urolift-story__inner">
      <!-- =====================================================
             INTRO
        ====================================================== -->
      <header ref="introRef" class="urolift-story__intro">
        <div class="urolift-story__intro-left">
          <div class="urolift-story__eyebrow">
            <span class="urolift-story__eyebrow-line" />
            <span>UROLIFT STORY</span>
          </div>

          <h2 class="urolift-story__title">
            자이가
            <br />
            <strong>유로리프트를 만나다</strong>
          </h2>
        </div>

        <div class="urolift-story__intro-right">
          <p class="urolift-story__lead">
            새로운 치료법을 도입하는 것에서 멈추지 않고,
            <strong>직접 배우고 경험하며 술기의 깊이를 더해왔습니다.</strong>
          </p>

          <p class="urolift-story__description">
            유로리프트의 개발 과정부터 국내 도입, 해외 의료진과의 학술 교류까지.
            자이비뇨의학과병원은 전립선비대증 치료의 새로운 가능성을 꾸준히 확인하고 임상 경험으로
            발전시켜 왔습니다.
          </p>
        </div>
      </header>

      <!-- =====================================================
             ORIGIN
        ====================================================== -->
      <div ref="originRef" class="urolift-story__origin">
        <div class="urolift-story__origin-visual">
          <div class="urolift-story__origin-image">
            <img src="/images/urolift/urolift-device.webp" alt="유로리프트 시술 기기" />

            <span class="urolift-story__image-index">01</span>
          </div>

          <div class="urolift-story__origin-year">
            <span>DEVELOPED</span>
            <strong>2004</strong>
          </div>
        </div>

        <div class="urolift-story__origin-content">
          <span class="urolift-story__section-label">THE BEGINNING</span>

          <h3>
            절개와 조직 제거 없이
            <br />
            <strong>전립선을 열어주는 새로운 접근</strong>
          </h3>

          <p class="urolift-story__origin-lead">
            유로리프트(UroLift)는 NeoTract사, 현재의 Teleflex에 의해 개발된 전립선비대증 치료
            시스템입니다.
          </p>

          <p>
            2004년 호주에서 개발이 시작된 이후 초기 임상 연구와 시술 경험이 축적되었고, 2013년 미국
            FDA 승인을 거치며 전립선비대증의 최소침습 치료법 가운데 하나로 자리 잡기 시작했습니다.
          </p>

          <div class="urolift-story__facts">
            <div class="urolift-story__fact">
              <strong>2004</strong>
              <span>개발 시작</span>
            </div>

            <div class="urolift-story__fact">
              <strong>2013</strong>
              <span>미국 FDA 승인</span>
            </div>

            <div class="urolift-story__fact">
              <strong>2015</strong>
              <span>국내 도입</span>
            </div>
          </div>
        </div>
      </div>

      <!-- =====================================================
             DOMESTIC HISTORY
        ====================================================== -->
      <div ref="historyRef" class="urolift-story__history">
        <div class="urolift-story__section-heading">
          <div>
            <span class="urolift-story__section-number">02</span>
            <p class="urolift-story__section-label">IN KOREA</p>

            <h3>
              국내에 도입된 유로리프트,
              <br />
              <strong>경험이 결과의 차이를 만들었습니다.</strong>
            </h3>
          </div>

          <p>
            새로운 치료법일수록 장비보다 중요한 것은 환자 선택과 정확한 술기입니다. 변재상 병원장은
            초기 국내 도입 단계부터 직접 임상 경험을 축적해왔습니다.
          </p>
        </div>

        <div class="urolift-story__history-layout">
          <aside class="urolift-story__history-sticky">
            <span>2016 — TODAY</span>

            <strong>
              국내 도입 초기부터
              <br />
              이어온 임상 경험
            </strong>
          </aside>

          <div class="urolift-story__timeline">
            <article
              v-for="(item, index) in historyItems"
              :key="item.period"
              class="urolift-story__timeline-item"
            >
              <div class="urolift-story__timeline-marker">
                <span />
              </div>

              <div class="urolift-story__timeline-content">
                <div class="urolift-story__timeline-top">
                  <span class="urolift-story__timeline-index">
                    {{ String(index + 1).padStart(2, '0') }}
                  </span>

                  <strong class="urolift-story__timeline-period">
                    {{ item.period }}
                  </strong>
                </div>

                <h4>{{ item.title }}</h4>

                <p v-for="text in item.texts" :key="text">
                  {{ text }}
                </p>
              </div>
            </article>
          </div>
        </div>
      </div>

      <!-- =====================================================
             GLOBAL EXCHANGE
        ====================================================== -->
      <div ref="expertsRef" class="urolift-story__experts">
        <div class="urolift-story__section-heading">
          <div>
            <span class="urolift-story__section-number">03</span>
            <p class="urolift-story__section-label">GLOBAL EXCHANGE</p>

            <h3>
              직접 찾아가 배우고,
              <br />
              <strong>세계의 경험과 교류했습니다.</strong>
            </h3>
          </div>

          <p>
            2018년 유로리프트가 개발된 호주 현지를 방문해 초기 임상 경험을 가진 의료진과 시술 방법,
            환자 선택, 실제 케이스에 대한 학술 교류를 진행했습니다.
          </p>
        </div>

        <div class="urolift-story__expert-grid">
          <article
            v-for="(expert, index) in experts"
            :key="expert.name"
            class="urolift-story__expert-card"
          >
            <div class="urolift-story__expert-image">
              <img :src="expert.image" :alt="expert.name" />

              <div class="urolift-story__expert-overlay" />

              <span class="urolift-story__expert-number">
                {{ String(index + 1).padStart(2, '0') }}
              </span>

              <div class="urolift-story__expert-name">
                <strong>{{ expert.name }}</strong>
                <span>{{ expert.location }}</span>
              </div>
            </div>

            <div class="urolift-story__expert-content">
              <p>{{ expert.description }}</p>
            </div>
          </article>
        </div>

        <!-- =================================================
               DOCUMENTARY STRIP
          ================================================== -->
        <div class="urolift-story__archive">
          <div v-for="archive in archives" :key="archive.image" class="urolift-story__archive-item">
            <img :src="archive.image" :alt="archive.caption" />
            <span>{{ archive.caption }}</span>
          </div>
        </div>
      </div>

      <!-- =====================================================
             DIRECTOR
        ====================================================== -->
      <div ref="directorRef" class="urolift-story__director">
        <div class="urolift-story__director-image">
          <img src="/images/main/director-profile.webp" alt="자이비뇨의학과병원 변재상 병원장" />
        </div>

        <div class="urolift-story__director-content">
          <span class="urolift-story__section-label">MEDICAL DIRECTOR</span>

          <h3>
            유로리프트의 국내 도입 초기부터
            <br />
            <strong>임상 경험을 이어온 변재상 병원장</strong>
          </h3>

          <p>
            한 가지 치료법을 단순히 반복하는 것이 아니라 환자의 전립선 상태와 증상, 치료 목적을
            종합적으로 판단해 적합한 치료를 선택하는 것을 중요하게 생각합니다.
          </p>

          <div class="urolift-story__director-history">
            <div
              v-for="item in directorHistory"
              :key="item.period"
              class="urolift-story__director-history-item"
            >
              <span>{{ item.period }}</span>
              <strong>{{ item.text }}</strong>
            </div>
          </div>
        </div>
      </div>

      <!-- =====================================================
             ACHIEVEMENT
        ====================================================== -->
      <div ref="achievementRef" class="urolift-story__achievement">
        <div class="urolift-story__achievement-content">
          <span class="urolift-story__achievement-label"> CLINICAL EXPERIENCE </span>

          <div class="urolift-story__achievement-number">
            <strong>4,000</strong>
            <span>례</span>
          </div>

          <h3>
            유로리프트 시술 경험
            <br />
            <strong>4,000례</strong>
          </h3>

          <p>
            숫자 그 자체보다 중요한 것은 그 과정에서 축적된 환자 선택, 시술 판단 그리고 다양한
            전립선 상태에 대응해온 경험입니다.
          </p>
        </div>

        <div class="urolift-story__achievement-visual">
          <img
            src="/images/urolift/urolift-achievement-banner.webp"
            alt="자이비뇨의학과병원 전립선 치료 경험"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const historyItems = [
  {
    period: '2016',
    title: '국내 유로리프트 임상 경험의 시작',
    texts: [
      '인천 나은병원 전립선센터장으로 유로리프트를 도입했습니다.',
      '초기 국내 임상 경험을 축적하며 약 200례의 시술 경험을 쌓았습니다.'
    ]
  },
  {
    period: '2018',
    title: '유로리프트 개발지 호주 연수',
    texts: [
      'NeoTract의 초청으로 호주 시드니와 캔버라 지역의 주요 의료기관을 방문했습니다.',
      '초기 임상 경험을 가진 의료진과 시술 테크닉 및 실제 케이스에 대한 학술 교류를 진행했습니다.'
    ]
  },
  {
    period: '2018 — 2019',
    title: '강남베드로병원 전립선센터',
    texts: [
      '전립선센터장으로 근무하며 다양한 전립선비대증 환자에 대한 유로리프트 시술 경험을 이어갔습니다.'
    ]
  },
  {
    period: '2020 — TODAY',
    title: '자이비뇨의학과에서 이어지는 경험',
    texts: [
      '2020년 자이비뇨의학과 개원 이후 유로리프트를 포함한 전립선비대증 치료를 중점적으로 시행하고 있습니다.',
      '현재까지 축적된 임상 경험을 바탕으로 환자 상태에 따른 치료 선택의 폭을 넓혀가고 있습니다.'
    ]
  }
]

const experts = [
  {
    name: 'Dr. Peter Chin',
    location: 'Wollongong · Australia',
    image: '/images/urolift/urolift-founder-01.webp',
    description:
      '초기 유로리프트 임상 경험을 가진 의료진과 시술 방향과 실제 환자 적용에 대한 의견을 나누었습니다.'
  },
  {
    name: 'Dr. Kayvan Haghighi',
    location: 'Campbelltown · Australia',
    image: '/images/urolift/urolift-founder-03.webp',
    description:
      '호주 현지의 실제 시술 환경을 살펴보고 환자 선택과 술기에 대한 임상 경험을 공유했습니다.'
  },
  {
    name: 'Dr. Hodo Haxhimolla',
    location: 'Canberra · Australia',
    image: '/images/urolift/urolift-founder-05.webp',
    description:
      '다양한 비뇨의학과 케이스에 대한 논의를 통해 유로리프트의 적용 범위와 임상적 판단을 함께 살펴봤습니다.'
  },
  {
    name: 'Dr. Paul Cozzi',
    location: 'Sydney · Australia',
    image: '/images/urolift/urolift-founder-08.webp',
    description:
      '실제 임상 사례를 중심으로 환자 선택 기준과 시술 과정에 대한 학술 교류를 진행했습니다.'
  }
]

const archives = [
  {
    image: '/images/urolift/urolift-founder-02.webp',
    caption: '초기 유로리프트 관련 자료'
  },
  {
    image: '/images/urolift/urolift-founder-04.webp',
    caption: '호주 현지 시술 환경'
  },
  {
    image: '/images/urolift/urolift-founder-06.webp',
    caption: '현지 의료진과의 임상 교류'
  },
  {
    image: '/images/urolift/urolift-founder-07.webp',
    caption: '유로리프트 학술 연수'
  }
]

const directorHistory = [
  {
    period: '2016',
    text: '나은병원 전립선센터장 · 유로리프트 도입'
  },
  {
    period: '2018',
    text: '호주 유로리프트 주요 의료기관 연수 및 학술교류'
  },
  {
    period: '2018 — 2019',
    text: '강남베드로병원 전립선센터장'
  },
  {
    period: '2020',
    text: '자이비뇨의학과 개원'
  },
  {
    period: 'TODAY',
    text: '자이비뇨의학과병원 병원장'
  }
]

const sectionRef = ref<HTMLElement | null>(null)

const introRef = ref<HTMLElement | null>(null)
const originRef = ref<HTMLElement | null>(null)
const historyRef = ref<HTMLElement | null>(null)
const expertsRef = ref<HTMLElement | null>(null)
const directorRef = ref<HTMLElement | null>(null)
const achievementRef = ref<HTMLElement | null>(null)

let ctx: gsap.Context | null = null

onMounted(() => {
  const section = sectionRef.value

  if (!section) return

  gsap.registerPlugin(ScrollTrigger)

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

  if (reduceMotion) return

  ctx = gsap.context(() => {
    const reveal = (
      element: HTMLElement | null,
      options: {
        y?: number
        start?: string
      } = {}
    ) => {
      if (!element) return

      gsap.from(element, {
        opacity: 0,
        y: options.y ?? 45,
        duration: 0.95,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: element,
          start: options.start ?? 'top 84%',
          once: true
        }
      })
    }

    reveal(introRef.value, {
      y: 35,
      start: 'top 78%'
    })

    reveal(originRef.value)
    reveal(historyRef.value)
    reveal(expertsRef.value)
    reveal(directorRef.value)
    reveal(achievementRef.value)

    if (historyRef.value) {
      const timelineItems = historyRef.value.querySelectorAll<HTMLElement>(
        '.urolift-story__timeline-item'
      )

      gsap.from(timelineItems, {
        opacity: 0,
        y: 35,
        duration: 0.75,
        stagger: 0.12,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: historyRef.value,
          start: 'top 75%',
          once: true
        }
      })
    }

    if (expertsRef.value) {
      const cards = expertsRef.value.querySelectorAll<HTMLElement>('.urolift-story__expert-card')

      gsap.from(cards, {
        opacity: 0,
        y: 40,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: expertsRef.value,
          start: 'top 76%',
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
.urolift-story {
  position: relative;
  overflow: hidden;
  padding: 140px 0 130px;
  background: #ffffff;
  color: #1d2d3e;
}

.urolift-story__background {
  position: absolute;
  inset: 0;
  overflow: hidden;
  pointer-events: none;
}

.urolift-story__watermark {
  position: absolute;
  top: 70px;
  right: -25px;
  font-size: clamp(130px, 15vw, 240px);
  line-height: 0.8;
  font-weight: 800;
  letter-spacing: -0.065em;
  color: rgba(26, 65, 101, 0.023);
  white-space: nowrap;
}

.urolift-story__inner {
  position: relative;
  z-index: 1;
}

/* ========================================================
     INTRO
  ======================================================== */

.urolift-story__intro {
  display: grid;
  grid-template-columns:
    minmax(0, 0.95fr)
    minmax(420px, 1.05fr);
  gap: 100px;
  align-items: end;
}

.urolift-story__eyebrow {
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

.urolift-story__eyebrow-line {
  width: 34px;
  height: 1px;
  background: #668198;
}

.urolift-story__title {
  margin: 0;
  font-size: clamp(44px, 4.3vw, 66px);
  line-height: 1.28;
  letter-spacing: -0.055em;
  font-weight: 400;
  color: #172b3f;
  word-break: keep-all;

  strong {
    font-weight: 700;
    color: #245f95;
  }
}

.urolift-story__lead {
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

.urolift-story__description {
  max-width: 680px;
  margin: 24px 0 0;
  font-size: 16px;
  line-height: 1.9;
  color: #74818d;
  word-break: keep-all;
}

/* ========================================================
     ORIGIN
  ======================================================== */

.urolift-story__origin {
  display: grid;
  grid-template-columns: minmax(0, 0.9fr) minmax(0, 1.1fr);
  gap: 90px;
  align-items: center;
  margin-top: 105px;
  padding: 80px 72px;
  background: #f5f9fc;
}

.urolift-story__origin-visual {
  position: relative;
}

.urolift-story__origin-image {
  position: relative;
  width: min(100%, 500px);
  aspect-ratio: 1 / 1;
  overflow: hidden;
  background: #ffffff;

  img {
    display: block;
    width: 100%;
    height: 100%;
    padding: 8%;
    object-fit: contain;
  }
}

.urolift-story__image-index {
  position: absolute;
  top: 20px;
  right: 20px;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.12em;
  color: #8ca0b1;
}

.urolift-story__origin-year {
  position: absolute;
  right: 0;
  bottom: -30px;
  min-width: 175px;
  padding: 24px 26px;
  background: #1e466a;

  span {
    display: block;
    margin-bottom: 9px;
    font-size: 8px;
    line-height: 1;
    font-weight: 700;
    letter-spacing: 0.17em;
    color: rgba(255, 255, 255, 0.45);
  }

  strong {
    display: block;
    font-size: 36px;
    line-height: 1;
    letter-spacing: -0.045em;
    color: #ffffff;
  }
}

.urolift-story__section-label {
  display: block;
  margin-bottom: 15px;
  font-size: 9px;
  line-height: 1;
  font-weight: 700;
  letter-spacing: 0.19em;
  color: #718da5;
}

.urolift-story__origin-content h3,
.urolift-story__section-heading h3,
.urolift-story__director-content h3 {
  margin: 0;
  font-size: 34px;
  line-height: 1.5;
  letter-spacing: -0.045em;
  font-weight: 400;
  color: #21374a;
  word-break: keep-all;

  strong {
    font-weight: 700;
    color: #245f95;
  }
}

.urolift-story__origin-lead {
  margin-top: 30px !important;
  font-size: 18px !important;
  font-weight: 600;
  color: #3f5669 !important;
}

.urolift-story__origin-content > p {
  margin: 18px 0 0;
  font-size: 15px;
  line-height: 1.9;
  color: #778590;
  word-break: keep-all;
}

.urolift-story__facts {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  margin-top: 38px;
  border-top: 1px solid #dce6ed;
}

.urolift-story__fact {
  padding: 23px 18px 0 0;

  + .urolift-story__fact {
    padding-left: 18px;
    border-left: 1px solid #dce6ed;
  }

  strong {
    display: block;
    font-size: 25px;
    line-height: 1;
    color: #376f9f;
  }

  span {
    display: block;
    margin-top: 9px;
    font-size: 12px;
    color: #7b8995;
  }
}

/* ========================================================
     COMMON HEADING
  ======================================================== */

.urolift-story__history,
.urolift-story__experts {
  margin-top: 125px;
}

.urolift-story__section-heading {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  gap: 70px;
  margin-bottom: 60px;
}

.urolift-story__section-number {
  display: block;
  margin-bottom: 14px;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.12em;
  color: #a2afb9;
}

.urolift-story__section-heading > p {
  max-width: 390px;
  margin: 0 0 4px;
  font-size: 14px;
  line-height: 1.85;
  color: #7b8995;
  word-break: keep-all;
}

/* ========================================================
     HISTORY
  ======================================================== */

.urolift-story__history-layout {
  display: grid;
  grid-template-columns: minmax(250px, 0.7fr) minmax(0, 1.3fr);
  gap: 90px;
  padding-top: 60px;
  border-top: 1px solid #dce5eb;
}

.urolift-story__history-sticky {
  align-self: start;
  position: sticky;
  top: 120px;

  span {
    display: block;
    margin-bottom: 15px;
    font-size: 9px;
    font-weight: 700;
    letter-spacing: 0.17em;
    color: #8094a5;
  }

  strong {
    display: block;
    font-size: 26px;
    line-height: 1.55;
    letter-spacing: -0.035em;
    color: #29445c;
    word-break: keep-all;
  }
}

.urolift-story__timeline {
  position: relative;
}

.urolift-story__timeline::before {
  content: '';
  position: absolute;
  top: 10px;
  bottom: 22px;
  left: 6px;
  width: 1px;
  background: #d6e2ea;
}

.urolift-story__timeline-item {
  position: relative;
  display: grid;
  grid-template-columns: 28px minmax(0, 1fr);
}

.urolift-story__timeline-item + .urolift-story__timeline-item {
  margin-top: 38px;
}

.urolift-story__timeline-marker {
  position: relative;

  span {
    position: absolute;
    top: 6px;
    left: 6px;
    width: 13px;
    height: 13px;
    border: 3px solid #3979ae;
    border-radius: 50%;
    background: #ffffff;
    transform: translateX(-50%);
    z-index: 1;
  }
}

.urolift-story__timeline-content {
  padding: 0 0 34px 18px;
}

.urolift-story__timeline-top {
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 11px;
}

.urolift-story__timeline-index {
  font-size: 9px;
  font-weight: 700;
  letter-spacing: 0.12em;
  color: #a4b0ba;
}

.urolift-story__timeline-period {
  font-size: 13px;
  letter-spacing: -0.01em;
  color: #4c7ea8;
}

.urolift-story__timeline-content h4 {
  margin: 0 0 14px;
  font-size: 23px;
  line-height: 1.45;
  letter-spacing: -0.035em;
  color: #273d50;
  word-break: keep-all;
}

.urolift-story__timeline-content p {
  max-width: 740px;
  margin: 0;
  font-size: 14px;
  line-height: 1.8;
  color: #77848f;
  word-break: keep-all;
}

.urolift-story__timeline-content p + p {
  margin-top: 6px;
}

/* ========================================================
     EXPERTS
  ======================================================== */

.urolift-story__expert-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 20px;
}

.urolift-story__expert-card {
  min-width: 0;
}

.urolift-story__expert-image {
  position: relative;
  aspect-ratio: 0.9 / 1;
  overflow: hidden;
  background: #dce5ec;

  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.8s cubic-bezier(0.22, 1, 0.36, 1);
  }
}

.urolift-story__expert-card:hover {
  .urolift-story__expert-image img {
    transform: scale(1.04);
  }
}

.urolift-story__expert-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, rgba(15, 33, 48, 0.03) 30%, rgba(13, 35, 52, 0.65) 100%);
}

.urolift-story__expert-number {
  position: absolute;
  top: 18px;
  right: 18px;
  font-size: 9px;
  letter-spacing: 0.12em;
  color: rgba(255, 255, 255, 0.7);
}

.urolift-story__expert-name {
  position: absolute;
  right: 20px;
  bottom: 20px;
  left: 20px;

  strong {
    display: block;
    font-size: 19px;
    line-height: 1.3;
    letter-spacing: -0.025em;
    color: #ffffff;
  }

  span {
    display: block;
    margin-top: 5px;
    font-size: 10px;
    line-height: 1.4;
    letter-spacing: 0.04em;
    color: rgba(255, 255, 255, 0.64);
  }
}

.urolift-story__expert-content {
  padding-top: 18px;

  p {
    margin: 0;
    font-size: 13px;
    line-height: 1.8;
    color: #788590;
    word-break: keep-all;
  }
}

.urolift-story__archive {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 12px;
  margin-top: 55px;
  padding-top: 24px;
  border-top: 1px solid #e0e7ec;
}

.urolift-story__archive-item {
  position: relative;
  aspect-ratio: 16 / 10;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    filter: saturate(0.7);
    transition:
      transform 0.6s ease,
      filter 0.6s ease;
  }

  span {
    position: absolute;
    right: 13px;
    bottom: 11px;
    left: 13px;
    font-size: 10px;
    line-height: 1.4;
    color: #ffffff;
    text-shadow: 0 1px 8px rgba(0, 0, 0, 0.45);
  }

  &:hover img {
    transform: scale(1.035);
    filter: saturate(1);
  }
}

/* ========================================================
     DIRECTOR
  ======================================================== */

.urolift-story__director {
  display: grid;
  grid-template-columns: minmax(0, 0.78fr) minmax(0, 1.22fr);
  margin-top: 130px;
  background: #f3f7fa;
}

.urolift-story__director-image {
  min-height: 680px;
  overflow: hidden;

  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center top;
  }
}

.urolift-story__director-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 70px 75px;
}

.urolift-story__director-content > p {
  max-width: 650px;
  margin: 25px 0 0;
  font-size: 15px;
  line-height: 1.9;
  color: #74828e;
  word-break: keep-all;
}

.urolift-story__director-history {
  margin-top: 42px;
  border-top: 1px solid #d9e3ea;
}

.urolift-story__director-history-item {
  display: grid;
  grid-template-columns: 120px minmax(0, 1fr);
  gap: 22px;
  padding: 19px 0;
  border-bottom: 1px solid #d9e3ea;

  span {
    font-size: 12px;
    font-weight: 700;
    color: #5880a2;
  }

  strong {
    font-size: 14px;
    line-height: 1.65;
    font-weight: 500;
    color: #405466;
    word-break: keep-all;
  }
}

/* ========================================================
     ACHIEVEMENT
  ======================================================== */

.urolift-story__achievement {
  display: grid;
  grid-template-columns: 0.8fr 1.2fr;
  margin-top: 120px;
  background: #1c3d5c;
  overflow: hidden;
}

.urolift-story__achievement-content {
  position: relative;
  z-index: 2;
  padding: 70px 60px;
}

.urolift-story__achievement-label {
  display: block;
  margin-bottom: 25px;
  font-size: 9px;
  font-weight: 700;
  letter-spacing: 0.18em;
  color: rgba(255, 255, 255, 0.42);
}

.urolift-story__achievement-number {
  display: flex;
  align-items: flex-end;
  gap: 8px;

  strong {
    font-size: 78px;
    line-height: 0.9;
    letter-spacing: -0.065em;
    color: #ffffff;
  }

  span {
    padding-bottom: 5px;
    font-size: 17px;
    font-weight: 600;
    color: #a9cce7;
  }
}

.urolift-story__achievement-content h3 {
  margin: 32px 0 0;
  font-size: 30px;
  line-height: 1.5;
  letter-spacing: -0.04em;
  font-weight: 400;
  color: #ffffff;

  strong {
    color: #a8d0ed;
  }
}

.urolift-story__achievement-content p {
  margin: 20px 0 0;
  font-size: 14px;
  line-height: 1.85;
  color: rgba(255, 255, 255, 0.62);
  word-break: keep-all;
}

.urolift-story__achievement-visual {
  position: relative;
  min-height: 430px;

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(
      90deg,
      #1c3d5c 0%,
      rgba(28, 61, 92, 0.7) 16%,
      rgba(28, 61, 92, 0.08) 55%
    );
  }

  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}

/* ========================================================
     DESKTOP DOWN
  ======================================================== */

@include desktop-down {
  .urolift-story {
    padding: 120px 0;
  }

  .urolift-story__intro {
    gap: 70px;
  }

  .urolift-story__origin {
    gap: 65px;
    padding: 65px 55px;
  }

  .urolift-story__origin-content h3,
  .urolift-story__section-heading h3,
  .urolift-story__director-content h3 {
    font-size: 31px;
  }

  .urolift-story__expert-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 35px 22px;
  }

  .urolift-story__expert-image {
    aspect-ratio: 1.15 / 1;
  }

  .urolift-story__director-content {
    padding: 60px 55px;
  }
}

/* ========================================================
     LAPTOP
  ======================================================== */

@include laptop-down {
  .urolift-story {
    padding: 95px 0;
  }

  .urolift-story__intro {
    grid-template-columns: 1fr;
    gap: 34px;
  }

  .urolift-story__intro-right {
    max-width: 760px;
  }

  .urolift-story__origin {
    grid-template-columns: 1fr;
    gap: 55px;
    margin-top: 75px;
  }

  .urolift-story__origin-image {
    width: min(100%, 420px);
  }

  .urolift-story__history,
  .urolift-story__experts {
    margin-top: 90px;
  }

  .urolift-story__section-heading {
    display: block;
    margin-bottom: 45px;
  }

  .urolift-story__section-heading > p {
    max-width: 600px;
    margin-top: 22px;
  }

  .urolift-story__history-layout {
    grid-template-columns: 1fr;
    gap: 35px;
    padding-top: 42px;
  }

  .urolift-story__history-sticky {
    position: static;
  }

  .urolift-story__archive {
    grid-template-columns: repeat(2, 1fr);
  }

  .urolift-story__director {
    grid-template-columns: 1fr;
    margin-top: 90px;
  }

  .urolift-story__director-image {
    min-height: 540px;
  }

  .urolift-story__achievement {
    grid-template-columns: 1fr;
    margin-top: 90px;
  }

  .urolift-story__achievement-visual {
    min-height: 350px;
  }

  .urolift-story__achievement-visual::after {
    background: linear-gradient(180deg, #1c3d5c 0%, rgba(28, 61, 92, 0.25) 25%, transparent 55%);
  }
}

/* ========================================================
     MOBILE
  ======================================================== */

@include mobile {
  .urolift-story {
    padding: 72px 0 78px;
  }

  .urolift-story__watermark {
    top: 40px;
    right: -10px;
    font-size: 80px;
  }

  .urolift-story__eyebrow {
    gap: 10px;
    margin-bottom: 16px;
    font-size: 9px;
  }

  .urolift-story__eyebrow-line {
    width: 24px;
  }

  .urolift-story__title {
    font-size: 35px;
  }

  .urolift-story__lead {
    font-size: 20px;
  }

  .urolift-story__description {
    margin-top: 18px;
    font-size: 14px;
    line-height: 1.8;
  }

  /* ORIGIN */

  .urolift-story__origin {
    gap: 42px;
    margin-top: 55px;
    margin-left: calc(var(--container-padding, 20px) * -1);
    margin-right: calc(var(--container-padding, 20px) * -1);
    padding: 42px 20px 50px;
  }

  .urolift-story__origin-image {
    width: min(100%, 300px);
  }

  .urolift-story__origin-year {
    right: 0;
    bottom: -22px;
    min-width: 135px;
    padding: 18px;

    strong {
      font-size: 28px;
    }
  }

  .urolift-story__origin-content h3,
  .urolift-story__section-heading h3,
  .urolift-story__director-content h3 {
    font-size: 25px;
  }

  .urolift-story__origin-lead {
    margin-top: 23px !important;
    font-size: 16px !important;
  }

  .urolift-story__origin-content > p {
    font-size: 14px;
    line-height: 1.8;
  }

  .urolift-story__facts {
    margin-top: 30px;
  }

  .urolift-story__fact {
    padding-right: 10px;

    + .urolift-story__fact {
      padding-left: 10px;
    }

    strong {
      font-size: 20px;
    }

    span {
      font-size: 10px;
    }
  }

  /* HISTORY */

  .urolift-story__history,
  .urolift-story__experts {
    margin-top: 70px;
  }

  .urolift-story__section-heading {
    margin-bottom: 34px;
  }

  .urolift-story__section-heading > p {
    margin-top: 18px;
    font-size: 13px;
    line-height: 1.8;
  }

  .urolift-story__history-layout {
    padding-top: 30px;
  }

  .urolift-story__history-sticky strong {
    font-size: 20px;
  }

  .urolift-story__timeline-item + .urolift-story__timeline-item {
    margin-top: 24px;
  }

  .urolift-story__timeline-content {
    padding-left: 12px;
  }

  .urolift-story__timeline-content h4 {
    font-size: 18px;
  }

  .urolift-story__timeline-content p {
    font-size: 13px;
  }

  /* EXPERTS */

  .urolift-story__expert-grid {
    grid-template-columns: 1fr 1fr;
    gap: 28px 12px;
  }

  .urolift-story__expert-image {
    aspect-ratio: 0.92 / 1;
  }

  .urolift-story__expert-number {
    top: 12px;
    right: 12px;
  }

  .urolift-story__expert-name {
    right: 12px;
    bottom: 13px;
    left: 12px;

    strong {
      font-size: 14px;
    }

    span {
      font-size: 8px;
    }
  }

  .urolift-story__expert-content {
    padding-top: 12px;

    p {
      font-size: 12px;
      line-height: 1.7;
    }
  }

  .urolift-story__archive {
    gap: 7px;
    margin-top: 38px;
  }

  .urolift-story__archive-item span {
    display: none;
  }

  /* DIRECTOR */

  .urolift-story__director {
    margin-top: 70px;
    margin-left: calc(var(--container-padding, 20px) * -1);
    margin-right: calc(var(--container-padding, 20px) * -1);
  }

  .urolift-story__director-image {
    min-height: 420px;
  }

  .urolift-story__director-content {
    padding: 42px 20px 46px;
  }

  .urolift-story__director-content > p {
    margin-top: 20px;
    font-size: 14px;
    line-height: 1.8;
  }

  .urolift-story__director-history {
    margin-top: 30px;
  }

  .urolift-story__director-history-item {
    grid-template-columns: 82px minmax(0, 1fr);
    gap: 14px;
    padding: 15px 0;

    span {
      font-size: 10px;
    }

    strong {
      font-size: 12px;
    }
  }

  /* ACHIEVEMENT */

  .urolift-story__achievement {
    margin-top: 70px;
    margin-left: calc(var(--container-padding, 20px) * -1);
    margin-right: calc(var(--container-padding, 20px) * -1);
  }

  .urolift-story__achievement-content {
    padding: 42px 20px;
  }

  .urolift-story__achievement-number {
    strong {
      font-size: 62px;
    }

    span {
      font-size: 15px;
    }
  }

  .urolift-story__achievement-content h3 {
    margin-top: 26px;
    font-size: 24px;
  }

  .urolift-story__achievement-content p {
    font-size: 13px;
    line-height: 1.8;
  }

  .urolift-story__achievement-visual {
    min-height: 260px;
  }
}

@media (prefers-reduced-motion: reduce) {
  .urolift-story *,
  .urolift-story *::before,
  .urolift-story *::after {
    animation: none !important;
    transition: none !important;
  }
}
</style>
