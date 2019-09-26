<template>
  <div class="relative">
    <Header class="fixed top-0 w-full z-30" />
    <div class="h-screen w-full overflow-hidden fixed top-0">
      <!-- <g-image :src="`/assets/static/media/site/${selectedImage}`" class="object-cover object-bottom h-full" /> -->
      <g-image src="../../media/site/hero-pink.jpg" class="object-cover object-bottom h-full" />
    </div>
    <div class="h-screen flex items-center justify-center content-center">
      <div class="w-1/3 mx-auto text-center -mt-8">
        <Hero class="w-full mb-6" />
         <div v-if="selected" style="padding-top:10px; width: 100%;">
          You have selected <code>{{selected.title}}, the {{selected.path}}</code>
        </div>
        <div class="autosuggest-container relative z-50 ">
          <vue-autosuggest
            v-model="query"
            :suggestions="filteredOptions"
            @focus="focusMe"
            @click="clickHandler"
            @input="onInputChange"
            @selected="onSelected"
            :get-suggestion-value="getSuggestionValue"
            :input-props="{id:'autosuggest__input', placeholder:'Type in the name of a South African town or city',class:'bg-white shadow-2xl focus:outline-none focus:shadow-outline rounded-full py-4 px-8 text-lg block w-full appearance-none leading-normal text-black placeholder:text-gray-300'}">
            <div slot-scope="{suggestion}" style="display: flex; align-items: center;">
              <img :style="{ display: 'flex', width: '25px', height: '25px', borderRadius: '15px', marginRight: '10px'}" :src="suggestion.item.avatar" />
              <div style="{ display: 'flex', color: 'navyblue'}">{{suggestion.item.title}}</div>
            </div>
          </vue-autosuggest>
        </div>
      </div>
    </div>
    <main class="p-10 relative z-30 bg-white mx-10 shadow-2xl mb-10 rounded-lg">
      <div class="flex justify-between w-full">
        <h2 class="text-xl sm:text-2xl md:text-3xl font-sans font-bold content-center">Popular Hosts</h2>
        <g-link to="/stay" class="bg-transparent hover:bg-black text-black font-semibold hover:text-white py-3 px-6 border border-black hover:border-transparent rounded-full">View All</g-link>
      </div>
      <div class="mt-10 grid md:3-cols lg:4-cols xl:5-cols">
          <div class="card w-full rounded overflow-hidden shadow-lg" v-for="post in $page.hosts.edges" v-bind:key="post.node.id">
              <figure v-if="post.node.image">
                <g-link :to="`${post.node.path}`" class="h-48 w-full block overflow-hidden">
                <g-image :src="post.node.image" class="object-cover h-48 w-full"></g-image>
                </g-link>
              </figure>
              <div class="p-6 card-meta">
                <h2 class="font-bold text-xl">
                  <g-link :to="`${post.node.path}`" class="text-red-600 font-bold">{{ post.node.title }}</g-link>
                </h2>
                <div>{{ post.node.place }}, {{ post.node.province }}</div>
              </div>
          </div>
      </div>
      <BottomNav />
      <Footer />
    </main>
    <modal v-show="modal === true">
      <template slot="header">
        <h2>Greetings fellow earthling!</h2>
      </template>
      <template slot="body">
        <p class="text-xl">This is the early preview of Mzango, <em>the unofficial guide to backpacking in South Africa</em>.</p> 
        <p class="my-4">The site is still in active development and a lot will change before the official launch. <a href="#" v-on:click="modal = false" class="font-bold bg-yellow-200">Subscribe</a> to be notified when we launch.</p>
      </template>
      <template slot="footer">
        <div class="mt-5">
          <button v-on:click="modal = false" aria-label="Close modal" type="button" name="button" class="bg-black text-white py-2 px-4 rounded-full">Roger that!</button>
        </div>
      </template>
    </modal>
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
  places: allPlace {
    edges {
      node {
        id
        path
        title
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
import { VueAutosuggest } from "vue-autosuggest";

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
    VueAutosuggest
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
      images: [
        'header-1.jpg',
        'header-2.jpg',
        'header-3.jpg',
        'header-4.jpg'
      ],
      selectedImage: '',
      query: "",
      selected: "",
      filter: []
    }
  },
  computed: {
    suggestions() {
      return this.$page.places.edges
		},
    filteredOptions() {
      return [
        { 
          data: this.suggestions.node.filter(option => {
            return option.title.toLowerCase().indexOf(this.query.toLowerCase()) > -1;
          })
        }
      ];
    }
  },
  methods: {
    randomItem (items) {
      return items[Math.floor(Math.random()*items.length)];
    },
       clickHandler(item) {
      // event fired when clicking on the input
    },
    onSelected(item) {
      this.selected = item.item;
    },
    onInputChange(text) {
      // event fired when the input changes
      console.log(text)
    },
    /**
     * This is what the <input/> value is set to when you are selecting a suggestion.
     */
    getSuggestionValue(suggestion) {
      return suggestion.item.title;
    },
    focusMe(e) {
      console.log(e) // FocusEvent
    }
  }
}
</script>

<style>
.autosuggest-container {
  display: flex;
  justify-content: center;
}
.autosuggest-container ul {
  width: 100%;
  color: rgba(30, 39, 46,1.0);
  list-style: none;
  margin: 0;
  padding: 0.5rem 0 .5rem 0;
}
.autosuggest-container li {
  margin: 0 0 0 0;
  border-radius: 5px;
  padding: 0.75rem 0 0.75rem 0.75rem;
  display: flex;
  align-items: center;
}
.autosuggest-container li:hover {
  cursor: pointer;
}

#autosuggest { width: 100%; display: block;}
.autosuggest__results-item--highlighted {
  background-color: rgba(51, 217, 178,0.2);
}
</style>