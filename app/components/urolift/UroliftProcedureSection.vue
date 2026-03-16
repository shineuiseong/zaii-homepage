<template>
  <section id="urolift-procedure" class="urolift-procedure section">
    <div class="container">
      <div class="urolift-procedure__head">
        <p class="urolift-procedure__eyebrow">ZAII UROLOGY HOSPITAL</p>
        <h2 class="urolift-procedure__title">유로리프트 시술과정</h2>
      </div>

      <div class="urolift-procedure__grid">
        <article v-for="item in steps" :key="item.step" class="urolift-procedure__card">
          <div class="urolift-procedure__card-head">
            <span>STEP {{ item.step }}</span>
          </div>

          <div class="urolift-procedure__card-body">
            <img :src="item.image" :alt="`유로리프트 시술과정 ${item.step}`" />
          </div>
        </article>
      </div>

      <div class="urolift-procedure__video">
        <div class="urolift-procedure__video-frame">
          <iframe
            src="https://www.youtube.com/embed/MaYzfSki_sk?start=2"
            title="유로리프트 시술과정 영상"
            loading="lazy"
            referrerpolicy="strict-origin-when-cross-origin"
            allow="
              accelerometer;
              autoplay;
              clipboard-write;
              encrypted-media;
              gyroscope;
              picture-in-picture;
              web-share;
            "
            allowfullscreen
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const steps = [
  { step: '01', image: '/images/urolift/procedure-01.png' },
  { step: '02', image: '/images/urolift/procedure-02.png' },
  { step: '03', image: '/images/urolift/procedure-03.png' },
  { step: '04', image: '/images/urolift/procedure-04.png' }
]
</script>

<style scoped lang="scss">
.urolift-procedure {
  background: #efeff1;
  padding-top: 84px;
  padding-bottom: 96px;
}

.urolift-procedure__head {
  margin-bottom: 40px;
  text-align: center;
}

.urolift-procedure__eyebrow {
  margin: 0 0 10px;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.28em;
  color: #8b8c92;
}

.urolift-procedure__title {
  margin: 0;
  font-size: 56px;
  line-height: 1.15;
  font-weight: 800;
  letter-spacing: -0.03em;
  color: #101114;
  word-break: keep-all;
}

.urolift-procedure__grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 18px;
  margin-bottom: 38px;
}

.urolift-procedure__card {
  background: #ffffff;
  border: 6px solid #dddddf;
}

.urolift-procedure__card-head {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 78px;
  padding: 12px 14px;
  background: linear-gradient(180deg, #6d8ed8 0%, #6282cf 100%);
  color: #ffffff;

  span {
    font-size: 26px;
    line-height: 1;
    font-weight: 800;
    letter-spacing: -0.02em;
  }
}

.urolift-procedure__card-body {
  padding: 18px 16px 16px;
  background: #ffffff;

  img {
    display: block;
    width: 100%;
    height: auto;
    object-fit: contain;
  }
}

.urolift-procedure__video {
  background: #ffffff;
  border: 6px solid #dddddf;
  overflow: hidden;
}

.urolift-procedure__video-frame {
  position: relative;
  width: 100%;
  aspect-ratio: 16 / 9;
  background: #000;

  iframe {
    position: absolute;
    inset: 0;
    display: block;
    width: 100%;
    height: 100%;
    border: 0;
  }
}

@include desktop-down {
  .urolift-procedure {
    padding-top: 72px;
    padding-bottom: 84px;
  }

  .urolift-procedure__title {
    font-size: 46px;
  }

  .urolift-procedure__grid {
    gap: 16px;
    margin-bottom: 30px;
  }

  .urolift-procedure__card {
    border-width: 5px;
  }

  .urolift-procedure__card-head {
    min-height: 68px;

    span {
      font-size: 22px;
    }
  }

  .urolift-procedure__card-body {
    padding: 14px 12px;
  }

  .urolift-procedure__video {
    border-width: 5px;
  }
}

@include laptop-down {
  .urolift-procedure {
    padding-top: 60px;
    padding-bottom: 72px;
  }

  .urolift-procedure__head {
    margin-bottom: 28px;
  }

  .urolift-procedure__title {
    font-size: 36px;
  }

  .urolift-procedure__grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 14px;
    margin-bottom: 24px;
  }

  .urolift-procedure__card {
    border-width: 4px;
  }

  .urolift-procedure__card-head {
    min-height: 60px;
    padding: 10px 12px;

    span {
      font-size: 20px;
    }
  }

  .urolift-procedure__card-body {
    padding: 12px 10px;
  }

  .urolift-procedure__video {
    border-width: 4px;
  }
}

@include mobile {
  .urolift-procedure {
    padding-top: 48px;
    padding-bottom: 56px;
  }

  .urolift-procedure__eyebrow {
    font-size: 10px;
    letter-spacing: 0.22em;
  }

  .urolift-procedure__title {
    font-size: 28px;
    line-height: 1.22;
  }

  .urolift-procedure__head {
    margin-bottom: 22px;
  }

  .urolift-procedure__grid {
    grid-template-columns: 1fr 1fr;
    gap: 10px;
    margin-bottom: 18px;
  }

  .urolift-procedure__card {
    border-width: 3px;
  }

  .urolift-procedure__card-head {
    min-height: 48px;
    padding: 8px 10px;

    span {
      font-size: 16px;
    }
  }

  .urolift-procedure__card-body {
    padding: 10px 8px 8px;
  }

  .urolift-procedure__video {
    border-width: 3px;
  }

  .urolift-procedure__video-frame {
    aspect-ratio: 16 / 10;
  }
}
</style>
