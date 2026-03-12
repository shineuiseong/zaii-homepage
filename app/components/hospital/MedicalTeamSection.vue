<template>
  <section class="medical-team section">
    <div class="medical-team__bg" />
    <div class="container medical-team__inner">
      <div class="medical-team__head">
        <p class="medical-team__eyebrow">MEDICAL TEAM</p>
        <h2 class="medical-team__title">경험과 전문성을 갖춘 의료진</h2>
        <p class="medical-team__desc">
          자이비뇨의학과병원은 전립선 질환을 중심으로 축적된 임상 경험을 바탕으로 환자에게 더 정교한
          진료 방향을 제시합니다.
        </p>
      </div>

      <!-- 병원장 -->
      <article class="doctor-card doctor-card--director">
        <div class="doctor-card__media">
          <div class="doctor-card__image-wrap">
            <img src="/images/director-profile.png" alt="병원장 변재상" />
          </div>
        </div>

        <div class="doctor-card__body">
          <div class="doctor-card__top">
            <p class="doctor-card__role">병원장</p>
            <h3 class="doctor-card__name">변재상</h3>
            <p class="doctor-card__summary">
              전립선 질환 치료에 오랜 시간 집중해온 경험을 바탕으로, 환자 상태에 맞는 시술 및 진료
              방향을 직접 설계합니다.
            </p>
          </div>

          <div class="doctor-card__section">
            <span class="doctor-card__label">약력</span>
            <ul class="doctor-card__list">
              <li>전) 연세플러스비뇨기과 대표원장 (1998 ~ 2006)</li>
              <li>전) 자이비뇨기과병원 병원장 (2007 ~ 2014)</li>
              <li>전) 나은병원 전립선센터장, 비뇨기과 과장 (2016 ~ 2017)</li>
              <li>전) 강남베드로병원 전립선센터장, 비뇨기과 원장 (2018 ~ 2019)</li>
              <li>전) 자이비뇨의학과 원장 (2020 ~ 2022)</li>
              <li>현) 자이비뇨의학과병원 병원장 (2022 ~ 현재)</li>
            </ul>
          </div>
        </div>
      </article>

      <!-- 부원장/원장 -->
      <article class="doctor-card doctor-card--vice">
        <div class="doctor-card__body">
          <div class="doctor-card__top">
            <p class="doctor-card__role">원장</p>
            <h3 class="doctor-card__name">이홍우</h3>
            <p class="doctor-card__summary">
              비뇨의학과 전반의 폭넓은 진료 경험을 바탕으로 전립선질환, 배뇨장애, 요실금 및 기타
              비뇨기계 질환을 함께 진료합니다.
            </p>
          </div>

          <div class="doctor-card__section">
            <span class="doctor-card__label">진료과목</span>
            <ul class="doctor-card__list doctor-card__list--grid">
              <li>전립선질환 (전립선비대증 / 전립선염)</li>
              <li>요로결석</li>
              <li>요실금 (과민성방광)</li>
              <li>배뇨장애질환</li>
              <li>방광염 등 기타 비뇨기계 질환</li>
            </ul>
          </div>

          <div class="doctor-card__section">
            <span class="doctor-card__label">학력 및 경력</span>
            <ul class="doctor-card__list">
              <li>가톨릭대학교 의과대학 졸업</li>
              <li>가톨릭의대 성모병원 인턴, 레지던트 수료</li>
              <li>가톨릭대학교 의과대학 석사, 의학박사</li>
              <li>가톨릭의대 성모병원 조교수, 부교수</li>
              <li>청주 유로센터 비뇨기과</li>
              <li>미국 University of Virginia Health Science Center 전립선 연수</li>
              <li>대한비뇨기과학회 이사 / 정회원</li>
              <li>대한전립선학회 이사 / 정회원</li>
              <li>대한배뇨장애요실금학회 정회원</li>
              <li>대한비뇨기종양학회 정회원</li>
            </ul>
          </div>
        </div>

        <div class="doctor-card__media">
          <div class="doctor-card__image-wrap">
            <img src="/images/vice-director-profile.png" alt="원장 이홍우" />
          </div>
        </div>
      </article>
    </div>
  </section>
</template>

