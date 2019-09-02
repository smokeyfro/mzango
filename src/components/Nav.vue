<template>
  <div class="relative inline-block md:hidden">
    <button
      to="#"
      class="btn btn-black bg-white hover:bg-black hover:text-white text-black font-semibold py-1 px-4 border border-black rounded-full py-2 px-4 ml-5"
      @click="toggleVisibility"
      @keydown.space.exact.prevent="toggleVisibility"
      @keydown.esc.exact="hideDropdown"
      @keydown.shift.tab="hideDropdown"
      @keydown.up.exact.prevent="startArrowKeys"
      @keydown.down.exact.prevent="startArrowKeys"
    >
    Navigation
    <svg version="1.1" id="down-arrow" class="inline" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
    	 width="10px" height="10px" viewBox="0 0 451.847 451.847" style="enable-background:new 0 0 451.847 451.847;"
    	 xml:space="preserve">
    <g>
    	<path d="M225.923,354.706c-8.098,0-16.195-3.092-22.369-9.263L9.27,151.157c-12.359-12.359-12.359-32.397,0-44.751
    		c12.354-12.354,32.388-12.354,44.748,0l171.905,171.915l171.906-171.909c12.359-12.354,32.391-12.354,44.744,0
    		c12.365,12.354,12.365,32.392,0,44.751L248.292,345.449C242.115,351.621,234.018,354.706,225.923,354.706z"/>
    </g>
    </svg>

    </button>
    <transition name="dropdown-fade">
      <ul v-on-clickaway="hideDropdown" v-if="isVisible" ref="dropdown" class="absolute normal-case font-normal xs:left-0 lg:right-0 bg-white shadow overflow-hidden rounded w-48 border mt-2 py-1 lg:z-20">
        <li>
          <g-link
            to="/about"
            ref="about"
            class="flex items-center px-3 py-3 hover:bg-gray-200"
            @keydown.up.exact.prevent=""
            @keydown.tab.exact="focusNext(false)"
            @keydown.down.exact.prevent="focusNext(true)"
            @keydown.esc.exact="hideDropdown"
          >
            <span class="ml-2">About</span>
          </g-link>
        </li>
        <li>
          <g-link
            to="/work"
            class="flex items-center px-3 py-3 hover:bg-gray-200"
            @keydown.tab.exact="focusNext(false)"
            @keydown.shift.tab="focusPrevious(false)"
            @keydown.up.exact.prevent="focusPrevious(true)"
            @keydown.down.exact.prevent="focusNext(true)"
            @keydown.esc.exact="hideDropdown"
          >
            <span class="ml-2">Work</span>
          </g-link>
        </li>
        <li>
          <g-link
            to="/videos"
            class="flex items-center px-3 py-3 hover:bg-gray-200"
            @keydown.tab.exact="focusNext(false)"
            @keydown.shift.tab="focusPrevious(false)"
            @keydown.up.exact.prevent="focusPrevious(true)"
            @keydown.down.exact.prevent="focusNext(true)"
            @keydown.esc.exact="hideDropdown"
          >
            <span class="ml-2">Videos</span>
          </g-link>
        </li>
        <li>
          <g-link
            to="/themes"
            class="flex items-center px-3 py-3 hover:bg-gray-200"
            @keydown.tab.exact="focusNext(false)"
            @keydown.shift.tab="focusPrevious(false)"
            @keydown.up.exact.prevent="focusPrevious(true)"
            @keydown.down.exact.prevent="focusNext(true)"
            @keydown.esc.exact="hideDropdown"
          >
            <span class="ml-2">Themes</span>
          </g-link>
        </li>
        <li>
          <g-link
            to="/journal"
            class="flex items-center px-3 py-3 hover:bg-gray-200"
            @keydown.shift.tab="focusPrevious(false)"
            @keydown.up.exact.prevent="focusPrevious(true)"
            @keydown.down.exact.prevent=""
            @keydown.tab.exact="hideDropdown"
            @keydown.esc.exact="hideDropdown"
          >
            <span class="ml-2">Journal</span>
          </g-link>
        </li>
      </ul>
    </transition>
  </div>
</template>

<script>
import { mixin as clickaway } from 'vue-clickaway'
export default {
  mixins: [ clickaway ],
  data() {
    return {
      isVisible: false,
      focusedIndex: 0,
    }
  },
  methods: {
    toggleVisibility() {
      this.isVisible = !this.isVisible
    },
    hideDropdown() {
      this.isVisible = false
      this.focusedIndex = 0
    },
    startArrowKeys() {
      if (this.isVisible) {
        // this.$refs.about.focus()
        this.$refs.dropdown.children[0].children[0].focus()
      }
    },
    focusPrevious(isArrowKey) {
      this.focusedIndex = this.focusedIndex - 1
      if (isArrowKey) {
        this.focusItem()
      }
    },
    focusNext(isArrowKey) {
      this.focusedIndex = this.focusedIndex + 1
      if (isArrowKey) {
        this.focusItem()
      }
    },
    focusItem() {
      this.$refs.dropdown.children[this.focusedIndex].children[0].focus()
    }
  }
}
</script>

<style scoped>
  .dropdown-fade-enter-active, .dropdown-fade-leave-active {
    transition: all .1s ease-in-out;
  }
  .dropdown-fade-enter, .dropdown-fade-leave-to {
    opacity: 0;
    transform: translateY(-12px);
  }
</style>
