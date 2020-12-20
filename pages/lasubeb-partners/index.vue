<template>
  <div data-w-id="61eb59ef-3efb-8e23-10aa-9a7cd933685f" class="page-wrapper">
         <section id="feature-section" class="feature-section news">
      <h2 class="heading-2 featured"><span class="text-span">become </span>a lasubeb partner</h2>
      <div class="paragraph-2 center">We are open to partners with ideas, solutions to achieve our objectives. <br>Kindly fill the form below and we&#x27;ll get back to you as soon as possible</div>
      <div class="partner-register w-form">
        <form id="email-form" name="email-form" data-name="Email Form" class="contact-form"><label for="name-4" class="form-label contact">Name</label><input type="text" class="form-text-field contact w-input" maxlength="256" name="name-3" data-name="Name 3" placeholder="Full name" id="name-3" required=""><label for="email-4" class="form-label contact">Email Address</label><input type="email" class="form-text-field contact w-input" maxlength="256" name="email-3" data-name="Email 3" placeholder="Email address" id="email-3" required=""><label for="PhoeNumber" class="form-label contact">Contact Phone Number</label><input type="tel" class="form-text-field contact w-input" maxlength="256" name="PhoeNumber" data-name="PhoeNumber" placeholder="Phone Number" id="PhoeNumber" required=""><label for="partner-category" class="form-label contact">Partnership Category</label><select id="partner-category" name="partner-category" data-name="partner category" required="" class="select-form-dropdown w-select">
            <option value="TechPartner">Technology Partner</option>
            <option value="IntEducation">International Education Partner</option>
            <option value="LocalEducation">Local Education Partner</option>
            <option value="PrivateOrg">Private Organisation Partner</option>
            <option value="Other">Other Partner</option>
          </select><label for="note" class="form-label contact">Note</label><textarea placeholder="Message" maxlength="5000" id="note" name="note" required="" data-name="note" class="form-textarea contact w-input"></textarea>
          <div class="w-form-formrecaptcha captcha g-recaptcha g-recaptcha-error g-recaptcha-disabled g-recaptcha-invalid-key"></div><input type="submit" value="Submit" data-wait="Please wait..." class="form-submit w-button">
        </form>
        <div class="w-form-done">
          <div>Thank you! Your submission has been received!</div>
        </div>
        <div class="w-form-fail">
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
export default {
  components:{
    newsletter,
    subebPartner
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

