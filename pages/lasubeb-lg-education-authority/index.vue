<template>
  <div>
<div data-w-id="61eb59ef-3efb-8e23-10aa-9a7cd933685f" class="page-wrapper">
    <section id="feature-section" class="feature-section">
      <h2 class="heading-2 featured"><span class="text-span">LOCAL GOVERNMENT</span> EDUCATION AUTHORITY (LGEA)</h2>
      <div class="page-content-block">
        <p class="paragraph-2">LASUBEB as a government agency is duly constituted by law and efficiently run with the following departments, statutory units and experienced personnel.</p>
      </div>
      <div class="w-form">
        <form id="email-form" name="email-form" data-name="Email Form"><label for="LGEA">Name</label><select id="LGEA" name="LGEA" data-name="LGEA" required="" class="w-select"><option value="First">First Choice</option><option value="Second">Second Choice</option><option value="Third">Third Choice</option></select></form>
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
  </div>
</template>
<script>
import newsletter from '@/components/newsletter/newsletter.vue'
import subebPartner from '@/components/subeb-partner/subeb-partner.vue'
import dataSection from '@/components/data-section/data-section.vue'
export default {
  components:{
    newsletter,
    subebPartner,
    dataSection
  },
  head(){
    return{
          title: 'LASUBEB LG Education Authority',
          meta: [
      { hid: 'description', name: 'description', content: 'LASUBEB LG Education Authority' },
      { hid: 'description', property:'og:description', content: 'LASUBEB LG Education Authority' },
      { hid: 'description', property:'twitter:description', content: 'LASUBEB LG Education Authority' }
],
    }
  }
}
</script>

      