<template>
  <div id="main">
      <head><link href='https://api.mapbox.com/mapbox-gl-js/v1.10.1/mapbox-gl.css' rel='stylesheet' /></head>
      <BaseMap/>
      <SearchBar/>
  </div>
</template>

<script>
import BaseMap from '@/components/VueMapbox.vue'
import SearchBar from '@/components/Search.component.vue'
export default {
    components: {
        SearchBar,
        BaseMap
    }
}
</script>

<style>
#main {
    width: 100%;
    display: flex;
}
</style>