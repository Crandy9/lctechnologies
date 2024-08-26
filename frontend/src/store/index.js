import { createStore } from 'vuex'

export default createStore({
  state: {
    language: localStorage.getItem("language") || process.env.VUE_APP_I18N_LOCALE || 'en',
    region:  localStorage.getItem("region") || 'US',
    isDarkTheme: true,
    theme_change: "darkTheme",
    theme: '',
    bgColorDark: 'rgb(22 32 47)',
    bgColorLight: 'rgb(219 248 253)',
    hamburgerBgColor: '#f2fafb',
    scrollingToEcommerce: false,
    scrollingToWebApp: false,
    scrollingToContact: false,
    scrollingToOffering: false,
    scrollingToGenSoft: false,
    // scrollingToPricing: false

  },
  getters: {
    getLanguage: (state) => state.language

  },
  mutations: {

    scrollTo(state, section) {

      if (section === "ecommerce") {
        state.scrollingToEcommerce = !state.scrollingToEcommerce;
      }
      else if (section === "webapp") {
        state.scrollingToWebApp = !state.scrollingToWebApp;
      }
      else if (section === "contact") {
        state.scrollingToContact = !state.scrollingToContact;
      }
      else if (section === "offering") {
        state.scrollingToOffering = !state.scrollingToOffering;
      }
      else if (section === "gensoft") {
        state.scrollingToGenSoft = !state.scrollingToGenSoft;
      }
      // else if (section === "pricing") {
      //   state.scrollingToPricing = !state.scrollingToPricing;
      // }      

    },

    toggleTheme(state) {

        state.isDarkTheme = !state.isDarkTheme;
        document.body.style.backgroundColor = state.isDarkTheme ? state.bgColorDark : state.bgColorLight;
        state.hamburgerBgColor = state.isDarkTheme ? state.bgColorDark : state.bgColorLight;
        state.theme_change = state.isDarkTheme ? "darkTheme" : "lightTheme";
  
        localStorage.setItem("theme", state.theme_change);

    },

    setTheme(state, theme) {

      if (theme === 'darkTheme') {
        state.isDarkTheme = true
        document.body.style.backgroundColor = state.bgColorDark
        state.hamburgerBgColor = state.isDarkTheme ? state.bgColorDark : state.bgColorLight;
        state.theme_change = "darkTheme"
        localStorage.setItem("theme", state.theme_change);
      }

      else if (theme === 'lightTheme') {
        state.isDarkTheme = false
        document.body.style.backgroundColor = state.bgColorLight
        state.hamburgerBgColor = state.isDarkTheme ? state.bgColorDark : state.bgColorLight;
        state.theme_change = "lightTheme"
        localStorage.setItem("theme", state.theme_change);
      }

    },

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
