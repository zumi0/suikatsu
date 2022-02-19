<template>
    <section class="section">
        <h1 class="title">{{ title }}</h1>
        <h2 class="subtitle">{{ subtitle }}</h2>
        <p class="description">{{ description }}</p>
    </section>
</template>

<script>
export default {
  name: 'Description',
  props: {
    title: {
        type: String,
        required: true,
    },
    subtitle: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: false,
    },
  },
}
</script>
