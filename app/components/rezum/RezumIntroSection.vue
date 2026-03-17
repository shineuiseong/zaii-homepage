<template>
  <section id="rezum-intro" class="rezum-intro section">
    <!-- 상단 명칭 설명 -->
    <div class="rezum-intro__meaning">
      <div class="container rezum-intro__meaning-inner">
        <h2 class="rezum-intro__meaning-title">리줌 ( Rezum )</h2>

        <p class="rezum-intro__meaning-desc">
          리줌 수술의 정확한 명칭은 <br />
          수증기 경요도 전립선 기화술 ( Transurethral vapor ablation prostate )입니다.
          <br />
          수증기를 이용하는 전립선비대증의 최신 수술법입니다.
        </p>

        <div class="rezum-intro__meaning-divider" />
      </div>
    </div>

    <!-- 본문 -->
    <div class="rezum-intro__main">
      <div class="container">
        <div class="rezum-intro__head">
          <h3 class="rezum-intro__title">리줌 ( Rezum )</h3>
          <p class="rezum-intro__subtitle">수증기 이용 경요도 전립선 기화술</p>

          <p class="rezum-intro__desc">
            수증기 이용 경요도 전립선 기화술 ( Transurethral vapor ablation prostate )은
            하부요로증상이 있는 전립선 비대증 환자를 대상으로 비대해진 전립선 조직을 줄여 전립선
            비대증의 증상 및 장애를 완화하기 위해 수증기를 이용하여 전립선 조직을 괴사시키는
            시술입니다.
            <br />
            2023년 보건복지부로부터 신의료기술로 등재되었습니다.
          </p>
        </div>

        <div class="rezum-intro__logos">
          <img src="/images/logo.png" alt="자이 비뇨의학과" />
          <span class="rezum-intro__logos-divider">×</span>
          <img src="/images/bsc-logo-blue.svg" alt="Boston Scientific" />
        </div>

        <div class="rezum-intro__video">
          <iframe
            src="https://www.youtube.com/embed/ukQpfBE0oMg"
            title="Rezum 시술 영상"
            frameborder="0"
            allow="
              accelerometer;
              autoplay;
              clipboard-write;
              encrypted-media;
              gyroscope;
              picture-in-picture;
            "
            allowfullscreen
          />
        </div>

        <!-- STEP -->
        <div class="rezum-process">
          <div class="rezum-process__head">
            <h3 class="rezum-process__title">리줌 시술 방법 및 원리</h3>
            <p class="rezum-process__desc">
              방광경에 부착된 수증기 전달 장치를 요도관을 통해 삽입하고
              <br />
              수증기를 전립선으로 주입시켜 비대해진 전립선 조직을 103도 ~ 110도 온도의 수증기로
              열에너지를 방출하여 치료영역에 세포 사멸과 조직 괴사가 이루어집니다.
            </p>
          </div>

          <div class="rezum-process__steps">
            <div class="rezum-step">
              <div class="rezum-step__image">
                <img src="/images/rezum/rezum-step-01.png" alt="리줌 시술 STEP 01" />
              </div>
              <div class="rezum-step__badge">STEP 01</div>
              <p class="rezum-step__text">
                요도관을 통해 삽입하여
                <br />
                비대해진 전립선 조직에 위치
              </p>
            </div>

            <div class="rezum-process__arrow" aria-hidden="true">▶</div>

            <div class="rezum-step">
              <div class="rezum-step__image">
                <img src="/images/rezum/rezum-step-02.png" alt="리줌 시술 STEP 02" />
              </div>
              <div class="rezum-step__badge">STEP 02</div>
              <p class="rezum-step__text">
                특수 바늘을 통해 9초 동안
                <br />
                전립선 조직 내 수증기 방출
              </p>
            </div>

            <div class="rezum-process__arrow" aria-hidden="true">▶</div>

            <div class="rezum-step">
              <div class="rezum-step__image">
                <img src="/images/rezum/rezum-step-03.png" alt="리줌 시술 STEP 03" />
              </div>
              <div class="rezum-step__badge">STEP 03</div>
              <p class="rezum-step__text">
                시술 1~3개월 이후 점차 전립선 조직이 수축되며 확장된 요도관 확보
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.rezum-intro {
  background: #f3f4f7;
  padding-top: 0;
  padding-bottom: 100px;
}

/* 상단 명칭 설명 */
.rezum-intro__meaning {
  background: #f7f7f8;
}

.rezum-intro__meaning-inner {
  padding-top: 92px;
  padding-bottom: 52px;
  text-align: center;
}

.rezum-intro__meaning-title {
  margin: 0;
  font-size: 62px;
  line-height: 1.1;
  font-weight: 800;
  letter-spacing: -0.04em;
  color: #111827;
  word-break: keep-all;
}

.rezum-intro__meaning-desc {
  margin: 34px auto 0;
  max-width: 980px;
  font-size: 24px;
  line-height: 1.75;
  font-weight: 500;
  color: #3f4248;
  word-break: keep-all;
}

