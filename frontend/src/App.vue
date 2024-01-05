<template>
      <nav class="navbar-end" role="navigation" aria-label="main navigation">
      <div class="my-navbar-menu" id="my-navbar-menu" >
        <div class="navbar-item dropdown is-right is-hoverable">
          <div class="dropdown-trigger">
            <button class="vt-flyout-button" aria-haspopup="true" aria-controls="dropdown-menu4">
              <div class="vt-locales-btn-icon-container">
                <svg 
                  class="vt-locales-btn-icon" 
                  xmlns="http://www.w3.org/2000/svg" 
                  aria-hidden="true" 
                  focusable="false" 
                  viewBox="0 0 24 24">
                  <path 
                    d="M0 0h24v24H0z" 
                    fill="none">
                  </path>
                  <path 
                    d=" M12.87 15.07l-2.54-2.51.03-.03c1.74-1.94 2.98-4.17 3.71-6.53H17V4h-7V2H8v2H1v1.99h11.17C11.5 7.92 10.44 9.75 9 11.35 8.07 10.32 7.3 9.19 6.69 8h-2c.73 1.63 1.73 3.17 2.98 4.56l-5.09 5.02L4 19l5-5 3.11 3.11.76-2.04zM18.5 10h-2L12 22h2l1.12-3h4.75L21 22h2l-4.5-12zm-2.62 7l1.62-4.33L19.12 17h-3.24z ">
                  </path>
                </svg>   
              </div>
            </button>
          </div>
          <div class="dropdown-menu" id="dropdown-menu4" role="menu">
            <div class="dropdown-content">
              <div class="dropdown-item">
                <!-- region button -->
                <a @click="changeLanguageButton('en')">
                    <span class="dropdown-span">English</span>
                    <svg 
                      class="dropdown-arrow-icon"
                      xmlns="http://www.w3.org/2000/svg" 
                      aria-hidden="true" 
                      focusable="false" 
                      height="24px" 
                      viewBox="0 0 24 24" 
                      width="24px">
                      <path d="M0 0h24v24H0V0z" fill="none"></path>
                      <path d="M9 5v2h6.59L4 18.59 5.41 20 17 8.41V15h2V5H9z"></path>
                    </svg>                        
                </a>
              </div>
              <div class="dropdown-item">
                <a @click="changeLanguageButton('ja')">
                    <span class="dropdown-span">日本語</span>
                    <svg 
                      class="dropdown-arrow-icon"
                      xmlns="http://www.w3.org/2000/svg" 
                      aria-hidden="true" 
                      focusable="false" 
                      height="24px" 
                      viewBox="0 0 24 24" 
                      width="24px">
                      <path d="M0 0h24v24H0V0z" fill="none"></path>
                      <path d="M9 5v2h6.59L4 18.59 5.41 20 17 8.41V15h2V5H9z"></path>
                    </svg>                            
                </a>
              </div>                  
            </div>
          </div>
        </div>    
      </div>
    </nav>
  <section class="section">
    <router-view/>
  </section>
</template>

<style lang="scss">
@import '../node_modules/bulma';
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>

<!-- import required css files -->
<style>
  @import '../src/assets/styles/my-nav.css';
  @import '../src/assets/styles/my-locale-dropdown.css';

</style>


<script>

// import axios for retrieving web token from backend api
import axios from 'axios'

// change hamburger clicked boolean
export default {

  data () {
    return {

    }
  },

  // initialize the store. First method that is called when app is loaded/page refreshed
  beforeCreate() {

  },

  mounted() {

  },
  computed: {

  },

  // methods 
  methods: {

    // change region button click
    changeRegionButton(region) {
      this.$store.commit('setRegion',region)
      window.location.reload();
    },
    // change language button click
    changeLanguageButton(language) {
      this.$store.commit('setLanguage',language)
      window.location.reload();
    },
  }
}
</script> 