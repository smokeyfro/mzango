<template>
  <Layout>
    <div>
      <h1 class="title" v-html="$page.post.title" />
      <div v-html="$page.post.excerpt" class="text-gray-800 text-xl mb-5 mr-20" />
      <div class="flex flex-wrap">
        <div class="w-1/2">
          <div v-html="$page.post.content" class="markdown mr-20" />
        </div>
        <div class="w-1/2">
          <div v-if="$page.places.edges">
            <h2 class="text-3xl font-bold text-black">Towns / Cities</h2>
            <div class="grid mt-5 mb-10">
              <place-card-small class="" v-for="edge in $page.places.edges" :key="edge.node.id" :post="edge.node" />
            </div>
          </div>
          <div v-if="$page.hosts.edges" class="mt-10">
            <h2 class="text-3xl font-bold text-black">Places to stay</h2>
            <div class="grid-small mt-5">
              <host-card-small class="" v-for="edge in $page.hosts.edges" :key="edge.node.id" :post="edge.node" />
            </div>
          </div>
          <div v-if="$page.attractions.edges" class="mt-10">
            <h2 class="text-3xl font-bold text-black">Things to see</h2>
            <div class="grid-small mt-5">
              <attraction-card-small class="" v-for="edge in $page.attractions.edges" :key="edge.node.id" :post="edge.node" />
            </div>
          </div>
        </div>
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
  attractions: allAttraction(filter: { province_slug: { eq: $slug }}) {
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
import AttractionCardSmall from '@/components/AttractionCardSmall'

export default {
  components: {
    PlaceCardSmall,
    HostCardSmall,
    AttractionCardSmall
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
