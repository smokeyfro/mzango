<template>
<div class="card w-full rounded overflow-hidden shadow-lg">
    <figure v-if="post.image">
      <g-link :to="`${post.path}`" class="h-48 w-full block overflow-hidden">
      <g-image :src="post.image" class="object-cover h-48 w-full"></g-image>
      </g-link>
    </figure>
    <div class="p-6 card-meta overflow-hidden">
      <h2 class="font-bold text-lg truncate">
        <g-link :to="`${post.path}`" class="text-black font-bold">{{ post.title }}</g-link>
      </h2>
        <div class="text-sm text-gray-800">{{ post.author }} &middot; {{ post.date }} </div>
    </div>
</div>
</template>

<script>
  export default {
    props: ['post']
  }
</script>
