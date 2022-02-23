<template>
    <b-navbar class="is-white is-fixed-top">
        <template #brand>
            <b-navbar-item tag="router-link" :to="{ path: '/' }">
                <img
                    src="https://raw.githubusercontent.com/buefy/buefy/dev/static/img/buefy-logo.png"
                    alt="Lightweight UI components for Vue.js based on Bulma"
                >
            </b-navbar-item>
        </template>
        <template #end>
            <b-navbar-item>
                <NuxtLink to="/">Home</NuxtLink>
            </b-navbar-item>
            <b-navbar-item>
                <NuxtLink to="/map">Map</NuxtLink>
            </b-navbar-item>
            <b-navbar-item>
                <NuxtLink to="/blog">Blog</NuxtLink>
            </b-navbar-item>
        </template>
    </b-navbar>
</template>

<script>
export default {
  name: 'Navbar',
  data () {
      return {
          
      }
  },
}
</script>

<style scoped>
</style>