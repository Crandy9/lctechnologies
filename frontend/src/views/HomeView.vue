<template>
  <div class="home" style="margin-top: 6rem;">
    <!-- <img alt="lctec" class="feather" src="../assets/images/lctec_icon_rounded.png"> -->
    <!-- import landing component -->
    <Landing />
  </div>
  <!-- what we offer overivew -->
  <div class="services-container">
    <div :class=$store.state.theme_change ref="offering">
      <h1 class="service-header">{{$t('whatweofferTitle')}}</h1>
    </div>
    <!-- eCommerce section -->
    <div class="service-item" :class=$store.state.theme_change ref="ecommerce">
      <h1 class="service">{{$t('eCommerceTitle')}}
        <i :class=$store.state.theme_change class="fas fa-shopping-cart" style="color: rgb(247 124 73)"></i>
      </h1>
      <div class="service-about">
        <span>
          {{$t('eCommerceAbout')}}
        </span>
        <p style="padding-top: 1rem;">
          {{$t('eCommerceStartingPrice')}}
        </p>
      </div>
    </div>
      <!-- webapp section -->
    <div class="service-item" :class=$store.state.theme_change ref="webapp">
      <h1 class="service">{{$t('web_designTitle')}}
        <i :class=$store.state.theme_change class="fa fa-globe" style="color: rgb(0, 140, 255);"></i>
      </h1> 
      <div class="service-about">
        <span>
          {{$t('web_designAbout')}}
        </span>
        <p style="padding-top: 1rem;">
          {{$t('web_designStartingPrice')}}
        </p>
    </div>
    </div>
      <!-- Software Development section -->
    <div class="service-item" :class=$store.state.theme_change ref="gensoft">
      <h1 v-if="$store.state.language=== 'ja'" class="service" style="font-size: 23px;">{{$t('gensoftTitle') }}
        <i :class=$store.state.theme_change class="fa fa-bug" style="color: green;"></i>
      </h1> 
      <h1 v-else class="service">{{$t('gensoftTitle') }}
        <i :class=$store.state.theme_change class="fa fa-bug" style="color: green;"></i>
      </h1> 
      <div class="service-about">{{$t('gensoftdevAbout')}}</div>
      <br>
      <ul class="my-bullet-points">
        <li>- {{$t('gensoftPart1')}}</li>
        <li>- {{$t('gensoftPart2')}}</li>
        <li>- {{$t('gensoftPart3')}}</li>
        <li>- {{$t('gensoftPart4')}}</li>
        <li>- {{$t('gensoftPart5')}}</li>
        <li>- {{$t('gensoftPart6')}}</li>
      </ul>
      <div class="service-about" style="padding-top: 1rem;">
        {{$t('gensoftdevHourlyPrice')}}
      </div>
      <!-- <div class="service-about" style="padding-top: 1rem;">
        {{$t('gensoftdevMonthlyPrice')}}
      </div> -->
    </div>     
    <!-- Our Clients -->
    <div :class=$store.state.theme_change>
      <h1 class="service-header">{{$t('clients')}}</h1>
      <div class="my-clients-display">
        <!-- kaoru art gallery -->
        <div class="client-item" :class=$store.state.theme_change>
          <!-- <h1 class="service">
            <a style="color: inherit;" href="https://kaoruartgallery.com" target="_blank">Kaoru Art Gallery</a>
          </h1>  -->
          <a 
            style="color: inherit;" 
            href="https://kaoruartgallery.com/gallery" 
            target="_blank" 
            title="https://kaoruartgallery.com/gallery">
            <img alt="lctec" class="showcase-client-img" src="@/assets/images/kag_banner.png">
          </a>
        </div>
        <!-- lc technologies -->
        <div class="client-item" :class=$store.state.theme_change>
          <h1 class="service">
            <a style="color: inherit;" href="https://sheriffcrandymusic.com/music" target="_blank" title="https://sheriffcrandymusic.com/music">Sheriff Crandy Music</a>
          </h1> 
          <a 
            style="color: inherit;" 
            href="https://sheriffcrandymusic.com/music" 
            target="_blank" 
            title="https://sheriffcrandymusic.com/music">            
            <img alt="lctec" class="showcase-client-img" src="@/assets/images/sc_piano.jpg">
          </a>
        </div>
      </div>
    </div>
    <!-- pricing section -->
    <!-- <div class="service-item" :class=$store.state.theme_change ref="pricing">
      <h1 class="service">{{$t('pricingTitle')}}
      </h1> 
      <div class="service-about">{{$t('pricingAbout')}}</div>
    </div>        -->
    <!-- contact button -->
    <div :class=$store.state.theme_change>
      <div>
        <button class="open-contact-modal-button button" @click="modalOpened = false; show = true; purchaseButtonClicked = true; scrollToContact();">
          {{$t('contactBtn')}}
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
                  <h2 style= "text-align: center;" class="form-sub subtitle has-text-black has-text-center">{{$t('contactmodal.contactHeader')}}</h2>
                  <!-- <p class="has-text-danger mb-4">* All fields are required</p> -->
                  <div class="columns is-multiline">
                    <div class="column is-6">
                      <!-- name errors-->
                      <div v-if="errors.nameErrors.length" style="margin-top: 1rem;">
                          <p class="my-errors" style="color:red" v-for="error in errors.nameErrors" v-bind:key="error">
                            {{ error }}
                          </p>                        
                      </div>
                      <div class="field" style="margin-top: 1.2rem;">
                        <label class="my-label has-text-black">
                          <span style="color:red !important">*</span>
                          {{$t('contactmodal.name')}}
                        </label>
                        <div class="control">
                            <input type="text" class="input" :placeholder="$t('contactmodal.placeholdername')" v-model="name">
                        </div>
                      </div>
                      <!-- email errors-->
                      <div v-if="errors.emailErrors.length">
                          <p class="my-errors" style="color:red" v-for="error in errors.emailErrors" v-bind:key="error">
                          {{ error }}
                          </p>                        
                      </div>
                      <div class="field">
                        <label class="my-label has-text-black">
                          <span style="color:red !important">*</span>
                          {{$t('contactmodal.email')}}
                        </label>
                        <div class="control">
                            <input type="email" class="input" placeholder="123@my-email.com" v-model="email">
                        </div>
                      </div>
                      <!-- services dropdown -->
                      <div class="field">
                        <label class="my-label has-text-black">{{$t('contactmodal.services')}}</label>
                        <div class="control">
                            <select class="input" v-model="selectedService">
                              <option style="color:rgba(0,0,0,0.4) !important" value="" disabled selected hidden>
                                {{$t('contactmodal.placeholderservices')}}
                              </option>
                              <option style="color: black !important;">{{$t('contactmodal.ecommerceService')}}</option>
                              <option style="color: black !important;">{{$t('contactmodal.webappService')}}</option>
                              <option style="color: black !important;">{{$t('contactmodal.softwareDevService')}}</option>
                              <option style="color: black !important;">{{$t('contactmodal.otherService')}}</option>
                            </select>
                        </div>
                      </div>                      
                  </div>
                  <!-- message -->
                  <div class="column is-6">
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
                  <!-- incorrect answer -->
                  <div v-if="incorrectanswerError">
                      <p class="my-errors" style="color:red">
                        {{$t('incorrectanswerError')}}
                      </p>                        
                  </div>
                  <div v-else-if="correctanswerNotification">
                      <p class="my-errors" style="color:rgb(0, 166, 0)">
                        {{$t('correctanswerNotification')}}
                      </p>                        
                  </div>
                  <!-- weak human checking -->
                  <div class="math-test">
                    <p :hidden="solvedEquation" style="white-space: nowrap; padding-top: 1.3rem; padding-right: 1rem;">{{addend1}} + {{addend2}} = </p>
                    <textarea :hidden="solvedEquation" v-model="userAnswer" class="math-test-textarea" style="resize: none;" maxlength="2" resize="none"></textarea>
                    <button @click.stop="checkMath();" :hidden="solvedEquation" :disabled="checkingAnswer" class="my-button-math">
                      {{$t('submitanswer')}}                    
                    </button>
                  </div>
                  <!-- general errors -->
                  <div v-if="errors.generalErrors.length">
                    <p class="my-errors" style="text-align: center; color:red; padding-bottom: 1rem; padding-inline: 2.2rem;">
                      {{$t('generalErrors')}}
                    </p>                        
                  </div>
                  <!-- backend server error -->
                  <div v-else-if="errors.serverError.length">
                    <p class="my-errors" style="text-align: center; color:red; padding-bottom: 1rem; padding-inline: 2.2rem;">
                      {{$t('serverError')}}
                    </p>                        
                  </div>
                  <button @click.stop="submitForm();" :hidden="!solvedEquation" :disabled="formProcessing" class="my-button-contact">
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
      </div>
      </div>
    </div>
    
  </div>
