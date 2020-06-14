import i18n from "../../i18n";

let locale = localStorage.getItem("locale");
let rtl = false;
if (locale) {
  rtl = locale == "ar" ? true : false;
} else {
  rtl = false;
}
export default {
  namespaced: true,
  // -----------------------------------------------------------------
  state: {
    rtl,
    showFlashMsg: false,
    showModal: false,
    flashMsgData: {},
  },
  // -----------------------------------------------------------------
  getters: {
    rtl: (state) => {
      return state.rtl;
    },
    showModal: (state) => {
      return state.showModal;
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
    setShowFlashMsg(state, payload) {
      state.showFlashMsg = payload;
    },
    setShowModal(state, payload) {
      state.showModal = payload;
    },
    setFlashMsgData(state, payload) {
      state.flashMsgData = payload;
    },
    setRtl(state, payload) {
      state.rtl = payload;
    },
    TOGGLE_LOCALE_SUCCESS(state) {},
  },
  // -----------------------------------------------------------------
  actions: {
    showFlashMsg(ctx, data) {
      ctx.commit("setShowFlashMsg", true);
      ctx.commit("setFlashMsgData", data);
      setTimeout(() => {
        ctx.dispatch("closeFlashMsg");
      }, data.duration);
    },
    closeFlashMsg(ctx) {
      ctx.commit("setShowFlashMsg", false);
      ctx.commit("setFlashMsgData", {});
    },
    showModal(ctx , payload) {
      ctx.commit("setShowModal", true); 
      payload.modal.show(payload.name)
      // modal.payload.show(payload.name)
    },
    closeModal(ctx , payload) {
      ctx.commit("setShowModal", false);
      payload.modal.hide(payload.name)
      // modal.payload.show(payload.name)
    },
    initLocale(ctx , payload) {
      locale = localStorage.getItem("locale")
      if (locale) {
        ctx.dispatch('setLocale' , {rtl :locale == 'ar' , i18n:payload.i18n})
      } else {
        ctx.dispatch("setLocale", { rtl: process.env.VUE_APP_I18N_LOCALE == 'ar', i18n:payload.i18n });
      }
    },
    async toggleLocale(ctx, payload) {
      ctx.dispatch('setLocale' , {rtl :!ctx.getters.rtl , i18n:payload.i18n  })
    },
    setLocale(ctx , payload) {
      const html = document.querySelector("html");
      ctx.commit("setRtl", payload.rtl);
      let params = payload.rtl ? {dir : 'rtl' , locale :'ar'} : {dir:'ltr' , locale: 'en'}
      html.setAttribute("dir", params.dir);
      params.dir == 'rtl' ? html.classList.add('rtl') :html.classList.remove('rtl');
      payload.i18n.locale = params.locale;
      localStorage.setItem("locale", params.locale);
    },
  },
};
