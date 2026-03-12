<template>
  <section class="clinic-section section">
    <div class="container">
      <div class="clinic-section__head">
        <p class="clinic-section__eyebrow">zaii urology hospital</p>
        <h2 class="clinic-section__title">자이비뇨의학과 병원 <span>Main Clinic</span></h2>
      </div>

      <div class="clinic-section__grid">
        <article class="clinic-card clinic-card--dark">
          <img src="/images/clinic-01.png" alt="전립선 비대증" class="clinic-card__image" />
          <div class="clinic-card__overlay">
            <p class="clinic-card__desc">
              전립선 비대증을<br />
              짧은 시간에 치료하다.
            </p>
            <h3 class="clinic-card__title">전립선 비대증</h3>
          </div>
        </article>

        <article class="clinic-card clinic-card--blue">
          <img src="/images/clinic-02.png" alt="전립선염" class="clinic-card__image" />
          <div class="clinic-card__overlay">
            <p class="clinic-card__desc">
              황산화요법의 결합<br />
              이제 치료의 속도가 빨라지다.
            </p>
            <h3 class="clinic-card__title">전립선염</h3>
          </div>
        </article>

        <article class="clinic-card clinic-card--dark">
          <img src="/images/clinic-03.png" alt="전립선암" class="clinic-card__image" />
          <div class="clinic-card__overlay">
            <p class="clinic-card__desc">
              정기적인 진단으로 조기발견<br />
              진단과 치료부분을 설명하다.
            </p>
            <h3 class="clinic-card__title">전립선암</h3>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.clinic-section {
  background: $color-white;
}

.clinic-section__head {
  margin-bottom: 36px;
  text-align: center;
}

.clinic-section__eyebrow {
  margin-bottom: 10px;
  font-size: 13px;
  letter-spacing: 0.22em;
  text-transform: lowercase;
  color: $text-muted;
}

.clinic-section__title {
  margin: 0;
  font-size: 44px;
  line-height: 1.2;
  font-weight: 800;
  color: $text-main;
  word-break: keep-all;

  span {
    color: $color-primary;
  }
}

.clinic-section__grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 14px;
}

.clinic-card {
  position: relative;
  overflow: hidden;
  min-height: 340px;
  background: #e9edf3;
  border-radius: 8px;
}

.clinic-card__image {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* 오버레이는 살짝만 */
.clinic-card::after {
  content: '';
  position: absolute;
  inset: 0;
  z-index: 1;
  background: linear-gradient(
    180deg,
    rgba(8, 18, 34, 0.18) 0%,
    rgba(8, 18, 34, 0.08) 32%,
    rgba(8, 18, 34, 0.1) 100%
  );
}

.clinic-card__overlay {
  position: absolute;
  inset: 0;
  z-index: 2;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 28px 24px;
}

.clinic-card__desc {
  margin: 0 0 12px;
  font-size: 16px;
  line-height: 1.55;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.92);
  text-shadow: 0 1px 8px rgba(0, 0, 0, 0.2);
  word-break: keep-all;
}

.clinic-card__title {
  margin: 0;
  font-size: 28px;
  line-height: 1.2;
  font-weight: 800;
  color: white;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.18);
  word-break: keep-all;
}

/* 카드별로 텍스트 위치 살짝 조정 */
.clinic-card:nth-child(1) .clinic-card__overlay {
  justify-content: flex-start;
  padding-top: 64px;
}

.clinic-card:nth-child(2) .clinic-card__overlay {
  justify-content: flex-start;
  padding-top: 60px;
}

.clinic-card:nth-child(3) .clinic-card__overlay {
  justify-content: flex-start;
  padding-top: 60px;
}

@include desktop-down {
  .clinic-section__title {
    font-size: 38px;
  }

  .clinic-card {
    min-height: 300px;
  }

  .clinic-card__overlay {
    padding: 24px 20px;
  }

  .clinic-card__desc {
    font-size: 15px;
  }

  .clinic-card__title {
    font-size: 24px;
  }
}

@include laptop-down {
  .clinic-section__head {
    margin-bottom: 28px;
  }

  .clinic-section__title {
    font-size: 32px;
  }

  .clinic-section__grid {
    grid-template-columns: 1fr;
    gap: 16px;
  }

  .clinic-card {
    min-height: 280px;
  }

  .clinic-card__overlay,
  .clinic-card:nth-child(1) .clinic-card__overlay,
  .clinic-card:nth-child(2) .clinic-card__overlay,
  .clinic-card:nth-child(3) .clinic-card__overlay {
    padding: 22px 18px;
    justify-content: flex-start;
  }

  .clinic-card__desc {
    margin-bottom: 10px;
    font-size: 14px;
    line-height: 1.45;
  }

  .clinic-card__title {
    font-size: 26px;
  }
}

@include mobile {
  .clinic-section__eyebrow {
    font-size: 12px;
    letter-spacing: 0.18em;
  }

  .clinic-section__title {
    font-size: 26px;
  }

  .clinic-card {
    min-height: 220px;
    border-radius: 6px;
  }

  .clinic-card__overlay {
    padding: 18px 16px;
  }

  .clinic-card__desc {
    margin-bottom: 8px;
    font-size: 13px;
  }

  .clinic-card__title {
    font-size: 24px;
  }
}
</style>
