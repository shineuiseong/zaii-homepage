<template>
  <section class="guide-contact section">
    <div class="container">
      <div class="guide-contact__head">
        <p class="guide-contact__eyebrow">CONTACT</p>
        <h2 class="guide-contact__title">예약 및 상담</h2>
      </div>

      <div class="guide-contact__panel">
        <div class="guide-contact__icon">
          <Icon name="lucide:phone-call" size="40" />
        </div>

        <div class="guide-contact__item">
          <span class="guide-contact__label">진료 문의</span>
          <a href="tel:0262075678" class="guide-contact__number">02-6207-5678</a>
        </div>

        <div class="guide-contact__divider" />

        <div class="guide-contact__item">
          <span class="guide-contact__label">상담 문의</span>
          <a href="tel:01026386034" class="guide-contact__number">010-2638-6034</a>
        </div>
      </div>

      <p class="guide-contact__flow">
        전화상담 <span>/</span> 상담원 연결 <span>/</span> 진료상담 후 예약 <span>/</span> 예약일에
        병원 방문
      </p>
    </div>
  </section>
</template>

<style scoped lang="scss">
.guide-contact {
  background: #fff;
}

.guide-contact__head {
  text-align: center;
  margin-bottom: 30px;
}

.guide-contact__eyebrow {
  margin: 0 0 10px;
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: $text-muted;
}

.guide-contact__title {
  margin: 0;
  font-size: 42px;
  line-height: 1.2;
  font-weight: 800;
  color: $text-main;
}

.guide-contact__panel {
  position: relative;
  display: grid;
  grid-template-columns: 96px 1fr 1px 1fr;
  align-items: center;
  gap: 28px;
  max-width: 1300px;
  margin: 0 auto;
  padding: 38px 44px;
  border-top: 4px solid $color-primary;
  border-bottom: 4px solid #d8e7f6;
  background: linear-gradient(180deg, #ffffff 0%, #f9fbff 100%);
}

.guide-contact__panel::before {
  content: '';
  position: absolute;
  left: 0;
  top: -4px;
  width: 4px;
  height: 60px;
  background: $color-primary;
}

.guide-contact__panel::after {
  content: '';
  position: absolute;
  right: 0;
  bottom: -4px;
  width: 4px;
  height: 60px;
  background: #d8e7f6;
}

.guide-contact__icon {
  width: 96px;
  height: 96px;
  border-radius: 50%;
  background: #f2f7fd;
  color: $color-primary;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #dfeaf6;
}

.guide-contact__item {
  display: flex;
  align-items: center;
  gap: 20px;
  min-width: 0;
}

.guide-contact__label {
  font-size: 18px;
  font-weight: 700;
  color: $text-main;
  white-space: nowrap;
}

.guide-contact__number {
  font-size: 48px;
  line-height: 1;
  font-weight: 900;
  letter-spacing: -0.03em;
  color: #6a86da;
  white-space: nowrap;
}

.guide-contact__divider {
  width: 1px;
  height: 46px;
  background: rgba(17, 24, 39, 0.16);
}

.guide-contact__flow {
  margin: 28px 0 0;
  text-align: center;
  font-size: 18px;
  line-height: 1.7;
  color: $text-sub;
  word-break: keep-all;

  span {
    display: inline-block;
    margin: 0 10px;
    color: $text-muted;
  }
}

@include desktop-down {
  .guide-contact__title {
    font-size: 36px;
  }

  .guide-contact__panel {
    grid-template-columns: 84px 1fr 1px 1fr;
    gap: 20px;
    padding: 30px 28px;
  }

  .guide-contact__icon {
    width: 84px;
    height: 84px;
  }

  .guide-contact__number {
    font-size: 38px;
  }
}

@include laptop-down {
  .guide-contact__title {
    font-size: 30px;
  }

  .guide-contact__panel {
    grid-template-columns: 1fr;
    gap: 18px;
    text-align: center;
    padding: 26px 20px;
  }

  .guide-contact__panel::before,
  .guide-contact__panel::after,
  .guide-contact__divider {
    display: none;
  }

  .guide-contact__icon {
    margin: 0 auto;
  }

  .guide-contact__item {
    justify-content: center;
    flex-direction: column;
    gap: 10px;
  }

  .guide-contact__number {
    font-size: 34px;
  }

  .guide-contact__flow {
    font-size: 16px;
  }
}

@include mobile {
  .guide-contact__title {
    font-size: 26px;
  }

  .guide-contact__number {
    font-size: 28px;
  }

  .guide-contact__label {
    font-size: 16px;
  }

  .guide-contact__flow {
    font-size: 14px;

    span {
      margin: 0 6px;
    }
  }
}
</style>
