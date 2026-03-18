<template>
  <section id="urolift-result" class="urolift-result section">
    <div class="container">
      <!-- 제목 -->
      <div class="urolift-result__head">
        <p class="urolift-result__eyebrow">ZAII UROLOGY HOSPITAL</p>
        <h2 class="urolift-result__title">유로리프트 시술 전후</h2>
      </div>

      <!-- Before / After -->
      <div class="urolift-result__compare">
        <div class="urolift-result__item">
          <div class="circle">
            <img src="/images/urolift/procedure-before.webp" alt="Before" />
          </div>
          <div class="label">Before</div>
        </div>

        <div class="arrow">→</div>

        <div class="urolift-result__item">
          <div class="circle">
            <img src="/images/urolift/procedure-after.webp" alt="After" />
          </div>
          <div class="label">After</div>
        </div>
      </div>

      <p class="urolift-result__desc">
        유로리프트 시술을 하게 되면 좁아진 요도관이 넓어져 소변의 문제가 해결됩니다.<br />
        <span>전립선의 문제도 같이 해결이 됩니다.</span>
      </p>

      <!-- 학회자료 -->
      <div class="urolift-result__study">
        <div class="urolift-result__study-head">
          <div class="urolift-result__study-line" />
          <div class="urolift-result__study-label">미국 비뇨기과 학회 발표자료</div>
          <div class="urolift-result__study-line" />
        </div>

        <div class="study-image">
          <img src="/images/urolift/urolift-section-05-01.webp" alt="미국 비뇨기과 학회 발표자료" />
        </div>
      </div>

      <!-- Founder -->
      <div class="urolift-result__founder">
        <div class="founder-item">
          <img
            src="/images/urolift/urolift-founder-01.webp"
            alt="유로리프트 장비 개발자 Dr. Chin"
          />
          <p>유로리프트 시술 장비를 개발한 Dr. chin과 함께</p>
        </div>

        <div class="founder-item">
          <img
            src="/images/urolift/urolift-founder-02.webp"
            alt="초기에 제작된 유로리프트 시술 장비"
          />
          <p>초기에 제작된 유로리프트 시술 장비</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.urolift-result {
  background: #efeff1;
  padding: 100px 0;
}

/* 헤더 */
.urolift-result__head {
  text-align: center;
  margin-bottom: 50px;
}

.urolift-result__eyebrow {
  margin: 0 0 10px;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.28em;
  color: #8b8c92;
}

.urolift-result__title {
  margin: 0;
  font-size: 54px;
  line-height: 1.2;
  font-weight: 800;
  color: #111827;
}

/* before after */
.urolift-result__compare {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 40px;
  margin-bottom: 30px;
}

.urolift-result__item {
  text-align: center;
}

.circle {
  width: 300px;
  height: 300px;
  border-radius: 50%;
  overflow: hidden;
  border: 6px solid #e3a300;
  background: #fff;
}

.circle img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.label {
  margin-top: 12px;
  background: #3a1a0d;
  color: #ffffff;
  padding: 6px 18px;
  display: inline-block;
  border-radius: 20px;
  font-size: 16px;
  font-weight: 700;
}

.arrow {
  font-size: 48px;
  color: #2d3a55;
  line-height: 1;
}

/* 설명 */
.urolift-result__desc {
  text-align: center;
  font-size: 22px;
  line-height: 1.6;
  margin: 0 0 70px;
  color: #4b4b51;
  word-break: keep-all;

  span {
    color: #3c7fc3;
    font-weight: 700;
  }
}

/* 학회자료 */
.urolift-result__study {
  margin-bottom: 80px;
}

.urolift-result__study-head {
  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: 34px;
}

.urolift-result__study-line {
  flex: 1;
  height: 1px;
  background: #bfc5cf;
}

.urolift-result__study-label {
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

.study-image {
  display: flex;
  justify-content: center;
}

.study-image img {
  display: block;
  width: 100%;
  max-width: 900px;
  border: 2px solid #000;
  background-color: #ffffff;
}

/* founder */
.urolift-result__founder {
  background: #5c5c5c;
  padding: 60px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
}

.founder-item {
  text-align: center;
}

.founder-item img {
  display: block;
  width: 100%;
  height: auto;
  border: 1px solid rgba(255, 255, 255, 0.45);
}

.founder-item p {
  margin: 14px 0 0;
  color: #ffffff;
  font-size: 20px;
  line-height: 1.5;
  word-break: keep-all;
}

/* desktop-down */
@include desktop-down {
  .urolift-result {
    padding: 84px 0;
  }

  .urolift-result__head {
    margin-bottom: 40px;
  }

  .urolift-result__title {
    font-size: 46px;
  }

  .circle {
    width: 260px;
    height: 260px;
  }

  .urolift-result__desc {
    font-size: 19px;
    margin-bottom: 56px;
  }

  .urolift-result__study {
    margin-bottom: 64px;
  }

  .urolift-result__study-label {
    min-width: 420px;
    font-size: 22px;
  }

  .urolift-result__founder {
    padding: 44px;
    gap: 28px;
  }

  .founder-item p {
    font-size: 18px;
  }
}

/* laptop-down */
@include laptop-down {
  .urolift-result {
    padding: 72px 0;
  }

  .urolift-result__head {
    margin-bottom: 32px;
  }

  .urolift-result__title {
    font-size: 36px;
  }

  .urolift-result__compare {
    gap: 24px;
  }

  .circle {
    width: 220px;
    height: 220px;
    border-width: 5px;
  }

  .arrow {
    font-size: 38px;
  }

  .urolift-result__desc {
    font-size: 17px;
    margin-bottom: 48px;
  }

  .urolift-result__study-head {
    gap: 14px;
    margin-bottom: 24px;
  }

  .urolift-result__study-label {
    min-width: 280px;
    padding: 12px 18px;
    border-width: 4px;
    font-size: 18px;
  }

  .urolift-result__founder {
    grid-template-columns: 1fr;
    padding: 32px 24px;
    gap: 24px;
  }

  .founder-item p {
    font-size: 17px;
  }
}

/* mobile */
@include mobile {
  .urolift-result {
    padding: 52px 0;
  }

  .urolift-result__head {
    margin-bottom: 24px;
  }

  .urolift-result__eyebrow {
    font-size: 10px;
    letter-spacing: 0.22em;
  }

  .urolift-result__title {
    font-size: 30px;
    line-height: 1.25;
  }

  .urolift-result__compare {
    flex-direction: column;
    gap: 16px;
    margin-bottom: 22px;
  }

  .circle {
    width: 220px;
    height: 220px;
    border-width: 4px;
  }

  .label {
    font-size: 14px;
    padding: 6px 16px;
  }

  .arrow {
    transform: rotate(90deg);
    font-size: 34px;
  }

  .urolift-result__desc {
    font-size: 15px;
    line-height: 1.7;
    margin-bottom: 34px;

    br {
      display: none;
    }
  }

  .urolift-result__study {
    margin-bottom: 40px;
  }

  .urolift-result__study-head {
    gap: 10px;
    margin-bottom: 18px;
  }

  .urolift-result__study-label {
    min-width: 0;
    width: auto;
    padding: 10px 14px;
    border-width: 3px;
    font-size: 14px;
  }

  .study-image img {
    border-width: 1px;
  }

  .urolift-result__founder {
    padding: 22px 16px;
    gap: 20px;
  }

  .founder-item p {
    font-size: 15px;
    line-height: 1.6;
  }
}
</style>
