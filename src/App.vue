<template>
  <div v-if="isMobile">
    <Mobile />
  </div>
  <div v-else>
    <img alt="dunder-mifflin-logo-bg" class="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 align-middle leading-[100px] non-selectable" draggable="false" :src="wallpaper" style="height: 80vh" />
    <ShortCut
        v-for="shortcut in shortcuts"
        :key="shortcut.name"
        :id="shortcut.id"
        :img="shortcut.img"
        :initialLeft="shortcut.initialLeft"
        :initialTop="shortcut.initialTop"
        :name="shortcut.name"
    />
    <div class="taskbar h-8 fixed bottom-0 left-0 w-full">
      <!-- <div class="start-button"><img src="assets/logo.svg"> start</div> -->
      <!-- <div class="time">11:20 PM</div> -->
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import ShortCut from './common/ShortCut/ShortCut.vue';
import computer from '@/assets/computer.png';
import folder from '@/assets/folder.png';
import wallpaper from '@/assets/dunder-mifflin-bg.png';
import recycle from '@/assets/recycle.png';
import Mobile from './components/Mobile.vue';
import './common/reset.css'
import './index.css'

export default {
  name: 'App',
  components: {
    Mobile,
    ShortCut
  },
  computed: {
    isMobile() {
      const mobileBreakpoint = 768;
      return window.innerWidth <= mobileBreakpoint;
    }
  },
  data() {
    const shortcutSize = 100
    const taskbarHeight = 32

    return {
      computer,
      folder,
      shortcuts: [
        { id: "1", img: computer, initialTop: 0, name: 'Computer' },
        { id: "2", img: folder, initialTop: shortcutSize, name: 'Meeting Notes' },
        { id: "3", img: folder, initialTop: shortcutSize*2, name: 'Archives' },
        { id: "4", img: folder, initialTop: shortcutSize*3, name: 'Cover Sheets' },
        { id: "5", img: recycle, initialLeft: window.innerWidth - shortcutSize, initialTop: window.innerHeight - shortcutSize - taskbarHeight, name: 'Recycle' }
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
  overflow: hidden;
  position: relative;
}
html, body {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
}
.non-selectable {
  user-select: none;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
}
.taskbar {
    background: linear-gradient(to bottom, #245EDC 0%, #3f8cf3 9%, #245EDC 18%, #245EDC 92%, #1941A5 100%) center/cover no-repeat;
}
</style>
