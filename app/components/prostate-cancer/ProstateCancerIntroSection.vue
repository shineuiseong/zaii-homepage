<template>
  <section id="prostate-cancer-intro" class="prostate-cancer-intro section">
    <div class="container">
      <!-- 상단 인트로 -->
      <div class="prostate-cancer-intro__head">
        <p class="prostate-cancer-intro__eyebrow">ZAII UROLOGY HOSPITAL</p>
        <h2 class="prostate-cancer-intro__title">전립선암</h2>
      </div>

      <div class="prostate-cancer-intro__summary">
        <p class="prostate-cancer-intro__summary-lead">
          국내 남성암 발생률 4위를 차지하는 전립선암
        </p>

        <div class="prostate-cancer-intro__summary-body">
          <p>
            초기에는 증상이 없는 경우가 많고 배뇨증상 또는 증상이 발생하더라도 전립선비대증이나
            전립선염에 동반된 증상과 중복된다는 점이 있습니다.
          </p>

          <p>
            이미 서양에서는 남성에게 흔한 암종 중 하나이며, 서구화된 생활습관 등의 영향으로
            국내에서도 발생 빈도가 꾸준히 증가하고 있습니다.
          </p>

          <p>특히 40대 이상이라면 주기적인 검사를 통해 조기에 진단할 필요성이 높아졌습니다.</p>
        </div>
      </div>

      <!-- 하단 증상/검사 안내 -->
      <div class="prostate-cancer-intro__check">
        <div class="prostate-cancer-intro__check-badge">전립선암 검사</div>

        <p class="prostate-cancer-intro__check-title">전립선에 이런 증상이 있다면</p>

        <div class="prostate-cancer-intro__check-grid">
          <div class="prostate-cancer-intro__panel prostate-cancer-intro__panel--left">
            <h3 class="prostate-cancer-intro__panel-title">대표적으로 확인해야 할 변화</h3>

            <ul class="prostate-cancer-intro__symptoms">
              <li>주간과 야간에 소변을 보는 횟수가 증가</li>
              <li>소변을 보고 나도 방광에 소변이 남은 느낌</li>
              <li>소변이 갑자기 나와 참기 어려움</li>
              <li>소변이 갑자기 잘 나오지 않거나 약하게 나옴</li>
              <li>소변이나 정액에 혈액이 섞여 나옴</li>
              <li>소변볼 때 통증이나 불편감이 느껴짐</li>
              <li>전이가 진행된 경우 다리의 약화, 감각 저하</li>
              <li>보행 곤란, 변비, 소변이 막히는 요폐 등의 증상</li>
            </ul>
          </div>

          <div class="prostate-cancer-intro__panel prostate-cancer-intro__panel--right">
            <h3 class="prostate-cancer-intro__panel-title">왜 빠른 검사가 필요할까요?</h3>

            <div class="prostate-cancer-intro__reasons">
              <div class="prostate-cancer-intro__reason">
                <strong>01</strong>
                <p>전립선암 증상은 전립선염·전립선비대증과 비슷해 스스로 구분하기 어렵습니다.</p>
              </div>

              <div class="prostate-cancer-intro__reason">
                <strong>02</strong>
                <p>초기에는 증상이 거의 없을 수 있어 검사를 해야만 발견되는 경우가 많습니다.</p>
              </div>

              <div class="prostate-cancer-intro__reason">
                <strong>03</strong>
                <p>조기에 발견할수록 진단과 치료 방향을 더 빠르게 결정할 수 있습니다.</p>
              </div>

              <div class="prostate-cancer-intro__reason">
                <strong>04</strong>
                <p>배뇨증상이 반복되거나 가족력·연령 위험군이라면 더욱 정밀한 확인이 필요합니다.</p>
              </div>
            </div>
          </div>
        </div>

        <div class="prostate-cancer-intro__notice">
          <p>전립선암 증상, 전립선염과 전립선비대증 증상과 비슷하다고 느끼셨나요?</p>
          <p class="is-accent">
            맞습니다. 증상이 유사한 부분이 많기 때문에 정확한 검사가 필요합니다.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.prostate-cancer-intro {
  background: #efeff1;
  padding: 100px 0;
}

/* 상단 */
.prostate-cancer-intro__head {
  text-align: center;
  margin-bottom: 34px;
}

.prostate-cancer-intro__eyebrow {
  margin: 0 0 10px;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.28em;
  color: #9a9ca3;
}

.prostate-cancer-intro__title {
  margin: 0;
  font-size: 58px;
  line-height: 1.12;
  font-weight: 800;
  letter-spacing: -0.04em;
  color: #111827;
  word-break: keep-all;
}

