<template>
  <div data-w-id="61eb59ef-3efb-8e23-10aa-9a7cd933685f" class="page-wrapper">
    <section id="feature-section" class="feature-section news">
      <h2 class="heading-2 featured"><span class="text-span">CONTACT</span> US</h2>
      <hr>
      <form id='demo-form' action="?" method="POST">
      <button class="g-recaptcha" data-sitekey="6Lcmk9IZAAAAAP6_JrHVHumrGfv9ApT9AfJW0rjO" data-callback='onSubmit'>Submit</button>
      <br/>
    </form>
    <hr>
        <form @submit.prevent="sendMessage" v-show="form" class="contact-form">
        <label for="name-3" class="form-label contact">Name</label>
        <input v-model="contactForm.name" type="text" class="form-text-field contact w-input" maxlength="256" name="name-3" data-name="Name 3" placeholder="Full name" id="name-3" required="">
        <label for="email-3" class="form-label contact">Email Address</label>
        <input v-model="contactForm.email" type="email" class="form-text-field contact w-input" maxlength="256" name="email-3" data-name="Email 3" placeholder="Email address" id="email-3" required="">
        <label for="email-4" class="form-label contact">Message</label>
        <textarea v-model="contactForm.message" placeholder="Message" maxlength="5000" id="field" name="field" required="" class="form-textarea contact w-input">
        </textarea>
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
    contactForm:{
      name: '',
      email: '',
      message: ''
    }
  }
  },
  computed:{
   ...mapGetters([
      'getAdminUrl',
     'getBoardMembers'
   ])
  },
  methods:{
    onSubmit(token) {
         document.getElementById("demo-form").submit();
         console.log(token)
       },
   async sendMessage(){
    const data = axios.post('http://admin-lasubeb.correctornot.com/messages', {
      "Name": this.contactForm.name,
      "EmailAddress": this.contactForm.email,
      "Message": this.contactForm.message,
    })

    if(data.error){
      this.formError = true
      this.form = false
    }
    this.form = false
    this.formSuccess = true
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