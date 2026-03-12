<template>
  <section class="location-map section">
    <div class="container">
      <div class="location-map__head">
        <p class="location-map__eyebrow">ZAII UROLOGY HOSPITAL</p>
        <h2 class="location-map__title">오시는 길</h2>
      </div>

      <div class="location-map__frame">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3165.2227205608992!2d127.01909511172164!3d37.50266487193854!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca39016e59f8b%3A0xe1773d8de4266fb7!2z7J6Q7J2067mE64eo7J2Y7ZWZ6rO867OR7JuQ!5e0!3m2!1sko!2skr!4v1773293209805!5m2!1sko!2skr"
          width="100%"
          height="100%"
          style="border: 0"
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        />
      </div>

      <div class="location-map__info">
        <div class="location-map__address">
          <Icon name="lucide:map-pin" size="34" />
          <p>
            서울특별시 서초구 서초동 1302-2 대지스포츠프라자 4층
            <span>(서울특별시 서초구 서운로 220)</span>
          </p>
        </div>

        <div class="location-map__contacts">
          <a href="tel:0262075678" class="location-map__contact">
            <strong>진료 문의</strong>
            <span>02-6207-5678</span>
          </a>

          <div class="location-map__divider" />

          <a href="tel:01026386034" class="location-map__contact">
            <strong>상담 문의</strong>
            <span>010-2638-6034</span>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.location-map {
  background: #fff;
}

.location-map__head {
  text-align: center;
  margin-bottom: 34px;
}

.location-map__eyebrow {
  margin: 0 0 8px;
  font-size: 13px;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: $text-muted;
}

.location-map__title {
  margin: 0;
  font-size: 40px;
  font-weight: 800;
  color: $text-main;
}

.location-map__frame {
  overflow: hidden;
  border: 1px solid #dbe5ef;
  background: #eef3f8;
  box-shadow: 0 18px 40px rgba(15, 23, 42, 0.06);

  iframe {
    display: block;
    width: 100%;
    min-height: 560px;
  }
}

.location-map__info {
  background: #3f3f42;
  color: #fff;
  padding: 28px 34px 30px;
}

.location-map__address {
  display: flex;
  align-items: center;
  gap: 16px;

  .iconify {
    flex: 0 0 auto;
    color: #b8f2ff;
  }

  p {
    margin: 0;
    font-size: 18px;
    line-height: 1.7;
    font-weight: 600;
    color: #ffffff;
    word-break: keep-all;
  }

  span {
    color: rgba(255, 255, 255, 0.82);
  }
}

.location-map__contacts {
  display: flex;
  align-items: center;
  gap: 26px;
  margin-top: 18px;
}

.location-map__contact {
  display: inline-flex;
  align-items: baseline;
  gap: 16px;
  color: #fff;
  word-break: keep-all;

  strong {
    font-size: 24px;
    font-weight: 800;
    color: #b8f2ff;
  }

  span {
    font-size: 34px;
    font-weight: 900;
    letter-spacing: -0.03em;
    color: #ffffff;
  }
}

.location-map__divider {
  width: 1px;
  height: 36px;
  background: rgba(255, 255, 255, 0.24);
}

@include desktop-down {
  .location-map__title {
    font-size: 34px;
  }

  .location-map__frame iframe {
    min-height: 500px;
  }

  .location-map__contact strong {
    font-size: 20px;
  }

  .location-map__contact span {
    font-size: 28px;
  }
}

@include laptop-down {
  .location-map__title {
    font-size: 30px;
  }

  .location-map__frame iframe {
    min-height: 420px;
  }

  .location-map__info {
    padding: 24px 20px;
  }

  .location-map__address {
    align-items: flex-start;

    p {
      font-size: 16px;
    }
  }

  .location-map__contacts {
    flex-direction: column;
    align-items: flex-start;
    gap: 14px;
  }

  .location-map__divider {
    display: none;
  }

  .location-map__contact strong {
    font-size: 18px;
  }

  .location-map__contact span {
    font-size: 24px;
  }
}

@include mobile {
  .location-map__head {
    margin-bottom: 22px;
  }

  .location-map__eyebrow {
    font-size: 12px;
    letter-spacing: 0.14em;
  }

  .location-map__title {
    font-size: 26px;
  }

  .location-map__frame iframe {
    min-height: 320px;
  }

  .location-map__address {
    gap: 12px;

    .iconify {
      font-size: 28px;
    }

    p {
      font-size: 14px;
      line-height: 1.7;
    }
  }

  .location-map__contacts {
    margin-top: 14px;
  }

  .location-map__contact {
    flex-direction: column;
    align-items: flex-start;
    gap: 4px;

    strong {
      font-size: 16px;
    }

    span {
      font-size: 20px;
    }
  }
}
</style>
