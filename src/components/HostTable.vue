<template>
  <tr>
    <td class="px-4 py-2"><g-link :to="`${post.path}`">{{ post.title }}</g-link></td>
    <td class="px-4 py-2">{{ post.place }}</td>
    <td class="px-4 py-2">{{ post.district }}</td>
    <td class="px-4 py-2">{{ post.province }}</td>
    <td class="px-4 py-2"><span v-if="post.longitude">{{ post.longitude }}</span> / <span v-if="post.longitude">{{ post.latitude }}</span></td>
    <td class="px-4 py-2"><span v-if="post.website">{{ post.website }}</span></td>
  </tr>
</template>

<script>
export default {
  props: ['post']
}
</script>
