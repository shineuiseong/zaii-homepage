<template>
  <section id="urolift-feature" class="urolift-feature section">
    <div class="container">
      <!-- 제목 -->
      <div class="urolift-feature__head">
        <p class="urolift-feature__eyebrow">ZAII UROLOGY HOSPITAL</p>
        <h2 class="urolift-feature__title">전립선결찰술(Urolift, 영구 임플란트)의 특징</h2>
      </div>

      <!-- 특징 카드 -->
      <div class="urolift-feature__card">
        <div class="urolift-feature__card-head">유로리프트 특징</div>

        <div class="urolift-feature__card-body">
          <p>
            조직 절제나 레이저로 태우는 기존 수술법과 달리 조직 손상이 안 되며 요실금, 요도협착 등
            부작용에 노출될 위험이 거의 없는 것으로 알려졌습니다.
          </p>

          <p class="accent">시술 후에는 막혔던 요도 내 공간이 확보돼 각종 배뇨장애가 개선됩니다.</p>

          <p>
            내시경 방식으로 진행되며, 전신마취나 국소마취하에 시술 시간은 약 15분 정도 소요됩니다.
            상황에 따라 1박2일 입원이 필요합니다. 수술 후 바로 일상생활이 가능하며 치료 후 바로
            효과를 기대할 수 있습니다.
          </p>
        </div>

        <div class="urolift-feature__bottom">
          <div class="urolift-feature__image">
            <img src="/images/urolift/urolift-implant.png" alt="Urolift Implant" />
          </div>

          <div class="urolift-feature__list">
            <div class="item">✓ 2013년 미국 FDA 정식 허가</div>
            <div class="item">✓ 2015년 에디슨상 수상 / 2015.5월 보건복지부 신의료기술 등재</div>
            <div class="item">
              ✓ 유럽 비뇨기과학회(EAU) 임상 데이터를 기반으로 하부요로증상 치료에 대해 (Level 1A)
              인정
            </div>
          </div>
        </div>
      </div>

      <!-- 학회 발표자료 -->
      <div class="urolift-feature__study">
        <div class="urolift-feature__study-head">
          <div class="urolift-feature__study-line" />
          <div class="urolift-feature__study-label">미국 비뇨기과 학회 발표자료</div>
          <div class="urolift-feature__study-line" />
        </div>

        <div class="urolift-feature__study-chart">
          <img src="/images/urolift/urolift-section-02-01.png" alt="학회 자료 그래프" />
        </div>

        <div class="urolift-feature__study-bottom">
          <img src="/images/urolift/urolift-section-02-02.png" alt="학회 비교 자료" />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.urolift-feature {
  background: #f2f2f4;
  padding: 100px 0;
}

/* 헤더 */
.urolift-feature__head {
  text-align: center;
  margin-bottom: 50px;
}

.urolift-feature__eyebrow {
  margin: 0 0 10px;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.3em;
  color: #8d8d94;
}

.urolift-feature__title {
  margin: 0;
  font-size: 44px;
  line-height: 1.25;
  font-weight: 800;
  color: #111827;
  word-break: keep-all;
}

/* 카드 */
.urolift-feature__card {
  background: #ffffff;
  border: 6px solid #dcdcdc;
  margin-bottom: 80px;
}

.urolift-feature__card-head {
  background: #5c8fc3;
  color: #ffffff;
  font-size: 28px;
  font-weight: 700;
  text-align: center;
  padding: 18px;
}

.urolift-feature__card-body {
  padding: 40px 60px;
  font-size: 20px;
  line-height: 1.7;
  color: #555;
  word-break: keep-all;

  p {
    margin: 0;
  }

  p + p {
    margin-top: 20px;
  }

  .accent {
    color: #3c7fc3;
    font-weight: 700;
  }
}

.urolift-feature__bottom {
  display: grid;
  grid-template-columns: 1fr 1fr;
  border-top: 1px solid #e4e4e4;
}

.urolift-feature__image {
  padding: 40px;
  background: #ffffff;

  img {
    display: block;
    width: 100%;
    height: auto;
  }
}

.urolift-feature__list {
  background: #dfe6ed;
  padding: 40px;
  font-size: 20px;
  line-height: 1.7;
  color: #111827;
  word-break: keep-all;

  .item {
    margin-bottom: 18px;
  }

  .item:last-child {
    margin-bottom: 0;
  }
}

/* 학회자료 */
.urolift-feature__study {
  text-align: center;
}

.urolift-feature__study-head {
  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: 40px;
}

