<template>
  <form
    ref="form"
    action="?"
    method="post"
    @submit.prevent="onSubmit"
  >
    <fieldset>
      <input
        type="text"
        name="name"
        placeholder="Name"
      />
      <input
        type="email"
        name="emil"
        placeholder="Email"
      />
    </fieldset>
    <recaptcha @error="onError" @success="onSuccess" @expired="onExpired" />
    <button
      type="submit"
    >
      Submit Form
    </button>
  </form>
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
    onSuccess(token) {
      console.log('Succeeded:', token)
      // here you submit the form
      this.$refs.form.submit()
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