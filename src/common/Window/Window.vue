<template>
  <div class="window z-20"
    :style="{ height: height + '%', width: width + '%', top: yPos + 'px', left: xPos + 'px', position: 'absolute', cursor: dragging ? 'move' : 'auto' }"
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
      xPos: 0,
      yPos: 0,
      dragging: false,
      dragOffsetX: 0,
      dragOffsetY: 0
    };
  },
  methods: {
    startDrag(event) {
      this.dragging = true;
      this.dragOffsetX = event.clientX - this.xPos;
      this.dragOffsetY = event.clientY - this.yPos;
      window.addEventListener('mousemove', this.drag);
      window.addEventListener('mouseup', this.stopDrag);
    },
    drag(event) {
      if (this.dragging) {
        this.xPos = event.clientX - this.dragOffsetX;
        this.yPos = event.clientY - this.dragOffsetY;
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
