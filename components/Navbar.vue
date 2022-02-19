<template>
    <b-navbar class="is-white">
        <template #brand>
            <b-navbar-item tag="router-link" :to="{ path: '/' }">
                <img
                    src="https://raw.githubusercontent.com/buefy/buefy/dev/static/img/buefy-logo.png"
                    alt="Lightweight UI components for Vue.js based on Bulma"
                >
            </b-navbar-item>
        </template>
        <template #end>
            <b-navbar-item href="#">
                Map
            </b-navbar-item>
            <b-navbar-item href="#">
                Blog
            </b-navbar-item>
        </template>
    </b-navbar>
</template>

<script>
export default {
  name: 'Navbar',
  data () {
  },
}
</script>

<style scoped>
.pagename {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  font-size: 15pt;
  color: #ffffff;
}
.navbar {
  background-color: #52bba3;
}
.my-white {
  color: #ffffff;
}
span {
  color: #ffffff;
}
.compass {
  height: 20px;
}
#navbarBasicExample {
  background-color: #00d1b2;
}
</style>