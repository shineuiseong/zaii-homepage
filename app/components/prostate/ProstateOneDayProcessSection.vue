<template>
  <section id="prostate-process" class="prostate-process section">
    <div class="container">
      <div class="prostate-process__head">
        <p class="prostate-process__eyebrow">ZAII UROLOGY HOSPITAL</p>
        <h2 class="prostate-process__title">ONE-DAY검사 프로세스</h2>
      </div>

      <div class="prostate-process__list">
        <article v-for="(step, index) in steps" :key="step.step" class="prostate-process__row">
          <div class="prostate-process__step-col">
            <div class="prostate-process__step" :class="`is-${index + 1}`">
              <span>STEP {{ step.step }}</span>
            </div>
          </div>

          <div class="prostate-process__subject">
            <h3 class="prostate-process__subject-title">{{ step.title }}</h3>
            <p v-if="step.subTitle" class="prostate-process__subject-sub">
              {{ step.subTitle }}
            </p>
          </div>

          <div class="prostate-process__desc">
            <p v-for="(line, i) in step.lines" :key="i">
              {{ line }}
            </p>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const steps = [
  {
    step: '01',
    title: '문진표 (IPSS) 작성',
    subTitle: '',
    lines: [
      '국제 전립선 증상 점수표를 활용해 환자의 증상 정도를 객관화',
      '전립선비대증 진단에 필수적인 기초 평가',
      '증상의 경중에 따라 치료방침을 결정할 수 있게 도움'
    ]
  },
  {
    step: '02',
    title: '상담',
    subTitle: '',
    lines: [
      '문진표를 활용해 현재 배뇨 상태를 확인',
      '배뇨장애를 일으킬 수 있는 다른 질환 여부 점검',
      '과거 병력, 수술력 및 복용하는 약물 등을 조사'
    ]
  },
  {
    step: '03',
    title: 'PSA 검사',
    subTitle: '',
    lines: [
      '일반인들에게 PSA(PROSTATE SPECIFIC ANTIGEN)라고 알려진 혈청검사',
      '전립선 크기, 염증과 연령에 따라 정상 기준치가 달라질 수 있음',
      '정상치 이상으로 증가한 경우에는 전립선 조직검사를 시행',
      '전립선암 여부를 판별'
    ]
  },
  {
    step: '04',
    title: '기본검사',
    subTitle: '( 소변검사, 요속검사, 잔뇨검사 )',
    lines: ['전립선비대증과 관련된 폐색의 평가', '추적 관찰에 유용하게 사용되는 비침습적 검사']
  },
  {
    step: '05',
    title: '전립선 초음파검사',
    subTitle: '',
    lines: [
      '검사 시 신체적 부담이 비교적 적음',
      '전립선의 크기 측정뿐만 아니라 모양 파악',
      '전립선내 이상 징후를 관찰하는 데에도 사용'
    ]
  },
  {
    step: '06',
    title: '방광경 검사',
    subTitle: '',
    lines: [
      '요도협착, 방광 내 결석, 방광의 모양 변형 점검',
      '전립선에 의한 요도 폐색 정도 등을 육안으로 관찰'
    ]
  }
]
</script>

<style scoped lang="scss">
.prostate-process {
  background: #efeff1;
  padding: 100px 0;
}

.prostate-process__head {
  text-align: center;
  margin-bottom: 54px;
}

.prostate-process__eyebrow {
  margin: 0 0 10px;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.28em;
  color: #9a9ca3;
}

.prostate-process__title {
  margin: 0;
  font-size: 58px;
  line-height: 1.15;
  font-weight: 800;
  letter-spacing: -0.04em;
  color: #111827;
  word-break: keep-all;
}

.prostate-process__list {
  display: flex;
  flex-direction: column;
  gap: 0;
}

.prostate-process__row {
  display: grid;
  grid-template-columns: 180px 280px minmax(0, 1fr);
  gap: 40px;
  align-items: center;
  padding: 34px 0;
  border-top: 1px dashed #d5d7dd;
}

.prostate-process__row:last-child {
  border-bottom: 1px dashed #d5d7dd;
}

.prostate-process__step-col {
  display: flex;
  justify-content: center;
}

