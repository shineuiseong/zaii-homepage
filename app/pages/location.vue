<template>
  <div class="location-page">
    <HospitalPageHero
      image-src="/images/main/history-hero.webp"
      eyebrow="LOCATION"
      title="찾아오시는길"
      description="자이비뇨의학과병원의 위치와 문의처를 안내해드립니다."
    />

    <LocationMapSection />
    <LocationTransportSection />
  </div>
</template>

<script setup lang="ts">
import HospitalPageHero from '~/components/hospital/HospitalPageHero.vue'
import LocationMapSection from '~/components/hospital/LocationMapSection.vue'
import LocationTransportSection from '~/components/hospital/LocationTransportSection.vue'
</script>
