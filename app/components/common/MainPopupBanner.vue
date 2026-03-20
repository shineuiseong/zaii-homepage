<template>
  <ClientOnly>
    <div v-if="hasVisiblePopup" class="popup-layer" aria-live="polite">
      <div class="popup-stack">
        <section
          v-for="popup in visiblePopups"
          :key="popup.id"
          class="popup-card"
          :class="[`popup-card--${popup.id}`]"
          role="dialog"
          :aria-label="popup.title"
        >
          <button
            type="button"
            class="popup-card__close"
            :aria-label="`${popup.title} 팝업 닫기`"
            @click="closePopup(popup.id)"
          >
            ✕
          </button>

          <a :href="popup.href" class="popup-card__image-link" @click="handleImageClick(popup.id)">
            <img :src="popup.image" :alt="popup.title" class="popup-card__image" />
          </a>

          <div class="popup-card__footer">
            <label class="popup-card__checkbox">
              <input
                type="checkbox"
                :checked="dontShowTodayMap[popup.id] || false"
                @change="toggleDontShowToday(popup.id, $event)"
              />
              <span>오늘 하루 이 창 열지 않음</span>
            </label>

            <button type="button" class="popup-card__footer-close" @click="closePopup(popup.id)">
              닫기
            </button>
          </div>
        </section>
      </div>

      <button
        v-if="isMobile && hasVisiblePopup"
        type="button"
        class="popup-layer__dim"
        aria-label="팝업 닫기"
        @click="closeAll"
      />
    </div>
  </ClientOnly>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'

type PopupItem = {
  id: string
  title: string
  image: string
  href: string
}

const STORAGE_PREFIX = 'zaii-main-popup-hide-'

const popups: PopupItem[] = [
  {
    id: 'urolift-main',
    title: '유로리프트 팝업',
    image: '/images/popup/popup-urolift.webp',
    href: '/urolift'
  },
  {
    id: 'reservation-main',
    title: '예약제 운영 팝업',
    image: '/images/popup/popup-reservation.webp',
    href: '/consultation'
  }
]

const closedIds = ref<string[]>([])
const dontShowTodayMap = ref<Record<string, boolean>>({})
const isMobile = ref(false)

const visiblePopups = computed(() => popups.filter((popup) => !closedIds.value.includes(popup.id)))

const hasVisiblePopup = computed(() => visiblePopups.value.length > 0)

function getTodayEndTimestamp() {
  const now = new Date()
  const end = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 23, 59, 59, 999)
  return end.getTime()
}

function isHiddenToday(id: string) {
  if (!process.client) return false

  const raw = localStorage.getItem(`${STORAGE_PREFIX}${id}`)
  if (!raw) return false

  const expiresAt = Number(raw)
  if (!Number.isFinite(expiresAt)) {
    localStorage.removeItem(`${STORAGE_PREFIX}${id}`)
    return false
  }

  if (Date.now() > expiresAt) {
    localStorage.removeItem(`${STORAGE_PREFIX}${id}`)
    return false
  }

  return true
}

function initializePopups() {
  const hiddenIds = popups.filter((popup) => isHiddenToday(popup.id)).map((popup) => popup.id)

  closedIds.value = [...hiddenIds]

  const map: Record<string, boolean> = {}
  popups.forEach((popup) => {
    map[popup.id] = hiddenIds.includes(popup.id)
  })
  dontShowTodayMap.value = map
}

function toggleDontShowToday(id: string, event: Event) {
  const checked = (event.target as HTMLInputElement).checked
  dontShowTodayMap.value = {
    ...dontShowTodayMap.value,
    [id]: checked
  }
}

function closePopup(id: string) {
  if (dontShowTodayMap.value[id] && process.client) {
    localStorage.setItem(`${STORAGE_PREFIX}${id}`, String(getTodayEndTimestamp()))
  }

  if (!closedIds.value.includes(id)) {
    closedIds.value = [...closedIds.value, id]
  }
}

function closeAll() {
  visiblePopups.value.forEach((popup) => {
    closePopup(popup.id)
  })
}

function handleImageClick(id: string) {
  if (dontShowTodayMap.value[id] && process.client) {
    localStorage.setItem(`${STORAGE_PREFIX}${id}`, String(getTodayEndTimestamp()))
  }
}

function updateIsMobile() {
  if (!process.client) return
  isMobile.value = window.innerWidth <= 768
}

onMounted(() => {
  initializePopups()
  updateIsMobile()
  window.addEventListener('resize', updateIsMobile)
})
</script>

<style scoped lang="scss">
.popup-layer {
  position: fixed;
  inset: 0;
  z-index: 3000;
  pointer-events: none;
}

.popup-stack {
  position: absolute;
  top: 24px;
  left: 24px;
  display: flex;
  gap: 20px;
  align-items: flex-start;
  pointer-events: auto;
}

.popup-card {
  position: relative;
  width: 420px;
  background: #fff;
  border: 1px solid rgba(15, 23, 42, 0.14);
  box-shadow:
    0 24px 48px rgba(15, 23, 42, 0.18),
    0 8px 18px rgba(15, 23, 42, 0.08);
  overflow: hidden;
}

.popup-card__close {
  position: absolute;
  top: 10px;
  right: 10px;
  z-index: 2;
  width: 34px;
  height: 34px;
  border: 0;
  border-radius: 999px;
  background: rgba(17, 24, 39, 0.78);
  color: #fff;
  font-size: 16px;
  line-height: 1;
  cursor: pointer;
}

.popup-card__image-link {
  display: block;
  text-decoration: none;
}

.popup-card__image {
  display: block;
  width: 100%;
  height: auto;
}

.popup-card__footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 10px 12px;
  background: #1f1f1f;
  color: #fff;
}

.popup-card__checkbox {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  min-width: 0;
  font-size: 13px;
  line-height: 1.4;
  cursor: pointer;

  input {
    margin: 0;
    flex: 0 0 auto;
  }

  span {
    word-break: keep-all;
  }
}

.popup-card__footer-close {
  border: 0;
  background: transparent;
  color: #fff;
  font-size: 13px;
  font-weight: 700;
  cursor: pointer;
  white-space: nowrap;
}

.popup-layer__dim {
  display: none;
}

@media (max-width: 1024px) {
  .popup-stack {
    top: 16px;
    left: 16px;
    gap: 14px;
  }

  .popup-card {
    width: 360px;
  }
}

@media (max-width: 768px) {
  .popup-layer {
    background: rgba(15, 23, 42, 0.5);
    pointer-events: auto;
  }

  .popup-layer__dim {
    display: block;
    position: absolute;
    inset: 0;
    border: 0;
    background: transparent;
  }

  .popup-stack {
    position: relative;
    top: auto;
    left: auto;
    z-index: 1;
    min-height: 100%;
    padding: 20px 16px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 14px;
  }

  .popup-card {
    width: 100%;
    max-width: 420px;
    margin: 0 auto;
    border-radius: 16px;
  }

  .popup-card__close {
    top: 8px;
    right: 8px;
    width: 32px;
    height: 32px;
  }

  .popup-card__footer {
    padding-bottom: calc(10px + env(safe-area-inset-bottom));
    flex-wrap: wrap;
  }

  .popup-card__checkbox,
  .popup-card__footer-close {
    font-size: 12px;
  }
}
</style>
