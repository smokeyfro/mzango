<template>
  <article class="w-full rounded overflow-hidden bg-gray-100 flex justify-left items-center">
    <figure v-if="post.image">
      <g-link :to="`${post.path}`" class="h-20 w-full block overflow-hidden">
      <g-image :src="post.image" class="object-cover h-20 w-20"></g-image>
      </g-link>
    </figure>
    <div class="p-3 pl-5 card-meta text-gray-700">
        <h2 class="text-lg">
            <g-link :to="`${post.path}`" class="text-pink-500">{{ post.title }}</g-link>
        </h2>
        <div class="text-sm truncate">
            <g-link v-if="post.district" :to="districtLink">{{ post.district }}</g-link>
            &middot; 
            <g-link v-if="post.province" :to="provinceLink">{{ post.province }}</g-link>
        </div>
    </div>
  </article>
</template>

<script>
  export default {
    props: ['post'],
    computed: {
      provinceLink () {
        let prefix = '/provinces/'
        let slug = this.post.province_slug

        return `${prefix}${slug}`
      },
      districtLink () {
        let prefix = '/districts/'
        let slug = this.post.district_slug

        return `${prefix}${slug}`
      }
    }
  }
</script>