<template>
  <div class="short-cut flex flex-col w-14 items-center m-2 fixed"
    :id="`short-cut${id}`"
    :style="{ cursor: dragging ? 'move' : 'auto' }"
       @mousedown="startDrag"
       @mouseup="stopDrag">
    <img alt="short-cut" class="w-14 z-10" :src="img" draggable="false" />
    <p class="text-xs z-10 text-white">{{ name }}</p>
  </div>
</template>

<script>
export default {
  name: 'ShortCut',
  props: {
    id: String,
    img: String,
    initialTop: Number,
    initialLeft: {
      type: Number,
      default: 0
    },
    name: String,
  },
  data() {
    return {
      dragging: false,
      dragElement: null,
      dragOffsetX: 0,
      dragOffsetY: 0,
      translateX: this.initialLeft,
      translateY: this.initialTop,
    };
  },
  mounted() {
    const element = document.getElementById(`short-cut${this.id}`);
    if (element) {
      element.style.transform = `translate(${this.translateX}px, ${this.translateY}px)`;
    }
    window.addEventListener('mousemove', this.drag);
    window.addEventListener('mouseup', this.stopDrag);
  },
  beforeUnmount() {
    window.removeEventListener('mousemove', this.drag);
    window.removeEventListener('mouseup', this.stopDrag);
  },
  methods: {
    startDrag(event) {
      event.preventDefault();

      this.dragging = true;
      this.appendShadowElement()
      const originalElement = document.getElementById(`short-cut${this.id}`);
      const rect = originalElement.getBoundingClientRect();
      this.dragOffsetX = event.clientX - rect.left;
      this.dragOffsetY = event.clientY - rect.top;
      this.updatePosition(event.clientX, event.clientY);
    },
    appendShadowElement() {
      const originalElement = document.getElementById(`short-cut${this.id}`);
      this.dragElement = originalElement.cloneNode(true);
      this.dragElement.style.position = 'fixed';
      this.dragElement.style.pointerEvents = 'none';
      this.dragElement.style.opacity = 0.5;
      this.dragElement.style.zIndex = 10;
      this.dragElement.style.top = '10px';
      this.dragElement.style.left = '10px';
      document.body.appendChild(this.dragElement);
    },
    drag(event) {
      if (!this.dragging) return;
      this.updatePosition(event.clientX, event.clientY);
    },
    updatePosition(x, y) {
      this.translateX = x - this.dragOffsetX;
      this.translateY = y - this.dragOffsetY;
      if (this.dragElement) {
        this.dragElement.style.transform = `translate(${this.translateX}px, ${this.translateY}px)`;
      }
    },
    stopDrag() {
      if (this.dragging) {
        this.dragging = false;

        if (this.dragElement) {
          document.body.removeChild(this.dragElement);
          this.dragElement = null;
        }

        const originalElement = document.getElementById(`short-cut${this.id}`);
        if (originalElement) {
          originalElement.style.transform = `translate(${this.translateX}px, ${this.translateY}px)`;
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
