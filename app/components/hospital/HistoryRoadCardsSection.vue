<template>
  <section class="history-road section">
    <div class="container">
      <div class="history-road__head">
        <p class="history-road__eyebrow">SPECIALIZED CARE</p>
        <h2 class="history-road__title">전립선 중점 병원</h2>
      </div>

      <div class="history-road__grid">
        <article v-for="card in cards" :key="card.title" class="history-road-card">
          <div class="history-road-card__thumb">
            <img :src="card.image" :alt="card.title" />
            <div class="history-road-card__overlay" />
            <div class="history-road-card__title-wrap">
              <h3 class="history-road-card__title" v-html="card.title" />
            </div>
          </div>

          <div class="history-road-card__body">
            <p class="history-road-card__desc">{{ card.description }}</p>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const cards = [
  {
    image: '/images/road-01.webp',
    title: '고위험군<br>전립선비대증',
    description: '유로리프트, 플라즈마기화술'
  },
  {
    image: '/images/road-02.webp',
    title: '만성전립선염,<br>만성골반통증',
    description: '템프로, 체외충격파 ESWT'
  },
  {
    image: '/images/road-03.webp',
    title: '전립선암 조직<br>검사',
    description: '상급병원 진료와 치료를 좀 더 빠르게'
  }
]
</script>

<style scoped lang="scss">
.history-road {
  background: #f7fbff;
}

.history-road__head {
  margin-bottom: 26px;
}

.history-road__eyebrow {
  margin: 0 0 10px;
  font-size: 13px;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: $text-muted;
}

.history-road__title {
  margin: 0;
  font-size: 34px;
  line-height: 1.2;
  font-weight: 800;
  color: $text-main;
}

.history-road__grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 26px;
}

.history-road-card {
  display: flex;
  flex-direction: column;
}

.history-road-card__thumb {
  position: relative;
  aspect-ratio: 1 / 1;
  overflow: hidden;
  background: #dfe7f1;

  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}

.history-road-card__overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, rgba(10, 22, 42, 0.16) 0%, rgba(10, 22, 42, 0.34) 100%);
}

.history-road-card__title-wrap {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px;
  text-align: center;
}

.history-road-card__title {
  margin: 0;
  font-size: 30px;
  line-height: 1.35;
  font-weight: 800;
  color: #fff;
  text-shadow: 0 4px 14px rgba(0, 0, 0, 0.2);
  word-break: keep-all;
}

.history-road-card__body {
  position: relative;
  padding-top: 18px;
  text-align: center;
}

.history-road-card__body::before {
  content: '';
  position: absolute;
  top: -2px;
  left: 50%;
  width: 1px;
  height: 18px;
  background: #8aa7c7;
  transform: translateX(-50%);
}

.history-road-card__desc {
  margin: 0;
  font-size: 16px;
  line-height: 1.6;
  font-weight: 700;
  color: $text-main;
  word-break: keep-all;
}

@include desktop-down {
  .history-road__title {
    font-size: 30px;
  }

  .history-road-card__title {
    font-size: 26px;
  }
}

@include laptop-down {
  .history-road__grid {
    grid-template-columns: 1fr;
    gap: 24px;
  }

  .history-road-card__thumb {
    aspect-ratio: 16 / 10;
  }

  .history-road-card__title {
    font-size: 24px;
  }
}

@include mobile {
  .history-road__title {
    font-size: 26px;
  }

  .history-road-card__title {
    font-size: 20px;
  }

  .history-road-card__desc {
    font-size: 15px;
  }
}
</style>
