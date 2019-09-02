<template>
  <Layout>
    <div class="place">
      <div>
        <div>
          <h1 class="title" v-html="$page.post.title" />
        </div>
        <div class="text-gray-800 text-xl mb-5 mr-20" v-html="$page.post.excerpt" />
        <div v-html="$page.post.content" class="content markdown" />
        <h2 class="text-3xl font-bold text-black">Places to Stay</h2>
        <div class="grid mt-5">
          <host-card class="" v-for="edge in $page.hosts.edges" :key="edge.node.id" :post="edge.node" />
        </div>
        <div v-if="$page.attractions" class="mt-10">
        <h2 class="text-3xl font-bold text-black">Things to Do</h2>
        <div class="grid mt-5">
          <attraction-card-small class="" v-for="edge in $page.attractions.edges" :key="edge.node.id" :post="edge.node" />
        </div>
        </div>

      </div>

    </div>
  </Layout>
</template>

<page-query>
query Place ($path: String!, $slug: String!) {
  post: place (path: $path) {
    title
    id
    path
    slug
    excerpt
  }
  hosts: allHost(filter: { city: { eq: $slug }}) {
    edges {
      node {
        id
        title
        excerpt
        path
        image
        province
        place
        district
      }
    }
  }
  attractions: allAttraction(filter: { city: { eq: $slug }}) {
    edges {
      node {
        id
        title
        excerpt
        path
        image
        province
        province_slug
        place
        city
      }
    }
  }
}

</page-query>

<script>
import HostCard from '@/components/HostCard'
import AttractionCardSmall from '@/components/AttractionCardSmall'

export default {
  components: {
    HostCard,
    AttractionCardSmall
  },
  metaInfo () {
    return {
      title: this.$page.post.title,
      bodyAttrs: {
        class: 'place'
      }
    }
  }
}
</script>

<style scoped>

</style>
