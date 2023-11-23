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


//防止手機端手指縮放網頁
document.addEventListener('touchstart', function(event) {
  if (event.touches.length > 1) {
    event.preventDefault()
  }
})
</script>
