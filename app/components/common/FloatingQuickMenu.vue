<template>
  <aside class="quick-menu" aria-label="빠른 메뉴">
    <!-- desktop -->
    <div class="quick-menu__desktop">
      <div class="quick-menu__panel" :class="{ 'quick-menu__panel--collapsed': isCollapsed }">
        <div class="quick-menu__desktop-head">
          <p class="quick-menu__eyebrow">ZAII UROLOGY</p>
          <strong class="quick-menu__title">빠른 상담 메뉴</strong>
        </div>

        <div class="quick-menu__body-wrap">
          <div class="quick-menu__desktop-body">
            <a
              href="/urolift"
              class="quick-menu__card"
              :class="{ 'quick-menu__card--active': isActive('/urolift') }"
            >
              <span class="quick-menu__icon-wrap">
                <Icon name="lucide:flame" class="quick-menu__icon" />
              </span>
              <span class="quick-menu__content">
                <span class="quick-menu__name-row">
                  <span class="quick-menu__name">유로리프트</span>
                  <span class="quick-menu__badge">HOT</span>
                </span>
                <span class="quick-menu__desc">대표 시술 바로가기</span>
              </span>
            </a>

            <a
              href="/rezum"
              class="quick-menu__card"
              :class="{ 'quick-menu__card--active': isActive('/rezum') }"
            >
              <span class="quick-menu__icon-wrap">
                <Icon name="lucide:activity" class="quick-menu__icon" />
              </span>
              <span class="quick-menu__content">
                <span class="quick-menu__name">리줌시술</span>
                <span class="quick-menu__desc">최소침습 치료 안내</span>
              </span>
            </a>

            <a
              href="/filler-penis-enlargement"
              class="quick-menu__card"
              :class="{ 'quick-menu__card--active': isActive('/filler-penis-enlargement') }"
            >
              <span class="quick-menu__icon-wrap">
                <Icon name="lucide:sparkles" class="quick-menu__icon" />
              </span>
              <span class="quick-menu__content">
                <span class="quick-menu__name">필러 음경확대술</span>
                <span class="quick-menu__desc">필러 확대 시술 안내</span>
              </span>
            </a>

            <a
              href="/consultation"
              class="quick-menu__card"
              :class="{ 'quick-menu__card--active': isActive('/consultation') }"
            >
              <span class="quick-menu__icon-wrap">
                <Icon name="lucide:message-circle" class="quick-menu__icon" />
              </span>
              <span class="quick-menu__content">
                <span class="quick-menu__name">온라인상담</span>
                <span class="quick-menu__desc">문의 남기기</span>
              </span>
            </a>

            <a href="tel:0262075678" class="quick-menu__card quick-menu__card--contact">
              <span class="quick-menu__icon-wrap">
                <Icon name="lucide:phone" class="quick-menu__icon" />
              </span>
              <span class="quick-menu__content">
                <span class="quick-menu__meta">진료문의</span>
                <span class="quick-menu__number">02-6207-5678</span>
              </span>
            </a>

            <a href="tel:01026386034" class="quick-menu__card quick-menu__card--contact">
              <span class="quick-menu__icon-wrap">
                <Icon name="lucide:smartphone" class="quick-menu__icon" />
              </span>
              <span class="quick-menu__content">
                <span class="quick-menu__meta">상담문의</span>
                <span class="quick-menu__number">010-2638-6034</span>
              </span>
            </a>
          </div>
        </div>

        <button
          type="button"
          class="quick-menu__bottom-toggle"
          :aria-expanded="!isCollapsed"
          :aria-label="isCollapsed ? '빠른 메뉴 펼치기' : '빠른 메뉴 접기'"
          @click="toggleMenu"
        >
          <span class="quick-menu__bottom-toggle-line" />
          <span class="quick-menu__bottom-toggle-text">
            {{ isCollapsed ? '상담 메뉴 펼치기' : '빠른 메뉴 접기' }}
          </span>
          <Icon
            name="lucide:chevron-down"
            class="quick-menu__bottom-toggle-icon"
            :class="{ 'quick-menu__bottom-toggle-icon--rotated': isCollapsed }"
          />
        </button>
      </div>
    </div>

    <!-- mobile -->
    <nav class="quick-menu__mobile" aria-label="모바일 빠른 메뉴">
      <div class="quick-menu__mobile-top">
        <a
          href="/urolift"
          class="quick-menu__mobile-item"
          :class="{ 'quick-menu__mobile-item--active': isActive('/urolift') }"
        >
          <Icon name="lucide:flame" class="quick-menu__mobile-icon" />
          <span>유로리프트</span>
        </a>

        <a
          href="/rezum"
          class="quick-menu__mobile-item"
          :class="{ 'quick-menu__mobile-item--active': isActive('/rezum') }"
        >
          <Icon name="lucide:activity" class="quick-menu__mobile-icon" />
          <span>리줌</span>
        </a>

        <a
          href="/filler-penis-enlargement"
          class="quick-menu__mobile-item"
          :class="{ 'quick-menu__mobile-item--active': isActive('/filler-penis-enlargement') }"
        >
          <Icon name="lucide:sparkles" class="quick-menu__mobile-icon" />
          <span>필러확대</span>
        </a>

        <a
          href="/consultation"
          class="quick-menu__mobile-item"
          :class="{ 'quick-menu__mobile-item--active': isActive('/consultation') }"
        >
          <Icon name="lucide:message-circle" class="quick-menu__mobile-icon" />
          <span>온라인상담</span>
        </a>
      </div>

      <div class="quick-menu__mobile-bottom">
        <a href="tel:0262075678" class="quick-menu__mobile-call quick-menu__mobile-call--clinic">
          <span class="quick-menu__mobile-call-icon-wrap">
            <Icon name="lucide:phone" class="quick-menu__mobile-call-icon" />
          </span>
          <span class="quick-menu__mobile-call-text">
            <span class="quick-menu__mobile-call-label">진료문의</span>
            <span class="quick-menu__mobile-call-number">02-6207-5678</span>
          </span>
        </a>

        <a href="tel:01026386034" class="quick-menu__mobile-call quick-menu__mobile-call--consult">
          <span class="quick-menu__mobile-call-icon-wrap">
            <Icon name="lucide:smartphone" class="quick-menu__mobile-call-icon" />
          </span>
          <span class="quick-menu__mobile-call-text">
            <span class="quick-menu__mobile-call-label">상담전화</span>
            <span class="quick-menu__mobile-call-number">010-2638-6034</span>
          </span>
        </a>
      </div>
    </nav>
  </aside>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const route = useRoute()