.rezum-intro__meaning-divider {
  width: 1px;
  height: 118px;
  margin: 48px auto 0;
  background: #8f939a;
}

/* 본문 */
.rezum-intro__main {
  position: relative;
  background:
    linear-gradient(180deg, rgba(246, 249, 253, 0.96) 0%, rgba(237, 241, 247, 0.98) 100%),
    radial-gradient(circle at 20% 20%, rgba(255, 255, 255, 0.88) 0%, rgba(255, 255, 255, 0) 42%),
    radial-gradient(circle at 85% 15%, rgba(255, 255, 255, 0.66) 0%, rgba(255, 255, 255, 0) 35%);
  overflow: hidden;
}

.rezum-intro__main::before {
  content: '';
  position: absolute;
  inset: 0;
  background:
    linear-gradient(135deg, rgba(255, 255, 255, 0.42) 0%, rgba(255, 255, 255, 0) 28%),
    linear-gradient(210deg, rgba(209, 221, 237, 0.22) 0%, rgba(209, 221, 237, 0) 30%);
  pointer-events: none;
}

.rezum-intro__head {
  position: relative;
  z-index: 1;
  max-width: 1200px;
  margin: 0 auto;
  padding-top: 70px;
  text-align: center;
}

.rezum-intro__title {
  margin: 0;
  font-size: 58px;
  line-height: 1.1;
  font-weight: 800;
  letter-spacing: -0.04em;
  color: #17213a;
  word-break: keep-all;
}

.rezum-intro__subtitle {
  margin: 18px 0 0;
  font-size: 30px;
  line-height: 1.4;
  font-weight: 700;
  color: #5a72b7;
  word-break: keep-all;
}

.rezum-intro__desc {
  margin: 42px auto 0;
  max-width: 1280px;
  font-size: 22px;
  line-height: 1.8;
  font-weight: 500;
  color: #3d4148;
  word-break: keep-all;
}

.rezum-intro__logos {
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 28px;
  margin-top: 48px;
}

.rezum-intro__logos img {
  display: block;
  height: 62px;
  width: auto;
  object-fit: contain;
}

.rezum-intro__logos-divider {
  font-size: 52px;
  line-height: 1;
  color: #666c77;
  font-weight: 300;
}

/* 유튜브 */
.rezum-intro__video {
  position: relative;
  z-index: 1;
  width: 100%;
  max-width: 1120px;
  margin: 54px auto 0;
  aspect-ratio: 16 / 9;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 20px 48px rgba(18, 32, 65, 0.14);
}

.rezum-intro__video iframe {
  width: 100%;
  height: 100%;
}

/* STEP */
.rezum-process {
  position: relative;
  z-index: 1;
  margin-top: 96px;
}

.rezum-process__head {
  text-align: center;
  margin-bottom: 54px;
}

.rezum-process__title {
  margin: 0;
  font-size: 54px;
  line-height: 1.15;
  font-weight: 800;
  letter-spacing: -0.04em;
  color: #111827;
  word-break: keep-all;
}

.rezum-process__desc {
  margin: 26px auto 0;
  max-width: 1200px;
  font-size: 22px;
  line-height: 1.75;
  font-weight: 600;
  color: #383c44;
  word-break: keep-all;
}

.rezum-process__steps {
  display: grid;
  grid-template-columns: minmax(0, 1fr) 72px minmax(0, 1fr) 72px minmax(0, 1fr);
  align-items: center;
  gap: 12px;
}

.rezum-process__arrow {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 54px;
  color: #6f7684;
  user-select: none;
}

.rezum-step {
  text-align: left;
}

.rezum-step__image {
  background: #ffffff;
}

.rezum-step__image img {
  display: block;
  width: 100%;
  height: auto;
  border: 3px solid #6ba8df;
}

.rezum-step__badge {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 168px;
  height: 58px;
  margin-top: 20px;
  padding: 0 24px;
  border: 2px solid #79afe0;
  border-radius: 999px;
  background: #f7fbff;
  font-size: 22px;
  line-height: 1;
  font-weight: 800;
  color: #6b9fd6;
  letter-spacing: -0.02em;
}

.rezum-step__text {
  margin: 18px 0 0;
  font-size: 22px;
  line-height: 1.7;
  font-weight: 600;
  color: #3d4148;
  word-break: keep-all;
}

