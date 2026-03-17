<template>
  <header class="header">
    <div class="container header-inner">
      <NuxtLink to="/" class="header-logo">
        <img src="/images/logo.png" alt="자이비뇨의학과" />
      </NuxtLink>

      <nav class="gnb">
        <ul class="gnb-menu">
          <li
            v-for="(item, i) in menu"
            :key="item.label"
            class="gnb-item"
            :class="{
              'is-open': active === i,
              'is-current': isMenuCurrent(item)
            }"
            @mouseenter="active = i"
            @mouseleave="active = null"
          >
            <NuxtLink :to="item.link" class="gnb-link">
              <span>{{ item.label }}</span>
              <span v-if="item.hot" class="badge-hot">Hot</span>
            </NuxtLink>

            <div v-if="item.children" class="dropdown">
              <ul>
                <li v-for="sub in item.children" :key="sub.label">
                  <NuxtLink
                    :to="sub.link"
                    class="dropdown-link"
                    :class="{ 'is-current': isSubCurrent(sub.link) }"
                  >
                    {{ sub.label }}
                  </NuxtLink>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </nav>

      <button
        type="button"
        class="mobile-menu-button"
        :aria-expanded="mobileMenuOpen"
        aria-label="메뉴 열기"
        @click="toggleMobileMenu"
      >
        <Icon name="lucide:menu" size="28" />
      </button>
    </div>

    <transition name="mobile-overlay-fade">
      <div v-if="mobileMenuOpen" class="mobile-menu-overlay" @click="closeMobileMenu" />
    </transition>

    <aside class="mobile-drawer" :class="{ 'is-open': mobileMenuOpen }">
      <div class="mobile-drawer__header">
        <NuxtLink to="/" class="mobile-drawer__logo" @click="closeMobileMenu">
          <img src="/images/logo.png" alt="자이비뇨의학과" />
        </NuxtLink>

        <button
          type="button"
          class="mobile-drawer__close"
          aria-label="메뉴 닫기"
          @click="closeMobileMenu"
        >
          <Icon name="lucide:x" size="24" />
        </button>
      </div>

      <div class="mobile-drawer__body">
        <ul class="mobile-menu-list">
          <li
            v-for="(item, i) in menu"
            :key="item.label"
            class="mobile-menu-item"
            :class="{
              'is-open': mobileSubmenuOpen === i,
              'is-current': isMenuCurrent(item)
            }"
          >
            <div class="mobile-menu-row">
              <NuxtLink
                :to="item.link"
                class="mobile-menu-link"
                :class="{ 'is-current': isMenuCurrent(item) }"
                @click="closeMobileMenu"
              >
                <span>{{ item.label }}</span>
                <span v-if="item.hot" class="badge-hot">Hot</span>
              </NuxtLink>

              <button
                v-if="item.children"
                type="button"
                class="mobile-submenu-toggle"
                :aria-expanded="mobileSubmenuOpen === i"
                @click="toggleMobileSubmenu(i)"
              >
                <Icon :name="mobileSubmenuOpen === i ? 'lucide:minus' : 'lucide:plus'" size="20" />
              </button>
            </div>

            <transition name="mobile-submenu-slide">
              <ul v-if="item.children && mobileSubmenuOpen === i" class="mobile-submenu">
                <li v-for="sub in item.children" :key="sub.label">
                  <NuxtLink
                    :to="sub.link"
                    class="mobile-submenu-link"
                    :class="{ 'is-current': isSubCurrent(sub.link) }"
                    @click="closeMobileMenu"
                  >
                    {{ sub.label }}
                  </NuxtLink>
                </li>
              </ul>
            </transition>
          </li>
        </ul>
      </div>
    </aside>
  </header>
</template>

<script setup lang="ts">
type MenuChild = {
  label: string
  link: string
}

type MenuItem = {
  label: string
  link: string
  hot?: boolean
  children?: MenuChild[]
}

const route = useRoute()

const menu: MenuItem[] = [
  {
    label: '자이비뇨의학과 병원',
    link: '/hospital/history',
    children: [
      { label: '자이비뇨의학과병원 발자취', link: '/hospital/history' },
      { label: '유로리프트를 만나다', link: '/hospital/urolift' },
      { label: '자이 브랜드스토리', link: '/hospital/brand' },
      { label: '의료진소개', link: '/hospital/medical-team' },
      { label: '진료안내', link: '/hospital/guide' },
      { label: '둘러보기', link: '/hospital/tour' },
      { label: '찾아오시는길', link: '/hospital/location' }
    ]
  },
  { label: '유로리프트', link: '/urolift', hot: true },
  { label: '전립선비대증', link: '/prostate' },
  { label: '리줌수술', link: '/rezum' },
  { label: '전립선암 신속검사', link: '/prostate-cancer' },
  { label: '온라인상담', link: '/consultation' },
  { label: '커뮤니티', link: '/community' }
]

