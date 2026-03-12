<template>
  <div class="guide-page">
    <HospitalPageHero
      image-src="/images/history-hero.png"
      eyebrow="MEDICAL GUIDE"
      title="진료안내"
      description="자이비뇨의학과병원의 예약 및 상담, 진료시간, 진료과목을 안내해드립니다."
    />

    <HospitalSubTabs :tabs="tabs" />

    <GuideContactSection />
    <GuideScheduleSection />
    <GuideSubjectSection />
  </div>
</template>

<script setup lang="ts">
import HospitalPageHero from '~/components/hospital/HospitalPageHero.vue'
import HospitalSubTabs from '~/components/hospital/HospitalSubTabs.vue'
import GuideContactSection from '~/components/hospital/GuideContactSection.vue'
import GuideScheduleSection from '~/components/hospital/GuideScheduleSection.vue'
import GuideSubjectSection from '~/components/hospital/GuideSubjectSection.vue'

const tabs = [
  { label: '자이비뇨의학과병원 발자취', to: '/hospital/history', current: false },
  { label: '유로리프트를 만나다', to: '/hospital/urolift', current: false },
  { label: '브랜드스토리', to: '/hospital/brand', current: false },
  { label: '의료진소개', to: '/hospital/medical-team', current: false },
  { label: '진료안내', to: '/hospital/guide', current: true },
  { label: '둘러보기', to: '/hospital/tour', current: false },
  { label: '찾아오시는길', to: '/hospital/location', current: false }
]
</script>

<style scoped lang="scss">
.guide-page {
  background: #fff;
}
</style>
