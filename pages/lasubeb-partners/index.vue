<template>
  <div data-w-id="61eb59ef-3efb-8e23-10aa-9a7cd933685f" class="page-wrapper">
        <section id="feature-section" class="feature-section news">
      <h2 class="heading-2 featured"><span class="text-span">become </span>a lasubeb partner</h2>
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

      