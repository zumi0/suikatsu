<template>
  <div>
    <Description :title="title" :subtitle="subtitle" :description="description" />
    <AquariumMap />
  </div>
</template>


<script>
import AquariumMap from '~/components/AquariumMap'
import Description from '~/components/Description'

export default {
    name: 'map',
    components: {
      AquariumMap,
      Description
    },
    data () {
        return {
            title: 'Map',
            subtitle: '日本の水族館一覧',
            description: '日本の水族館を地図上で見ることができます。管理人が行った水族館も見ることができます。'
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
