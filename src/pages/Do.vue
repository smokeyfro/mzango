<template>
  <Layout class="activities">
    <div>
      <header>
        <h1 class="mb-1 font-sans text-4xl font-bold sm:text-5xl md:text-6xl">Things to Do</h1>
        <p class="text-lg text-grey-dark sm:text-3xl">Whether you're a surfer, birder, adrenaline junkie, history buff, wine connoisseur or foodie - South Africa has it all. Plan your ulitimate trip using one of the starters below.</p>
      </header>
      <section class="mt-10 grid md:3-cols lg:4-cols xl:5-cols">
        <activity-card v-for="edge in $page.posts.edges" :key="edge.node.id" :post="edge.node" />
      </section>
      <pagination :info="$page.posts.pageInfo" v-if="$page.posts.pageInfo.totalPages > 1" />
    </div>
  </Layout>
</template>

<script>
import ActivityCard from '@/components/ActivityCard'
import Pagination from '@/components/Pagination'

export default {
  components: {
    ActivityCard,
    Pagination
  },
}
</script>

<page-query>
  query Activities ($page: Int) {
    posts: allActivity(page: $page, perPage: 50) @paginate {
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
          image
        }
      }
    }
  }
</page-query>
