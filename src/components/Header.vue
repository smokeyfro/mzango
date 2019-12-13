<template>
    <header class="p-3 md:p-10 header">
        <div class="relative z-20 flex items-center justify-between flex-wrap">
            <div class="branding relative">
                <g-link :to="{ name: 'home' }" class="logo">
                    <img 
                        src="../../media/site/logo-pink.png"
                        :alt="settings.site_name" 
                        class="logo"
                        width="170"
                    />
                    <span></span>
                </g-link>
                <a id="js-colors" class="color-picker">
                    <img src="../../media/site/angle-down.svg" alt="Select a color" width="9">
                </a>
                <div id="js-colors-wrap" class="colors-wrap">
                    <div class="colors">
                    <a href="#color1" class="color1 selected"></a>
                    <a href="#color2" class="color2"></a>
                    <a href="#color3" class="color3"></a>
                    <a href="#color4" class="color4"></a>
                    <a href="#color5" class="color5"></a>
                    </div>
                </div>
            </div>

            <nav class="mt-4 md:mt-0 hidden md:block">
            <ul class="flex justify-center font-semibold text-lg">
                <li class="px-4"><g-link class="nav-places text-gray-900 inline-block py-1 px-4 hover:text-pink-500" to="/explore">City Guides</g-link></li>
                <li class="px-4"><g-link class="nav-hosts text-gray-900 inline-block py-1 px-4 hover:text-pink-500" to="/stay">Accommodation</g-link></li>
                <li class="px-4"><g-link class="nav-actvities text-gray-900 inline-block py-1 px-4 hover:text-pink-500" to="/do">Activities</g-link></li>
                <li class="px-4"><g-link class="nav-actvities text-gray-900 inline-block py-1 px-4 hover:text-pink-500" to="/see">Attractions</g-link></li>
            </ul>
            </nav>
            <div class="social-links">
                <g-link class="btn bg-transparent hover:bg-black hover:text-white text-black border border-black hover:border-transparent font-bold rounded-full px-5 py-2" to="/blog">Blog</g-link>
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

<style>
.reset, .reset li {
  list-style: none;
  margin: 0;
  padding: 0;
}
.branding {
  position: relative;
  display: inline-block;
}
.logo {
  display: block;
  width: 130px;
}
.color-picker {
    position: absolute;
    top: 3px;
    right: -1px;
    content: " ";
    width: 32px;
    height: 32px;
    text-align: center;
    line-height: 29px;
    border-radius: 50%;
    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAyCAYAAAA0j3keAAADIElEQ…rCW9wxeOBNPYXmINP009FGLpQc9+XX/jFf6heUR9KgGM5bg7G+kxk+V10AAAAASUVORK5CYII=);
    background-repeat: no-repeat;
    background-position: 50% 50%;
    background-size: 18px 24px;
}
.color-picker.hover,
.color-picker:hover {
  background-color: #C31041;
  background-image: none;
}
.colors-wrap {
  width: 48px;
  height: 225px;
  padding-top: 50px;
  display: none;
  position: absolute;
  top: 5px;
  right: -5px
}
.colors-wrap:hover,
.color-picker:hover ~ .colors-wrap {
  display: inline-block;
}
.colors {
  background: #f7f7f7;
  padding: 5px;
  border-radius: 20px;
  box-shadow: 1px 1px 1px rgba(0,0,0,0.1);
  display: block;
  width: 53px;
  height: 225px;
}
.colors a {
  display: inline-block;
  width: 40px;
  height: 40px;
  border-radius: 50%;
}
.colors a:hover {
  background-image: url(../../media/site/check.png);
  background-repeat: no-repeat;
  background-position: 50% 50%;
  background-size: 13px 10px;
}
.color1 .logo span,
.color1 .color-picker,
.colors .color1 {
  background-color: #e5104a;
}
.color2 .logo span,
.color2 .color-picker,
.colors .color2 {
  background-color: #58ad58;
}
.color3 .logo span,
.color3 .color-picker,
.colors .color3 {
  background-color: #3394de;
}
.color4 .logo span,
.color4 .color-picker,
.colors .color4 {
  background-color: #ff7b00;
}
.color5 .logo span,
.color5 .color-picker,
.colors .color5 {
  background-color: #9e559e;
}
.color1 a {
  color: #e5104a;
}
.color2 a {
  color: #58ad58;
}
.color3 a {
  color: #3394de;
}
.color4 a {
  color: #ff7b00;
}
.color5 a {
  color: #9e559e;
}
.colors .selected:hover,
.selected {
  background-image: url(../../media/site/star.png);
  background-repeat: no-repeat;
  background-position: 50% 50%;
  background-size: 12px 12px;
  opacity: 1;
}
.color-picker img {
  visibility: hidden;
}
.color-picker.hover img,
.color-picker:hover img {
  visibility: visible;
}
.logo:hover {
  opacity: .9;
}
.logo span {
  display: none;
  position: absolute;
  top: 6px;
  right: -40px;
  content: " ";
  width: 40px;
  height: 39px;
  background-image: url(../../media/site/home.png);
  background-position: 50% 50%;
  background-repeat: no-repeat;
  background-size: 13px 12px;
  border-radius: 50%;
}
.branding .logo:hover span {
  display: block;
}
</style>
