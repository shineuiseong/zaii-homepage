<template>
  <section class="prostate-cancer-page-hero">
    <div class="prostate-cancer-page-hero__bg">
      <img :src="imageSrc" :alt="title" />
    </div>

    <div class="prostate-cancer-page-hero__overlay" />

    <div class="container prostate-cancer-page-hero__content">
      <div class="prostate-cancer-page-hero__text">
        <p v-if="topText" class="prostate-cancer-page-hero__top">
          {{ topText }}
        </p>

        <p v-if="brandText" class="prostate-cancer-page-hero__brand">
          {{ brandText }}
        </p>

        <h1 class="prostate-cancer-page-hero__title">
          <span class="prostate-cancer-page-hero__title-main">{{ title }}</span>
          <span v-if="highlight" class="prostate-cancer-page-hero__title-highlight">
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
.prostate-cancer-page-hero {
  position: relative;
  overflow: hidden;
  background: #10263f;
  min-height: 500px;
}

.prostate-cancer-page-hero__bg {
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

.prostate-cancer-page-hero__overlay {
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

.prostate-cancer-page-hero__content {
  position: relative;
  z-index: 1;
  min-height: 500px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
}

.prostate-cancer-page-hero__text {
  width: min(100%, 620px);
  padding: 48px 0;
  text-align: center;
  color: #ffffff;
}

.prostate-cancer-page-hero__top {
  margin: 0 0 32px;
  font-size: 20px;
  line-height: 1.55;
  font-weight: 700;
  color: rgba(255, 255, 255, 0.98);
  word-break: keep-all;
}

.prostate-cancer-page-hero__brand {
  margin: 0 0 20px;
  font-size: 12px;
  line-height: 1;
  font-weight: 500;
  letter-spacing: 0.42em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.88);
}

.prostate-cancer-page-hero__title {
  margin: 0;
  line-height: 1.05;
  font-weight: 300;
  letter-spacing: -0.04em;
  word-break: keep-all;
}

.prostate-cancer-page-hero__title-main {
  color: #ffffff;
  font-size: 76px;
}

.prostate-cancer-page-hero__title-highlight {
  margin-left: 14px;
  color: #a8edf1;
  font-size: 76px;
  font-weight: 800;
}

@include desktop-down {
  .prostate-cancer-page-hero {
    min-height: 440px;
  }

  .prostate-cancer-page-hero__content {
    min-height: 440px;
  }

  .prostate-cancer-page-hero__text {
    width: min(100%, 540px);
  }

  .prostate-cancer-page-hero__top {
    margin-bottom: 24px;
    font-size: 18px;
  }

  .prostate-cancer-page-hero__title-main,
  .prostate-cancer-page-hero__title-highlight {
    font-size: 60px;
  }
}

@include laptop-down {
  .prostate-cancer-page-hero {
    min-height: 380px;
  }

  .prostate-cancer-page-hero__content {
    min-height: 380px;
    justify-content: center;
  }

  .prostate-cancer-page-hero__text {
    width: min(100%, 100%);
    padding: 42px 0;
    text-align: center;
  }

  .prostate-cancer-page-hero__top {
    margin-bottom: 20px;
    font-size: 16px;
    line-height: 1.5;
  }

  .prostate-cancer-page-hero__brand {
    margin-bottom: 16px;
    font-size: 11px;
    letter-spacing: 0.3em;
  }

  .prostate-cancer-page-hero__title-main,
  .prostate-cancer-page-hero__title-highlight {
    font-size: 48px;
  }
}

@include mobile {
  .prostate-cancer-page-hero {
    min-height: 300px;
  }

  .prostate-cancer-page-hero__content {
    min-height: 300px;
  }

  .prostate-cancer-page-hero__text {
    padding: 32px 0;
  }

  .prostate-cancer-page-hero__top {
    margin-bottom: 14px;
    font-size: 13px;
    line-height: 1.55;
  }

  .prostate-cancer-page-hero__brand {
    margin-bottom: 10px;
    font-size: 10px;
    letter-spacing: 0.22em;
  }

  .prostate-cancer-page-hero__title-main,
  .prostate-cancer-page-hero__title-highlight {
    font-size: 34px;
  }

  .prostate-cancer-page-hero__title-highlight {
    margin-left: 8px;
  }
}
</style>
