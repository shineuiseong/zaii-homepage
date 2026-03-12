<template>
  <section class="hospital-page-hero">
    <div class="hospital-page-hero__bg">
      <img :src="imageSrc" :alt="title" />
    </div>

    <div class="hospital-page-hero__overlay" />

    <div class="container hospital-page-hero__content">
      <p v-if="eyebrow" class="hospital-page-hero__eyebrow">
        {{ eyebrow }}
      </p>

      <h1 class="hospital-page-hero__title">
        {{ title }}
      </h1>

      <p v-if="description" class="hospital-page-hero__desc">
        {{ description }}
      </p>
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps<{
  imageSrc: string
  title: string
  eyebrow?: string
  description?: string
}>()
</script>

<style scoped lang="scss">
.hospital-page-hero {
  position: relative;
  min-height: 420px;
  overflow: hidden;
  background: #0f2747;
}

.hospital-page-hero__bg {
  position: absolute;
  inset: 0;

  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}

.hospital-page-hero__overlay {
  position: absolute;
  inset: 0;
  background:
    linear-gradient(180deg, rgba(7, 24, 49, 0.28) 0%, rgba(7, 24, 49, 0.62) 100%),
    linear-gradient(90deg, rgba(6, 23, 48, 0.28) 0%, rgba(6, 23, 48, 0.14) 100%);
}

.hospital-page-hero__content {
  position: relative;
  z-index: 1;
  min-height: 420px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: #fff;
}

.hospital-page-hero__eyebrow {
  margin: 0 0 14px;
  padding: 9px 24px;
  border-radius: 999px;
  background: rgba(88, 171, 233, 0.18);
  border: 1px solid rgba(132, 196, 244, 0.34);
  font-size: 13px;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.92);
}

.hospital-page-hero__title {
  margin: 0;
  font-size: 52px;
  line-height: 1.15;
  font-weight: 800;
  letter-spacing: -0.03em;
  word-break: keep-all;
}

.hospital-page-hero__desc {
  max-width: 860px;
  margin: 18px 0 0;
  font-size: 20px;
  line-height: 1.7;
  color: rgba(255, 255, 255, 0.88);
  word-break: keep-all;
}

@include laptop-down {
  .hospital-page-hero {
    min-height: 360px;
  }

  .hospital-page-hero__content {
    min-height: 360px;
  }

  .hospital-page-hero__title {
    font-size: 40px;
  }

  .hospital-page-hero__desc {
    font-size: 17px;
  }
}

@include mobile {
  .hospital-page-hero {
    min-height: 300px;
  }

  .hospital-page-hero__content {
    min-height: 300px;
  }

  .hospital-page-hero__eyebrow {
    padding: 7px 16px;
    font-size: 11px;
    letter-spacing: 0.14em;
  }

  .hospital-page-hero__title {
    font-size: 30px;
  }

  .hospital-page-hero__desc {
    margin-top: 14px;
    font-size: 15px;
    line-height: 1.65;
  }
}
</style>
