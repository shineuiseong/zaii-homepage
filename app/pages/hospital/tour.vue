<template>
  <div>
    <HospitalPageHero
      image-src="/images/main/history-hero.webp"
      eyebrow="ZAII UROLOGY HOSPITAL"
      title="공간소개"
      description="자이비뇨의학과병원의 내부 공간을 소개합니다."
    />

    <HospitalSubTabs :tabs="tabs" />

    <SpaceGallerySection />
  </div>
</template>

<script setup lang="ts">
import SpaceGallerySection from '~/components/hospital/SpaceGallerySection.vue'
const tabs = [
  { label: '자이비뇨의학과병원 발자취', to: '/hospital/history', current: false },
  { label: '자이의 유로리프트', to: '/hospital/urolift', current: false },
  { label: '브랜드스토리', to: '/hospital/brand', current: false },
  { label: '의료진소개', to: '/hospital/medical-team', current: false },
  { label: '둘러보기', to: '/hospital/tour', current: true }
]
</script>
