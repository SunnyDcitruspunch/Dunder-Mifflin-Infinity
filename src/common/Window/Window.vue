<template>
  <div class="window z-20 flex flex-col"
    :id="id"
    :style="{ top: topPosition + 'px', left: leftPosition + 'px', position: 'absolute', cursor: 'default' }">
    <div class="title-bar"
       @mousedown="startDrag"
       @mouseup="stopDrag">
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
    id: String,
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
