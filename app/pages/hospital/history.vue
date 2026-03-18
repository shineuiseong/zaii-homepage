<template>
  <div class="history-page">
    <HospitalPageHero
      image-src="/images/main/history-hero.webp"
      eyebrow="THE FIRST AND THE BEST"
      title="자이비뇨의학과병원 발자취"
      description="전립선 질환만을 깊이 있게 연구하고 치료해온 자이비뇨의학과병원의 여정입니다. 축적된 경험을 바탕으로 국내 유일의 비뇨의학과 병원으로 성장해왔습니다."
    />

    <HospitalSubTabs :tabs="tabs" />

    <HistoryIntroSection />

    <HistoryTimelineSection :items="timelineItems" />

    <HistoryRoadCardsSection />

    <section class="history-summary section">
      <div class="container">
        <div class="history-summary__card">
          <p class="history-summary__eyebrow">TODAY</p>
          <h2 class="history-summary__title">
            30년 가까운 임상 경험 위에
            <span>유로리프트 3500례 달성</span>
          </h2>
          <p class="history-summary__desc">
            자이비뇨의학과병원은 단순한 시술 건수보다 환자 상태를 정확히 판단하고 적절한 치료를
            선택하는 경험의 밀도를 중요하게 생각합니다.
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import HospitalPageHero from '~/components/hospital/HospitalPageHero.vue'
import HospitalSubTabs from '~/components/hospital/HospitalSubTabs.vue'
import HistoryIntroSection from '~/components/hospital/HistoryIntroSection.vue'
import HistoryTimelineSection from '~/components/hospital/HistoryTimelineSection.vue'
import HistoryRoadCardsSection from '~/components/hospital/HistoryRoadCardsSection.vue'

const tabs = [
  { label: '자이비뇨의학과병원 발자취', to: '/hospital/history', current: true },
  { label: '유로리프트를 만나다', to: '/hospital/urolift', current: false },
  { label: '브랜드스토리', to: '/hospital/brand', current: false },
  { label: '의료진소개', to: '/hospital/medical-team', current: false },
  { label: '진료안내', to: '/hospital/guide', current: false },
  { label: '둘러보기', to: '/hospital/tour', current: false },
  { label: '찾아오시는길', to: '/hospital/location', current: false }
]

const timelineItems = [
  {
    period: '1998 ~ 2006',
    title: '연세플러스비뇨기과 대표원장',
    points: [
      '전립선비대증에 대한 다양한 수술 진행',
      'TUNA(전립선 고주파 박리술)',
      'TURP(경요도 전립선 절제술)',
      '전립선 치료 연간 500례 이상 진행'
    ]
  },
  {
    period: '2007 ~ 2014',
    title: '자이비뇨기과병원',
    points: [
      'KTP, DVP 등 Laser 전립선 수술',
      'Hybrid technique 등',
      '전립선 수술 연간 1000례 이상 시행',
      '전립선 수술 및 치료 10000례 이상 경험 축적'
    ]
  },
  {
    period: '2016 ~ 2017',
    title: '나은병원 전립선센터장, 비뇨기과 과장',
    points: ['2016년 6월부터 유로리프트 도입', '시술 200례 진행']
  },
  {
    period: '2017',
    title: '유로리프트 연수, UroLift 개발팀과 호주의 4개 병원 단기연수',
    points: [
      '호주 시드니 및 캔버라 지역 방문',
      'UroLift를 활발히 시행하는 센터 4곳의 병원 견학',
      'UroLift 개발자 중 한 분과 교류',
      '시스템 테크닉과 환자 경험에 대한 심도 있는 논의'
    ]
  },
  {
    period: '2018 ~ 2019',
    title: '강남베드로병원 전립선센터장, 비뇨기과 원장',
    points: ['유로리프트 200례 진행', '2019년 유로리프트 시술 400례 달성']
  },
  {
    period: '2020 ~ 2022',
    title: '자이비뇨의학과',
    points: [
      '2020년 UroLift 중점시술병원으로 자이비뇨의학과 개원',
      'UroLift 시술 교육기관 지정',
      '유로리프트 1000례 이상 실시'
    ]
  },
  {
    period: '2022 ~ 현재',
    title: '자이비뇨의학과병원 개원',
    points: [
      '국내 유일 병원급 비뇨의학과 단일 의료기관',
      '30년 경력의 병원장이 직접 진료 및 시술',
      '유로리프트 3500례 달성'
    ]
  }
]
</script>

<style scoped lang="scss">
.history-page {
  background: #fff;
}

.history-summary__card {
  padding: 36px 40px;
  border-radius: 24px;
  background: linear-gradient(135deg, #edf6ff 0%, #f8fbff 100%);
  border: 1px solid #d9e9f8;
}

.history-summary__eyebrow {
  margin: 0 0 10px;
  font-size: 13px;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: $text-muted;
}

.history-summary__title {
  margin: 0;
  font-size: 32px;
  line-height: 1.35;
  font-weight: 800;
  color: $text-main;
  word-break: keep-all;

  span {
    color: $color-primary;
  }
}

.history-summary__desc {
  margin: 14px 0 0;
  font-size: 17px;
  line-height: 1.8;
  color: $text-sub;
  word-break: keep-all;
}

@include laptop-down {
  .history-summary__card {
    padding: 28px 24px;
  }

  .history-summary__title {
    font-size: 26px;
  }

  .history-summary__desc {
    font-size: 16px;
  }
}

@include mobile {
  .history-summary__card {
    padding: 22px 18px;
    border-radius: 18px;
  }

  .history-summary__title {
    font-size: 22px;
  }

  .history-summary__desc {
    font-size: 15px;
    line-height: 1.75;
  }
}
</style>
