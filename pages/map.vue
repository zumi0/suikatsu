<template>
  <div>
    <div id="map-wrap" style="height: 100vh; width: 100%;">
      <client-only>
        <l-map :zoom="13" :center="[47.413220, -1.219482]">
          <l-tile-layer url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"></l-tile-layer>
          <l-marker :lat-lng="[47.413220, -1.219482]"></l-marker>
        </l-map>
      </client-only>
    </div>
  </div>
</template>


<script>
//import aquariums from '@/assets/aquariums.json'

export default {
    data () {
        return {
            //aquariums: aquariums,
            center: [36.207519, 139.664034],
            tile_url: 'http://{s}.tile.osm.org/{z}/{x}/{y}.png',
            attribution: '&copy; <a href="https://osm.org/copyright">OpenStreetMap</a> contributors'
        }
    }
}
</script>
