<template>
 About 
  <button type="button" @click="increment()">pinia count is: {{ count }}</button>
</template>
<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useCounterStoreForSetup } from '@/store/useCounterStoreForSetup'

const { increment } = useCounterStoreForSetup()
const { count } = storeToRefs(useCounterStoreForSetup())
</script>
