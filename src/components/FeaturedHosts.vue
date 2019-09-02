<template>
    <div class="">
        <div class="" v-for="item in hosts" :key="item.node.id">
            <g-link :to="item.node.path" class="">
            <g-image
                :src="item.node.image"
                :alt="item.node.title"
                class=""
            />
            </g-link>
            <h3 class="">{{ item.node.title }}</h3>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        hosts: {
            type: Array,
            required: true
        }
    }
}
</script>

<style scoped>

</style>
