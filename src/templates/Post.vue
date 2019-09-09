<template>
  <Layout>
    <div class="journal">
      <div class="container journal-container">

        <div class="journal-header">
          <h1 v-html="$page.post.title" class="journal-title" />
          <figure v-if="$page.post.image" class="rounded-lg overflow-hidden mb-10">
            <g-image :src="$page.post.image"></g-image>
          </figure>
          <div class="journal-meta">
            <div class="journal-author">
              <span class="label">Author</span>
              <span class="author-name" v-text="$page.post.author" />
            </div>
            <div class="journal-date">
              <span class="label">Date</span>
              <div v-text="$page.post.date"/>
            </div>
            <div class="journal-time">
              <span class="label">Time</span>
              <span>{{ $page.post.timeToRead }} min read</span>
            </div>
          </div>          
        </div>

        <JournalContent :content="$page.post.content" />

      </div>
    </div>
  </Layout>
</template>

<page-query>
query Post ($path: String!) {
  post (path: $path) {
    title
    author
    date (format: "D MMMM YYYY")
    timeToRead
    image
    content
  }
}
</page-query>

<script>
import JournalContent from "@/components/JournalContent"

export default {
  components: {
    JournalContent
  },
  metaInfo () {
    return {
      title: this.$page.post.title
    }
  }
}
</script>

<style scoped>

</style>
