<template>
  <div class="layout font-sans relative h-screen">
    <Header />
    <div class="h-full w-full fixed top-0 z-0">
      <g-image src="../../media/site/hero-pink.jpg" class="object-cover h-full" />
    </div>
    <main class="p-10 relative z-10 bg-white mx-10 shadow-2xl mb-10 rounded-lg">
      <slot/>
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

<script>
import config from '~/.temp/config.js'
import Header from '~/components/Header.vue'
import BottomNav from '@/components/BottomNav'
import Footer from '@/components/Footer'
import Modal from '@/components/Modal'

export default {
  components: {
    Header,
    BottomNav,
    Footer,
    Modal
  },
  computed: {
    config () {
      return config
    },
  },
  stored: {
    modal: {
      type: String,
      key: 'modal',
      default: true
    }
  }

}
</script>

<style src="../assets/css/main.css"></style>
