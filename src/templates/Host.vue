<template>
  <Layout>
    <div class="host">
      <div class="">
        <h1 class="title" v-html="$page.post.title" />
        <div class="text-gray-900 text-xl -mt-3 mb-5"><span v-if="$page.post.province" v-html="$page.post.province" /> > <span v-if="$page.post.district" v-html="$page.post.district" /> > <span v-if="$page.post.place" v-html="$page.post.place" /></div>
      </div>
      <figure v-if="$page.post.image" class="rounded-lg overflow-hidden mb-10">
        <g-image :src="$page.post.image"></g-image>
      </figure>
      <div class="container markdown">
        <div class="flex flex-wrap">
          <div class="w-1/2">
          <h2>About</h2>
            <div class="text-gray-800 text-xl mb-5 mr-20" v-if="$page.post.excerpt" v-html="$page.post.excerpt" />
            <div class="mr-20 text-lg" v-if="$page.post.content" v-html="$page.post.content" />
          </div>
          <div class="w-1/2">
            <h2>Contact Info</h2>
            <div class="mt-3 mb-2 flex flex-wrap justify-left w-full">
              <span class="mr-6 mb-3 inline-block" v-if="$page.post.telephone"><strong class="block">Telephone </strong>{{$page.post.telephone}} </span>
              <span class="mr-6 mb-3 inline-block" v-if="$page.post.mobile"><strong class="block">Mobile </strong>{{$page.post.mobile}} </span>
              <span class="mr-6 mb-3 inline-block" v-if="$page.post.email"><strong class="block">Email </strong><a :href="mailtoLink" target="_blank" :title="mailtoTitle">Send Message</a></span>
              <div class="mr-6 mb-3 inline-block" v-if="$page.post.website"><strong class="block">Website </strong><a :href="$page.post.website" target="_blank" rel="nofollow noopener" class="button">View Website</a></div>
            </div>
            <div v-if="$page.post.address">
              <strong class="block">Address </strong>
              {{ $page.post.address }}<br>{{ $page.post.place }}, {{ $page.post.district }}, {{ $page.post.province }}
            </div>
          <h2>Accommodation</h2>
          <ul class="list flex flex-wrap justify-left">
            <li class="mr-6 mb-3 inline-block" v-for="item in $page.post.accommodation_types" v-bind:key="item">
              <svg xmlns="http://www.w3.org/2000/svg" class="text-green-700 inline -mt-1 mr-1" width="14" height="14" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round" clip-rule="evenodd" viewBox="0 0 18 18">
                <g fill="none" stroke="#000" stroke-width="2">
                  <path stroke-width="1.6" d="M16.8 8.069v.736c-.002 4.387-3.613 7.995-8 7.995-4.389 0-8-3.611-8-8 0-4.389 3.611-8 8-8 1.122 0 2.231.236 3.256.693"/>
                  <path stroke-width="1.6" d="M16.8 2.405l-8 8.008-2.4-2.4"/>
                </g>
              </svg> {{item}}
            </li>
          </ul>
          <h2>Facilities</h2>
          <ul class="list flex flex-wrap justify-left">
            <li class="mr-6 mb-3 inline-block" v-for="item in $page.post.facilities" v-bind:key="item">
              <svg xmlns="http://www.w3.org/2000/svg" class="text-green-700 inline -mt-1 mr-1" width="14" height="14" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round" clip-rule="evenodd" viewBox="0 0 18 18">
                <g fill="none" stroke="#000" stroke-width="2">
                  <path stroke-width="1.6" d="M16.8 8.069v.736c-.002 4.387-3.613 7.995-8 7.995-4.389 0-8-3.611-8-8 0-4.389 3.611-8 8-8 1.122 0 2.231.236 3.256.693"/>
                  <path stroke-width="1.6" d="M16.8 2.405l-8 8.008-2.4-2.4"/>
                </g>
              </svg> {{item}}
            </li>
          </ul>
          </div>
        </div>
        <div class="hidden"><span v-if="$page.post.longitude" v-html="$page.post.longitude" /> / <span v-if="$page.post.latitude" v-html="$page.post.latitude" /></div> 
      </div>
      <div v-if="$page.post.gallery" class="mt-10 markdown">
        <h2>Photos</h2>
        <ul class="-ml-5">
          <li class="inline-block ml-5 mb-3" v-for="item in $page.post.gallery" v-bind:key="item">
             <g-image :src="item" class="m-0"></g-image>
          </li>
        </ul>
      </div>
    </div>
  </Layout>
</template>

<page-query>
query Host ($path: String!) {
  post: host (path: $path) {
    title
    excerpt
    content
    image(width: 1450, height: 600, quality: 90)
    gallery(width: 310, height: 200, quality: 90)
    place
    province
    district
    longitude
    latitude
    address
    telephone
    mobile
    email
    website
    volunteer_platform
    accepting_volunteers
    twitter
    facebook
    messenger
    instagram
    accommodation_types
    facilities
  }
}
</page-query>

<script>
export default {
  metaInfo () {
    return {
      title: this.$page.post.title,
      bodyAttrs: {
        class: 'host'
      }
    }
  },
  computed: {
    mailtoLink () {
      let prefix = 'mailto:'
      let email = this.$page.post.email

      return `${prefix}${email}?subject=Enquiry via Mzango`
    },
    mailtoTitle () {
      let prefix = 'Send a message to '
      let title = this.$page.post.title

      return `${prefix}${title}`
    }
  }
}
</script>

<style scoped>

</style>
