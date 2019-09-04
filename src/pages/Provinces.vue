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
          <h2 class="text-3xl sm:text-4xl leading-tight flex items-center">
            <span v-if="item.node.province_color" :style="`background-color:` + `${item.node.province_color}`" class="w-8 h-8 block rounded-full mr-3"></span>
            <g-link :to="`${item.node.path}`" class="text-black font-bold link">{{ item.node.title }}</g-link>
          </h2>
        </div>
      </div>
      <div class="map w-2/3 -mt-20">
       <ProvincesMap />
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
        province_color
      }
    }
  }
}
</page-query>

<script>
import ProvincesMap from '@/components/ProvincesMap'

export default {
  components: {
    ProvincesMap
  },
  data() {
    return {
        map: require("../../media/site/south-african-provinces-map.svg"),
    }
  },
}
</script>

<style scoped>

</style>
