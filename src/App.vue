<template>
  <Header/>
  <section class="text-3xl text-red-400">
    <p>當前狀態: {{ status }}</p>
    <p>擋掉預設動作 : {{ testText }}</p>
  </section>
  <router-view/>
</template>

<script setup lang="ts">
import Header from '@/components/Header.vue'
// 觸控板禁止手指縮放
document.addEventListener('wheel', function(event) {
    event.preventDefault()
}, { passive: false })


//防止手機端手指縮放網頁
const status = ref("無狀態")
const testText = ref("無動作")
let lastTouchEnd = 0;
document.addEventListener('touchstart', function(event) {
  status.value = 'touchstart'
  if (event.touches.length > 1) {
    event.preventDefault()
    testText.value = '多於一個手指，預防start動作'
  }
})
document.addEventListener('touchmove', function (event) {
  status.value = 'touchmove'
  if (event.touches.length > 1) {
    event.preventDefault();
    testText.value = '多於一個手指，預防move動作'
  }
});

document.addEventListener('touchend', function (event) {
  status.value = 'touchEnd'
 if (event.touches.length > 1) {
    event.preventDefault();
    testText.value = '多於一個手指，預防end動作'
  }
});
</script>
