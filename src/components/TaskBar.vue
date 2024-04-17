<template>
  <div class="taskbar h-8 fixed bottom-0 left-0 w-full flex justify-between items-center">
    <div class="start-button flex items-center ml-3">
      <img alt="start-icon" class="h-4" :src="windows">
      <span class="text-white italic font-bold">start</span>
    </div>
    <div class="time text-white mr-3">{{ currentTime }}</div>
  </div>
</template>

<script>
const millisecondPerSecond = 1000
import windows from '@/assets/windows.svg';

export default {
  name: 'TaskBar',
  mounted() {
    this.interval = setInterval(this.updateClock, millisecondPerSecond);
  },
  beforeUnmount() {
    clearInterval(this.interval);
  },
  data() {
    return {
      windows,
      currentTime: this.formatTime(new Date())
    }
  },
  methods: {
    updateClock() {
      this.currentTime = this.formatTime(new Date());
    },
    formatTime(date) {
      let hours = date.getHours();
      let minutes = date.getMinutes();
      const ampm = hours >= 12 ? 'PM' : 'AM';
      hours = hours % 12;
      hours = hours ? hours : 12;
      minutes = minutes < 10 ? '0' + minutes : minutes;
      return `${hours}:${minutes} ${ampm}`;
    }
  },
}
</script>

<style>
.taskbar {
    background: linear-gradient(to bottom, #245EDC 0%, #3f8cf3 9%, #245EDC 18%, #245EDC 92%, #1941A5 100%) center/cover no-repeat;
}
</style>
