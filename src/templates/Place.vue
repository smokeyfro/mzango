<template>
  <Layout>
    <div class="place">
      <div>
        <div>
          <h1 class="title" v-html="$page.post.title" />
          <div class="text-gray-800 text-xl mb-5 mr-20" v-html="$page.post.excerpt" />
          <figure v-if="$page.post.image" class="rounded-lg overflow-hidden mb-10">
            <g-image :src="$page.post.image"></g-image>
          </figure>
        </div>
        <div class="flex flex-wrap">
          <div v-if="$page.post.content" class="w-1/2">
            <div v-html="$page.post.content" class="content markdown mr-10" />
          </div>
          <div class="w-1/2">
            <ClientOnly>
                <template v-if="$page.post.latitude" class="">
                  <h2 class="font-sans font-bold text-black mb-8 text-2xl sm:text-4xl">Current Weather</h2>
                  <vue-weather-widget
                      api-key="408dbe336740c8c807f4a1c1ecf60e98"
                      :latitude="$page.post.latitude"
                      :longitude="$page.post.longitude"
                      title=""
                      language="en"
                      bar-color="#E4104A"
                      units="uk">
                  </vue-weather-widget>
              </template>
            </ClientOnly>
            <template v-if="$page.hosts.edges">
              <h2 class="font-sans font-bold text-black mt-6 mb-8 text-2xl sm:text-4xl">Places to Stay</h2>
              <div class="grid mt-5">
                <host-card-small class="" v-for="edge in $page.hosts.edges" :key="edge.node.id" :post="edge.node" />
              </div>
            </template>
            <template v-if="$page.attractions.edges" class="mt-20">
              <h2 class="font-sans font-bold text-black my-6 text-2xl sm:text-4xl">Things to Do</h2>
              <div class="grid mt-5">
                <attraction-card-small v-for="edge in $page.attractions.edges" :key="edge.node.id" :post="edge.node" />
              </div>
            </template>
            <template v-if="$page.posts.edges" class="mt-20">
              <h2 class="font-sans font-bold text-black my-6 text-2xl sm:text-4xl">Related Articles</h2>
              <div class="grid mt-5">
                <post-card class="" v-for="edge in $page.posts.edges" :key="edge.node.id" :post="edge.node" />
              </div>
            </template>
          </div>
        </div>
      </div>
    </div>
  </Layout>
</template>

<page-query>
query Place ($path: String!, $slug: String) {
  post: place (path: $path) {
    title
    id
    path
    slug
    image (width: 1500, height: 600, quality: 90)
    excerpt
    latitude
    longitude
    content
    sources
  }
  hosts: allHost(filter: { city: { eq: $slug }}) {
    edges {
      node {
        id
        title
        excerpt
        path
        image (width: 80, height: 80, quality: 90)
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
        image (width: 80, height: 80, quality: 90)
        province
        province_slug
        place
        city
      }
    }
  }
  posts: allPost( filter: { tags: { contains: [$slug] } } ) {
    edges {
      node {
        id
        title
        excerpt
        author
        date (format: "DD MMMM YYYY")
        tags
        image (width: 400, height: 400, quality: 90)
        path
      }
    }
  }
}

</page-query>

<script>
import HostCardSmall from '@/components/HostCardSmall'
import AttractionCardSmall from '@/components/AttractionCardSmall'
import PostCard from '@/components/PostCard'
import DefaultLayout from '~/layouts/Default.vue'
import VueYouTubeEmbed from 'vue-youtube-embed'
import VueStorage from 'vuestorage'
import 'vue-weather-widget/dist/css/vue-weather-widget.css';

export default {
  components: {
    HostCardSmall,
    AttractionCardSmall,
    PostCard,
    VueWeatherWidget: () => import('vue-weather-widget')
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
