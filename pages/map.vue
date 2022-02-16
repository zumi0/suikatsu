<template>
  <div>
    <div id="map-wrap">
      <client-only>
        <l-map :zoom="zoom" :center="center">
          <l-tile-layer :url="tile_url" :attribution="attribution"></l-tile-layer>
          <l-marker 
            v-for="(value,key) in aquariums"
            v-bind:key="key"
            :lat-lng="[value.lat, value.lng]"
            >
            <l-popup>
              <p><a :href="value.url" target="_blank">{{value.name}}</a></p>
            </l-popup>
          </l-marker>
        </l-map>
      </client-only>
    </div>
  </div>
</template>


<script>
import aquariums from '@/assets/aquariums.json'

export default {
    data () {
        return {
            aquariums: aquariums,
            test_icon_url: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-red.png',
            blue_icon_url: '@/assets/fish_blue.png',
            blue_icon_size: [64, 64],
            zoom: 8,
            center: [36.207519, 139.664034],
            tile_url: 'http://{s}.tile.osm.org/{z}/{x}/{y}.png',
            attribution: '&copy; <a href="https://osm.org/copyright">OpenStreetMap</a> contributors',
        }
    }
}
</script>

<style scoped>
#map-wrap {
  position: fixed;
  width: 100%;
  height: calc(100% - 64px);
}
</style>
