<template>
  <section class="urolift-page-hero">
    <div class="urolift-page-hero__bg">
      <img :src="imageSrc" :alt="title" />
    </div>

    <div class="urolift-page-hero__overlay" />

    <div class="container urolift-page-hero__content">
      <div class="urolift-page-hero__text">
        <p v-if="topText" class="urolift-page-hero__top">
          {{ topText }}
        </p>

        <p v-if="brandText" class="urolift-page-hero__brand">
          {{ brandText }}
        </p>

        <h1 class="urolift-page-hero__title">
          <span class="urolift-page-hero__title-main">{{ title }}</span>
          <span v-if="highlight" class="urolift-page-hero__title-highlight">
            {{ highlight }}
          </span>
        </h1>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps<{
  imageSrc: string
  title: string
  highlight?: string
  topText?: string
  brandText?: string
}>()
</script>

<style scoped lang="scss">
.urolift-page-hero {
  position: relative;
  overflow: hidden;
  background: #10263f;
  min-height: 500px;
}

.urolift-page-hero__bg {
  position: absolute;
  inset: 0;

  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center center;
  }
}

.urolift-page-hero__overlay {
  position: absolute;
  inset: 0;
  background:
    linear-gradient(
      90deg,
      rgba(8, 18, 32, 0.18) 0%,
      rgba(8, 18, 32, 0.42) 55%,
      rgba(8, 18, 32, 0.28) 100%
    ),
    linear-gradient(180deg, rgba(0, 0, 0, 0.08) 0%, rgba(0, 0, 0, 0.18) 100%);
}

.urolift-page-hero__content {
  position: relative;
  z-index: 1;
  min-height: 500px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
}

.urolift-page-hero__text {
  width: min(100%, 620px);
  padding: 48px 0;
  text-align: center;
  color: #ffffff;
}

.urolift-page-hero__top {
  margin: 0 0 32px;
  font-size: 20px;
  line-height: 1.55;
  font-weight: 700;
  color: rgba(255, 255, 255, 0.98);
  word-break: keep-all;
}

.urolift-page-hero__brand {
  margin: 0 0 20px;
  font-size: 12px;
  line-height: 1;
  font-weight: 500;
  letter-spacing: 0.42em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.88);
}

.urolift-page-hero__title {
  margin: 0;
  line-height: 1.05;
  font-weight: 300;
  letter-spacing: -0.04em;
  word-break: keep-all;
}

.urolift-page-hero__title-main {
  color: #ffffff;
  font-size: 76px;
}

.urolift-page-hero__title-highlight {
  margin-left: 14px;
  color: #a8edf1;
  font-size: 76px;
  font-weight: 800;
}

@include desktop-down {
  .urolift-page-hero {
    min-height: 440px;
  }

  .urolift-page-hero__content {
    min-height: 440px;
  }

  .urolift-page-hero__text {
    width: min(100%, 540px);
  }

  .urolift-page-hero__top {
    margin-bottom: 24px;
    font-size: 18px;
  }

  .urolift-page-hero__title-main,
  .urolift-page-hero__title-highlight {
    font-size: 60px;
  }
}

@include laptop-down {
  .urolift-page-hero {
    min-height: 380px;
  }

  .urolift-page-hero__content {
    min-height: 380px;
    justify-content: center;
  }

  .urolift-page-hero__text {
    width: min(100%, 100%);
    padding: 42px 0;
    text-align: center;
  }

  .urolift-page-hero__top {
    margin-bottom: 20px;
    font-size: 16px;
    line-height: 1.5;
  }

  .urolift-page-hero__brand {
    margin-bottom: 16px;
    font-size: 11px;
    letter-spacing: 0.3em;
  }

  .urolift-page-hero__title-main,
  .urolift-page-hero__title-highlight {
    font-size: 48px;
  }
}

@include mobile {
  .urolift-page-hero {
    min-height: 300px;
  }

  .urolift-page-hero__content {
    min-height: 300px;
  }

  .urolift-page-hero__text {
    padding: 32px 0;
  }

  .urolift-page-hero__top {
    margin-bottom: 14px;
    font-size: 13px;
    line-height: 1.55;
  }

  .urolift-page-hero__brand {
    margin-bottom: 10px;
    font-size: 10px;
    letter-spacing: 0.22em;
  }

  .urolift-page-hero__title-main,
  .urolift-page-hero__title-highlight {
    font-size: 34px;
  }

  .urolift-page-hero__title-highlight {
    margin-left: 8px;
  }
}
</style>
