<template>
  <section id="urolift-intro" class="urolift-intro section">
    <div class="urolift-intro__top">
      <div class="urolift-intro__top-bg">
        <img src="/images/urolift/urolift-bg.png" alt="유로리프트 소개 배경" />
      </div>

      <div class="urolift-intro__top-overlay" />

      <div class="container urolift-intro__top-content">
        <div class="urolift-intro__lead">
          <p class="urolift-intro__lead-strong">
            중년이후 남성에서 발생하는 가장 흔한 질환중 하나인 전립선비대증은 <br />점차적으로 그
            환자군이 증가하고 있습니다.
          </p>

          <p class="urolift-intro__lead-text">
            그래서 전립선비대증에 의한 야간뇨, 잔뇨감, 요절박등의 배뇨 기능장애는<br />
            노인 연령층에서 삶의 질을 저해하는 중요한 건강 문제로 대두되고 있습니다.
          </p>
        </div>

        <div class="urolift-intro__message">
          <p>하지만 이런 전립선비대증에 대해서 이제는 고민을 하지 않아도 됩니다.</p>
          <p class="is-accent">
            유로리프트라는 새로운 치료법으로 짧은 시간에 간단하게 해결이 가능하게 되었습니다.
          </p>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="urolift-intro__card">
        <div class="urolift-intro__head">
          <p class="urolift-intro__eyebrow">ZAII UROLOGY HOSPITAL</p>
          <h2 class="urolift-intro__title">유로리프트</h2>
        </div>

        <div class="urolift-intro__body">
          <div class="urolift-intro__image">
            <img
              src="/images/urolift/urolift-section-01-01.png"
              alt="전립선비대증 구조 설명 이미지"
            />
          </div>

          <div class="urolift-intro__text">
            <p class="urolift-intro__text-lead">
              전립선비대증을 간단한 국소마취 후 비대해진 전립선을 결찰사 이식을 통해 영구적으로
              묶어줌으로써 요도를 넓혀 요도폐색을 치료해주는 최소 침습적 시술을 말합니다.
            </p>

            <p>다른 말로 전립선 결찰술이라고도 불립니다.</p>

            <p>
              전립선을 절단, 가열, 제거하지 않고 비대해진 전립선 조직을 묶어 요도 폐색을 치료하는
              원리입니다. 특수 임플란트를 이용해 비대해진 전립선 조직을 결찰(묶어줌)하여 좁아진
              요도를 확장시켜 소변길을 넓혀주는 시술법으로 국소마취로 진행이 됩니다.
            </p>
          </div>
        </div>

        <div class="urolift-intro__bottom">
          <div class="urolift-intro__bottom-text">
            국소마취 후 방광내시경으로 비대해진 전립선 조직을 잡아당기는 해당 시술은 이식형 결찰사로
            비대해진 전립선 조직을 벌려준 후 리프트 기법으로 좁아진 요도를 확장하는 것이 핵심입니다.
          </div>

          <div class="urolift-intro__circle">
            <img
              src="/images/urolift/urolift-section-01-02.png"
              alt="유로리프트 전립선 구조 설명 이미지"
            />
          </div>
        </div>
      </div>
    </div>

    <!-- 추가: 미국 비뇨기과 학회 발표자료 -->
    <div class="container">
      <div class="urolift-intro__study">
        <div class="urolift-intro__study-head">
          <div class="urolift-intro__study-line" />
          <div class="urolift-intro__study-label">미국 비뇨기과 학회 발표자료</div>
          <div class="urolift-intro__study-line" />
        </div>

        <div class="urolift-intro__study-top">
          <div class="urolift-intro__study-chart">
            <img
              src="/images/urolift/urolift-section-01-03.png"
              alt="미국 비뇨기과 학회 발표자료 도표"
            />
          </div>

          <div class="urolift-intro__study-summary">
            <div class="urolift-intro__study-summary-box">
              <p>일반적인 전립선 환자군에서</p>
              <p>
                <strong>37%</strong>는 현재의 상태를 그냥 관찰하며<br />
                <strong>60%</strong>는 약을 복용합니다.<br />
                그리고 <strong>3%</strong>가 수술을 통하여 해결을 합니다.
              </p>

              <div class="urolift-intro__study-callout">
                <span class="urolift-intro__study-arrow">←</span>
                <span>약을 복용하는 남성중<br />매년 23%는 다양한 이유로 약을 끊습니다.</span>
              </div>
            </div>
          </div>
        </div>

        <div class="urolift-intro__study-bottom">
          <img
            src="/images/urolift/urolift-section-01-04.png"
            alt="유로리프트 위치 및 치료 단계 설명"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.urolift-intro {
  background: #efeff1;
  padding-top: 0;
}

