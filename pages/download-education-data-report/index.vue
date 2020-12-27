<template>
  <div data-w-id="61eb59ef-3efb-8e23-10aa-9a7cd933685f" class="page-wrapper">
       <section id="feature-section" class="feature-section news">
      <h2 class="heading-2 featured"><span class="text-span">EDUCATION QUARTERLY REPORT</span> - LASUBEB</h2>
      <div class="education-data-container w-container"></div>
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
export default {
  components:{
    newsletter,
    subebPartner,
     dataSection
  },
  head(){
    return{
        htmlAttrs: {
        'data-wf-page': "5fe85d4afd13f725aada0c33",
        'data-wf-site': "5eff351b1692982c192ff95b"
              },
          title: 'LASUBEB Download Education Data ReportLASUBEB Download Education Data Report',
          meta: [
      { hid: 'description', name: 'description', content: 'LASUBEB Download Education Data ReportLASUBEB Download Education Data Report' },
      { hid: 'description', property:'og:description', content: 'LASUBEB Download Education Data ReportLASUBEB Download Education Data Report' },
      { hid: 'description', property:'twitter:description', content: 'LASUBEB Download Education Data ReportLASUBEB Download Education Data Report' }
],
    }
  }
}
</script>
