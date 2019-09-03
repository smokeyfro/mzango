<template>
    <header class="p-3 md:p-10 header">
        <div class="relative z-20 flex items-center justify-between flex-wrap">
            <g-link :to="{ name: 'home' }" class="home-link">
                <img 
                    src="../../media/site/logo-pink.png"
                    :alt="settings.site_name" 
                    class="logo"
                    width="130"
                />
            </g-link>
            <nav class="mt-4 md:mt-0 hidden md:block">
            <ul class="flex justify-center font-semibold text-lg">
                <li class="px-4"><g-link class="nav-places text-gray-900 inline-block py-1 px-4" to="/explore">City Guides</g-link></li>
                <li class="px-4"><g-link class="nav-hosts text-gray-900 inline-block py-1 px-4" to="/stay">Places to Stay</g-link></li>
                <li class="px-4"><g-link class="nav-actvities text-gray-900 inline-block py-1 px-4" to="/do">Things to Do</g-link></li>
                <li class="px-4"><g-link class="nav-actvities text-gray-900 inline-block py-1 px-4" to="/experience">Places of Interest</g-link></li>
            </ul>
            </nav>
            <div class="social-links">
                <g-link class="btn bg-transparent hover:bg-black hover:text-white text-black border border-black hover:border-transparent font-bold rounded-full px-5 py-2" to="/mag">Magazine</g-link>
                <!-- <div class="layout-toggle flex">
                    <h1
                    v-text="`Current theme: ${ themeName }`"
                    :style="{color: primary}"
                    />
                    <button
                    @click="switchTheme('pink')"
                    v-text="'pink'"
                    />
                    <button
                    @click="switchTheme('blue')"
                    v-text="'blue'"
                    />
                    <button
                    @click="switchTheme('green')"
                    v-text="'green'"
                    />
                    <button
                    @click="switchTheme('orange')"
                    v-text="'orange'"
                    />
                    <div
                    class="theme-tester"
                    :style="{backgroundColor: primary, borderColor: secondary}"
                    />
                </div> -->
            </div>
        </div>
  </header>
</template>

<script>
// import { mapState, mapMutations } from 'vuex'

export default {
    data() {
        return {
            logo: require("../../media/site/logo-pink.png"),
            settings: require("../../data/theme.json")
        }
    },
    // computed: mapState(['themeName', 'primary', 'secondary']),
    // methods: mapMutations(['switchTheme']),

};
</script>

<style scoped>

</style>
