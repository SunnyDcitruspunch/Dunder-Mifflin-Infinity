<template>
  <div class="bg-white z-20 flex flex-col grow items-center m-1 mt-0 custom-font p-5">
    <p class="text-black text-2xl font-bold mt-5 mb-5">Under Construction</p>
    <img alt="dunder-mifflin-paper-company" class="m-4 non-selectable" draggable="false" style="width: 150px" :src="logo" />
    <img alt="jackhammer" class="w-80" :src="jackhammer" />
    <p class="font-bold text-xl">
      <span class="text-black">Coming </span>
      <span v-for="(char, index) in message" :key="index" :style="getColor(index)">
      {{ char }}
      </span>
    </p>
  </div>
</template>

<script>
import logo from '@/assets/dunder-mifflin.png';
import jackhammer from '@/assets/jackhammer.gif';

export default {
  data() {
    return {
      jackhammer,
      message: "Christmas 2002!",
      logo,
      windowHeight: 500,  
      windowWidth: 500     
    }
  },
  methods: {
    getColor(index) {
      return `color: ${index % 2 === 0 ? '#6ec256' : '#f22b25'};`
    },
    updateDimensions(dimensions) {
      this.windowHeight = dimensions.height;
      this.windowWidth = dimensions.width;
    }
  },
  name: 'UnderConstruction'
}
</script>

<style scoped>
.custom-font {
  font-family: 'Standard CT Bold Condensed', sans-serif;
}
</style>
