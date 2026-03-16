<template>
  <div class="urolift-section-nav">
    <div class="container urolift-section-nav__container">
      <div class="urolift-section-nav__viewport">
        <div
          ref="scrollRef"
          class="urolift-section-nav__scroll"
          :class="{ 'is-dragging': isDragging }"
          @mousedown="onPointerDown"
          @mousemove="onPointerMove"
          @mouseup="onPointerUp"
          @mouseleave="onPointerUp"
          @touchstart.passive="onTouchStart"
          @touchmove.passive="onTouchMove"
          @touchend="onPointerUp"
        >
          <button
            v-for="item in items"
            :key="item.id"
            type="button"
            class="urolift-section-nav__item"
            :class="{ 'is-active': activeId === item.id }"
            @click="onItemClick(item.id, $event)"
          >
            {{ item.label }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
type NavItem = {
  id: string
  label: string
}

const props = defineProps<{
  items: NavItem[]
}>()

const activeId = ref(props.items[0]?.id ?? '')
const scrollRef = ref<HTMLElement | null>(null)

const isDragging = ref(false)
const dragMoved = ref(false)
const startX = ref(0)
const startScrollLeft = ref(0)

const getHeaderOffset = () => {
  if (window.innerWidth <= 767) return 72
  if (window.innerWidth <= 1024) return 76
  return 88
}

const getNavHeight = () => {
  if (window.innerWidth <= 767) return 64
  if (window.innerWidth <= 1024) return 58
  return 60
}

const scrollToSection = (id: string) => {
  const el = document.getElementById(id)
  if (!el) return

  const top = el.getBoundingClientRect().top + window.scrollY - getHeaderOffset() - getNavHeight()

  window.scrollTo({
    top,
    behavior: 'smooth'
  })
}

const scrollActiveTabIntoView = () => {
  const container = scrollRef.value
  if (!container) return

  const activeButton = container.querySelector<HTMLElement>('.urolift-section-nav__item.is-active')
  if (!activeButton) return

  const containerRect = container.getBoundingClientRect()
  const activeRect = activeButton.getBoundingClientRect()

  const nextLeft =
    container.scrollLeft +
    (activeRect.left - containerRect.left) -
    containerRect.width / 2 +
    activeRect.width / 2

  container.scrollTo({
    left: Math.max(0, nextLeft),
    behavior: 'smooth'
  })
}

const handleScroll = () => {
  const base = getHeaderOffset() + getNavHeight() + 24
  let current = props.items[0]?.id ?? ''

  for (const item of props.items) {
    const el = document.getElementById(item.id)
    if (!el) continue

    const rect = el.getBoundingClientRect()
    if (rect.top <= base) {
      current = item.id
    }
  }

  if (activeId.value !== current) {
    activeId.value = current
    requestAnimationFrame(() => {
      scrollActiveTabIntoView()
    })
  }
}

const onPointerDown = (e: MouseEvent) => {
  const container = scrollRef.value
  if (!container) return

  isDragging.value = true
  dragMoved.value = false
  startX.value = e.pageX
  startScrollLeft.value = container.scrollLeft
}

const onPointerMove = (e: MouseEvent) => {
  const container = scrollRef.value
  if (!container || !isDragging.value) return

  const dx = e.pageX - startX.value
  if (Math.abs(dx) > 4) {
    dragMoved.value = true
  }

  container.scrollLeft = startScrollLeft.value - dx
}

const onTouchStart = (e: TouchEvent) => {
  const container = scrollRef.value
  if (!container) return

  startX.value = e.touches[0].pageX
  startScrollLeft.value = container.scrollLeft
  dragMoved.value = false
}

const onTouchMove = (e: TouchEvent) => {
  const container = scrollRef.value
  if (!container) return

  const dx = e.touches[0].pageX - startX.value
  if (Math.abs(dx) > 4) {
    dragMoved.value = true
  }
}

const onPointerUp = () => {
  isDragging.value = false

  window.setTimeout(() => {
    dragMoved.value = false
  }, 0)
}

const onItemClick = (id: string, e: MouseEvent) => {
  if (dragMoved.value) {
    e.preventDefault()
    return
  }

  scrollToSection(id)
}

onMounted(() => {
  handleScroll()
  requestAnimationFrame(() => {
    scrollActiveTabIntoView()
  })

  window.addEventListener('scroll', handleScroll, { passive: true })
  window.addEventListener('resize', handleScroll)
  window.addEventListener('mouseup', onPointerUp)
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll)
  window.removeEventListener('resize', handleScroll)
  window.removeEventListener('mouseup', onPointerUp)
})
</script>

