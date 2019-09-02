<template>
  <header>
    <div class="pt-12">
      <div class="max-w-xl md:max-w-3xl xl:max-w-4xl mx-auto text-center px-6">
        <h1 class="text-4xl sm:text-5xl md:text-6xl font-sans font-bold mb-1">{{ post.title }}</h1>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  props: ['post']
}
</script>