<style scoped lang="scss">
.medical-team {
  position: relative;
  overflow: hidden;
  background: linear-gradient(180deg, #ffffff 0%, #f7fbff 100%);
}

.medical-team__bg {
  position: absolute;
  inset: 0;
  pointer-events: none;
  background:
    radial-gradient(circle at top left, rgba(84, 162, 232, 0.08) 0%, transparent 34%),
    radial-gradient(circle at bottom right, rgba(47, 125, 225, 0.06) 0%, transparent 30%);
}

.medical-team__inner {
  position: relative;
  z-index: 1;
}

.medical-team__head {
  max-width: 860px;
  margin: 0 auto 56px;
  text-align: center;
}

.medical-team__eyebrow {
  margin: 0 0 10px;
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: $text-muted;
}

.medical-team__title {
  margin: 0;
  font-size: 44px;
  line-height: 1.25;
  font-weight: 800;
  color: $text-main;
  word-break: keep-all;
}

.medical-team__desc {
  margin: 16px auto 0;
  max-width: 760px;
  font-size: 18px;
  line-height: 1.85;
  color: $text-sub;
  word-break: keep-all;
}

.doctor-card {
  display: grid;
  grid-template-columns: minmax(0, 0.92fr) minmax(0, 1.08fr);
  gap: 44px;
  align-items: center;
  padding: 34px;
  border: 1px solid #e4edf6;
  border-radius: 32px;
  background: rgba(255, 255, 255, 0.86);
  box-shadow: 0 20px 48px rgba(15, 23, 42, 0.06);
  backdrop-filter: blur(8px);
}

.doctor-card + .doctor-card {
  margin-top: 36px;
}

.doctor-card--vice {
  grid-template-columns: minmax(0, 1.08fr) minmax(0, 0.92fr);
}

.doctor-card__media {
  min-width: 0;
}

.doctor-card__image-wrap {
  position: relative;
  overflow: hidden;
  border-radius: 26px;
  background: #eef4fb;
  box-shadow: 0 18px 40px rgba(15, 23, 42, 0.08);

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(180deg, rgba(255, 255, 255, 0) 58%, rgba(10, 24, 42, 0.06) 100%);
    pointer-events: none;
  }

  img {
    display: block;
    width: 100%;
    height: auto;
    aspect-ratio: 4 / 5;
    object-fit: cover;
  }
}

.doctor-card__body {
  min-width: 0;
}

.doctor-card__top {
  margin-bottom: 28px;
}

.doctor-card__role {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  margin: 0 0 10px;
  font-size: 15px;
  font-weight: 700;
  color: $text-sub;

  &::before {
    content: '';
    display: inline-block;
    width: 4px;
    height: 28px;
    border-radius: 999px;
    background: $color-primary;
  }
}

.doctor-card__name {
  margin: 0;
  font-size: 56px;
  line-height: 1.08;
  font-weight: 900;
  letter-spacing: -0.04em;
  color: $text-main;
  word-break: keep-all;
}

.doctor-card__summary {
  margin: 18px 0 0;
  font-size: 18px;
  line-height: 1.85;
  color: $text-sub;
  word-break: keep-all;
}

.doctor-card__section + .doctor-card__section {
  margin-top: 22px;
}

.doctor-card__label {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 40px;
  padding: 0 16px;
  border-radius: 999px;
  background: #f4f8fc;
  border: 1px solid #d8e5f3;
  font-size: 14px;
  font-weight: 800;
  color: $text-main;
}

.doctor-card__list {
  margin: 14px 0 0;
  padding: 0;
  list-style: none;
  display: grid;
  gap: 10px;
}

.doctor-card__list li {
  position: relative;
  padding-left: 18px;
  font-size: 17px;
  line-height: 1.75;
  color: $text-sub;
  word-break: keep-all;

  &::before {
    content: '';
    position: absolute;
    top: 11px;
    left: 0;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: #7bb7ee;
  }
}

.doctor-card__list--grid {
  grid-template-columns: repeat(2, minmax(0, 1fr));
  column-gap: 18px;
}

@include desktop-down {
  .medical-team__title {
    font-size: 38px;
  }

  .medical-team__desc {
    font-size: 17px;
  }

  .doctor-card {
    gap: 32px;
    padding: 28px;
  }

  .doctor-card__name {
    font-size: 46px;
  }

  .doctor-card__summary {
    font-size: 17px;
  }

  .doctor-card__list li {
    font-size: 16px;
  }
}

@include laptop-down {
  .medical-team__head {
    margin-bottom: 40px;
  }

  .medical-team__title {
    font-size: 32px;
  }

  .medical-team__desc {
    font-size: 16px;
    line-height: 1.8;
  }

  .doctor-card,
  .doctor-card--vice {
    grid-template-columns: 1fr;
  }

  .doctor-card--vice .doctor-card__media {
    order: -1;
  }

  .doctor-card__image-wrap img {
    aspect-ratio: 4 / 4.8;
  }

  .doctor-card__name {
    font-size: 40px;
  }

  .doctor-card__summary {
    font-size: 16px;
    line-height: 1.8;
  }

  .doctor-card__list--grid {
    grid-template-columns: 1fr;
  }
}

@include mobile {
  .medical-team__eyebrow {
    font-size: 12px;
    letter-spacing: 0.14em;
  }

  .medical-team__title {
    font-size: 28px;
  }

  .medical-team__desc {
    font-size: 15px;
    line-height: 1.75;
  }

  .doctor-card {
    gap: 24px;
    padding: 18px;
    border-radius: 22px;
  }

  .doctor-card + .doctor-card {
    margin-top: 24px;
  }

  .doctor-card__image-wrap {
    border-radius: 18px;
  }

  .doctor-card__role {
    font-size: 14px;

    &::before {
      height: 22px;
    }
  }

  .doctor-card__name {
    font-size: 32px;
  }

  .doctor-card__summary {
    margin-top: 14px;
    font-size: 15px;
    line-height: 1.75;
  }

  .doctor-card__top {
    margin-bottom: 20px;
  }

  .doctor-card__label {
    min-height: 36px;
    padding: 0 14px;
    font-size: 13px;
  }

  .doctor-card__list {
    gap: 8px;
  }

  .doctor-card__list li {
    padding-left: 16px;
    font-size: 14px;
    line-height: 1.7;

    &::before {
      top: 10px;
      width: 5px;
      height: 5px;
    }
  }
}
</style>
