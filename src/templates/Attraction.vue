<template>
  <Layout>
    <article>
      <h1 class="text-4xl sm:text-5xl md:text-6xl font-sans font-bold mb-5">{{ $page.post.title }}</h1>
      <div class="flex">
        <div class="">
          <div class="markdown text-3xl mr-10 leading-normal text-gray-700" v-html="$page.post.excerpt" />
        </div>
        <div class="markdown text-xl leading-normal text-gray-700" v-html="$page.post.content" />
      </div>
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
  }
}
</page-query>
