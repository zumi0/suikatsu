<template>
    <div>
        <Description title="Blog" subtitle="水族館の記録一覧" description="管理人が行った水族館の記録を見ることができます" />
        <div>
            <ul>
                <li v-for="article in blog" :key="article.slug">
                    <nuxt-link :to="'/blog/' + article.slug">
                        <p>{{ article.title }}</p>
                    </nuxt-link>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import Description from '~/components/Description'

export default {
    name: 'blog',
    components: {
      Description,
    },
    data () {
        return {
        }
    },
    async asyncData ({ $content }) {
        // 記事を全て取得（作成日で降順にソート）
        const blog = await $content('blog').fetch()
        return {
        blog
        }
    }
}

</script>