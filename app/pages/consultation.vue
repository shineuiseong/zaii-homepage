<template>
  <section class="consultation-page">
    <div class="container consultation-page__container">
      <div class="consultation-page__head">
        <p class="consultation-page__eyebrow">ZAII UROLOGY HOSPITAL</p>
        <h1 class="consultation-page__title">온라인상담</h1>
        <p class="consultation-page__desc">
          간단한 정보를 남겨주시면 확인 후 상담 도와드리겠습니다.
        </p>
      </div>

      <div class="consultation-page__card">
        <ConsultationForm />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import ConsultationForm from '~/components/forms/ConsultationForm.vue'
import { usePageSeo } from '~/composable/usePageSeo'
usePageSeo({
  title: '온라인상담 | 자이비뇨의학과',
  description:
    '자이비뇨의학과 온라인상담 페이지입니다. 성함과 연락처를 남겨주시면 상담을 도와드립니다.',
  path: '/consultation',
  keywords:
    '자이비뇨의학과, 온라인상담, 비뇨기과 상담, 전립선비대증 상담, 유로리프트 상담, 리줌 상담',
  ogDescription: '온라인으로 간편하게 상담을 신청해보세요. 자이비뇨의학과가 안내해드립니다.',
  twitterTitle: '온라인상담 | 자이비뇨의학과',
  twitterDescription: '성함과 연락처를 남겨주시면 상담을 도와드립니다.'
})
</script>

<style scoped lang="scss">
.consultation-page {
  padding: 72px 0 110px;
  background: #f8fbff;
}

.consultation-page__container {
  max-width: 920px;
}

.consultation-page__head {
  margin-bottom: 28px;
  text-align: center;
}

.consultation-page__eyebrow {
  margin: 0 0 10px;
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 0.16em;
  color: #2563eb;
}

.consultation-page__title {
  margin: 0;
  font-size: 42px;
  line-height: 1.2;
  font-weight: 800;
  color: #111827;
}

.consultation-page__desc {
  margin: 14px auto 0;
  max-width: 560px;
  font-size: 18px;
  line-height: 1.7;
  color: #6b7280;
}

.consultation-page__card {
  padding: 32px;
  border-radius: 28px;
  background: #fff;
  border: 1px solid #e6eef8;
  box-shadow: 0 18px 50px rgba(15, 23, 42, 0.06);
}

@media (max-width: 768px) {
  .consultation-page {
    padding: 48px 0 100px;
  }

  .consultation-page__head {
    margin-bottom: 22px;
    text-align: left;
  }

  .consultation-page__eyebrow {
    font-size: 12px;
  }

  .consultation-page__title {
    font-size: 32px;
  }

  .consultation-page__desc {
    margin: 10px 0 0;
    font-size: 16px;
    max-width: none;
  }

  .consultation-page__card {
    padding: 20px;
    border-radius: 22px;
  }
}
</style>
