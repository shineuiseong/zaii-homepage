<template>
  <MainPopupBanner />
  <HeroSlider />
  <UroliftSection />
  <ClinicSection />
  <HistoryHighlightSection />
  <ContactInfoSection />
</template>

<script setup lang="ts">
import { defineBreadcrumb, defineWebPage, useSchemaOrg } from '#imports'
import MainPopupBanner from '~/components/common/MainPopupBanner.vue'
import HeroSlider from '~/components/hero/HeroSlider.vue'
import ClinicSection from '~/components/main/ClinicSection.vue'
import ContactInfoSection from '~/components/main/ContactInfoSection.vue'
import HistoryHighlightSection from '~/components/main/HistoryHighlightSection.vue'
import UroliftSection from '~/components/main/UroliftSection.vue'
import { usePageSeo } from '~/composables/usePageSeo'

const config = useRuntimeConfig()
const siteUrl = config.public.siteUrl || 'https://zaii.kr'
const pageUrl = `${siteUrl}/`
const pageTitle = '자이비뇨의학과 | 전립선비대증 리줌·유로리프트 치료'
const pageDescription =
  '자이비뇨의학과는 전립선비대증, 배뇨장애, 요로결석 등 비뇨의학과 전문 2차병원입니다. 리줌(Rezūm), 유로리프트(UroLift) 등 최소침습 치료를 제공합니다.'
const pageImage = `${siteUrl}/images/og-image.png`

usePageSeo({
  title: pageTitle,
  description: pageDescription,
  path: '/',
  keywords:
    '자이비뇨의학과, 전립선비대증, 리줌, 유로리프트, Rezum, Urolift, 배뇨장애, 요로결석, 남성수술, 비뇨기과, 2차병원, 보형물, 성기확대, 필러',
  ogType: 'website',
  ogDescription: '전립선비대증, 배뇨장애 전문 2차병원. 리줌·유로리프트 등 최소침습 치료 제공.',
  twitterDescription: '전립선비대증, 배뇨장애 전문 2차병원. 리줌·유로리프트 치료.',
  ogImage: pageImage,
  twitterImage: pageImage
})

useSchemaOrg([
  defineWebPage({
    '@id': `${pageUrl}#webpage`,
    url: pageUrl,
    name: pageTitle,
    description: pageDescription,
    inLanguage: 'ko-KR',
    isPartOf: {
      '@id': `${siteUrl}/#website`
    },
    primaryImageOfPage: {
      '@type': 'ImageObject',
      contentUrl: pageImage
    }
  }),

  defineBreadcrumb({
    '@id': `${pageUrl}#breadcrumb`,
    itemListElement: [
      {
        position: 1,
        name: '홈',
        item: pageUrl
      }
    ]
  })
])
</script>
