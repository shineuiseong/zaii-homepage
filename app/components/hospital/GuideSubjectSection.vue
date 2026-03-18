<template>
  <section class="guide-subject section">
    <div class="container">
      <div class="guide-subject__head">
        <p class="guide-subject__eyebrow">SPECIALIZED CARE</p>
        <h2 class="guide-subject__title">진료과목</h2>
      </div>

      <div class="guide-subject__grid">
        <article v-for="card in cards" :key="card.title" class="guide-subject-card">
          <div class="guide-subject-card__thumb">
            <img :src="card.image" :alt="card.titlePlain" />
            <div class="guide-subject-card__overlay" />
            <div class="guide-subject-card__title-wrap">
              <h3 class="guide-subject-card__title" v-html="card.title" />
            </div>
          </div>

          <div class="guide-subject-card__body">
            <p class="guide-subject-card__desc">{{ card.description }}</p>
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
    title: '전립선비대증',
    titlePlain: '전립선비대증',
    description: '유로리프트, 플라즈마기화술'
  },
  {
    image: '/images/road-02.webp',
    title: '만성골반통증,<br>전립선염',
    titlePlain: '만성골반통증, 전립선염',
    description: '템프로, 체외충격파 ESWT'
  },
  {
    image: '/images/road-03.webp',
    title: '전립선암<br>조직 검사',
    titlePlain: '전립선암 조직 검사',
    description: '상급병원 진료와 치료를 좀 더 빠르게'
  }
]
</script>

<style scoped lang="scss">
.guide-subject {
  background: #9ea6c5;
}

.guide-subject__head {
  margin-bottom: 26px;
  text-align: center;
}

.guide-subject__eyebrow {
  margin: 0 0 10px;
  font-size: 13px;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.72);
}

.guide-subject__title {
  margin: 0;
  font-size: 42px;
  line-height: 1.2;
  font-weight: 800;
  color: #fff;
}

.guide-subject__grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 30px;
}

.guide-subject-card {
  display: flex;
  flex-direction: column;
}

.guide-subject-card__thumb {
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

.guide-subject-card__overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, rgba(10, 22, 42, 0.12) 0%, rgba(10, 22, 42, 0.28) 100%);
}

.guide-subject-card__title-wrap {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px;
  text-align: center;
}

.guide-subject-card__title {
  margin: 0;
  font-size: 30px;
  line-height: 1.35;
  font-weight: 800;
  color: #fff;
  text-shadow: 0 4px 14px rgba(0, 0, 0, 0.24);
  word-break: keep-all;
}

.guide-subject-card__body {
  position: relative;
  padding-top: 18px;
  text-align: center;
}

.guide-subject-card__body::before {
  content: '';
  position: absolute;
  top: -2px;
  left: 50%;
  width: 1px;
  height: 18px;
  background: rgba(255, 255, 255, 0.7);
  transform: translateX(-50%);
}

.guide-subject-card__desc {
  margin: 0;
  font-size: 18px;
  line-height: 1.6;
  font-weight: 700;
  color: #fff;
  word-break: keep-all;
}

@include desktop-down {
  .guide-subject__title {
    font-size: 36px;
  }

  .guide-subject-card__title {
    font-size: 26px;
  }
}

@include laptop-down {
  .guide-subject__title {
    font-size: 30px;
  }

  .guide-subject__grid {
    grid-template-columns: 1fr;
    gap: 24px;
  }

  .guide-subject-card__thumb {
    aspect-ratio: 16 / 10;
  }

  .guide-subject-card__title {
    font-size: 24px;
  }

  .guide-subject-card__desc {
    font-size: 16px;
  }
}

@include mobile {
  .guide-subject__title {
    font-size: 26px;
  }

  .guide-subject-card__thumb {
    aspect-ratio: 16 / 11;
  }

  .guide-subject-card__title {
    font-size: 20px;
  }

  .guide-subject-card__desc {
    font-size: 15px;
  }
}
</style>
