<template>
  <div data-w-id="61eb59ef-3efb-8e23-10aa-9a7cd933685f" class="page-wrapper">
    <section id="feature-section" class="feature-section">
      <h2 class="heading-2 featured"><span class="text-span">lASUBEB NEWS </span> &amp; BLOG</h2>
      <div class="content-news-block w-row">
        <div class="news-detail-col fullcontent w-col w-col-8 w-col-stack">
          <h2 class="news-headline-detail">{{news.NewsTitle}}</h2>
          <!-- <div class="news-image-mask" v-for="image in news.NewsImages" :key="image.id"> -->
              <div>
            <img :src="news.url" :alt="news.NewsTitle" width="916" loading="eager" class="news-img"></div>
          <p class="news-info-details w-clearfix">by LASUBEB Publicity unit | {{news.NewsDate | moment}}</p>
          <div class="p-detail-news" v-html="marked(news.NewsBody)"></div>
        </div>
        <div class="news-detail-col side-col w-col w-col-4 w-col-stack">
          <div v-for="news in getNews.slice(0,2)" :key="news.id">
            <a :data-title="news.NewsTitle" :href="`/lasubeb-news/${news.NewsTitle}/${news.id}`" class="news-list w-inline-block">
            <div class="featured-headin">{{news.NewsTitle}}</div>
            <div class="featured-date-block">{{news.NewsDate | moment}}</div>
             <!-- <div v-if="news.NewsImages.length > 0">
            <div v-for="image in news.NewsImages.slice(0,1)" :key="image.id"> -->
              <div>
                <div>
            <img :src="news.url" :alt="news.NewsTitle" class="news-featured-img">
            </div>
             </div>
            <p class="paragraph block-with-text" >
              {{ news.NewsBody }}
            </p>
          </a>  
          </div>
        </div>
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
import axios from 'axios'
import marked from 'marked'
import moment from 'moment'
export default {
  components:{
    newsletter,
    subebPartner,
    dataSection
  },
   async asyncData({ params }) {
    const  data  = await axios.get('http://admin-cms.lasubeb.lg.gov.ng/lasubeb-blogs/' + params.id)
    return {
      news: data.data
      }
   },
     filters:{
   moment: function(date){
      return moment(date).format('MMMM Do YYYY');
   }
  },
  computed:{
   ...mapGetters([
      'getAdminUrl',
       'getNews'
   ])
  },
    methods: {
    marked: function(input) {
      return marked(input);
    }
  },
  head(){
    return{
       htmlAttrs: {
        'data-wf-page': "5f4178b693052b6828a44701",
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

<style scoped>
/* styles for '...' */ 
.block-with-text {
  /* hide text if it more than N lines  */
  overflow: hidden;
  /* for set '...' in absolute position */
  position: relative; 
  /* use this value to count block height */
  line-height: 1.2em;
  /* max-height = line-height (1.2) * lines max number (3) */
  max-height: 3.6em; 
  /* fix problem when last visible word doesn't adjoin right side  */
  text-align: justify;
  
  /* */
  margin-right: -1em;
  padding-right: 1em;
}
.block-with-text:before {
  /* points in the end */
  content: '...';
  /* absolute position */
  position: absolute;
  /* set position to right bottom corner of block */
  right: 0;
  bottom: 0;
}
.block-with-text:after {
  /* points in the end */
  content: '';
  /* absolute position */
  position: absolute;
  /* set position to right bottom corner of text */
  right: 0;
  width: 1em;
  /* set width and height */
  height: 1em;
  margin-top: 0.2em;
  background: white;
}
</style>