<template>
  <section id="filler-comparison" class="filler-comparison section">
    <div class="container">
      <!-- 1. 음경 크기 -->
      <div class="filler-comparison__block">
        <div class="filler-comparison__section-head">
          <p class="filler-comparison__eyebrow">ZAII UROLOGY HOSPITAL</p>
          <h2 class="filler-comparison__title">음경의 크기</h2>
        </div>

        <div class="filler-comparison__notice">
          음경은 만 21세 정도에 발육이 완성되며, 일반적으로 발기 상태 기준으로 길이와 굵기를
          평가합니다.
        </div>

        <p class="filler-comparison__desc">
          개인차는 있지만, 국내 남성의 일반적인 평균 범위를 참고하면 현재 상태를 보다 객관적으로
          이해하는 데 도움이 됩니다.
        </p>

        <div class="size-cards">
          <article class="size-card">
            <div class="size-card__state">이완상태</div>
            <div class="size-card__grid">
              <div class="size-card__item">
                <span class="size-card__label">길이</span>
                <strong class="size-card__value">7.4cm</strong>
              </div>
              <div class="size-card__item">
                <span class="size-card__label">직경</span>
                <strong class="size-card__value">2.8cm</strong>
              </div>
              <div class="size-card__item">
                <span class="size-card__label">둘레</span>
                <strong class="size-card__value">8.3cm</strong>
              </div>
              <div class="size-card__item">
                <span class="size-card__label">용적</span>
                <strong class="size-card__value">40.6ml</strong>
              </div>
            </div>
          </article>

          <article class="size-card is-highlight">
            <div class="size-card__state">발기상태</div>
            <div class="size-card__grid">
              <div class="size-card__item">
                <span class="size-card__label">길이</span>
                <strong class="size-card__value">11.2cm</strong>
              </div>
              <div class="size-card__item">
                <span class="size-card__label">직경</span>
                <strong class="size-card__value">4.1cm</strong>
              </div>
              <div class="size-card__item">
                <span class="size-card__label">둘레</span>
                <strong class="size-card__value">11cm</strong>
              </div>
              <div class="size-card__item">
                <span class="size-card__label">용적</span>
                <strong class="size-card__value">140.6ml</strong>
              </div>
            </div>
          </article>
        </div>
      </div>

      <!-- 2. 매트릭스 필러 -->
      <div class="filler-comparison__block">
        <div class="filler-comparison__section-head">
          <p class="filler-comparison__eyebrow">MATRIX FILLER</p>
          <h2 class="filler-comparison__title">매트릭스 필러</h2>
        </div>

        <p class="filler-comparison__desc">
          매트릭스 필러는 단순히 볼륨만 채우는 방식이 아니라, 유지력과 단단함, 시술 편의성까지 함께
          고려한 방식입니다. 자이의 필러 음경확대는 확대 효과뿐 아니라 만족도와 회복 부담까지 함께
          살피는 방향으로 설계되어 있습니다.
        </p>

        <div class="matrix-feature-grid">
          <article v-for="feature in matrixFeatures" :key="feature.no" class="matrix-feature-card">
            <div class="matrix-feature-card__no">
              {{ feature.no }}
            </div>
            <p class="matrix-feature-card__text">
              {{ feature.text }}
            </p>
          </article>
        </div>
      </div>

      <!-- 3. 타 시술 비교 -->
      <div class="filler-comparison__block">
        <div class="filler-comparison__section-head">
          <p class="filler-comparison__eyebrow">COMPARE</p>
          <h2 class="filler-comparison__title">타 시술 방법 VS 매트릭스 필러</h2>
        </div>

        <p class="filler-comparison__desc">
          유지기간, 회복, 단단함, 일상 복귀 시점 등 실제로 많이 비교하는 기준으로 정리했습니다. 같은
          확대 시술이라도 결과와 회복 부담에는 차이가 있기 때문에, 자신에게 맞는 방식을 선택하는
          것이 중요합니다.
        </p>

        <div class="compare-grid">
          <article
            v-for="item in compareCards"
            :key="item.title"
            class="compare-card"
            :class="{ 'is-primary': item.primary }"
          >
            <div class="compare-card__top">
              <h3 class="compare-card__title">{{ item.title }}</h3>
              <p v-if="item.badge" class="compare-card__badge">{{ item.badge }}</p>
            </div>

            <div class="compare-card__body">
              <div class="compare-card__row" v-for="row in item.rows" :key="row.label">
                <span class="compare-card__label">{{ row.label }}</span>
                <span class="compare-card__value">{{ row.value }}</span>
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const matrixFeatures = [
  { no: '01', text: '기존 필러보다 큰 입자로 볼륨 유지력이 우수합니다.' },
  { no: '02', text: '수분 성분이 적어 단단한 지지력을 형성하는 데 도움이 됩니다.' },
  { no: '03', text: '확대와 함께 조루 완화까지 동시에 기대할 수 있는 시술입니다.' },
  { no: '04', text: '간단한 주사 시술로 약 5분 내외에 끝나며 바로 일상생활이 가능합니다.' },
  { no: '05', text: '메스를 사용하지 않아 흉터 부담이 적습니다.' },
  { no: '06', text: '합리적인 비용으로 오래 유지되는 확대 효과와 단단함을 기대할 수 있습니다.' },
  { no: '07', text: '오랜 경험과 꾸준한 연구를 바탕으로 진행되는 자이의 시술 방식입니다.' },
  { no: '08', text: '입자 사이 공간을 통해 세포 재생을 유도하는 방향으로 설계되었습니다.' },
  { no: '09', text: '필러 성분이 흡수된 이후에도 조직 적응과 볼륨 유지에 도움을 줄 수 있습니다.' },
  {
    no: '10',
    text: '과거 지방이식이나 다른 확대 시술 후 만족도가 낮았던 경우에도 고려할 수 있습니다.'
  },
  {
    no: '11',
    text: '히알루론산 성분 기반으로 인체 조직과의 적응성이 높고 거부반응 부담이 적습니다.'
  }
]