.urolift-feature__study-line {
  flex: 1;
  height: 1px;
  background: #bfc5cf;
}

.urolift-feature__study-label {
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

.urolift-feature__study-chart {
  display: flex;
  justify-content: center;
  align-items: center;
}

.urolift-feature__study-chart img {
  display: block;
  width: 100%;
  max-width: 700px;
  height: auto;
}

.urolift-feature__study-bottom {
  margin-top: 40px;
}

.urolift-feature__study-bottom img {
  display: block;
  width: 100%;
  height: auto;
}

/* desktop-down */
@include desktop-down {
  .urolift-feature {
    padding: 84px 0;
  }

  .urolift-feature__head {
    margin-bottom: 40px;
  }

  .urolift-feature__title {
    font-size: 38px;
  }

  .urolift-feature__card {
    margin-bottom: 64px;
  }

  .urolift-feature__card-head {
    font-size: 24px;
    padding: 16px;
  }

  .urolift-feature__card-body {
    padding: 32px 36px;
    font-size: 18px;
  }

  .urolift-feature__image {
    padding: 28px;
  }

  .urolift-feature__list {
    padding: 30px 28px;
    font-size: 18px;

    .item {
      margin-bottom: 16px;
    }
  }

  .urolift-feature__study-head {
    margin-bottom: 32px;
  }

  .urolift-feature__study-label {
    min-width: 420px;
    font-size: 22px;
  }

  .urolift-feature__study-chart img {
    max-width: 640px;
  }

  .urolift-feature__study-bottom {
    margin-top: 32px;
  }
}

/* laptop-down */
@include laptop-down {
  .urolift-feature {
    padding: 72px 0;
  }

  .urolift-feature__head {
    margin-bottom: 32px;
  }

  .urolift-feature__title {
    font-size: 32px;
  }

  .urolift-feature__card {
    border-width: 4px;
    margin-bottom: 52px;
  }

  .urolift-feature__card-head {
    font-size: 22px;
    padding: 14px;
  }

  .urolift-feature__card-body {
    padding: 28px 24px;
    font-size: 17px;
    line-height: 1.65;
  }

  .urolift-feature__bottom {
    grid-template-columns: 1fr;
  }

  .urolift-feature__image {
    padding: 24px;
    border-bottom: 1px solid #e4e4e4;
  }

  .urolift-feature__list {
    padding: 26px 24px;
    font-size: 17px;
    line-height: 1.65;
  }

  .urolift-feature__study-head {
    gap: 14px;
    margin-bottom: 26px;
  }

  .urolift-feature__study-label {
    min-width: 280px;
    padding: 12px 18px;
    border-width: 4px;
    font-size: 18px;
  }

  .urolift-feature__study-chart img {
    max-width: 100%;
  }

  .urolift-feature__study-bottom {
    margin-top: 26px;
  }
}

/* mobile */
@include mobile {
  .urolift-feature {
    padding: 52px 0;
  }

  .urolift-feature__head {
    margin-bottom: 24px;
  }

  .urolift-feature__eyebrow {
    font-size: 10px;
    letter-spacing: 0.22em;
  }

  .urolift-feature__title {
    font-size: 26px;
    line-height: 1.35;
  }

  .urolift-feature__card {
    border-width: 3px;
    margin-bottom: 34px;
  }

  .urolift-feature__card-head {
    font-size: 18px;
    padding: 12px;
  }

  .urolift-feature__card-body {
    padding: 20px 16px;
    font-size: 14px;
    line-height: 1.7;

    p + p {
      margin-top: 14px;
    }
  }

  .urolift-feature__image {
    padding: 16px 12px;
  }

  .urolift-feature__image img {
    width: 100%;
    max-width: none;
  }

  .urolift-feature__list {
    padding: 18px 16px;
    font-size: 14px;
    line-height: 1.75;

    .item {
      margin-bottom: 14px;
    }
  }

  .urolift-feature__study-head {
    gap: 10px;
    margin-bottom: 18px;
  }

  .urolift-feature__study-label {
    min-width: 0;
    width: auto;
    padding: 10px 14px;
    border-width: 3px;
    font-size: 14px;
  }

  .urolift-feature__study-chart {
    justify-content: center;
  }

  .urolift-feature__study-chart img {
    width: 100%;
    max-width: none;
  }

  .urolift-feature__study-bottom {
    margin-top: 18px;
  }

  .urolift-feature__study-bottom img {
    width: 100%;
    max-width: none;
  }
}
</style>
