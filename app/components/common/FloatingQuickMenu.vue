<template>
  <aside class="quick-menu" aria-label="빠른 메뉴">
    <!-- =========================
      DESKTOP
    ========================== -->
    <nav class="quick-menu__desktop" aria-label="데스크톱 빠른 메뉴">
      <!-- 진료문의 -->
      <a href="tel:0262075678" class="quick-menu__item">
        <span class="quick-menu__icon-box">
          <Icon name="lucide:phone" class="quick-menu__icon" />
        </span>

        <span class="quick-menu__text"> 진료문의 </span>
      </a>

      <!-- 상담문의 -->
      <a href="tel:01026386034" class="quick-menu__item">
        <span class="quick-menu__icon-box">
          <Icon name="lucide:headphones" class="quick-menu__icon" />
        </span>

        <span class="quick-menu__text"> 상담문의 </span>
      </a>

      <!-- 오시는 길 -->
      <NuxtLink
        to="/hospital/location"
        class="quick-menu__item"
        :class="{
          'quick-menu__item--active': isActive('/hospital/location')
        }"
      >
        <span class="quick-menu__icon-box">
          <Icon name="lucide:map" class="quick-menu__icon" />
        </span>

        <span class="quick-menu__text"> 오시는 길 </span>
      </NuxtLink>

      <!-- 온라인상담 -->
      <NuxtLink
        to="/consultation"
        class="quick-menu__item"
        :class="{
          'quick-menu__item--active': isActive('/consultation')
        }"
      >
        <span class="quick-menu__icon-box">
          <Icon name="lucide:message-circle" class="quick-menu__icon" />
        </span>

        <span class="quick-menu__text"> 온라인상담 </span>
      </NuxtLink>

      <!-- TOP -->
      <button
        type="button"
        class="quick-menu__item quick-menu__item--top"
        aria-label="페이지 상단으로 이동"
        @click="scrollToTop"
      >
        <Icon name="lucide:arrow-up" class="quick-menu__top-icon" />

        <span class="quick-menu__top-text"> TOP </span>
      </button>
    </nav>

    <!-- =========================
      MOBILE
    ========================== -->
    <nav
      class="quick-menu__mobile"
      :class="{
        'quick-menu__mobile--hidden': mobileMenuOpen
      }"
      aria-label="모바일 빠른 메뉴"
      :aria-hidden="mobileMenuOpen"
    >
      <a href="tel:0262075678" class="quick-menu__mobile-item">
        <Icon name="lucide:phone" class="quick-menu__mobile-icon" />

        <span> 진료문의 </span>
      </a>

      <a href="tel:01026386034" class="quick-menu__mobile-item">
        <Icon name="lucide:headphones" class="quick-menu__mobile-icon" />

        <span> 상담문의 </span>
      </a>

      <NuxtLink
        to="/hospital/location"
        class="quick-menu__mobile-item"
        :class="{
          'quick-menu__mobile-item--active': isActive('/hospital/location')
        }"
      >
        <Icon name="lucide:map" class="quick-menu__mobile-icon" />

        <span> 오시는 길 </span>
      </NuxtLink>

      <NuxtLink
        to="/consultation"
        class="quick-menu__mobile-item"
        :class="{
          'quick-menu__mobile-item--active': isActive('/consultation')
        }"
      >
        <Icon name="lucide:message-circle" class="quick-menu__mobile-icon" />

        <span> 온라인상담 </span>
      </NuxtLink>
    </nav>
  </aside>
</template>

<script setup lang="ts">
const route = useRoute()

const { mobileMenuOpen } = useMobileUi()

function isActive(path: string) {
  return route.path === path || route.path.startsWith(`${path}/`)
}

function scrollToTop() {
  if (!import.meta.client) {
    return
  }

  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}
</script>

<style scoped lang="scss">
/* ========================================================
   ROOT
======================================================== */

.quick-menu {
  position: fixed;

  z-index: 1200;
}

/* ========================================================
   DESKTOP
======================================================== */

.quick-menu__desktop {
  position: fixed;

  /*
   * 화면 정중앙보다 살짝 아래.
   * 팝업을 왼쪽에 붙였을 때도
   * 참고 이미지처럼 안정적으로 보임.
   */
  top: 52%;
  right: 18px;

  display: flex;
  flex-direction: column;

  width: 88px;

  gap: 7px;

  transform: translateY(-50%);
}

