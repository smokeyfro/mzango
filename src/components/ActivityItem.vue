<template>
  <article class="w-full rounded overflow-hidden shadow-lg">
      <div class="p-6">
        <h2 class="font-bold text-xl">
          <g-link :to="`${post.path}`" class="text-black font-bold">{{ post.title }}</g-link>
        </h2>
      </div>
  </article>
</template>

<script>
export default {
  props: ['post'],
}
</script>
