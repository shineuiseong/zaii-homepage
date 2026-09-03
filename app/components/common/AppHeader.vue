<template>
  <header
    class="header"
    :class="{
      'header--home': isHome,
      'header--overlay': isOverlayHeader,
      'header--solid': isSolidHeader,
      'header--mega-open': desktopMegaOpen,
      'header--mobile-open': mobileMenuOpen
    }"
    :style="headerStyle"
    @mouseleave="closeDesktopMega"
  >
    <!-- =================================================
      HEADER
    ================================================== -->
    <div class="container header-inner">
      <!-- =================================================
        LOGO
      ================================================== -->
      <NuxtLink to="/" class="header-logo" @mouseenter="closeDesktopMega">
        <img src="/images/logo.svg" alt="자이비뇨의학과" class="header-logo__image" />
      </NuxtLink>

      <!-- =================================================
        DESKTOP GNB
      ================================================== -->
      <nav class="gnb" aria-label="주요 메뉴" @mouseenter="openDesktopMega">
        <ul class="gnb-menu">
          <li
            v-for="item in visibleMenu"
            :key="item.key"
            class="gnb-item"
            :class="{
              'is-current': isTopMenuCurrent(item)
            }"
          >
            <NuxtLink :to="item.link" class="gnb-link">
              <span class="gnb-link__text">
                {{ item.label }}
              </span>
            </NuxtLink>
          </li>
        </ul>
      </nav>

      <!-- =================================================
        RIGHT
      ================================================== -->
      <div class="header-actions" @mouseenter="openDesktopMega">
        <NuxtLink to="/consultation" class="header-consult"> 온라인 상담 </NuxtLink>

        <button
          type="button"
          class="mobile-menu-button"
          :aria-expanded="mobileMenuOpen"
          :aria-label="mobileMenuOpen ? '메뉴 닫기' : '메뉴 열기'"
          @click="handleToggleMobileMenu"
        >
          <Icon :name="mobileMenuOpen ? 'lucide:x' : 'lucide:menu'" size="28" />
        </button>
      </div>
    </div>

    <!-- =================================================
      DESKTOP MEGA MENU
    ================================================== -->
    <transition name="mega-fade">
      <div v-if="desktopMegaOpen" class="mega-menu">
        <div class="container mega-menu__layout">
          <!--
            상단 로고 column과 동일한 공간
          -->
          <div class="mega-menu__logo-space" />

          <!--
            상단 GNB와 정확히 같은 column 수 / 간격 사용
          -->
          <div class="mega-menu__columns">
            <div v-for="item in visibleMenu" :key="item.key" class="mega-column">
              <NuxtLink
                :to="item.link"
                class="mega-column__title"
                :class="{
                  'is-current': isTopMenuCurrent(item)
                }"
              >
                {{ item.label }}
              </NuxtLink>

              <!-- =================================================
                CHILD MENU
              ================================================== -->
              <ul v-if="item.children?.length" class="mega-column__list">
                <li v-for="sub in item.children" :key="sub.link">
                  <NuxtLink
                    :to="sub.link"
                    class="mega-column__link"
                    :class="{
                      'is-current': isSubCurrent(sub.link)
                    }"
                  >
                    {{ sub.label }}
                  </NuxtLink>
                </li>
              </ul>

              <!-- =================================================
                SINGLE MENU
              ================================================== -->
              <ul v-else-if="item.megaLabel" class="mega-column__list">
                <li>
                  <NuxtLink
                    :to="item.link"
                    class="mega-column__link"
                    :class="{
                      'is-current': isSubCurrent(item.link)
                    }"
                  >
                    {{ item.megaLabel }}
                  </NuxtLink>
                </li>
              </ul>
            </div>
          </div>

          <!--
            오른쪽 온라인 상담 column과 동일한 공간
          -->
          <div class="mega-menu__action-space" />
        </div>
      </div>
    </transition>

    <!-- =================================================
      MOBILE OVERLAY
    ================================================== -->
    <transition name="mobile-overlay-fade">
      <div v-if="mobileMenuOpen" class="mobile-menu-overlay" @click="handleCloseMobileMenu" />
    </transition>

    <!-- =================================================
      MOBILE DRAWER
    ================================================== -->
    <aside
      class="mobile-drawer"
      :class="{
        'is-open': mobileMenuOpen
      }"
    >
      <!-- =================================================
        DRAWER HEADER
      ================================================== -->
      <div class="mobile-drawer__header">
        <NuxtLink to="/" class="mobile-drawer__logo" @click="handleCloseMobileMenu">
          <img src="/images/logo.svg" alt="자이비뇨의학과" />
        </NuxtLink>

        <button
          type="button"
          class="mobile-drawer__close"
          aria-label="메뉴 닫기"
          @click="handleCloseMobileMenu"
        >
          <Icon name="lucide:x" size="24" />
        </button>
      </div>

      <!-- =================================================
        DRAWER BODY
      ================================================== -->
      <div class="mobile-drawer__body">
        <!-- =================================================
          INTRO
        ================================================== -->
        <div class="mobile-menu-intro">
          <span> ZAII UROLOGY </span>

          <strong> 자이비뇨의학과 병원 </strong>

          <p>전립선과 남성 건강을 위한 전문 진료</p>
        </div>

        <!-- =================================================
          MOBILE MENU
        ================================================== -->
        <ul class="mobile-menu-list">
          <li
            v-for="(item, i) in visibleMenu"
            :key="item.key"
            class="mobile-menu-item"
            :class="{
              'is-open': mobileSubmenuOpen === i,
              'is-current': isTopMenuCurrent(item)
            }"
          >
            <!-- =================================================
              CHILDREN
            ================================================== -->
            <template v-if="item.children?.length">
              <div class="mobile-menu-row">
                <button
                  type="button"
                  class="mobile-menu-link"
                  :class="{
                    'is-current': isTopMenuCurrent(item)
                  }"
                  @click="toggleMobileSubmenu(i)"
                >
                  {{ item.label }}
                </button>

                <button
                  type="button"
                  class="mobile-submenu-toggle"
                  :aria-expanded="mobileSubmenuOpen === i"
                  :aria-label="
                    mobileSubmenuOpen === i ? `${item.label} 메뉴 닫기` : `${item.label} 메뉴 열기`
                  "
                  @click="toggleMobileSubmenu(i)"
                >
                  <Icon
                    :name="mobileSubmenuOpen === i ? 'lucide:minus' : 'lucide:plus'"
                    size="19"
                  />
                </button>
              </div>

              <transition name="mobile-submenu-slide">
                <ul v-if="mobileSubmenuOpen === i" class="mobile-submenu">
                  <li v-for="sub in item.children" :key="sub.link">
                    <NuxtLink
                      :to="sub.link"
                      class="mobile-submenu-link"
                      :class="{
                        'is-current': isSubCurrent(sub.link)
                      }"
                      @click="handleCloseMobileMenu"
                    >
                      {{ sub.label }}
                    </NuxtLink>
                  </li>
                </ul>
              </transition>
            </template>

            <!-- =================================================
              DIRECT
            ================================================== -->
            <template v-else>
              <NuxtLink
                :to="item.link"
                class="mobile-menu-direct"
                :class="{
                  'is-current': isTopMenuCurrent(item)
                }"
                @click="handleCloseMobileMenu"
              >
                {{ item.label }}
              </NuxtLink>
            </template>
          </li>
        </ul>

        <!-- =================================================
          CONTACT
        ================================================== -->
        <div class="mobile-contact">
          <a href="tel:0262075678">
            <span>
              <small> 진료문의 </small>

              <strong> 02-6207-5678 </strong>
            </span>
          </a>

          <a href="tel:01026386034">
            <span>
              <small> 상담문의 </small>

              <strong> 010-2638-6034 </strong>
            </span>
          </a>
        </div>
      </div>
    </aside>
  </header>
