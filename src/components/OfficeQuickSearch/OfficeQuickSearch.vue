<template>
  <Window :height="50" id="quick-launch" :width="50" title="Infinity Interoffice QuickLaunch">
    <div class="grid grid-cols-2">
      <div class="quick-search-menu">
        <router-link to="/in-progress">
          <p>Internet</p>
        </router-link>
        <router-link to="/in-progress">
          <p>Email</p>
        </router-link>
        <router-link to="/in-progress">
          <p>Instant Messenger</p>
        </router-link>
        <router-link to="/in-progress">
          <p>Warehouse</p>
        </router-link>
      </div>
      <div class="quick-search-menu">
        <router-link to="/in-progress">
          <p>Sales</p>
        </router-link>
        <router-link to="/in-progress">
          <p>Accounting</p>
        </router-link>
        <router-link to="/in-progress">
          <p>Human Resources</p>
        </router-link>
        <router-link to="/in-progress">
          <p>Customer Service</p>
        </router-link>
      </div>
    </div>
    <router-view></router-view>
  </Window>
</template>

<script>
import './style.css'
import Window from '../../common/Window/Window.vue'

export default {
  name: 'OfficeQuickSearch',
  components: {
    Window
  }
}
</script>
