<template>
  <header>
    <div>
      <div class="max-w-xl md:max-w-3xl xl:max-w-4xl mx-auto">
        <h1 class="text-4xl sm:text-5xl md:text-6xl font-sans font-bold">{{ post.title }}</h1>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  props: ['post'],
  methods: {
    titleCase(str) {
      return str.replace('-', ' ')
                .split(' ')
                .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
                .join(' ')
    }
  }
}
</script>
