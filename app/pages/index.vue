<template>
  <MainHero />

  <TreatmentSelectSection />

  <DoctorSection />

  <RecordSection />

  <SpaceSection />

  <ContactInfoSection />
</template>

<script setup lang="ts">
import { defineBreadcrumb, defineWebPage, useSchemaOrg } from '#imports'

import MainHero from '~/components/hero/MainHero.vue'
import ContactInfoSection from '~/components/main/ContactInfoSection.vue'
import DoctorSection from '~/components/main/DoctorSection.vue'
import RecordSection from '~/components/main/RecordSection.vue'
import SpaceSection from '~/components/main/SpaceSection.vue'
import TreatmentSelectSection from '~/components/main/TreatmentSelectSection.vue'

import { usePageSeo } from '~/composables/usePageSeo'

const config = useRuntimeConfig()

const siteUrl = String(config.public.siteUrl || 'https://zaii.kr').replace(/\/$/, '')

const pageUrl = `${siteUrl}/`

const pageTitle = '비뇨기과병원 | 전립선비대증 리줌·유로리프트 치료'

const pageDescription =
  '자이비뇨의학과병원은 서울 서초구 비뇨기과병원으로 전립선비대증, 배뇨장애, 요로결석 등 비뇨의학과 진료를 제공합니다. 리줌(Rezūm), 유로리프트(UroLift) 등 전립선비대증 치료를 시행합니다.'
const pageImage = `${siteUrl}/images/og-image.png`

usePageSeo({
  title: pageTitle,

  description: pageDescription,

  path: '/',

  ogType: 'website',

  ogTitle: '자이비뇨의학과병원 | 비뇨기과병원·전립선비대증 리줌·유로리프트 치료',

  ogDescription:
    '서울 서초구 비뇨기과병원. 전립선비대증, 배뇨장애 진료 및 리줌·유로리프트 치료를 시행합니다.',

  ogImage: pageImage,

  twitterTitle: '자이비뇨의학과병원 | 비뇨기과병원·전립선비대증 치료',

  twitterDescription:
    '서울 서초구 비뇨기과병원. 전립선비대증과 배뇨장애 진료 및 리줌·유로리프트 치료.',

  twitterImage: pageImage
})
useSchemaOrg([
  defineWebPage({
    '@id': `${pageUrl}#webpage`,

    url: pageUrl,

    name: '자이비뇨의학과병원',

    description: pageDescription,

    inLanguage: 'ko-KR',

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
