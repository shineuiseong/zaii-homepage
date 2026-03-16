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
            <img :src="item.image" :alt="`전립선 비대증 과정 ${item.step}`" />
          </div>
        </article>
      </div>

      <div class="urolift-process__grid urolift-process__grid--bottom">
        <article v-for="item in bottomSteps" :key="item.step" class="urolift-process__card">
          <div class="urolift-process__card-head">
            <span>STEP {{ item.step }}</span>
          </div>
          <div class="urolift-process__card-body urolift-process__card-body--plain">
            <img :src="item.image" :alt="`전립선 비대증 과정 ${item.step}`" />
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const topSteps = [
  { step: '01', image: '/images/urolift/urolift-step-01.png' },
  { step: '02', image: '/images/urolift/urolift-step-02.png' },
  { step: '03', image: '/images/urolift/urolift-step-03.png' }
]

const bottomSteps = [
  { step: '04', image: '/images/urolift/urolift-step-04.png' },
  { step: '05', image: '/images/urolift/urolift-step-05.png' },
  { step: '06', image: '/images/urolift/urolift-step-06.png' }
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
  word-break: keep-all;
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
    line-height: 1;
    font-weight: 800;
    letter-spacing: -0.02em;
  }
}

.urolift-process__card-body {
  padding: 28px 24px 30px;
  background: #ffffff;

  img {
    display: block;
    width: 100%;
    height: auto;
    object-fit: contain;
  }
}

.urolift-process__card-body--plain {
  padding-top: 22px;
  padding-bottom: 22px;
}

@include desktop-down {
  .urolift-process {
    padding-top: 72px;
    padding-bottom: 84px;
  }

  .urolift-process__title {
    font-size: 46px;
  }

  .urolift-process__grid {
    gap: 22px;
  }

  .urolift-process__card-head {
    min-height: 74px;

    span {
      font-size: 24px;
    }
  }

  .urolift-process__card-body {
    padding: 22px 18px 24px;
  }
}

@include laptop-down {
  .urolift-process {
    padding-top: 60px;
    padding-bottom: 72px;
  }

  .urolift-process__head {
    margin-bottom: 28px;
  }

  .urolift-process__title {
    font-size: 34px;
  }

  .urolift-process__grid--top,
  .urolift-process__grid--bottom {
    grid-template-columns: 1fr;
  }

  .urolift-process__grid--top {
    margin-bottom: 18px;
  }

  .urolift-process__grid {
    gap: 16px;
  }

  .urolift-process__card {
    border-width: 4px;
  }

  .urolift-process__card-head {
    min-height: 62px;
    padding: 10px 14px;

    span {
      font-size: 22px;
    }
  }

  .urolift-process__card-body {
    padding: 16px 14px 18px;
  }

  .urolift-process__card-body--plain {
    padding-top: 14px;
    padding-bottom: 14px;
  }
}

@include mobile {
  .urolift-process {
    padding-top: 48px;
    padding-bottom: 56px;
  }

  .urolift-process__eyebrow {
    font-size: 10px;
    letter-spacing: 0.22em;
  }

  .urolift-process__title {
    font-size: 28px;
    line-height: 1.22;
  }

  .urolift-process__head {
    margin-bottom: 22px;
  }

  .urolift-process__grid {
    gap: 14px;
  }

  .urolift-process__card-head {
    min-height: 56px;

    span {
      font-size: 18px;
    }
  }

  .urolift-process__card-body {
    padding: 14px 12px 16px;
  }
}
</style>
