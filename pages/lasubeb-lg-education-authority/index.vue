<template>
<div data-w-id="61eb59ef-3efb-8e23-10aa-9a7cd933685f" class="page-wrapper">
    <section id="feature-section" class="feature-section">
      <h2 class="heading-2 featured"><span class="text-span">LOCAL GOVERNMENT</span> EDUCATION AUTHORITY (LGEA)</h2>
      <div class="page-content-block">
        <p class="paragraph-2">LASUBEB as a government agency is duly constituted by law and efficiently run with the following departments, statutory units and experienced personnel.</p>
      </div>
      <div v-show="lgea.Active" v-for="lgea in getLgea" :key="lgea.id" data-hover="" data-delay="0" id="school-support-services" data-w-id="e14723d1-4b79-daf7-01bf-225fe16c9275" class="lgea-accordion w-dropdown">
        <div class="dept-unit-accordion-toggle w-dropdown-toggle">
          <div class="dept-unit-icon w-icon-dropdown-toggle"></div>
          <div class="accordion-text-block">{{ lgea.LgeaTitle }} LGEA</div>
        </div>
        <nav class="dept-unit-accordion-list w-dropdown-list">
          <div class="dept-column w-row">
            <div class="left-col-details w-col w-col-3">
              <div class="lgea-img-mask"><img :src="getAdminUrl + lgea.HodImage.url" :alt="lgea.LgeaTitle" class="lgea-img"></div>
              <div>
                <h5 class="hod-data"><strong>{{ lgea.HodName }}</strong></h5>
                <div class="title-lgea-position">{{ lgea.HodPosition }}<br><br><a :href="`tel:+234 ${lgea.HodPhoneNumber}`" class="dept-hod-phone-nos">{{ lgea.HodPhoneNumber }}</a></div>
              </div>
            </div>
            <div class="dept-function-detail-col w-col w-col-9">
              <div class="section-unit-title">CONTACT DETAILS</div>
              <div class="lgea-address">{{ lgea.ContactAddress }}</div>
            </div>
          </div>
        </nav>
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
export default {
  components:{
    newsletter,
    subebPartner,
    dataSection
  },
  computed:{
    ...mapGetters([
         'getAdminUrl',
         'getLgea'
    ])
  },
  head(){
    return{
        htmlAttrs: {
        'data-wf-page': "5f205b8f6d83560c7d5a5974",
        'data-wf-site': "5eff351b1692982c192ff95b"
              },
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

      