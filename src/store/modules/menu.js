import http from "../../axios/index"

export default {
    namespaced: true,
    // -----------------------------------------------------------------
    state: {
     categories:[],
     menus:[],
     selectedCategory:null,
     menuLoading:false,
     menusLoading:false,
    },
    // -----------------------------------------------------------------
    getters: {
      categories: (state) => {
        return state.categories;
      },
      menus: (state) => {
        return state.menus;
      },
      itemsLoading: (state) => {
        return state.itemsLoading;
      },
      menuLoading: (state) => {
        return state.menuLoading;
      },
      menusLoading: (state) => {
        return state.menusLoading;
      },
      selectedCategory: (state) => {
        return state.selectedCategory;
      },
    },
    // -----------------------------------------------------------------
    mutations: {
      // stuff to set user data locally
      setCategories(state , payload) {
        state.categories = payload;
      },
      setMenus(state , payload) {
        state.menus = payload;
      },
      setMenuLoading(state , payload) {
        state.menuLoading = payload;
      },
      setMenusLoading(state , payload) {
        state.menusLoading = payload;
      },
      setSelectedCategory(state , payload) {
        state.selectedCategory = payload;
      },
      GET_MENU_SUCCESS(state){}
      
    },
    // -----------------------------------------------------------------
    actions: {
      getMenu(ctx){
        ctx.commit("setMenuLoading", true);
        http.get("menu/1").then(response => {
          ctx.commit("setCategories", response.data.categories);
          ctx.commit("GET_MENU_SUCCESS", response.data.categories);
        })
        ctx.commit("setMenuLoading", false);
      },
      getMenus(ctx){
        ctx.commit("setMenusLoading", true);
        http.get("menus").then(response => {
          ctx.commit("setMenus", response.data);
        })
        ctx.commit("setMenusLoading", false);
      },
    setSelectedCategory(ctx , id){
        ctx.commit("setItemsLoading", true);
        ctx.commit("setSelectedCategory", id);
        ctx.commit("setItemsLoading", false);
      },
    },
  };
  