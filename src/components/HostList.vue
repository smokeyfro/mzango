<template>
  <article>
    <header class="mb-5">
      <h2 class="text-2xl sm:text-2xl leading-tight font-sans mb-1 sm:mb-2">
        <g-link :to="`${post.path}`" class="text-black font-bold link">{{ post.title }}</g-link>
      </h2>
    </header>
    <!-- <p class="leading-normal text-gray-700 text-l md:text-xl" v-html="excerpt(post, 280, ' ...')"></p> -->
  </article>
</template>

<script>
export default {
  props: ['post'],
  methods: {
    excerpt(post, length, clamp) {
      if (post.excerpt) {
        return post.excerpt
      }

      length = length || 280
      clamp = clamp || ' ...'
      let text = post.content.replace(/<pre(.|\n)*?<\/pre>/gm, '').replace(/<[^>]+>/gm, '')

      return text.length > length ? `${ text.slice(0, length)}${clamp}` : text
    }
  }
}
</script>
