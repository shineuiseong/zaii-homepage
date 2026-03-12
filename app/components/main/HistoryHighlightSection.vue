<template>
  <section class="history-highlight section">
    <div class="container">
      <div class="history-highlight__head">
        <p class="history-highlight__eyebrow">zaii urology hospital</p>
        <h2 class="history-highlight__title">전립선 질환에 <span>강한 진료 경험</span></h2>
        <p class="history-highlight__desc">
          자이비뇨의학과는 전립선 치료 경험을 바탕으로 환자 상태에 맞는 진료와 시술 방향을
          제안합니다.
        </p>
      </div>

      <div class="history-highlight__content">
        <div class="history-highlight__timeline">
          <article v-for="item in historyItems" :key="item.period" class="history-item">
            <div class="history-item__period">
              {{ item.period }}
            </div>

            <div class="history-item__body">
              <h3 class="history-item__title">{{ item.title }}</h3>
              <p class="history-item__text">
                {{ item.description }}
                <strong v-if="item.highlight">{{ item.highlight }}</strong>
              </p>
            </div>
          </article>
        </div>

        <aside class="history-highlight__summary">
          <div class="history-summary-card">
            <div class="history-summary-card__top">
              <span class="history-summary-card__badge">{{ currentYear }}년 현재</span>
            </div>

            <p class="history-summary-card__label">유로리프트 누적 성과</p>

            <p class="history-summary-card__value">
              <strong>3500례</strong>
              <span class="history-summary-card__accent">달성</span>
            </p>

            <p class="history-summary-card__sub">
              축적된 시술 경험을 바탕으로 더 정교한 진료를 이어갑니다.
            </p>
          </div>
        </aside>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const historyItems = [
  {
    period: '1998~2006',
    title: '연세 플러스 비뇨기과 대표원장',
    description: '전립선 치료 연간 ',
    highlight: '다수 진행'
  },
  {
    period: '2007~2014',
    title: '자이비뇨기과 원장',
    description: '전립선 수술 연간 ',
    highlight: '다수 진행'
  },
  {
    period: '2016~2017',
    title: '나은병원 전립선 센터장',
    description: '유로리프트 ',
    highlight: '200례 이상'
  },
  {
    period: '2018~2019',
    title: '강남 베드로 병원 센터장',
    description: '유로리프트 ',
    highlight: '200례 이상'
  },
  {
    period: '2020~2024',
    title: '자이비뇨의학과병원 병원장',
    description: '유로리프트 ',
    highlight: '2500례 이상'
  }
]

const currentYear = new Date().getFullYear()
</script>

<style scoped lang="scss">
.history-highlight {
  background: linear-gradient(180deg, #f8fbff 0%, #ffffff 100%);
}

.history-highlight__head {
  margin-bottom: 40px;
  text-align: center;
}

.history-highlight__eyebrow {
  margin-bottom: 10px;
  font-size: 13px;
  letter-spacing: 0.22em;
  text-transform: lowercase;
  color: $text-muted;
}

.history-highlight__title {
  margin: 0;
  font-size: 46px;
  line-height: 1.2;
  font-weight: 800;
  color: $text-main;
  word-break: keep-all;

  span {
    color: $color-primary;
  }
}

.history-highlight__desc {
  max-width: 720px;
  margin: 16px auto 0;
  font-size: 17px;
  line-height: 1.7;
  color: $text-sub;
  word-break: keep-all;
}

.history-highlight__content {
  display: grid;
  grid-template-columns: minmax(0, 1.4fr) minmax(320px, 0.8fr);
  gap: 28px;
  align-items: start;
}

.history-highlight__timeline {
  display: flex;
  flex-direction: column;
  gap: 14px;
}

.history-item {
  display: grid;
  grid-template-columns: 160px minmax(0, 1fr);
  gap: 18px;
  align-items: center;
  padding: 22px 24px;
  border: 1px solid rgba(37, 99, 235, 0.08);
  border-radius: 22px;
  background: rgba(255, 255, 255, 0.88);
  box-shadow: 0 10px 30px rgba(15, 23, 42, 0.05);
}

.history-item__period {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 52px;
  padding: 0 20px;
  border-radius: 999px;
  background: #0f3f78;
  color: #ffffff;
  font-size: 18px;
  font-weight: 800;
  letter-spacing: -0.02em;
}

.history-item__title {
  margin: 0 0 8px;
  font-size: 22px;
  line-height: 1.3;
  font-weight: 800;
  color: $text-main;
  word-break: keep-all;
}

.history-item__text {
  margin: 0;
  font-size: 18px;
  line-height: 1.55;
  color: $text-sub;
  word-break: keep-all;

  strong {
    color: #ef4444;
    font-weight: 800;
  }
}

.history-highlight__summary {
  position: sticky;
  top: 120px;
}

.history-summary-card {
  position: relative;
  overflow: hidden;
  padding: 30px 28px;
  border-radius: 30px;
  background: linear-gradient(180deg, #1d5fc2 0%, #153e84 100%);
  color: #ffffff;
  box-shadow:
    0 22px 44px rgba(21, 62, 132, 0.22),
    inset 0 1px 0 rgba(255, 255, 255, 0.08);
}

.history-summary-card::before {
  content: '';
  position: absolute;
  top: -80px;
  right: -60px;
  width: 220px;
  height: 220px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.08);
  filter: blur(2px);
}

.history-summary-card::after {
  content: '';
  position: absolute;
  inset: auto -10% -30% auto;
  width: 220px;
  height: 220px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.05);
  filter: blur(10px);
}

