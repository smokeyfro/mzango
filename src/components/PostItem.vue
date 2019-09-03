<template>
  <article>
    <header class="mb-5">
      <h2 class="text-3xl sm:text-4xl leading-tight font-sans mb-1 sm:mb-2">
        <g-link :to="`${post.path}`" class="text-black font-bold link">{{ post.title }}</g-link>
      </h2>
    </header>
  </article>
</template>

<script>
export default {
  props: ['post']
}
</script>
