<template>
  <div data-w-id="61eb59ef-3efb-8e23-10aa-9a7cd933685f" class="page-wrapper">
    <section id="feature-section" class="feature-section news">
      <h2 class="heading-2 featured"><span class="text-span">latest NEWS</span> LASUBEB</h2>
      <div class="news-container-list w-container">
        <div v-for="news in getNews" :key="news.id">
            <a :data-title="news.NewsTitle" :href="`/lasubeb-news/${news.NewsTitle}/${news.id}`" class="news-list-div-block w-inline-block">
          <div class="news-image-mask" v-for="image in news.NewsImages.slice(0,1)" :key="image.id">
            <img :src="getAdminUrl + image.url" :alt="news.NewsTitle" width="530" loading="eager" class="news-img-list">
            </div>
          <h2 class="news-headline">{{news.NewsTitle}}</h2>
          <p class="news-paragraph w-clearfix">by LASUBEB Publicity unit | {{news.created_at}}</p>
        </a>
        </div>
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
import { mapGetters } from 'vuex'
import marked from 'marked'
export default {
  components:{
    newsletter,
    subebPartner,
    dataSection
  },
  computed:{
   ...mapGetters([
     'getAdminUrl',
      'getNews'
   ])
  },
  head(){
    return{
       htmlAttrs: {
        'data-wf-page': "5f416a15098ed154e8830c02",
        'data-wf-site': "5eff351b1692982c192ff95b"
              },
          title: 'LASUBEB NEWS',
          meta: [
      { hid: 'description', name: 'description', content: 'LASUBEB NEWS' },
      { hid: 'description', property:'og:description', content: 'LASUBEB NEWS' },
      { hid: 'description', property:'twitter:description', content: 'LASUBEB NEWS' }
],
    }
  }
}
</script>