<script setup lang="ts">
import AppFooter from '~/components/common/AppFooter.vue'
import AppHeader from '~/components/common/AppHeader.vue'
</script>

<template>
  <div class="app-shell">
    <AppHeader />

    <main class="app-main">
      <slot />
    </main>
    <AppFooter />
  </div>
</template>

<style scoped lang="scss">
.app-shell {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.app-main {
  flex: 1;
  padding-top: 88px;
}

@include laptop-down {
  .app-main {
    padding-top: 76px;
  }
}

@include mobile {
  .app-main {
    padding-top: 72px;
  }
}
</style>