.urolift-intro__top {
  position: relative;
  min-height: 470px;
  overflow: hidden;
}

.urolift-intro__top-bg {
  position: absolute;
  inset: 0;

  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}

.urolift-intro__top-overlay {
  position: absolute;
  inset: 0;
  background:
    linear-gradient(180deg, rgba(29, 34, 56, 0.42) 0%, rgba(29, 34, 56, 0.48) 100%),
    linear-gradient(90deg, rgba(24, 31, 48, 0.2) 0%, rgba(24, 31, 48, 0.3) 100%);
}

.urolift-intro__top-content {
  position: relative;
  z-index: 1;
  padding-top: 74px;
  padding-bottom: 96px;
  color: #fff;
  text-align: center;
}

.urolift-intro__lead {
  max-width: 980px;
  margin: 0 auto;
}

.urolift-intro__lead-strong {
  margin: 0;
  font-size: 21px;
  line-height: 1.6;
  font-weight: 800;
  color: #e7d17b;
  word-break: keep-all;
}

.urolift-intro__lead-text {
  margin: 28px 0 0;
  font-size: 18px;
  line-height: 1.65;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.96);
  word-break: keep-all;
}

.urolift-intro__message {
  max-width: 1100px;
  margin: 42px auto 0;
  padding: 28px 40px;
  border: 1px solid rgba(255, 255, 255, 0.34);
  background: rgba(26, 28, 40, 0.34);
  backdrop-filter: blur(3px);

  p {
    margin: 0;
    font-size: 21px;
    line-height: 1.6;
    font-weight: 700;
    color: #ffffff;
    word-break: keep-all;
  }

  p + p {
    margin-top: 8px;
  }

  .is-accent {
    color: #e7c768;
  }
}

.urolift-intro__card {
  position: relative;
  margin-top: -66px;
  background: #ffffff;
  box-shadow: 0 18px 50px rgba(21, 29, 47, 0.08);
}

.urolift-intro__head {
  padding: 54px 40px 34px;
  text-align: center;
}

.urolift-intro__eyebrow {
  margin: 0 0 10px;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.28em;
  color: #7d7d84;
}

.urolift-intro__title {
  margin: 0;
  font-size: 54px;
  line-height: 1.1;
  font-weight: 800;
  color: #111111;
}

.urolift-intro__body {
  display: grid;
  grid-template-columns: minmax(280px, 420px) minmax(0, 1fr);
  gap: 56px;
  align-items: center;
  padding: 0 58px 56px;
}

.urolift-intro__image {
  img {
    display: block;
    width: 100%;
    height: auto;
  }
}

.urolift-intro__text {
  color: #4b4b51;

  p {
    margin: 0;
    font-size: 22px;
    line-height: 1.72;
    font-weight: 500;
    letter-spacing: -0.025em;
    word-break: keep-all;
  }

  p + p {
    margin-top: 24px;
  }
}

.urolift-intro__text-lead {
  font-size: 25px !important;
  line-height: 1.6 !important;
  font-weight: 700 !important;
  color: #44444a;
}

.urolift-intro__bottom {
  display: grid;
  grid-template-columns: minmax(0, 1fr) 300px;
  gap: 30px;
  align-items: center;
  padding: 42px 58px;
  background: #9ca0bc;
}

.urolift-intro__bottom-text {
  font-size: 22px;
  line-height: 1.72;
  font-weight: 500;
  color: #ffffff;
  letter-spacing: -0.025em;
  word-break: keep-all;
}

.urolift-intro__circle {
  width: 250px;
  height: 250px;
  justify-self: end;
  border-radius: 50%;
  overflow: hidden;
  background: #ffffff;
  border: 10px solid rgba(255, 255, 255, 0.82);
  box-shadow: 0 10px 30px rgba(36, 43, 72, 0.12);

  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}

