<template>
  <Layout>
    <div>
      <h1 class="title" v-html="$page.post.title" />
      <div v-html="$page.post.excerpt" class="text-gray-800 text-xl mb-5 mr-20" />
      <div v-html="$page.post.content" class="markdown" />
      <h2 class="text-3xl font-bold text-black">Towns / Cities</h2>
      <div class="grid mt-5 mb-10">
        <place-card-small class="" v-for="edge in $page.places.edges" :key="edge.node.id" :post="edge.node" />
      </div>
      <h2 class="text-3xl font-bold text-black">Places to stay</h2>
      <div class="grid-small mt-5">
        <host-card-small class="" v-for="edge in $page.hosts.edges" :key="edge.node.id" :post="edge.node" />
      </div>
    </div>
  </Layout>
</template>

<page-query>
query Province ($path: String!, $slug: String!) {
  post: province (path: $path) {
    title
    excerpt
    content
    image
  }
  places: allPlace(filter: { province_slug: { eq: $slug }}) {
    edges {
      node {
        id
        title
        excerpt
        path
        image
        province
        province_slug
        district
        district_slug
      }
    }
  }
  hosts: allHost(filter: { province_slug: { eq: $slug }}) {
    edges {
      node {
        id
        title
        excerpt
        path
        image
        city
        place
        province
        province_slug
        district
        district_slug
      }
    }
  }
}
</page-query>

<script>
import PlaceCardSmall from '@/components/PlaceCardSmall'
import HostCardSmall from '@/components/HostCardSmall'

export default {
  components: {
    PlaceCardSmall,
    HostCardSmall
  },
  metaInfo () {
    return {
      title: this.$page.post.title,
      bodyAttrs: {
        class: 'province'
      }
    }
  }
}
</script>

<style scoped>

</style>
