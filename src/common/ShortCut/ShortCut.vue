<template>
  <div class="short-cut flex flex-col w-14 items-center m-2">
    <img alt="short-cut" class="w-14 z-10" :src=img />
    <p class="text-xs z-10">{{ name }}</p>
  </div>
</template>

<script>
  export default {
    name: 'ShortCut',
    props: {
      img: String,
      name: String
    }
  }
</script>

<style>
.short-cut:hover {
  cursor: pointer;
}
</style>
