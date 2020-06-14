
import axios from "axios";
let isLoggedIn = localStorage.getItem('token') ? true : false
export default {
  namespaced: true,
  // -----------------------------------------------------------------
  state: {
    isLoggedIn : isLoggedIn,
    token: localStorage.getItem('token') || '',
    user: {},
    loading: false,
    addresses: [{}],
    orders: [{}],
  },
  // -----------------------------------------------------------------
  getters: {
    isLoggedIn: (state) => {
      return state.isLoggedIn;
    },

    user: (state) => {
      return state.user;
    },

    addresses: (state) => {
      return state.addresses;
    },

    orders: (state) => {
      return state.orders;
    },
  },
  // -----------------------------------------------------------------
  mutations: {
    setLoading(state , payload) {
      state.loading = payload;
    },

    setIsLoggedIn(state , payload) {
        state.isLoggedIn = payload;
        // isLoggedIn = payload
      },
    setToken(state, payload) {
      state.token = payload;
    },
  },
  // -----------------------------------------------------------------
  actions: {
    create: (context, userData) => {
      // stuff to create a new user on the backend : CRUD CREATE ACTION
    },
    read: (context) => {
      // stuff to retrieve user data from the backend : CRUD READ ACTION
    },
    update: (context, userData) => {
      // stuff to update user data to the backend : CRUD UPDATE ACTION
    },
    delete: (context) => {
      // stuff to erase user on the bockend : CRUD DELETE ACTION
    },
    login: (ctx, form) => {
      return new Promise((resolve, reject) => {
        form
        .post("login")
        .then( async (data) => {
          ctx.commit("setLoading", true);
          let token = data['access_token']
          localStorage.setItem("token", token);
          ctx.commit("setToken", token);
          ctx.commit("setIsLoggedIn", true);
          ctx.commit("setLoading", false);
          resolve(data);
        })
        .catch(e => {
          reject(e);
        })
        
        

      })
      
    },
   
    logout: (ctx) => {
      ctx.commit("setLoading", true);
      localStorage.removeItem("token");
      delete axios.defaults.headers.common['Authorization']
      ctx.commit("setIsLoggedIn", false);
      ctx.commit("setLoading", false);
      // stuff to logout the logged in user : LOGOUT ACTION
    },
  },
};