const compareCards = [
  {
    title: '매트릭스 필러',
    badge: '추천 시술',
    primary: true,
    rows: [
      { label: '유지기간', value: '5년 이상' },
      { label: '소요시간', value: '약 5분' },
      { label: '성생활 가능', value: '3주 후' },
      { label: '단단함', value: '강' },
      { label: '마취방법', value: '국소마취' },
      { label: '일상생활', value: '시술 후 바로' },
      { label: '특징', value: '조루증 완화 주사시술' },
      { label: '부작용', value: '거의 없음 · 인체에 자연스럽게 유착' }
    ]
  },
  {
    title: '일반 필러',
    badge: '',
    primary: false,
    rows: [
      { label: '유지기간', value: '6개월~8개월' },
      { label: '소요시간', value: '약 5분' },
      { label: '성생활 가능', value: '3주 후' },
      { label: '단단함', value: '중' },
      { label: '마취방법', value: '국소마취' },
      { label: '일상생활', value: '시술 후 바로' },
      { label: '특징', value: '주사시술' },
      { label: '부작용', value: '비교적 짧은 유지기간 · 필러 입자에 의한 이물감 가능' }
    ]
  },
  {
    title: '보형물(실리콘)',
    badge: '',
    primary: false,
    rows: [
      { label: '유지기간', value: '영구적 (기간 경과 후 제거·재수술 가능성)' },
      { label: '소요시간', value: '약 1시간' },
      { label: '성생활 가능', value: '1~2개월 후' },
      { label: '단단함', value: '강' },
      { label: '마취방법', value: '국소마취' },
      { label: '일상생활', value: '2~3일 휴식 필요' },
      { label: '특징', value: '삽입량 한계 · 메스 사용 수술' },
      { label: '부작용', value: '보형물 이물감 · 조직 손상 가능성' }
    ]
  },
  {
    title: '지방이식',
    badge: '',
    primary: false,
    rows: [
      { label: '유지기간', value: '약 1년' },
      { label: '소요시간', value: '약 1시간' },
      { label: '성생활 가능', value: '1~2개월 후' },
      { label: '단단함', value: '약' },
      { label: '마취방법', value: '국소마취' },
      { label: '일상생활', value: '2~3일 휴식 필요' },
      { label: '특징', value: '메스 사용 수술 · 다른 부위 지방 채취 필요' },
      { label: '부작용', value: '짧은 유지기간' }
    ]
  }
]
</script>

<style scoped lang="scss">
.filler-comparison {
  background: #f6f8fb;
  padding: 100px 0;
}

.filler-comparison__block + .filler-comparison__block {
  margin-top: 100px;
}

.filler-comparison__section-head {
  margin-bottom: 24px;
}

.filler-comparison__eyebrow {
  margin: 0 0 10px;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.24em;
  color: #8c98ab;
  text-transform: uppercase;
}

