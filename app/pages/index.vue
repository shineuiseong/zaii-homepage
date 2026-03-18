<template>
  <HeroSlider />
  <UroliftSection />
  <ClinicSection />
  <HistoryHighlightSection />
  <ContactInfoSection />
</template>

<script setup lang="ts">
import HeroSlider from '~/components/hero/HeroSlider.vue'
import ClinicSection from '~/components/main/ClinicSection.vue'
import ContactInfoSection from '~/components/main/ContactInfoSection.vue'
import HistoryHighlightSection from '~/components/main/HistoryHighlightSection.vue'
import UroliftSection from '~/components/main/UroliftSection.vue'
import { usePageSeo } from '~/composable/usePageSeo'

usePageSeo({
  title: '자이비뇨의학과 | 전립선비대증 리줌·유로리프트 치료',
  description:
    '자이비뇨의학과는 전립선비대증, 배뇨장애, 요로결석 등 비뇨의학과 전문 2차병원입니다. 리줌(Rezūm), 유로리프트(UroLift) 등 최소침습 치료를 제공합니다.',
  path: '/',
  keywords:
    '자이비뇨의학과, 전립선비대증, 리줌, 유로리프트, Rezum, Urolift, 배뇨장애, 요로결석, 남성수술, 비뇨기과, 2차병원',
  ogType: 'website',
  ogDescription: '전립선비대증, 배뇨장애 전문 2차병원. 리줌·유로리프트 등 최소침습 치료 제공.',
  twitterDescription: '전립선비대증, 배뇨장애 전문 2차병원. 리줌·유로리프트 치료.'
})
</script>
