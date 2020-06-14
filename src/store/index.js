import Vue from "vue";
import Vuex from "vuex";
import user from "./modules/user"
import menu from "./modules/menu"
import ui from "./modules/ui"
import review from "./modules/review"
import cart from "./modules/cart"
import progressiveLoader from './plugins/progress'
Vue.use(Vuex);

const state = {
  ajaxCalls: {}
}
const mutations = {
  
  SET_ACTION (state, { action }) {
      state.ajaxCalls = { 
        ...state.ajaxCalls, [action.type]: { 
        ...action, pending: true 
      }
    }
  },
  SET_PENDING (state, { type, moduleName ,pending }) {
    type = moduleName !== null ?  moduleName + type : type;
    state.ajaxCalls[type].pending = false
  },
}

const getters = {
  pendingCalls: state => Object.keys(state.ajaxCalls)
    .filter(x => state.ajaxCalls[x].pending === true).length,
  total: state => Object.keys(state.ajaxCalls).length
}

const modules= {
  user,
  menu,
  review,
  cart,
  ui
}
export default new Vuex.Store({
  state, mutations, getters ,modules,
  plugins: [progressiveLoader]
  
});