</template>

<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref, watch } from 'vue'

import { useMobileUi } from '~/composables/useMobileUi'

/* ========================================================
  TYPES
======================================================== */

type MenuChild = {
  label: string
  link: string
}

type MenuItem = {
  key: string
  label: string
  link: string

  /*
   * false면
   * PC / Mega / Mobile에서 전부 숨김.
   */
  enabled?: boolean

  /*
   * 하위메뉴가 없는 경우
   * Mega Menu에서 보여줄 안내문
   */
  megaLabel?: string

  children?: MenuChild[]
}

/* ========================================================
  ROUTE
======================================================== */

const route = useRoute()

/* ========================================================
  BREAKPOINT
======================================================== */

const DESKTOP_MEDIA_QUERY = '(min-width: 1025px)'

/* ========================================================
  MENU
======================================================== */

const menu: MenuItem[] = [
  /* =====================================================
    01. 병원소개
  ===================================================== */
  {
    key: 'hospital',

    label: '병원소개',

    link: '/hospital/history',

    enabled: true,

    children: [
      {
        label: '병원 발자취',
        link: '/hospital/history'
      },

      {
        label: '브랜드 스토리',
        link: '/hospital/brand'
      },

      {
        label: '의료진 소개',
        link: '/hospital/medical-team'
      },

      {
        label: '진료 안내',
        link: '/hospital/guide'
      },

      {
        label: '병원 둘러보기',
        link: '/hospital/tour'
      },

      {
        label: '오시는 길',
        link: '/hospital/location'
      }
    ]
  },

  /* =====================================================
    02. 전립선비대증
  ===================================================== */
  {
    key: 'prostate',

    label: '전립선비대증',

    link: '/prostate',

    enabled: true,

    children: [
      {
        label: '전립선비대증',
        link: '/prostate'
      },

      {
        label: '유로리프트',
        link: '/urolift'
      },

      {
        label: '리줌',
        link: '/rezum'
      }
    ]
  },

  /* =====================================================
    03. 언론

    현재 비활성화.

    나중에 다시 사용하려면
    enabled: true
    하나만 바꾸면 됨.
  ===================================================== */
  {
    key: 'media',

    label: '언론',

    link: '/media',

    enabled: false,

    children: [
      {
        label: '언론 보도',
        link: '/media'
      }
    ]
  },

  /* =====================================================
    04. 오시는 길
  ===================================================== */
  {
    key: 'location',

    label: '오시는 길',

    link: '/hospital/location',

    enabled: true,

    megaLabel: '위치 및 교통 안내'
  },

  /* =====================================================
    05. 상담·안내
  ===================================================== */
  {
    key: 'consultation',

    label: '상담·안내',

    link: '/consultation',

    enabled: true,

    children: [
      {
        label: '온라인 상담',
        link: '/consultation'
      },

      {
        label: '진료 안내',
        link: '/hospital/guide'
      }
    ]
  },

  /* =====================================================
    06. 전립선암 신속검사
  ===================================================== */
  {
    key: 'prostate-cancer',

    label: '전립선암 신속검사',

    link: '/prostate-cancer',

    enabled: true,

    megaLabel: '신속검사 안내'
  }

  /* =====================================================
    남성수술

    나중에 추가할 때 아래처럼
    enabled: true만 넣으면 자동으로
    GNB 간격이 다시 균등 분배됨.
  ===================================================== */

  /*
  {
    key: 'male',

    label: '남성수술',

    link: '/filler-penis-enlargement',

    enabled: true,

    children: [
      {
        label: '필러 음경확대술',
        link: '/filler-penis-enlargement'
      }
    ]
  }
  */
]

