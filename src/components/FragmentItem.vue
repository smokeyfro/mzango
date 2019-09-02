<template>
  <article class="mt-10">
    <header class="mb-5">
      <h2 class="text-3xl sm:text-4xl leading-tight font-sans mb-1 sm:mb-2 text-black font-bold">
        {{ post.title }}
      </h2>
    </header>
    <p class="leading-normal text-gray-700 text-xl" v-html="post.excerpt"></p>
  </article>
</template>

<script>
export default {
  props: ['post']
}
</script>
