import DefaultLayout from '~/layouts/Default.vue'
import VueYouTubeEmbed from 'vue-youtube-embed'
import VueStorage from 'vuestorage'
import { VueAutosuggest } from 'vue-autosuggest';

// import VueWeatherWidget from 'vue-weather-widget';
// import 'vue-weather-widget/dist/css/vue-weather-widget.css';

export default function (Vue, { head }) {
  Vue.component('Layout', DefaultLayout)
  Vue.use(VueYouTubeEmbed)
  Vue.use(VueStorage)
  Vue.use(VueAutosuggest)
  // Vue.use(Autocomplete)

  // Vue.use(VueWeatherWidget)
  head.htmlAttrs = { lang: 'en', class: 'h-full' }
  head.bodyAttrs = { class: 'antialiased font-sans' }

  head.link.push({
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css?family=Fira+Sans:400,700%7CCardo'
  })
}
