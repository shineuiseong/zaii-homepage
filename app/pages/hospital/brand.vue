<template>
  <div class="brand-page">
    <HospitalPageHero
      image-src="/images/history-hero.webp"
      eyebrow="BRAND STORY"
      title="브랜드스토리"
      description="자이비뇨의학과병원이 전립선 질환을 어떻게 깊이 있게 진료하고 있는지, 병원의 진료 철학과 특화 클리닉을 소개합니다."
    />

    <HospitalSubTabs :tabs="tabs" />

    <BrandSpecialtySection />
    <BrandHighRiskSection />
    <BrandPelvicPainSection />
    <BrandFastCancerSection />
  </div>
</template>

<script setup lang="ts">
import HospitalPageHero from '~/components/hospital/HospitalPageHero.vue'
import HospitalSubTabs from '~/components/hospital/HospitalSubTabs.vue'
import BrandSpecialtySection from '~/components/hospital/BrandSpecialtySection.vue'
import BrandHighRiskSection from '~/components/hospital/BrandHighRiskSection.vue'
import BrandPelvicPainSection from '~/components/hospital/BrandPelvicPainSection.vue'
import BrandFastCancerSection from '~/components/hospital/BrandFastCancerSection.vue'

const tabs = [
  { label: '자이비뇨의학과병원 발자취', to: '/hospital/history', current: false },
  { label: '유로리프트를 만나다', to: '/hospital/urolift', current: false },
  { label: '브랜드스토리', to: '/hospital/brand', current: true },
  { label: '의료진소개', to: '/hospital/medical-team', current: false },
  { label: '진료안내', to: '/hospital/guide', current: false },
  { label: '둘러보기', to: '/hospital/tour', current: false },
  { label: '찾아오시는길', to: '/hospital/location', current: false }
]
</script>

<style scoped lang="scss">
.brand-page {
  background: #fff;
}
</style>
