<template>
  <div class="guide-page">
    <HospitalPageHero
      image-src="/images/main/history-hero.webp"
      eyebrow="MEDICAL GUIDE"
      title="진료안내"
      description="자이비뇨의학과병원의 예약 및 상담, 진료시간, 진료과목을 안내해드립니다."
    />

    <MedicalGuideSection />
  </div>
</template>

<script setup lang="ts">
import HospitalPageHero from '~/components/hospital/HospitalPageHero.vue'
import MedicalGuideSection from '~/components/hospital/MedicalGuideSection.vue'
</script>

<style scoped lang="scss">
.guide-page {
  background: #ffffff;
}
</style>
