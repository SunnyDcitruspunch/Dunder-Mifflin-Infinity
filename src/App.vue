<template>
  <OfficeQuickSearch />
</template>

<script>
import OfficeQuickSearch from './components/OfficeQuickSearch/OfficeQuickSearch.vue';
import './common/reset.css'
import './index.css'

export default {
  name: 'App',
  components: {
    OfficeQuickSearch
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
}
</style>