/* ========================================================
  VISIBLE MENU
======================================================== */

/*
 * enabled === false만 제외.
 *
 * enabled를 생략하면
 * 기본적으로 표시된다.
 */
const visibleMenu = computed(() => {
  return menu.filter((item) => {
    return item.enabled !== false
  })
})

/* ========================================================
  DYNAMIC GRID
======================================================== */

/*
 * 핵심.
 *
 * 메뉴 개수를 JS에서 자동 계산해서
 *
 * 5개면
 * repeat(5, minmax(0, 1fr))
 *
 * 6개면
 * repeat(6, minmax(0, 1fr))
 *
 * 로 자동 변경된다.
 *
 * 따라서 메뉴 추가/삭제/순서변경을 해도
 * CSS를 다시 수정할 필요 없음.
 */
const headerStyle = computed(() => {
  return {
    '--gnb-count': String(Math.max(visibleMenu.value.length, 1))
  }
})

/* ========================================================
  STATE
======================================================== */

const desktopMegaOpen = ref(false)

const mobileSubmenuOpen = ref<number | null>(null)

const isScrolled = ref(false)

const { mobileMenuOpen, openMobileMenu, closeMobileMenu } = useMobileUi()

/* ========================================================
  HOME
======================================================== */

const isHome = computed(() => {
  return normalizePath(route.path) === '/'
})

/* ========================================================
  OVERLAY HEADER
======================================================== */

const isOverlayHeader = computed(() => {
  return isHome.value && !isScrolled.value && !desktopMegaOpen.value && !mobileMenuOpen.value
})

/* ========================================================
  SOLID HEADER
======================================================== */

const isSolidHeader = computed(() => {
  return !isOverlayHeader.value
})

/* ========================================================
  NORMALIZE PATH
======================================================== */

function normalizePath(path: string) {
  if (!path || path === '/') {
    return '/'
  }

  return path.replace(/\/+$/, '')
}

/* ========================================================
  PATH MATCH
======================================================== */

function isSameOrChildPath(target: string, current: string) {
  const normalizedTarget = normalizePath(target)

  const normalizedCurrent = normalizePath(current)

  if (normalizedTarget === '/') {
    return normalizedCurrent === '/'
  }

  return (
    normalizedCurrent === normalizedTarget || normalizedCurrent.startsWith(`${normalizedTarget}/`)
  )
}

/* ========================================================
  SUB CURRENT
======================================================== */

function isSubCurrent(link: string) {
  return isSameOrChildPath(link, route.path)
}

/* ========================================================
  TOP CURRENT
======================================================== */

function isTopMenuCurrent(item: MenuItem) {
  const current = normalizePath(route.path)

  /* =====================================================
    오시는 길
  ===================================================== */

  if (current === normalizePath('/hospital/location')) {
    return item.key === 'location'
  }

  /* =====================================================
    전립선암 신속검사
  ===================================================== */

  if (current === normalizePath('/prostate-cancer')) {
    return item.key === 'prostate-cancer'
  }

  /* =====================================================
    상담
  ===================================================== */

  if (current === normalizePath('/consultation')) {
    return item.key === 'consultation'
  }

  /* =====================================================
    CHILD
  ===================================================== */

  if (
    item.children?.some((sub) => {
      return isSubCurrent(sub.link)
    })
  ) {
    return true
  }

  return isSameOrChildPath(item.link, route.path)
}

/* ========================================================
  DESKTOP OPEN
======================================================== */