.filler-comparison__title {
  margin: 0;
  font-size: 48px;
  line-height: 1.18;
  font-weight: 800;
  letter-spacing: -0.03em;
  color: #111827;
  word-break: keep-all;
}

.filler-comparison__notice {
  display: inline-flex;
  align-items: center;
  min-height: 62px;
  padding: 0 32px;
  border-radius: 999px;
  background: linear-gradient(90deg, #6ec8c1 0%, #5bb7b4 100%);
  color: #ffffff;
  font-size: 28px;
  font-weight: 700;
  line-height: 1.2;
  word-break: keep-all;
}

.filler-comparison__desc {
  max-width: 980px;
  margin: 28px 0 0;
  font-size: 20px;
  line-height: 1.8;
  color: #555f6d;
  word-break: keep-all;
}

/* size cards */
.size-cards {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 24px;
  margin-top: 36px;
}

.size-card {
  padding: 28px;
  border-radius: 26px;
  background: #ffffff;
  border: 1px solid #d9e0ea;
  box-shadow: 0 16px 36px rgba(18, 32, 61, 0.06);
}

.size-card.is-highlight {
  border-color: #9fc6f5;
  box-shadow: 0 18px 40px rgba(49, 110, 207, 0.12);
}

.size-card__state {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 128px;
  height: 42px;
  padding: 0 18px;
  border-radius: 999px;
  background: #5da2de;
  color: #ffffff;
  font-size: 18px;
  font-weight: 700;
}

.size-card.is-highlight .size-card__state {
  background: #4f7ed8;
}

.size-card__grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 16px;
  margin-top: 22px;
}

.size-card__item {
  padding: 18px 18px 16px;
  border-radius: 18px;
  background: #f7f9fc;
  border: 1px solid #e5eaf1;
}

.size-card__label {
  display: block;
  font-size: 14px;
  font-weight: 700;
  color: #7a8797;
}

.size-card__value {
  display: block;
  margin-top: 8px;
  font-size: 32px;
  line-height: 1.2;
  font-weight: 800;
  color: #19212d;
}

/* matrix features */
.matrix-feature-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 18px 20px;
  margin-top: 34px;
}

.matrix-feature-card {
  display: flex;
  gap: 16px;
  align-items: flex-start;
  min-height: 112px;
  padding: 20px 22px;
  border-radius: 22px;
  background: #ffffff;
  border: 1px solid #dde5ef;
  box-shadow: 0 12px 28px rgba(17, 34, 68, 0.05);
}

.matrix-feature-card__no {
  flex: 0 0 auto;
  width: 54px;
  height: 54px;
  border-radius: 16px;
  background: linear-gradient(180deg, #6f9de7 0%, #5c84dd 100%);
  color: #ffffff;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  font-weight: 800;
  line-height: 1;
}

.matrix-feature-card__text {
  margin: 2px 0 0;
  font-size: 18px;
  line-height: 1.7;
  font-weight: 500;
  color: #45505f;
  word-break: keep-all;
}

/* compare cards */
.compare-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 24px;
  margin-top: 34px;
}

.compare-card {
  display: flex;
  flex-direction: column;
  border-radius: 28px;
  background: #ffffff;
  border: 1px solid #dfe5ed;
  box-shadow: 0 18px 40px rgba(15, 28, 52, 0.06);
  overflow: hidden;
}

.compare-card.is-primary {
  border-color: #7fb4f0;
  box-shadow: 0 24px 48px rgba(59, 120, 214, 0.14);
}

.compare-card__top {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 26px 26px 20px;
  background: #68717e;
  color: #ffffff;
}

.compare-card.is-primary .compare-card__top {
  background: linear-gradient(135deg, #67aee9 0%, #588de0 100%);
}

.compare-card__title {
  margin: 0;
  font-size: 34px;
  line-height: 1.2;
  font-weight: 800;
  letter-spacing: -0.02em;
  word-break: keep-all;
}

.compare-card__badge {
  display: inline-flex;
  align-items: center;
  justify-content: center;

  color: #ffd54f;
  min-height: 34px;
  padding: 0 14px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.22);
  font-size: 14px;
  font-weight: 700;
}

.compare-card__body {
  padding: 10px 22px 20px;
}

.compare-card__row {
  display: grid;
  grid-template-columns: 112px minmax(0, 1fr);
  gap: 14px;
  padding: 14px 6px;
  border-bottom: 1px solid #edf1f5;
}

.compare-card__row:last-child {
  border-bottom: 0;
}

