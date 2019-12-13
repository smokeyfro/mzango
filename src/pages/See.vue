<template>
  <Layout>
  <div>
      <header>
        <h1 class="mb-1 font-sans text-4xl font-bold sm:text-5xl md:text-6xl">Places of Interest</h1>
        <p class="text-lg text-grey-dark sm:text-3xl">Not sure what to add to your South African bucket list? See our list of recommended things to experience while you're here.</p>
      </header>
      <div class="flex justify-between p-4 mt-8 mb-10 bg-gray-100 rounded-full toolbar">
        <div class="relative z-20 w-1/2 pr-4 search-wrapper">
          <form>
            <input v-model="attractionSearch" type="text" class="block w-full px-6 py-3 text-lg leading-normal text-black bg-white border border-gray-300 rounded-full appearance-none focus:outline-none focus:shadow-inner placeholder:text-gray-300" placeholder="Type in the name of a South African attraction">
          </form>
        </div>
        <div class="flex items-center layout-toggle">
          <a class="px-4 py-2 mx-px font-bold text-white bg-black rounded-full rounded-tr-none rounded-br-none cursor-pointer hover:bg-gray-700" v-on:click="layout = 'grid'" v-bind:class="{ 'active': layout == 'grid'}" title="Grid">Grid</a>
          <a class="px-4 py-2 font-bold text-white bg-black cursor-pointer hover:bg-gray-700" v-on:click="layout = 'list'" v-bind:class="{ 'active': layout == 'list'}" title="List">List</a>
          <a class="px-4 py-2 mx-px font-bold text-white bg-black cursor-pointer hover:bg-gray-700" v-on:click="layout = 'table'" v-bind:class="{ 'active': layout == 'table'}" title="Table">Table</a>
          <a class="px-4 py-2 font-bold text-white bg-black rounded-full rounded-tl-none rounded-bl-none cursor-pointer hover:bg-gray-700" v-on:click="layout = 'map'" v-bind:class="{ 'active': layout == 'map'}" title="Map">Map</a>
        </div>
      </div>
      <section>
        <div v-if="layout === 'grid'" class="grid">
          <attraction-card class="" v-for="edge in filteredAttractions" :key="edge.node.id" :post="edge.node" />
        </div>
        <div v-if="layout === 'list'" class="grid">
          <attraction-card-small class="" v-for="edge in filteredAttractions" :key="edge.node.id" :post="edge.node" />
        </div>
        <div v-if="layout === 'map'" class="map">
          <attraction-map v-for="edge in filteredAttractions" :key="edge.node.id" :post="edge.node" />
        </div>
        <table v-if="layout === 'table'" class="table w-full p-3 text-left border border-2 border-collapse table-auto">
          <tr class="text-white bg-black">
            <th class="px-4 py-2">Name</th>
            <th class="px-4 py-2">Province</th>
            <th class="px-4 py-2">State</th>
            <th class="px-4 py-2">Location</th>
            <th class="px-4 py-2">Code</th>
            <th class="px-4 py-2">Website</th>
          </tr>
          <attraction-table v-for="edge in filteredAttractions" :key="edge.node.id" :post="edge.node" />
        </table>
      </section>
      <attraction-pagination :info="$page.posts.pageInfo" v-if="$page.posts.pageInfo.totalPages > 1" />
    </div>
  </Layout>
</template>

<page-query>
  query Attractions ($page: Int) {
    posts: allAttraction(sortBy: "title", order: ASC, page: $page, perPage: 120) @paginate {
      totalCount
      pageInfo {
        totalPages
        currentPage
      }
      edges {
        node {
          id
          title
          excerpt
          image
          place
          city
          province
          province_slug
          place
          path
        }
      }
    }
  }
</page-query>

<script>
import config from '~/.temp/config.js'
import AttractionCard from '@/components/AttractionCard'
import AttractionCardSmall from '@/components/AttractionCardSmall'
import AttractionMap from '@/components/AttractionMap'
import AttractionTable from '@/components/AttractionTable'
import AttractionPagination from '@/components/AttractionPagination'

export default {
  components: {
    AttractionCard,
    AttractionCardSmall,
    AttractionMap,
    AttractionTable,
    AttractionPagination,
  },
  stored: {
    layout: {
      type: String,
      key: 'layout',
      default: 'grid'
    }
  },
  data () {
    return {
      attractionSearch: '',
      attractions: []
    }
  },
  computed: {
    attractionsList () {
      return this.$page.posts.edges
    },
    filteredAttractions (){
      return this.attractionsList.filter(edge=>{
        return edge.node.title.toLowerCase().match(this.attractionSearch.toLowerCase());
      });
    }
  }
}
</script>

<style scoped>

</style>