function openDesktopMega() {
  if (import.meta.client && !window.matchMedia(DESKTOP_MEDIA_QUERY).matches) {
    return
  }

  desktopMegaOpen.value = true
}

/* ========================================================
  DESKTOP CLOSE
======================================================== */

function closeDesktopMega() {
  desktopMegaOpen.value = false
}

/* ========================================================
  MOBILE RESET
======================================================== */

function resetMobileSubmenu() {
  mobileSubmenuOpen.value = null
}

/* ========================================================
  MOBILE OPEN
======================================================== */

function handleOpenMobileMenu() {
  desktopMegaOpen.value = false

  openMobileMenu()

  /*
   * visibleMenu 기준으로 index를 찾는다.
   *
   * 비활성화된 메뉴 때문에
   * index가 어긋나는 문제 방지.
   */
  const foundIndex = visibleMenu.value.findIndex((item) => {
    if (isTopMenuCurrent(item)) {
      return true
    }

    return item.children?.some((sub) => isSubCurrent(sub.link))
  })

  const foundItem = visibleMenu.value[foundIndex]

  mobileSubmenuOpen.value = foundIndex >= 0 && foundItem?.children?.length ? foundIndex : null
}

/* ========================================================
  MOBILE CLOSE
======================================================== */

function handleCloseMobileMenu() {
  closeMobileMenu()

  resetMobileSubmenu()
}

/* ========================================================
  MOBILE TOGGLE
======================================================== */

function handleToggleMobileMenu() {
  if (mobileMenuOpen.value) {
    handleCloseMobileMenu()

    return
  }

  handleOpenMobileMenu()
}

/* ========================================================
  MOBILE SUB MENU
======================================================== */

function toggleMobileSubmenu(index: number) {
  mobileSubmenuOpen.value = mobileSubmenuOpen.value === index ? null : index
}

/* ========================================================
  SCROLL
======================================================== */

function handleScroll() {
  if (!import.meta.client) {
    return
  }

  isScrolled.value = window.scrollY > 20
}

/* ========================================================
  ROUTE WATCH
======================================================== */

watch(
  () => route.path,

  () => {
    desktopMegaOpen.value = false

    handleCloseMobileMenu()

    if (import.meta.client) {
      handleScroll()
    }
  }
)

/* ========================================================
  RESPONSIVE
======================================================== */

let desktopMediaQuery: MediaQueryList | null = null

function handleDesktopMediaChange(event: MediaQueryListEvent | MediaQueryList) {
  /*
   * Desktop -> Mobile
   */
  if (!event.matches) {
    desktopMegaOpen.value = false

    return
  }

  /*
   * Mobile -> Desktop
   */
  desktopMegaOpen.value = false

  if (mobileMenuOpen.value) {
    closeMobileMenu()
  }

  resetMobileSubmenu()
}

/* ========================================================
  MOUNT
======================================================== */

onMounted(() => {
  desktopMediaQuery = window.matchMedia(DESKTOP_MEDIA_QUERY)

  handleDesktopMediaChange(desktopMediaQuery)

  desktopMediaQuery.addEventListener('change', handleDesktopMediaChange)

  handleScroll()

  window.addEventListener('scroll', handleScroll, {
    passive: true
  })
})

/* ========================================================
  UNMOUNT
======================================================== */

onBeforeUnmount(() => {
  desktopMediaQuery?.removeEventListener('change', handleDesktopMediaChange)

  window.removeEventListener('scroll', handleScroll)

  desktopMediaQuery = null
})
</script>

<style scoped lang="scss">
/* ========================================================
  VARIABLES
======================================================== */

.header {
  --header-height: 88px;

  /*
   * 로고 영역.
   *
   * 실제 logo.svg의 표시 width와는 별개.
   * 이 영역을 기준으로 GNB 전체 시작점이 결정된다.
   */
  --header-logo-column: 300px;

  /*
   * 오른쪽 온라인상담 영역
   */
  --header-action-column: 160px;

  /*
   * logo / gnb / action 사이 gap
   */
  --header-column-gap: 28px;

  /*
   * Vue에서 자동 주입.
   *
   * 현재 언론이 꺼져 있으므로 5.
   */
  --gnb-count: 5;
}

/* ========================================================
  SHARED GRID
======================================================== */

.header-inner,
.mega-menu__layout {
  display: grid;

  grid-template-columns:
    var(--header-logo-column)
    minmax(0, 1fr)
    var(--header-action-column);

  column-gap: var(--header-column-gap);
}

/* ========================================================
  HEADER
======================================================== */

.header {
  position: fixed;

  top: 0;
  left: 0;

  width: 100%;

  height: var(--header-height);

  z-index: 1000;

  background: #fff;

  border-bottom: 1px solid rgba(15, 23, 42, 0.08);

  box-shadow: none;

  transition:
    background 0.25s ease,
    border-color 0.25s ease,
    box-shadow 0.25s ease,
    backdrop-filter 0.25s ease;

  isolation: isolate;
}

