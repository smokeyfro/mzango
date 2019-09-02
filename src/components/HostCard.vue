<template>
<div class="card w-full rounded overflow-hidden shadow-lg">
    <figure v-if="post.image">
      <g-link :to="`${post.path}`" class="h-48 w-full block overflow-hidden">
      <g-image :src="post.image" class="object-cover h-48 w-full"></g-image>
      </g-link>
    </figure>
    <div class="p-6 card-meta">
      <h2 class="font-bold text-xl">
        <g-link :to="`${post.path}`" class="text-black font-bold">{{ post.title }}</g-link>
      </h2>
      <div>
        <g-link v-if="post.place" :to="placeLink">{{ post.place }}</g-link>
       &nbsp;&middot;&nbsp;
        <g-link v-if="post.district" :to="districtLink">{{ post.district }}</g-link>
      </div>
    </div>
</div>
</template>

<script>
  export default {
    props: ['post'],
    computed: {
      placeLink () {
        let prefix = '/explore/'
        let slug = this.post.city

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
