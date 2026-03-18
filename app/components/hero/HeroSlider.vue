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
            <source :srcset="slide.sm" media="(max-width: 767px)" />
            <source :srcset="slide.md" media="(max-width: 1024px)" />
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
    pc: '/images/home-01.webp',
    md: '/images/home-01-md.webp',
    sm: '/images/home-01-sm.webp',
    alt: '자이비뇨의학과 메인 배너 1'
  },
  {
    pc: '/images/home-02.webp',
    md: '/images/home-02-md.webp',
    sm: '/images/home-02-sm.webp',
    alt: '자이비뇨의학과 메인 배너 2'
  },
  {
    pc: '/images/home-03.webp',
    md: '/images/home-03-md.webp',
    sm: '/images/home-03-sm.webp',
    alt: '자이비뇨의학과 메인 배너 3'
  },
  {
    pc: '/images/home-04.webp',
    md: '/images/home-04-md.webp',
    sm: '/images/home-04-sm.webp',
    alt: '자이비뇨의학과 메인 배너 4'
  }
]
</script>

<style scoped lang="scss">
.hero {
  position: relative;
  width: 100%;
  overflow: hidden;
  background: #dfe8f6;
}

.hero-swiper {
  width: 100%;
  height: clamp(560px, 37vw, 720px);
}

.hero-slide {
  width: 100%;
  height: 100%;
  overflow: hidden;
  background: #dfe8f6;

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
  background: rgba(255, 255, 255, 0.72);
  opacity: 1;
}

:deep(.swiper-pagination-bullet-active) {
  background: #ffffff;
}

/* 1024 이하: md 이미지 사용 */
@include laptop-down {
  .hero-swiper {
    height: auto;
    aspect-ratio: 1 / 1;
    min-height: 520px;
    max-height: calc(120svh - 76px);
  }

  .hero-slide img {
    object-fit: cover;
    object-position: center center;
  }

  :deep(.swiper-pagination) {
    bottom: 16px !important;
  }

  :deep(.swiper-pagination-bullet) {
    width: 9px;
    height: 9px;
  }
}

/* 767 이하: sm 이미지 사용 */
@include mobile {
  .hero-swiper {
    aspect-ratio: 2 / 3;
    min-height: 380px;
    max-height: calc(120svh - 72px);
  }

  .hero-slide img {
    object-position: center top;
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
