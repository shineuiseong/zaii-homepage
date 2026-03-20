<template>
  <section id="filler-intro" class="filler-intro section">
    <div class="container">
      <!-- 헤드 -->
      <div class="filler-intro__head">
        <p class="filler-intro__top">성기 크기의 불만을 해소할 심플한 방법</p>

        <h2 class="filler-intro__title">매트릭스필러로 고민 해소</h2>
      </div>

      <!-- 설명 -->
      <div class="filler-intro__desc">
        <p class="filler-intro__lead">남성의 음경왜소증은 단순한 문제가 아닙니다.</p>

        <p>
          기능적으로 큰 불편이 없더라도, 심리적인 만족도가 낮아지면서 자신감 저하와 스트레스로
          이어질 수 있습니다.
        </p>

        <p>
          이러한 고민을 해결하기 위한 방법으로 최근 주목받고 있는 것이 바로
          <strong>필러를 이용한 음경확대술</strong>입니다.
        </p>

        <p>
          시술 시간이 약 5분 정도로 짧고, 시술 직후 일상생활이 가능하며 자연스러운 볼륨감을 형성하는
          것이 특징입니다.
        </p>
      </div>

      <!-- 핵심 포인트 3개 -->
      <div class="filler-intro__points">
        <div class="filler-intro__point">
          <div class="circle">
            <span>짧은<br />시술시간</span>
          </div>
        </div>

        <div class="filler-intro__point">
          <div class="circle">
            <span>시술 직후<br />일상생활 가능</span>
          </div>
        </div>

        <div class="filler-intro__point">
          <div class="circle">
            <span>만족도<br />높은 시술</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.filler-intro {
  background: #ffffff;
  padding: 100px 0 110px;
}

/* 헤드 */
.filler-intro__head {
  text-align: center;
  margin-bottom: 40px;
}

.filler-intro__top {
  margin: 0 0 14px;
  font-size: 18px;
  font-weight: 600;
  color: #6b7280;
}

.filler-intro__title {
  margin: 0;
  font-size: 44px;
  font-weight: 800;
  letter-spacing: -0.02em;
  color: #111827;
}

/* 설명 */
.filler-intro__desc {
  max-width: 880px;
  margin: 0 auto 70px;
  text-align: center;

  p {
    margin: 0;
    font-size: 18px;
    line-height: 1.8;
    color: #4b5563;
    word-break: keep-all;
  }

  p + p {
    margin-top: 18px;
  }

  strong {
    color: #2563eb;
    font-weight: 700;
  }
}

.filler-intro__lead {
  font-size: 20px !important;
  font-weight: 700 !important;
  color: #1f2937 !important;
}

/* 포인트 */
.filler-intro__points {
  display: flex;
  justify-content: center;
  gap: 48px;
}

/* 원형 */
.circle {
  width: 180px;
  height: 180px;
  border-radius: 50%;
  background: linear-gradient(135deg, #6fa8ff, #4f7edc);
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 20px;

  span {
    color: #fff;
    font-size: 20px;
    font-weight: 700;
    line-height: 1.5;
  }
}

/* 반응형 */
@include laptop-down {
  .filler-intro {
    padding: 70px 0;
  }

  .filler-intro__title {
    font-size: 34px;
  }

  .filler-intro__desc {
    margin-bottom: 50px;

    p {
      font-size: 16px;
    }
  }

  .filler-intro__points {
    gap: 24px;
  }

  .circle {
    width: 140px;
    height: 140px;

    span {
      font-size: 16px;
    }
  }
}

@include mobile {
  .filler-intro__points {
    flex-direction: column;
    align-items: center;
  }

  .circle {
    width: 120px;
    height: 120px;

    span {
      font-size: 14px;
    }
  }
}
</style>
