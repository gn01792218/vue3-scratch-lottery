<template>
  <ScratchCard
    v-for="scartchCard in scartchCards" :key="scartchCard.id"
    :card="scartchCard"
  />
</template>
<script setup lang="ts">
import { ScartchCard } from "@/types/scratchCard"
import ScratchCard from "@/components/ScratchCard.vue"
import useUtil from "@/compasable/useUtil";
const { getAssetsFileURL } = useUtil();

const scartchCards:ScartchCard[] = [
  {
    id:"001",
    width:400,
    height:400,
    scartch_layers:[
      {
        id:"layer1",
        left_position:250,
        top_position:160,
        width:120,
        height:120,
      },
      {
        id:"layer2",
        left_position:30,
        top_position:160,
        width:150,
        height:150,
        layer_img:getAssetsFileURL('logo.png')
      }
    ],
    bg_img:getAssetsFileURL('logo.png')
  },
  {
    id:"002",
    width:400,
    height:400,
    scartch_layers:[
      {
        id:"layer1",
        left_position:250,
        top_position:160,
        width:120,
        height:120,
      },
      {
        id:"layer2",
        left_position:30,
        top_position:160,
        width:120,
        height:120,
      }
    ],
    bg_img:'https://hsuanxcollection.files.wordpress.com/2022/10/brown-and-blue-minimalist-photography-birthday-gift-box-ideas-instagram-post.png?resize=668,668'
  }
]
</script>