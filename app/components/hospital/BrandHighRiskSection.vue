<template>
  <section class="brand-highrisk">
    <div class="brand-highrisk__bg">
      <img src="/images/brand/brand-highrisk-bg.png" alt="고위험군 시술 클리닉" />
    </div>

    <div class="brand-highrisk__overlay" />

    <div class="container brand-highrisk__content">
      <div class="brand-highrisk__head">
        <h2 class="brand-highrisk__title">#1 고위험군 시술 클리닉 <span>(전립선비대증)</span></h2>

        <p class="brand-highrisk__desc">
          80세 이상 초고령이거나 전신상태가 마취하기에 아주 위험한 환자군으로, 타 병원이나
          대학병원에서 수술을 거부받았거나 증상이 호전되지 않고 약물 치료를 권유받고 있는 환자들을
          대상으로 합니다.
        </p>
      </div>

      <div class="brand-highrisk__circles">
        <div class="circle circle--primary">
          <strong>고위험군</strong>
          <span>시술 클리닉</span>
        </div>

        <div class="circle">80세 / 90세 이상<br />초고령자인 경우</div>
        <div class="circle">뇌혈관질환으로<br />마비 증상이 있어 거동이 불편한 경우</div>
        <div class="circle">
          심장스텐트 시술, 만성심부전, 부정맥 등으로 항응고제를 쓰고 있고 중단이 위험한 환자
        </div>
        <div class="circle">만성신부전 등으로 혈액투석을 하고 있는 환자</div>
        <div class="circle">
          심한 천식, 만성폐질환 등이나 전신상태가 좋지 않아 정상적인 전신마취나 척추마취가 불가능한
          환자
        </div>
      </div>

      <div class="brand-highrisk__note">
        본원에서는 위와 같은 고위험군 환자에 대한 다양한 임상경험을 축적한 토대로
        <strong
          >전립선비대증 시술이 가능하며 이를 위해 고위험군 시술클리닉을 운영하고 있습니다.</strong
        >
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.brand-highrisk {
  position: relative;
  overflow: hidden;
  color: #fff;
}

.brand-highrisk__bg,
.brand-highrisk__overlay {
  position: absolute;
  inset: 0;
}

.brand-highrisk__bg img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.brand-highrisk__overlay {
  background:
    linear-gradient(180deg, rgba(17, 35, 58, 0.68) 0%, rgba(17, 35, 58, 0.76) 100%),
    linear-gradient(90deg, rgba(10, 24, 42, 0.62) 0%, rgba(10, 24, 42, 0.34) 100%);
}

.brand-highrisk__content {
  position: relative;
  z-index: 1;
  padding-top: 84px;
  padding-bottom: 84px;
}

.brand-highrisk__head {
  max-width: 980px;
  margin: 0 auto;
}

.brand-highrisk__title {
  margin: 0;
  font-size: 42px;
  line-height: 1.3;
  font-weight: 800;
  word-break: keep-all;

  span {
    font-weight: 500;
    color: rgba(255, 255, 255, 0.9);
  }
}

.brand-highrisk__desc {
  margin: 22px 0 0;
  font-size: 18px;
  line-height: 1.9;
  color: rgba(255, 255, 255, 0.88);
  word-break: keep-all;
}

.brand-highrisk__circles {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 24px;
  max-width: 980px;
  margin: 44px auto 0;
}

.circle {
  aspect-ratio: 1 / 1;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.92);
  color: #1f2937;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 22px;
  font-size: 18px;
  line-height: 1.6;
  word-break: keep-all;
}

.circle--primary {
  background: #4aa0ea;
  color: #fff;
  flex-direction: column;

  strong {
    font-size: 28px;
    font-weight: 800;
    color: #ffe169;
  }

  span {
    margin-top: 6px;
    font-size: 28px;
    font-weight: 800;
  }
}

.brand-highrisk__note {
  max-width: 980px;
  margin: 34px auto 0;
  padding: 22px 26px;
  background: rgba(86, 113, 145, 0.48);
  border: 1px solid rgba(255, 255, 255, 0.24);
  font-size: 18px;
  line-height: 1.8;
  color: rgba(255, 255, 255, 0.92);
  word-break: keep-all;

  strong {
    color: #ffe169;
  }
}

@include laptop-down {
  .brand-highrisk__content {
    padding-top: 60px;
    padding-bottom: 60px;
  }

  .brand-highrisk__title {
    font-size: 34px;
  }

  .brand-highrisk__desc,
  .brand-highrisk__note {
    font-size: 16px;
  }

  .brand-highrisk__circles {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .circle {
    font-size: 16px;
  }

  .circle--primary strong,
  .circle--primary span {
    font-size: 22px;
  }
}

@include mobile {
  .brand-highrisk__content {
    padding-top: 44px;
    padding-bottom: 44px;
  }

  .brand-highrisk__title {
    font-size: 26px;
  }

  .brand-highrisk__desc {
    margin-top: 16px;
    font-size: 15px;
    line-height: 1.75;
  }

  .brand-highrisk__circles {
    grid-template-columns: 1fr;
    gap: 16px;
    margin-top: 28px;
  }

  .circle {
    aspect-ratio: auto;
    min-height: 180px;
    border-radius: 28px;
    font-size: 15px;
  }

  .circle--primary strong,
  .circle--primary span {
    font-size: 20px;
  }

  .brand-highrisk__note {
    margin-top: 22px;
    padding: 18px 16px;
    font-size: 14px;
    line-height: 1.7;
  }
}
</style>
