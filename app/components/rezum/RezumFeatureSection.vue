<template>
  <section id="rezum-feature" class="rezum-feature section">
    <!-- 1. 상단 특징 -->
    <div class="rezum-feature__hero">
      <div class="rezum-feature__hero-bg">
        <img src="/images/rezum/rezum-feature-bg.webp" alt="리줌 특징 배경" />
      </div>
      <div class="rezum-feature__hero-overlay" />

      <div class="container rezum-feature__hero-content">
        <div class="rezum-feature__hero-text">
          <p class="rezum-feature__hero-eyebrow">Rezum</p>
          <h2 class="rezum-feature__hero-title">리줌의 특징</h2>

          <div class="rezum-feature__hero-desc">
            <p>리줌은 국내에는 최근에 도입된 수술입니다.</p>

            <p>
              2023년 초에 국내 식약처에서 신의료기술로 사용이 승인되었고, 실제 2023년 11월경부터
              진료에 사용되기 시작한 최신의 수술법입니다.
            </p>

            <p>
              우리보다 치료가 앞선 미국이나 서구에서는 선풍적인 관심을 끌고 있는 치료 방법으로,
              앞으로 국내에서도 사용이 크게 늘것으로 기대되는 차세대 치료방법입니다.
            </p>

            <p>
              요도를 따라 삽입된 전달장치를 통해 전립선 조직에 수증기를 방출해 수증기 에너지로
              전립선 조직을 제거합니다.
            </p>

            <p class="is-strong">
              리줌은 절개, 체내임플란트, 약물 관련 부작용이 거의 없이 전립선비대증을 치료하는
              최소침습치료법입니다.
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- 2. 장점 -->
    <div class="container">
      <div class="rezum-feature__benefit">
        <div class="rezum-feature__head">
          <p class="rezum-feature__eyebrow">ZAII UROLOGY HOSPITAL</p>
          <h3 class="rezum-feature__title">리줌 수술의 장점</h3>
          <p class="rezum-feature__subtext">
            리줌은 최소침습적 전립선비대증 치료법으로
            <br />
            시술 후 사정기능 장애가 매우 경미하다는 장점이 있습니다.
          </p>
        </div>

        <div class="rezum-feature__banner">
          요도와 괄약근을 보존하고, 주변 조직 손상을 최소화하여 안전성을 확보했습니다.
          <br />
          또한 재치료율이 매우 적다는 효과 또한 입증되었습니다.
        </div>

        <div class="rezum-feature__benefit-grid">
          <article class="rezum-feature__benefit-card">
            <div class="rezum-feature__benefit-circle">
              <Icon name="lucide:droplets" size="42" />
              <span class="num">01</span>
              <p>수증기를 이용한<br />비수술적 치료 시술</p>
            </div>
          </article>

          <article class="rezum-feature__benefit-card">
            <div class="rezum-feature__benefit-circle">
              <Icon name="lucide:scissors" size="42" />
              <span class="num">02</span>
              <p>시술 이후 사정기능 장애<br />매우 경미</p>
            </div>
          </article>

          <article class="rezum-feature__benefit-card">
            <div class="rezum-feature__benefit-circle">
              <Icon name="lucide:clock-3" size="42" />
              <span class="num">03</span>
              <p>총 시술시간<br />5-15분 소요</p>
            </div>
          </article>

          <article class="rezum-feature__benefit-card">
            <div class="rezum-feature__benefit-circle">
              <Icon name="lucide:shield-plus" size="42" />
              <span class="num">04</span>
              <p>수술만큼이나 적은<br />재치료율</p>
            </div>
          </article>
        </div>
      </div>
    </div>

    <!-- 3. 5년 통계 자료 -->
    <div class="container">
      <div class="rezum-feature__stats">
        <div class="rezum-feature__stats-head">
          <h3 class="rezum-feature__stats-title">리줌(Rezum)시술 후 5년 환자 통계 자료</h3>
          <div class="rezum-feature__stats-badge">미국비뇨의학회 논문 자료 발췌</div>
        </div>

        <div class="rezum-feature__stats-top">
          <div class="rezum-feature__stats-card">
            <img src="/images/rezum/rezum-stats-01.webp" alt="리줌 5년 통계 그래프 1" />
          </div>
        </div>

        <div class="rezum-feature__stats-middle">
          <div class="rezum-feature__stats-card">
            <img src="/images/rezum/rezum-stats-02.webp" alt="리줌 5년 통계 그래프 2" />
          </div>
          <div class="rezum-feature__stats-summary">
            시술 후 5년 경과 관찰 결과 증상과 최대 요속이 시술 전에 비해
            <span>약 50% 향상된 결과</span>를 보였고
            <br />
            이는 5년 동안 지속적으로 유지
          </div>
        </div>

        <div class="rezum-feature__stats-bottom">
          <div class="rezum-feature__stats-card">
            <img src="/images/rezum/rezum-stats-03.webp" alt="리줌 5년 통계 그래프 3" />
          </div>
          <div class="rezum-feature__stats-summary">
            시술 후 5년 관찰한 결과,
            <span>재수술 가능성은 약 4.4%</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.rezum-feature {
  background: #f3f3f5;
  padding-top: 0;
  padding-bottom: 100px;
}

