<template>
  <div class="brand-page">
    <HospitalPageHero
      image-src="/images/main/history-hero.webp"
      eyebrow="BRAND STORY"
      title="의료진 소개"
      description="믿을 수 있는 자이비뇨의학과 병원 의료진 오늘도 더 나은 결과를 위하여 최선을 다합니다."
    />

    <HospitalSubTabs :tabs="tabs" />
    <MedicalTeamSection />
  </div>
</template>

<script setup lang="ts">
import MedicalTeamSection from '~/components/hospital/MedicalTeamSection.vue'

const tabs = [
  { label: '자이비뇨의학과병원 발자취', to: '/hospital/history', current: false },
  { label: '유로리프트를 만나다', to: '/hospital/urolift', current: false },
  { label: '브랜드스토리', to: '/hospital/brand', current: false },
  { label: '의료진소개', to: '/hospital/medical-team', current: true },
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
