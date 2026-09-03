<template>
  <ExternalBrowserRedirect />
  <NuxtLayout>
    <NuxtPage />
    <ClientOnly>
      <Toaster rich-colors position="bottom-center" />
    </ClientOnly>
    <MainFloatingPopup />
    <FloatingQuickMenu />
  </NuxtLayout>
</template>

<script setup lang="ts">
import { Toaster } from 'vue-sonner'
import 'vue-sonner/style.css'
import FloatingQuickMenu from '~/components/common/FloatingQuickMenu.vue'
import MainFloatingPopup from './components/common/MainFloatingPopup.vue'
import ExternalBrowserRedirect from './components/common/ExternalBrowserRedirect.vue'
</script>
