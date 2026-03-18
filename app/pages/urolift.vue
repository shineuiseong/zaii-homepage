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

const sectionItems = [
  { id: 'urolift-intro', label: '유로리프트' },
  { id: 'urolift-process', label: '전립선 비대증이 생기는 과정' },
  { id: 'urolift-feature', label: '전립선결찰술의 특징' },
  { id: 'urolift-procedure', label: '유로리프트 시술과정' },
  { id: 'urolift-result', label: '유로리프트 시술 전후' },
  { id: 'urolift-cases', label: '유로리프트 치료케이스' }
]
</script>
