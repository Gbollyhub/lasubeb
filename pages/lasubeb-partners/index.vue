<template>
  <div data-w-id="61eb59ef-3efb-8e23-10aa-9a7cd933685f" class="page-wrapper">
         <section id="feature-section" class="feature-section news">
           <search/>
      <h2 class="heading-2 featured"><span class="text-span">become </span>a lasubeb partner</h2>
      <div class="paragraph-2 center">We are open to working with new partners with ideas, solutions to achieve our objectives. <br>Kindly fill the form below and we&#x27;ll get back to you as soon as possible</div>
      <div class="partner-register w-form">
        <div class="partner-logo-div-wrapper">
          <a data-title="Lagos State Delegates understudy Edo State Education sector transformation" href="https://www.unicef.org/" target="_blank" class="partner-logo-block w-inline-block">
            <div class="partner-logo-img"><img src="../../assets/images/lasubeb_unicefLogo_partnership.jpg" alt="Lagos Delegates understudy Edo State Education Sector Transformation" loading="eager" class="news-img-list"></div>
            <h2 class="news-headline">unicef</h2>
          </a>
          <a data-title="Lagos State Delegates understudy Edo State Education sector transformation" href="https://www.ubec.gov.ng/" target="_blank" class="partner-logo-block w-inline-block">
            <div class="partner-logo-img"><img src="../../assets/images/lasubeb_ubecLogo_partnership.jpg" alt="Lagos Delegates understudy Edo State Education Sector Transformation" loading="eager" class="news-img-list"></div>
            <h2 class="news-headline">ubec</h2>
          </a>
        </div>
        <form id="email-form" name="email-form" data-name="Email Form"  @submit.prevent="onSubmit" v-show="form" class="contact-form">
          <label for="name-4" class="form-label contact">Name</label>
          <input type="text" class="form-text-field contact w-input" maxlength="256" name="name-3" data-name="Name 3" placeholder="Full name" id="name-3" required="" v-model="name">
          <label for="email-4" class="form-label contact">Email Address</label>
          <input type="email" class="form-text-field contact w-input" maxlength="256" name="email-3" data-name="Email 3" placeholder="Email address" id="email-3" required="" v-model="email">
          <label for="PhoeNumber" class="form-label contact">Contact Phone Number</label>
          <input type="tel" class="form-text-field contact w-input" maxlength="256" name="PhoeNumber" data-name="PhoeNumber" placeholder="Phone Number" id="PhoeNumber" required="" v-model="phone">
          <label for="partner-category" class="form-label contact">Partnership Category</label>
          <select id="partner-category" name="partner-category" data-name="partner category" required="" class="select-form-dropdown w-select" v-model="category">
            <option value="TechPartner">Technology Partner</option>
            <option value="IntEducation">International Education Partner</option>
            <option value="LocalEducation">Local Education Partner</option>
            <option value="PrivateOrg">Private Organisation Partner</option>
            <option value="Other">Other Partner</option>
          </select>
          <label for="note" class="form-label contact">Note</label>
          <textarea placeholder="Message" maxlength="5000" id="note" name="note" required  data-name="note" class="form-textarea contact w-input" v-model="note"></textarea>
           <recaptcha @error="onError" @success="onSuccess" @expired="onExpired" />
          <button type="submit" class="app-submit">Submit</button>
        </form>
        <div v-show="formSuccess" class="w-form-done" style="display:block;margin-top:30px">
          <div>Thank you! Your submission has been received!</div>
        </div>
        <div v-show="formError" class="w-form-fail" style="display:block;margin-top:30px">
          <div>Oops! Something went wrong while submitting the form.</div>
        </div>
      </div>
    </section>
<subebPartner/>
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
import Search from '~/components/search/search.vue'
export default {
 components:{
    newsletter,
    subebPartner,
    dataSection,
  Search
  },
  data(){
  return{
    form:true,
    formError: false,
    formSuccess: false,
      name: '',
      email: '',
      phone: '',
      category: 'TechPartner',
      note:''
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
         this.formSuccess = false
      this.form = false
       }
       else{
          const mail = axios.post('https://lasubeb-api.herokuapp.com/send-mail-partners', {
       name: this.name,
       email: this.email,
       phone: this.phone,
       category: this.category,
       note: this.note
     })
         this.form = false
    this.formSuccess = true
     this.formError = false
       }
    },
    onExpired() {
      console.log('Expired')
    }
  },
  head(){
    return{
        htmlAttrs: {
        'data-wf-page': "5f42a37a689671d267880140",
        'data-wf-site': "5eff351b1692982c192ff95b"
              },
          title: 'LASUBEB Partners',
          meta: [
      { hid: 'description', name: 'description', content: 'LASUBEB Partners' },
      { hid: 'description', property:'og:description', content: 'LASUBEB Partners' },
      { hid: 'description', property:'twitter:description', content: 'LASUBEB Partners' }
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
