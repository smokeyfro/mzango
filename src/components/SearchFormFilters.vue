<template>
    <div class="search-wrapper w-1/2 pr-4">
      <form v-on:submit="getfilteredData">
        <input type="text" class="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal" placeholder="Type in the name of a South African town or city" v-model="search" v-on:keyup="getfilteredData">
      </form>
      <div id="checkboxes">
        <span v-for="(province) in provinces" :key="province.id" class="form-check display-inline">
          <input class="form-check-input" type="checkbox" v-model="province.checked" v-on:change="getfilteredData">
          <label class="form-check-label">
          {{ province.value }}
          </label>
        </span>
      </div>
    </div>
</template>

<script>
import QPlaces from '@/queries/QPlaces';
import QProvinces from '@/queries/QProvinces';

export default {
  name: 'SearchForm',
  components: {
    QPlaces,
    QProvinces
  },
  computed: {
    selectedFilters: function() {
      let filters = [];
      let checkedFiters = provinces.filter(obj => obj.checked);
      checkedFiters.forEach(element => {
        filters.push(element.value);
      });
      return filters;
    }
  },
  data() {
    return {
      filteredData: [],
      search: '',
      places: QPlaces,
    };
  },
  methods: {
    getfilteredData: function() {
      this.filteredData = this.places;
      let filteredDataByfilters = [];
      let filteredDataBySearch = [];
      // first check if filters where selected
      if (this.selectedFilters.length > 0) {
        filteredDataByfilters= this.filteredData.filter(obj => this.selectedFilters.every(val => obj.province.indexOf(val) >= 0));
        this.filteredData = filteredDataByfilters;
      }
      // then filter according to keyword, for now this only affects the name attribute of each data
      if (this.search !== '') {
        filteredDataBySearch = this.filteredData.filter(obj => obj.name.indexOf(this.search.toLowerCase()) >= 0);
        this.filteredData = filteredDataBySearch;
      }
    }
  },
  mounted() {
    this.getfilteredData();
  }
};
</script>
