<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/images/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>

<div>
  <h1>LEARN MORE</h1>
  <div>
    <button @click="modalOpened = false; show = true; purchaseButtonClicked = true; scrollToBottom();" class="my-modal-button-buy-now button">stink</button>
  </div>
</div>
    <!-- Contact modal-->
    <div style="z-index: 9999;" class="my-contact-div"
        :style="showForm()" v-bind:class="{'is-active': contactButtonClicked}" ref="formTop">
      <!-- <div class="modal-background"></div> -->
      <div class="card">
        <header class="card-head">
          <!-- <p class="card-title">{{$t('contactmodal.modaltitle')}}</p> -->
        </header>
        <div class="card-body">
          <div class="page-contact">
            <div class="close-button-container">
              <button class="delete close-button" @click="show = false; clearFields(); contactButtonClicked = false;" aria-label="close"></button>
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
                  <button @click.stop="submitForm();" :disabled="formProcessing" class="my-button-contact button">
                    <span v-if="formProcessing">
                      {{$t('contactmodal.paymentprocessing')}}
                    </span>
                    <span v-else>
                      {{$t('contactmodal.pay')}}
                    </span>                
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
import HelloWorld from '@/components/HelloWorld.vue'

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
    HelloWorld
  },

  mounted() {
    document.title = "LC Technologies";

  },
  computed: {
    
  },
  methods: {

    // scroll to top of form
    scrollToBottom() {
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