const isCollapsed = ref(false)

function toggleMenu() {
  isCollapsed.value = !isCollapsed.value
}

function isActive(path: string) {
  return route.path === path || route.path.startsWith(`${path}/`)
}
</script>

<style scoped lang="scss">
.quick-menu {
  position: fixed;
  z-index: 1200;
}

/* desktop */
.quick-menu__desktop {
  position: fixed;
  top: 46%;
  right: 20px;
  transform: translateY(-50%);
  width: 216px;
}

.quick-menu__panel {
  width: 216px;
  border-radius: 24px;
  overflow: hidden;
  background: rgba(255, 255, 255, 0.96);
  border: 1px solid rgba(13, 87, 198, 0.1);
  box-shadow:
    0 14px 36px rgba(15, 23, 42, 0.12),
    0 4px 12px rgba(15, 23, 42, 0.06);
  backdrop-filter: blur(12px);
}

.quick-menu__desktop-head {
  padding: 14px 16px 13px;
  background: linear-gradient(135deg, #0d57c6 0%, #1f6fe8 100%);
  color: #fff;
}

.quick-menu__eyebrow {
  margin: 0 0 4px;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.12em;
  color: rgba(255, 255, 255, 0.82);
}

.quick-menu__title {
  display: block;
  font-size: 15px;
  font-weight: 800;
  line-height: 1.2;
  color: #fff;
}

.quick-menu__body-wrap {
  max-height: 700px;
  overflow: hidden;
  transition:
    max-height 0.34s ease,
    opacity 0.24s ease,
    transform 0.28s ease;
  opacity: 1;
  transform: translateY(0);
}

.quick-menu__panel--collapsed .quick-menu__body-wrap {
  max-height: 0;
  opacity: 0;
  transform: translateY(-8px);
}

.quick-menu__desktop-body {
  padding: 8px;
  display: flex;
  flex-direction: column;
  gap: 7px;
}

.quick-menu__card {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 12px;
  border-radius: 16px;
  text-decoration: none;
  color: #111827;
  background: #fff;
  border: 1px solid #eef2f7;
  transition:
    transform 0.18s ease,
    box-shadow 0.18s ease,
    border-color 0.18s ease,
    background-color 0.18s ease,
    color 0.18s ease;
}

.quick-menu__card:hover {
  transform: translateY(-2px);
  border-color: rgba(13, 87, 198, 0.18);
  box-shadow: 0 8px 18px rgba(13, 87, 198, 0.09);
  background: #f8fbff;
}

.quick-menu__card--active {
  background: linear-gradient(135deg, rgba(13, 87, 198, 0.08), rgba(29, 116, 239, 0.12));
  border-color: rgba(13, 87, 198, 0.2);
  box-shadow: 0 8px 18px rgba(13, 87, 198, 0.08);
}

.quick-menu__card--active .quick-menu__icon-wrap {
  background: #0d57c6;
  color: #fff;
}

.quick-menu__card--active .quick-menu__name,
.quick-menu__card--active .quick-menu__number {
  color: #0d57c6;
}

.quick-menu__card--active .quick-menu__desc,
.quick-menu__card--active .quick-menu__meta {
  color: #5b6472;
}

.quick-menu__card--contact .quick-menu__number {
  color: #0d57c6;
}

.quick-menu__icon-wrap {
  flex: 0 0 auto;
  width: 38px;
  height: 38px;
  border-radius: 999px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: #eff6ff;
  color: #0d57c6;
  transition:
    background-color 0.18s ease,
    color 0.18s ease;
}

.quick-menu__icon {
  width: 18px;
  height: 18px;
}

.quick-menu__content {
  min-width: 0;
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 3px;
}

.quick-menu__name-row {
  display: flex;
  align-items: center;
  gap: 6px;
  min-width: 0;
  flex-wrap: wrap;
}

.quick-menu__name {
  display: block;
  font-size: 14px;
  font-weight: 800;
  line-height: 1.2;
  word-break: keep-all;
  transition: color 0.18s ease;
}

.quick-menu__desc {
  display: block;
  font-size: 11px;
  line-height: 1.3;
  color: #6b7280;
  transition: color 0.18s ease;
}

.quick-menu__meta {
  display: block;
  font-size: 11px;
  font-weight: 700;
  color: #6b7280;
  line-height: 1.2;
  transition: color 0.18s ease;
}

.quick-menu__number {
  display: block;
  font-size: 14px;
  font-weight: 800;
  line-height: 1.25;
  letter-spacing: -0.02em;
  word-break: keep-all;
  transition: color 0.18s ease;
}

.quick-menu__badge {
  flex: 0 0 auto;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 20px;
  padding: 0 7px;
  border-radius: 999px;
  background: #ffd84d;
  color: #111827;
  font-size: 10px;
  font-weight: 900;
  line-height: 1;
}

.quick-menu__bottom-toggle {
  width: 100%;
  border: 0;
  border-top: 1px solid rgba(13, 87, 198, 0.08);
  background: #fff;
  color: #4b5563;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 11px 14px 12px;
  cursor: pointer;
  transition:
    background-color 0.2s ease,
    color 0.2s ease;
}

.quick-menu__bottom-toggle:hover {
  background: #f8fbff;
  color: #0d57c6;
}

.quick-menu__bottom-toggle-line {
  width: 28px;
  height: 3px;
  border-radius: 999px;
  background: #d1d5db;
  flex: 0 0 auto;
}

.quick-menu__bottom-toggle-text {
  font-size: 12px;
  font-weight: 700;
  line-height: 1;
}

.quick-menu__bottom-toggle-icon {
  width: 15px;
  height: 15px;
  transition: transform 0.28s ease;
}

.quick-menu__bottom-toggle-icon--rotated {
  transform: rotate(180deg);
}

/* mobile */
.quick-menu__mobile {
  display: none;
}

@include desktop-down {
  .quick-menu__desktop {
    right: 14px;
  }

  .quick-menu__panel {
    width: 204px;
  }

  .quick-menu__title {
    font-size: 14px;
  }

  .quick-menu__number {
    font-size: 13px;
  }
}

@include laptop-down {
  .quick-menu__desktop {
    top: 45%;
  }

  .quick-menu__panel {
    width: 196px;
  }

  .quick-menu__card {
    padding: 11px;
  }

  .quick-menu__icon-wrap {
    width: 36px;
    height: 36px;
  }

  .quick-menu__name {
    font-size: 13px;
  }

  .quick-menu__desc,
  .quick-menu__meta {
    font-size: 10px;
  }

  .quick-menu__number {
    font-size: 12px;
  }

  .quick-menu__bottom-toggle-text {
    font-size: 11px;
  }
}

@include mobile {
  .quick-menu__desktop {
    display: none;
  }

  .quick-menu__mobile {
    position: fixed;
    left: 10px;
    right: 10px;
    bottom: calc(env(safe-area-inset-bottom) + 12px);
    z-index: 1200;
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 12px;
    border-radius: 20px;
    background: rgba(255, 255, 255, 0.98);
    border: 1px solid rgba(13, 87, 198, 0.08);
    box-shadow:
      0 12px 32px rgba(15, 23, 42, 0.18),
      0 2px 6px rgba(15, 23, 42, 0.06);
    backdrop-filter: blur(12px);
  }

  .quick-menu__mobile-top {
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    gap: 8px;
  }

  .quick-menu__mobile-item {
    display: flex;
    min-width: 0;
    min-height: 64px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 5px;
    padding: 10px 6px;
    border-radius: 14px;
    background: #f1f5f9;
    text-decoration: none;
    font-size: 11px;
    font-weight: 700;
    color: #334155;
    transition: all 0.2s ease;
    -webkit-tap-highlight-color: transparent;
  }

  .quick-menu__mobile-item:active {
    transform: scale(0.96);
  }

  .quick-menu__mobile-item--active {
    background: linear-gradient(135deg, rgba(13, 87, 198, 0.14), rgba(29, 116, 239, 0.18));
    color: #0d57c6;
    box-shadow: 0 6px 14px rgba(13, 87, 198, 0.12);
  }

  .quick-menu__mobile-icon {
    width: 18px;
    height: 18px;
    margin-bottom: 2px;
    flex: 0 0 auto;
    color: currentColor;
  }

  .quick-menu__mobile-item span {
    line-height: 1.2;
    word-break: keep-all;
    text-align: center;
  }

  .quick-menu__mobile-bottom {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 10px;
  }

  .quick-menu__mobile-call {
    display: flex;
    align-items: center;
    gap: 10px;
    min-width: 0;
    padding: 12px 14px;
    border-radius: 18px;
    text-decoration: none;
    color: #fff;
    transition: transform 0.15s ease;
    -webkit-tap-highlight-color: transparent;
  }

  .quick-menu__mobile-call:active {
    transform: scale(0.97);
  }

  .quick-menu__mobile-call--clinic {
    background: linear-gradient(135deg, #0d57c6 0%, #1f6fe8 100%);
    box-shadow: 0 10px 22px rgba(13, 87, 198, 0.22);
  }

  .quick-menu__mobile-call--consult {
    background: linear-gradient(135deg, #0f766e 0%, #14b8a6 100%);
    box-shadow: 0 10px 22px rgba(15, 118, 110, 0.22);
  }

  .quick-menu__mobile-call-icon-wrap {
    width: 36px;
    height: 36px;
    border-radius: 999px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(255, 255, 255, 0.2);
    flex: 0 0 auto;
  }

  .quick-menu__mobile-call-icon {
    width: 16px;
    height: 16px;
  }

  .quick-menu__mobile-call-text {
    min-width: 0;
    display: flex;
    flex-direction: column;
  }

  .quick-menu__mobile-call-label {
    font-size: 10px;
    opacity: 0.85;
    line-height: 1.2;
  }

  .quick-menu__mobile-call-number {
    font-size: 14px;
    font-weight: 800;
    letter-spacing: -0.02em;
    line-height: 1.2;
    word-break: keep-all;
  }
}
</style>
