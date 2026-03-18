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
import ProstateNeglectSection from '~/components/prostate/ProstateNeglectSection.vue'
import ProstateOneDayProcessSection from '~/components/prostate/ProstateOneDayProcessSection.vue'
import ProstateSectionNav from '~/components/prostate/ProstateSectionNav.vue'
import ProstateSelfCheckSection from '~/components/prostate/ProstateSelfCheckSection.vue'
import ProstateSymptomTreatmentSection from '~/components/prostate/ProstateSymptomTreatmentSection.vue'
import ProstateTreatmentSection from '~/components/prostate/ProstateTreatmentSection.vue'
const sectionItems = [
  { id: 'prostate-symptom-treatment', label: '전립선비대증 증상과 치료' },
  { id: 'prostate-neglect', label: '전립선 비대증을 방치하면' },
  { id: 'prostate-self-check', label: '전립선 비대증 자가진단' },
  { id: 'prostate-process', label: 'ONE-DAY 검사 프로세스' },
  { id: 'prostate-treatment', label: '전립선비대증 비수술적 치료방법' }
]
</script>

<style scoped lang="scss">
.prostate-page {
  background: #fff;
}
</style>
