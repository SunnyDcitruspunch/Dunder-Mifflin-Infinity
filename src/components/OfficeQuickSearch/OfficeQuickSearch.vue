<template>
  <Window :height="50" id="quick-launch" :width="50" title="Infinity Interoffice QuickLaunch">
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
        <div class="quick-search-menu">
          <router-link to="/in-progress">
            <span class="flex items-center">
              <img alt="item-icon" class="h-5" draggable="false" :src="icon" />
              <p>Internet</p>
            </span>
          </router-link>
          <router-link to="/in-progress">
            <span class="flex items-center">
              <img alt="item-icon" class="h-5" draggable="false" :src="icon" />
              <p>Email</p>
            </span>
          </router-link>
          <router-link to="/in-progress">
            <span class="flex items-center">
              <img alt="item-icon" class="h-5" draggable="false" :src="icon" />
              <p>Instant Messenger</p>
            </span>
          </router-link>
          <router-link to="/in-progress">
            <span class="flex items-center">
              <img alt="item-icon" class="h-5" draggable="false" :src="icon" />
              <p>Warehouse</p>
            </span>
          </router-link>
        </div>
        <div class="quick-search-menu">
          <router-link to="/in-progress">
            <span class="flex items-center">
              <img alt="item-icon" class="h-5" draggable="false" :src="icon" />
              <p>Sales</p>
            </span>
          </router-link>
          <router-link to="/in-progress">
            <span class="flex items-center">
              <img alt="item-icon" class="h-5" draggable="false" :src="icon" />
              <p>Accounting</p>
            </span>
          </router-link>
          <router-link to="/in-progress">
            <span class="flex items-center">
              <img alt="item-icon" class="h-5" draggable="false" :src="icon" />
              <p>Human Resources</p>
            </span>
          </router-link>
          <router-link to="/in-progress">
            <span class="flex items-center">
              <img alt="item-icon" class="h-5" draggable="false" :src="icon" />
              <p>Customer Service</p>
            </span>
          </router-link>
        </div>
      </div>
    </div>
    <router-view></router-view>
  </Window>
</template>

<script>
import Window from '../../common/Window/Window.vue';
import icon from '@/assets/dm-icon.png';
import infinity from '@/assets/dm-infinity.png';
import './style.css'

export default {
  name: 'OfficeQuickSearch',
  components: {
    Window
  },
  data() {
    return {
      icon,
      infinity
    }
  }
}
</script>
