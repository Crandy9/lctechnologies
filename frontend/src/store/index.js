import { createStore } from 'vuex'

export default createStore({
  state: {
    language: localStorage.getItem("language") || process.env.VUE_APP_I18N_LOCALE || 'en',
    region:  localStorage.getItem("region") || 'US',
    geolocation: null,
    userIP: null,
    isDarkTheme: false,
    theme_change: "lightTheme",
    theme: '',
    bgColorDark: 'rgb(22 32 47)',
    bgColorLight: '#f2fafb',
    scrollingToEcommerce: false,
    scrollingToWebApp: false,
    scrollingToContact: false,



  },
  getters: {
    getLanguage: (state) => state.language

  },
  mutations: {

    scrollTo(state, section) {

      if (section === "ecommerce") {
        state.scrollingToEcommerce = true;
      }
      else if (section === "webapp") {
        state.scrollingToWebApp = true;
      }
      else if (section === "contact") {
        state.scrollingToContact = true;
      }
    },

    toggleTheme(state) {

        state.isDarkTheme = !state.isDarkTheme;
        document.body.style.backgroundColor = state.isDarkTheme ? state.bgColorDark : state.bgColorLight;
        state.theme_change = state.isDarkTheme ? "darkTheme" : "lightTheme";
  
        localStorage.setItem("theme", state.theme_change);

    },

    setTheme(state, theme) {

      if (theme === 'darkTheme') {
        state.isDarkTheme = true
        document.body.style.backgroundColor = state.bgColorDark
        state.theme_change = "darkTheme"
        localStorage.setItem("theme", state.theme_change);
      }

      else if (theme === 'lightTheme') {
        state.isDarkTheme = false
        document.body.style.backgroundColor = state.bgColorLight
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
