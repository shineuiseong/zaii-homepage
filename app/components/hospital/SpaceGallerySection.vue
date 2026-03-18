<template>
  <section class="space-gallery section">
    <div class="container">
      <div class="space-gallery__head">
        <p class="space-gallery__eyebrow">ZAII UROLOGY HOSPITAL</p>
        <h2 class="space-gallery__title">병원 공간 소개</h2>
      </div>

      <div class="space-gallery__main-wrap">
        <Swiper
          class="space-gallery__main"
          :modules="[Navigation, Thumbs, Autoplay]"
          :navigation="true"
          :thumbs="{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }"
          :autoplay="{
            delay: 3500,
            disableOnInteraction: false,
            pauseOnMouseEnter: true
          }"
          :loop="true"
          :lazy="true"
          @swiper="setMainSwiper"
          @slideChange="handleSlideChange"
        >
          <SwiperSlide v-for="(img, index) in images" :key="img">
            <button type="button" class="space-gallery__zoom-button" @click="openModal(index)">
              <img :src="img" :alt="`자이비뇨의학과 공간 이미지 ${index + 1}`" loading="lazy" />
            </button>
          </SwiperSlide>
        </Swiper>

        <div class="space-gallery__counter">
          <strong>{{ displayCurrent }}</strong>
          <span>/</span>
          <span>{{ totalCount }}</span>
        </div>
      </div>

      <div class="space-gallery__thumb-row">
        <Swiper
          class="space-gallery__thumbs"
          :modules="[Thumbs]"
          :slides-per-view="2.4"
          :space-between="10"
          :breakpoints="thumbBreakpoints"
          watch-slides-progress
          @swiper="setThumbsSwiper"
        >
          <SwiperSlide v-for="(img, index) in images" :key="img">
            <button type="button" class="space-gallery__thumb-button" @click="goToSlide(index)">
              <img :src="img" :alt="`공간 썸네일 ${index + 1}`" loading="lazy" />
            </button>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>

    <transition name="gallery-fade">
      <div v-if="modalOpen" class="space-gallery__modal" @click.self="closeModal">
        <button
          type="button"
          class="space-gallery__modal-close"
          aria-label="닫기"
          @click="closeModal"
        >
          <Icon name="lucide:x" size="28" />
        </button>

        <button
          type="button"
          class="space-gallery__modal-nav space-gallery__modal-nav--prev"
          aria-label="이전 이미지"
          @click.stop="prevModal"
        >
          <Icon name="lucide:chevron-left" size="36" />
        </button>

        <div class="space-gallery__modal-body">
          <img :src="images[modalIndex]" :alt="`자이비뇨의학과 공간 이미지 ${modalIndex + 1}`" />

          <div class="space-gallery__modal-counter">
            {{ String(modalIndex + 1).padStart(2, '0') }} /
            {{ String(totalCount).padStart(2, '0') }}
          </div>
        </div>

        <button
          type="button"
          class="space-gallery__modal-nav space-gallery__modal-nav--next"
          aria-label="다음 이미지"
          @click.stop="nextModal"
        >
          <Icon name="lucide:chevron-right" size="36" />
        </button>
      </div>
    </transition>
  </section>
</template>

<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation, Thumbs, Autoplay } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/thumbs'

type SwiperInstance = any

const images = Array.from(
  { length: 13 },
  (_, i) => `/images/space/space-${String(i + 1).padStart(2, '0')}.webp`
)

const totalCount = images.length

const thumbsSwiper = ref<SwiperInstance | null>(null)
const mainSwiper = ref<SwiperInstance | null>(null)
const currentIndex = ref(0)

const modalOpen = ref(false)
const modalIndex = ref(0)

const thumbBreakpoints = {
  768: {
    slidesPerView: 4,
    spaceBetween: 12
  },
  1024: {
    slidesPerView: 5,
    spaceBetween: 14
  },
  1280: {
    slidesPerView: 6,
    spaceBetween: 14
  }
}

const displayCurrent = computed(() => {
  return String(currentIndex.value + 1).padStart(2, '0')
})

