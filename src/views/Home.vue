<template>
  <div class="touch-pan-y">
    <ul class="bg-black">
      <li class="w-[100px] h-[50px] bg-yellow-500 flex items-center justify-center">
        <RouterLink to="/ScratcDemo">刮刮樂示範</RouterLink>
      </li>
    </ul>
    <section id="test" class="bg-red-100 flex justify-center">
      <p>這個區塊的元素要可以滾輪滾動scrollBar，所以需要event.stopPropagation()</p>
      <div class="border-2 border-black w-[300px] h-[100px] overflow-scroll">
        <p>AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA</p>
        <p>BBB</p>
        <p>CCCCCCCC</p>
        <p>縒我午我我五我擃我我我我我我我五我我我</p>
      </div>
    </section>
    <section class="w-[500px] bg-slate-600 mb-10">
      這個父層啥都沒用
      <button class="border-2" @click="test">點我看看呀</button>
      <div class="border-2 border-black w-[300px] h-[100px] overflow-scroll">
        啥都沒
        <button class="border-2" @click="test">點我看看呀</button>
        <p>AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA</p>
        <p>BBB</p>
        <p>CCCCCCCC</p>
        <p>CCCCCCCC</p>
        <p>縒我午我我五我擃我我我我我我我五aaaaaaaaaaaa我我</p>
      </div>
      <section class="bg-yellow-500 h-[100px]">
        啥都沒
        <button class="border-2" @click="test">點我看看呀</button>
      </section>
      <section class="w-[300px] h-[150px] bg-yellow-500 overflow-scroll mt-10 touch-pan-x">
        使用pan-x
        <button class="border-2" @click="test">點我看看呀</button>
        <p>我可以被滾動</p>
        <p>我可以被滾動</p>
        <p>我可以被滾動</p>
        <p>我可以被滾動</p>
        <p>我可以被滾動</p>
        <p>我可以被滾動</p>
        <p>我可以被滾動</p>
        <p>我可以被滾動</p>
      </section>
      <section class="bg-blue-400 h-[100px] touch-manipulation">
        用mainpulation
        <button class="border-2" @click="test">點我看看呀</button>
      </section>
      <div class="border-2 border-black w-[300px] h-[100px] overflow-scroll touch-pan-x touch-pan-y">
        touch-pan-x touch-pan-y
        <button class="border-2" @click="test">點我看看呀</button>
        <p>AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA</p>
        <p>BBB</p>
        <p>CCCCCCCC</p>
        <p>縒我午我我五我擃我我我我我我我五我我我</p>
      </div>
      <section class="w-[300px] h-[150px] bg-blue-400 overflow-scroll mt-10 touch-none">
        這裡用touch-none
        <p>我可以被滾動</p>
        <p>我可以被滾動</p>
        <p>我可以被滾動</p>
        <p>我可以被滾動</p>
        <p>我可以被滾動</p>
        <p>我可以被滾動</p>
        <p>我可以被滾動</p>
        <p>我可以被滾動</p>
        <p>我可以被滾動</p>
        <p>我可以被滾動</p>
      </section>
    </section>
  
    <button type="button" @click="countFromRef++">count is: {{ countFromRef }}</button>
    <br>
    <div>
      <button type="button" @click="increment()">pinia count is: {{ count }}</button>
      <p>Getter: count*2 = {{ doubleCount }}</p>
    </div>
  </div>
</template>
<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useCounterStoreForSetup } from '@/store/useCounterStoreForSetup'

//Pinia
const { increment } = useCounterStoreForSetup()
const { count, doubleCount } = storeToRefs(useCounterStoreForSetup())

//一般的REF
const countFromRef = ref(0);
function test() {
  alert('哈')
}
</script>