.prostate-cancer-intro__summary {
  max-width: 1080px;
  margin: 0 auto 56px;
  padding: 56px 48px;
  background: #f8f8f9;
  border-radius: 28px;
  box-shadow: 0 14px 40px rgba(24, 31, 52, 0.06);
  text-align: center;
}

.prostate-cancer-intro__summary-lead {
  margin: 0;
  font-size: 24px;
  line-height: 1.5;
  font-weight: 800;
  color: #6da7ec;
  word-break: keep-all;
}

.prostate-cancer-intro__summary-body {
  margin-top: 28px;

  p {
    margin: 0;
    font-size: 20px;
    line-height: 1.8;
    font-weight: 500;
    color: #5f636b;
    word-break: keep-all;
  }

  p + p {
    margin-top: 28px;
  }
}

/* 하단 검사안내 */
.prostate-cancer-intro__check {
  position: relative;
  padding: 88px 42px 42px;
  border-radius: 32px;
  background: linear-gradient(180deg, #7d8598 0%, #737b8f 100%);
  box-shadow: 0 18px 48px rgba(22, 29, 46, 0.1);
}

.prostate-cancer-intro__check-badge {
  position: absolute;
  top: -26px;
  left: 50%;
  transform: translateX(-50%);
  min-width: 280px;
  height: 54px;
  padding: 0 32px;
  border-radius: 999px;
  background: linear-gradient(180deg, #69aceb 0%, #5596d7 100%);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  font-size: 28px;
  font-weight: 800;
  letter-spacing: -0.03em;
  box-shadow: 0 10px 24px rgba(52, 109, 177, 0.2);
}

.prostate-cancer-intro__check-title {
  margin: 0 0 28px;
  text-align: center;
  font-size: 34px;
  line-height: 1.4;
  font-weight: 800;
  color: #f3df6b;
  word-break: keep-all;
}

.prostate-cancer-intro__check-grid {
  display: grid;
  grid-template-columns: 1.08fr 1fr;
  gap: 28px;
}

.prostate-cancer-intro__panel {
  min-width: 0;
  padding: 34px 32px;
  border-radius: 24px;
  border: 1px solid rgba(255, 255, 255, 0.14);
  background: rgba(77, 83, 97, 0.72);
  backdrop-filter: blur(2px);
}

.prostate-cancer-intro__panel-title {
  margin: 0 0 24px;
  font-size: 26px;
  line-height: 1.45;
  font-weight: 800;
  color: #ffffff;
  word-break: keep-all;
}

.prostate-cancer-intro__symptoms {
  display: grid;
  gap: 16px;
  margin: 0;
  padding: 0;
  list-style: none;

  li {
    position: relative;
    padding-left: 40px;
    font-size: 19px;
    line-height: 1.7;
    font-weight: 500;
    color: rgba(255, 255, 255, 0.96);
    word-break: keep-all;
  }

  li::before {
    content: '✓';
    position: absolute;
    left: 0;
    top: 1px;
    width: 28px;
    height: 28px;
    border-radius: 50%;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background: rgba(134, 172, 235, 0.18);
    border: 1px solid rgba(145, 185, 248, 0.35);
    color: #97b8f3;
    font-size: 16px;
    font-weight: 800;
  }
}

.prostate-cancer-intro__reasons {
  display: grid;
  gap: 16px;
}

.prostate-cancer-intro__reason {
  display: grid;
  grid-template-columns: 58px minmax(0, 1fr);
  gap: 16px;
  align-items: start;
  padding: 18px 18px 18px 16px;
  border-radius: 18px;
  background: rgba(255, 255, 255, 0.06);

  strong {
    width: 58px;
    height: 58px;
    border-radius: 50%;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background: rgba(108, 170, 236, 0.14);
    color: #b8ddff;
    font-size: 18px;
    font-weight: 800;
    letter-spacing: -0.02em;
  }

  p {
    margin: 0;
    font-size: 18px;
    line-height: 1.7;
    font-weight: 500;
    color: rgba(255, 255, 255, 0.95);
    word-break: keep-all;
  }
}

.prostate-cancer-intro__notice {
  margin-top: 26px;
  padding: 28px 24px;
  text-align: center;
  border-radius: 20px;
  background: rgba(84, 89, 104, 0.84);

  p {
    margin: 0;
    font-size: 22px;
    line-height: 1.65;
    font-weight: 700;
    color: #ffffff;
    word-break: keep-all;
  }

  p + p {
    margin-top: 6px;
  }

  .is-accent {
    color: #f0d35e;
  }
}

/* desktop-down */
@include desktop-down {
  .prostate-cancer-intro {
    padding: 84px 0;
  }

  .prostate-cancer-intro__title {
    font-size: 48px;
  }

  .prostate-cancer-intro__summary {
    padding: 46px 36px;
    margin-bottom: 46px;
  }

  .prostate-cancer-intro__summary-lead {
    font-size: 22px;
  }

  .prostate-cancer-intro__summary-body p {
    font-size: 18px;
  }

  .prostate-cancer-intro__check {
    padding: 80px 30px 34px;
  }

  .prostate-cancer-intro__check-badge {
    min-width: 240px;
    height: 50px;
    font-size: 24px;
  }

  .prostate-cancer-intro__check-title {
    font-size: 30px;
  }

  .prostate-cancer-intro__panel {
    padding: 28px 24px;
  }

  .prostate-cancer-intro__panel-title {
    font-size: 23px;
  }

  .prostate-cancer-intro__symptoms li,
  .prostate-cancer-intro__reason p {
    font-size: 17px;
  }

  .prostate-cancer-intro__notice p {
    font-size: 20px;
  }
}

/* laptop-down */
@include laptop-down {
  .prostate-cancer-intro {
    padding: 72px 0;
  }

  .prostate-cancer-intro__head {
    margin-bottom: 26px;
  }

  .prostate-cancer-intro__title {
    font-size: 38px;
  }

  .prostate-cancer-intro__summary {
    padding: 34px 24px;
    margin-bottom: 34px;
    border-radius: 22px;
  }

  .prostate-cancer-intro__summary-lead {
    font-size: 20px;
  }

  .prostate-cancer-intro__summary-body {
    margin-top: 20px;

    p {
      font-size: 16px;
      line-height: 1.75;
    }

    p + p {
      margin-top: 18px;
    }
  }

  .prostate-cancer-intro__check {
    padding: 72px 20px 22px;
    border-radius: 24px;
  }

  .prostate-cancer-intro__check-badge {
    top: -22px;
    min-width: 220px;
    height: 46px;
    padding: 0 24px;
    font-size: 22px;
  }

  .prostate-cancer-intro__check-title {
    margin-bottom: 20px;
    font-size: 24px;
  }

  .prostate-cancer-intro__check-grid {
    grid-template-columns: 1fr;
    gap: 18px;
  }

  .prostate-cancer-intro__panel {
    padding: 22px 18px;
    border-radius: 18px;
  }

  .prostate-cancer-intro__panel-title {
    margin-bottom: 18px;
    font-size: 20px;
  }

  .prostate-cancer-intro__symptoms {
    gap: 12px;

    li {
      padding-left: 34px;
      font-size: 15px;
      line-height: 1.7;
    }

    li::before {
      width: 24px;
      height: 24px;
      font-size: 14px;
    }
  }

  .prostate-cancer-intro__reason {
    grid-template-columns: 48px minmax(0, 1fr);
    gap: 12px;
    padding: 14px 14px 14px 12px;

    strong {
      width: 48px;
      height: 48px;
      font-size: 15px;
    }

    p {
      font-size: 15px;
      line-height: 1.7;
    }
  }

  .prostate-cancer-intro__notice {
    margin-top: 18px;
    padding: 20px 16px;

    p {
      font-size: 16px;
      line-height: 1.7;
    }
  }
}

/* mobile */
@include mobile {
  .prostate-cancer-intro {
    padding: 52px 0;
  }

  .prostate-cancer-intro__eyebrow {
    font-size: 10px;
    letter-spacing: 0.22em;
  }

  .prostate-cancer-intro__title {
    font-size: 30px;
    line-height: 1.2;
  }

  .prostate-cancer-intro__summary {
    padding: 24px 16px;
    margin-bottom: 28px;
    border-radius: 18px;
  }

  .prostate-cancer-intro__summary-lead {
    font-size: 17px;
    line-height: 1.6;
  }

  .prostate-cancer-intro__summary-body {
    margin-top: 16px;

    p {
      font-size: 14px;
      line-height: 1.75;
    }

    p + p {
      margin-top: 14px;
    }
  }

  .prostate-cancer-intro__check {
    padding: 64px 14px 16px;
    border-radius: 18px;
  }

  .prostate-cancer-intro__check-badge {
    top: -18px;
    min-width: 180px;
    height: 40px;
    padding: 0 18px;
    font-size: 18px;
  }

  .prostate-cancer-intro__check-title {
    font-size: 18px;
    line-height: 1.55;
  }

  .prostate-cancer-intro__panel {
    padding: 16px 14px;
    border-radius: 14px;
  }

  .prostate-cancer-intro__panel-title {
    margin-bottom: 14px;
    font-size: 17px;
    line-height: 1.45;
  }

  .prostate-cancer-intro__symptoms li {
    font-size: 14px;
    line-height: 1.7;
  }

  .prostate-cancer-intro__reason p {
    font-size: 14px;
    line-height: 1.7;
  }

  .prostate-cancer-intro__notice {
    padding: 16px 12px;

    p {
      font-size: 14px;
      line-height: 1.65;
    }
  }
}
</style>