/* 추가 섹션 */
.urolift-intro__study {
  padding: 74px 0 0;
}

.urolift-intro__study-head {
  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: 44px;
}

.urolift-intro__study-line {
  flex: 1;
  height: 1px;
  background: #bfc5cf;
}

.urolift-intro__study-label {
  flex: 0 0 auto;
  min-width: 520px;
  padding: 16px 28px;
  background: #7f8698;
  border: 6px solid #e3e4e8;
  text-align: center;
  font-size: 26px;
  font-weight: 700;
  color: #ffffff;
  line-height: 1.2;
}

.urolift-intro__study-top {
  display: grid;
  grid-template-columns: minmax(320px, 560px) minmax(0, 1fr);
  gap: 48px;
  align-items: center;
}

.urolift-intro__study-chart {
  img {
    display: block;
    width: 100%;
    height: auto;
  }
}

.urolift-intro__study-summary-box {
  padding: 58px 44px 40px;
  border: 6px solid #e0e0e0;
  background: #f6f6f7;
  text-align: center;

  p {
    margin: 0;
    font-size: 26px;
    line-height: 1.65;
    font-weight: 500;
    color: #555;
    word-break: keep-all;
  }

  p + p {
    margin-top: 10px;
  }

  strong {
    color: #ef6b66;
    font-weight: 800;
  }
}

.urolift-intro__study-callout {
  display: inline-flex;
  align-items: center;
  gap: 16px;
  margin-top: 34px;
  padding: 20px 30px;
  border-radius: 999px;
  background: #ef6766;
  color: #fff3c2;
  font-size: 22px;
  line-height: 1.45;
  font-weight: 800;
  text-align: left;
}

.urolift-intro__study-arrow {
  flex: 0 0 auto;
  font-size: 48px;
  line-height: 1;
  color: #ef6766;
  margin-left: -62px;
}

.urolift-intro__study-bottom {
  margin-top: 52px;
  padding-bottom: 10px;

  img {
    display: block;
    width: 100%;
    height: auto;
  }
}

@include desktop-down {
  .urolift-intro__top {
    min-height: 430px;
  }

  .urolift-intro__top-content {
    padding-top: 64px;
    padding-bottom: 88px;
  }

  .urolift-intro__lead-strong {
    font-size: 19px;
  }

  .urolift-intro__lead-text {
    font-size: 17px;
    margin-top: 24px;
  }

  .urolift-intro__message {
    margin-top: 34px;
    padding: 24px 28px;

    p {
      font-size: 19px;
    }
  }

  .urolift-intro__card {
    margin-top: -54px;
  }

  .urolift-intro__title {
    font-size: 46px;
  }

  .urolift-intro__body {
    gap: 40px;
    padding: 0 42px 46px;
  }

  .urolift-intro__text p {
    font-size: 19px;
  }

  .urolift-intro__text-lead {
    font-size: 22px !important;
  }

  .urolift-intro__bottom {
    grid-template-columns: minmax(0, 1fr) 240px;
    padding: 34px 42px;
  }

  .urolift-intro__bottom-text {
    font-size: 19px;
  }

  .urolift-intro__circle {
    width: 210px;
    height: 210px;
  }

  .urolift-intro__study-label {
    min-width: 420px;
    font-size: 22px;
  }

  .urolift-intro__study-top {
    gap: 32px;
  }

  .urolift-intro__study-summary-box {
    padding: 42px 30px 32px;

    p {
      font-size: 22px;
    }
  }

  .urolift-intro__study-callout {
    font-size: 18px;
    padding: 18px 24px;
  }

  .urolift-intro__study-arrow {
    margin-left: -42px;
    font-size: 40px;
  }
}