const active = ref<number | null>(null)
const mobileMenuOpen = ref(false)
const mobileSubmenuOpen = ref<number | null>(null)

const normalizePath = (path: string) => {
  if (!path) return '/'
  if (path === '/') return '/'
  return path.replace(/\/+$/, '')
}

const isSameOrChildPath = (target: string, current: string) => {
  const normalizedTarget = normalizePath(target)
  const normalizedCurrent = normalizePath(current)

  if (normalizedTarget === '/') return normalizedCurrent === '/'
  return (
    normalizedCurrent === normalizedTarget || normalizedCurrent.startsWith(`${normalizedTarget}/`)
  )
}

const isSubCurrent = (link: string) => {
  return isSameOrChildPath(link, route.path)
}

const isMenuCurrent = (item: MenuItem) => {
  if (item.children?.some((sub) => isSubCurrent(sub.link))) {
    return true
  }

  return isSameOrChildPath(item.link, route.path)
}

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value

  if (!mobileMenuOpen.value) {
    mobileSubmenuOpen.value = null
  }
}

const closeMobileMenu = () => {
  mobileMenuOpen.value = false
  mobileSubmenuOpen.value = null
}

const toggleMobileSubmenu = (index: number) => {
  mobileSubmenuOpen.value = mobileSubmenuOpen.value === index ? null : index
}

watch(
  () => route.path,
  () => {
    mobileMenuOpen.value = false
    mobileSubmenuOpen.value = null
  }
)

watchEffect(() => {
  if (!mobileMenuOpen.value) return

  const foundIndex = menu.findIndex((item) => item.children?.some((sub) => isSubCurrent(sub.link)))
  mobileSubmenuOpen.value = foundIndex >= 0 ? foundIndex : null
})
</script>

<style scoped lang="scss">
.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 88px;
  background: rgba(255, 255, 255, 0.94);
  border-bottom: 1px solid $color-border;
  backdrop-filter: blur(10px);
  z-index: 1000;
}

.header-inner {
  display: flex;
  align-items: center;
  gap: 40px;
  min-height: 88px;
}

.header-logo {
  flex: 0 0 auto;
  display: inline-flex;
  align-items: center;

  img {
    display: block;
    height: 42px;
    width: auto;
  }
}

.gnb {
  flex: 1;
  min-width: 0;
}

.gnb-menu {
  display: flex;
  align-items: center;
  gap: 4px;
}

.gnb-item {
  position: relative;
  flex: 0 0 auto;
}

.gnb-link {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  height: 88px;
  padding: 0 16px;
  font-size: 16px;
  font-weight: 600;
  color: $text-main;
  white-space: nowrap;
  transition:
    color 0.25s ease,
    transform 0.25s ease;

  &:hover {
    color: $color-primary;
  }

  &::after {
    content: '';
    position: absolute;
    left: 16px;
    right: 16px;
    bottom: 18px;
    height: 2px;
    background: $color-primary;
    transform: scaleX(0);
    transform-origin: center;
    transition: transform 0.25s ease;
  }
}

.gnb-item.is-open .gnb-link,
.gnb-item.is-current .gnb-link {
  color: $color-primary;

  &::after {
    transform: scaleX(1);
  }
}

.badge-hot {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 36px;
  height: 22px;
  padding: 0 8px;
  border-radius: 999px;
  background: #ffd400;
  color: #111111;
  font-size: 11px;
  font-weight: 800;
  line-height: 1;
  flex: 0 0 auto;
}

.dropdown {
  position: absolute;
  top: calc(100% - 8px);
  left: 0;
  min-width: 280px;
  background: $color-white;
  border: 1px solid $color-border;
  box-shadow: $shadow-md;
  z-index: 20;
  opacity: 0;
  visibility: hidden;
  transform: translateY(8px);
  transition:
    opacity 0.22s ease,
    transform 0.22s ease,
    visibility 0.22s ease;
  pointer-events: none;

  ul {
    padding: 10px 0;
  }
}

.gnb-item.is-open .dropdown {
  opacity: 1;
  visibility: visible;
  transform: translateY(0);
  pointer-events: auto;
}

.dropdown-link {
  display: block;
  padding: 12px 20px;
  color: $text-main;
  white-space: nowrap;
  transition:
    background 0.2s ease,
    color 0.2s ease,
    padding-left 0.2s ease;

  &:hover {
    background: $bg-subtle;
    color: $color-primary;
    padding-left: 24px;
  }

  &.is-current {
    background: $bg-subtle;
    color: $color-primary;
    font-weight: 700;
  }
}

