<template>
  <div data-w-id="61eb59ef-3efb-8e23-10aa-9a7cd933685f" class="page-wrapper">
<section id="feature-section" class="feature-section news">
  <search/>
      <h2 class="heading-2 featured"><span class="text-span">EDUCATION DATA OF</span> LASUBEB</h2>
      <div class="education-data_list w-container">
        <a v-for="post in posts" :key="post.id" data-title="Lagos State Delegates understudy Edo State Education sector transformation" href="/lasubeb-emis-head-teachers-contact-data" class="education-data-card w-inline-block">
          <div class="news-image-mask"><img :src="post.DataPhotoUrl" alt="Lagos Delegates understudy Edo State Education Sector Transformation" loading="eager" class="education-data-img"></div>
          <h2 class="events-title">{{ post.DataTitle }}</h2>
        </a>
      </div>
    </section>
    <section id="feature-section" class="statutory-units">
      <div class="dept-hod-wrapper w-container"></div>
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
import axios from 'axios'
import Search from '~/components/search/search.vue'
export default {
  components:{
    newsletter,
    subebPartner,
     dataSection,
    Search
  },
   async asyncData({ params }) {
    const  data  = await axios.get('http://admin-cms.lasubeb.lg.gov.ng/education-data')
    return {
      posts: data.data
      }
   },
  head(){
    return{
        htmlAttrs: {
        'data-wf-page': "5fe85c999264b4814bf81f9c",
        'data-wf-site': "5eff351b1692982c192ff95b"
              },
          title: 'LASUBEB Education Data',
          meta: [
      { hid: 'description', name: 'description', content: 'LASUBEB Education Data' },
      { hid: 'description', property:'og:description', content: 'LASUBEB Education Data' },
      { hid: 'description', property:'twitter:description', content: 'LASUBEB Education Data' }
],
    }
  }
}
</script>