<style scoped lang="scss">
.urolift-section-nav {
  position: sticky;
  top: 88px;
  z-index: 90;
  background: rgba(255, 255, 255, 0.97);
  border-bottom: 1px solid #e5e7eb;
  backdrop-filter: blur(8px);
}

.urolift-section-nav__container {
  padding-left: 0;
  padding-right: 0;
}

.urolift-section-nav__viewport {
  position: relative;
}

.urolift-section-nav__scroll {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0;
  overflow-x: auto;
  overflow-y: hidden;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: none;
  white-space: nowrap;
  scroll-behavior: smooth;
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

.urolift-section-nav__item {
  flex: 0 0 auto;
  min-width: 180px;
  height: 60px;
  padding: 0 22px;
  border: 0;
  border-right: 1px solid #e9edf2;
  background: #ffffff;
  font-size: 16px;
  font-weight: 600;
  line-height: 1;
  color: #555;
  white-space: nowrap;
  word-break: keep-all;
  transition:
    color 0.2s ease,
    background 0.2s ease;

  &:first-child {
    border-left: 1px solid #e9edf2;
  }

  &:hover {
    color: #1f6fb7;
    background: #f8fbff;
  }

  &.is-active {
    color: #1f6fb7;
    background: #f8fbff;
    font-weight: 700;
  }
}

@include laptop-down {
  .urolift-section-nav {
    top: 76px;
  }

  .urolift-section-nav__scroll {
    justify-content: flex-start;
  }

  .urolift-section-nav__item {
    min-width: 148px;
    height: 56px;
    padding: 0 16px;
    font-size: 14px;
  }
}

@include mobile {
  .urolift-section-nav {
    top: 72px;
  }

  .urolift-section-nav__container {
    width: 100%;
    max-width: none;
  }

  .urolift-section-nav__viewport {
    &::before,
    &::after {
      content: '';
      position: absolute;
      top: 0;
      bottom: 0;
      width: 18px;
      z-index: 2;
      pointer-events: none;
    }

    &::before {
      left: 0;
      background: linear-gradient(to right, rgba(255, 255, 255, 0.98), rgba(255, 255, 255, 0));
    }

    &::after {
      right: 0;
      background: linear-gradient(to left, rgba(255, 255, 255, 0.98), rgba(255, 255, 255, 0));
    }
  }

  .urolift-section-nav__scroll {
    justify-content: flex-start;
    gap: 8px;
    padding: 8px 16px 10px;
  }

  .urolift-section-nav__item {
    min-width: auto;
    height: 44px;
    padding: 0 14px;
    border: 1px solid #dfe5ec;
    border-radius: 999px;
    background: #ffffff;
    font-size: 13px;
    font-weight: 600;
    color: #5b6470;

    &:first-child {
      border-left: 1px solid #dfe5ec;
    }

    &:last-child {
      margin-right: 8px;
    }

    &:hover {
      background: #f8fbff;
      color: #1f6fb7;
    }

    &.is-active {
      border-color: #b7d7f4;
      background: #eef7ff;
      color: #1f6fb7;
      font-weight: 700;
      box-shadow: inset 0 0 0 1px rgba(31, 111, 183, 0.04);
    }
  }
}
</style>
