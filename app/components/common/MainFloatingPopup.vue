<!-- components/common/MainFloatingPopup.vue -->
<template>
  <ClientOnly>
    <aside
      v-if="showPopup && activePopup"
      class="main-popup"
      aria-live="polite"
      @mouseenter="handleMouseEnter"
      @mouseleave="handleMouseLeave"
    >
      <div class="main-popup__card">
        <!-- =================================================
            SLIDER
          ================================================== -->
        <div
          ref="sliderRef"
          class="main-popup__slider"
          :class="{
            'is-dragging': isDragging
          }"
          @pointerdown="handlePointerDown"
          @pointermove="handlePointerMove"
          @pointerup="handlePointerUp"
          @pointercancel="handlePointerCancel"
          @pointerleave="handlePointerLeave"
        >
          <NuxtLink
            :to="activePopup.href"
            class="main-popup__image-link"
            draggable="false"
            @click="handleImageClick"
          >
            <img
              :src="activePopup.image"
              :alt="activePopup.title"
              class="main-popup__image"
              draggable="false"
            />
          </NuxtLink>

          <!-- =================================================
              ARROWS
            ================================================== -->
          <template v-if="popups.length > 1">
            <button
              type="button"
              class="main-popup__arrow main-popup__arrow--prev"
              aria-label="이전 팝업"
              @pointerdown.stop
              @click.stop="handlePrevClick"
            >
              <Icon name="lucide:chevron-left" size="19" />
            </button>

            <button
              type="button"
              class="main-popup__arrow main-popup__arrow--next"
              aria-label="다음 팝업"
              @pointerdown.stop
              @click.stop="handleNextClick"
            >
              <Icon name="lucide:chevron-right" size="19" />
            </button>
          </template>
        </div>

        <!-- =================================================
            FOOTER
          ================================================== -->
        <div class="main-popup__footer">
          <label class="main-popup__hide">
            <input v-model="dontShowToday" type="checkbox" />

            <span class="main-popup__check">
              <Icon name="lucide:check" size="12" />
            </span>

            <span>다시 보지 않기</span>
          </label>

          <div class="main-popup__footer-right">
            <div v-if="popups.length > 1" class="main-popup__counter">
              <strong>
                {{ currentIndex + 1 }}
              </strong>

              <span>/</span>

              <span>
                {{ popups.length }}
              </span>
            </div>

            <button type="button" class="main-popup__close" @click="closePopup">닫기</button>
          </div>
        </div>
      </div>
    </aside>
  </ClientOnly>
</template>

<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'

type PopupItem = {
  id: string
  title: string
  image: string
  href: string
}

/* ========================================================
     STORAGE
  ======================================================== */

const STORAGE_KEY = 'zaii-main-floating-popup-hide-until'

/* ========================================================
     POPUPS
  ======================================================== */

const popups: PopupItem[] = [
  {
    id: 'urolift',
    title: '유로리프트 안내',
    image: '/images/popup/popup-urolift.webp',
    href: '/urolift'
  },
  {
    id: 'reservation',
    title: '상담 안내',
    image: '/images/popup/popup-reservation.webp',
    href: '/consultation'
  }
]

/* ========================================================
     SETTINGS
  ======================================================== */

/*
 * 자동 슬라이드 시간
 * 4000 = 4초
 */
const AUTO_PLAY_DELAY = 4000

/*
 * 실제 swipe 완료 판정 거리
 */
const SWIPE_THRESHOLD = 45

/*
 * 이 이상 움직이면 click이 아니라 drag로 판단
 */
const DRAG_THRESHOLD = 8

/*
 * swipe 직후 다른 요소 click 방지 시간
 */
const CLICK_SUPPRESS_DURATION = 350

/* ========================================================
     STATE
  ======================================================== */

const currentIndex = ref(0)

const closed = ref(false)

const dontShowToday = ref(false)

const isDesktop = ref(false)

/*
 * 팝업에 마우스가 올라와 있는지
 */
const isHovered = ref(false)

/* ========================================================
     SLIDER STATE
  ======================================================== */

const sliderRef = ref<HTMLElement | null>(null)

const isDragging = ref(false)

const pointerStartX = ref(0)

const pointerCurrentX = ref(0)

