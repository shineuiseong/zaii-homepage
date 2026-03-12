<template>
  <section class="hospital-sub-tabs">
    <div class="container">
      <nav class="hospital-sub-tabs__nav" aria-label="병원 소개 메뉴">
        <NuxtLink
          v-for="tab in tabs"
          :key="tab.label"
          :to="tab.to"
          class="hospital-sub-tabs__link"
          :class="{ 'is-active': tab.current }"
        >
          {{ tab.label }}
        </NuxtLink>
      </nav>
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps<{
  tabs: {
    label: string
    to: string
    current?: boolean
  }[]
}>()
</script>

<style scoped lang="scss">
.hospital-sub-tabs {
  position: relative;
  z-index: 2;
  margin-top: -36px;
}

.hospital-sub-tabs__nav {
  display: grid;
  grid-template-columns: repeat(7, minmax(0, 1fr));
  background: #fff;
  border: 1px solid #dce6f1;
  box-shadow: 0 14px 36px rgba(15, 23, 42, 0.08);
  overflow: hidden;
}

.hospital-sub-tabs__link {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 72px;
  padding: 14px 12px;
  border-right: 1px solid #e5edf5;
  background: #fff;
  font-size: 15px;
  font-weight: 700;
  color: $text-sub;
  text-align: center;
  word-break: keep-all;
  transition:
    background 0.2s ease,
    color 0.2s ease;

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
    box-shadow: inset 0 -4px 0 $color-primary;
  }
}

@include laptop-down {
  .hospital-sub-tabs {
    margin-top: 0;
    border-bottom: 1px solid #e5edf5;
  }

  .hospital-sub-tabs__nav {
    grid-template-columns: repeat(3, minmax(0, 1fr));
    border: 0;
    box-shadow: none;
  }

  .hospital-sub-tabs__link {
    min-height: 60px;
    font-size: 14px;
  }
}

@include mobile {
  .hospital-sub-tabs__nav {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .hospital-sub-tabs__link {
    min-height: 54px;
    padding: 10px 8px;
    font-size: 13px;
  }
}
</style>
