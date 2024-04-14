<template>
  <img alt="dunder-mifflin-logo-bg" class="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 align-middle leading-[100px] non-selectable" draggable="false" :src="wallpaper" style="height: 80vh" />
  <ShortCut :img="computer" name="Computer" />
  <ShortCut :img="folder" name="Meeting Notes" />
  <ShortCut :img="folder" name="Archives" />
  <ShortCut :img="folder" name="Cover Sheets" />
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
