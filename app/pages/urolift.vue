<template>
  <div class="urolift-page">
    <UroliftPageHero
      image-src="/images/urolift/urolift-hero.webp"
      top-text="전립선비대증을 빠르게 해결하는 방법 다양한 전립선비대증 유로리프트 시술로 쌓은 임상경험을 바탕으로 하다"
      brand-text="ZAII UROLOGY HOSPITAL"
      title="자이"
      highlight="유로리프트"
    />

    <UroliftSectionNav :items="sectionItems" />

    <UroliftIntroSection />
    <UroliftProcessSection />
    <UroliftFeatureSection />
    <UroliftProcedureSection />
    <UroliftResultSection />
    <UroliftCasesSection />
  </div>
</template>

<script setup lang="ts">
import UroliftPageHero from '~/components/urolift/UroliftPageHero.vue'
import UroliftSectionNav from '~/components/urolift/UroliftSectionNav.vue'
import UroliftIntroSection from '~/components/urolift/UroliftIntroSection.vue'
import UroliftProcessSection from '~/components/urolift/UroliftProcessSection.vue'
import UroliftFeatureSection from '~/components/urolift/UroliftFeatureSection.vue'
import UroliftProcedureSection from '~/components/urolift/UroliftProcedureSection.vue'
import UroliftResultSection from '~/components/urolift/UroliftResultSection.vue'
import UroliftCasesSection from '~/components/urolift/UroliftCasesSection.vue'
import { usePageSeo } from '~/composables/usePageSeo'

const config = useRuntimeConfig()
const siteUrl = config.public.siteUrl || 'https://zaii.kr'
const pageUrl = `${siteUrl}/urolift`
const pageTitle = '유로리프트 시술 | 전립선비대증 치료'

const pageDescription =
  '유로리프트(UroLift)는 전립선 조직을 절개하지 않고 전립선을 결찰해 요도를 넓히는 전립선비대증 치료 방법입니다. 자이비뇨의학과병원은 환자의 상태를 확인한 후 유로리프트 시술 여부와 적합한 치료 방법을 안내합니다.'
const pageImage = `${siteUrl}/images/og-image.png`

const sectionItems = [
  { id: 'urolift-intro', label: '유로리프트' },
  { id: 'urolift-process', label: '전립선 비대증이 생기는 과정' },
  { id: 'urolift-feature', label: '전립선결찰술의 특징' },
  { id: 'urolift-procedure', label: '유로리프트 시술과정' },
  { id: 'urolift-result', label: '유로리프트 시술 전후' },
  { id: 'urolift-cases', label: '유로리프트 치료케이스' }
]

usePageSeo({
  title: pageTitle,

  description: pageDescription,

  path: '/urolift',

  ogType: 'website',

  ogTitle: '유로리프트 시술 | 전립선비대증 치료 | 자이비뇨의학과병원',

  ogDescription:
    '전립선 조직을 절개하지 않고 요도를 넓히는 유로리프트(UroLift) 시술 안내. 환자의 상태에 맞는 전립선비대증 치료 방법을 상담합니다.',

  ogImage: pageImage,

  twitterTitle: '유로리프트 시술 | 전립선비대증 치료 | 자이비뇨의학과병원',

  twitterDescription: '전립선비대증 치료를 위한 유로리프트(UroLift) 시술과 치료 과정을 안내합니다.',

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
        name: '유로리프트',
        item: pageUrl
      }
    ]
  })
])
</script>