/* =========================
     1. 상단 특징
  ========================= */
.rezum-feature__hero {
  position: relative;
  min-height: 720px;
  overflow: hidden;
  background: #27324b;
}

.rezum-feature__hero-bg {
  position: absolute;
  inset: 0;

  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }
}

.rezum-feature__hero-overlay {
  position: absolute;
  inset: 0;
  background:
    linear-gradient(
      90deg,
      rgba(38, 48, 74, 0.92) 0%,
      rgba(46, 58, 89, 0.86) 42%,
      rgba(34, 42, 65, 0.58) 100%
    ),
    linear-gradient(180deg, rgba(20, 27, 43, 0.14) 0%, rgba(20, 27, 43, 0.34) 100%);
}

.rezum-feature__hero-content {
  position: relative;
  z-index: 1;
  min-height: 720px;
  display: flex;
  align-items: center;
}

.rezum-feature__hero-text {
  width: min(100%, 760px);
  color: #fff;
}

.rezum-feature__hero-eyebrow {
  position: relative;
  display: inline-block;
  margin: 0 0 22px;
  padding-right: 132px;
  font-size: 22px;
  line-height: 1;
  font-weight: 400;
  color: rgba(225, 233, 255, 0.92);

  &::after {
    content: '';
    position: absolute;
    top: 50%;
    right: 0;
    width: 110px;
    height: 1px;
    background: rgba(216, 228, 255, 0.7);
    transform: translateY(-50%);
  }
}

.rezum-feature__hero-title {
  margin: 0;
  font-size: 68px;
  line-height: 1.08;
  font-weight: 800;
  letter-spacing: -0.04em;
  color: #ffffff;
  word-break: keep-all;
}

.rezum-feature__hero-desc {
  margin-top: 52px;

  p {
    margin: 0;
    font-size: 22px;
    line-height: 1.82;
    font-weight: 500;
    color: rgba(247, 249, 255, 0.96);
    word-break: keep-all;
  }

  p + p {
    margin-top: 10px;
  }

  .is-strong {
    margin-top: 34px;
    font-size: 24px;
    line-height: 1.75;
    font-weight: 700;
    color: #ffffff;
  }
}

/* =========================
     공통 헤더
  ========================= */
.rezum-feature__head {
  text-align: center;
  margin-bottom: 40px;
}

.rezum-feature__eyebrow {
  margin: 0 0 10px;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.28em;
  color: #9a9ca3;
}

.rezum-feature__title {
  margin: 0;
  font-size: 56px;
  line-height: 1.15;
  font-weight: 800;
  letter-spacing: -0.04em;
  color: #111827;
  word-break: keep-all;
}

.rezum-feature__subtext {
  margin: 24px 0 0;
  font-size: 22px;
  line-height: 1.7;
  font-weight: 600;
  color: #333842;
  word-break: keep-all;
}

