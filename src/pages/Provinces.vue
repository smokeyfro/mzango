<template>
  <Layout>

    <div class="">
      <div class="">
        <h1>Provinces</h1>
        <p></p>
      </div>
    </div>
    <div class="flex flex-wrap mt-10">
      <div class="w-1/3 mb-5" v-for="item in $page.districts.edges" :key="item.node.id">
        <h2 class="text-3xl sm:text-4xl leading-tight mb-1 sm:mb-2">
          <g-link :to="`${item.node.path}`" class="text-black font-bold link">{{ item.node.title }}</g-link>
        </h2>
      </div>
    </div>

  </Layout>
</template>

<page-query>
query Provinces {
	districts: allProvince ( sortBy: "title", order: ASC ) {
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

export default {

}
</script>

<style scoped>

</style>
