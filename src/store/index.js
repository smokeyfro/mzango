import Vue from "vue";
import Vuex from "vuex";
import { THEME } from "../constants";
import orange from "../themes/orange";
import blue from "../themes/blue";
import green from "../themes/green";
import pink from "../themes/pink";

const theme = {
  orange,
  blue,
  green,
  pink
};

const defaultTheme = THEME.pink;

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    themeName: theme[defaultTheme].themeName,
    primary: theme[defaultTheme].primary,
    secondary: theme[defaultTheme].secondary
  },
  mutations: {
    switchTheme(state, themeName) {
      state.themeName = theme[themeName].themeName;
      state.primary = theme[themeName].primary;
      state.secondary = theme[themeName].secondary;
    }
  },
  actions: {}
});
