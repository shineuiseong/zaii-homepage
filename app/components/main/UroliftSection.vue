<template>
  <section class="urolift-section section">
    <div class="container">
      <div class="urolift-section__head">
        <p class="urolift-section__eyebrow">zaii urology hospital</p>
        <h2 class="urolift-section__title">유로리프트 <span>시술 중심</span></h2>
        <p class="urolift-section__desc">
          자이비뇨의학과는 유로리프트 시술 경험을 바탕으로 환자 상태에 맞는 치료 방향을 제안합니다.
        </p>
      </div>

      <div class="urolift-section__media">
        <img
          src="/images/main/main_photo.webp"
          alt="유로리프트 시술 사례 이미지"
          class="urolift-section__image"
        />
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.urolift-section {
  background: $color-white;
}

.urolift-section__head {
  margin-bottom: 32px;
  text-align: center;
}

.urolift-section__eyebrow {
  margin-bottom: 12px;
  font-size: 14px;
  letter-spacing: 0.28em;
  text-transform: lowercase;
  color: $text-muted;
}

.urolift-section__title {
  margin: 0;
  font-size: 48px;
  line-height: 1.2;
  font-weight: 800;
  color: $text-main;

  span {
    color: $color-primary;
  }
}

.urolift-section__desc {
  max-width: 720px;
  margin: 16px auto 0;
  font-size: 17px;
  line-height: 1.7;
  color: $text-sub;
  word-break: keep-all;
}

.urolift-section__media {
  overflow: hidden;
  border-radius: 24px;
  background: $bg-subtle;
  box-shadow: $shadow-md;
}

.urolift-section__image {
  display: block;
  width: 100%;
  height: 640px;
  object-fit: cover;
  object-position: center center;
}

@include desktop-down {
  .urolift-section__title {
    font-size: 42px;
  }

  .urolift-section__image {
    height: 560px;
  }
}

@include laptop-down {
  .urolift-section__head {
    margin-bottom: 24px;
  }

  .urolift-section__title {
    font-size: 34px;
  }

  .urolift-section__desc {
    font-size: 16px;
  }

  .urolift-section__image {
    height: 460px;
    object-position: center center;
  }
}

@include mobile {
  .urolift-section__eyebrow {
    font-size: 12px;
    letter-spacing: 0.22em;
  }

  .urolift-section__title {
    font-size: 28px;
  }

  .urolift-section__desc {
    margin-top: 12px;
    font-size: 15px;
    line-height: 1.6;
  }

  .urolift-section__media {
    border-radius: 18px;
  }

  .urolift-section__image {
    height: 320px;
    object-position: center center;
  }
}
</style>
