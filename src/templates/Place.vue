<template>
  <Layout>
    <div class="place">
      <div>
        <div>
          <h1 class="title" v-html="$page.post.title" />
          <div class="mb-5 mr-20 text-xl text-gray-800" v-html="$page.post.excerpt" />
          <figure v-if="$page.post.image" class="mb-10 overflow-hidden rounded-lg">
            <g-image :src="$page.post.image" width="1500" height="600" ></g-image>
          </figure>
        </div>
        <div class="flex flex-wrap">
          <div v-if="$page.post.content" class="w-1/2">
            <div v-html="$page.post.content" class="mr-10 content markdown" />
          </div>
          <div class="w-1/2">
            <ClientOnly>
                <template v-if="$page.post.latitude" class="">
                  <h2 class="mb-8 font-sans text-2xl font-bold text-black sm:text-4xl">Current Weather</h2>
                  <vue-weather-widget
                      api-key="408dbe336740c8c807f4a1c1ecf60e98"
                      :latitude="$page.post.latitude"
                      :longitude="$page.post.longitude"
                      title=""
                      language="en"
                      bar-color="#E4104A"
                      units="uk">
                  </vue-weather-widget>
              </template>
            </ClientOnly>
            <template v-if="$page.hosts.edges">
              <h2 class="mt-6 mb-8 font-sans text-2xl font-bold text-black sm:text-4xl">Places to Stay</h2>
              <div class="mt-5 grid">
                <host-card-small class="" v-for="edge in $page.hosts.edges" :key="edge.node.id" :post="edge.node" />
              </div>
            </template>
            <template v-if="$page.attractions.edges" class="mt-20">
              <h2 class="my-6 font-sans text-2xl font-bold text-black sm:text-4xl">Things to Do</h2>
              <div class="mt-5 grid">
                <attraction-card-small v-for="edge in $page.attractions.edges" :key="edge.node.id" :post="edge.node" />
              </div>
            </template>
            <template v-if="$page.posts.edges" class="mt-20">
              <h2 class="my-6 font-sans text-2xl font-bold text-black sm:text-4xl">Related Articles</h2>
              <div class="mt-5 grid">
                <post-card class="" v-for="edge in $page.posts.edges" :key="edge.node.id" :post="edge.node" />
              </div>
            </template>
          </div>
        </div>
      </div>
    </div>
  </Layout>
</template>

<page-query>
query Place ($path: String!, $slug: String) {
  post: place (path: $path) {
    title
    id
    path
    slug
    excerpt
    latitude
    longitude
    content
    sources
  }
  hosts: allHost(filter: { city: { eq: $slug }}) {
    edges {
      node {
        id
        title
        excerpt
        path
        image (width: 80, height: 80, quality: 90)
        province
        place
        district
      }
    }
  }
  attractions: allAttraction(filter: { city: { eq: $slug }}) {
    edges {
      node {
        id
        title
        excerpt
        path
        image (width: 80, height: 80, quality: 90)
        province
        province_slug
        place
        city
      }
    }
  }
  posts: allPost( filter: { tags: { contains: [$slug] } } ) {
    edges {
      node {
        id
        title
        excerpt
        author
        date (format: "DD MMMM YYYY")
        tags
        image (width: 400, height: 400, quality: 90)
        path
      }
    }
  }
}

</page-query>

<script>
import HostCardSmall from '@/components/HostCardSmall'
import AttractionCardSmall from '@/components/AttractionCardSmall'
import PostCard from '@/components/PostCard'
import DefaultLayout from '~/layouts/Default.vue'
import VueYouTubeEmbed from 'vue-youtube-embed'
import VueStorage from 'vuestorage'

export default {
  components: {
    HostCardSmall,
    AttractionCardSmall,
    PostCard,
    VueWeatherWidget: () => import('vue-weather-widget')
  },
  metaInfo () {
    return {
      title: this.$page.post.title,
      bodyAttrs: {
        class: 'place'
      }
    }
  }
}
</script>

<style scoped>
.fe_container{width:100%;font-weight:300;min-width:500px;max-width:1000px;color:#333;margin:0 auto;height:245px}body.hide_daily .fe_container{min-width:200px}.fe_container a{color:#333}.fe_container .fe_title{position:relative;height:32px;border-bottom:2px solid #444}.fe_container .fe_title .fe_location{position:absolute;left:10px;bottom:6px;font-size:18px;font-weight:700}body.hide_daily .fe_container .fe_title .fe_location{font-size:14px;bottom:8px}body.hide_daily .fe_container .fe_title .pre{display:none}.fe_container .fe_title .fe_forecast_link{position:absolute;right:10px;bottom:8px;font-size:14px}.fe_container .fe_forecast{margin-top:14px}.fe_container .fe_currently{float:left;position:relative;width:35%;height:100%;font-size:14px;text-align:center;padding-top:5px}body.hide_daily .fe_container .fe_currently{width:100%}.fe_container #fe_current_icon{display:inline-block;width:80px;height:80px}.fe_container .fe_currently .fe_temp{display:inline-block;position:relative;top:-15px;margin-left:5px;font-size:50px;font-weight:700;text-align:center;line-height:.65em}.fe_container .fe_currently .fe_temp .fe_dir{display:block;position:relative;left:-5px;display:block;font-size:14px;font-weight:400}.fe_dir svg{height:30px;color:#333}.fe_container .fe_currently .fe_summary{font-size:18px;font-weight:700}.fe_container .fe_currently .fe_wind{font-size:14px}.fe_container .fe_daily{float:left;display:table;width:65%;height:100%;font-size:14px;text-align:center}body.hide_daily .fe_container .fe_daily{display:none}.fe_container .fe_daily .fe_day{display:table-cell;text-align:center}.fe_container .fe_daily .fe_day .fe_label{font-weight:700;display:inline-block;width:100%}.fe_container .fe_daily .fe_icon{display:inline-block;width:26px;height:26px;margin-top:2px}.fe_container .fe_daily .fe_day .fe_temp_bar{position:relative;width:20px;margin:18px auto 0;font-size:12px;border-radius:200px}.fe_container .fe_daily .fe_day .fe_high_temp{position:absolute;width:100%;top:-16px;left:2px}.fe_container .fe_daily .fe_day .fe_low_temp{position:absolute;width:100%;bottom:-16px;left:2px}.fe_alert{position:absolute;top:205px;text-align:center;width:100%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.fe_alert a{text-decoration:underline;text-overflow:ellipsis;font-style:italic;font-weight:700;text-decoration:underline;color:#a00}.fe_alert a .fe_icon{font-size:20px}.fe_loading{position:absolute;top:0;left:0;width:100%;height:100%;line-height:240px;text-align:center;font-size:18px;font-weight:700}#fe_loading_icon{position:relative;top:15px;left:-5px}
</style>
