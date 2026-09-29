<template>
  <div class="filler-page">
    <FillerPageHero
      image-src="/images/filler/filler-hero.webp"
      top-text="성기 크기의 불만을 해소할 심플한 방법"
      brand-text="ZAII UROLOGY HOSPITAL"
      title="자이"
      highlight="필러 음경확대술"
    />
    <FillerIntroSection />
    <FillerUnderstandSection />
    <FillerComparisonSection />
    <FillerLineupSection />
  </div>
</template>

<script setup lang="ts">
import { defineBreadcrumb, defineWebPage, useSchemaOrg } from '#imports'
import FillerComparisonSection from '~/components/filler/FillerComparisonSection.vue'
import FillerIntroSection from '~/components/filler/FillerIntroSection.vue'
import FillerLineupSection from '~/components/filler/FillerLineupSection.vue'
import FillerPageHero from '~/components/filler/FillerPageHero.vue'
import FillerUnderstandSection from '~/components/filler/FillerUnderstandSection.vue'
import { usePageSeo } from '~/composables/usePageSeo'

const config = useRuntimeConfig()
const siteUrl = config.public.siteUrl || 'https://zaii.kr'
const pageUrl = `${siteUrl}/filler-penis-enlargement`
const pageTitle = '필러 음경확대술 | 자이비뇨의학과'
const pageDescription =
  '자이비뇨의학과의 필러 음경확대술은 자연스러운 볼륨 개선과 빠른 회복을 고려한 확대 시술입니다. 맞춤 라인업과 상담을 제공합니다.'
const pageImage = `${siteUrl}/images/og-image.png`

usePageSeo({
  title: '필러 음경확대술',

  description:
    '자이비뇨의학과병원의 필러 음경확대술은 자연스러운 볼륨 개선과 빠른 회복을 고려한 남성 확대 시술입니다. 개인별 상태를 확인한 후 적합한 필러와 시술 방법을 안내합니다.',

  path: '/filler-penis-enlargement',

  ogType: 'website',

  ogTitle: '필러 음경확대술 | 자이비뇨의학과병원',

  ogDescription:
    '자연스러운 볼륨 개선과 빠른 회복을 고려한 자이비뇨의학과병원 필러 음경확대술. 개인별 상태에 맞는 상담과 시술 방법을 안내합니다.',

  ogImage: pageImage,

  twitterTitle: '필러 음경확대술 | 자이비뇨의학과병원',

  twitterDescription:
    '자연스러운 볼륨 개선과 빠른 회복을 고려한 필러 음경확대술. 개인별 상태에 맞는 상담을 제공합니다.',

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
      '@type': 'MedicalProcedure',
      name: '필러 음경확대술'
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
        name: '필러 음경확대술',
        item: pageUrl
      }
    ]
  })
])
</script>

<style scoped lang="scss">
.filler-page {
  background: #fff;
}
</style>
