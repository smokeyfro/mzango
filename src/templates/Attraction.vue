<template>
  <Layout>
    <article>
      <h1 class="mb-5 font-sans text-4xl font-bold sm:text-5xl md:text-6xl">{{ $page.post.title }}</h1>
      <div class="mr-10 text-3xl leading-normal text-gray-700 markdown" v-html="$page.post.excerpt" />
      <figure v-if="$page.post.image" class="w-full mt-10 overflow-hidden rounded-lg">
        <g-image :src="$page.post.image" class="object-cover w-full"></g-image>
      </figure>
      <div class="mt-10 text-xl leading-normal text-gray-700 markdown" v-html="$page.post.content" />
    </article>
  </Layout>
</template>

<script>
export default {
  metaInfo () {
    return {
      title: `${this.$page.post.title}`
    }
  }
}
</script>

<page-query>
query Attraction ($path: String) {
  post: attraction(path: $path) {
    title
    slug
    content
    excerpt
    image
  }
}
</page-query>
