<template>
  <div id="app" class="h-100">
    <router-view/>
  </div>
</template>

<script>


export default {
  name: 'app',
}
</script>

<style scoped>
@import "./assets/css/reset.css";
.h-100{
  height: 100%;
}
</style>
