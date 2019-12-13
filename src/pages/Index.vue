<template>
  <div class="relative">
    <Header class="fixed top-0 z-30 w-full" />
    <div class="fixed top-0 w-full h-screen overflow-hidden">
      <!-- <g-image :src="`/assets/static/media/site/${selectedImage}`" class="object-cover object-bottom h-full" /> -->
      <g-image src="../../media/site/hero-pink.jpg" class="object-cover object-bottom h-full" />
    </div>
    <div class="flex items-center content-center justify-center h-screen hero-wrap">
      <div class="w-2/3 mx-auto -mt-8 text-center md:w-1/3">
        <Hero class="w-full mb-6" />
        <div class="relative z-50">
          <input
                id="search"
                v-model="searchTerm"
                class="block w-full px-8 py-4 text-lg leading-normal text-black bg-white rounded-full shadow-2xl appearance-none focus:outline-none focus:shadow-outline placeholder:text-gray-300"
                type="search"
                results="5"
                v-focus
                placeholder="Type in a phrase or search term...">
            <div class="text-left results">
                <div v-for="item in searchResults" :key="item.id" class="mx-5">
                    <g-link :to="item.path" class="block w-full p-4 item">
                        <figure :v-if="item.image">
                          <g-image :src="`${item.image}`" />
                        </figure>
                        <h2>
                            {{ item.title }} <span :class="item.index | lowerCase" class="badge">{{ item.index }}</span>
                        </h2>
                    </g-link>
                </div>
            </div>
        </div>
        <!-- <autocomplete :suggestions="$page.places.edges.map(e => e.node)" value="" :selection.sync="value"></autocomplete> -->
      </div>
    </div>
    <main class="relative z-30 p-10 mx-10 mb-10 bg-white rounded-lg shadow-2xl">
      <div class="flex justify-between w-full">
        <h2 class="content-center font-sans text-xl font-bold sm:text-2xl md:text-3xl">Popular Hosts</h2>
        <g-link to="/stay" class="px-6 py-3 font-semibold text-black bg-transparent border border-black rounded-full hover:bg-black hover:text-white hover:border-transparent">View All</g-link>
      </div>
      <div class="mt-10 grid md:3-cols lg:4-cols xl:5-cols">
          <div class="w-full overflow-hidden rounded shadow-lg card" v-for="post in $page.hosts.edges" v-bind:key="post.node.id">
              <figure v-if="post.node.image">
                <g-link :to="`${post.node.path}`" class="block w-full h-48 overflow-hidden">
                <g-image :src="post.node.image" class="object-cover w-full h-48"></g-image>
                </g-link>
              </figure>
              <div class="p-6 card-meta">
                <h2 class="text-xl font-bold">
                  <g-link :to="`${post.node.path}`" class="font-bold text-red-600">{{ post.node.title }}</g-link>
                </h2>
                <div>{{ post.node.place }}, {{ post.node.province }}</div>
              </div>
          </div>
      </div>
      <BottomNav />
      <Footer />
    </main>
    <!-- <modal v-show="modal === true">
      <template slot="header">
        <h2>Greetings fellow earthling!</h2>
      </template>
      <template slot="body">
        <p class="text-xl">This is the early preview of Mzango, <em>the unofficial guide to backpacking in South Africa</em>.</p>
        <p class="my-4">The site is still in active development and a lot will change before the official launch. <a href="#" v-on:click="modal = false" class="font-bold bg-yellow-200">Subscribe</a> to be notified when we launch.</p>
      </template>
      <template slot="footer">
        <div class="mt-5">
          <button v-on:click="modal = false" aria-label="Close modal" type="button" name="button" class="px-4 py-2 text-white bg-black rounded-full">Roger that!</button>
        </div>
      </template>
    </modal> -->
  </div>
</template>

<page-query>
query Posts {
	hosts: allHost(limit: 8) {
    edges {
      node {
        id
        title
        image(width: 400, height: 200, quality: 90)
        path
        place
        province
      }
    }
  },
  places: allPlace ( sortBy: "title", order: ASC) {
    edges {
      node {
        id
        path
        title
        name
      }
    }
  },
  blog: allPost (limit: 4) {
    edges {
      node {
        id
        path
        title
      }
    }
  }
}
</page-query>

<script>
import Hero from "@/components/Hero"
import Header from "@/components/Header"
import BasicSearch from "@/components/BasicSearch"
import FeaturedHosts from "@/components/FeaturedHosts"
import BottomNav from "@/components/BottomNav"
import Footer from "@/components/Footer"
import Modal from "@/components/Modal"
import ItemTemplate from '@/components/ItemTemplate.vue'
import lowerCase from "@/filters/LowerCase";

// import Dropdown from 'vue-simple-search-dropdown';
// import Autocomplete from '@/components/Autocomplete.vue'

export default {
  components: {
    Header,
    Hero,
    BasicSearch,
    FeaturedHosts,
    BottomNav,
    Footer,
    Modal,
    ItemTemplate,
    Dropdown: () =>
      import ('vue-simple-search-dropdown')
      .then(m => m.Dropdown)
      .catch(), 
  },
  filters: {
      lowerCase
  },
  stored: {
    modal: {
      type: String,
      key: 'modal',
      default: true
    }
  },
  data () {
    return {
      searchTerm: '',
      images: [
        'header-1.jpg',
        'header-2.jpg',
        'header-3.jpg',
        'header-4.jpg'
      ],
      selectedImage: ''
    }
  },
  methods: {
    randomItem (items) {
      return items[Math.floor(Math.random()*items.length)];
    },
    // submit (selected){
    //   this.$router.push(this.matches[selected])
    // }
  },
  computed: {
    urlPrefix: 'https://mzango.com',
    searchResults () {
      const searchTerm = this.searchTerm
      if (searchTerm.length < 3) return []
      return this.$search.search({ query: searchTerm, limit: 50 })
    }
  }
}
</script>

<style>
.search {
  position: relative;
  z-index: 9999;
}
.results > div {
    text-align: left;
    padding: 1px 0 0;
    position: relative;
    background: #f7f7f7;
}
.results .badge {
    background: #fff;
    color: #222;
    font-size: 13px;
    padding: 1px 4px;
    position: absolute;
    top: 22px;
    right: 13px;
}
.results .place {
    background: #222;
    color: #fff;
}
.results .host {
    background: #777;
    color: #fff;
}
</style>
