<template>
  <div id="mapContainer" class="basemap"></div>
</template>

<script>
import mapboxgl from "mapbox-gl";

export default {
  name: "BaseMap",
  data() {
    return {
      accessToken: 'pk.eyJ1IjoibG9hbm5iZW5vaXQiLCJhIjoiY2pzdTllOHF2MDBzazRibHRzbnd3M2x2aCJ9.hegWlJNinhN2D3NnGxjFtQ',
    };
  },
  mounted() {
    mapboxgl.accessToken = this.accessToken;

    new mapboxgl.Map({
      container: "mapContainer",
      style: "mapbox://styles/loannbenoit/ckhnkq1ec0yba19qju76o7flz",
      center: [3.389167,44.781944],
      zoom: 15,
      pitch: 60,
    });
  },
};
</script>

<style scoped>
#mapContainer {
  width: 100%;
  height: 812px!important;
}
</style>