const dragDistance = ref(0)

const didSwipe = ref(false)

/* ========================================================
     TIMERS
  ======================================================== */

let autoPlayTimer: ReturnType<typeof setTimeout> | null = null

let suppressClickUntil = 0

let desktopMediaQuery: MediaQueryList | null = null

/* ========================================================
     ACTIVE POPUP
  ======================================================== */

const activePopup = computed<PopupItem | null>(() => {
  return popups[currentIndex.value] ?? popups[0] ?? null
})

/* ========================================================
     SHOW POPUP
  ======================================================== */

const showPopup = computed(() => {
  return isDesktop.value && !closed.value && activePopup.value !== null
})

/* ========================================================
     AUTO PLAY
  ======================================================== */

function stopAutoPlay() {
  if (autoPlayTimer !== null) {
    clearTimeout(autoPlayTimer)

    autoPlayTimer = null
  }
}

function startAutoPlay() {
  /*
   * 기존 타이머부터 제거
   */
  stopAutoPlay()

  /*
   * 팝업이 1개뿐이면 필요 없음
   */
  if (popups.length <= 1) {
    return
  }

  /*
   * 팝업이 안 보이는 상태
   */
  if (!showPopup.value) {
    return
  }

  /*
   * 마우스 hover 중
   */
  if (isHovered.value) {
    return
  }

  /*
   * swipe 중
   */
  if (isDragging.value) {
    return
  }

  /*
   * 다른 탭에 있는 동안 정지
   */
  if (import.meta.client && document.hidden) {
    return
  }

  autoPlayTimer = setTimeout(() => {
    /*
     * 다시 한 번 상태 확인
     */
    if (!showPopup.value || isHovered.value || isDragging.value || document.hidden) {
      startAutoPlay()

      return
    }

    nextPopup()

    /*
     * 다음 4초 예약
     */
    startAutoPlay()
  }, AUTO_PLAY_DELAY)
}

function restartAutoPlay() {
  stopAutoPlay()

  startAutoPlay()
}

/* ========================================================
     MOUSE HOVER
  ======================================================== */

function handleMouseEnter() {
  isHovered.value = true

  stopAutoPlay()
}

function handleMouseLeave() {
  isHovered.value = false

  /*
   * 드래그 중에는 pointer 쪽에서 처리
   */
  if (!isDragging.value) {
    startAutoPlay()
  }
}

/* ========================================================
     PAGE VISIBILITY
  ======================================================== */

function handleVisibilityChange() {
  if (document.hidden) {
    stopAutoPlay()

    return
  }

  startAutoPlay()
}

/* ========================================================
     TODAY END
  ======================================================== */

function getTodayEndTimestamp() {
  const now = new Date()

  const end = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 23, 59, 59, 999)

  return end.getTime()
}

/* ========================================================
     STORAGE
  ======================================================== */

function isHiddenToday() {
  if (!import.meta.client) {
    return false
  }

  const raw = localStorage.getItem(STORAGE_KEY)

  if (!raw) {
    return false
  }

  const expiresAt = Number(raw)

  if (!Number.isFinite(expiresAt)) {
    localStorage.removeItem(STORAGE_KEY)

    return false
  }

  if (Date.now() > expiresAt) {
    localStorage.removeItem(STORAGE_KEY)

    return false
  }

  return true
}

function saveHideToday() {
  if (!import.meta.client) {
    return
  }

  localStorage.setItem(STORAGE_KEY, String(getTodayEndTimestamp()))
}

/* ========================================================
     CLOSE
  ======================================================== */

function closePopup() {
  stopAutoPlay()

  if (dontShowToday.value) {
    saveHideToday()
  }

  closed.value = true
}

/* ========================================================
     IMAGE CLICK
  ======================================================== */

function handleImageClick(event: MouseEvent) {
  /*
   * swipe 직후 링크 이동 방지
   */
  if (didSwipe.value || Date.now() < suppressClickUntil) {
    event.preventDefault()
    event.stopPropagation()

    return
  }

  if (dontShowToday.value) {
    saveHideToday()
  }
}

/* ========================================================
     GLOBAL CLICK BLOCK
  ======================================================== */

