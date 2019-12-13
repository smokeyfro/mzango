<template>
  <Layout>
  <div>
      <header>
        <h1 class="mb-1 font-sans text-4xl font-bold sm:text-5xl md:text-6xl">City Guides</h1>
        <p class="text-lg text-grey-dark sm:text-3xl">Explore the cities and towns of South Africa.</p>
      </header>
      <div class="flex justify-between p-4 mt-8 mb-10 bg-gray-100 rounded-full toolbar">
        <div class="relative z-20 w-1/2 pr-4 search-wrapper">
          <form>
            <input v-model="placeSearch" type="text" class="block w-full px-6 py-3 text-lg leading-normal text-black bg-white border border-gray-300 rounded-full appearance-none focus:outline-none focus:shadow-inner placeholder:text-gray-300" placeholder="Type in the name of a South African town or city">
          </form>
        </div>
        <div class="flex items-center layout-toggle">
          <a class="px-4 py-2 mx-px font-bold text-white bg-black rounded-full rounded-tr-none rounded-br-none cursor-pointer hover:bg-gray-700" v-on:click="layout = 'grid'" v-bind:class="{ 'active': layout == 'grid'}" title="Grid">Grid</a>
          <a class="px-4 py-2 font-bold text-white bg-black cursor-pointer hover:bg-gray-700" v-on:click="layout = 'table'" v-bind:class="{ 'active': layout == 'table'}" title="Table">Table</a>
          <a class="px-4 py-2 mx-px font-bold text-white bg-black cursor-pointer hover:bg-gray-700" v-on:click="layout = 'list'" v-bind:class="{ 'active': layout == 'list'}" title="List">List</a>
          <a class="px-4 py-2 font-bold text-white bg-black rounded-full rounded-tl-none rounded-bl-none cursor-pointer hover:bg-gray-700" v-on:click="layout = 'map'" v-bind:class="{ 'active': layout == 'map'}" title="Map">Map</a>
        </div>
      </div>
      <section>
        <div v-if="layout === 'grid'" class="grid">
          <place-card class="list-item" v-for="edge in filteredPlaces" :key="edge.node.id" :post="edge.node" />
        </div>
        <div v-if="layout === 'list'" class="flex flex-wrap list">
          <place-list class="w-full md:w-1/2 lg:w-1/3 xl:w-1/4" v-for="edge in filteredPlaces" :key="edge.node.id" :post="edge.node" />
        </div>
        <div v-if="layout === 'map'" class="map">
          <place-map v-for="edge in filteredPlaces" :key="edge.node.id" :post="edge.node" />
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
          <place-table v-for="edge in filteredPlaces" :key="edge.node.id" :post="edge.node" />
        </table>
      </section>
      <explore-pagination :info="$page.posts.pageInfo" v-if="$page.posts.pageInfo.totalPages > 1" />
    </div>
  </Layout>
</template>

<page-query>
  query Places ($page: Int) {
    posts: allPlace(sortBy: "title", order: ASC, page: $page, perPage: 120) @paginate {
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
          path
          image
          longitude
          latitude
          website
          area_code
          postal_code
          district
          district_slug
          province
          province_slug
        }
      }
    }
  }
</page-query>

<script>
import config from '~/.temp/config.js'
import PlaceList from '@/components/PlaceList'
import PlaceCard from '@/components/PlaceCard'
import PlaceMap from '@/components/PlaceMap'
import PlaceTable from '@/components/PlaceTable'
import ExplorePagination from '@/components/ExplorePagination'
import SearchForm from '~/components/SearchForm'

export default {
  components: {
    PlaceList,
    PlaceCard,
    PlaceMap,
    PlaceTable,
    ExplorePagination,
    SearchForm,
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
      placeSearch: '',
      places: []
    }
  },
  computed: {
    placesList () {
      return this.$page.posts.edges
    },
    filteredPlaces (){
      return this.placesList.filter(edge=>{
        return edge.node.title.toLowerCase().match(this.placeSearch.toLowerCase());
      });
    }
  }
}
</script>

<style scoped>

</style>