/* ========================================================
  SOLID
======================================================== */

.header--solid {
  background: rgba(255, 255, 255, 0.97);

  border-bottom-color: rgba(15, 23, 42, 0.08);

  box-shadow:
    0 1px 0 rgba(15, 23, 42, 0.015),
    0 5px 18px rgba(15, 23, 42, 0.035);

  backdrop-filter: blur(12px);

  -webkit-backdrop-filter: blur(12px);
}

/* ========================================================
  OVERLAY
======================================================== */

.header--overlay {
  background: linear-gradient(
    180deg,
    rgba(4, 10, 18, 0.42) 0%,
    rgba(4, 10, 18, 0.22) 48%,
    rgba(4, 10, 18, 0.04) 100%
  );

  border-bottom-color: rgba(255, 255, 255, 0.1);

  box-shadow: none;

  backdrop-filter: none;

  -webkit-backdrop-filter: none;
}

/* ========================================================
  MEGA OPEN
======================================================== */

.header.header--mega-open {
  background: #fff;

  border-bottom-color: rgba(15, 23, 42, 0.055);

  box-shadow: none;

  backdrop-filter: none;

  -webkit-backdrop-filter: none;
}

/* ========================================================
  HEADER INNER
======================================================== */

.header-inner {
  position: relative;

  z-index: 3;

  align-items: center;

  min-height: var(--header-height);
}

/* ========================================================
  LOGO
======================================================== */

.header-logo {
  grid-column: 1;

  display: flex;

  align-items: center;

  justify-self: start;

  width: 196px;

  height: 44px;

  min-width: 0;

  text-decoration: none;
}

.header-logo__image {
  display: block;

  width: 100%;

  height: 100%;

  object-fit: contain;

  object-position: left center;

  transition:
    filter 0.2s ease,
    opacity 0.2s ease;
}

/* ========================================================
  OVERLAY LOGO
======================================================== */

.header--overlay .header-logo__image {
  filter: brightness(0) invert(1);
}

/* ========================================================
  SOLID LOGO
======================================================== */

.header.header--mega-open .header-logo__image,
.header.header--mobile-open .header-logo__image {
  filter: none;
}

/* ========================================================
  GNB
======================================================== */

.gnb {
  grid-column: 2;

  width: 100%;

  min-width: 0;
}

/* ========================================================
  DYNAMIC GNB GRID
======================================================== */

/*
 * 핵심 변경.
 *
 * 기존:
 *
 * 1.1fr 1.15fr 0.72fr ...
 *
 * 이런 식으로 메뉴별 폭을 직접 지정했기 때문에
 * 순서를 바꾸거나 메뉴를 삭제하면
 * 간격이 뒤틀렸다.
 *
 * 이제 모든 메뉴가 동일한 width를 가진다.
 */

.gnb-menu {
  display: grid;

  grid-template-columns: repeat(var(--gnb-count), minmax(0, 1fr));

  align-items: stretch;

  width: 100%;

  height: var(--header-height);
}

.gnb-item {
  position: relative;

  display: flex;

  justify-content: center;

  min-width: 0;
}

/* ========================================================
  GNB LINK
======================================================== */

.gnb-link {
  position: relative;

  display: flex;

  align-items: center;

  justify-content: center;

  width: 100%;

  height: var(--header-height);

  /*
   * 메뉴마다 동일한 내부 여백.
   */
  padding: 0 clamp(6px, 0.75vw, 14px);

  color: #171b24;

  font-size: 16px;

  font-weight: 700;

  line-height: 1.2;

  letter-spacing: -0.045em;

  text-align: center;

  white-space: nowrap;

  text-decoration: none;

  transition:
    color 0.2s ease,
    text-shadow 0.2s ease;
}

.gnb-link__text {
  position: relative;

  display: inline-flex;

  align-items: center;

  justify-content: center;

  height: 100%;
}

/* ========================================================
  DEFAULT ACTIVE
======================================================== */

.gnb-item:hover .gnb-link,
.gnb-item.is-current .gnb-link {
  color: $color-primary;
}

/* ========================================================
  ACTIVE LINE
======================================================== */

.gnb-link::after {
  position: absolute;

  /*
   * 동일한 column 기준으로
   * 68% 정도 길이의 line.
   */
  right: 16%;

  bottom: -1px;

  left: 16%;

  height: 2px;

  background: $color-primary;

  opacity: 0;

  transform: scaleX(0);

  transform-origin: center;

  transition:
    opacity 0.18s ease,
    transform 0.22s ease;

  content: '';

  z-index: 4;
}

.gnb-item:hover .gnb-link::after,
.gnb-item.is-current .gnb-link::after {
  opacity: 1;

  transform: scaleX(1);
}

/* ========================================================
  OVERLAY GNB
======================================================== */

.header--overlay .gnb-link {
  color: rgba(255, 255, 255, 0.96);

  text-shadow:
    0 1px 6px rgba(0, 0, 0, 0.22),
    0 2px 16px rgba(0, 0, 0, 0.12);
}

