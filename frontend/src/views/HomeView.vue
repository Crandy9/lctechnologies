<template>
  <div class="home">
    <img class="feather" alt="lctec" src="../assets/images/lctec_icon_rounded.png">
    <!-- import landing component -->
    <Landing />
  </div>
  <!-- what we offer overivew -->
  <div :class=$store.state.theme_change ref="offering">
    <h1>Services</h1>
    <div style="margin-bottom: 20rem">Blah blah blah</div>
  </div>
  <!-- eCommerce section -->
  <div :class=$store.state.theme_change ref="eCommerce">
    <h1>Ecommerce</h1>
    <div style="margin-bottom: 20rem">Blah blah blah</div>
  </div>
    <!-- eCommerce section -->
  <div :class=$store.state.theme_change ref="webAppDesign">
    <h1>Web App Design</h1> 
    <div style="margin-bottom: 20rem">Blah blah blah</div>
  </div>
  <!-- contact button -->
  <div :class=$store.state.theme_change>
    <div>
      <button @click="modalOpened = false; show = true; purchaseButtonClicked = true; scrollToContact();" class="my-modal-button-buy-now button">
        stink
      </button>
    </div>
  </div>
  <!-- Contact modal-->
  <div class="my-contact-div" :style="showForm()" v-bind:class="{'is-active': contactButtonClicked}" ref="formTop">
    <!-- <div class="modal-background"></div> -->
    <div class="card">
      <header class="card-head">
        <!-- <p class="card-title">{{$t('contactmodal.modaltitle')}}</p> -->
      </header>
      <div class="card-body">
        <div class="page-contact">
          <div class="close-button-container">
            <button class="delete close-button" @click="show = false; clearFields(); formProcessing = false;" aria-label="close"></button>
          </div>
          <div class="columns is-multiline">
              <div class="column is-12 box">
                <h2 style= "text-align: center;" class="form-sub subtitle has-text-black has-text-center is-underlined">{{$t('contactmodal.contactHeader')}}</h2>
                <!-- <p class="has-text-danger mb-4">* All fields are required</p> -->
                <div class="columns is-multiline">
                  <div class="column is-6">
                    <!-- name errors-->
                    <div v-if="errors.nameErrors.length">
                        <p class="my-errors" style="color:red" v-for="error in errors.nameErrors" v-bind:key="error">
                        <span style="color:red !important">*</span> {{ error }}
                        </p>                        
                    </div>
                    <div class="field">
                      <label class="my-label has-text-black">{{$t('contactmodal.name')}}</label>
                      <div class="control">
                          <input type="text" class="input" :placeholder="$t('contactmodal.placeholdername')" v-model="name">
                      </div>
                    </div>
                    <!-- email errors-->
                    <div v-if="errors.emailErrors.length">
                        <p class="my-errors" style="color:red" v-for="error in errors.emailErrors" v-bind:key="error">
                        <span style="color:red !important">*</span> {{ error }}
                        </p>                        
                    </div>
                    <div class="field">
                      <label class="my-label has-text-black">{{$t('contactmodal.email')}}</label>
                      <div class="control">
                          <input type="email" class="input" placeholder="123@my-email.com" v-model="email">
                      </div>
                    </div>
                    <!-- phone errors-->
                    <div v-if="errors.phoneErrors.length">
                        <p class="my-errors" style="color:red" v-for="error in errors.phoneErrors" v-bind:key="error">
                        <span style="color:red !important">*</span> {{ error }}
                        </p>                        
                    </div>
                    <div class="field">
                      <label class="my-label has-text-black">{{$t('contactmodal.phone')}}</label>
                      <div class="control">
                          <input type="text" class="input" :placeholder="$t('contactmodal.placeholderphone')" v-model="phone">
                      </div>
                    </div>
                </div>
                <div class="column is-6">
                  <!-- services errors-->
                  <div v-if="errors.servicesErrors.length">
                      <p class="my-errors" style="color:red" v-for="error in errors.servicesErrors" v-bind:key="error">
                      <span style="color:red !important">*</span> {{ error }}
                      </p>                        
                  </div>
                  <div class="field">
                    <label class="my-label has-text-black">{{$t('contactmodal.services')}}</label>
                    <div class="control">
                        <input type="text" class="input" :placeholder="$t('contactmodal.placeholderservices')" v-model="services">
                    </div>
                  </div>
                  <!-- message errors-->
                  <div v-if="errors.msgErrors.length">
                      <p class="my-errors" style="color:red" v-for="error in errors.msgErrors" v-bind:key="error">
                      <span style="color:red !important">*</span> {{ error }}
                      </p>                        
                  </div>
                  <div class="field">
                    <label class="my-label has-text-black">{{$t('contactmodal.msgs')}}</label>
                    <div class="control">
                        <textarea class="my-textarea" :placeholder="$t('contactmodal.placeholdermsgs')" v-model="msgs">
                        </textarea>
                    </div>
                  </div>
                </div>
              </div>
              <hr>
              <footer class="card-foot">
                <button @click.stop="submitForm();" :disabled="formProcessing" class="my-button-contact">
                  <div class="processing-div" v-if="formProcessing">
                    <span>
                      {{$t('contactmodal.submitting')}}
                    </span>
                    <div class="loading-dots">
                      <span class="dot">.</span>
                      <span class="dot">.</span>
                      <span class="dot">.</span>
                    </div>
                  </div>
                  <div v-else>
                    <span >
                      {{$t('contactmodal.submit')}}
                    </span> 
                  </div>
                </button>
              </footer>
          </div>
        </div>
      </div>
      <!-- general errors -->
      <div v-if="errors.generalErrors.length">
        <p class="my-errors" style="text-align: center; color:red; padding-bottom: 1rem; padding-inline: 2.2rem;" v-for="error in errors.generalErrors" v-bind:key="error">
          <span style="color:red !important">*</span> {{ error }}
        </p>                        
      </div>
    </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Landing from '@/components/Landing.vue'