.mobile-menu-button {
  @include button-reset;
  display: none;
  width: 44px;
  height: 44px;
  align-items: center;
  justify-content: center;
  color: $text-main;
  flex: 0 0 auto;
  transition:
    color 0.2s ease,
    transform 0.2s ease;

  &:hover {
    color: $color-primary;
  }
}

.mobile-menu-overlay {
  position: fixed;
  inset: 0;
  background: rgba(17, 24, 39, 0.45);
  z-index: 1200;
}

.mobile-overlay-fade-enter-active,
.mobile-overlay-fade-leave-active {
  transition: opacity 0.25s ease;
}

.mobile-overlay-fade-enter-from,
.mobile-overlay-fade-leave-to {
  opacity: 0;
}

.mobile-drawer {
  position: fixed;
  top: 0;
  left: 0;
  width: min(86vw, 360px);
  height: 100vh;
  background: $color-white;
  z-index: 1300;
  box-shadow: 8px 0 30px rgba(0, 0, 0, 0.16);
  transform: translateX(-100%);
  transition: transform 0.3s ease;
  display: flex;
  flex-direction: column;
}

.mobile-drawer.is-open {
  transform: translateX(0);
}

.mobile-drawer__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 72px;
  padding: 0 20px;
  border-bottom: 1px solid $color-border;
}

.mobile-drawer__logo {
  display: inline-flex;
  align-items: center;

  img {
    display: block;
    height: 32px;
    width: auto;
  }
}

.mobile-drawer__close {
  @include button-reset;
  width: 40px;
  height: 40px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: $text-main;
  transition:
    color 0.2s ease,
    transform 0.2s ease;

  &:hover {
    color: $color-primary;
    transform: rotate(90deg);
  }
}

.mobile-drawer__body {
  flex: 1;
  overflow-y: auto;
  padding: 8px 0 20px;
}

.mobile-menu-list {
  display: flex;
  flex-direction: column;
}

.mobile-menu-item {
  border-bottom: 1px solid $color-border;
}

.mobile-menu-item.is-current .mobile-menu-row {
  background: rgba($color-primary, 0.04);
}

.mobile-menu-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  min-height: 56px;
  padding: 0 20px;
}

.mobile-menu-link {
  flex: 1;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  min-height: 56px;
  font-weight: 700;
  color: $text-main;
  min-width: 0;
  transition: color 0.2s ease;

  &:hover {
    color: $color-primary;
  }

  &.is-current {
    color: $color-primary;
  }

  span:first-child {
    word-break: keep-all;
  }
}

.mobile-submenu-toggle {
  @include button-reset;
  width: 32px;
  height: 32px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: $text-sub;
  flex: 0 0 auto;
  transition:
    color 0.2s ease,
    transform 0.2s ease;
}

.mobile-menu-item.is-open .mobile-submenu-toggle,
.mobile-menu-item.is-current .mobile-submenu-toggle {
  color: $color-primary;
  transform: rotate(180deg);
}

.mobile-submenu {
  padding: 8px 0 12px;
  background: $bg-subtle;
}

.mobile-submenu-link {
  display: block;
  padding: 10px 20px 10px 28px;
  color: $text-sub;
  font-size: 15px;
  transition:
    color 0.2s ease,
    padding-left 0.2s ease;

  &:hover {
    color: $color-primary;
    padding-left: 32px;
  }

  &.is-current {
    color: $color-primary;
    font-weight: 700;
  }
}

.mobile-submenu-slide-enter-active,
.mobile-submenu-slide-leave-active {
  transition:
    opacity 0.22s ease,
    transform 0.22s ease;
  transform-origin: top;
}

.mobile-submenu-slide-enter-from,
.mobile-submenu-slide-leave-to {
  opacity: 0;
  transform: translateY(-6px);
}

@include desktop-down {
  .header-inner {
    gap: 24px;
  }

  .gnb-link {
    padding: 0 12px;
    font-size: 15px;
  }

  .badge-hot {
    min-width: 32px;
    height: 20px;
    padding: 0 7px;
    font-size: 10px;
  }
}

@include laptop-down {
  .header {
    height: 76px;
  }

  .header-inner {
    min-height: 76px;
    justify-content: space-between;
    gap: 16px;
  }

  .header-logo img {
    height: 36px;
  }

  .gnb {
    display: none;
  }

  .mobile-menu-button {
    display: inline-flex;
  }
}

@include mobile {
  .header {
    height: 72px;
  }

  .header-inner {
    min-height: 72px;
  }

  .header-logo img {
    height: 32px;
  }

  .mobile-drawer {
    width: min(90vw, 340px);
  }

  .mobile-menu-row {
    padding: 0 16px;
  }

  .mobile-submenu-link {
    padding: 10px 16px 10px 24px;
  }
}
</style>