@include laptop-down {
  .urolift-intro__top {
    min-height: 400px;
  }

  .urolift-intro__top-content {
    padding-top: 54px;
    padding-bottom: 78px;
  }

  .urolift-intro__lead-strong {
    font-size: 17px;
  }

  .urolift-intro__lead-text {
    font-size: 15px;
    margin-top: 18px;
  }

  .urolift-intro__message {
    margin-top: 28px;
    padding: 20px 18px;

    p {
      font-size: 17px;
    }
  }

  .urolift-intro__card {
    margin-top: -42px;
  }

  .urolift-intro__head {
    padding: 42px 24px 28px;
  }

  .urolift-intro__title {
    font-size: 38px;
  }

  .urolift-intro__body {
    grid-template-columns: 1fr;
    gap: 28px;
    padding: 0 24px 36px;
  }

  .urolift-intro__image {
    max-width: 360px;
    margin: 0 auto;
  }

  .urolift-intro__text p {
    font-size: 17px;
  }

  .urolift-intro__text-lead {
    font-size: 19px !important;
  }

  .urolift-intro__bottom {
    grid-template-columns: 1fr;
    gap: 22px;
    padding: 28px 24px 32px;
    text-align: center;
  }

  .urolift-intro__bottom-text {
    font-size: 17px;
  }

  .urolift-intro__circle {
    width: 190px;
    height: 190px;
    justify-self: center;
  }

  .urolift-intro__study {
    padding-top: 56px;
  }

  .urolift-intro__study-head {
    gap: 14px;
    margin-bottom: 28px;
  }

  .urolift-intro__study-label {
    min-width: 280px;
    padding: 12px 18px;
    border-width: 4px;
    font-size: 18px;
  }

  .urolift-intro__study-top {
    grid-template-columns: 1fr;
    gap: 26px;
  }

  .urolift-intro__study-chart {
    max-width: 520px;
    margin: 0 auto;
  }

  .urolift-intro__study-summary-box {
    padding: 30px 20px 24px;

    p {
      font-size: 18px;
    }
  }

  .urolift-intro__study-callout {
    gap: 12px;
    margin-top: 24px;
    padding: 16px 18px;
    font-size: 16px;
  }

  .urolift-intro__study-arrow {
    display: none;
  }

  .urolift-intro__study-bottom {
    margin-top: 32px;
  }
}

@include mobile {
  .urolift-intro__top {
    min-height: 360px;
  }

  .urolift-intro__top-content {
    padding-top: 42px;
    padding-bottom: 64px;
  }

  .urolift-intro__lead-strong {
    font-size: 15px;
    line-height: 1.6;
  }

  .urolift-intro__lead-text {
    margin-top: 16px;
    font-size: 13px;
    line-height: 1.7;
  }

  .urolift-intro__message {
    margin-top: 22px;
    padding: 18px 14px;

    p {
      font-size: 14px;
      line-height: 1.6;
    }
  }

  .urolift-intro__card {
    margin-top: -32px;
  }

  .urolift-intro__head {
    padding: 34px 16px 22px;
  }

  .urolift-intro__eyebrow {
    font-size: 10px;
    letter-spacing: 0.22em;
  }

  .urolift-intro__title {
    font-size: 28px;
  }

  .urolift-intro__body {
    gap: 22px;
    padding: 0 16px 28px;
  }

  .urolift-intro__image {
    max-width: 280px;
  }

  .urolift-intro__text p {
    font-size: 14px;
    line-height: 1.75;
  }

  .urolift-intro__text p + p {
    margin-top: 16px;
  }

  .urolift-intro__text-lead {
    font-size: 16px !important;
    line-height: 1.65 !important;
  }

  .urolift-intro__bottom {
    gap: 16px;
    padding: 22px 16px 24px;
  }

  .urolift-intro__bottom-text {
    font-size: 14px;
    line-height: 1.7;
  }

  .urolift-intro__circle {
    width: 158px;
    height: 158px;
    border-width: 8px;
  }

  .urolift-intro__study {
    padding-top: 42px;
  }

  .urolift-intro__study-head {
    gap: 10px;
    margin-bottom: 22px;
  }

  .urolift-intro__study-label {
    min-width: 0;
    width: auto;
    padding: 10px 14px;
    border-width: 3px;
    font-size: 14px;
  }

  .urolift-intro__study-summary-box {
    padding: 22px 14px 18px;
    border-width: 4px;

    p {
      font-size: 14px;
      line-height: 1.7;
    }
  }

  .urolift-intro__study-callout {
    width: 100%;
    justify-content: center;
    margin-top: 18px;
    padding: 14px 16px;
    font-size: 14px;
    line-height: 1.55;
    text-align: center;
    border-radius: 24px;
  }

  .urolift-intro__study-bottom {
    margin-top: 24px;
  }
}
</style>
