<template>
  <NuxtLayout>
    <NuxtPage />
    <ClientOnly>
      <Toaster rich-colors position="bottom-center" />
    </ClientOnly>
    <FloatingQuickMenu />
  </NuxtLayout>
</template>

<script setup lang="ts">
import { Toaster } from 'vue-sonner'
import 'vue-sonner/style.css'
import FloatingQuickMenu from '~/components/common/FloatingQuickMenu.vue'
</script>
