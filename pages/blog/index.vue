<template>
    <div>
        <Description :title="title" :subtitle="subtitle" :description="description" />
    </div>
</template>

<script>
import Description from '~/components/Description'

export default {
    name: 'blog',
    components: {
      Description
    },
    data () {
        return {
            title: 'Blog',
            subtitle: '水族館の記録一覧',
            description: '管理人が行った水族館の記録を見ることができます。'
        }
    }
}