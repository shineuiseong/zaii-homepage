<template>
  <div class="rezum-page">
    <RezumPageHero
      image-src="/images/rezum/rezum-hero.png"
      brand-text="ZAII UROLOGY HOSPITAL"
      title="리줌수술"
    />
  </div>
  <RezumIntroSection />
  <RezumFeatureSection />
</template>

<script setup lang="ts">
import RezumFeatureSection from '~/components/rezum/RezumFeatureSection.vue'
import RezumIntroSection from '~/components/rezum/RezumIntroSection.vue'
import RezumPageHero from '~/components/rezum/RezumPageHero.vue'
</script>

<style scoped lang="scss">
.rezum-page {
  background: #fff;
}
</style>
