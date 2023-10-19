
<template>
  <canvas
    ref="canvas"
    :width="card.width"
    :height="card.height"
    @mousedown="startScartch"
    @mousemove="scartching"
    @mouseup="EndScartch"
    @touchstart="startScartch"
    @touchmove="scartching"
    @touchend="EndScartch"
  ></canvas>
</template>
<script setup lang="ts">
import { ScartchCard } from "@/types/scratchCard";
import useUtil from "@/compasable/useUtil";
const { getAssetsFileURL } = useUtil();

const props = defineProps<{
  card: ScartchCard;
}>();

onMounted(() => {
  init();
});

const canvas = ref<HTMLCanvasElement | null>(null);
const context = computed<CanvasRenderingContext2D | null>(
  () => canvas.value?.getContext("2d") || null
);

let isDrawing = false;
let startX = 0;
let startY = 0;

function init() {
  if (!context.value || !canvas.value) return;

  //畫scartch圖層
  drawScartchLayer();

  //底圖一定要用背景圖否則會被畫布洗掉
  canvas.value.style.background = `url(${props.card.bg_img}) no-repeat center`;
  canvas.value.style.backgroundSize = "100% 100%";

  context.value.lineWidth = 20;
  context.value.lineJoin = "round";
}
function drawScartchLayer() {
  props.card.scartch_layers.forEach((layer) => {
    if (layer.layer_img)
      return drawImage(
        layer.left_position,
        layer.top_position,
        layer.width,
        layer.height,
        layer.layer_img
      );
    context.value!.fillStyle = "#ddd";
    context.value!.fillRect(
      layer.left_position,
      layer.top_position,
      layer.width,
      layer.height
    );
  });
}

function startScartch(e: MouseEvent | TouchEvent) {
  isDrawing = true;
  let { x, y } = getClientPosition(e);
  startX = x;
  startY = y;
}
function scartching(e: MouseEvent | TouchEvent) {
  if (!context.value) return;
  if (isDrawing) {
    e.preventDefault(); //禁止手機touch時的預設拖曳動作，防止整個canvas元素被拖曳
    let { x, y } = getClientPosition(e);
    context.value.globalCompositeOperation = "destination-out";
    context.value.beginPath();
    context.value.moveTo(startX, startY);
    context.value.lineTo(x, y);
    context.value.closePath();
    context.value.stroke();
    startX = x;
    startY = y;
  }
}
function EndScartch() {
  isDrawing = false;
}
function drawImage(
  x: number,
  y: number,
  width: number,
  height: number,
  imgUrl: string
) {
  const img = new Image();
  img.src = imgUrl;
  img.onload = function () {
    context.value!.drawImage(img, x, y, width, height);
  };
}
function getClientPosition(e: MouseEvent | TouchEvent) {
  let x, y;
  if (e instanceof MouseEvent) {
    x = e.clientX;
    y = e.clientY;
  } else {
    x = e.touches[0].clientX;
    y = e.touches[0].clientY;
  }
  return { x, y };
}
</script>