function handleGlobalClick(event: MouseEvent) {
  /*
   * swipe 직후 QuickMenu 등
   * 다른 요소가 눌리는 현상 방지
   */
  if (Date.now() >= suppressClickUntil) {
    return
  }

  event.preventDefault()
  event.stopPropagation()
  event.stopImmediatePropagation()
}

/* ========================================================
     PREV
  ======================================================== */

function prevPopup() {
  if (popups.length <= 1) {
    return
  }

  currentIndex.value = currentIndex.value === 0 ? popups.length - 1 : currentIndex.value - 1
}

/* ========================================================
     NEXT
  ======================================================== */

function nextPopup() {
  if (popups.length <= 1) {
    return
  }

  currentIndex.value = currentIndex.value === popups.length - 1 ? 0 : currentIndex.value + 1
}

/* ========================================================
     ARROW CLICK
  ======================================================== */

function handlePrevClick() {
  prevPopup()

  /*
   * 사용자가 직접 조작했으므로
   * 다시 4초부터 시작
   */
  restartAutoPlay()
}

function handleNextClick() {
  nextPopup()

  restartAutoPlay()
}

/* ========================================================
     POINTER RESET
  ======================================================== */

function resetPointerState() {
  isDragging.value = false

  pointerStartX.value = 0

  pointerCurrentX.value = 0

  dragDistance.value = 0
}

/* ========================================================
     POINTER DOWN
  ======================================================== */

function handlePointerDown(event: PointerEvent) {
  /*
   * mouse는 왼쪽 버튼만
   */
  if (event.pointerType === 'mouse' && event.button !== 0) {
    return
  }

  /*
   * swipe 시작하면 autoplay 정지
   */
  stopAutoPlay()

  isDragging.value = true

  didSwipe.value = false

  pointerStartX.value = event.clientX

  pointerCurrentX.value = event.clientX

  dragDistance.value = 0

  try {
    sliderRef.value?.setPointerCapture(event.pointerId)
  } catch {
    // 브라우저 방어
  }
}

/* ========================================================
     POINTER MOVE
  ======================================================== */

function handlePointerMove(event: PointerEvent) {
  if (!isDragging.value) {
    return
  }

  pointerCurrentX.value = event.clientX

  dragDistance.value = pointerCurrentX.value - pointerStartX.value

  /*
   * 일정 거리 이상 움직이면
   * drag/swipe로 판단
   */
  if (Math.abs(dragDistance.value) >= DRAG_THRESHOLD) {
    didSwipe.value = true

    if (event.cancelable) {
      event.preventDefault()
    }
  }
}

/* ========================================================
     POINTER UP
  ======================================================== */

function handlePointerUp(event: PointerEvent) {
  if (!isDragging.value) {
    return
  }

  const distance = dragDistance.value

  const wasDragging = Math.abs(distance) >= DRAG_THRESHOLD

  try {
    if (sliderRef.value?.hasPointerCapture(event.pointerId)) {
      sliderRef.value.releasePointerCapture(event.pointerId)
    }
  } catch {
    // 브라우저 방어
  }

  /*
   * 왼쪽 swipe
   * -> NEXT
   */
  if (distance <= -SWIPE_THRESHOLD) {
    nextPopup()
  } else if (distance >= SWIPE_THRESHOLD) {

  /*
   * 오른쪽 swipe
   * -> PREV
   */
    prevPopup()
  }

  /*
   * swipe/drag 이후 합성 click 차단
   */
  if (wasDragging) {
    didSwipe.value = true

    suppressClickUntil = Date.now() + CLICK_SUPPRESS_DURATION

    window.setTimeout(() => {
      didSwipe.value = false
    }, CLICK_SUPPRESS_DURATION + 20)
  }

  resetPointerState()

  /*
   * 직접 조작이 끝났으므로
   * autoplay를 처음부터 다시 시작.
   *
   * hover 상태라면 startAutoPlay 내부에서
   * 자동으로 실행하지 않음.
   */
  restartAutoPlay()
}

/* ========================================================
     POINTER CANCEL
  ======================================================== */

function handlePointerCancel(event: PointerEvent) {
  try {
    if (sliderRef.value?.hasPointerCapture(event.pointerId)) {
      sliderRef.value.releasePointerCapture(event.pointerId)
    }
  } catch {
    // ignore
  }

  resetPointerState()

  restartAutoPlay()
}

