<template>
  <div class="short-cut flex flex-col w-14 items-center m-2"
    :style="{ top: topPosition + 'px', left: leftPosition + 'px', position: 'absolute', cursor: dragging ? 'move' : 'auto' }"
       @mousedown="startDrag"
       @mouseup="stopDrag"
       @mouseleave="stopDrag">
    <img alt="short-cut" class="w-14 z-10" :src="img" draggable="false" />
    <p class="text-xs z-10">{{ name }}</p>
  </div>
</template>

<script>
export default {
  name: 'ShortCut',
  props: {
    img: String,
    name: String,
  },
  data() {
    return {
      dragging: false,
      dragOffsetX: 0,
      dragOffsetY: 0,
      leftPosition: 100,
      topPosition: 100,
      rafId: null
    };
  },
  methods: {
    startDrag(event) {
      this.dragging = true;
      this.dragOffsetX = event.clientX - this.leftPosition;
      this.dragOffsetY = event.clientY - this.topPosition;
      window.addEventListener('mousemove', this.drag);
      window.addEventListener('mouseup', this.stopDrag);
      event.preventDefault(); 
    },
    drag(event) {
      event.preventDefault()
      if (this.rafId) {
        cancelAnimationFrame(this.rafId);
      }
      this.rafId = requestAnimationFrame(() => {
        this.leftPosition = event.clientX - this.dragOffsetX;
        this.topPosition = event.clientY - this.dragOffsetY;
      });
    },
    stopDrag() {
      if (this.dragging) {
        this.dragging = false;
        window.removeEventListener('mousemove', this.drag);
        window.removeEventListener('mouseup', this.stopDrag);
        if (this.rafId) {
          cancelAnimationFrame(this.rafId); 
          this.rafId = null;
        }
      }
    }
  }
}
</script>

<style>
.short-cut:hover {
  cursor: pointer;
}
</style>
