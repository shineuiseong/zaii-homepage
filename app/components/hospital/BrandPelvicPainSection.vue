<template>
  <section class="brand-pelvic section">
    <div class="container">
      <div class="brand-pelvic__head">
        <h2 class="brand-pelvic__title">#2 만성골반통증 &amp; 전립선염</h2>
        <p class="brand-pelvic__desc">
          난치성 만성골반통증/전립선염 클리닉은 일반적인 약물 치료(항생제+진통제)나 대증요법으로
          효과를 보지 못하고 점점 심해져 일상생활이 곤란한 지경의 환자를 대상으로 합니다.
        </p>
      </div>

      <div class="brand-pelvic__body">
        <div class="brand-pelvic__image">
          <img src="/images/brand/brand-story-patient.png" alt="만성골반통증 및 전립선염" />
        </div>

        <div class="brand-pelvic__content">
          <div class="brand-pelvic__alert">!</div>

          <p>
            이런 환자의 경우 대개 주치의에게 치료될 수 없는 병이니 증상이 심해질 경우에 일정기간
            약물치료로 증상 완화하면서 지낼 수 밖에 없다는 말을 흔히 들으며, 심한 경우 신경정신과
            치료를 권유받아 정신과약을 복용하는 경우도 적지 않습니다.
          </p>

          <p>
            본 병원은 2007년부터 상기 질환에 대한 1만례 이상의 다양한 임상경험을 축적하고 다양한
            치료방법을 이용한 다중치료방법을 도입하여
            <strong>난치성 전립선질환 환자에게 치료 효과를 얻고 있습니다.</strong>
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.brand-pelvic {
  background: #f7fbff;
}

.brand-pelvic__head {
  max-width: 1120px;
  margin-bottom: 30px;
}

.brand-pelvic__title {
  margin: 0;
  font-size: 44px;
  line-height: 1.3;
  font-weight: 800;
  color: $color-primary;
  word-break: keep-all;
}

.brand-pelvic__desc {
  margin: 18px 0 0;
  font-size: 18px;
  line-height: 1.9;
  color: $text-sub;
  word-break: keep-all;
}

.brand-pelvic__body {
  display: grid;
  grid-template-columns: 1.05fr 1fr;
  gap: 38px;
  align-items: center;
}

.brand-pelvic__image {
  img {
    display: block;
    width: 100%;
    height: auto;
    object-fit: cover;
  }
}

.brand-pelvic__content {
  color: $text-sub;

  p {
    margin: 0;
    font-size: 18px;
    line-height: 1.95;
    word-break: keep-all;
  }

  p + p {
    margin-top: 26px;
  }

  strong {
    color: $text-main;
    font-weight: 800;
  }
}

.brand-pelvic__alert {
  width: 54px;
  height: 54px;
  margin-bottom: 20px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: #111;
  color: #fff;
  font-size: 28px;
  font-weight: 800;
}

@include laptop-down {
  .brand-pelvic__title {
    font-size: 34px;
  }

  .brand-pelvic__desc,
  .brand-pelvic__content p {
    font-size: 16px;
  }

  .brand-pelvic__body {
    grid-template-columns: 1fr;
  }
}

@include mobile {
  .brand-pelvic__title {
    font-size: 26px;
  }

  .brand-pelvic__desc,
  .brand-pelvic__content p {
    font-size: 15px;
    line-height: 1.75;
  }

  .brand-pelvic__alert {
    width: 44px;
    height: 44px;
    margin-bottom: 16px;
    font-size: 22px;
  }
}
</style>
