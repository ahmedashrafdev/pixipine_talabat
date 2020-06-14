import http from "../../axios/index"

export default {
    namespaced: true,
    // -----------------------------------------------------------------
    state: {
     reviews:[],
     reviewsLoading:false,
    },
    // -----------------------------------------------------------------
    getters: {
      reviews: (state) => {
        return state.reviews;
      },
      reviewsLoading: (state) => {
        return state.reviewsLoading;
      },
    },
    // -----------------------------------------------------------------
    mutations: {
      // stuff to set user data locally
      setReviews(state , payload) {
        state.reviews = payload;
      },
      setReviewsLoading(state , payload) {
        state.reviewsLoading = payload;
      },
    },
    // -----------------------------------------------------------------
    actions: {
      getReviews(ctx){
        ctx.commit("setReviewsLoading", true);
        http.get("reviews").then(response => {
          ctx.commit("setReviews", response.data);
          console.log( response.data);
        })
        ctx.commit("setReviewsLoading", false);
      },
    setSelectedCategory(ctx , id){
        ctx.commit("setItemsLoading", true);
        ctx.commit("setSelectedCategory", id);
        ctx.commit("setItemsLoading", false);
      },
    },
  };
  