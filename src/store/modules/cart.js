import http from "../../axios/index";
import ui from "./ui";

export default {
  namespaced: true,
  // -----------------------------------------------------------------
  state: {
    cart: [],
    cartLoading: false,
    itemLoading: false,
    item: {},
  },
  // -----------------------------------------------------------------
  getters: {
    cart: (state) => {
      return state.cart;
    },
    cartLoading: (state) => {
      return state.cartLoading;
    },
    itemLoading: (state) => {
      return state.itemLoading;
    },
    item: (state) => {
      return state.item;
    },
    isOptionsModal: (state) => {
      return state.item !== {};
    },
  },
  // -----------------------------------------------------------------
  mutations: {
    // stuff to set user data locally
    setCart(state, payload) {
      state.cart = payload;
    },
    setItem(state, payload) {
      console.log(payload)
      state.item = payload;
    },
    setCartLoading(state, payload) {
      state.cartLoading = payload;
    },
    setItemLoading(state, payload) {
      state.itemLoading = payload;
    },
    GET_CART_SUCCESS(state) {},
  },
  // -----------------------------------------------------------------
  actions: {
    async getCart(ctx) {
      ctx.commit("setCartLoading", true);
      await http.get("cart").then((response) => {
        ctx.commit("setCart", response.data);
        ctx.commit("GET_CART_SUCCESS");
      });
      ctx.commit("setCartLoading", false);
    },
    getItem(ctx, item) {
      new Promise((resolve, reject) => {

      
      if (item.has_options > 0) {
        ctx.commit("setItemLoading", true);
        console.log(item);
        http.get(`items/${item.id}`).then((response) => {
          ctx.commit("setItem", {data: response.data , item});
          ctx.commit("setItemLoading", false);
          resolve(response.data)
        }).catch(e=>{
          reject(e);
        });
      } else {
        ctx.dispatch("setCartItem", { item: item.id }).then(() => {
          ctx.dispatch("getCart");
          resolve()
        });
      }

    })
    },
    setCartItem(ctx, data) {
      return new Promise((resolve, reject) => {
        http
          .post("cart/add", data)
          .then((response) => {
            console.log(response);
            resolve(response);
          })
          .catch((e) => {
            console.log(e);
            reject(e);
          });
      });
    },

    removeCartItem(ctx, id) {
      return new Promise((resolve, reject) => {
        http
          .delete(`cart/remove/${id}`)
          .then((response) => {
            // ctx.dispatch("getCart");
            resolve(response);
          })
          .catch((e) => {
            console.log(e);
            reject(e);
          });
      });
    },
    decreaseCartItem(ctx, id) {
      return new Promise((resolve, reject) => {
        http
          .delete(`cart/decrease/${id}`)
          .then((response) => {
            resolve(response);
          })
          .catch((e) => {
            console.log(e);
            reject(e);
          });
      });
    },
  },
};