const setThumbsSwiper = (swiper: SwiperInstance) => {
  thumbsSwiper.value = swiper
}

const setMainSwiper = (swiper: SwiperInstance) => {
  mainSwiper.value = swiper
  currentIndex.value = swiper.realIndex ?? 0
}

const handleSlideChange = (swiper: SwiperInstance) => {
  currentIndex.value = swiper.realIndex ?? 0
}

const goToSlide = (index: number) => {
  if (!mainSwiper.value) return
  mainSwiper.value.slideToLoop(index)
}

const openModal = (index: number) => {
  modalIndex.value = index
  modalOpen.value = true
  document.body.style.overflow = 'hidden'
}

const closeModal = () => {
  modalOpen.value = false
  document.body.style.overflow = ''
}

const prevModal = () => {
  modalIndex.value = (modalIndex.value - 1 + totalCount) % totalCount
}

const nextModal = () => {
  modalIndex.value = (modalIndex.value + 1) % totalCount
}

const onKeydown = (e: KeyboardEvent) => {
  if (!modalOpen.value) return

  if (e.key === 'Escape') closeModal()
  if (e.key === 'ArrowLeft') prevModal()
  if (e.key === 'ArrowRight') nextModal()
}

onMounted(() => {
  window.addEventListener('keydown', onKeydown)
})

onBeforeUnmount(() => {
  window.removeEventListener('keydown', onKeydown)
  document.body.style.overflow = ''
})
</script>

<style scoped lang="scss">
.space-gallery {
  background: #fff;
}

.space-gallery__head {
  text-align: center;
  margin-bottom: 34px;
}

.space-gallery__eyebrow {
  margin: 0 0 8px;
  font-size: 13px;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: $text-muted;
}

.space-gallery__title {
  margin: 0;
  font-size: 40px;
  font-weight: 800;
  color: $text-main;
}

.space-gallery__main-wrap {
  position: relative;
}

.space-gallery__main {
  margin-bottom: 24px;
  overflow: hidden;
  border-radius: 12px;
  background: #eef3f8;
  box-shadow: 0 20px 50px rgba(15, 23, 42, 0.08);
}

.space-gallery__zoom-button {
  @include button-reset;
  display: block;
  width: 100%;
  overflow: hidden;
  background: transparent;
  cursor: zoom-in;

  img {
    width: 100%;
    height: auto;
    aspect-ratio: 16 / 9;
    object-fit: cover;
    display: block;
    transition:
      transform 0.5s ease,
      filter 0.3s ease;
    will-change: transform;
  }

  &:hover img {
    transform: scale(1.04);
    filter: brightness(1.02);
  }
}

.space-gallery__counter {
  position: absolute;
  right: 18px;
  bottom: 18px;
  z-index: 5;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 10px 14px;
  border-radius: 999px;
  background: rgba(15, 23, 42, 0.66);
  backdrop-filter: blur(6px);
  color: #fff;
  font-size: 14px;
  font-weight: 700;

  strong {
    font-size: 16px;
    font-weight: 900;
  }

  span {
    opacity: 0.82;
  }
}

.space-gallery__thumb-row {
  position: relative;
}

.space-gallery__thumbs {
  padding: 4px 2px;
}

.space-gallery__thumb-button {
  @include button-reset;
  display: block;
  width: 100%;
  overflow: hidden;
  border-radius: 8px;
  cursor: pointer;
  background: #e8eef5;

  img {
    display: block;
    width: 100%;
    height: 88px;
    object-fit: cover;
    opacity: 0.66;
    transition:
      opacity 0.25s ease,
      transform 0.25s ease,
      box-shadow 0.25s ease;
  }

  &:hover img {
    opacity: 0.92;
    transform: scale(1.03);
  }
}

:deep(.space-gallery__thumbs .swiper-slide-thumb-active .space-gallery__thumb-button img) {
  opacity: 1;
  box-shadow: inset 0 0 0 4px #7fb3e6;
}

:deep(.space-gallery__main .swiper-button-prev),
:deep(.space-gallery__main .swiper-button-next) {
  color: #000;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.92);
  box-shadow: 0 10px 24px rgba(15, 23, 42, 0.12);
}

