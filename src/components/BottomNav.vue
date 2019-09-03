<template>
  <div class="bottom bg-gray-200 mt-20 px-20 rounded-lg border-t-8 border-pink-500 rounded-t-none">
    <div class="flex justify-between py-20">
      <div class="w-1/1 xl:w-1/3">
        <h2 class="text-black font-semibold leading-wide mb-3 text-3xl">Provinces</h2>
        <ul class="flex flex-wrap">
          <li v-for="province in $static.provinces.edges" :key="province.node.id" class="w-1/2 py-1"><g-link :to="province.node.path">{{ province.node.title }}</g-link></li>
          <li><g-link to="/provinces" class="font-bold text-black text-md inline-block mt-1">View on map &xrarr;</g-link></li>
        </ul>
      </div>
      <div class="w-1/1 xl:w-1/3 mr-5">
        <h2 class="text-black font-semibold leading-wide mb-3 text-3xl">Districts</h2>
        <ul class="flex flex-wrap">
          <li v-for="district in $static.districts.edges" :key="district.node.id" class="w-1/2 py-1"><g-link :to="district.node.path">{{ district.node.title }}</g-link></li>
          <li><g-link to="/districts" class="font-bold text-black text-md inline-block mt-1">View all &xrarr;</g-link></li>
        </ul>
      </div>
      <div class="w-1/1 xl:w-1/3 -mr-16">
        <h2 class="text-black font-semibold leading-wide mb-3 text-3xl">Activities</h2>
        <ul class="flex flex-wrap">
          <li v-for="activity in $static.activities.edges" :key="activity.node.id" class="w-1/2 py-1"><g-link :to="activity.node.path">{{ activity.node.title }}</g-link></li>
          <li><g-link to="/do" class="font-bold text-black text-md inline-block mt-1">View all &xrarr;</g-link></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BottomNav'
}
</script>

<static-query>
query BottomNav {
  provinces: allProvince { 
    edges { 
      node { 
        title
        path
        id
      } 
    }
  }
  districts: allDistrict (filter: { show_in_nav: { eq: true }}, limit: 9, sortBy: "title", order: ASC) { 
    edges { 
      node { 
        title
        path
        id
      } 
    } 
  }
  activities: allActivity ( limit: 9, sortBy: "title", order: ASC) { 
    edges { 
      node { 
        title
        path
        id 
      } 
    } 
  }
}
</static-query>
