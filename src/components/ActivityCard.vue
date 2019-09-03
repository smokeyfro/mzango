<template>
<div class="card w-full rounded overflow-hidden shadow-lg relative">
    <figure v-if="post.image">
      <g-link :to="`${post.path}`" class="h-48 w-full block overflow-hidden">
      <g-image :src="post.image" class="object-cover h-48 w-full"></g-image>
      </g-link>
    </figure>
    <div class="p-6 card-meta absolute bottom-0 w-full">
      <h2 class="font-bold text-xl text-white">
        {{ post.title }}
      </h2>
    </div>
</div>
</template>

<script>
  export default {
    props: ['post']
  }
</script>
