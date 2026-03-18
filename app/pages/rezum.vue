<template>
  <div class="rezum-page">
    <RezumPageHero
      image-src="/images/rezum/rezum-hero.webp"
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
import { usePageSeo } from '~/composable/usePageSeo'

usePageSeo({
  title: '리줌 수술 | 전립선비대증 치료 | 자이비뇨의학과',
  description:
    '리줌(Rezūm)은 수증기를 이용해 전립선비대증을 치료하는 최소침습 시술입니다. 절개 없이 빠른 회복이 가능한 리줌 수술을 자이비뇨의학과에서 안전하게 시행합니다.',
  path: '/rezum',
  keywords:
    '리줌, rezum, 리줌수술, 전립선비대증 수술, 리줌 비용, 리줌 효과, 전립선비대증 치료, 수증기 치료',
  ogDescription: '수증기를 이용한 전립선비대증 치료, 리줌 시술. 절개 없이 빠른 회복.',
  twitterTitle: '리줌 수술 | 자이비뇨의학과',
  twitterDescription: '전립선비대증 치료, 리줌 수술로 빠르게 개선하세요.'
})
</script>

<style scoped lang="scss">
.rezum-page {
  background: #fff;
}
</style>
