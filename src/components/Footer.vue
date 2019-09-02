<template>
  <footer class="mt-10">
    <!-- <div class="dev-note mb-2 w-auto inline-block pb-2">
      <strong class="text-red-700">Note:</strong>
      Site dev in progress 🙈
    </div> -->
    <div class="flex flex-wrap justify-between">
      <div class="w-full sm:w-1/2 sm:mb-0">
        <span v-html="settings.footer" />
      </div>
      <div class="w-full sm:w-1/2">
        <nav>
          <ul class="flex sm:justify-end -mx-2">
            <li class="px-2">
              <g-link to="/" class="border-b border-transparent hover:border-gray-400 transition-border-color">Home</g-link>
            </li>
            <li class="px-2">
              <a href="/sitemap.xml" class="border-b border-transparent hover:border-gray-400 transition-border-color">Sitemap</a>
            </li>
            <li class="px-2">
              <a href="/feed.xml" class="border-b border-transparent hover:border-gray-400 transition-border-color">RSS</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
    name: 'Footer',
    data() {
        return {
            settings: require("../../data/theme.json")
        }
    }
}
</script>

<style scoped>

</style>
