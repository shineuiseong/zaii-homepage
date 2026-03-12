<template>
  <section class="urolift-director section">
    <div class="container">
      <div class="urolift-director__grid">
        <div class="urolift-director__image">
          <img src="/images/urolift/director-profile.png" alt="변재상 병원장" />
        </div>

        <div class="urolift-director__content">
          <p class="urolift-director__eyebrow">자이비뇨기과</p>
          <h2 class="urolift-director__title">변재상 병원장</h2>

          <div class="urolift-director__timeline">
            <div v-for="item in directorHistory" :key="item.period" class="urolift-director__item">
              <h3 class="urolift-director__period">{{ item.period }}</h3>
              <p v-for="text in item.texts" :key="text" class="urolift-director__text">
                {{ text }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const directorHistory = [
  {
    period: '2016~2017년',
    texts: ['나은병원 전립선센터장으로 유로리프트 도입', '유로리프트 시술 200례 진행']
  },
  {
    period: '2018년',
    texts: [
      '유로리프트가 개발된 호주의 여러 병원에서 학술연구 및 연수 진행',
      '호주, 시드니 및 캔버라 지역에서 유로리프트가 많이 시술되는 센터 4곳 방문'
    ]
  },
  {
    period: '2018~2019년',
    texts: ['강남베드로병원 전립선센터장', '유로리프트 시술 200례 진행']
  },
  {
    period: '2020년~2022년',
    texts: [
      '유로리프트 중점시술 병원 자이비뇨의학과 개원',
      '2021년 유로리프트 누적 1000례 이상 시술',
      '2022년~현재 자이비뇨의학과병원 개원'
    ]
  }
]
</script>

<style scoped lang="scss">
.urolift-director__grid {
  display: grid;
  grid-template-columns: 1.02fr 0.98fr;
  gap: 42px;
  align-items: start;
}

.urolift-director__image {
  img {
    display: block;
    width: 100%;
    height: auto;
    object-fit: cover;
  }
}

.urolift-director__eyebrow {
  margin: 0 0 8px;
  font-size: 16px;
  color: $color-primary;
}

.urolift-director__title {
  margin: 0;
  padding-bottom: 18px;
  border-bottom: 1px solid #d9e5f2;
  font-size: 54px;
  line-height: 1.1;
  font-weight: 800;
  color: $text-main;
}

.urolift-director__timeline {
  padding-top: 18px;
}

.urolift-director__item + .urolift-director__item {
  margin-top: 24px;
}

.urolift-director__period {
  margin: 0 0 10px;
  font-size: 24px;
  font-weight: 800;
  color: $color-primary;
}

.urolift-director__text {
  margin: 0;
  font-size: 18px;
  line-height: 1.8;
  color: $text-sub;
  word-break: keep-all;
}

.urolift-director__text + .urolift-director__text {
  margin-top: 4px;
}

@include laptop-down {
  .urolift-director__grid {
    grid-template-columns: 1fr;
    gap: 28px;
  }

  .urolift-director__title {
    font-size: 40px;
  }

  .urolift-director__period {
    font-size: 22px;
  }

  .urolift-director__text {
    font-size: 16px;
  }
}

@include mobile {
  .urolift-director__title {
    font-size: 30px;
  }

  .urolift-director__period {
    font-size: 19px;
  }

  .urolift-director__text {
    font-size: 15px;
    line-height: 1.75;
  }
}
</style>
