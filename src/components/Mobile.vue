<template>
  <div class="window absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]" style="width: 300px">
    <div class="title-bar">
      <div class="title-bar-text">Error</div>
      <div class="title-bar-controls">
        <button aria-label="Close"></button>
      </div>
    </div>
    <div class="window-body">
      <div class="flex justify-center items-start gap-6 mt-5">
        <img alt="error" class="object-contain" :src="error" draggable="false" />
        <div class="mb-5">
          <div class="text-left">
            <p>Windows xp is not available on mobile.</p>
            <p>Please use a desktop.</p>
          </div>
        </div>
      </div>
      <div>
        <button>Ok</button>
      </div>
    </div>
  </div>
</template>

<script>
  import error from '@/assets/error.png';

  export default {
    name: 'Mobile-View',
    data() {
      return {
        error
      }
    }
  }
</script>
