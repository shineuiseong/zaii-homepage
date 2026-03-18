<template>
  <section class="brand-fast-cancer section">
    <div class="brand-fast-cancer__bg">
      <img src="/images/brand/brand-fast-cancer-bg.webp" alt="전립선암 신속검사" />
    </div>

    <div class="brand-fast-cancer__overlay" />

    <div class="container brand-fast-cancer__inner">
      <div class="brand-fast-cancer__content">
        <p class="brand-fast-cancer__eyebrow">SPECIAL CLINIC</p>
        <h2 class="brand-fast-cancer__title">#3 전립선암 신속검사</h2>

        <div class="brand-fast-cancer__text">
          <p>
            대부분의 전립선암 환자의 경우 대학병원에 진료를 의뢰받은 뒤 외래 진료 예약까지 1~2개월이
            걸리고, 검사 결과 확인과 조직검사까지 포함하면 전체 진단 과정이 더 길어지는 경우가
            많습니다.
          </p>

          <p>
            본원에서는 축적된 전립선 조직검사 경험을 바탕으로 보다 빠르고 정확한 검사 진행을 도우며,
            필요한 경우 상급병원 진료 연계까지 연결될 수 있도록 협력 체계를 운영합니다.
          </p>

          <p class="brand-fast-cancer__highlight">
            검사 후 5~7일 내 결과 안내를 목표로 하며, 환자와 보호자가 불필요하게 긴 대기 시간으로
            지치지 않도록 빠른 안내와 연계를 중요하게 생각합니다.
          </p>
        </div>
      </div>

      <div class="brand-fast-cancer__diagram">
        <div class="brand-fast-cancer__circle brand-fast-cancer__circle--small">
          <strong>당일 검사 후</strong>
          <span>5 ~ 7일 내 결과 통보</span>
        </div>

        <div class="brand-fast-cancer__arrow">→</div>

        <div class="brand-fast-cancer__circle brand-fast-cancer__circle--large">
          <div class="brand-fast-cancer__icon">⌁</div>
          <p>
            전립선암이 의심되는 경우 원하는 상급병원으로의 진료 연계를 빠르게 도와드리며, 수술이
            필요한 경우에도 연속성 있는 진료 협력체계를 지향합니다.
          </p>
        </div>
      </div>

      <div class="brand-fast-cancer__bottom">
        <p>
          자이비뇨의학과병원은 환자와 보호자가 정신적으로 지치지 않고 보다 빠르게 방향을 결정할 수
          있도록 신속한 검사와 설명, 그리고 진료 연계를 함께 고민합니다.
        </p>
        <strong>자이비뇨의학과병원 대표원장 변재상</strong>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.brand-fast-cancer {
  position: relative;
  overflow: hidden;
  background: #223246;
  color: #ffffff;
}

.brand-fast-cancer__bg {
  position: absolute;
  inset: 0;

  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}

.brand-fast-cancer__overlay {
  position: absolute;
  inset: 0;
  background:
    linear-gradient(180deg, rgba(24, 33, 49, 0.7) 0%, rgba(30, 40, 58, 0.76) 100%),
    linear-gradient(
      90deg,
      rgba(25, 35, 52, 0.7) 0%,
      rgba(25, 35, 52, 0.42) 60%,
      rgba(25, 35, 52, 0.7) 100%
    );
}

.brand-fast-cancer__inner {
  position: relative;
  z-index: 1;
}

.brand-fast-cancer__content {
  max-width: 980px;
}

.brand-fast-cancer__eyebrow {
  margin: 0 0 10px;
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.72);
}

.brand-fast-cancer__title {
  margin: 0;
  font-size: 46px;
  line-height: 1.2;
  font-weight: 800;
  color: #ffffff;
  word-break: keep-all;
}

.brand-fast-cancer__text {
  margin-top: 28px;

  p {
    margin: 0;
    font-size: 18px;
    line-height: 1.9;
    color: rgba(255, 255, 255, 0.9);
    word-break: keep-all;
  }

  p + p {
    margin-top: 18px;
  }
}

.brand-fast-cancer__highlight {
  color: #ffd76a !important;
  font-weight: 700;
}

.brand-fast-cancer__diagram {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 26px;
  margin-top: 56px;
}

.brand-fast-cancer__circle {
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  word-break: keep-all;
  box-shadow: 0 24px 40px rgba(0, 0, 0, 0.18);
}

