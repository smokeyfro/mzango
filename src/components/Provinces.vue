<template>
  <section class="">
    <div class="w-1/4 flex-initial p-2" v-for="item in $page.posts.edges" :key="edge.node.id" :post="edge.node">{{ edge.node.title }}</div>
    <div class="w-1/4 flex-initial p-2" v-for="item in $page.places.edges" :key="edge.node.id" :post="edge.node">{{ edge.node.title }}</div>
  </section>
</template>
query ($id: String!, $layout: String, $section: String)  {
  siteContent(id: $id) { ... }
  allSiteContent (filter: { layout: { eq: $layout }, section: { eq: $section } }) { ... }
}
<static-query>
  query Provinces($id: String!, $province: String) {
    posts: allCockpitProvince {
      edges {
        node {
          id
          title
          path
        }
      }
    }
    places: allCockpitPlace (filter: { province: { eq: $province } }) {
      title
    }
  }
</static-query>

<script>

export default {
  name: 'Provinces',
}
</script>