/* ========================================================
     POINTER LEAVE
  ======================================================== */

function handlePointerLeave(event: PointerEvent) {
  /*
   * pointer capture 중이면
   * 밖으로 나가도 유지
   */
  if (sliderRef.value?.hasPointerCapture(event.pointerId)) {
    return
  }

  if (!isDragging.value) {
    return
  }

  resetPointerState()

  restartAutoPlay()
}

/* ========================================================
     RESPONSIVE
  ======================================================== */

function handleDesktopChange(event: MediaQueryList | MediaQueryListEvent) {
  isDesktop.value = event.matches

  resetPointerState()

  didSwipe.value = false

  suppressClickUntil = 0

  if (event.matches) {
    startAutoPlay()
  } else {
    stopAutoPlay()
  }
}

/* ========================================================
     MOUNT
  ======================================================== */

onMounted(() => {
  closed.value = isHiddenToday()

  desktopMediaQuery = window.matchMedia('(min-width: 1025px)')

  handleDesktopChange(desktopMediaQuery)

  desktopMediaQuery.addEventListener('change', handleDesktopChange)

  document.addEventListener('click', handleGlobalClick, true)

  document.addEventListener('visibilitychange', handleVisibilityChange)

  /*
   * 최초 autoplay
   */
  startAutoPlay()
})

/* ========================================================
     UNMOUNT
  ======================================================== */

onBeforeUnmount(() => {
  stopAutoPlay()

  desktopMediaQuery?.removeEventListener('change', handleDesktopChange)

  document.removeEventListener('click', handleGlobalClick, true)

  document.removeEventListener('visibilitychange', handleVisibilityChange)

  desktopMediaQuery = null
})
</script>

<style scoped lang="scss">
/* ========================================================
     POPUP POSITION
  ======================================================== */

.main-popup {
  position: fixed;

  /*
     * QuickMenu 바로 왼쪽
     */
  right: 124px;

  top: 52%;

  width: 340px;

  transform: translateY(-50%);

  z-index: 1150;

  pointer-events: none;
}

/* ========================================================
     CARD
  ======================================================== */

.main-popup__card {
  position: relative;

  width: 100%;

  overflow: hidden;

  border: 1px solid rgba(15, 23, 42, 0.08);

  border-radius: 18px;

  background: #fff;

  box-shadow:
    0 20px 46px rgba(15, 23, 42, 0.15),
    0 5px 14px rgba(15, 23, 42, 0.06);

  pointer-events: auto;
}

/* ========================================================
     SLIDER
  ======================================================== */

.main-popup__slider {
  position: relative;

  width: 100%;

  /*
     * 이미지 원본 크기/비율이 달라도
     * 팝업 높이는 고정
     */
  height: 430px;

  overflow: hidden;

  background: #0f172a;

  /*
     * 좌우 swipe는 우리가 처리하고
     * 세로 스크롤은 브라우저 허용
     */
  touch-action: pan-y;

  cursor: grab;

  user-select: none;

  -webkit-user-select: none;

  -webkit-user-drag: none;

  -webkit-tap-highlight-color: transparent;

  overscroll-behavior: contain;
}

.main-popup__slider.is-dragging {
  cursor: grabbing;
}

/* ========================================================
     IMAGE LINK
  ======================================================== */

.main-popup__image-link {
  display: block;

  width: 100%;
  height: 100%;

  overflow: hidden;

  text-decoration: none;

  user-select: none;

  -webkit-user-select: none;

  -webkit-user-drag: none;

  -webkit-tap-highlight-color: transparent;
}

/* ========================================================
     IMAGE
  ======================================================== */

.main-popup__image {
  display: block;

  width: 100%;
  height: 100%;

  /*
     * 모든 이미지를 동일 크기로 맞춤
     */
  object-fit: cover;

  object-position: center center;

  pointer-events: none;

  user-select: none;

  -webkit-user-select: none;

  -webkit-user-drag: none;
}

/* ========================================================
     ARROWS
  ======================================================== */

