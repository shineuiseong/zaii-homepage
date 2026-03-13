<template>
  <section class="urolift-domestic section">
    <div class="container">
      <div class="urolift-domestic__head">
        <h2 class="urolift-domestic__title">
          <span>유로리프트,</span>
          <span>국내 도입하다</span>
        </h2>
        <div class="urolift-domestic__line" />
      </div>

      <div class="urolift-domestic__body">
        <p class="urolift-domestic__lead">
          국내에는 2015년에 한국 FDA(식약청) 인증과 함께 도입되어 대학병원 1곳, 의원급 3곳에서
          시작되었으나 경험부족과 술기를 제대로 알지 못하고 시술하여 모두 실패하고 철수하였다.
        </p>

        <p>
          2016년 인천나은병원 전립선센터장으로 취임한 변재상원장은 당년 5월 유로리프트를 도입, 국내
          처음으로 제대로 된 수술결과를 보고하며 단시간내에 200례를 달성 이후 국내에 유로리프트
          시술이 광범위하게 보급되는 계기를 마련하였다.
        </p>

        <p>
          2018년 국내 비뇨기과 의사로는 처음으로 유로리프트가 개발된 곳인 호주로 개발사인
          NeoTract(현 Teleflex)의 초청을 받아 학술연구 및 연수를 가게 되었다. 특히 초기 유로리프트
          개발자이며 세계최초로 환자를 대상으로 임상 시술을 시행한 Dr. Peter Chin을 비롯해 4곳의
          병원에서 연수 및 학술교류를 가져 유로리프트 시술과 술기의 질을 높이는 계기가 되었다.
        </p>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.urolift-domestic {
  background: #ffffff;
}

.urolift-domestic .container {
  padding-top: 120px;
  padding-bottom: 120px;
}

.urolift-domestic__head {
  display: flex;
  align-items: flex-end;
  gap: 28px;
  margin-bottom: 52px;
}

.urolift-domestic__title {
  flex: 0 0 auto;
  margin: 0;
  font-size: 78px;
  line-height: 0.95;
  font-weight: 700;
  letter-spacing: -0.04em;
  color: $color-primary;

  span {
    display: block;
  }
}

.urolift-domestic__line {
  flex: 1;
  min-width: 120px;
  height: 1px;
  margin-bottom: 14px;
  background: rgba(89, 174, 246, 0.8);
}

.urolift-domestic__body {
  max-width: 1300px;

  p {
    margin: 0;
    font-size: 28px;
    line-height: 1.82;
    font-weight: 500;
    letter-spacing: -0.025em;
    color: #555;
    word-break: keep-all;
  }

  p + p {
    margin-top: 34px;
  }
}

.urolift-domestic__lead {
  color: #383838 !important;
}

@include desktop-down {
  .urolift-domestic .container {
    padding-top: 96px;
    padding-bottom: 96px;
  }

  .urolift-domestic__head {
    gap: 24px;
    margin-bottom: 42px;
  }

  .urolift-domestic__title {
    font-size: 60px;
  }

  .urolift-domestic__line {
    margin-bottom: 10px;
  }

  .urolift-domestic__body {
    p {
      font-size: 22px;
      line-height: 1.75;
    }

    p + p {
      margin-top: 28px;
    }
  }
}

@include laptop-down {
  .urolift-domestic .container {
    padding-top: 72px;
    padding-bottom: 72px;
  }

  .urolift-domestic__head {
    align-items: center;
    gap: 18px;
    margin-bottom: 30px;
  }

  .urolift-domestic__title {
    font-size: 42px;
    line-height: 1.02;
  }

  .urolift-domestic__line {
    margin-bottom: 0;
  }

  .urolift-domestic__body {
    p {
      font-size: 18px;
      line-height: 1.75;
    }

    p + p {
      margin-top: 22px;
    }
  }
}

@include mobile {
  .urolift-domestic .container {
    padding-top: 56px;
    padding-bottom: 56px;
  }

  .urolift-domestic__head {
    flex-direction: column;
    align-items: flex-start;
    gap: 14px;
    margin-bottom: 24px;
  }

  .urolift-domestic__title {
    font-size: 30px;
    line-height: 1.08;
  }

  .urolift-domestic__line {
    width: 100%;
    min-width: 0;
    margin-bottom: 0;
  }

  .urolift-domestic__body {
    p {
      font-size: 15px;
      line-height: 1.85;
    }

    p + p {
      margin-top: 18px;
    }
  }
}
</style>
