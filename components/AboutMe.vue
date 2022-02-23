<template>
    <div>
        <b-image :src="profile_img_url"/>
        <p>zumi0</p>
        <p>水族館好きです</p>
        <b-image :src="github_img_url"/>
        <b-image :src="twitter_img_url"/>
    </div>
</template>

<script>
export default {
    name: 'AboutMe',
    data () {
        return {
            profile_img_url: require('@/assets/profile.png'),
            github_img_url: require('@/assets/github-brands.svg'),
            twitter_img_url: require('@/assets/twitter-brands.svg'),
        }
    }
}
</script>
