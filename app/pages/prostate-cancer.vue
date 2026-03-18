<template>
  <div class="prostate-cancer-page">
    <ProstateCancerHero
      image-src="/images/prostate-cancer/prostate-cancer-hero.webp"
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
import { usePageSeo } from '~/composable/usePageSeo'

usePageSeo({
  title: '전립선암 신속검사 | 전립선암 진료 | 자이비뇨의학과',
  description:
    '자이비뇨의학과의 전립선암 신속검사는 전립선암이 의심되는 환자에게 보다 빠른 진료와 검사 진행을 돕습니다. 전립선암 검진, 진단, 상담을 체계적으로 제공합니다.',
  path: '/prostate-cancer',
  keywords:
    '전립선암, 전립선암 신속검사, 전립선암 검사, 전립선암 진단, 전립선암 검진, PSA 검사, 비뇨의학과, 자이비뇨의학과',
  ogDescription: '전립선암이 의심될 때 빠른 진료와 검사를 위한 전립선암 신속검사 안내.',
  twitterTitle: '전립선암 신속검사 | 자이비뇨의학과',
  twitterDescription: '전립선암 의심 시 빠른 진료와 검사를 위한 신속검사 안내.'
})
</script>

<style scoped lang="scss">
.prostate-cancer-page {
  background: #fff;
}
</style>
