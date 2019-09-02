<template>
  <Layout>

    <div class="">
      <div class="">
        <h1>
          Provinces
        </h1>
      </div>
    </div>

    <g-link 
      :to="item.node.path"
      v-for="item in $page.posts.edges" 
      :key="item.node.id"
      class=""
    >
      <div class="">
        <h2 class="">{{ item.node.title }}</h2>
        <p class="">{{ item.node.excerpt }}</p>
      </div>
    </g-link>
      
  </Layout>
</template>

<page-query>
query Provinces {
	posts: allProvince {
    edges {
      node {
        id
        path
        title
        excerpt
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
  }
}
</script>

<style scoped>

</style>
