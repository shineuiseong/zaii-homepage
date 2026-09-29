<template>
  <div class="rezum-page">
    <RezumPageHero
      image-src="/images/rezum/rezum-hero.webp"
      brand-text="ZAII UROLOGY HOSPITAL"
      title="리줌수술"
    />
  </div>

  <RezumIntroSection />
  <RezumFeatureSection />
</template>

<script setup lang="ts">
import { defineBreadcrumb, defineWebPage, useSchemaOrg } from '#imports'
import RezumFeatureSection from '~/components/rezum/RezumFeatureSection.vue'
import RezumIntroSection from '~/components/rezum/RezumIntroSection.vue'
import RezumPageHero from '~/components/rezum/RezumPageHero.vue'
import { usePageSeo } from '~/composables/usePageSeo'

const config = useRuntimeConfig()
const siteUrl = config.public.siteUrl || 'https://zaii.kr'
const pageUrl = `${siteUrl}/rezum`
const pageTitle = '리줌 수술 | 전립선비대증 치료'

const pageDescription =
  '리줌(Rezūm)은 수증기를 이용해 전립선비대증을 치료하는 최소침습 시술입니다. 자이비뇨의학과병원은 환자의 상태를 확인한 후 리줌 치료 여부와 적합한 치료 방법을 안내합니다.'
const pageImage = `${siteUrl}/images/og-image.png`

usePageSeo({
  title: pageTitle,

  description: pageDescription,

  path: '/rezum',

  ogType: 'website',

  ogTitle: '리줌 수술 | 전립선비대증 치료 | 자이비뇨의학과병원',

  ogDescription:
    '수증기를 이용한 전립선비대증 치료, 리줌(Rezūm) 시술 안내. 환자의 상태에 맞는 치료 방법을 상담합니다.',

  ogImage: pageImage,

  twitterTitle: '리줌 수술 | 전립선비대증 치료 | 자이비뇨의학과병원',

  twitterDescription: '전립선비대증 치료를 위한 리줌(Rezūm) 수증기 시술 안내.',

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
      name: '전립선비대증'
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
        name: '리줌수술',
        item: pageUrl
      }
    ]
  })
])
</script>

<style scoped lang="scss">
.rezum-page {
  background: #fff;
}
</style>
