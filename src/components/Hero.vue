<template>
    <div class="hero">
        <h1 class="hero-title" v-html="settings.hero_title" />
        <h2 class="hero-subtitle" v-html="settings.hero_subtitle" />
    </div>
</template>

<script>
export default {
  data() {
    return {
      settings: require("../../data/theme.json")
    }
  }
}
</script>

<style>

</style>
