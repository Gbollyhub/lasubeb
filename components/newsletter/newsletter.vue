<template>
            <div class="subscribe-newsletter-section">
      <h1 class="heading featured-news newsletter">Subscribe to LASUBEB Education Data</h1>
      <div class="w-form">
           <form action="" ref="form"  @submit.prevent="onSubmit" v-show="form">
          <label for="name-2" class="form-label">Name</label>
          <input type="text" class="form-text-field w-input" maxlength="256" placeholder="Full name" id="name-2" v-model="name">
          <label for="email-2" class="form-label">Email </label>
          <input type="email" class="form-text-field w-input" maxlength="256"  placeholder="Valid email address" id="email-2" required v-model="email">
          <input type="submit" value="Subscribe" class="action-btn w-button">
           <recaptcha @error="onError" @success="onSuccess" @expired="onExpired" />
           </form>
            <div v-show="formSuccess" class="w-form-done" style="display:block">
          <div>Thank you! Your submission has been received!</div>
        </div>
        <div v-show="formError" class="w-form-fail" style="display:block">
          <div>Oops! Something went wrong while submitting the form.</div>
        </div>
      </div>
    </div>
</template>


<script>
import marked from 'marked'
import axios from 'axios'
export default {
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
          const mail = axios.post('https://lasubeb-api.herokuapp.com/send-mail-newsletter', {
       name: this.name,
       email: this.email
     })
         this.form = false
    this.formSuccess = true
       }
    },
    onExpired() {
      console.log('Expired')
    }
  },
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
