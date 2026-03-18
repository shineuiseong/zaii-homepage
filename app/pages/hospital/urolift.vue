<template>
  <div class="urolift-page">
    <HospitalPageHero
      image-src="/images/main/history-hero.webp"
      eyebrow="UROLIFT STORY"
      title="유로리프트를 만나다"
      description="유로리프트의 개발 배경부터 국내 도입, 그리고 해외 의료진과의 교류를 통해 쌓아온 자이비뇨의학과병원의 경험을 소개합니다."
    />

    <HospitalSubTabs :tabs="tabs" />

    <UroliftStartSection />
    <UroliftDomesticSection />
    <UroliftExpertsSection />
    <UroliftDirectorSection />
    <UroliftAchievementSection />
  </div>
</template>

<script setup lang="ts">
import HospitalPageHero from '~/components/hospital/HospitalPageHero.vue'
import HospitalSubTabs from '~/components/hospital/HospitalSubTabs.vue'
import UroliftStartSection from '~/components/hospital/UroliftStartSection.vue'
import UroliftExpertsSection from '~/components/hospital/UroliftExpertsSection.vue'
import UroliftDirectorSection from '~/components/hospital/UroliftDirectorSection.vue'
import UroliftAchievementSection from '~/components/hospital/UroliftAchievementSection.vue'
import UroliftDomesticSection from '~/components/hospital/UroliftDomesticSection.vue'

const tabs = [
  { label: '자이비뇨의학과병원 발자취', to: '/hospital/history', current: false },
  { label: '유로리프트를 만나다', to: '/hospital/urolift', current: true },
  { label: '브랜드스토리', to: '/hospital/brand', current: false },
  { label: '의료진소개', to: '/hospital/medical-team', current: false },
  { label: '진료안내', to: '/hospital/guide', current: false },
  { label: '둘러보기', to: '/hospital/tour', current: false },
  { label: '찾아오시는길', to: '/hospital/location', current: false }
]
</script>

<style scoped lang="scss">
.urolift-page {
  background: #fff;
}
</style>
