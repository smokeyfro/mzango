<template>
  <Layout>
    <div class="place">
      <div>
        <div>
          <h1 class="title" v-html="$page.post.title" />
        </div>
        <div class="text-gray-800 text-xl mb-5 mr-20" v-html="$page.post.excerpt" />
        <div class="flex flex-wrap">
          <div v-if="$page.post.content" class="w-1/2">
            <div v-html="$page.post.content" class="content markdown mr-10" />
          </div>
          <div class="w-1/2">
            <div v-if="$page.hosts.edges" class="mt-6">
              <h2 class="font-sans font-bold text-black mt-6 mb-8 text-2xl sm:text-4xl">Places to Stay</h2>
              <div class="grid mt-5">
                <host-card-small class="" v-for="edge in $page.hosts.edges" :key="edge.node.id" :post="edge.node" />
              </div>
            </div>
            <div v-if="$page.attractions" class="mt-20">
              <h2 class="font-sans font-bold text-black my-6 text-2xl sm:text-4xl">Things to Do</h2>
              <div class="grid mt-5">
                <attraction-card-small class="" v-for="edge in $page.attractions.edges" :key="edge.node.id" :post="edge.node" />
              </div>
            </div>
            <div v-if="$page.posts.edges" class="mt-20">
              <h2 class="font-sans font-bold text-black my-6 text-2xl sm:text-4xl">Related Articles</h2>
              <div class="grid mt-5">
                <post-card-small class="" v-for="edge in $page.posts.edges" :key="edge.node.id" :post="edge.node" />
              </div>
            </div>
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
    excerpt
    content
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
  posts: allPost( filter: { tags: { contains: [$slug] } } ) {
    edges {
      node {
        id
        title
        excerpt
        tags
        path
      }
    }
  }
}

</page-query>

<script>
import HostCardSmall from '@/components/HostCardSmall'
import AttractionCardSmall from '@/components/AttractionCardSmall'
import PostCardSmall from '@/components/PostCardSmall'

export default {
  components: {
    HostCardSmall,
    AttractionCardSmall,
    PostCardSmall
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