:deep(.space-gallery__main .swiper-button-prev::after),
:deep(.space-gallery__main .swiper-button-next::after) {
  font-size: 12px;
  font-weight: 900;
}

:deep(.space-gallery__main .swiper-navigation-icon) {
  width: 16px;
  height: 16px;
}

.space-gallery__modal {
  position: fixed;
  inset: 0;
  z-index: 2000;
  display: grid;
  grid-template-columns: 88px minmax(0, 1fr) 88px;
  align-items: center;
  background: rgba(3, 10, 20, 0.88);
  backdrop-filter: blur(10px);
  padding: 24px;
}

.space-gallery__modal-body {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    max-width: min(1400px, 100%);
    max-height: 86vh;
    width: auto;
    height: auto;
    object-fit: contain;
    border-radius: 12px;
    box-shadow: 0 24px 60px rgba(0, 0, 0, 0.35);
  }
}

.space-gallery__modal-counter {
  position: absolute;
  left: 50%;
  bottom: -44px;
  transform: translateX(-50%);
  color: rgba(255, 255, 255, 0.92);
  font-size: 15px;
  font-weight: 700;
  letter-spacing: 0.04em;
}

.space-gallery__modal-close {
  @include button-reset;
  position: absolute;
  top: 20px;
  right: 20px;
  z-index: 2;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.12);
  color: #fff;
  transition:
    background 0.2s ease,
    transform 0.2s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.2);
    transform: rotate(90deg);
  }
}

.space-gallery__modal-nav {
  @include button-reset;
  width: 56px;
  height: 56px;
  border-radius: 50%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.12);
  color: #fff;
  transition:
    background 0.2s ease,
    transform 0.2s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.22);
    transform: scale(1.06);
  }
}

.space-gallery__modal-nav--prev {
  justify-self: center;
}

.space-gallery__modal-nav--next {
  justify-self: center;
}

.gallery-fade-enter-active,
.gallery-fade-leave-active {
  transition: opacity 0.22s ease;
}

.gallery-fade-enter-from,
.gallery-fade-leave-to {
  opacity: 0;
}

@include desktop-down {
  .space-gallery__title {
    font-size: 34px;
  }

  .space-gallery__zoom-button img {
    aspect-ratio: 16 / 10;
  }
}

@include laptop-down {
  .space-gallery__title {
    font-size: 30px;
  }

  .space-gallery__counter {
    right: 14px;
    bottom: 14px;
    padding: 8px 12px;
  }

  .space-gallery__thumb-button img {
    height: 74px;
  }

  .space-gallery__modal {
    grid-template-columns: 64px minmax(0, 1fr) 64px;
    padding: 18px;
  }
}

@include mobile {
  .space-gallery__head {
    margin-bottom: 22px;
  }

  .space-gallery__eyebrow {
    font-size: 12px;
    letter-spacing: 0.14em;
  }

  .space-gallery__title {
    font-size: 26px;
  }

  .space-gallery__zoom-button img {
    aspect-ratio: 4 / 3;
  }

  .space-gallery__counter {
    right: 10px;
    bottom: 10px;
    font-size: 12px;

    strong {
      font-size: 14px;
    }
  }

  .space-gallery__thumb-button img {
    height: 64px;
  }

  :deep(.space-gallery__main .swiper-button-prev),
  :deep(.space-gallery__main .swiper-button-next) {
    width: 40px;
    height: 40px;
  }

  :deep(.space-gallery__main .swiper-button-prev::after),
  :deep(.space-gallery__main .swiper-button-next::after) {
    font-size: 14px;
  }

  .space-gallery__modal {
    grid-template-columns: 48px minmax(0, 1fr) 48px;
    padding: 12px;
  }

  .space-gallery__modal-body img {
    max-height: 78vh;
  }

  .space-gallery__modal-counter {
    bottom: -34px;
    font-size: 13px;
  }

  .space-gallery__modal-close,
  .space-gallery__modal-nav {
    width: 42px;
    height: 42px;
  }
}
</style>
