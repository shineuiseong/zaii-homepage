<template>
  <section class="hospital-sub-tabs">
    <div class="container">
      <div
        class="hospital-sub-tabs__wrap"
        :class="{
          'is-left-visible': showLeft,
          'is-right-visible': showRight
        }"
      >
        <button
          v-if="showLeft"
          type="button"
          class="hospital-sub-tabs__arrow is-left"
          aria-label="이전 탭 보기"
          @click="scrollLeft"
        >
          <span aria-hidden="true">‹</span>
        </button>

        <nav
          ref="navRef"
          class="hospital-sub-tabs__nav"
          aria-label="병원 소개 메뉴"
          @scroll="checkScroll"
          @mousedown="onDragStart"
          @mousemove="onDragMove"
          @mouseup="onDragEnd"
          @mouseleave="onDragEnd"
          @touchstart="onTouchStart"
          @touchmove="onTouchMove"
          @touchend="onDragEnd"
        >
          <NuxtLink
            v-for="tab in tabs"
            :key="tab.label"
            :to="tab.to"
            class="hospital-sub-tabs__link"
            :class="{ 'is-active': tab.current }"
            @dragstart.prevent
          >
            <span class="hospital-sub-tabs__text">
              {{ tab.label }}
            </span>
          </NuxtLink>
        </nav>

        <button
          v-if="showRight"
          type="button"
          class="hospital-sub-tabs__arrow is-right"
          aria-label="다음 탭 보기"
          @click="scrollRight"
        >
          <span aria-hidden="true">›</span>
        </button>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { nextTick, onBeforeUnmount, onMounted, ref } from 'vue'

defineProps<{
  tabs: {
    label: string
    to: string
    current?: boolean
  }[]
}>()

const navRef = ref<HTMLElement | null>(null)

const showLeft = ref(false)
const showRight = ref(false)

const isDragging = ref(false)
const movedDuringDrag = ref(false)
const startX = ref(0)
const startScrollLeft = ref(0)

function checkScroll() {
  const el = navRef.value
  if (!el) return

  const maxScrollLeft = el.scrollWidth - el.clientWidth
  showLeft.value = el.scrollLeft > 4
  showRight.value = el.scrollLeft < maxScrollLeft - 4
}

function scrollLeft() {
  const el = navRef.value
  if (!el) return

  el.scrollBy({
    left: -220,
    behavior: 'smooth'
  })

  window.setTimeout(checkScroll, 250)
}

function scrollRight() {
  const el = navRef.value
  if (!el) return

  el.scrollBy({
    left: 220,
    behavior: 'smooth'
  })

  window.setTimeout(checkScroll, 250)
}

function onDragStart(e: MouseEvent) {
  const el = navRef.value
  if (!el) return

  isDragging.value = true
  movedDuringDrag.value = false
  startX.value = e.pageX
  startScrollLeft.value = el.scrollLeft

  el.classList.add('is-dragging')
}

function onDragMove(e: MouseEvent) {
  const el = navRef.value
  if (!el || !isDragging.value) return

  const diff = e.pageX - startX.value

  if (Math.abs(diff) > 3) {
    movedDuringDrag.value = true
  }

  e.preventDefault()
  el.scrollLeft = startScrollLeft.value - diff
  checkScroll()
}

function onTouchStart(e: TouchEvent) {
  const el = navRef.value
  if (!el) return

  isDragging.value = true
  movedDuringDrag.value = false
  startX.value = e.touches[0]?.pageX ?? 0
  startScrollLeft.value = el.scrollLeft
}

function onTouchMove(e: TouchEvent) {
  const el = navRef.value
  if (!el || !isDragging.value) return

  const currentX = e.touches[0]?.pageX ?? 0
  const diff = currentX - startX.value

  if (Math.abs(diff) > 3) {
    movedDuringDrag.value = true
  }

  el.scrollLeft = startScrollLeft.value - diff
  checkScroll()
}

function onDragEnd() {
  const el = navRef.value
  isDragging.value = false
  startX.value = 0
  startScrollLeft.value = 0

  if (el) {
    el.classList.remove('is-dragging')
  }

  window.setTimeout(() => {
    movedDuringDrag.value = false
    checkScroll()
  }, 0)
}

function onResize() {
  checkScroll()
}

