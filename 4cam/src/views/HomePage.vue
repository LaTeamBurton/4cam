<template>
  <div id="main">
      <SearchBar/>
  </div>
</template>

<script>
import SearchBar from '@/components/Search.component.vue'
export default {
    components: {
        SearchBar
    }
}
</script>

<style>
#main {
    width: 100%;
}
</style>