<template>
  <main class="consultation-page">
    <!-- =====================================================
         Hero
    ====================================================== -->
    <section class="consultation-hero">
      <div class="consultation-hero__watermark" aria-hidden="true">ZAII</div>

      <div class="consultation-hero__inner">
        <span class="consultation-hero__line" />

        <p class="consultation-hero__eyebrow">온라인 상담</p>

        <h1>
          궁금하신 내용을
          <br />
          <strong>편하게 남겨주세요.</strong>
        </h1>

        <p class="consultation-hero__description">
          성함과 연락처, 상담 내용을 남겨주시면
          <br class="desktop-only" />
          확인 후 상담을 도와드리겠습니다.
        </p>
      </div>
    </section>

    <!-- =====================================================
         Content
    ====================================================== -->
    <section class="consultation-content">
      <div class="consultation-content__inner">
        <!-- =========================
             Information
        ========================== -->
        <aside class="consultation-info">
          <p class="consultation-info__eyebrow">상담 안내</p>

          <h2>
            간편하게 접수하고
            <br />
            상담받으세요.
          </h2>

          <p class="consultation-info__description">
            상담 신청 내용을 확인한 후
            <br />
            입력하신 연락처로 안내해 드립니다.
          </p>

          <div class="consultation-guide">
            <div class="consultation-guide__item">
              <span> 온라인 상담 </span>

              <strong> 24시간 접수 가능 </strong>
            </div>

            <div class="consultation-guide__item">
              <span> 대표번호 </span>

              <a href="tel:0262075678"> 02-6207-5678 </a>
            </div>

            <div class="consultation-guide__item">
              <span> 상담 내용 </span>

              <strong> 증상 및 진료 문의 </strong>
            </div>
          </div>
        </aside>

        <!-- =========================
             Form
        ========================== -->
        <div class="consultation-form-area">
          <ConsultationForm />
        </div>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
import { defineBreadcrumb, defineWebPage, useSchemaOrg } from '#imports'

import ConsultationForm from '~/components/forms/ConsultationForm.vue'

import { usePageSeo } from '~/composables/usePageSeo'

const config = useRuntimeConfig()

const siteUrl = config.public.siteUrl || 'https://zaii.kr'

const pageUrl = `${siteUrl}/consultation`

const pageTitle = '온라인상담 | 자이비뇨의학과병원'

const pageDescription =
  '자이비뇨의학과병원 온라인상담 페이지입니다. 성함과 연락처, 상담 내용을 남겨주시면 확인 후 상담을 도와드립니다.'

const pageImage = `${siteUrl}/images/og-image.png`

usePageSeo({
  title: pageTitle,

  description: pageDescription,

  path: '/consultation',

  keywords:
    '자이비뇨의학과병원, 온라인상담, 비뇨의학과 상담, 전립선비대증 상담, 유로리프트 상담, 리줌 상담',

  ogDescription: '성함과 연락처, 상담 내용을 남겨주시면 확인 후 상담을 도와드립니다.',

  twitterTitle: pageTitle,

  twitterDescription: '온라인으로 간편하게 상담을 신청해 보세요.',

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

        item: `${siteUrl}/`
      },

      {
        position: 2,

        name: '온라인상담',

        item: pageUrl
      }
    ]
  })
])
</script>

<style scoped lang="scss">
/* =========================================================
   Page
========================================================= */

.consultation-page {
  width: 100%;

  min-height: 100vh;

  background: #f7f9fb;

  color: #172334;
}

/* =========================================================
   Hero
========================================================= */

