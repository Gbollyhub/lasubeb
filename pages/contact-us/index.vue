<template>
  <div data-w-id="61eb59ef-3efb-8e23-10aa-9a7cd933685f" class="page-wrapper">
    <section id="feature-section" class="feature-section news">
      <h2 class="heading-2 featured"><span class="text-span">CONTACT</span> US</h2>

        <form action="" ref="form" method="post" @submit.prevent="onSubmit" v-show="form" class="contact-form">
        <label for="name-3" class="form-label contact">Name</label>
        <input v-model="name" type="text" class="form-text-field contact w-input" maxlength="256" name="name-3" data-name="Name 3" placeholder="Full name" id="name-3" required="">
        <label for="email-3" class="form-label contact">Email Address</label>
        <input v-model="email" type="email" class="form-text-field contact w-input" maxlength="256" name="email-3" data-name="Email 3" placeholder="Email address" id="email-3" required="">
        <label for="email-4" class="form-label contact">Message</label>
        <textarea v-model="message" placeholder="Message" maxlength="5000" id="field" name="field" required="" class="form-textarea contact w-input">
        </textarea>
         <recaptcha @error="onError" @success="onSuccess" @expired="onExpired" />
          <button type="submit" class="app-submit">Submit</button>
          </form>
        <div v-show="formSuccess" class="w-form-done" style="display:block">
          <div>Thank you! Your submission has been received!</div>
        </div>
        <div v-show="formError" class="w-form-fail" style="display:block">
          <div>Oops! Something went wrong while submitting the form.</div>
        </div>
    </section>
<subebPartner/>
<dataSection/>
<newsletter/>
  </div>
</template>
<script>
import newsletter from '@/components/newsletter/newsletter.vue'
import subebPartner from '@/components/subeb-partner/subeb-partner.vue'
import dataSection from '@/components/data-section/data-section.vue'
import { mapGetters } from 'vuex'
import marked from 'marked'
import axios from 'axios'
export default {
  components:{
    newsletter,
    subebPartner,
    dataSection
  },
  data(){
  return{
    form:true,
    formError: false,
    formSuccess: false,
      name: '',
      email: '',
      message: ''
  }
  },
  computed:{
   ...mapGetters([
      'getAdminUrl',
     'getBoardMembers'
   ])
  },
  methods: {
    onError(error) {
      console.log('Error happened:', error)
    },
    async onSubmit() {
      try {
        const token = await this.$recaptcha.getResponse()
        console.log('ReCaptcha token:', token)
        await this.$recaptcha.reset()
      } catch (error) {
        // eslint-disable-next-line no-console
        console.log('Login error:', error)
      }
    },
    async onSuccess(token) {
      console.log('Succeeded:', token)
      const url = 'https://lasubeb-api.herokuapp.com/verify-form'
       const captcha = await axios.post(url, { "token": token })
       if(captcha.data.google_response.success != true){
        this.formError = true
      this.form = false
       }
       else{
          const mail = axios.post('https://lasubeb-api.herokuapp.com/send-mail', {
       name: this.name,
       email: this.email,
       message: this.message
     })
         this.form = false
    this.formSuccess = true
       }
    },
    onExpired() {
      console.log('Expired')
    }
  },
  head(){
    return{
       htmlAttrs: {
        'data-wf-page': "5f4293582dc09147bbfbc72e",
        'data-wf-site': "5eff351b1692982c192ff95b"
              },
          title: 'LASUBEB Contact Us',
          meta: [
      { hid: 'description', name: 'description', content: 'LASUBEB Contact Us' },
      { hid: 'description', property:'og:description', content: 'LASUBEB Contact Us' },
      { hid: 'description', property:'twitter:description', content: 'LASUBEB Contact Us' }
],
    }
  }
}
</script>

<style scoped>
.app-submit{
  padding: 9px 15px;
    background-color: #3898EC;
    color: white;
    border: 0;
    line-height: inherit;
    text-decoration: none;
    cursor: pointer;
    border-radius: 0
}
</style>