/* ========================================================
   DESKTOP ITEM
======================================================== */

.quick-menu__item {
  position: relative;

  display: flex;

  width: 88px;
  height: 88px;

  flex-direction: column;
  align-items: center;
  justify-content: center;

  gap: 6px;

  padding: 8px 5px;

  border: 1px solid rgba(15, 23, 42, 0.07);

  border-radius: 15px;

  background: rgba(255, 255, 255, 0.98);

  color: #151922;

  text-decoration: none;

  box-shadow:
    0 9px 22px rgba(15, 23, 42, 0.07),
    0 2px 5px rgba(15, 23, 42, 0.035);

  backdrop-filter: blur(10px);

  -webkit-backdrop-filter: blur(10px);

  cursor: pointer;

  transition:
    transform 0.18s ease,
    box-shadow 0.18s ease,
    border-color 0.18s ease,
    background 0.18s ease,
    color 0.18s ease;

  -webkit-tap-highlight-color: transparent;
}

.quick-menu__item:hover {
  transform: translateY(-2px);

  border-color: rgba(13, 87, 198, 0.18);

  background: #f9fbff;

  box-shadow:
    0 11px 25px rgba(15, 23, 42, 0.09),
    0 3px 7px rgba(13, 87, 198, 0.04);
}

/* ========================================================
   ICON
======================================================== */

.quick-menu__icon-box {
  display: flex;
  align-items: center;
  justify-content: center;

  width: 31px;
  height: 31px;

  color: #0d57c6;

  flex: 0 0 auto;

  transition: transform 0.18s ease;
}

.quick-menu__icon {
  width: 24px;
  height: 24px;

  stroke-width: 1.8;
}

.quick-menu__item:hover .quick-menu__icon-box {
  transform: translateY(-1px);
}

/* ========================================================
   TEXT
======================================================== */

.quick-menu__text {
  display: block;

  color: #151922;

  font-size: 12px;
  font-weight: 750;

  line-height: 1.25;

  letter-spacing: -0.04em;

  text-align: center;

  word-break: keep-all;

  transition: color 0.18s ease;
}

/* ========================================================
   ACTIVE
======================================================== */

