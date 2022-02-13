import Vue from 'vue'
import LControlFullscreen from 'vue2-leaflet-fullscreen'
import { LMap, LTileLayer, LMarker, LIcon } from 'vue2-leaflet';

Vue.component('l-map', LMap);
Vue.component('l-tile-layer', LTileLayer);
Vue.component('l-marker', LMarker);
Vue.component('l-icon', LIcon);
Vue.component('l-control-fullscreen', LControlFullscreen)