.main-popup__arrow {
  position: absolute;

  top: 50%;

  z-index: 4;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 32px;
  height: 32px;

  padding: 0;

  border: 0;
  border-radius: 999px;

  background: rgba(255, 255, 255, 0.94);

  color: #18212f;

  box-shadow: 0 4px 12px rgba(15, 23, 42, 0.14);

  cursor: pointer;

  opacity: 0;

  transform: translateY(-50%);

  transition:
    opacity 0.18s ease,
    background 0.18s ease,
    transform 0.18s ease;
}

.main-popup__card:hover .main-popup__arrow {
  opacity: 1;
}

.main-popup__arrow:hover {
  background: #fff;

  transform: translateY(-50%) scale(1.06);
}

.main-popup__arrow--prev {
  left: 10px;
}

.main-popup__arrow--next {
  right: 10px;
}

/* ========================================================
     FOOTER
  ======================================================== */

.main-popup__footer {
  display: flex;
  align-items: center;
  justify-content: space-between;

  gap: 10px;

  height: 52px;

  padding: 0 13px;

  border-top: 1px solid rgba(15, 23, 42, 0.055);

  background: #fff;
}

/* ========================================================
     HIDE TODAY
  ======================================================== */

.main-popup__hide {
  position: relative;

  display: inline-flex;
  align-items: center;

  gap: 7px;

  min-width: 0;

  color: #727985;

  font-size: 12px;
  font-weight: 500;

  line-height: 1;

  cursor: pointer;

  user-select: none;
}

.main-popup__hide input {
  position: absolute;

  width: 1px;
  height: 1px;

  opacity: 0;

  pointer-events: none;
}

.main-popup__check {
  display: flex;
  align-items: center;
  justify-content: center;

  width: 18px;
  height: 18px;

  border-radius: 999px;

  background: #e2e5e9;

  color: transparent;

  flex: 0 0 auto;

  transition:
    background 0.18s ease,
    color 0.18s ease;
}

.main-popup__hide input:checked + .main-popup__check {
  background: #697381;

  color: #fff;
}

/* ========================================================
     FOOTER RIGHT
  ======================================================== */

.main-popup__footer-right {
  display: flex;
  align-items: center;

  gap: 10px;

  flex: 0 0 auto;
}

/* ========================================================
     COUNTER
  ======================================================== */

.main-popup__counter {
  display: inline-flex;
  align-items: center;
  justify-content: center;

  gap: 3px;

  min-width: 50px;
  height: 28px;

  padding: 0 9px;

  border-radius: 999px;

  background: #f0f1f3;

  color: #7a828f;

  font-size: 10px;
}

.main-popup__counter strong {
  color: #252c36;

  font-size: 11px;
  font-weight: 800;
}

/* ========================================================
     CLOSE
  ======================================================== */

.main-popup__close {
  padding: 0;

  border: 0;

  background: transparent;

  color: #202630;

  font-size: 12px;
  font-weight: 750;

  line-height: 1;

  cursor: pointer;

  white-space: nowrap;
}

/* ========================================================
     LARGE DESKTOP
  ======================================================== */

@media (min-width: 1600px) {
  .main-popup {
    right: 128px;

    width: 350px;
  }

  .main-popup__slider {
    height: 440px;
  }
}

/* ========================================================
     DESKTOP DOWN
  ======================================================== */

@media (max-width: 1440px) {
  .main-popup {
    right: 112px;

    width: 310px;
  }

  .main-popup__slider {
    height: 390px;
  }

  .main-popup__footer {
    height: 50px;

    padding-inline: 11px;
  }

  .main-popup__hide {
    font-size: 11px;
  }
}

/* ========================================================
     SMALL DESKTOP
  ======================================================== */

@media (min-width: 1025px) and (max-width: 1200px) {
  .main-popup {
    right: 104px;

    width: 280px;
  }

  .main-popup__card {
    border-radius: 15px;
  }

  .main-popup__slider {
    height: 350px;
  }

  .main-popup__footer {
    height: 46px;
  }

  .main-popup__counter {
    min-width: 44px;

    height: 25px;

    padding: 0 7px;
  }

  .main-popup__hide {
    font-size: 10px;
  }

  .main-popup__close {
    font-size: 11px;
  }
}

/* ========================================================
     TABLET / MOBILE
  ======================================================== */

@media (max-width: 1024px) {
  .main-popup {
    display: none;
  }
}
</style>