.consultation-hero {
  position: relative;

  height: 410px;

  display: flex;

  align-items: center;

  overflow: hidden;

  background:
    radial-gradient(circle at 80% 20%, rgba(64, 126, 184, 0.13), transparent 35%),
    linear-gradient(135deg, #132b49 0%, #0d223b 55%, #08192c 100%);

  color: #ffffff;
}

.consultation-hero__inner {
  position: relative;

  z-index: 2;

  width: min(1200px, calc(100% - 80px));

  margin: 0 auto;

  padding-top: 40px;
}

.consultation-hero__line {
  display: block;

  width: 36px;
  height: 2px;

  margin-bottom: 20px;

  background: #5d9ed5;
}

.consultation-hero__eyebrow {
  margin: 0 0 16px;

  color: rgba(121, 176, 221, 0.95);

  font-size: 13px;

  font-weight: 450;

  letter-spacing: 0.08em;
}

.consultation-hero h1 {
  margin: 0;

  color: #ffffff;

  font-size: clamp(42px, 4vw, 62px);

  font-weight: 300;

  line-height: 1.18;

  letter-spacing: -0.057em;

  word-break: keep-all;
}

.consultation-hero h1 strong {
  font-weight: 650;
}

.consultation-hero__description {
  margin: 22px 0 0;

  color: rgba(255, 255, 255, 0.55);

  font-size: 15px;

  font-weight: 300;

  line-height: 1.8;
}

/* =========================================================
   Watermark
========================================================= */

.consultation-hero__watermark {
  position: absolute;

  right: -25px;
  bottom: -110px;

  color: rgba(255, 255, 255, 0.025);

  font-size: clamp(260px, 25vw, 500px);

  font-weight: 700;

  line-height: 1;

  letter-spacing: -0.09em;

  user-select: none;

  pointer-events: none;
}

/* =========================================================
   Content
========================================================= */

.consultation-content {
  padding: 95px 0 130px;
}

.consultation-content__inner {
  width: min(1200px, calc(100% - 80px));

  margin: 0 auto;

  display: grid;

  grid-template-columns:
    minmax(280px, 0.7fr)
    minmax(0, 1.3fr);

  gap: clamp(70px, 8vw, 130px);

  align-items: start;
}

/* =========================================================
   Info
========================================================= */

.consultation-info {
  position: sticky;

  top: 120px;

  padding-top: 5px;
}

.consultation-info__eyebrow {
  margin: 0 0 15px;

  color: #3679b5;

  font-size: 12px;

  font-weight: 500;

  letter-spacing: 0.1em;
}

.consultation-info h2 {
  margin: 0;

  color: #172334;

  font-size: 34px;

  font-weight: 450;

  line-height: 1.32;

  letter-spacing: -0.05em;
}

.consultation-info__description {
  margin: 19px 0 0;

  color: #828c97;

  font-size: 14px;

  font-weight: 350;

  line-height: 1.8;
}

/* =========================================================
   Guide
========================================================= */

.consultation-guide {
  margin-top: 42px;

  border-top: 1px solid #dce2e8;
}

.consultation-guide__item {
  padding: 18px 0;

  display: flex;

  align-items: baseline;

  justify-content: space-between;

  gap: 20px;

  border-bottom: 1px solid #dce2e8;
}

.consultation-guide__item > span {
  color: #8d97a1;

  font-size: 12px;

  font-weight: 350;
}

.consultation-guide__item strong {
  color: #26384a;

  font-size: 14px;

  font-weight: 500;

  text-align: right;
}

.consultation-guide__item a {
  color: #245e94;

  font-size: 17px;

  font-weight: 600;

  text-decoration: none;

  font-variant-numeric: tabular-nums;
}

/* =========================================================
   Form area
========================================================= */

.consultation-form-area {
  min-width: 0;

  padding: 46px 50px 50px;

  background: #ffffff;

  border-top: 2px solid #286cae;

  box-shadow: 0 18px 55px rgba(23, 42, 64, 0.05);
}

/* =========================================================
   Tablet
========================================================= */

@media (max-width: 1024px) {
  .consultation-content__inner {
    gap: 55px;
  }

  .consultation-form-area {
    padding: 40px 35px;
  }
}

/* =========================================================
   Mobile
========================================================= */

@include mobile {
  .consultation-hero {
    height: 360px;
  }

  .consultation-hero__inner {
    width: calc(100% - 40px);

    padding-top: 30px;
  }

  .consultation-hero h1 {
    font-size: 36px;

    line-height: 1.22;
  }

  .consultation-hero__description {
    margin-top: 18px;

    font-size: 13px;
  }

  .desktop-only {
    display: none;
  }

  .consultation-hero__watermark {
    right: -70px;
    bottom: -30px;

    font-size: 220px;
  }

  .consultation-content {
    padding: 60px 0 90px;
  }

  .consultation-content__inner {
    width: calc(100% - 40px);

    display: block;
  }

  .consultation-info {
    position: static;

    margin-bottom: 42px;
  }

  .consultation-info h2 {
    font-size: 28px;
  }

  .consultation-guide {
    margin-top: 30px;
  }

  .consultation-form-area {
    padding: 30px 20px 34px;

    box-shadow: none;
  }
}
</style>
