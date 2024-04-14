<template>
  <ShortCut :img="computer" name="Computer" />
  <ShortCut :img="folder" name="Meeting Notes" />
  <ShortCut :img="folder" name="Archives" />
  <ShortCut :img="folder" name="Cover Sheets" />
  <OfficeQuickSearch />
</template>

<script>
import ShortCut from './common/ShortCut/ShortCut.vue';
import OfficeQuickSearch from './components/OfficeQuickSearch/OfficeQuickSearch.vue';
import computer from '@/assets/computer.png';
import folder from '@/assets/folder.png';
import './common/reset.css'
import './index.css'

export default {
  name: 'App',
  components: {
    OfficeQuickSearch,
    ShortCut
  },
  data() {
    return {
      computer,
      folder
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
}
</style>
