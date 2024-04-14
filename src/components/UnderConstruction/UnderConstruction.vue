<template>
  <Window :height="windowHeight" :width="windowWidth" title="Infinity Interoffice QuickLaunch" @update-dimensions="updateDimensions">
    <div class="bg-white z-20 flex flex-col items-center m-1 mt-0">
      <p class="text-black text-3xl font-bold">Under Construction</p>
      <img alt="dunder-mifflin-paper-company" class="m-4 non-selectable" draggable="false" :src="logo" />
      <img alt="jackhammer" class="w-1/2" :src="jackhammer" />
      <p class="font-bold text-xl">
        <span class="text-black">Coming </span>
        <span v-for="(char, index) in message" :key="index" :class="getColor(index)">
        {{ char }}
        </span>
      </p>
    </div>
  </Window>
</template>

<script>
import Window from '../../common/Window/Window.vue';
import logo from '@/assets/dunder-mifflin.png';
import jackhammer from '@/assets/jackhammer.gif';

export default {
  components: {
    Window
  },
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
      return index % 2 === 0 ? 'text-cyan-700' : 'text-rose-600';
    },
    updateDimensions(dimensions) {
      this.windowHeight = dimensions.height;
      this.windowWidth = dimensions.width;
    }
  },
  name: 'UnderConstruction'
}
</script>
