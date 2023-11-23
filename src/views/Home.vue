<template>
  <ul class="bg-black">
    <li class="w-[100px] h-[50px] bg-yellow-500 flex items-center justify-center">
      <RouterLink to="/ScratcDemo">刮刮樂示範</RouterLink>
    </li>
  </ul>
  <section class="bg-red-100 flex justify-center">
    <div class="border-2 border-black w-[300px] h-[100px] overflow-scroll">
      <p>AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA</p>
      <p>BBB</p>
      <p>CCCCCCCC</p>
      <p>縒我午我我五我擃我我我我我我我五我我我</p>
    </div>
  </section>
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