.history-summary-card__top {
  position: relative;
  z-index: 1;
  margin-bottom: 22px;
}

.history-summary-card__badge {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 44px;
  padding: 0 18px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.14);
  border: 1px solid rgba(255, 255, 255, 0.18);
  backdrop-filter: blur(6px);
  font-size: 17px;
  font-weight: 800;
  letter-spacing: -0.02em;
}

.history-summary-card__label {
  position: relative;
  z-index: 1;
  margin: 0 0 14px;
  font-size: 16px;
  color: rgba(255, 255, 255, 0.76);
}

.history-summary-card__value {
  position: relative;
  z-index: 1;
  margin: 0;
  display: flex;
  align-items: flex-end;
  flex-wrap: wrap;
  gap: 8px 10px;
  line-height: 1.1;
  word-break: keep-all;

  strong {
    font-size: 60px;
    font-weight: 900;
    letter-spacing: -0.04em;
    color: #ffffff;
    text-shadow: 0 6px 16px rgba(0, 0, 0, 0.12);
  }
}

.history-summary-card__accent {
  display: inline-block;
  font-size: 36px;
  font-weight: 900;
  letter-spacing: -0.03em;
  color: #ffe16a;
  text-shadow: 0 4px 14px rgba(0, 0, 0, 0.14);
  animation: blink-accent 1.2s ease-in-out infinite;
}

.history-summary-card__sub {
  position: relative;
  z-index: 1;
  margin: 22px 0 0;
  font-size: 16px;
  line-height: 1.7;
  color: rgba(255, 255, 255, 0.88);
  word-break: keep-all;
}

@keyframes blink-accent {
  0%,
  100% {
    opacity: 1;
    filter: brightness(1);
  }

  50% {
    opacity: 0.55;
    filter: brightness(1.25);
  }
}

@include desktop-down {
  .history-highlight__title {
    font-size: 40px;
  }

  .history-highlight__content {
    grid-template-columns: minmax(0, 1fr) 340px;
  }

  .history-item {
    grid-template-columns: 140px minmax(0, 1fr);
    padding: 20px 22px;
  }

  .history-item__period {
    font-size: 16px;
  }

  .history-item__title {
    font-size: 20px;
  }

  .history-item__text {
    font-size: 16px;
  }

  .history-summary-card__value {
    strong {
      font-size: 52px;
    }
  }

  .history-summary-card__accent {
    font-size: 32px;
  }
}

@include laptop-down {
  .history-highlight__head {
    margin-bottom: 28px;
  }

  .history-highlight__title {
    font-size: 34px;
  }

  .history-highlight__desc {
    font-size: 16px;
  }

  .history-highlight__content {
    grid-template-columns: 1fr;
    gap: 20px;
  }

  .history-highlight__summary {
    position: static;
  }

  .history-item {
    grid-template-columns: 1fr;
    gap: 14px;
    align-items: start;
  }

  .history-item__period {
    justify-self: start;
  }

  .history-summary-card {
    padding: 26px 22px;
    border-radius: 24px;
  }

  .history-summary-card__badge {
    min-height: 40px;
    padding: 0 16px;
    font-size: 15px;
  }

  .history-summary-card__value {
    strong {
      font-size: 46px;
    }
  }

  .history-summary-card__accent {
    font-size: 28px;
  }
}

@include mobile {
  .history-highlight__eyebrow {
    font-size: 12px;
    letter-spacing: 0.16em;
  }

  .history-highlight__title {
    font-size: 28px;
  }

  .history-highlight__desc {
    margin-top: 12px;
    font-size: 15px;
    line-height: 1.6;
  }

  .history-item {
    padding: 18px 16px;
    border-radius: 18px;
  }

  .history-item__period {
    min-height: 46px;
    padding: 0 16px;
    font-size: 15px;
  }

  .history-item__title {
    font-size: 18px;
  }

  .history-item__text {
    font-size: 15px;
  }

  .history-summary-card {
    padding: 22px 18px;
    border-radius: 22px;
  }

  .history-summary-card__badge {
    min-height: 38px;
    padding: 0 14px;
    font-size: 14px;
  }

  .history-summary-card__label {
    font-size: 14px;
  }

  .history-summary-card__value {
    gap: 6px 8px;

    strong {
      font-size: 38px;
    }
  }

  .history-summary-card__accent {
    font-size: 24px;
  }

  .history-summary-card__sub {
    margin-top: 18px;
    font-size: 14px;
  }
}
</style>