import { mapState } from "vuex";

export default {
  name: 'Home',
  data() {
    return {
      formProcessing: false,
      contactButtonClicked: false,
      show: false,
      modalOpened: false,
      name: '',
      email: '',
      phone: '',
      services: '',
      msgs: '',
      errors: {
              generalErrors: [],
              nameErrors: [],
              emailErrors: [],
              phoneErrors: [],
              servicesErrors: [],
              msgErrors: []
          }
    }
  },
  components: {
    Landing,
  },

  mounted() {
    document.title = "LC Technologies";

  },
  computed: {
    ...mapState(["scrollingToEcommerce"]),
    ...mapState(["scrollingToWebApp"]),
    ...mapState(["scrollingToContact"]),
    ...mapState(["scrollingToOffering"]),

  },


  watch: {

    scrollingToEcommerce(scrolling) {
      if (scrolling === true) {
        this.scrollTo('ecommerce');
      }
    },

    scrollingToWebApp(scrolling) {
      if (scrolling === true) {
        this.scrollTo('webapp');
      }
    },

    scrollingToContact(scrolling) {
      if (scrolling === true) {
        this.scrollTo('contact');
      }
    },
    scrollingToOffering(scrolling) {
      if (scrolling === true) {
        this.scrollTo('offering');
      }
    },    
  },

  methods: {

    submitForm() {
      this.formProcessing = true;
    },

    scrollTo(section) {

      if (section === "ecommerce") {
        this.$nextTick(() => this.$refs["eCommerce"].scrollIntoView({ behavior: "smooth" }))
        this.$store.state.scrollingToEcommerce = false
      }
      else if (section === "webapp") {
        this.$nextTick(() => this.$refs["webAppDesign"].scrollIntoView({ behavior: "smooth" }))
        this.$store.state.scrollingToWebApp = false
      }
      else if (section === "contact") {
        this.modalOpened = true;
        this.show = true;
        this.$nextTick(() => this.$refs["formTop"].scrollIntoView({ behavior: "smooth" }))
        this.$store.state.scrollingToContact = false      
      }
      else {
        this.$nextTick(() => this.$refs["offering"].scrollIntoView({ behavior: "smooth" }))
        this.$store.state.scrollingToOffering = false    
      }
    },


    // scroll to top of contact form
    scrollToContact() {
      this.$nextTick(() => this.$refs["formTop"].scrollIntoView({ behavior: "smooth" }))
      
    },

    showForm() {
      return this.show === true ? {display: 'block'} : {display: 'none'}
    },

    clearFields() {
      this.name = ''
      this.email = ''
      this.phone = ''
      this.services = ''
      this.msgs = ''
      this.errors.generalErrors = []
      this.errors.nameErrors = []
      this.errors.emailErrors = []
      this.errors.phoneErrors = []
      this.errors.servicesErrors = []
      this.errors.msgErrors = []
    },

  }
}
</script>
