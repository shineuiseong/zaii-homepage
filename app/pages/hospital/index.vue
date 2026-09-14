<!-- pages/hospital/index.vue -->

<script setup lang="ts">
definePageMeta({
  middleware: [
    () => {
      return navigateTo('/hospital/history', {
        redirectCode: 301
      })
    }
  ]
})
</script>

<template>
  <div />
</template>
