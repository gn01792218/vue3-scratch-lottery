<template>
  <p class="bg-black text-white">
    Recommended IDE setup:
    <a href="https://code.visualstudio.com/" target="_blank">VSCode</a>
    +
    <a href="https://github.com/johnsoncodehk/volar" target="_blank">Volar</a>
  </p>
  <p>
    <a href="https://vitejs.dev/guide/features.html" target="_blank">
      Vite Docs
    </a>
    |
    <a href="https://v3.vuejs.org/" target="_blank">Vue 3 Docs</a>
  </p>

  <button type="button" @click="countFromRef++">count is: {{ countFromRef }}</button>
  <br>
  <div>
    <button type="button" @click="increment()">pinia count is: {{ count }}</button>
    <p>Getter: count*2 = {{ doubleCount }}</p>
  </div>

</template>
<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useCounterStoreForSetup } from '@/store/useCounterStoreForSetup'

//Pinia
const { increment } = useCounterStoreForSetup()
const { count,doubleCount } = storeToRefs(useCounterStoreForSetup())

//一般的REF
const countFromRef = ref(0);
</script>
