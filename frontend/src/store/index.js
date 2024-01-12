import { createStore } from 'vuex'

export default createStore({
  state: {
    language: localStorage.getItem("language") || process.env.VUE_APP_I18N_LOCALE || 'en',
    region:  localStorage.getItem("region") || 'US',
    geolocation: null,
    userIP: null,

  },
  getters: {
    getLanguage: (state) => state.language

  },
  mutations: {
      // set region
    setRegion(state, region) {
      state.region = region;
      localStorage.setItem("region", region)
    },
    // set language
    setLanguage(state, language) {
      state.language = language;
      localStorage.setItem("language", language)
    },
  },
  actions: {
  },
  modules: {
  }
})
