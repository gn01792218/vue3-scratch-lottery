<template>
  <canvas
    ref="canvas"
    width="400"
    height="400"
    @mousedown="mouseDown"
    @mousemove="mouseMove"
    @mouseup="mouseUp"
  ></canvas>
</template>
<script setup lang="ts">
import useUtil from "@/compasable/useUtil";
const { getAssetsFileURL } = useUtil();

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

  context.value.fillStyle = "#ddd";
  context.value.fillRect(250, 160, 120, 120);

  drawImage(30,160,150,150,getAssetsFileURL('logo.png'));

  //底圖一定要用背景圖否則會被畫布洗掉
  canvas.value.style.background =
    'url("https://hsuanxcollection.files.wordpress.com/2022/10/brown-and-blue-minimalist-photography-birthday-gift-box-ideas-instagram-post.png?resize=668,668") no-repeat center';
  canvas.value.style.backgroundSize = "100% 100%";

  context.value.lineWidth = 20;
  context.value.lineJoin = "round";
}
function mouseDown(e: MouseEvent) {
  isDrawing = true;
  startX = e.clientX;
  startY = e.clientY;
  console.log("按下滑鼠時座標", startX, startY);
}

function mouseMove(e: MouseEvent) {
  if (!context.value) return;
  if (isDrawing) {
    const x = e.clientX;
    const y = e.clientY;
    console.log("從起點", startX, startY, "畫到", x, y);
    context.value.globalCompositeOperation = "destination-out";
    context.value.beginPath();
    context.value.moveTo(startX, startY);
    context.value.lineTo(x, y);
    context.value.closePath();
    context.value.stroke();
    startX = x;
    startY = y;
    console.log("重設畫畫中的滑鼠座標為", startX, startY);
  }
}

function mouseUp() {
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
</script>