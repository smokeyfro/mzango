<template>
    <div class="w-1/2 pr-4">
      <form>
        <input v-model="placeSearch" type="text" class="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-full py-4 px-2 block w-full appearance-none leading-normal" placeholder="Type in the name of a South African town or city">
      </form>
    </div>
</template>

<script>
export default {
  name: 'SearchForm',
};
</script>