.brand-fast-cancer__circle--small {
  width: 250px;
  height: 250px;
  padding: 28px;
  background: rgba(49, 96, 141, 0.92);
  border: 10px solid rgba(130, 181, 228, 0.24);

  strong {
    display: block;
    font-size: 28px;
    line-height: 1.35;
    font-weight: 800;
    color: #ffffff;
  }

  span {
    display: block;
    margin-top: 10px;
    font-size: 22px;
    line-height: 1.45;
    font-weight: 800;
    color: #ffd76a;
  }
}

.brand-fast-cancer__arrow {
  font-size: 86px;
  line-height: 1;
  font-weight: 700;
  color: #5888c7;
  transform: translateY(-6px);
}

.brand-fast-cancer__circle--large {
  width: 420px;
  height: 420px;
  padding: 46px;
  background: rgba(111, 149, 255, 0.82);

  p {
    margin: 10px 0 0;
    font-size: 22px;
    line-height: 1.7;
    font-weight: 600;
    color: #ffffff;
  }
}

.brand-fast-cancer__icon {
  font-size: 82px;
  line-height: 1;
  color: #ffffff;
}

.brand-fast-cancer__bottom {
  margin-top: 56px;

  p {
    margin: 0;
    font-size: 18px;
    line-height: 1.85;
    color: rgba(255, 255, 255, 0.9);
    word-break: keep-all;
  }

  strong {
    display: block;
    margin-top: 22px;
    font-size: 28px;
    line-height: 1.4;
    font-weight: 800;
    text-align: right;
    color: #ffffff;
  }
}

@include desktop-down {
  .brand-fast-cancer__title {
    font-size: 40px;
  }

  .brand-fast-cancer__text p {
    font-size: 17px;
  }

  .brand-fast-cancer__circle--small {
    width: 220px;
    height: 220px;

    strong {
      font-size: 24px;
    }

    span {
      font-size: 20px;
    }
  }

  .brand-fast-cancer__arrow {
    font-size: 72px;
  }

  .brand-fast-cancer__circle--large {
    width: 360px;
    height: 360px;
    padding: 38px;

    p {
      font-size: 19px;
    }
  }

  .brand-fast-cancer__icon {
    font-size: 68px;
  }
}

@include laptop-down {
  .brand-fast-cancer__title {
    font-size: 34px;
  }

  .brand-fast-cancer__text {
    margin-top: 22px;

    p {
      font-size: 16px;
      line-height: 1.8;
    }
  }

  .brand-fast-cancer__diagram {
    flex-direction: column;
    gap: 18px;
    margin-top: 40px;
  }

  .brand-fast-cancer__arrow {
    font-size: 54px;
    transform: rotate(90deg);
  }

  .brand-fast-cancer__circle--small {
    width: 210px;
    height: 210px;
  }

  .brand-fast-cancer__circle--large {
    width: min(100%, 420px);
    height: auto;
    min-height: 320px;
    border-radius: 220px;
    padding: 34px 30px;

    p {
      font-size: 17px;
      line-height: 1.75;
    }
  }

  .brand-fast-cancer__bottom {
    margin-top: 40px;

    p {
      font-size: 16px;
    }

    strong {
      margin-top: 18px;
      font-size: 22px;
      text-align: left;
    }
  }
}

@include mobile {
  .brand-fast-cancer__eyebrow {
    font-size: 12px;
    letter-spacing: 0.14em;
  }

  .brand-fast-cancer__title {
    font-size: 28px;
  }

  .brand-fast-cancer__text {
    margin-top: 18px;

    p {
      font-size: 15px;
      line-height: 1.75;
    }

    p + p {
      margin-top: 14px;
    }
  }

  .brand-fast-cancer__diagram {
    margin-top: 30px;
  }

  .brand-fast-cancer__circle--small {
    width: 180px;
    height: 180px;
    padding: 20px;

    strong {
      font-size: 20px;
    }

    span {
      margin-top: 8px;
      font-size: 16px;
    }
  }

  .brand-fast-cancer__circle--large {
    min-height: 260px;
    padding: 28px 24px;

    p {
      font-size: 15px;
      line-height: 1.7;
    }
  }

  .brand-fast-cancer__icon {
    font-size: 54px;
  }

  .brand-fast-cancer__bottom {
    margin-top: 30px;

    p {
      font-size: 15px;
      line-height: 1.75;
    }

    strong {
      font-size: 18px;
      line-height: 1.5;
    }
  }
}
</style>
