<template>
    <div id="map-wrap">
      <client-only>
        <l-map :zoom="zoom" :center="center">
          <l-tile-layer :url="tile_url" :attribution="attribution"></l-tile-layer>
          <l-marker 
            v-for="(value,key) in aquariums"
            v-bind:key="key"
            :lat-lng="[value.lat, value.lng]"
            >
            <!-- value.state == 1 -> I've been there -->
            <l-icon v-if="value.state == 1" :icon-url="red_icon_url"></l-icon>
            <l-icon v-else :icon-url="blue_icon_url"></l-icon>
            <l-popup>
              <p><a :href="value.url" target="_blank">{{value.name}}</a></p>
            </l-popup>
          </l-marker>
          <l-control id="custom-control" :position="'bottomleft'">
            <div id="columns">
              <div id="column">
                <img :src="blue_icon_url">
                <p>行ったことがない</p>
              </div>
              <div id="column">
                <img :src="red_icon_url">
                <p>行ったことがある</p>
              </div>
            </div>
          </l-control>
        </l-map>
      </client-only>
    </div>
</template>


<script>
import aquariums from '@/assets/aquariums.json'

export default {
    data () {
        return {
            aquariums: aquariums,
            // icon usls must be urls not relative paths
            // at last i have to use .env file and relative paths
            blue_icon_url: 'https://github.com/zumi0/suikatsu/blob/master/assets/fish_blue.png?raw=true',
            red_icon_url: 'https://github.com/zumi0/suikatsu/blob/master/assets/fish_red.png?raw=true',
            zoom: 8,
            center: [36.207519, 139.664034],
            tile_url: 'http://{s}.tile.osm.org/{z}/{x}/{y}.png',
            attribution: '&copy; <a href="https://osm.org/copyright">OpenStreetMap</a> contributors',
        }
    }
}

// memo
// https://vue2-leaflet.netlify.app/quickstart/#cdn
// https://github.com/schlunsen/nuxt-leaflet/issues/6
// https://vue2-leaflet.netlify.app/examples/custom-control.html
</script>

<style scoped>
#map-wrap {
  position: fixed;
  width: 100%;
  height: calc(100% - 52px);
}

#custom-control {
  background: #fff;
  border: 1px solid #aaa;
  border-radius: 0.1em;
  color: #000 ;
}

#column {
  column-count: 2;
}
</style>
