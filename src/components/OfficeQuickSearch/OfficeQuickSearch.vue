<template>
  <Window :height="50" :width="50" title="Infinity Interoffice QuickLaunch">
    <div class="grid grid-cols-2">
      <div class="quick-search-menu">
        <p>Internet</p>
        <p>Email</p>
        <p>Instant Messenger</p>
        <p>Warehouse</p>
      </div>
      <div class="quick-search-menu">
        <p>Sales</p>
        <p>Accounting</p>
        <p>Human Resources</p>
        <p>Customer Service</p>
      </div>
    </div>
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

<style>
@import 'tailwindcss/base';
@import 'tailwindcss/components';
@import 'tailwindcss/utilities';
</style>
