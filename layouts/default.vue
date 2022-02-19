<template>
  <div>
    <Navbar />
    <section>
      <div>
        <Nuxt />
      </div>
    </section>
  </div>
</template>

<script>
import Navbar from '~/components/Navbar'

export default {
  name: 'DefaultLayout',
  components: {
    Navbar
  },
  data() {
    return {
    }
  },
}
</script>