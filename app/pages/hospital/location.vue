<template>
  <div class="location-page">
    <HospitalPageHero
      image-src="/images/history-hero.png"
      eyebrow="LOCATION"
      title="찾아오시는길"
      description="자이비뇨의학과병원의 위치와 문의처를 안내해드립니다."
    />

    <HospitalSubTabs :tabs="tabs" />

    <LocationMapSection />
    <LocationTransportSection />
  </div>
</template>

<script setup lang="ts">
import HospitalPageHero from '~/components/hospital/HospitalPageHero.vue'
import HospitalSubTabs from '~/components/hospital/HospitalSubTabs.vue'
import LocationMapSection from '~/components/hospital/LocationMapSection.vue'
import LocationTransportSection from '~/components/hospital/LocationTransportSection.vue'
const tabs = [
  { label: '자이비뇨의학과병원 발자취', to: '/hospital/history', current: false },
  { label: '유로리프트를 만나다', to: '/hospital/urolift', current: false },
  { label: '브랜드스토리', to: '/hospital/brand', current: false },
  { label: '의료진소개', to: '/hospital/medical-team', current: false },
  { label: '진료안내', to: '/hospital/guide', current: false },
  { label: '둘러보기', to: '/hospital/tour', current: false },
  { label: '찾아오시는길', to: '/hospital/location', current: true }
]
</script>
