import Vue from "vue";
import Vuex from "vuex";
import user from "./modules/user"
import menu from "./modules/menu"
import ui from "./modules/ui"

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    user,
    menu,
    ui
  }
});