.header--overlay .gnb-item:hover .gnb-link,
.header--overlay .gnb-item.is-current .gnb-link {
  color: #fff;
}

.header--overlay .gnb-link::after {
  background: #fff;
}

/* ========================================================
  MEGA OPEN GNB
======================================================== */

.header.header--mega-open .gnb-link {
  color: #171b24;

  text-shadow: none;
}

.header.header--mega-open .gnb-item:hover .gnb-link,
.header.header--mega-open .gnb-item.is-current .gnb-link {
  color: $color-primary;
}

.header.header--mega-open .gnb-link::after {
  background: $color-primary;
}

/* ========================================================
  HEADER ACTIONS
======================================================== */

.header-actions {
  grid-column: 3;

  display: flex;

  align-items: center;

  justify-content: flex-end;

  min-width: 0;
}

/* ========================================================
  CONSULT
======================================================== */

.header-consult {
  display: inline-flex;

  align-items: center;

  justify-content: center;

  height: 42px;

  padding: 0 18px;

  border: 1px solid rgba(13, 87, 198, 0.13);

  border-radius: 999px;

  background: #f5f8fc;

  color: #173f79;

  font-size: 14px;

  font-weight: 700;

  line-height: 1;

  letter-spacing: -0.025em;

  white-space: nowrap;

  text-decoration: none;

  transition:
    background 0.2s ease,
    border-color 0.2s ease,
    color 0.2s ease;
}

/* ========================================================
  OVERLAY CONSULT
======================================================== */

.header--overlay .header-consult {
  border-color: rgba(255, 255, 255, 0.44);

  background: rgba(255, 255, 255, 0.1);

  color: #fff;

  backdrop-filter: blur(6px);

  -webkit-backdrop-filter: blur(6px);
}

/* ========================================================
  MEGA CONSULT
======================================================== */

.header.header--mega-open .header-consult {
  border-color: rgba(13, 87, 198, 0.13);

  background: #f5f8fc;

  color: #173f79;

  backdrop-filter: none;

  -webkit-backdrop-filter: none;
}

.header-consult:hover,
.header--overlay .header-consult:hover,
.header.header--mega-open .header-consult:hover {
  border-color: $color-primary;

  background: $color-primary;

  color: #fff;
}

/* ========================================================
  MEGA MENU
======================================================== */

.mega-menu {
  position: absolute;

  top: var(--header-height);

  left: 0;

  z-index: 2;

  width: 100%;

  background: #fff;

  border-top: 0;

  border-bottom: 1px solid rgba(15, 23, 42, 0.07);

  box-shadow:
    0 14px 30px rgba(15, 23, 42, 0.04),
    0 26px 50px rgba(15, 23, 42, 0.035);
}

/* ========================================================
  MEGA LAYOUT
======================================================== */

.mega-menu__layout {
  align-items: start;

  min-height: 300px;

  padding-top: 34px;

  padding-bottom: 38px;
}

.mega-menu__logo-space {
  grid-column: 1;
}

.mega-menu__action-space {
  grid-column: 3;
}

/* ========================================================
  DYNAMIC MEGA COLUMNS
======================================================== */

/*
 * GNB와 완전히 동일한 repeat().
 *
 * 이게 핵심.
 *
 * 위 메뉴를 추가/삭제/순서 변경해도
 * 아래 메뉴가 항상 정확히 같은 X축에 위치.
 */
.mega-menu__columns {
  grid-column: 2;

  display: grid;

  grid-template-columns: repeat(var(--gnb-count), minmax(0, 1fr));

  align-items: start;

  width: 100%;
}

/* ========================================================
  MEGA COLUMN
======================================================== */

.mega-column {
  min-width: 0;

  /*
   * 모든 column 동일한 padding
   */
  padding: 0 clamp(6px, 0.75vw, 14px);

  text-align: center;
}

/* ========================================================
  MEGA TITLE
======================================================== */

.mega-column__title {
  position: relative;

  display: inline-flex;

  align-items: center;

  justify-content: center;

  min-height: 24px;

  margin-bottom: 25px;

  color: #171b24;

  font-size: 15px;

  font-weight: 800;

  line-height: 1.35;

  letter-spacing: -0.045em;

  text-align: center;

  text-decoration: none;

  word-break: keep-all;

  transition: color 0.18s ease;
}

.mega-column__title:hover,
.mega-column__title.is-current {
  color: $color-primary;
}

/* ========================================================
  TITLE ACTIVE
======================================================== */

.mega-column__title::after {
  position: absolute;

  left: 50%;

  bottom: -9px;

  width: 24px;

  height: 1px;

  background: $color-primary;

  opacity: 0;

  transform: translateX(-50%);

  content: '';

  transition: opacity 0.18s ease;
}

.mega-column__title.is-current::after {
  opacity: 1;
}

/* ========================================================
  MEGA LIST
======================================================== */

.mega-column__list {
  display: flex;

  flex-direction: column;

  align-items: center;

  gap: 16px;
}