.quick-menu__item--active {
  border-color: rgba(13, 87, 198, 0.18);

  background: linear-gradient(180deg, #fff 0%, #f5f9ff 100%);
}

.quick-menu__item--active .quick-menu__text {
  color: #0d57c6;
}

/*
 * 기존 위쪽 3px 막대는 제거.
 * 참고 이미지처럼 과하게 활성 표시하지 않음.
 */
.quick-menu__item--active::before {
  position: absolute;

  top: 0;
  left: 50%;

  width: 22px;
  height: 1px;

  background: #0d57c6;

  transform: translateX(-50%);

  content: '';
}

/* ========================================================
   TOP
======================================================== */

.quick-menu__item--top {
  height: 66px;

  gap: 3px;

  padding: 7px 5px;

  border: 1px solid rgba(15, 23, 42, 0.07);

  font-family: inherit;
}

.quick-menu__top-icon {
  width: 23px;
  height: 23px;

  stroke-width: 1.7;

  color: #111827;
}

.quick-menu__top-text {
  display: block;

  color: #737b88;

  font-size: 8px;
  font-weight: 800;

  line-height: 1;

  letter-spacing: 0.14em;
}

/* ========================================================
   LARGE DESKTOP
======================================================== */

@media (min-width: 1600px) {
  .quick-menu__desktop {
    right: 22px;
  }
}

/* ========================================================
   DESKTOP DOWN
======================================================== */

@include desktop-down {
  .quick-menu__desktop {
    right: 14px;

    width: 84px;

    gap: 6px;
  }

  .quick-menu__item {
    width: 84px;
    height: 84px;

    gap: 5px;

    border-radius: 14px;
  }

  .quick-menu__icon-box {
    width: 29px;
    height: 29px;
  }

  .quick-menu__icon {
    width: 22px;
    height: 22px;
  }

  .quick-menu__text {
    font-size: 11px;
  }

  .quick-menu__item--top {
    height: 61px;
  }

  .quick-menu__top-icon {
    width: 21px;
    height: 21px;
  }
}

/* ========================================================
   LAPTOP
======================================================== */

@include laptop-down {
  /*
   * laptop 영역까지는
   * 조금 더 작은 desktop quick menu.
   *
   * mobile breakpoint 진입 전까지만 표시.
   */

  .quick-menu__desktop {
    right: 10px;

    width: 76px;

    gap: 5px;
  }

  .quick-menu__item {
    width: 76px;
    height: 76px;

    padding: 6px 4px;

    gap: 4px;

    border-radius: 13px;
  }

  .quick-menu__icon-box {
    width: 27px;
    height: 27px;
  }

  .quick-menu__icon {
    width: 20px;
    height: 20px;
  }

  .quick-menu__text {
    font-size: 10px;
  }

  .quick-menu__item--top {
    height: 55px;
  }

  .quick-menu__top-icon {
    width: 19px;
    height: 19px;
  }

  .quick-menu__top-text {
    display: none;
  }
}

/* ========================================================
   MOBILE BASE
======================================================== */

.quick-menu__mobile {
  display: none;
}

/* ========================================================
   MOBILE
======================================================== */

@include mobile {
  .quick-menu__desktop {
    display: none;
  }

  .quick-menu__mobile {
    position: fixed;

    left: 10px;
    right: 10px;

    bottom: calc(env(safe-area-inset-bottom) + 9px);

    z-index: 1200;

    display: grid;

    grid-template-columns: repeat(4, minmax(0, 1fr));

    gap: 3px;

    padding: 5px;

    border: 1px solid rgba(15, 23, 42, 0.07);

    border-radius: 16px;

    background: rgba(255, 255, 255, 0.98);

    box-shadow:
      0 9px 28px rgba(15, 23, 42, 0.14),
      0 2px 5px rgba(15, 23, 42, 0.04);

    backdrop-filter: blur(14px);

    -webkit-backdrop-filter: blur(14px);

    opacity: 1;

    transform: translateY(0);

    visibility: visible;

    transition:
      opacity 0.25s ease,
      transform 0.25s ease,
      visibility 0.25s ease;
  }

  /* ======================================================
     MOBILE HIDDEN
  ====================================================== */

  .quick-menu__mobile--hidden {
    opacity: 0;

    transform: translateY(18px);

    visibility: hidden;

    pointer-events: none;
  }

  /* ======================================================
     MOBILE ITEM
  ====================================================== */

  .quick-menu__mobile-item {
    position: relative;

    display: flex;

    min-width: 0;
    height: 58px;

    flex-direction: column;
    align-items: center;
    justify-content: center;

    gap: 4px;

    padding: 5px 2px;

    border-radius: 11px;

    color: #333b48;

    text-decoration: none;

    transition:
      background 0.18s ease,
      color 0.18s ease,
      transform 0.12s ease;

    -webkit-tap-highlight-color: transparent;
  }

  .quick-menu__mobile-item:active {
    transform: scale(0.96);
  }

  /* ======================================================
     MOBILE ICON
  ====================================================== */

  .quick-menu__mobile-icon {
    width: 19px;
    height: 19px;

    color: #0d57c6;

    stroke-width: 1.8;
  }

  /* ======================================================
     MOBILE TEXT
  ====================================================== */

  .quick-menu__mobile-item span {
    overflow: hidden;

    max-width: 100%;

    font-size: 9.5px;
    font-weight: 750;

    line-height: 1.15;

    letter-spacing: -0.035em;

    text-align: center;

    white-space: nowrap;
  }

  /* ======================================================
     MOBILE ACTIVE
  ====================================================== */

  .quick-menu__mobile-item--active {
    background: #f0f6ff;

    color: #0d57c6;
  }

  .quick-menu__mobile-item--active::after {
    position: absolute;

    top: 0;
    left: 50%;

    width: 16px;
    height: 1px;

    background: #0d57c6;

    transform: translateX(-50%);

    content: '';
  }
}

/* ========================================================
   VERY SMALL MOBILE
======================================================== */

@media (max-width: 360px) {
  .quick-menu__mobile {
    left: 6px;
    right: 6px;

    bottom: calc(env(safe-area-inset-bottom) + 6px);

    gap: 2px;

    padding: 4px;

    border-radius: 14px;
  }

  .quick-menu__mobile-item {
    height: 54px;

    padding-inline: 1px;
  }

  .quick-menu__mobile-icon {
    width: 18px;
    height: 18px;
  }

  .quick-menu__mobile-item span {
    font-size: 9px;
  }
}
</style>
