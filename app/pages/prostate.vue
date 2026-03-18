<template>
  <div class="prostate-page">
    <ProstatePageHero
      image-src="/images/prostate/prostate-hero.webp"
      top-text="단순히 노화 때문이 아닙니다. 고위험군도 충분히 치료 가능한 전립선질환"
      brand-text="ZAII UROLOGY HOSPITAL"
      title="전립선비대증"
    />
    <ProstateSectionNav :items="sectionItems" />
    <ProstateSymptomTreatmentSection />
    <ProstateNeglectSection />
    <ProstateSelfCheckSection />
    <ProstateOneDayProcessSection />
    <ProstateTreatmentSection />
  </div>
</template>

<script setup lang="ts">
import ProstatePageHero from '~/components/prostate/ProstatePageHero.vue'
import ProstateNeglectSection from '~/components/prostate/ProstateNeglectSection.vue'
import ProstateOneDayProcessSection from '~/components/prostate/ProstateOneDayProcessSection.vue'
import ProstateSectionNav from '~/components/prostate/ProstateSectionNav.vue'
import ProstateSelfCheckSection from '~/components/prostate/ProstateSelfCheckSection.vue'
import ProstateSymptomTreatmentSection from '~/components/prostate/ProstateSymptomTreatmentSection.vue'
import ProstateTreatmentSection from '~/components/prostate/ProstateTreatmentSection.vue'
import { usePageSeo } from '~/composable/usePageSeo'

const sectionItems = [
  { id: 'prostate-symptom-treatment', label: '전립선비대증 증상과 치료' },
  { id: 'prostate-neglect', label: '전립선 비대증을 방치하면' },
  { id: 'prostate-self-check', label: '전립선 비대증 자가진단' },
  { id: 'prostate-process', label: 'ONE-DAY 검사 프로세스' },
  { id: 'prostate-treatment', label: '전립선비대증 비수술적 치료방법' }
]

usePageSeo({
  title: '전립선비대증 증상·치료 | 리줌·유로리프트 | 자이비뇨의학과',
  description:
    '전립선비대증의 증상, 자가진단, 검사, 치료방법을 안내합니다. 자이비뇨의학과는 리줌(Rezūm), 유로리프트(UroLift) 등 최소침습 치료와 비수술적 치료를 제공합니다.',
  path: '/prostate',
  keywords:
    '전립선비대증, 전립선비대증 증상, 전립선비대증 치료, 전립선비대증 자가진단, 전립선 검사, 리줌, 유로리프트, 배뇨장애, 전립선비대증 병원',
  ogDescription:
    '전립선비대증 증상, 자가진단, 검사와 치료방법 안내. 리줌·유로리프트 등 최소침습 치료 제공.',
  twitterTitle: '전립선비대증 증상·치료 | 자이비뇨의학과',
  twitterDescription: '전립선비대증 증상부터 검사, 치료까지 한 번에 안내합니다.'
})
</script>

<style scoped lang="scss">
.prostate-page {
  background: #fff;
}
</style>
