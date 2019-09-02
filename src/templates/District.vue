<template>
  <Layout>
    <div class="district">

      <div class="container">

        <h1 v-html="$page.post.title" />
        <div v-html="$page.post.excerpt" class="content" />
        <div v-html="$page.post.content" class="content" />
        <div class="grid mt-5">
          <place-card class="" v-for="edge in $page.places.edges" :key="edge.node.id" :post="edge.node" />
        </div>
      </div>

    </div>
  </Layout>
</template>

<page-query>
query District ($path: String!, $slug: String!) {
  post: district (path: $path) {
    title
    excerpt
    content
    image
    slug
  }
  places: allPlace(filter: { district_slug: { eq: $slug }}) {
    edges {
      node {
        id
        title
        excerpt
        path
        image
        province
        district
        district_slug
      }
    }
  }
}
</page-query>

<script>
import PlaceCard from '@/components/PlaceCard'

export default {
  components: {
    PlaceCard
  },
  metaInfo () {
    return {
      title: this.$page.post.title,
      bodyAttrs: {
        class: 'district'
      }
    }
  }
}
</script>

<style scoped>

</style>
