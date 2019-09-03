<template>
  <Layout>

    <div class="">
      <div class="">
        <h1>Provinces</h1>
        <p class="text-gray-800 text-xl">Below are the nine provinces that make up South Africa.</p>
      </div>
    </div>
    <div class="flex flex-wrap mt-10">
      <div class="districts w-1/3">
        <div class="mb-5" v-for="item in $page.districts.edges" :key="item.node.id">
          <h2 class="text-3xl sm:text-4xl leading-tight">
            <g-link :to="`${item.node.path}`" class="text-black font-bold link">{{ item.node.title }}</g-link>
          </h2>
        </div>
      </div>
      <div class="map w-2/3 -mt-20">
        <g-image src="../../media/site/south-africa-map.svg"></g-image>
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
