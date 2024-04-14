<template>
  <div class="window z-20 flex flex-col"
    :style="{ top: topPosition + 'px', left: leftPosition + 'px', position: 'absolute', cursor: dragging ? 'move' : 'auto' }"
       @mousedown="startDrag"
       @mouseup="stopDrag"
       @mouseleave="stopDrag">
    <div class="title-bar">
      <div class="title-bar-text">
        {{ title }}
      </div>
      <div class="title-bar-controls">
        <button aria-label="Minimize"></button>
        <button aria-label="Maximize"></button>
        <button aria-label="Close"></button>
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
    title: String,
    width: Number
  },
  data() {
    return {
      dragging: false,
      dragOffsetX: 0,
      dragOffsetY: 0,
      leftPosition: 100,
      topPosition: 300,
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
    drag(event) {
      if (this.dragging) {
        const newXPos = event.clientX - this.dragOffsetX;
        const newYPos = event.clientY - this.dragOffsetY;

        const windowWidth = window.innerWidth;
        const windowHeight = window.innerHeight;

        const elementWidth = this.width;
        const elementHeight = this.height;

        if (newXPos >= 0 && (newXPos + elementWidth) <= windowWidth) {
          this.leftPosition = newXPos;
        } else if (newXPos < 0) {
          this.leftPosition = 0;
        } else if ((newXPos + elementWidth) > windowWidth) {
          this.leftPosition = windowWidth - elementWidth;
        }

        if (newYPos >= 0 && (newYPos + elementHeight) <= windowHeight) {
          this.topPosition = newYPos;
        } else if (newYPos < 0) {
          this.topPosition = 0;
        } else if ((newYPos + elementHeight) > windowHeight) {
          this.topPosition = windowHeight - elementHeight;
        }
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
