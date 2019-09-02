<template>
  <article class="w-full rounded overflow-hidden shadow-lg">
      <div class="p-6">
        <h2 class="font-bold text-xl">
          <g-link :to="`${post.path}`" class="text-black font-bold">{{ post.title }}</g-link>
        </h2>
        {{ post.place.display }}, {{ post.province.display }}
      </div>
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

      length = length || 180
      clamp = clamp || ' ...'
      let text = post.content.replace(/<pre(.|\n)*?<\/pre>/gm, '').replace(/<[^>]+>/gm, '')

      return text.length > length ? `${ text.slice(0, length)}${clamp}` : text
    }
  }
}
</script>
