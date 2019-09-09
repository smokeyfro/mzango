<template>
  <div>
    <h2 class="font-bold text-lg">
      <g-link :to="`${post.path}`" class="text-black font-bold">{{ post.title }}</g-link>
    </h2>
  </div>
</template>


<script>
export default {
  props: ['post']
}
</script>