/* desktop-down */
@include desktop-down {
  .rezum-intro {
    padding-bottom: 84px;
  }

  .rezum-intro__meaning-inner {
    padding-top: 76px;
    padding-bottom: 42px;
  }

  .rezum-intro__meaning-title {
    font-size: 52px;
  }

  .rezum-intro__meaning-desc {
    margin-top: 28px;
    font-size: 20px;
  }

  .rezum-intro__meaning-divider {
    height: 98px;
    margin-top: 38px;
  }

  .rezum-intro__head {
    padding-top: 58px;
  }

  .rezum-intro__title {
    font-size: 50px;
  }

  .rezum-intro__subtitle {
    font-size: 26px;
  }

  .rezum-intro__desc {
    margin-top: 34px;
    font-size: 19px;
  }

  .rezum-intro__logos {
    margin-top: 40px;
  }

  .rezum-intro__logos img {
    height: 54px;
  }

  .rezum-intro__video {
    margin-top: 44px;
    max-width: 980px;
  }

  .rezum-process {
    margin-top: 82px;
  }

  .rezum-process__title {
    font-size: 46px;
  }

  .rezum-process__desc {
    font-size: 19px;
  }

  .rezum-process__steps {
    grid-template-columns: minmax(0, 1fr) 56px minmax(0, 1fr) 56px minmax(0, 1fr);
  }

  .rezum-process__arrow {
    font-size: 42px;
  }

  .rezum-step__badge {
    min-width: 148px;
    height: 52px;
    font-size: 20px;
  }

  .rezum-step__text {
    font-size: 19px;
  }
}

/* laptop-down */
@include laptop-down {
  .rezum-intro {
    padding-bottom: 72px;
  }

  .rezum-intro__meaning-inner {
    padding-top: 62px;
    padding-bottom: 34px;
  }

  .rezum-intro__meaning-title {
    font-size: 40px;
  }

  .rezum-intro__meaning-desc {
    font-size: 17px;
    line-height: 1.7;
  }

  .rezum-intro__meaning-divider {
    height: 74px;
    margin-top: 28px;
  }

  .rezum-intro__head {
    padding-top: 48px;
  }

  .rezum-intro__title {
    font-size: 40px;
  }

  .rezum-intro__subtitle {
    margin-top: 14px;
    font-size: 22px;
  }

  .rezum-intro__desc {
    margin-top: 26px;
    font-size: 16px;
    line-height: 1.75;
  }

  .rezum-intro__logos {
    gap: 20px;
    margin-top: 30px;
  }

  .rezum-intro__logos img {
    height: 44px;
  }

  .rezum-intro__logos-divider {
    font-size: 38px;
  }

  .rezum-intro__video {
    margin-top: 34px;
    border-radius: 14px;
  }

  .rezum-process {
    margin-top: 62px;
  }

  .rezum-process__head {
    margin-bottom: 34px;
  }

  .rezum-process__title {
    font-size: 36px;
  }

  .rezum-process__desc {
    margin-top: 18px;
    font-size: 16px;
    line-height: 1.75;
  }

  .rezum-process__steps {
    grid-template-columns: 1fr;
    gap: 16px;
  }

  .rezum-process__arrow {
    transform: rotate(90deg);
    font-size: 34px;
  }

  .rezum-step {
    text-align: center;
  }

  .rezum-step__image {
    max-width: 620px;
    margin: 0 auto;
  }

  .rezum-step__badge {
    min-width: 132px;
    height: 46px;
    margin-top: 16px;
    font-size: 18px;
  }

  .rezum-step__text {
    margin-top: 14px;
    font-size: 17px;
  }
}

/* mobile */
@include mobile {
  .rezum-intro {
    padding-bottom: 52px;
  }

  .rezum-intro__meaning-inner {
    padding-top: 48px;
    padding-bottom: 28px;
  }

  .rezum-intro__meaning-title {
    font-size: 30px;
    line-height: 1.2;
  }

  .rezum-intro__meaning-desc {
    margin-top: 20px;
    font-size: 14px;
    line-height: 1.75;
  }

  .rezum-intro__meaning-divider {
    height: 54px;
    margin-top: 22px;
  }

  .rezum-intro__head {
    padding-top: 38px;
  }

  .rezum-intro__title {
    font-size: 30px;
  }

  .rezum-intro__subtitle {
    margin-top: 12px;
    font-size: 18px;
    line-height: 1.45;
  }

  .rezum-intro__desc {
    margin-top: 18px;
    font-size: 14px;
    line-height: 1.8;
  }

  .rezum-intro__logos {
    gap: 14px;
    margin-top: 22px;
    flex-wrap: wrap;
  }

  .rezum-intro__logos img {
    height: 30px;
  }

  .rezum-intro__logos-divider {
    font-size: 26px;
  }

  .rezum-intro__video {
    margin-top: 24px;
    border-radius: 12px;
  }

  .rezum-process {
    margin-top: 48px;
  }

  .rezum-process__head {
    margin-bottom: 24px;
  }

  .rezum-process__title {
    font-size: 28px;
    line-height: 1.25;
  }

  .rezum-process__desc {
    margin-top: 14px;
    font-size: 14px;
    line-height: 1.75;
  }

  .rezum-process__steps {
    gap: 14px;
  }

  .rezum-process__arrow {
    font-size: 28px;
  }

  .rezum-step__image {
    max-width: 100%;
  }

  .rezum-step__image img {
    border-width: 2px;
  }

  .rezum-step__badge {
    min-width: 116px;
    height: 40px;
    margin-top: 12px;
    padding: 0 16px;
    font-size: 15px;
  }

  .rezum-step__text {
    margin-top: 10px;
    font-size: 14px;
    line-height: 1.7;
  }
}
</style>
