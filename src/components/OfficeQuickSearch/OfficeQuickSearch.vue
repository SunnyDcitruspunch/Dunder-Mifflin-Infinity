<template>
  <Window :top="200" :left="100" :height="50" id="quick-launch" :width="50" title="Infinity Interoffice QuickLaunch">
    <div class="p-6 bg-white mr-1 ml-1">
      <div class="flex justify-between items-center">
        <div>
          <img alt="dunder-mifflin-infinity" class="w-24" draggable="false" :src="infinity" />
        </div>
        <div>
          <p class="uppercase quick-search-menu">Scranton</p>
          <p class="uppercase quick-search-menu">Regional branch</p>
        </div>
      </div>
      <div class="gap-5 grid grid-cols-2 mt-6 text-left">
        <div class="flex flex-col gap-3">
          <div class="quick-search-menu" @click="openNewWindow('Internet', 150, 350, 'internet')">
            <span class="flex items-center hover:cursor-pointer">
              <img alt="item-icon" class="h-5" draggable="false" :src="icon" />
              <p>Internet</p>
            </span>
          </div>
          <div class="quick-search-menu" @click="openNewWindow('Email', 150, 350, 'email')">
            <span class="flex items-center hover:cursor-pointer">
              <img alt="item-icon" class="h-5" draggable="false" :src="icon" />
              <p>Email</p>
            </span>
          </div>
          <div class="quick-search-menu" @click="openNewWindow('Instant Messenger', 150, 350, 'messenger')">
            <span class="flex items-center hover:cursor-pointer">
              <img alt="item-icon" class="h-5" draggable="false" :src="icon" />
              <p>Instant Messenger</p>
            </span>
          </div>
          <div class="quick-search-menu" @click="openNewWindow('Warehouse', 150, 350, 'warehouse')">
            <span class="flex items-center hover:cursor-pointer">
              <img alt="item-icon" class="h-5" draggable="false" :src="icon" />
              <p>Warehouse</p>
            </span>
          </div>
        </div>
        <div class="flex flex-col gap-3">
          <div class="quick-search-menu" @click="openNewWindow('Sales', 150, 350, 'sales')">
            <span class="flex items-center hover:cursor-pointer">
              <img alt="item-icon" class="h-5" draggable="false" :src="icon" />
              <p>Sales</p>
            </span>
          </div>
          <div class="quick-search-menu" @click="openNewWindow('Email', 150, 350, 'email')">
            <span class="flex items-center hover:cursor-pointer">
              <img alt="item-icon" class="h-5" draggable="false" :src="icon" />
              <p>Email</p>
            </span>
          </div>
          <div class="quick-search-menu" @click="openNewWindow('Instant Messenger', 150, 350, 'messenger')">
            <span class="flex items-center hover:cursor-pointer">
              <img alt="item-icon" class="h-5" draggable="false" :src="icon" />
              <p>Instant Messenger</p>
            </span>
          </div>
          <div class="quick-search-menu" @click="openNewWindow('Warehouse', 150, 350, 'warehouse')">
            <span class="flex items-center hover:cursor-pointer">
              <img alt="item-icon" class="h-5" draggable="false" :src="icon" />
              <p>Warehouse</p>
            </span>
          </div>
        </div>
      </div>
    </div>
  </Window>
  <Window
    v-for="(win, index) in windows"
    :key="index"
    :left="win.left"
    :top="win.top"
    :title="win.title"
    :id="win.id">
    <component :is="win.contentComponent"></component>
  </Window>
</template>

<script>
import Window from '../../common/Window/Window.vue';
import icon from '@/assets/dm-icon.png';
import infinity from '@/assets/dm-infinity.png';
import UnderConstruction from '../UnderConstruction/UnderConstruction.vue';
import './style.css'

export default {
  name: 'OfficeQuickSearch',
  components: {
    Window
  },
  data() {
    return {
      icon,
      infinity,
      windows: []
    }
  },
  methods: {
    openNewWindow(title, top, left, id) {
      this.windows.push({
        title: title,
        contentComponent: UnderConstruction,
        top,
        left,
        id: `window-${id}`
      });
    }
  }
}
</script>
