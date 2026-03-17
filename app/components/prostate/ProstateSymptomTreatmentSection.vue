<template>
  <section id="prostate-symptom-treatment" class="prostate-symptom-treatment section">
    <div class="container">
      <div class="prostate-symptom-treatment__head">
        <h2 class="prostate-symptom-treatment__title">전립선비대증 증상과 치료</h2>
      </div>

      <div class="prostate-symptom-treatment__intro">
        <p class="prostate-symptom-treatment__lead">
          중년이후 남성에게 가장 흔하게 발생하는 전립선비대증
        </p>

        <div class="prostate-symptom-treatment__text">
          <p>
            전립선비대증은 나이가 증가함에 따라 빈도가 증가합니다.<br />
            MRI 검사를 했을 때 연령이 증가함에 따라 전립선의 크기도 증가하고 있음을 알 수 있습니다.
          </p>

          <p>
            전립선비대증에 의한 야간뇨, 잔뇨감, 요절박, 소변주저 등의 배뇨 기능장애는 노인
            연령층에서 삶의 질을 저해하는 중요한 건강 문제로 대두됩니다.
          </p>

          <p>
            미국의 경우 매년 390만명이 전립선비대증으로 비뇨기과를 방문하고,<br />
            1년에 37만명이 입원하여 그중 30%의 환자가 수술적 치료를 받는다고 합니다.
          </p>
        </div>
      </div>

      <div class="prostate-symptom-treatment__study">
        <div class="prostate-symptom-treatment__study-head">
          <div class="prostate-symptom-treatment__study-line" />
          <div class="prostate-symptom-treatment__study-label">미국 비뇨기과 학회 발표자료</div>
          <div class="prostate-symptom-treatment__study-line" />
        </div>

        <div class="prostate-symptom-treatment__study-chart">
          <img
            src="/images/urolift/urolift-section-02-01.png"
            alt="미국 비뇨기과 학회 발표자료 그래프"
          />
        </div>

        <div class="prostate-symptom-treatment__study-bottom">
          <img
            src="/images/urolift/urolift-section-02-02.png"
            alt="전립선비대증 치료 관련 비교 자료"
          />
        </div>

        <p class="prostate-symptom-treatment__study-desc">
          2006년 지표를 보면 50대 이상의 남성이 겪는 질병 순위 4위가 전립선 비대증입니다.<br />
          우리나라의 경우 50대 이상의 남성의 50%, 60대에는 60%, 70세 이상 부터는<br />
          대부분이 가지고 있는 질환으로 후유증을 생각한다면 치료가 필요 합니다.
        </p>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.prostate-symptom-treatment {
  background: #efeff1;
  padding: 100px 0;
}

.prostate-symptom-treatment__head {
  text-align: center;
  margin-bottom: 56px;
}

.prostate-symptom-treatment__title {
  margin: 0;
  font-size: 64px;
  line-height: 1.15;
  font-weight: 800;
  letter-spacing: -0.04em;
  color: #111827;
  word-break: keep-all;
}

.prostate-symptom-treatment__intro {
  text-align: center;
}

.prostate-symptom-treatment__lead {
  margin: 0 0 34px;
  font-size: 34px;
  line-height: 1.45;
  font-weight: 800;
  color: #61a9ea;
  word-break: keep-all;
}

.prostate-symptom-treatment__text {
  max-width: 1380px;
  margin: 0 auto;
  color: #6a6a70;

  p {
    margin: 0;
    font-size: 27px;
    line-height: 1.7;
    font-weight: 500;
    letter-spacing: -0.025em;
    word-break: keep-all;
  }

  p + p {
    margin-top: 52px;
  }
}

.prostate-symptom-treatment__study {
  margin-top: 88px;
}

.prostate-symptom-treatment__study-head {
  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: 34px;
}

.prostate-symptom-treatment__study-line {
  flex: 1;
  height: 1px;
  background: #bfc5cf;
}

