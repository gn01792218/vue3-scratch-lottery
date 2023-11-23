<template>
  <Header/>
  <router-view/>
</template>

<script setup lang="ts">
import Header from '@/components/Header.vue'
// 觸控板禁止手指縮放
document.addEventListener('wheel', function(event) {
    event.preventDefault()
}, { passive: false })
</script>
