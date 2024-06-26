<template>
  <div class="window z-20 flex flex-col absolute cursor-default"
    :id="id"
    :style="{ top: topPosition + 'px', left: leftPosition + 'px' }">
    <div class="title-bar"
       @mousedown="startDrag"
       @mouseup="stopDrag">
      <div class="title-bar-text">
        {{ title }}
      </div>
      <div class="title-bar-controls">
        <button aria-label="Minimize"></button>
        <div v-if="isFullScreen">
          <button aria-label="Restore" @click="exitFullScreen"></button>
        </div>
        <div v-else>
          <button aria-label="Maximize" @click="enterFullScreen"></button>
        </div>
        <button aria-label="Close" @click="closeScreen"></button>
      </div>
    </div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'Window-Frame',
  props: {
    height: Number,
    id: String,
    left: Number,
    title: String,
    top: Number,
    width: Number
  },
  data() {
    return {
      dragging: false,
      dragOffsetX: 0,
      dragOffsetY: 0,
      isFullScreen: false,
      leftPosition: this.left,
      topPosition: this.top,
    };
  },
  methods: {
    startDrag(event) {
      this.dragging = true;
      this.dragOffsetX = event.clientX - this.leftPosition;
      this.dragOffsetY = event.clientY - this.topPosition;
      window.addEventListener('mousemove', this.drag);
      window.addEventListener('mouseup', this.stopDrag);
    },
    closeScreen() {
      const window = this.$el;
      if(window) {
        window.style.display = 'none';
      }
    },
    drag(event) {
      if (this.dragging) {
        const xPosition = event.clientX - this.dragOffsetX;
        const yPosition = event.clientY - this.dragOffsetY;

        const windowWidth = window.innerWidth;
        const windowHeight = window.innerHeight;

        const frame = document.getElementById(this.id)
        const elementWidth = frame.getBoundingClientRect().width;
        const elementHeight = frame.getBoundingClientRect().height;

        if (xPosition >= 0 && (xPosition + elementWidth) <= windowWidth) {
          this.leftPosition = xPosition;
        } else if (xPosition < 0) {
          this.leftPosition = 0;
        } else if ((xPosition + elementWidth) > windowWidth) {
          this.leftPosition = windowWidth - elementWidth;
        }

        if (yPosition >= 0 && (yPosition + elementHeight) <= windowHeight) {
          this.topPosition = yPosition;
        } else if (yPosition < 0) {
          this.topPosition = 0;
        } else if ((yPosition + elementHeight) > windowHeight) {
          this.topPosition = windowHeight - elementHeight;
        }
      }
    },
    enterFullScreen() {
      const window = this.$el;

      if(window) {
        window.style.top = '0'
        window.style.left = '0'
        window.style.width = '100vw'
        window.style.height = '100vh'
        this.topPosition = 0
        this.leftPosition = 0
        this.isFullScreen = true;
      }
    },
    exitFullScreen() {
      const window = this.$el;

      if(window) {
        window.style.width = 'auto';
        window.style.height = 'auto';
        this.topPosition = this.top;
        this.leftPosition = this.left;
        this.isFullScreen = false;
      }
    },
    stopDrag() {
      if (this.dragging) {
        this.dragging = false;
        window.removeEventListener('mousemove', this.drag);
        window.removeEventListener('mouseup', this.stopDrag);
      }
    }
  }
}
</script>

<style>
  .title-bar-controls button {
    min-height: 15px;
    min-width: 15px
  }
</style>
