import DefaultLayout from '~/layouts/Default.vue'
import VueYouTubeEmbed from 'vue-youtube-embed'
import VueStorage from 'vuestorage'

// import VueWeatherWidget from 'vue-weather-widget';
// import 'vue-weather-widget/dist/css/vue-weather-widget.css';

export default function (Vue, { head }) {
  Vue.component('Layout', DefaultLayout)
  Vue.use(VueYouTubeEmbed)
  Vue.use(VueStorage)
  // Vue.use(VueWeatherWidget)
  head.htmlAttrs = { lang: 'en', class: 'h-full' }
  head.bodyAttrs = { class: 'antialiased font-sans' }

  // Register a global custom directive called v-focus
  Vue.directive('focus', {
    // When the bound element is inserted into the DOM...
    inserted: function (el) {
      // Focus the element
      el.focus()
    }
  })
  
  head.link.push({
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css?family=Fira+Sans:400,700%7CCardo'
  })
}
