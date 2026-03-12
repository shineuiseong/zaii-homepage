<template>
  <section class="urolift-start section">
    <div class="container">
      <div class="urolift-start__head">
        <p class="urolift-start__eyebrow">유로리프트의 시작</p>
        <h2 class="urolift-start__title">
          Zaii Urology Hospital
          <br />
          Start Of Urolift
        </h2>
      </div>

      <div class="urolift-start__body">
        <div class="urolift-start__image">
          <img src="/images/urolift/urolift-device.png" alt="유로리프트 기기" />
        </div>

        <div class="urolift-start__content">
          <h3 class="urolift-start__content-title">
            유로리프트(UroLift)는 NeoTract사(현 Teleflex)에 의해 2004년 개발
          </h3>

          <p>
            호주에서 공동개발자인 Dr. Ted Lamson, Dr. Josh Makower에 의해 개발이 시작되었고, 이후
            Dr. Peter Chin 등에 의해 초기 임상과 시술 경험이 축적되었습니다.
          </p>

          <p>
            미국에서는 2011년경부터 본격적으로 시행되었고, 2013년 미국 FDA 인증을 획득한 이후
            비침습적이면서도 비교적 빠른 회복이 가능한 전립선비대증 치료법으로 널리 알려졌습니다.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.urolift-start__head {
  margin-bottom: 28px;
}

.urolift-start__eyebrow {
  margin: 0 0 8px;
  font-size: 14px;
  color: $text-sub;
}

.urolift-start__title {
  margin: 0;
  font-size: 52px;
  line-height: 1.15;
  font-weight: 800;
  color: $color-primary;
  letter-spacing: -0.03em;
  word-break: keep-all;
}

.urolift-start__body {
  display: grid;
  grid-template-columns: 1.05fr 1fr;
  gap: 44px;
  align-items: center;
  padding-top: 24px;
  border-top: 1px solid #cfe2f6;
}

.urolift-start__image {
  img {
    display: block;
    width: 100%;
    max-width: 560px;
    margin: 0 auto;
    height: auto;
  }
}

.urolift-start__content-title {
  margin: 0 0 16px;
  font-size: 28px;
  line-height: 1.45;
  font-weight: 700;
  color: $text-main;
  word-break: keep-all;
}

.urolift-start__content p {
  margin: 0;
  font-size: 18px;
  line-height: 1.9;
  color: $text-sub;
  word-break: keep-all;
}

.urolift-start__content p + p {
  margin-top: 16px;
}

@include laptop-down {
  .urolift-start__title {
    font-size: 40px;
  }

  .urolift-start__body {
    grid-template-columns: 1fr;
    gap: 28px;
  }

  .urolift-start__content-title {
    font-size: 24px;
  }

  .urolift-start__content p {
    font-size: 16px;
  }
}

@include mobile {
  .urolift-start__title {
    font-size: 30px;
  }

  .urolift-start__body {
    gap: 20px;
    padding-top: 18px;
  }

  .urolift-start__content-title {
    font-size: 20px;
  }

  .urolift-start__content p {
    font-size: 15px;
    line-height: 1.75;
  }
}
</style>
