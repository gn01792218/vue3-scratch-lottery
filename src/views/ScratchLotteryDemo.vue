
<template>
  <section>
    <h1>刮刮樂示範</h1>
    <ScratchLotteryCard :scratch-layers="scratchLayers1"/>
  </section>
  <section>
    <h1>刮刮樂示範2</h1>
    <ScratchLotteryCard :scratch-layers="scratchLayers2"/>
  </section>
</template>
<script setup lang="ts">
import { ScratchCanvas } from "@/types/scratchLottery";
import ScratchLotteryCard from "@/components/ScratchLotteryCard.vue";

//一卡多個刮刮區域，增加多個ScratchCanvas物件即可
//並可以微調個別的位置和大小
const scratchLayers1: ScratchCanvas[] = [
  {
    name:'獎項1',
    leftPosition: '10%',
    topPosition: '0',
    width: 40,
    height: 30,
  },
];

//滿版的刮刮卡，位置指定0,0；寬高選擇和底圖寬高即可
const scratchLayers2: ScratchCanvas[] = [
  {
    name:'獎項2',
    leftPosition: '0',
    topPosition: '0',
    width: 400,
    height: 300,
  },
];
</script>
