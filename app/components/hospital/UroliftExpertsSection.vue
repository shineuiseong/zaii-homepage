<template>
  <section class="urolift-experts section">
    <div class="container">
      <div class="urolift-experts__list">
        <article v-for="item in experts" :key="item.id" class="urolift-expert">
          <div class="urolift-expert__head">
            <h3 class="urolift-expert__title">
              #{{ item.id }} 변재상 원장과 세계적인 비뇨의학과 석학들
            </h3>
            <p class="urolift-expert__desc">
              {{ item.description }}
            </p>
          </div>

          <div class="urolift-expert__grid">
            <div class="urolift-expert__main">
              <div class="urolift-expert__image">
                <img :src="item.mainImage" :alt="item.name" />
              </div>

              <div class="urolift-expert__info">
                <h4 class="urolift-expert__name">{{ item.name }}</h4>
                <p class="urolift-expert__meta">{{ item.affiliation }}</p>
              </div>
            </div>

            <div class="urolift-expert__sub">
              <div class="urolift-expert__image">
                <img :src="item.subImage" :alt="item.subCaption" />
              </div>
              <p class="urolift-expert__caption">{{ item.subCaption }}</p>
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const experts = [
  {
    id: 1,
    name: 'Dr. Peter Chin',
    affiliation: 'Wollongong Private Hospital · University of Wollongong 의과대학',
    description:
      '초기 유로리프트 시술과 임상 연구 경험을 갖춘 비뇨의학과 전문의와의 교류를 통해 시술 방향과 테크닉을 심화했습니다.',
    mainImage: '/images/urolift/urolift-founder-01.png',
    subImage: '/images/urolift/urolift-founder-02.png',
    subCaption: '초기 유로리프트 프로토타입 및 관련 자료'
  },
  {
    id: 2,
    name: 'Dr. Kayvan Haghighi',
    affiliation: 'Campbelltown Private Hospital 비뇨기과 전문의',
    description:
      '호주 현지에서 유로리프트를 활발히 시행하는 의료진과의 연수를 통해 실제 수술 환경과 환자 적용 경험을 넓혔습니다.',
    mainImage: '/images/urolift/urolift-founder-03.png',
    subImage: '/images/urolift/urolift-founder-04.png',
    subCaption: '현지 병원 수술실 및 시술 환경'
  },
  {
    id: 3,
    name: 'Dr. Hodo Haxhimolla',
    affiliation: 'National Canberra Private · 비뇨의학과 전문의',
    description:
      '다양한 비뇨의학과 시술 경험을 갖춘 전문의와의 교류를 통해 유로리프트의 적용 범위와 임상적 해석을 공유했습니다.',
    mainImage: '/images/urolift/urolift-founder-05.png',
    subImage: '/images/urolift/urolift-founder-06.png',
    subCaption: '호주 현지 시술 및 진료 현장'
  },
  {
    id: 4,
    name: 'Dr. Paul Cozzi',
    affiliation: 'Kingsway Day Surgery · 비뇨의학과 전문의',
    description:
      '다기관 임상 경험과 실제 케이스 분석을 통해 시술 안정성과 환자 선택 기준에 대한 이해를 더했습니다.',
    mainImage: '/images/urolift/urolift-founder-08.png',
    subImage: '/images/urolift/urolift-founder-07.png',
    subCaption: '현장 토론 및 임상 교류'
  }
]
</script>

<style scoped lang="scss">
.urolift-experts {
  background: #f7fbff;
}

.urolift-experts__list {
  display: flex;
  flex-direction: column;
  gap: 56px;
}

.urolift-expert__head {
  margin-bottom: 20px;
}

.urolift-expert__title {
  margin: 0;
  font-size: 32px;
  line-height: 1.3;
  font-weight: 800;
  color: $text-main;
}

.urolift-expert__desc {
  margin: 12px 0 0;
  font-size: 16px;
  line-height: 1.8;
  color: $text-sub;
  word-break: keep-all;
}

.urolift-expert__grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 26px;
}

.urolift-expert__image {
  overflow: hidden;
  background: #e9eef5;

  img {
    display: block;
    width: 100%;
    height: auto;
    aspect-ratio: 16 / 10;
    object-fit: cover;
  }
}

.urolift-expert__info {
  padding-top: 14px;
  text-align: center;
}

.urolift-expert__name {
  margin: 0;
  font-size: 22px;
  font-weight: 800;
  color: $text-main;
}

.urolift-expert__meta {
  margin: 8px 0 0;
  font-size: 15px;
  line-height: 1.7;
  color: $text-sub;
  word-break: keep-all;
}

.urolift-expert__caption {
  margin: 14px 0 0;
  font-size: 15px;
  line-height: 1.7;
  text-align: center;
  color: $text-sub;
  word-break: keep-all;
}

@include laptop-down {
  .urolift-expert__title {
    font-size: 26px;
  }

  .urolift-expert__grid {
    grid-template-columns: 1fr;
  }
}

@include mobile {
  .urolift-experts__list {
    gap: 40px;
  }

  .urolift-expert__title {
    font-size: 22px;
  }

  .urolift-expert__desc,
  .urolift-expert__meta,
  .urolift-expert__caption {
    font-size: 14px;
  }

  .urolift-expert__name {
    font-size: 18px;
  }
}
</style>
