<template>
  <Layout>
    <article>
      <h1 class="text-4xl sm:text-5xl md:text-6xl font-sans font-bold mb-5">{{ $page.post.title }}</h1>
      <div class="markdown text-3xl mr-10 leading-normal text-gray-700" v-html="$page.post.excerpt" />
      <figure v-if="$page.post.image" class="rounded-lg overflow-hidden mt-10 w-full">
        <g-image :src="$page.post.image" class="object-cover w-full"></g-image>
      </figure>
      <div class="markdown text-xl leading-normal text-gray-700 mt-10" v-html="$page.post.content" />
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
    image (width: 1500, height: 600, quality: 90)
  }
}
</page-query>
