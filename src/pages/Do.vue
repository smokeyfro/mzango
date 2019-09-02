<template>
  <Layout class="bg-white">
    <div>
      <header>
        <h1 class="text-4xl sm:text-5xl md:text-6xl font-sans font-bold mb-1">Things to Do</h1>
        <p class="text-grey-dark text-lg sm:text-3xl">Discover cool things to do.</p>
      </header>
      <section class="mt-10 grid md:3-cols lg:4-cols xl:5-cols">
        <activity-item v-for="edge in $page.posts.edges" :key="edge.node.id" :post="edge.node" />
      </section>
      <pagination :info="$page.posts.pageInfo" v-if="$page.posts.pageInfo.totalPages > 1" />
    </div>
  </Layout>
</template>

<script>
import config from '~/.temp/config.js'
import ActivityItem from '@/components/ActivityItem'
import Pagination from '@/components/Pagination'

export default {
  components: {
    ActivityItem,
    Pagination
  },
}
</script>

<page-query>
  query Activities ($page: Int) {
    posts: allActivity(page: $page, perPage: 12) @paginate {
      totalCount
      pageInfo {
        totalPages
        currentPage
      }
      edges {
        node {
          id
          title
          excerpt
          path
        }
      }
    }
  }
</page-query>
