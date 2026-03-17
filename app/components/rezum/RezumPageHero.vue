<template>
  <section class="rezum-page-hero">
    <div class="rezum-page-hero__bg">
      <img :src="imageSrc" :alt="title" />
    </div>

    <div class="rezum-page-hero__overlay" />

    <div class="container rezum-page-hero__content">
      <div class="rezum-page-hero__text">
        <p v-if="brandText" class="rezum-page-hero__brand">
          {{ brandText }}
        </p>

        <h1 class="rezum-page-hero__title">
          {{ title }}
        </h1>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps<{
  imageSrc: string
  title: string
  brandText?: string
}>()
</script>

<style scoped lang="scss">
.rezum-page-hero {
  position: relative;
  overflow: hidden;
  background: #1a1820;
  min-height: 500px;
}

.rezum-page-hero__bg {
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

.rezum-page-hero__overlay {
  position: absolute;
  inset: 0;
  background:
    linear-gradient(
      90deg,
      rgba(11, 14, 24, 0.28) 0%,
      rgba(11, 14, 24, 0.34) 45%,
      rgba(11, 14, 24, 0.62) 100%
    ),
    linear-gradient(180deg, rgba(7, 10, 18, 0.18) 0%, rgba(7, 10, 18, 0.34) 100%);
}

.rezum-page-hero__content {
  position: relative;
  z-index: 1;
  min-height: 500px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
}

.rezum-page-hero__text {
  width: min(100%, 520px);
  padding: 48px 0;
  text-align: center;
  color: #ffffff;
}

.rezum-page-hero__brand {
  margin: 0 0 20px;
  font-size: 12px;
  line-height: 1;
  font-weight: 500;
  letter-spacing: 0.42em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.86);
}

.rezum-page-hero__title {
  margin: 0;
  font-size: 78px;
  line-height: 1.06;
  font-weight: 800;
  letter-spacing: -0.04em;
  color: #bdf4f8;
  word-break: keep-all;
}

@include desktop-down {
  .rezum-page-hero {
    min-height: 440px;
  }

  .rezum-page-hero__content {
    min-height: 440px;
  }

  .rezum-page-hero__text {
    width: min(100%, 460px);
  }

  .rezum-page-hero__title {
    font-size: 62px;
  }
}

@include laptop-down {
  .rezum-page-hero {
    min-height: 380px;
  }

  .rezum-page-hero__content {
    min-height: 380px;
    justify-content: center;
  }

  .rezum-page-hero__text {
    width: 100%;
    padding: 42px 0;
    text-align: center;
  }

  .rezum-page-hero__brand {
    margin-bottom: 16px;
    font-size: 11px;
    letter-spacing: 0.3em;
  }

  .rezum-page-hero__title {
    font-size: 50px;
  }
}

@include mobile {
  .rezum-page-hero {
    min-height: 300px;
  }

  .rezum-page-hero__content {
    min-height: 300px;
  }

  .rezum-page-hero__text {
    padding: 32px 0;
  }

  .rezum-page-hero__brand {
    margin-bottom: 10px;
    font-size: 10px;
    letter-spacing: 0.22em;
  }

  .rezum-page-hero__title {
    font-size: 36px;
    line-height: 1.14;
  }
}
</style>
