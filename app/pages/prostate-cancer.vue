<template>
  <div class="prostate-cancer-page">
    <ProstateCancerHero
      image-src="/images/prostate-cancer/prostate-cancer-hero.png"
      top-text="암을 좀 더 빠르게 진료, 치료를 받고 싶다면 자이비뇨의학과 병원의 전립선암 신속검사가 해답이다."
      brand-text="ZAII UROLOGY HOSPITAL"
      title="자이 전립선암"
    />
    <ProstateCancerIntroSection />
  </div>
</template>

<script setup lang="ts">
import ProstateCancerHero from '~/components/prostate-cancer/ProstateCancerHero.vue'
import ProstateCancerIntroSection from '~/components/prostate-cancer/ProstateCancerIntroSection.vue'
</script>

<style scoped lang="scss">
.rezum-page {
  background: #fff;
}
</style>
