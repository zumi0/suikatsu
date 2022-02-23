<template>
  <div>
    <section class="section">
      <b-image :src="main_img_url"/>
      <Description :title="title_what" :subtitle="subtitle_what" :description="description_what" />
      <Description :title="title_map" :subtitle="subtitle_map" />
      <Card />
      <Description :title="title_blog" :subtitle="subtitle_blog" />
      <Card />
      <Description :title="title_about" :subtitle="subtitle_about" />
      <AboutMe />
      <!--
      <div class="columns">
        <card title="Free" icon="github">
          Open source on <a href="https://github.com/buefy/buefy"> GitHub </a>
        </card>

        <card title="Responsive" icon="cellphone-link">
          <b class="has-text-grey"> Every </b> component is responsive
        </card>

        <card title="Modern" icon="alert-decagram">
          Built with <a href="https://vuejs.org/"> Vue.js </a> and
          <a href="http://bulma.io/"> Bulma </a>
        </card>

        <card title="Lightweight" icon="arrange-bring-to-front">
          No other internal dependency
        </card>
      </div>
      -->
    </section>
    <Footer />
  </div>
</template>

<script>
import Card from '~/components/Card'
import Description from '~/components/Description'
import Footer from '~/components/Footer'
import AboutMe from '~/components/AboutMe'

export default {
    name: 'IndexPage',
    components: {
      Card,
      Footer,
      Description,
      AboutMe,
    },
    data () {
      return {
        title_what: 'What',
        subtitle_what: 'これは何',
        description_what: '管理人は水族館がとても好き',
        title_map: 'Map',
        subtitle_map: '日本の水族館一覧',
        title_blog: 'Blog',
        subtitle_blog: '水族館の記録一覧',
        title_about: 'About Me',
        subtitle_about: '管理人',
        main_img_url: require('@/assets/main.png')
      }
    }
}

// memo
// https://qiita.com/hiroyukiwk/items/a26e767d193ef8d9155b
</script>
