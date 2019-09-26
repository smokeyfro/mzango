<template>
    <div>
        <div class="latest-journals-heading container">
        <span class="label">Latest and greatest</span>
        </div>
        <div class="latest-journals">
        <div class="container">
            <g-link :to="item.node.path" class="journal" v-for="item in blog" :key="item.node.id">
              <h3 class="journal-title">{{ item.node.title }}</h3>
            </g-link>
        </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        blog: {
            type: Array,
            required: true
        }
    }
}
</script>

<style scoped>

</style>