/* ========================================================
  MEGA LINK
======================================================== */

.mega-column__link {
  display: inline-block;

  max-width: 100%;

  color: #4c5564;

  font-size: 14px;

  font-weight: 500;

  line-height: 1.45;

  letter-spacing: -0.035em;

  text-align: center;

  text-decoration: none;

  word-break: keep-all;

  transition: color 0.18s ease;
}

.mega-column__link:hover {
  color: $color-primary;
}

.mega-column__link.is-current {
  color: $color-primary;

  font-weight: 700;
}

/* ========================================================
  MEGA TRANSITION
======================================================== */

.mega-fade-enter-active,
.mega-fade-leave-active {
  transition:
    opacity 0.18s ease,
    transform 0.18s ease;
}

.mega-fade-enter-from,
.mega-fade-leave-to {
  opacity: 0;

  transform: translateY(-5px);
}

/* ========================================================
  MOBILE BUTTON
======================================================== */

.mobile-menu-button {
  @include button-reset;

  display: none;

  width: 44px;

  height: 44px;

  align-items: center;

  justify-content: center;

  color: #111827;

  transition: color 0.2s ease;
}

.header--overlay .mobile-menu-button {
  color: #fff;
}

/* ========================================================
  MOBILE OPEN
======================================================== */

.header.header--mobile-open {
  background: #fff;

  border-bottom-color: rgba(15, 23, 42, 0.08);

  backdrop-filter: none;

  -webkit-backdrop-filter: none;
}

.header.header--mobile-open .mobile-menu-button {
  color: #111827;
}

/* ========================================================
  MOBILE OVERLAY
======================================================== */

.mobile-menu-overlay {
  position: fixed;

  inset: 0;

  z-index: 1200;

  background: rgba(15, 23, 42, 0.48);
}

.mobile-overlay-fade-enter-active,
.mobile-overlay-fade-leave-active {
  transition: opacity 0.25s ease;
}

.mobile-overlay-fade-enter-from,
.mobile-overlay-fade-leave-to {
  opacity: 0;
}

/* ========================================================
  MOBILE DRAWER
======================================================== */

.mobile-drawer {
  position: fixed;

  top: 0;

  right: 0;

  z-index: 1300;

  display: flex;

  flex-direction: column;

  width: min(90vw, 390px);

  height: 100dvh;

  background: #fff;

  box-shadow: -10px 0 40px rgba(15, 23, 42, 0.14);

  transform: translateX(100%);

  transition: transform 0.3s ease;
}

.mobile-drawer.is-open {
  transform: translateX(0);
}

/* ========================================================
  MOBILE DRAWER HEADER
======================================================== */

.mobile-drawer__header {
  display: flex;

  align-items: center;

  justify-content: space-between;

  min-height: 72px;

  padding: 0 20px;

  border-bottom: 1px solid #edf0f3;
}

/* ========================================================
  MOBILE DRAWER LOGO
======================================================== */

.mobile-drawer__logo {
  display: flex;

  align-items: center;

  width: 176px;

  height: 38px;
}

.mobile-drawer__logo img {
  display: block;

  width: 100%;

  height: 100%;

  object-fit: contain;

  object-position: left center;
}

/* ========================================================
  MOBILE CLOSE
======================================================== */

.mobile-drawer__close {
  @include button-reset;

  display: flex;

  align-items: center;

  justify-content: center;

  width: 40px;

  height: 40px;

  color: #111827;
}

/* ========================================================
  MOBILE BODY
======================================================== */

.mobile-drawer__body {
  flex: 1;

  overflow-y: auto;

  padding-bottom: calc(env(safe-area-inset-bottom) + 24px);
}

/* ========================================================
  MOBILE INTRO
======================================================== */

