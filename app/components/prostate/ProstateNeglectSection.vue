<template>
  <section id="prostate-neglect" class="prostate-neglect section">
    <div class="container">
      <div class="prostate-neglect__head">
        <h2 class="prostate-neglect__title">전립선 비대증을 방치하면</h2>
      </div>

      <div class="prostate-neglect__main">
        <div class="prostate-neglect__media">
          <div class="prostate-neglect__image">
            <img src="/images/prostate/prostate-neglect.png" alt="전립선비대증 증상 이미지" />
          </div>

          <div class="prostate-neglect__bubble">
            전립선 비대증을<br />
            방치하게 된다면?
          </div>
        </div>

        <div class="prostate-neglect__content">
          <p class="prostate-neglect__lead">
            전립선 비대증을 방치하면 결국 방광이 망가지고<br />
            이후에 신장까지 망가지는 결과가 생깁니다.
          </p>

          <p class="prostate-neglect__desc">
            초기에는 단순한 빈뇨나 야간뇨처럼 보일 수 있지만, 시간이 지나면 소변이 잘 나오지 않고
            잔뇨가 남는 상태가 반복되면서 방광 기능이 점점 떨어질 수 있습니다.
          </p>

          <p class="prostate-neglect__desc">
            특히 전립선비대증이 심해질 경우 급성 요폐처럼 갑자기 소변이 전혀 나오지 않는 상황이
            발생할 수 있으며, 이 경우 응급 처치가 필요한 상태가 됩니다.
          </p>

          <p class="prostate-neglect__desc">
            이런 상태를 오래 방치하면 방광벽이 두꺼워지고 기능이 약해지며, 심한 경우 소변이 역류해
            신장 기능 저하까지 이어질 수 있어 조기 진단과 치료가 중요합니다.
          </p>

          <div class="prostate-neglect__alert">
            초기의 전립선 비대증은 충분히 관리와 치료가 가능합니다.<br />
            배뇨 이상이 반복된다면 참지 말고 빠르게 진료를 받아야 합니다.
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.prostate-neglect {
  background: #efeff1;
  padding: 100px 0;
}

.prostate-neglect__head {
  text-align: center;
  margin-bottom: 46px;
}

.prostate-neglect__title {
  margin: 0;
  font-size: 58px;
  line-height: 1.18;
  font-weight: 800;
  letter-spacing: -0.04em;
  color: #111827;
  word-break: keep-all;
}

.prostate-neglect__main {
  display: grid;
  grid-template-columns: minmax(0, 1.08fr) minmax(360px, 1fr);
  gap: 54px;
  align-items: start;
}

.prostate-neglect__media {
  position: relative;
}

.prostate-neglect__image {
  img {
    display: block;
    width: 100%;
    height: auto;
    background: #fff;
  }
}

.prostate-neglect__bubble {
  position: absolute;
  top: 24px;
  right: -28px;
  width: 220px;
  min-height: 220px;
  padding: 28px 20px;
  border-radius: 50%;
  background: #ec6a68;
  color: #fff;
  font-size: 20px;
  line-height: 1.45;
  font-weight: 800;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  word-break: keep-all;

  &::after {
    content: '';
    position: absolute;
    left: 22px;
    bottom: 18px;
    width: 0;
    height: 0;
    border-top: 24px solid #ec6a68;
    border-right: 24px solid transparent;
    transform: rotate(18deg);
  }
}

.prostate-neglect__content {
  padding-top: 8px;
}

.prostate-neglect__lead {
  margin: 0 0 28px;
  font-size: 28px;
  line-height: 1.45;
  font-weight: 800;
  color: #2f2f35;
  word-break: keep-all;
}

.prostate-neglect__desc {
  margin: 0;
  font-size: 22px;
  line-height: 1.8;
  font-weight: 500;
  color: #66676d;
  word-break: keep-all;
}

.prostate-neglect__desc + .prostate-neglect__desc {
  margin-top: 18px;
}

.prostate-neglect__alert {
  margin-top: 32px;
  padding: 24px 28px;
  border-left: 5px solid #5c8fc3;
  background: #f8fbff;
  font-size: 20px;
  line-height: 1.7;
  font-weight: 700;
  color: #3a4a5f;
  word-break: keep-all;
}

/* desktop-down */
@include desktop-down {
  .prostate-neglect {
    padding: 84px 0;
  }

  .prostate-neglect__title {
    font-size: 48px;
  }

  .prostate-neglect__main {
    gap: 40px;
  }

  .prostate-neglect__bubble {
    right: -18px;
    width: 190px;
    min-height: 190px;
    font-size: 17px;
  }

  .prostate-neglect__lead {
    font-size: 24px;
  }

  .prostate-neglect__desc {
    font-size: 19px;
  }

  .prostate-neglect__alert {
    font-size: 18px;
  }
}

/* laptop-down */
@include laptop-down {
  .prostate-neglect {
    padding: 72px 0;
  }

  .prostate-neglect__head {
    margin-bottom: 30px;
  }

  .prostate-neglect__title {
    font-size: 38px;
  }

  .prostate-neglect__main {
    grid-template-columns: 1fr;
    gap: 28px;
  }

  .prostate-neglect__media {
    max-width: 760px;
    margin: 0 auto;
  }

  .prostate-neglect__bubble {
    top: 18px;
    right: 18px;
    width: 170px;
    min-height: 170px;
    padding: 20px 16px;
    font-size: 16px;
  }

  .prostate-neglect__lead {
    margin-bottom: 20px;
    font-size: 22px;
  }

  .prostate-neglect__desc {
    font-size: 17px;
    line-height: 1.75;
  }

  .prostate-neglect__alert {
    margin-top: 24px;
    padding: 18px 20px;
    font-size: 17px;
  }
}

/* mobile */
@include mobile {
  .prostate-neglect {
    padding: 52px 0;
  }

  .prostate-neglect__head {
    margin-bottom: 22px;
  }

  .prostate-neglect__title {
    font-size: 30px;
    line-height: 1.25;
  }

  .prostate-neglect__bubble {
    top: 12px;
    right: 12px;
    width: 124px;
    min-height: 124px;
    padding: 12px 10px;
    font-size: 12px;
    line-height: 1.4;

    &::after {
      left: 14px;
      bottom: 10px;
      border-top-width: 16px;
      border-right-width: 16px;
    }
  }

  .prostate-neglect__lead {
    margin-bottom: 14px;
    font-size: 18px;
    line-height: 1.5;

    br {
      display: none;
    }
  }

  .prostate-neglect__desc {
    font-size: 14px;
    line-height: 1.75;
  }

  .prostate-neglect__desc + .prostate-neglect__desc {
    margin-top: 12px;
  }

  .prostate-neglect__alert {
    margin-top: 18px;
    padding: 14px 16px;
    font-size: 14px;
    line-height: 1.65;

    br {
      display: none;
    }
  }
}
</style>
