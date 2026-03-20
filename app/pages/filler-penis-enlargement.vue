<template>
  <div class="filler-page">
    <FillerPageHero
      image-src="/images/filler/filler-hero.webp"
      top-text="성기 크기의 불만을 해소할 심플한 방법"
      brand-text="ZAII UROLOGY HOSPITAL"
      title="자이"
      highlight="필러 음경확대술"
    />
    <FillerIntroSection />
    <FillerComparisonSection />
    <FillerLineupSection />
  </div>
</template>

<script setup lang="ts">
import FillerPageHero from '~/components/filler/FillerPageHero.vue'
</script>

<style scoped lang="scss">
.filler-page {
  background: #fff;
}
</style>