/* =========================
     2. 장점
  ========================= */
.rezum-feature__benefit {
  padding-top: 96px;
}

.rezum-feature__banner {
  max-width: 980px;
  margin: 0 auto 52px;
  padding: 28px 30px;
  background: #6d88d4;
  text-align: center;
  font-size: 24px;
  line-height: 1.7;
  font-weight: 700;
  color: #ffffff;
  word-break: keep-all;
}

.rezum-feature__benefit-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 34px;
}

.rezum-feature__benefit-card {
  display: flex;
  justify-content: center;
}

.rezum-feature__benefit-circle {
  width: 100%;
  max-width: 300px;
  aspect-ratio: 1 / 1;
  border-radius: 50%;
  border: 5px solid #c7daf5;
  background: #f7f9fc;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 26px;
  text-align: center;
  color: #6ca9de;

  .num {
    display: block;
    margin-top: 18px;
    font-size: 26px;
    line-height: 1;
    font-weight: 800;
    color: #2f3a54;
  }

  p {
    margin: 18px 0 0;
    font-size: 20px;
    line-height: 1.55;
    font-weight: 600;
    color: #2d3340;
    word-break: keep-all;
  }
}

/* =========================
     3. 통계 자료
  ========================= */
.rezum-feature__stats {
  padding-top: 110px;
}

.rezum-feature__stats-head {
  text-align: center;
  margin-bottom: 42px;
}

.rezum-feature__stats-title {
  margin: 0;
  font-size: 56px;
  line-height: 1.15;
  font-weight: 800;
  letter-spacing: -0.04em;
  color: #111827;
  word-break: keep-all;
}

.rezum-feature__stats-badge {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 56px;
  margin-top: 24px;
  padding: 0 28px;
  border: 2px solid #5b5d63;
  background: #ffffff;
  font-size: 22px;
  font-weight: 700;
  color: #2a2d33;
}

.rezum-feature__stats-top,
.rezum-feature__stats-middle,
.rezum-feature__stats-bottom {
  margin-top: 34px;
}

.rezum-feature__stats-card {
  border: 4px solid #e3e5e8;
  background: #ffffff;
  padding: 20px;

  img {
    display: block;
    width: 100%;
    height: auto;
  }
}

.rezum-feature__stats-summary {
  max-width: 980px;
  margin: 26px auto 0;
  padding: 26px 36px;
  border-radius: 999px;
  background: #464d62;
  text-align: center;
  font-size: 24px;
  line-height: 1.65;
  font-weight: 700;
  color: #ffffff;
  word-break: keep-all;

  span {
    color: #8fd0ff;
    font-weight: 800;
  }
}

/* =========================
     responsive
  ========================= */
@include desktop-down {
  .rezum-feature {
    padding-bottom: 84px;
  }

  .rezum-feature__hero {
    min-height: 620px;
  }

  .rezum-feature__hero-content {
    min-height: 620px;
  }

  .rezum-feature__hero-title {
    font-size: 56px;
  }

  .rezum-feature__hero-desc {
    margin-top: 42px;

    p {
      font-size: 19px;
    }

    .is-strong {
      font-size: 21px;
    }
  }

  .rezum-feature__title,
  .rezum-feature__stats-title {
    font-size: 46px;
  }

  .rezum-feature__subtext {
    font-size: 19px;
  }

  .rezum-feature__banner {
    font-size: 21px;
  }

  .rezum-feature__benefit-grid {
    gap: 22px;
  }

  .rezum-feature__benefit-circle {
    p {
      font-size: 18px;
    }

    .num {
      font-size: 22px;
    }
  }

  .rezum-feature__stats-badge {
    font-size: 19px;
  }

  .rezum-feature__stats-summary {
    font-size: 20px;
  }
}

