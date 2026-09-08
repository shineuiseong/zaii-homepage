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
  keywords: [
    // 병원명 / 브랜드 검색
    '자이비뇨의학과',
    '자이비뇨기과',
    '자이비뇨의학과병원',
    '자이비뇨기과병원',

    // 전립선
    '전립선비대증',
    '전립선비대증 치료',
    '전립선비대증 수술',
    '전립선 검사',
    '전립선 치료',
    '전립선 전문병원',
    '전립선비대증 병원',

    // 리줌
    '리줌',
    '리줌시술',
    '리줌 수술',
    '리줌 치료',
    '리줌 전립선',
    'Rezum',
    'Rezum 시술',

    // 유로리프트
    '유로리프트',
    '유로리프트 시술',
    '유로리프트 수술',
    '유로리프트 전립선',
    'Urolift',

    // 배뇨 관련
    '배뇨장애',
    '소변장애',
    '빈뇨',
    '야간뇨',
    '잔뇨',
    '잔뇨감',
    '소변줄기 약함',
    '소변이 자주 마려움',

    // 남성 비뇨의학
    '발기부전',
    '발기부전 치료',
    '남성수술',
    '남성수술 병원',
    '남성 비뇨기과',
    '남성검진',
    '남성 정밀검진',

    // 남성수술 / 확대
    '음경확대',
    '성기확대',
    '남성확대수술',
    '보형물',
    '남성 보형물',
    '필러',
    '남성 필러',

    // 기타 비뇨기 질환
    '요로결석',
    '요로결석 치료',
    '요로결석 병원',
    '방광염',
    '전립선염',
    '혈뇨',
    '요실금',

    // 병원 검색
    '비뇨기과',
    '비뇨의학과',
    '비뇨기과병원',
    '비뇨의학과병원',
    '비뇨기과 전문병원',
    '2차병원',
    '비뇨기과 2차병원'
  ].join(', '),

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
