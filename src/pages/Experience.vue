<template>
  <Layout>
  <div>
      <header>
        <h1 class="text-4xl sm:text-5xl md:text-6xl font-sans font-bold mb-1">Experience Attractions</h1>
        <p class="text-grey-dark text-lg sm:text-3xl">Not sure what to add to your South African bucket list? See our list of recommended things to experience while you're here.</p>
      </header>
      <div class="toolbar flex justify-between bg-gray-100 p-4 rounded-full mb-10 mt-8">
        <div class="search-wrapper w-1/2 pr-4 relative z-20">
          <form>
            <input v-model="attractionSearch" type="text" class="bg-white border border-gray-300 focus:outline-none focus:shadow-inner rounded-full py-3 px-6 text-lg block w-full appearance-none leading-normal text-black placeholder:text-gray-300" placeholder="Type in the name of a South African attraction">
          </form>
        </div>
        <div class="layout-toggle flex items-center">
          <a class="cursor-pointer bg-black hover:bg-gray-700 text-white font-bold py-2 px-4 mx-px rounded-full rounded-tr-none rounded-br-none" v-on:click="layout = 'grid'" v-bind:class="{ 'active': layout == 'grid'}" title="Grid">Grid</a>
          <a class="cursor-pointer bg-black hover:bg-gray-700 text-white font-bold py-2 px-4" v-on:click="layout = 'table'" v-bind:class="{ 'active': layout == 'table'}" title="Table">Table</a>
          <a class="cursor-pointer bg-black hover:bg-gray-700 text-white font-bold py-2 px-4 mx-px" v-on:click="layout = 'list'" v-bind:class="{ 'active': layout == 'list'}" title="List">List</a>
          <a class="cursor-pointer bg-black hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-full rounded-tl-none rounded-bl-none" v-on:click="layout = 'map'" v-bind:class="{ 'active': layout == 'map'}" title="Map">Map</a>
        </div>
      </div>
      <section>
        <div v-if="layout === 'grid'" class="grid">
          <attraction-card class="" v-for="edge in filteredAttractions" :key="edge.node.id" :post="edge.node" />
        </div>
        <div v-if="layout === 'list'" class="list flex flex-wrap">
          <attraction-list class="w-full md:w-1/2 lg:w-1/3 xl:w-1/4" v-for="edge in filteredAttractions" :key="edge.node.id" :post="edge.node" />
        </div>
        <div v-if="layout === 'map'" class="map">
          <attraction-map v-for="edge in filteredAttractions" :key="edge.node.id" :post="edge.node" />
        </div>
        <table v-if="layout === 'table'" class="table border border-2 border-collapse table-auto w-full text-left p-3">
          <tr class="bg-black text-white">
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
          district
          district_slug
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
import AttractionList from '@/components/AttractionList'
import AttractionCard from '@/components/AttractionCard'
import AttractionMap from '@/components/AttractionMap'
import AttractionTable from '@/components/AttractionTable'
import AttractionPagination from '@/components/AttractionPagination'

export default {
  components: {
    AttractionList,
    AttractionCard,
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
