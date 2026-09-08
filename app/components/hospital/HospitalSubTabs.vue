<template>
  <section class="hospital-sub-tabs">
    <div class="container hospital-sub-tabs__container">
      <div class="hospital-sub-tabs__wrap">
        <!-- LEFT -->
        <button
          type="button"
          class="hospital-sub-tabs__arrow hospital-sub-tabs__arrow--left"
          :class="{ 'is-disabled': !showLeft }"
          :disabled="!showLeft"
          aria-label="이전 메뉴 보기"
          @click="scrollLeft"
        >
          <Icon name="lucide:chevron-left" size="22" />
        </button>

        <!-- NAV -->
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

        <!-- RIGHT -->
        <button
          type="button"
          class="hospital-sub-tabs__arrow hospital-sub-tabs__arrow--right"
          :class="{ 'is-disabled': !showRight }"
          :disabled="!showRight"
          aria-label="다음 메뉴 보기"
          @click="scrollRight"
        >
          <Icon name="lucide:chevron-right" size="22" />
        </button>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { nextTick, onBeforeUnmount, onMounted, ref, watch } from 'vue'

const props = defineProps<{
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

const startX = ref(0)
const startScrollLeft = ref(0)

function isDesktop() {
  return window.innerWidth > 1024
}

function checkScroll() {
  const el = navRef.value

  if (!el) return

  if (isDesktop()) {
    showLeft.value = false
    showRight.value = false
    return
  }

  const maxScrollLeft = Math.max(0, el.scrollWidth - el.clientWidth)

  showLeft.value = el.scrollLeft > 5
  showRight.value = el.scrollLeft < maxScrollLeft - 5
}

function scrollActiveTabIntoView(behavior: ScrollBehavior = 'auto') {
  const navEl = navRef.value

  if (!navEl) return

  /*
   * PC에서는 7개 메뉴가 전부 화면 안에 들어가므로
   * 스크롤 위치를 강제로 변경하지 않음
   */
  if (isDesktop()) {
    navEl.scrollLeft = 0
    return
  }

  const activeEl = navEl.querySelector('.hospital-sub-tabs__link.is-active') as HTMLElement | null

  if (!activeEl) return

  const targetLeft = activeEl.offsetLeft - navEl.clientWidth / 2 + activeEl.clientWidth / 2

  const maxScrollLeft = navEl.scrollWidth - navEl.clientWidth

  const nextLeft = Math.max(0, Math.min(targetLeft, maxScrollLeft))

  navEl.scrollTo({
    left: nextLeft,
    behavior
  })

  window.setTimeout(checkScroll, behavior === 'smooth' ? 350 : 50)
}

function scrollLeft() {
  const el = navRef.value

  if (!el) return

  const amount = Math.max(220, el.clientWidth * 0.7)

  el.scrollBy({
    left: -amount,
    behavior: 'smooth'
  })

  window.setTimeout(checkScroll, 350)
}

function scrollRight() {
  const el = navRef.value

  if (!el) return

  const amount = Math.max(220, el.clientWidth * 0.7)

  el.scrollBy({
    left: amount,
    behavior: 'smooth'
  })

  window.setTimeout(checkScroll, 350)
}

function onDragStart(e: MouseEvent) {
  const el = navRef.value

  if (!el || isDesktop()) return

  isDragging.value = true

  startX.value = e.pageX
  startScrollLeft.value = el.scrollLeft

  el.classList.add('is-dragging')
}

function onDragMove(e: MouseEvent) {
  const el = navRef.value

  if (!el || !isDragging.value || isDesktop()) return

  const diff = e.pageX - startX.value

  e.preventDefault()

  el.scrollLeft = startScrollLeft.value - diff

  checkScroll()
}

function onTouchStart(e: TouchEvent) {
  const el = navRef.value

  if (!el) return

  isDragging.value = true

  startX.value = e.touches[0]?.pageX ?? 0

  startScrollLeft.value = el.scrollLeft
}

function onTouchMove(e: TouchEvent) {
  const el = navRef.value

  if (!el || !isDragging.value) return

  const currentX = e.touches[0]?.pageX ?? 0

  const diff = currentX - startX.value

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

  window.setTimeout(checkScroll, 30)
}

function onResize() {
  const el = navRef.value

  if (!el) return

  if (isDesktop()) {
    el.scrollLeft = 0
  } else {
    scrollActiveTabIntoView('auto')
  }

  checkScroll()
}

onMounted(async () => {
  await nextTick()

  if (isDesktop()) {
    if (navRef.value) {
      navRef.value.scrollLeft = 0
    }
  } else {
    scrollActiveTabIntoView('auto')
  }

  checkScroll()

  window.addEventListener('resize', onResize)
})

watch(
  () => props.tabs.map((tab) => `${tab.to}:${tab.current ? '1' : '0'}`).join('|'),

  async () => {
    await nextTick()

    scrollActiveTabIntoView('smooth')
  }
)

onBeforeUnmount(() => {
  window.removeEventListener('resize', onResize)
})
</script>

<style scoped lang="scss">
/* ========================================================
   ROOT
======================================================== */

.hospital-sub-tabs {
  position: relative;
  z-index: 10;

  margin-top: -30px;
}

.hospital-sub-tabs__container {
  position: relative;
}

/* ========================================================
   WRAP
======================================================== */

.hospital-sub-tabs__wrap {
  position: relative;

  width: 100%;
  max-width: $container-width;

  margin: 0 auto;

  background: $color-white;

  border: 1px solid $color-border;

  box-shadow: $shadow-md;
}

/* ========================================================
   NAV
======================================================== */

.hospital-sub-tabs__nav {
  position: relative;

  display: grid;
  grid-template-columns: repeat(6, minmax(0, 1fr));

  width: 100%;
  min-height: 84px;

  overflow: hidden;

  background: $color-white;

  scrollbar-width: none;

  user-select: none;

  &::-webkit-scrollbar {
    display: none;
  }
}

/* ========================================================
   LINK
======================================================== */

.hospital-sub-tabs__link {
  position: relative;

  display: flex;
  align-items: center;
  justify-content: center;

  min-width: 0;
  min-height: 84px;

  padding: 0 12px;

  color: $text-muted;

  text-align: center;
  text-decoration: none;

  transition:
    color 0.2s ease,
    background 0.2s ease;

  /*
   * 모든 탭에 동일한 하단 영역을 확보하고
   * active에서만 primary 컬러 노출
   */
  &::after {
    content: '';

    position: absolute;

    right: 0;
    bottom: 0;
    left: 0;

    height: 3px;

    background: transparent;

    transition: background 0.2s ease;
  }

  &:hover {
    color: $color-primary;

    background: rgba($color-primary, 0.035);
  }

  &.is-active {
    color: $color-primary;

    background: rgba($color-primary, 0.025);

    &::after {
      background: $color-primary;
    }

    .hospital-sub-tabs__text {
      font-weight: 700;
    }
  }
}

/* ========================================================
   TEXT
======================================================== */

.hospital-sub-tabs__text {
  display: block;

  width: 100%;

  font-size: 17px;
  line-height: 1.45;

  font-weight: 600;

  letter-spacing: -0.035em;

  text-align: center;

  word-break: keep-all;
}

/* ========================================================
   ARROWS
======================================================== */

.hospital-sub-tabs__arrow {
  position: absolute;

  top: 50%;

  z-index: 5;

  display: none;
  align-items: center;
  justify-content: center;

  width: 42px;
  height: 42px;

  padding: 0;

  border: 1px solid $color-gray-200;
  border-radius: 50%;

  background: $color-white;

  color: $text-sub;

  box-shadow: $shadow-sm;

  cursor: pointer;

  transform: translateY(-50%);

  transition:
    opacity 0.2s ease,
    color 0.2s ease,
    border-color 0.2s ease,
    background 0.2s ease;

  &:hover:not(:disabled) {
    color: $color-primary;

    border-color: rgba($color-primary, 0.35);

    background: rgba($color-primary, 0.04);
  }

  &:disabled,
  &.is-disabled {
    opacity: 0.28;

    cursor: default;
  }
}

.hospital-sub-tabs__arrow--left {
  left: 6px;
}

.hospital-sub-tabs__arrow--right {
  right: 6px;
}

/* ========================================================
   DESKTOP DOWN
======================================================== */

@include desktop-down {
  .hospital-sub-tabs__wrap {
    max-width: 1160px;
  }

  .hospital-sub-tabs__nav {
    min-height: 78px;
  }

  .hospital-sub-tabs__link {
    min-height: 78px;

    padding: 0 9px;
  }

  .hospital-sub-tabs__text {
    font-size: 16px;
  }
}

/* ========================================================
   LAPTOP
======================================================== */

@include laptop-down {
  .hospital-sub-tabs {
    margin-top: 0;

    background: $color-white;

    border-bottom: 1px solid $color-border;
  }

  .hospital-sub-tabs__container {
    max-width: none;

    padding-right: 0;
    padding-left: 0;
  }

  .hospital-sub-tabs__wrap {
    max-width: none;

    padding-right: 52px;
    padding-left: 52px;

    border-right: 0;
    border-left: 0;

    box-shadow: none;
  }

  .hospital-sub-tabs__nav {
    display: flex;

    min-height: 70px;

    overflow-x: auto;
    overflow-y: hidden;

    scroll-behavior: smooth;
    scroll-snap-type: x proximity;

    -webkit-overflow-scrolling: touch;

    &.is-dragging {
      scroll-behavior: auto;
    }
  }

  .hospital-sub-tabs__link {
    flex: 0 0 188px;

    width: 188px;
    min-width: 188px;
    min-height: 70px;

    padding: 0 12px;

    scroll-snap-align: center;
  }

  .hospital-sub-tabs__text {
    font-size: 16px;
  }

  .hospital-sub-tabs__arrow {
    display: inline-flex;
  }
}

/* ========================================================
   MOBILE
======================================================== */

@include mobile {
  .hospital-sub-tabs__wrap {
    padding-right: 48px;
    padding-left: 48px;
  }

  .hospital-sub-tabs__nav {
    min-height: 64px;

    scroll-snap-type: x mandatory;
  }

  .hospital-sub-tabs__link {
    flex: 0 0 170px;

    width: 170px;
    min-width: 170px;
    min-height: 64px;

    padding: 0 12px;

    scroll-snap-align: center;
  }

  .hospital-sub-tabs__text {
    font-size: 15px;
    line-height: 1.4;
  }

  .hospital-sub-tabs__arrow {
    display: inline-flex;

    width: 38px;
    height: 38px;

    background: $color-white;

    color: $color-primary;

    border-color: rgba($color-primary, 0.24);
  }

  .hospital-sub-tabs__arrow--left {
    left: 5px;
  }

  .hospital-sub-tabs__arrow--right {
    right: 5px;
  }
}

/* ========================================================
   SMALL MOBILE
======================================================== */

@media (max-width: 380px) {
  .hospital-sub-tabs__wrap {
    padding-right: 44px;
    padding-left: 44px;
  }

  .hospital-sub-tabs__link {
    flex-basis: 158px;

    width: 158px;
    min-width: 158px;
  }

  .hospital-sub-tabs__text {
    font-size: 14px;
  }

  .hospital-sub-tabs__arrow {
    width: 36px;
    height: 36px;
  }
}
</style>
