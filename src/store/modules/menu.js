import Axios from "axios";

export default {
    namespaced: true,
    // -----------------------------------------------------------------
    state: {
     categories:[],
     selectedCategory:null,
     categoriesLoading:false,
     itemsLoading:false
    },
    // -----------------------------------------------------------------
    getters: {
      categories: (state) => {
        return state.categories;
      },
      itemsLoading: (state) => {
        return state.itemsLoading;
      },
      categoriesLoading: (state) => {
        return state.categoriesLoading;
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
      setCategoriesLoading(state , payload) {
        state.categoriesLoading = payload;
      },
      setItemsLoading(state , payload) {
        state.itemsLoading = payload;
      },
      setSelectedCategory(state , payload) {
        state.selectedCategory = payload;
      },
      
    },
    // -----------------------------------------------------------------
    actions: {
      getCategories(ctx){
        ctx.commit("setCategoriesLoading", true);
        Axios.get("http://127.0.0.1:8000/api/categories")
        .then(response => {
            console.log(response.data)
            ctx.commit("setCategories", response.data);
            })
            ctx.commit("setCategoriesLoading", false)
            // setTimeout(()=>{
            //     ctx.commit("setCategoriesLoading", false)
            //     },4000)
           
            
            
        },
    setSelectedCategory(ctx , slug){
        ctx.commit("setItemsLoading", true);
        console.log(slug)
        ctx.commit("setSelectedCategory", slug);
        // Axios.get("http://127.0.0.1:8000/api/categories")
        //     .then(response => {
        //         console.log(response.data)
        //         ctx.commit("setCategories", response.data);
        //     })
        ctx.commit("setItemsLoading", false);

        
      },
      
      
    },
  };
  