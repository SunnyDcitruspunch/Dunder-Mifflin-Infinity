<template>
  <img alt="dunder-mifflin-logo-bg" class="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 align-middle leading-[100px] non-selectable" draggable="false" :src="wallpaper" style="height: 80vh" />
  <ShortCut
      v-for="shortcut in shortcuts"
      :key="shortcut.name"
      :img="shortcut.img"
      :initialTop="shortcut.initialTop"
      :name="shortcut.name"
  />
  <UnderConstruction />
</template>

<script>
import ShortCut from './common/ShortCut/ShortCut.vue';
// import OfficeQuickSearch from './components/OfficeQuickSearch/OfficeQuickSearch.vue';
import computer from '@/assets/computer.png';
import folder from '@/assets/folder.png';
import wallpaper from '@/assets/dunder-mifflin-bg.png';
import UnderConstruction from './components/UnderConstruction/UnderConstruction.vue';
import './common/reset.css'
import './index.css'

export default {
  name: 'App',
  components: {
    // OfficeQuickSearch,
    UnderConstruction,
    ShortCut
  },
  data() {
    return {
      computer,
      folder,
      shortcuts: [
        { img: computer, initialTop: 0, name: 'Computer' },
        { img: folder, initialTop: 100, name: 'Meeting Notes' },
        { img: folder, initialTop: 200, name: 'Archives' },
        { img: folder, initialTop: 300, name: 'Cover Sheets' }
      ],
      wallpaper
    }
  }
}
</script>

<style>
#app {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  height: 100dvh;
  width: 100vw;
  background-color: #000FFF;
  color: white;
  overflow: hidden;
  position: relative;
}
body {
  overflow: hidden;
}
.non-selectable {
  user-select: none;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
}
</style>