.compare-card__label {
  font-size: 15px;
  font-weight: 800;
  color: #6b7684;
}

.compare-card__value {
  font-size: 17px;
  line-height: 1.6;
  font-weight: 700;
  color: #1f2937;
  word-break: keep-all;
}

/* responsive */
@include desktop-down {
  .filler-comparison {
    padding: 84px 0;
  }

  .filler-comparison__block + .filler-comparison__block {
    margin-top: 84px;
  }

  .filler-comparison__title {
    font-size: 40px;
  }

  .filler-comparison__notice {
    min-height: 56px;
    padding: 0 26px;
    font-size: 24px;
  }

  .filler-comparison__desc {
    font-size: 18px;
  }

  .size-card__value {
    font-size: 28px;
  }

  .matrix-feature-card__text {
    font-size: 17px;
  }

  .compare-card__title {
    font-size: 30px;
  }
}

@include laptop-down {
  .filler-comparison {
    padding: 72px 0;
  }

  .filler-comparison__block + .filler-comparison__block {
    margin-top: 72px;
  }

  .filler-comparison__title {
    font-size: 34px;
  }

  .filler-comparison__notice {
    min-height: 50px;
    padding: 0 20px;
    font-size: 20px;
  }

  .filler-comparison__desc {
    margin-top: 22px;
    font-size: 16px;
  }

  .size-cards {
    grid-template-columns: 1fr;
    gap: 18px;
  }

  .matrix-feature-grid {
    grid-template-columns: 1fr;
  }

  .compare-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 18px;
  }

  .compare-card__top {
    padding: 22px 20px 18px;
  }

  .compare-card__title {
    font-size: 26px;
  }

  .compare-card__body {
    padding: 8px 16px 16px;
  }

  .compare-card__row {
    grid-template-columns: 92px minmax(0, 1fr);
    gap: 12px;
    padding: 12px 4px;
  }

  .compare-card__label {
    font-size: 14px;
  }

  .compare-card__value {
    font-size: 15px;
  }
}

@include mobile {
  .filler-comparison {
    padding: 52px 0;
  }

  .filler-comparison__block + .filler-comparison__block {
    margin-top: 56px;
  }

  .filler-comparison__eyebrow {
    font-size: 10px;
    letter-spacing: 0.22em;
  }

  .filler-comparison__title {
    font-size: 28px;
    line-height: 1.25;
  }

  .filler-comparison__notice {
    display: flex;
    min-height: 44px;
    padding: 12px 18px;
    font-size: 16px;
    line-height: 1.45;
    border-radius: 22px;
  }

  .filler-comparison__desc {
    margin-top: 18px;
    font-size: 14px;
    line-height: 1.75;
  }

  .size-card {
    padding: 18px;
    border-radius: 20px;
  }

  .size-card__state {
    min-width: 104px;
    height: 36px;
    padding: 0 14px;
    font-size: 15px;
  }

  .size-card__grid {
    gap: 12px;
    margin-top: 16px;
  }

  .size-card__item {
    padding: 14px;
    border-radius: 14px;
  }

  .size-card__label {
    font-size: 12px;
  }

  .size-card__value {
    margin-top: 6px;
    font-size: 24px;
  }

  .matrix-feature-grid {
    gap: 14px;
    margin-top: 24px;
  }

  .matrix-feature-card {
    min-height: auto;
    padding: 16px;
    border-radius: 18px;
    gap: 12px;
  }

  .matrix-feature-card__no {
    width: 42px;
    height: 42px;
    border-radius: 12px;
    font-size: 18px;
  }

  .matrix-feature-card__text {
    font-size: 14px;
    line-height: 1.65;
  }

  .compare-grid {
    grid-template-columns: 1fr;
    gap: 16px;
    margin-top: 24px;
  }

  .compare-card {
    border-radius: 22px;
  }

  .compare-card__top {
    padding: 18px 16px 14px;
  }

  .compare-card__title {
    font-size: 22px;
  }

  .compare-card__badge {
    min-height: 30px;
    padding: 0 12px;
    font-size: 12px;
  }

  .compare-card__body {
    padding: 6px 14px 12px;
  }

  .compare-card__row {
    grid-template-columns: 82px minmax(0, 1fr);
    gap: 10px;
    padding: 11px 2px;
  }

  .compare-card__label {
    font-size: 13px;
  }

  .compare-card__value {
    font-size: 14px;
    line-height: 1.55;
  }
}
</style>
