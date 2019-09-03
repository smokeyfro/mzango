<template>
  <article class="w-full rounded overflow-hidden shadow-lg flex justify-left items-center">
    <figure v-if="post.image">
      <g-link :to="`${post.path}`" class="h-20 w-full block overflow-hidden">
      <g-image :src="post.image" class="object-cover h-20 w-20"></g-image>
      </g-link>
    </figure>
    <div class="p-3 pl-5 card-meta text-gray-700">
        <h2 class="font-bold text-lg">
            <g-link :to="`${post.path}`" class="text-black font-bold">{{ post.title }}</g-link>
        </h2>
    </div>
  </article>
</template>

<script>
  export default {
    props: ['post']
  }
</script>