@include laptop-down {
  .rezum-feature {
    padding-bottom: 72px;
  }

  .rezum-feature__hero {
    min-height: 540px;
  }

  .rezum-feature__hero-content {
    min-height: 540px;
  }

  .rezum-feature__hero-text {
    width: min(100%, 100%);
  }

  .rezum-feature__hero-eyebrow {
    font-size: 18px;
    padding-right: 92px;

    &::after {
      width: 74px;
    }
  }

  .rezum-feature__hero-title {
    font-size: 44px;
  }

  .rezum-feature__hero-desc {
    margin-top: 30px;

    p {
      font-size: 16px;
      line-height: 1.75;
    }

    .is-strong {
      margin-top: 24px;
      font-size: 18px;
    }
  }

  .rezum-feature__benefit {
    padding-top: 72px;
  }

  .rezum-feature__title,
  .rezum-feature__stats-title {
    font-size: 34px;
  }

  .rezum-feature__subtext {
    margin-top: 18px;
    font-size: 16px;
  }

  .rezum-feature__banner {
    margin-bottom: 36px;
    padding: 22px 18px;
    font-size: 17px;
  }

  .rezum-feature__benefit-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .rezum-feature__benefit-circle {
    max-width: 280px;
  }

  .rezum-feature__stats {
    padding-top: 84px;
  }

  .rezum-feature__stats-badge {
    min-height: 46px;
    padding: 0 20px;
    font-size: 16px;
  }

  .rezum-feature__stats-card {
    padding: 12px;
  }

  .rezum-feature__stats-summary {
    padding: 22px 18px;
    border-radius: 28px;
    font-size: 16px;
    line-height: 1.7;
  }
}

@include mobile {
  .rezum-feature {
    padding-bottom: 52px;
  }

  .rezum-feature__hero {
    min-height: auto;
  }

  .rezum-feature__hero-content {
    min-height: auto;
    padding-top: 54px;
    padding-bottom: 54px;
  }

  .rezum-feature__hero-eyebrow {
    margin-bottom: 16px;
    padding-right: 66px;
    font-size: 15px;

    &::after {
      width: 54px;
    }
  }

  .rezum-feature__hero-title {
    font-size: 34px;
    line-height: 1.18;
  }

  .rezum-feature__hero-desc {
    margin-top: 22px;

    p {
      font-size: 14px;
      line-height: 1.72;
    }

    .is-strong {
      margin-top: 18px;
      font-size: 15px;
      line-height: 1.72;
    }
  }

  .rezum-feature__benefit {
    padding-top: 52px;
  }

  .rezum-feature__head {
    margin-bottom: 22px;
  }

  .rezum-feature__eyebrow {
    font-size: 10px;
    letter-spacing: 0.22em;
  }

  .rezum-feature__title,
  .rezum-feature__stats-title {
    font-size: 28px;
    line-height: 1.25;
  }

  .rezum-feature__subtext {
    margin-top: 14px;
    font-size: 14px;
    line-height: 1.7;
  }

  .rezum-feature__banner {
    margin-bottom: 24px;
    padding: 18px 14px;
    font-size: 14px;
    line-height: 1.7;
  }

  .rezum-feature__benefit-grid {
    grid-template-columns: 1fr;
    gap: 18px;
  }

  .rezum-feature__benefit-circle {
    max-width: 250px;
    padding: 22px;

    .num {
      margin-top: 12px;
      font-size: 20px;
    }

    p {
      margin-top: 12px;
      font-size: 16px;
      line-height: 1.55;
    }
  }

  .rezum-feature__stats {
    padding-top: 56px;
  }

  .rezum-feature__stats-head {
    margin-bottom: 24px;
  }

  .rezum-feature__stats-badge {
    min-height: 40px;
    margin-top: 16px;
    padding: 0 14px;
    font-size: 13px;
  }

  .rezum-feature__stats-top,
  .rezum-feature__stats-middle,
  .rezum-feature__stats-bottom {
    margin-top: 18px;
  }

  .rezum-feature__stats-card {
    padding: 8px;
    border-width: 2px;
  }

  .rezum-feature__stats-summary {
    margin-top: 16px;
    padding: 18px 14px;
    border-radius: 22px;
    font-size: 14px;
    line-height: 1.7;
  }
}
</style>
