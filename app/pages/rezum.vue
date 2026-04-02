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
const pageTitle = '리줌 수술 | 전립선비대증 치료 | 자이비뇨의학과'
const pageDescription =
  '리줌(Rezūm)은 수증기를 이용해 전립선비대증을 치료하는 최소침습 시술입니다. 절개 없이 빠른 회복이 가능한 리줌 수술을 자이비뇨의학과에서 안전하게 시행합니다.'
const pageImage = `${siteUrl}/images/og-image.png`

usePageSeo({
  title: pageTitle,
  description: pageDescription,
  path: '/rezum',
  keywords:
    '리줌, rezum, 리줌수술, 전립선비대증 수술, 리줌 비용, 리줌 효과, 전립선비대증 치료, 수증기 치료',
  ogDescription: '수증기를 이용한 전립선비대증 치료, 리줌 시술. 절개 없이 빠른 회복.',
  twitterTitle: '리줌 수술 | 자이비뇨의학과',
  twitterDescription: '전립선비대증 치료, 리줌 수술로 빠르게 개선하세요.',
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
