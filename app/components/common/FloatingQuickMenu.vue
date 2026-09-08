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
      <!-- 진료문의 -->
      <a href="tel:0262075678" class="quick-menu__mobile-item" aria-label="진료문의 전화">
        <Icon name="lucide:phone" class="quick-menu__mobile-icon" />

        <span> 진료문의 </span>
      </a>

      <!-- 상담문의 -->
      <a href="tel:01026386034" class="quick-menu__mobile-item" aria-label="상담문의 전화">
        <Icon name="lucide:headphones" class="quick-menu__mobile-icon" />

        <span> 상담문의 </span>
      </a>

      <!-- 오시는 길 -->
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

      <!-- 온라인상담 -->
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

  border: 1px solid rgba($color-gray-900, 0.07);

  border-radius: 15px;

  background: rgba($color-white, 0.98);

  color: $text-main;

  text-decoration: none;

  box-shadow:
    0 9px 22px rgba($color-gray-900, 0.07),
    0 2px 5px rgba($color-gray-900, 0.035);

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

  border-color: rgba($color-primary, 0.2);

  background: rgba($color-primary, 0.035);

  box-shadow:
    0 11px 25px rgba($color-gray-900, 0.09),
    0 3px 7px rgba($color-primary, 0.05);
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

  color: $color-primary;

  flex: 0 0 auto;

  transition:
    transform 0.18s ease,
    color 0.18s ease;
}

.quick-menu__icon {
  width: 24px;
  height: 24px;

  stroke-width: 1.8;
}

.quick-menu__item:hover .quick-menu__icon-box {
  color: $color-primary-hover;

  transform: translateY(-1px);
}

/* ========================================================
   TEXT
======================================================== */

.quick-menu__text {
  display: block;

  color: $text-main;

  font-size: 12px;
  font-weight: 750;

  line-height: 1.25;

  letter-spacing: -0.04em;

  text-align: center;

  word-break: keep-all;

  transition: color 0.18s ease;
}

.quick-menu__item:hover .quick-menu__text {
  color: $color-primary-hover;
}

/* ========================================================
   ACTIVE
======================================================== */

.quick-menu__item--active {
  border-color: rgba($color-primary, 0.22);

  background: linear-gradient(180deg, $color-white 0%, rgba($color-primary, 0.045) 100%);
}

.quick-menu__item--active .quick-menu__icon-box {
  color: $color-primary;
}

.quick-menu__item--active .quick-menu__text {
  color: $color-primary;
}

.quick-menu__item--active::before {
  position: absolute;

  top: 0;
  left: 50%;

  width: 24px;
  height: 2px;

  background: $color-primary;

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

  border: 1px solid rgba($color-gray-900, 0.07);

  font-family: inherit;
}

.quick-menu__top-icon {
  width: 23px;
  height: 23px;

  stroke-width: 1.7;

  color: $text-main;

  transition: color 0.18s ease;
}

.quick-menu__item--top:hover .quick-menu__top-icon {
  color: $color-primary;
}

.quick-menu__top-text {
  display: block;

  color: $text-muted;

  font-size: 8px;
  font-weight: 800;

  line-height: 1;

  letter-spacing: 0.14em;

  transition: color 0.18s ease;
}

.quick-menu__item--top:hover .quick-menu__top-text {
  color: $color-primary;
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

    left: 0;
    right: 0;
    bottom: 0;

    z-index: 1200;

    display: grid;

    grid-template-columns: repeat(4, minmax(0, 1fr));

    gap: 0;

    padding: 0 0 env(safe-area-inset-bottom);

    border: 0;

    border-top: 1px solid rgba($color-gray-900, 0.1);

    border-radius: 0;

    background: rgba($color-white, 0.98);

    box-shadow:
      0 -6px 24px rgba($color-gray-900, 0.09),
      0 -1px 3px rgba($color-gray-900, 0.03);

    backdrop-filter: blur(16px);
    -webkit-backdrop-filter: blur(16px);

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

    transform: translateY(100%);

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

    height: 72px;

    flex-direction: column;
    align-items: center;
    justify-content: center;

    gap: 6px;

    padding: 8px 2px;

    border-radius: 0;

    background: transparent;

    color: $text-main;

    text-decoration: none;

    transition:
      background 0.18s ease,
      color 0.18s ease,
      transform 0.12s ease;

    -webkit-tap-highlight-color: transparent;
  }

  .quick-menu__mobile-item:not(:first-child) {
    border-left: 1px solid rgba($color-gray-900, 0.07);
  }

  .quick-menu__mobile-item:active {
    background: rgba($color-primary, 0.055);

    transform: scale(0.97);
  }

  /* ======================================================
     MOBILE ICON
  ====================================================== */

  .quick-menu__mobile-icon {
    width: 24px;
    height: 24px;

    flex: 0 0 auto;

    color: $color-primary;

    stroke-width: 1.9;

    transition:
      color 0.18s ease,
      transform 0.18s ease;
  }

  /* ======================================================
     MOBILE TEXT
  ====================================================== */

  .quick-menu__mobile-item span {
    overflow: hidden;

    max-width: 100%;

    color: $text-main;

    font-size: 13px;
    font-weight: 700;

    line-height: 1.2;

    letter-spacing: -0.04em;

    text-align: center;

    white-space: nowrap;

    transition: color 0.18s ease;
  }

  /* ======================================================
     MOBILE ACTIVE
  ====================================================== */

  .quick-menu__mobile-item--active {
    background: rgba($color-primary, 0.06);

    color: $color-primary;
  }

  .quick-menu__mobile-item--active .quick-menu__mobile-icon {
    color: $color-primary;
  }

  .quick-menu__mobile-item--active span {
    color: $color-primary;
  }

  .quick-menu__mobile-item--active::after {
    position: absolute;

    top: 0;
    left: 50%;

    width: 36px;
    height: 3px;

    border-radius: 0 0 3px 3px;

    background: $color-primary;

    transform: translateX(-50%);

    content: '';
  }
}

/* ========================================================
   VERY SMALL MOBILE
======================================================== */

@media (max-width: 360px) {
  .quick-menu__mobile {
    left: 0;
    right: 0;
    bottom: 0;

    gap: 0;

    padding: 0 0 env(safe-area-inset-bottom);

    border-radius: 0;
  }

  .quick-menu__mobile-item {
    height: 68px;

    gap: 5px;

    padding: 7px 1px;
  }

  .quick-menu__mobile-icon {
    width: 22px;
    height: 22px;
  }

  .quick-menu__mobile-item span {
    font-size: 12px;

    letter-spacing: -0.045em;
  }
}
</style>