onMounted(async () => {
  await nextTick()
  checkScroll()
  window.addEventListener('resize', onResize)
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', onResize)
})
</script>

<style scoped lang="scss">
.hospital-sub-tabs {
  position: relative;
  z-index: 2;
  margin-top: -36px;
}

.hospital-sub-tabs__wrap {
  position: relative;

  &::before,
  &::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    width: 44px;
    z-index: 2;
    pointer-events: none;
    opacity: 0;
    transition: opacity 0.2s ease;
  }

  &::before {
    left: 0;
    background: linear-gradient(to right, rgba(255, 255, 255, 0.96), rgba(255, 255, 255, 0));
  }

  &::after {
    right: 0;
    background: linear-gradient(to left, rgba(255, 255, 255, 0.96), rgba(255, 255, 255, 0));
  }

  &.is-left-visible::before {
    opacity: 1;
  }

  &.is-right-visible::after {
    opacity: 1;
  }
}

.hospital-sub-tabs__nav {
  display: flex;
  align-items: stretch;
  overflow-x: auto;
  overflow-y: hidden;
  background: #fff;
  border: 1px solid #dce6f1;
  box-shadow: 0 14px 36px rgba(15, 23, 42, 0.08);
  scroll-behavior: smooth;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: none;
  cursor: grab;
  user-select: none;

  &::-webkit-scrollbar {
    display: none;
  }

  &.is-dragging {
    cursor: grabbing;
    scroll-behavior: auto;
  }
}

.hospital-sub-tabs__link {
  position: relative;
  z-index: 1;
  flex: 0 0 auto;
  min-width: 168px;
  min-height: 72px;
  padding: 14px 20px;
  border-right: 1px solid #e5edf5;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: #fff;
  color: $text-sub;
  text-align: center;
  text-decoration: none;
  white-space: nowrap;
  transition:
    background 0.2s ease,
    color 0.2s ease,
    box-shadow 0.2s ease;

  &:last-child {
    border-right: 0;
  }

  &:hover {
    color: $color-primary;
    background: #f8fbff;
  }

  &.is-active {
    color: $text-main;
    background: #f8fbff;
    box-shadow: inset 0 -3px 0 $color-primary;
  }
}

.hospital-sub-tabs__text {
  display: block;
  font-size: 15px;
  font-weight: 700;
  line-height: 1.35;
  word-break: keep-all;
}

.hospital-sub-tabs__arrow {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 3;
  width: 38px;
  height: 38px;
  border: 1px solid #dce6f1;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.96);
  box-shadow: 0 8px 18px rgba(15, 23, 42, 0.12);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: $text-main;
  cursor: pointer;
  transition:
    transform 0.2s ease,
    background 0.2s ease,
    color 0.2s ease,
    box-shadow 0.2s ease;

  &:hover {
    background: #fff;
    color: $color-primary;
    box-shadow: 0 10px 22px rgba(15, 23, 42, 0.16);
  }

  span {
    font-size: 24px;
    line-height: 1;
    transform: translateY(-1px);
  }

  &.is-left {
    left: 10px;
  }

  &.is-right {
    right: 10px;
  }
}

@include laptop-down {
  .hospital-sub-tabs {
    margin-top: 0;
  }

  .hospital-sub-tabs__nav {
    border-left: 0;
    border-right: 0;
    box-shadow: none;
  }

  .hospital-sub-tabs__link {
    min-width: 132px;
    min-height: 58px;
    padding: 10px 16px;
  }

  .hospital-sub-tabs__text {
    font-size: 14px;
  }

  .hospital-sub-tabs__arrow {
    width: 34px;
    height: 34px;

    &.is-left {
      left: 8px;
    }

    &.is-right {
      right: 8px;
    }

    span {
      font-size: 22px;
    }
  }

  .hospital-sub-tabs__wrap {
    &::before,
    &::after {
      width: 32px;
    }
  }
}

@include mobile {
  .hospital-sub-tabs__nav {
    scroll-snap-type: x proximity;
  }

  .hospital-sub-tabs__link {
    min-width: 112px;
    min-height: 52px;
    padding: 8px 14px;
    scroll-snap-align: start;
  }

  .hospital-sub-tabs__text {
    font-size: 13px;
  }

  .hospital-sub-tabs__arrow {
    width: 30px;
    height: 30px;

    span {
      font-size: 20px;
    }
  }
}
</style>
