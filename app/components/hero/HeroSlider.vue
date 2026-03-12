<template>
  <section class="hero">
    <Swiper
      class="hero-swiper"
      :modules="[Autoplay, Pagination]"
      :slides-per-view="1"
      :loop="true"
      :observer="true"
      :observe-parents="true"
      :update-on-window-resize="true"
      :autoplay="{
        delay: 4000,
        disableOnInteraction: false
      }"
      :pagination="{ clickable: true }"
    >
      <SwiperSlide v-for="slide in slides" :key="slide.pc">
        <div class="hero-slide">
          <picture>
            <source :srcset="slide.mobile" media="(max-width: 1280px)" />
            <img :src="slide.pc" :alt="slide.alt" draggable="false" />
          </picture>
        </div>
      </SwiperSlide>
    </Swiper>
  </section>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay, Pagination } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/pagination'

const slides = [
  {
    pc: '/images/home-01.png',
    mobile: '/images/home-01-md.png',
    alt: '자이비뇨의학과 메인 배너 1'
  },
  {
    pc: '/images/home-02.png',
    mobile: '/images/home-02-md.png',
    alt: '자이비뇨의학과 메인 배너 2'
  },
  {
    pc: '/images/home-03.png',
    mobile: '/images/home-03-md.png',
    alt: '자이비뇨의학과 메인 배너 3'
  },
  {
    pc: '/images/home-04.png',
    mobile: '/images/home-04-md.png',
    alt: '자이비뇨의학과 메인 배너 4'
  }
]
</script>

<style scoped lang="scss">
.hero {
  width: 100%;
  position: relative;
  overflow: hidden;
  background: #dfe8f6;
}

.hero-swiper {
  width: 100%;
  height: 700px;
}

.hero-slide {
  width: 100%;
  height: 100%;
  background: #dfe8f6;
  overflow: hidden;

  picture,
  img {
    display: block;
    width: 100%;
    height: 100%;
  }

  img {
    object-fit: cover;
    object-position: center center;
    transition: none;
    backface-visibility: hidden;
    transform: translateZ(0);
  }
}

/* pagination */
:deep(.swiper-pagination) {
  bottom: 20px !important;
}

:deep(.swiper-pagination-bullet) {
  width: 10px;
  height: 10px;
  background: rgba(255, 255, 255, 0.7);
  opacity: 1;
}

:deep(.swiper-pagination-bullet-active) {
  background: #ffffff;
}

/* 1280 이하부터 md 이미지 사용 */
@include desktop-down {
  .hero-swiper {
    height: auto;
    aspect-ratio: 3 / 4;
    max-height: calc(100svh - 88px);
  }

  .hero-slide img {
    object-fit: contain;
    object-position: center center;
  }
}

/* 1024 이하 */
@include laptop-down {
  .hero-swiper {
    max-height: calc(100svh - 76px);
  }

  :deep(.swiper-pagination) {
    bottom: 16px !important;
  }

  :deep(.swiper-pagination-bullet) {
    width: 9px;
    height: 9px;
  }
}

/* 767 이하 */
@include mobile {
  .hero-swiper {
    max-height: calc(100svh - 72px);
  }

  :deep(.swiper-pagination) {
    bottom: 14px !important;
  }

  :deep(.swiper-pagination-bullet) {
    width: 8px;
    height: 8px;
  }
}
</style>
