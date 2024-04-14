<template>
  <Window :height="50" :width="50" title="Infinity Interoffice QuickLaunch">
   <div class="bg-white z-20 flex flex-col items-center">
      <p class="text-black text-3xl font-bold">Under Construction</p>
      <img alt="dunder-mifflin-paper-company" class="m-4" :src="logo" />
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
import Window from '../../common/Window/Window.vue'
import logo from '@/assets/dunder-mifflin.png';
import jackhammer from '@/assets/jackhammer.gif';

export default {
  methods: {
    getColor(index) {
      return index % 2 === 0 ? 'text-cyan-700' : 'text-rose-600';
    }
  },
  data() {
    return {
      jackhammer,
      message: "Christmas 2002!",
      logo
    }
  },
  name: 'OfficeQuickSearch',
  components: {
    Window
  }
}
</script>
