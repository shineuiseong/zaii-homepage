<template>
  <div class="prostate-cancer-page">
    <ProstateCancerHero
      image-src="/images/prostate-cancer/prostate-cancer-hero.webp"
      top-text="암을 좀 더 빠르게 진료, 치료를 받고 싶다면 자이비뇨의학과 병원의 전립선암 신속검사가 해답이다."
      brand-text="ZAII UROLOGY HOSPITAL"
      title="자이 전립선암"
    />

    <ProstateCancerIntroSection />
  </div>
</template>

<script setup lang="ts">
import { defineBreadcrumb, defineWebPage, useSchemaOrg } from '#imports'
import ProstateCancerHero from '~/components/prostate-cancer/ProstateCancerHero.vue'
import ProstateCancerIntroSection from '~/components/prostate-cancer/ProstateCancerIntroSection.vue'
import { usePageSeo } from '~/composables/usePageSeo'

const config = useRuntimeConfig()
const siteUrl = config.public.siteUrl || 'https://zaii.kr'
const pageUrl = `${siteUrl}/prostate-cancer`
const pageTitle = '전립선암 신속검사 | 전립선암 진료 | 자이비뇨의학과'
const pageDescription =
  '자이비뇨의학과의 전립선암 신속검사는 전립선암이 의심되는 환자에게 보다 빠른 진료와 검사 진행을 돕습니다. 전립선암 검진, 진단, 상담을 체계적으로 제공합니다.'
const pageImage = `${siteUrl}/images/og-image.png`

usePageSeo({
  title: pageTitle,
  description: pageDescription,
  path: '/prostate-cancer',
  keywords:
    '전립선암, 전립선암 신속검사, 전립선암 검사, 전립선암 진단, 전립선암 검진, PSA 검사, 비뇨의학과, 자이비뇨의학과',
  ogDescription: '전립선암이 의심될 때 빠른 진료와 검사를 위한 전립선암 신속검사 안내.',
  twitterTitle: '전립선암 신속검사 | 자이비뇨의학과',
  twitterDescription: '전립선암 의심 시 빠른 진료와 검사를 위한 신속검사 안내.',
  ogImage: pageImage,
  twitterImage: pageImage
})

useSchemaOrg([
  defineWebPage({
    '@type': 'MedicalWebPage',
    '@id': `${pageUrl}#webpage`,
    url: pageUrl,
    name: pageTitle,
    description: pageDescription,
    inLanguage: 'ko-KR',
    isPartOf: {
      '@id': `${siteUrl}/#website`
    },
    about: {
      '@type': 'MedicalCondition',
      name: '전립선암'
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
        item: `${siteUrl}/`
      },
      {
        position: 2,
        name: '전립선암 신속검사',
        item: pageUrl
      }
    ]
  })
])
</script>

<style scoped lang="scss">
.prostate-cancer-page {
  background: #fff;
}
</style>
