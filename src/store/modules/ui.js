export default {
  namespaced: true,
  // -----------------------------------------------------------------
  state: {
    rtl: false,
    showFlashMsg: false,
    flashMsgData: {},
  },
  // -----------------------------------------------------------------
  getters: {
    rtl: (state) => {
      return state.rtl;
    },
    showFlashMsg: (state) => {
      return state.showFlashMsg;
    },
    flashMsgData: (state) => {
      return state.flashMsgData;
    },
  },
  // -----------------------------------------------------------------
  mutations: {
    // stuff to set user data locally
    setShowFlashMsg(state , payload) {
      state.showFlashMsg = payload;
    },
    setFlashMsgData(state , payload) {
      state.flashMsgData = payload;
    },
  },
  // -----------------------------------------------------------------
  actions: {
    showFlashMsg(ctx, data){
      ctx.commit("setShowFlashMsg", true);
      ctx.commit("setFlashMsgData", data);
      setTimeout(()=>{
      ctx.dispatch("closeFlashMsg");
      },data.duration)
    },
    closeFlashMsg(ctx){
      ctx.commit("setShowFlashMsg", false);
      ctx.commit("setFlashMsgData", {});
     
    },
    setLocale() {
    //   this.$i18n.locale = this.$i18n.locale == "en" ? "ar" : "en";
    //   localStorage.setItem("locale", this.$i18n.locale);
    //   const html = document.querySelector("html");
    //   if (this.$i18n.locale == "ar") {
    //     html.classList.add("rtl");
    //     html.setAttribute("lang", "ar");
    //     html.setAttribute("dir", "rtl");
    //   } else {
    //     html.classList.remove("rtl");
    //     html.setAttribute("lang", "en");
    //     html.setAttribute("dir", "ltr");
    //   }
    },
    
  },
};
