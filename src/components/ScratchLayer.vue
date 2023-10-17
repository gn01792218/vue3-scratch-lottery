
<template>
  <div :class="[`w-[${scratchLayer.width}px] h-[${scratchLayer.height}px]`]">
    <canvas ref="scratchCanvas" :width="scratchLayer.width" :height="scratchLayer.height"></canvas>
  </div>
</template>
<script setup lang="ts">
import { ScratchCanvas } from "@/types/scratchLottery";
const props = defineProps<{
  scratchLayer: ScratchCanvas;
}>();
onMounted(() => {
  initScratchCanvas();
});
const isDrawing = false;
const scratchCanvas = ref<HTMLCanvasElement | null>(null);
const ctx = computed<CanvasRenderingContext2D | null>(
  () => scratchCanvas.value?.getContext("2d") || null
);
function initScratchCanvas() {
  if (!scratchCanvas.value) return console.log("找不到畫布元素");
  //畫canvas
  drawScratchOn(
    0,
    0,
    props.scratchLayer.width,
    props.scratchLayer.height
  );
}
function drawScratchOn(x: number, y: number, width: number, height: number) {
  if (!ctx.value) return console.log("沒有2D畫筆");
  ctx.value.beginPath();
  ctx.value.fillStyle = "grey";
  ctx.value.fillRect(x, y, width, height);
}
</script>
