<template>
  <div class="touch-pan-x">
    About 
    這裡使用pan-x
     <button type="button" @click="increment()">pinia count is: {{ count }}</button>
  </div>
</template>
<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useCounterStoreForSetup } from '@/store/useCounterStoreForSetup'

const { increment } = useCounterStoreForSetup()
const { count } = storeToRefs(useCounterStoreForSetup())
</script>