.prostate-symptom-treatment__study-label {
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

.prostate-symptom-treatment__study-chart {
  display: flex;
  justify-content: center;
  margin-bottom: 34px;

  img {
    display: block;
    width: 100%;
    max-width: 1280px;
    height: auto;
    border: 2px solid rgba(0, 0, 0, 0.18);
    background: #fff;
  }
}

.prostate-symptom-treatment__study-bottom {
  display: flex;
  justify-content: center;

  img {
    display: block;
    width: 100%;
    max-width: 1280px;
    height: auto;
    border: 2px solid rgba(0, 0, 0, 0.18);
    background: #fff;
  }
}

.prostate-symptom-treatment__study-desc {
  margin: 36px 0 0;
  text-align: center;
  font-size: 22px;
  line-height: 1.75;
  font-weight: 500;
  color: #5f6066;
  word-break: keep-all;
}

/* desktop-down */
@include desktop-down {
  .prostate-symptom-treatment {
    padding: 84px 0;
  }

  .prostate-symptom-treatment__head {
    margin-bottom: 44px;
  }

  .prostate-symptom-treatment__title {
    font-size: 52px;
  }

  .prostate-symptom-treatment__lead {
    margin-bottom: 26px;
    font-size: 28px;
  }

  .prostate-symptom-treatment__text {
    p {
      font-size: 22px;
    }

    p + p {
      margin-top: 38px;
    }
  }

  .prostate-symptom-treatment__study {
    margin-top: 68px;
  }

  .prostate-symptom-treatment__study-label {
    min-width: 420px;
    font-size: 22px;
  }

  .prostate-symptom-treatment__study-desc {
    font-size: 19px;
  }
}

/* laptop-down */
@include laptop-down {
  .prostate-symptom-treatment {
    padding: 72px 0;
  }

  .prostate-symptom-treatment__head {
    margin-bottom: 34px;
  }

  .prostate-symptom-treatment__title {
    font-size: 38px;
  }

  .prostate-symptom-treatment__lead {
    margin-bottom: 22px;
    font-size: 22px;
    line-height: 1.5;
  }

  .prostate-symptom-treatment__text {
    p {
      font-size: 17px;
      line-height: 1.75;
    }

    p + p {
      margin-top: 28px;
    }
  }

  .prostate-symptom-treatment__study {
    margin-top: 52px;
  }

  .prostate-symptom-treatment__study-head {
    gap: 14px;
    margin-bottom: 24px;
  }

  .prostate-symptom-treatment__study-label {
    min-width: 280px;
    padding: 12px 18px;
    border-width: 4px;
    font-size: 18px;
  }

  .prostate-symptom-treatment__study-chart {
    margin-bottom: 24px;
  }

  .prostate-symptom-treatment__study-desc {
    margin-top: 24px;
    font-size: 16px;
    line-height: 1.7;
  }
}

/* mobile */
@include mobile {
  .prostate-symptom-treatment {
    padding: 52px 0;
  }

  .prostate-symptom-treatment__head {
    margin-bottom: 24px;
  }

  .prostate-symptom-treatment__title {
    font-size: 30px;
    line-height: 1.25;
  }

  .prostate-symptom-treatment__lead {
    margin-bottom: 18px;
    font-size: 18px;
    line-height: 1.55;
  }

  .prostate-symptom-treatment__text {
    p {
      font-size: 14px;
      line-height: 1.75;

      br {
        display: none;
      }
    }

    p + p {
      margin-top: 20px;
    }
  }

  .prostate-symptom-treatment__study {
    margin-top: 40px;
  }

  .prostate-symptom-treatment__study-head {
    gap: 10px;
    margin-bottom: 18px;
  }

  .prostate-symptom-treatment__study-label {
    min-width: 0;
    width: auto;
    padding: 10px 14px;
    border-width: 3px;
    font-size: 14px;
  }

  .prostate-symptom-treatment__study-chart {
    margin-bottom: 18px;

    img {
      border-width: 1px;
    }
  }

  .prostate-symptom-treatment__study-bottom {
    img {
      border-width: 1px;
    }
  }

  .prostate-symptom-treatment__study-desc {
    margin-top: 18px;
    font-size: 13px;
    line-height: 1.7;

    br {
      display: none;
    }
  }
}
</style>