.prostate-process__step {
  width: 132px;
  height: 132px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  box-shadow: 0 10px 24px rgba(32, 45, 74, 0.08);

  span {
    font-size: 24px;
    line-height: 1.1;
    font-weight: 800;
    letter-spacing: -0.02em;
  }

  &.is-1 {
    background: #adb5cf;
    color: #ffffff;
  }

  &.is-2 {
    background: #bfd3ea;
    color: #3d67d7;
  }

  &.is-3 {
    background: #97b8e7;
    color: #0f3d9f;
  }

  &.is-4 {
    background: #6f89d1;
    color: #ffffff;
  }

  &.is-5 {
    background: #5373d8;
    color: #ffffff;
  }

  &.is-6 {
    background: #234283;
    color: #ffffff;
  }
}

.prostate-process__subject {
  text-align: center;
}

.prostate-process__subject-title {
  margin: 0;
  font-size: 30px;
  line-height: 1.35;
  font-weight: 800;
  color: #18181b;
  word-break: keep-all;
}

.prostate-process__subject-sub {
  margin: 8px 0 0;
  font-size: 18px;
  line-height: 1.5;
  font-weight: 600;
  color: #444;
  word-break: keep-all;
}

.prostate-process__desc {
  color: #66676d;
}

.prostate-process__desc p {
  margin: 0;
  font-size: 22px;
  line-height: 1.75;
  font-weight: 500;
  word-break: keep-all;
}

.prostate-process__desc p + p {
  margin-top: 6px;
}

@include desktop-down {
  .prostate-process {
    padding: 84px 0;
  }

  .prostate-process__head {
    margin-bottom: 42px;
  }

  .prostate-process__title {
    font-size: 46px;
  }

  .prostate-process__row {
    grid-template-columns: 150px 220px minmax(0, 1fr);
    gap: 28px;
    padding: 28px 0;
  }

  .prostate-process__step {
    width: 116px;
    height: 116px;

    span {
      font-size: 21px;
    }
  }

  .prostate-process__subject-title {
    font-size: 24px;
  }

  .prostate-process__subject-sub {
    font-size: 16px;
  }

  .prostate-process__desc p {
    font-size: 18px;
  }
}

@include laptop-down {
  .prostate-process {
    padding: 72px 0;
  }

  .prostate-process__head {
    margin-bottom: 28px;
  }

  .prostate-process__title {
    font-size: 36px;
  }

  .prostate-process__row {
    grid-template-columns: 1fr;
    gap: 14px;
    padding: 22px 20px;
    border: 1px solid #dde1e8;
    border-radius: 24px;
    background: #ffffff;
    margin-bottom: 14px;
  }

  .prostate-process__row:last-child {
    border-bottom: 1px solid #dde1e8;
  }

  .prostate-process__step-col {
    justify-content: flex-start;
  }

  .prostate-process__step {
    width: auto;
    min-width: 118px;
    height: 42px;
    padding: 0 18px;
    border-radius: 999px;

    span {
      font-size: 18px;
      line-height: 1;
    }
  }

  .prostate-process__subject {
    text-align: left;
  }

  .prostate-process__subject-title {
    font-size: 24px;
  }

  .prostate-process__subject-sub {
    font-size: 15px;
  }

  .prostate-process__desc p {
    font-size: 16px;
    line-height: 1.7;
  }
}

@include mobile {
  .prostate-process {
    padding: 52px 0;
  }

  .prostate-process__head {
    margin-bottom: 22px;
  }

  .prostate-process__eyebrow {
    font-size: 10px;
    letter-spacing: 0.22em;
  }

  .prostate-process__title {
    font-size: 28px;
    line-height: 1.25;
  }

  .prostate-process__row {
    gap: 10px;
    padding: 18px 16px;
    border-radius: 18px;
  }

  .prostate-process__step {
    min-width: 98px;
    height: 36px;
    padding: 0 14px;

    span {
      font-size: 15px;
    }
  }

  .prostate-process__subject-title {
    font-size: 20px;
    line-height: 1.4;
  }

  .prostate-process__subject-sub {
    margin-top: 6px;
    font-size: 13px;
  }

  .prostate-process__desc p {
    font-size: 14px;
    line-height: 1.7;
  }
}
</style>