.mobile-menu-intro {
  padding: 27px 22px 23px;

  background: linear-gradient(135deg, #f4f8fd, #fff);
}

.mobile-menu-intro > span {
  display: block;

  margin-bottom: 8px;

  color: $color-primary;

  font-size: 10px;

  font-weight: 800;

  letter-spacing: 0.16em;
}

.mobile-menu-intro strong {
  display: block;

  margin-bottom: 6px;

  color: #111827;

  font-size: 21px;

  font-weight: 800;

  letter-spacing: -0.04em;
}

.mobile-menu-intro p {
  margin: 0;

  color: #828b99;

  font-size: 13px;

  line-height: 1.5;
}

/* ========================================================
  MOBILE MENU
======================================================== */

.mobile-menu-list {
  display: flex;

  flex-direction: column;
}

.mobile-menu-item {
  border-bottom: 1px solid #edf0f3;
}

.mobile-menu-item.is-current {
  background: rgba(13, 87, 198, 0.025);
}

/* ========================================================
  MOBILE ROW
======================================================== */

.mobile-menu-row {
  display: flex;

  align-items: center;

  min-height: 62px;

  padding: 0 20px;
}

.mobile-menu-link {
  @include button-reset;

  display: flex;

  align-items: center;

  flex: 1;

  min-height: 62px;

  color: #161b25;

  font-size: 16px;

  font-weight: 750;

  letter-spacing: -0.035em;

  text-align: left;
}

.mobile-menu-link.is-current {
  color: $color-primary;
}

/* ========================================================
  MOBILE TOGGLE
======================================================== */

.mobile-submenu-toggle {
  @include button-reset;

  display: flex;

  align-items: center;

  justify-content: center;

  width: 38px;

  height: 38px;

  color: #8a93a1;

  flex: 0 0 auto;
}

.mobile-menu-item.is-open .mobile-submenu-toggle {
  color: $color-primary;
}

/* ========================================================
  MOBILE DIRECT
======================================================== */

.mobile-menu-direct {
  display: flex;

  align-items: center;

  min-height: 62px;

  padding: 0 20px;

  color: #161b25;

  font-size: 16px;

  font-weight: 750;

  letter-spacing: -0.035em;

  text-decoration: none;
}

.mobile-menu-direct.is-current {
  color: $color-primary;
}

/* ========================================================
  MOBILE SUBMENU
======================================================== */

.mobile-submenu {
  padding: 4px 20px 14px;

  background: #f7f9fc;
}

.mobile-submenu li + li {
  border-top: 1px solid rgba(15, 23, 42, 0.045);
}

.mobile-submenu-link {
  display: flex;

  align-items: center;

  min-height: 46px;

  padding: 0 5px;

  color: #596273;

  font-size: 14px;

  font-weight: 600;

  letter-spacing: -0.025em;

  text-decoration: none;

  transition:
    color 0.18s ease,
    padding-left 0.18s ease;
}

.mobile-submenu-link:hover {
  padding-left: 9px;

  color: $color-primary;
}

.mobile-submenu-link.is-current {
  color: $color-primary;

  font-weight: 750;
}

/* ========================================================
  MOBILE CONTACT
======================================================== */

.mobile-contact {
  display: grid;

  grid-template-columns: repeat(2, minmax(0, 1fr));

  gap: 8px;

  padding: 20px;
}

.mobile-contact a {
  display: flex;

  align-items: center;

  min-width: 0;

  padding: 14px;

  border: 1px solid #edf0f4;

  border-radius: 12px;

  background: #f7f9fc;

  color: #173f79;

  text-decoration: none;
}

.mobile-contact span {
  display: flex;

  flex-direction: column;

  min-width: 0;
}

.mobile-contact small {
  color: #7b8594;

  font-size: 10px;

  line-height: 1.3;
}

.mobile-contact strong {
  margin-top: 3px;

  color: #173f79;

  font-size: 12px;

  font-weight: 800;

  line-height: 1.3;

  letter-spacing: -0.035em;
}

/* ========================================================
  MOBILE SUBMENU ANIMATION
======================================================== */

.mobile-submenu-slide-enter-active,
.mobile-submenu-slide-leave-active {
  transition:
    opacity 0.2s ease,
    transform 0.2s ease;
}

.mobile-submenu-slide-enter-from,
.mobile-submenu-slide-leave-to {
  opacity: 0;

  transform: translateY(-5px);
}

/* ========================================================
  DESKTOP DOWN
======================================================== */

@include desktop-down {
  .header {
    --header-logo-column: 240px;

    --header-action-column: 130px;

    --header-column-gap: 18px;
  }

  .header-logo {
    width: 178px;

    height: 40px;
  }

  .gnb-link {
    padding: 0 6px;

    font-size: 14px;
  }

  .gnb-link::after {
    right: 14%;

    left: 14%;

    height: 1px;
  }

  .mega-column {
    padding: 0 6px;
  }

  .mega-column__title {
    font-size: 13px;
  }

  .mega-column__link {
    font-size: 12px;
  }

  .mega-column__list {
    gap: 14px;
  }

  .header-consult {
    height: 40px;

    padding: 0 12px;

    font-size: 12px;
  }
}

/* ========================================================
  LAPTOP / TABLET
======================================================== */

@include laptop-down {
  .header {
    --header-height: 76px;

    height: var(--header-height);
  }

  .header-inner {
    display: flex;

    min-height: var(--header-height);

    justify-content: space-between;

    gap: 16px;
  }

  .header-logo {
    width: 170px;

    height: 38px;
  }

  .gnb,
  .header-consult,
  .mega-menu {
    display: none;
  }

  .header-actions {
    display: flex;

    margin-left: auto;
  }

  .mobile-menu-button {
    display: inline-flex;
  }
}

/* ========================================================
  MOBILE
======================================================== */

@include mobile {
  .header {
    --header-height: 70px;

    height: var(--header-height);
  }

  .header-inner {
    min-height: var(--header-height);
  }

  .header-logo {
    width: 150px;

    height: 34px;
  }

  .mobile-drawer {
    width: min(92vw, 360px);
  }

  .mobile-drawer__logo {
    width: 154px;

    height: 34px;
  }

  .mobile-contact {
    grid-template-columns: 1fr;
  }
}
</style>
