<template>
  <section id="urolift-process" class="urolift-process section">
    <div class="container">
      <div class="urolift-process__head">
        <p class="urolift-process__eyebrow">ZAII UROLOGY HOSPITAL</p>
        <h2 class="urolift-process__title">전립선 비대증이 생기는 과정</h2>
      </div>

      <div class="urolift-process__grid urolift-process__grid--top">
        <article v-for="item in topSteps" :key="item.step" class="urolift-process__card">
          <div class="urolift-process__card-head">
            <span>STEP {{ item.step }}</span>
          </div>

          <div class="urolift-process__card-body">
            <div class="urolift-process__image-frame">
              <img
                :src="item.image"
                :alt="`전립선 비대증 과정 ${item.step}`"
                class="urolift-process__image"
              />
            </div>
          </div>
        </article>
      </div>

      <div class="urolift-process__grid urolift-process__grid--bottom">
        <article v-for="item in bottomSteps" :key="item.step" class="urolift-process__card">
          <div class="urolift-process__card-head">
            <span>STEP {{ item.step }}</span>
          </div>

          <div class="urolift-process__card-body urolift-process__card-body--plain">
            <div class="urolift-process__image-frame">
              <img
                :src="item.image"
                :alt="`전립선 비대증 과정 ${item.step}`"
                class="urolift-process__image"
              />
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const topSteps = [
  { step: '01', image: '/images/urolift/urolift-step-01.webp' },
  { step: '02', image: '/images/urolift/urolift-step-02.webp' },
  { step: '03', image: '/images/urolift/urolift-step-03.webp' }
]

const bottomSteps = [
  { step: '04', image: '/images/urolift/urolift-step-04.webp' },
  { step: '05', image: '/images/urolift/urolift-step-05.webp' },
  { step: '06', image: '/images/urolift/urolift-step-06.webp' }
]
</script>

<style scoped lang="scss">
.urolift-process {
  background: #efeff1;
  padding-top: 84px;
  padding-bottom: 96px;
}

.urolift-process__head {
  margin-bottom: 42px;
  text-align: center;
}

.urolift-process__eyebrow {
  margin: 0 0 10px;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.28em;
  color: #8b8c92;
}

.urolift-process__title {
  margin: 0;
  font-size: 56px;
  line-height: 1.15;
  font-weight: 800;
  letter-spacing: -0.03em;
  color: #101114;
}

.urolift-process__grid {
  display: grid;
  gap: 28px;
}

.urolift-process__grid--top {
  grid-template-columns: repeat(3, minmax(0, 1fr));
  margin-bottom: 24px;
}

.urolift-process__grid--bottom {
  grid-template-columns: repeat(3, minmax(0, 1fr));
}

.urolift-process__card {
  background: #ffffff;
  border: 6px solid #dddddf;
}

.urolift-process__card-head {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 86px;
  padding: 12px 16px;
  background: linear-gradient(180deg, #6d8ed8 0%, #6282cf 100%);
  color: #ffffff;

  span {
    font-size: 28px;
    font-weight: 800;
  }
}

.urolift-process__card-body {
  padding: 12px;
}

.urolift-process__card-body--plain {
  padding-top: 22px;
  padding-bottom: 22px;
}

/* ✅ 핵심: 이미지 높이 통일 */
.urolift-process__image-frame {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 200px;
  overflow: hidden;
}

.urolift-process__image {
  width: auto;
  height: 100%;
  max-width: 100%;
  object-fit: contain;
}

@include desktop-down {
  .urolift-process__title {
    font-size: 46px;
  }

  .urolift-process__image-frame {
    height: 220px;
  }
}

@include laptop-down {
  .urolift-process__grid--top,
  .urolift-process__grid--bottom {
    grid-template-columns: 1fr;
  }

  .urolift-process__image-frame {
    height: 260px;
  }
}

@include mobile {
  .urolift-process__title {
    font-size: 28px;
  }

  .urolift-process__image-frame {
    height: 220px;
  }
}
</style>
