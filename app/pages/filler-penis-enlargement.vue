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
import { usePageSeo } from '~/composable/usePageSeo'

usePageSeo({
  title: '필러 음경확대술 | 자이비뇨의학과',
  description:
    '자이비뇨의학과의 필러 음경확대술은 자연스러운 볼륨 개선과 빠른 회복을 고려한 확대 시술입니다. 맞춤 라인업과 상담을 제공합니다.',
  path: '/filler-penis-enlargement',
  keywords:
    '필러 음경확대술, 성기확대, 음경확대, 필러 확대, 남성확대술, 자이비뇨의학과, 남성수술, 음경필러',
  ogTitle: '필러 음경확대술 | 자이비뇨의학과',
  ogDescription: '자연스러운 볼륨 개선과 빠른 회복을 고려한 자이비뇨의학과 필러 음경확대술.',
  twitterTitle: '필러 음경확대술 | 자이비뇨의학과',
  twitterDescription: '자연스러운 볼륨 개선과 빠른 회복을 고려한 자이비뇨의학과 필러 음경확대술.'
})
</script>

<style scoped lang="scss">
.filler-page {
  background: #fff;
}
</style>
