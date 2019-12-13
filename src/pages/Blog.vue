<template>
  <Layout>

    <div class="">
      <div class="h-64">
        <h1 class="mt-10 font-bold text-center text-7xl">The Mzango Blog</h1>
        <h2 class="text-2xl text-center">Showcasing South African Artists, Culture, Music, Film, Events and more.</h2>
      </div>
    </div>
    <div class="mt-10 grid">
      <div v-for="item in $page.posts.edges" :key="item.node.id" class="mb-6">
        <figure class="mb-4" v-if="item.node.image">
          <g-link :to="`${item.node.path}`" class="block w-full h-48 overflow-hidden">
            <g-image :src="item.node.image" class="object-cover w-full h-48"></g-image>
          </g-link>
        </figure>
        <div>
          <h2 class="mb-1 text-2xl font-bold leading-snug">
            <g-link :to="item.node.path" class="">
              {{ item.node.title }}
            </g-link>
          </h2>
          <p class="">{{ item.node.excerpt }}</p>
        </div> 
      </div>  
    </div>    
  </Layout>
</template>

<page-query>
query Blog {
	posts: allPost {
    edges {
      node {
        id
        path
        image
        title
        excerpt
      }
    }
  }
}
</page-query>

<script>
export default {
}
</script>

<style scoped>

</style>
