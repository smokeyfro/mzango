<template>
  <div class="bg-gray-100 mt-20 px-20 rounded-lg border-t-8 border-red-600 rounded-t-none">
    <div class="flex justify-between py-20">
      <div class="w-1/1 xl:w-1/3">
        <h2 class="text-red-600 font-semibold leading-wide mb-3 text-xl">Provinces</h2>
        <ul class="flex flex-wrap">
          <li v-for="province in $static.provinces.edges" :key="province.node.id" class="w-1/2 py-1"><g-link :to="province.node.path">{{ province.node.title }}</g-link></li>
        </ul>
      </div>
      <div class="w-1/1 xl:w-1/3 mr-5">
        <h2 class="text-red-600 font-semibold leading-wide mb-3 text-xl">Districts</h2>
        <ul class="flex flex-wrap">
          <li v-for="district in $static.districts.edges" :key="district.node.id" class="w-1/2 py-1"><g-link :to="district.node.path">{{ district.node.title }}</g-link></li>
        </ul>
      </div>
      <div class="w-1/1 xl:w-1/3 -mr-16">
        <h2 class="text-red-600 font-semibold leading-wide mb-3 text-xl">Activities</h2>
        <ul class="flex flex-wrap">
          <li v-for="activity in $static.activities.edges" :key="activity.node.id" class="w-1/2 py-1"><g-link :to="activity.node.path">{{ activity.node.title }}</g-link></li>
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
  districts: allDistrict { 
    edges { 
      node { 
        title
        path
        id
      } 
    } 
  }
  activities: allActivity { 
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
