<template>
  <section class="brand-intro section">
    <div class="container">
      <div class="brand-intro__head">
        <p class="brand-intro__eyebrow">BRAND STORY</p>
        <h2 class="brand-intro__title">
          자이비뇨의학과 병원은
          <br />
          다른 비뇨의학과와 달리 오직
          <br />
          전립선 질환만 중점 진료합니다
        </h2>

        <div class="brand-intro__divider" />

        <p class="brand-intro__desc">
          전립선암을 제외한 양성 전립선질환 분야에서는 오히려 대학병원보다 더 깊이 있고 효과적인
          치료를 받을 수 있습니다. 자이비뇨의학과병원은 약물 치료와 일반적인 수술만으로 충분한
          호전을 얻지 못한 환자들을 위해, 보다 세분화된 진료 경험과 임상 판단을 바탕으로 특수
          클리닉을 운영하고 있습니다.
        </p>
      </div>

      <div class="brand-intro__cards">
        <article class="brand-intro-card">
          <p class="brand-intro-card__label">#01</p>
          <h3 class="brand-intro-card__title">고위험군 시술 클리닉</h3>
          <p class="brand-intro-card__desc">
            고령, 심혈관 질환, 항응고제 복용 등 일반적인 수술 판단이 어려운 환자에 대한 맞춤 시술
            방향을 제안합니다.
          </p>
        </article>

        <article class="brand-intro-card">
          <p class="brand-intro-card__label">#02</p>
          <h3 class="brand-intro-card__title">만성골반통증 · 전립선염 클리닉</h3>
          <p class="brand-intro-card__desc">
            반복되는 통증과 불편으로 일상생활에 영향을 받는 환자를 위해 보다 다각적인 치료 방법을
            적용합니다.
          </p>
        </article>

        <article class="brand-intro-card">
          <p class="brand-intro-card__label">#03</p>
          <h3 class="brand-intro-card__title">전립선암 신속검사 협력체계</h3>
          <p class="brand-intro-card__desc">
            조직검사부터 결과 확인, 상급병원 연계까지 환자와 보호자의 시간을 줄이는 빠른 흐름을
            구축합니다.
          </p>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.brand-intro {
  background: #fff;
}

.brand-intro__head {
  max-width: 1080px;
}

.brand-intro__eyebrow {
  margin: 0 0 10px;
  font-size: 13px;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: $text-muted;
}

.brand-intro__title {
  margin: 0;
  font-size: 44px;
  line-height: 1.34;
  font-weight: 800;
  color: $text-main;
  word-break: keep-all;
}

.brand-intro__divider {
  width: 36px;
  height: 4px;
  margin: 24px 0 22px;
  background: $color-primary;
  border-radius: 999px;
}

.brand-intro__desc {
  max-width: 1080px;
  margin: 0;
  font-size: 18px;
  line-height: 1.9;
  color: $text-sub;
  word-break: keep-all;
}

.brand-intro__cards {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 22px;
  margin-top: 38px;
}

.brand-intro-card {
  padding: 26px 22px;
  border-radius: 22px;
  background: #f8fbff;
  border: 1px solid #e3edf8;
  box-shadow: 0 12px 28px rgba(15, 23, 42, 0.04);
}

.brand-intro-card__label {
  margin: 0 0 10px;
  font-size: 14px;
  font-weight: 800;
  color: $color-primary;
}

.brand-intro-card__title {
  margin: 0;
  font-size: 22px;
  line-height: 1.45;
  font-weight: 800;
  color: $text-main;
  word-break: keep-all;
}

.brand-intro-card__desc {
  margin: 10px 0 0;
  font-size: 15px;
  line-height: 1.75;
  color: $text-sub;
  word-break: keep-all;
}

@include laptop-down {
  .brand-intro__title {
    font-size: 36px;
  }

  .brand-intro__desc {
    font-size: 16px;
  }

  .brand-intro__cards {
    grid-template-columns: 1fr;
  }
}

@include mobile {
  .brand-intro__title {
    font-size: 28px;
  }

  .brand-intro__divider {
    margin: 18px 0 18px;
  }

  .brand-intro__desc {
    font-size: 15px;
    line-height: 1.75;
  }

  .brand-intro-card {
    padding: 20px 16px;
    border-radius: 18px;
  }

  .brand-intro-card__title {
    font-size: 18px;
  }

  .brand-intro-card__desc {
    font-size: 14px;
  }
}
</style>
