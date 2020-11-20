<template>
  <div id="main">
    <head>
      <link href="https://api.mapbox.com/mapbox-gl-js/v1.10.1/mapbox-gl.css" rel="stylesheet" />
    </head>
    <BaseMap v-if="!focused" />
    <SearchBar @clicked="onFocus" v-model="search" @blur="onBlur"/>
    <pre>{{ search }}</pre>
  </div>
</template>

<script>
import BaseMap from "@/components/VueMapbox.vue";
import SearchBar from "@/components/Search.vue";
export default {
  components: {
    SearchBar,
    BaseMap,
  },
  data() {
    return {
        focused: false,
        search: null
    }
  },
  methods: {
      onFocus() {
          this.focused = !this.focused
          console.log('Je suis focus')
      },
      onBlur() {
        this.focused = !this.focused
      }
  },
};
</script>

<style>
#main {
  width: 100%;
  display: flex;
}
</style>
