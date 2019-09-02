<template>
  <Layout>
  <div>
      <header>
        <h1 class="text-4xl sm:text-5xl md:text-6xl font-sans font-bold mb-1">Places to Stay</h1>
        <p class="text-grey-dark text-lg sm:text-3xl">Find a backpackers, camping spot or place to park your van.</p>
      </header>
      <div class="toolbar flex justify-between bg-gray-100 p-4 rounded-full mb-10 mt-8">
        <div class="search-wrapper w-1/2 pr-4 relative z-20">
          <form>
            <input v-model="hostSearch" type="text" class="bg-white border border-gray-300 focus:outline-none focus:shadow-inner rounded-full py-3 px-6 text-lg block w-full appearance-none leading-normal text-black placeholder:text-gray-300" placeholder="Type in the name of a South African town or city">
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
          <host-card class="" v-for="edge in filteredHosts" :key="edge.node.id" :post="edge.node" />
        </div>
        <div v-if="layout === 'list'" class="list flex flex-wrap">
          <host-list class="w-full md:w-1/2 lg:w-1/3 xl:w-1/4" v-for="edge in filteredHosts" :key="edge.node.id" :post="edge.node" />
        </div>
        <div v-if="layout === 'map'" class="map">
          <host-map v-for="edge in filteredHosts" :key="edge.node.id" :post="edge.node" />
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
          <host-table v-for="edge in filteredHosts" :key="edge.node.id" :post="edge.node" />
        </table>
      </section>
      <host-pagination :info="$page.posts.pageInfo" v-if="$page.posts.pageInfo.totalPages > 1" />
    </div>
  </Layout>
</template>

<page-query>
  query Hosts ($page: Int) {
    posts: allHost(sortBy: "title", order: ASC, page: $page, perPage: 120) @paginate {
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
          image(width: 400, height: 200, quality: 90)
          longitude
          latitude
          website
          place
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
import HostList from '@/components/HostList'
import HostCard from '@/components/HostCard'
import HostMap from '@/components/HostMap'
import HostTable from '@/components/HostTable'
import HostPagination from '@/components/HostPagination'
import SearchForm from '~/components/SearchForm'

export default {
  components: {
    HostList,
    HostCard,
    HostMap,
    HostTable,
    HostPagination,
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
      hostSearch: '',
      hosts: []
    }
  },
  computed: {
    hostsList () {
      return this.$page.posts.edges
    },
    filteredHosts (){
      return this.hostsList.filter(edge=>{
        return edge.node.title.toLowerCase().match(this.hostSearch.toLowerCase());
      });
    }
  }
}
</script>

<style scoped>

</style>