</template>

<script>
// @ is an alias to /src
import Landing from '@/components/Landing.vue'
import { mapState } from "vuex";
import axios from 'axios'
import { toast } from 'bulma-toast'

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
      services: '',
      msgs: '',
      errors: {
              generalErrors: [],
              nameErrors: [],
              emailErrors: [],
              msgErrors: [],
              serverError: []
          },
      incorrectanswerError: '',
      correctanswerNotification: '',
      selectedService: '',
      solvedEquation: false,
      userAnswer: '',
      addend1: '',
      addend2: '',
      equationAnswer: '',
      checkingAnswer: false
    }
  },
  components: {
    Landing,
  },

  mounted() {
    document.title = "LC Technologies";
    this.addend1 = Math.floor(Math.random() * 100)
    this.addend2 = Math.floor(Math.random() * (100 - this.addend1))
    this.equationAnswer = this.addend1 + this.addend2;

  },
  computed: {
    ...mapState(["scrollingToEcommerce"]),
    ...mapState(["scrollingToWebApp"]),
    ...mapState(["scrollingToContact"]),
    ...mapState(["scrollingToOffering"]),
    ...mapState(["scrollingToGenSoft"]),
    // ...mapState(["scrollingToPricing"]),

  },


  watch: {

    scrollingToEcommerce(scrolling) {
      if (scrolling === true) {
        this.scrollTo('ecommerce');
      }
    },

    // scrollingToPricing(scrolling) {
    //   if (scrolling === true) {
    //     this.scrollTo('pricing');
    //   }
    // },
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
    scrollingToGenSoft(scrolling) {
      if (scrolling === true) {
        this.scrollTo('gensoft');
      }
    },    
  },

  methods: {

    checkMath() {
      this.formProcessing = false
      this.checkingAnswer = true
      this.incorrectanswerError = ''
      this.correctanswerNotification = ''
      this.equationAnswer = this.addend1 + this.addend2

      setTimeout(() => {
        if (this.userAnswer == this.equationAnswer) {

          this.correctanswerNotification = this.$t('correctanswerNotification');

          setTimeout(() => {
            this.checkingAnswer = false;
            this.solvedEquation = true;
            this.correctanswerNotification = ''
            return;
          }, 2000); // Sleep for 2 seconds

        } else {
          this.checkingAnswer = false;
          this.incorrectanswerError = this.$t('incorrectanswerError');
          this.redoEquation();
          return;
        }
      }, 2000);

    },

    redoEquation() {
      this.formProcessing = false;
      this.addend1 = Math.floor(Math.random() * 100)
      this.addend2 = Math.floor(Math.random() * (100 - this.addend1))
      this.equationAnswer = this.addend1 + this.addend2;
    },

    submitForm() {

      this.formProcessing = true;
      this.errors.generalErrors = []
      this.errors.nameErrors = []
      this.errors.emailErrors = []
      this.errors.msgErrors = []
      this.errors.serverError = []

      let errors = false

      // form validation
      if (this.name === '') {
        this.formProcessing = false;
        this.errors.nameErrors.push(this.$t('namefieldmissing'))
        this.errors.generalErrors.push('stink')
        errors = true
      }

      if (this.email === '') {
          this.formProcessing = false;
          this.errors.emailErrors.push(this.$t('emailreq'))
          this.errors.generalErrors.push('stink')
          errors = true

      }
      if (!this.email.includes('@')) {
          this.formProcessing = false;
          this.errors.emailErrors.push(this.$t('emailreq'))
          this.errors.generalErrors.push('stink')
          errors = true
      }

      if (errors == true) {
        
        return
      }

      let service = ''
      let msgs = ''
      this.selectedService === '' ? service = 'Not Selected' : service = this.selectedService
      this.msgs === '' ? msgs = 'No Additional Info' : msgs = this.msgs

      const formData = {
        'name': this.name,
        'email': this.email,
        'service': service,
        'msgs': msgs
      }


      // post form data to backend
      // send post data to backend server
      axios
        .post(process.env.VUE_APP_CONTACT_FORM_API_ENDPOINT, formData)
        .then(response => {

            // add toast message
            toast({
                message: this.$t('formSubmitted'),
                type: 'is-success',
                dismissible: true,
                pauseOnHover: true,
                duration: 10000,
                position: 'center',
                animate: { in: 'fadeIn', out: 'fadeOut' },
            })

            // clear all fields
            this.show = false
            this.clearFields()
        })
        // catch the error data, strip it down to category, and push
        // each error to the appropraite error array
        .catch(error => {
          this.formProcessing = false;
          this.errors.serverError.push('There was an error cya')
        })
    },

    scrollTo(section) {

      this.$store.commit('scrollTo', section)

      if (section === "contact") {
        this.modalOpened = true;
        this.show = true;
        this.$nextTick(() => this.$refs["formTop"].scrollIntoView({ behavior: "smooth" }))
      }  
      
      else {
        this.$nextTick(() => this.$refs[section].scrollIntoView({ behavior: "smooth" }))
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
      this.redoEquation();
      this.formProcessing = false
      this.userAnswer = ''
      this.solvedEquation = false
      this.checkingAnswer = false
      this.incorrectanswerError = ''
      this.correctanswerNotification = ''
      this.name = ''
      this.email = ''
      this.services = ''
      this.msgs = ''
      this.selectedService = ''
      this.errors.generalErrors = []
      this.errors.nameErrors = []
      this.errors.emailErrors = []
      this.errors.msgErrors = []
      this.errors.serverError = []
    },

  }
}
</script>
