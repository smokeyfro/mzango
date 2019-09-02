<template>

</template>

<script>
export default {
  name: 'PlaceNav',
  computed: {
    posts() {
      return this.$static.posts &&
        this.$static.posts.edges.map(e => e.node)
    }
  }
}
</script>
