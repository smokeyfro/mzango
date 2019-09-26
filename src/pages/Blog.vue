<template>
  <Layout>

    <div class="">
      <div class="h-64">
        <h1 class="text-7xl text-center font-bold mt-10">The Mzango Blog</h1>
        <h2 class="text-2xl text-center">Showcasing South African Artists, Culture, Music, Film, Events and more.</h2>
      </div>
    </div>
    <div class="grid mt-10">
      <div v-for="item in $page.posts.edges" :key="item.node.id" class="mb-6">
        <figure class="mb-4" v-if="item.node.image">
          <g-link :to="`${item.node.path}`" class="h-48 w-full block overflow-hidden">
            <g-image :src="item.node.image" class="object-cover h-48 w-full"></g-image>
          </g-link>
        </figure>
        <div>
          <h2 class="text-2xl font-bold mb-1 leading-snug">
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
        image(width: 400, height: 200, quality: 90)
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
