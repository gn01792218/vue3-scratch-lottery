
<template>
  <section class="bg-red w-[400px] h-[300px] relative">
    <img
      class="w-full h-full"
      src="https://picsum.photos/id/684/600/400"
      alt="刮刮樂獎項底圖"
    />
    <ScratchLayer :class="[`absolute left-[${layer.leftPosition}] top-[${layer.topPosition}]`]" v-for="layer in scratchLayers" :key="layer.name" :scratch-layer="layer"/>
  </section>
</template>
<script setup lang="ts">
import { ScratchCanvas } from "@/types/scratchLottery";
import ScratchLayer from "@/components/ScratchLayer.vue";
defineProps<{
  scratchLayers: ScratchCanvas[];
}>();
</script>
