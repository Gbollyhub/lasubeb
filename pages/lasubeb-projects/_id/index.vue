<template>
  <div data-w-id="61eb59ef-3efb-8e23-10aa-9a7cd933685f" class="page-wrapper">
    <section id="feature-section" class="feature-section">
      <search/>
      <h2 class="heading-2 featured"><span class="text-span">lASUBEB PROJECTS</span></h2>
      <div class="content-news-block w-row">
        <div class="news-detail-col fullcontent w-col w-col-8 w-col-stack">
          <h2 class="news-headline-detail w-clearfix">{{ project.ProjectTitle }}  <span class="inline-span-status"> {{ project.Status }}</span></h2>
          <div class="news-image-mask2">
            <div data-animation="slide" data-easing="ease-in-out-expo" data-duration="500" data-infinite="1" class="project-display-slider w-slider">
              <div class="project-display-mask w-slider-mask">
                <div class="project-display-slide w-slide"><img :src="project.ProjectPhotoUrl" alt="Lagos Delegates understudy Edo State Education Sector Transformation" width="916" loading="eager" class="news-img"></div>
                <div v-if=" project.ProjectPhotoUrl2 != null" class="project-display-slide w-slide"><img :src="project.ProjectPhotoUrl2" alt="Lagos Delegates understudy Edo State Education Sector Transformation" width="916" loading="eager" class="news-img"></div>
                <div v-if=" project.ProjectPhotoUrl3 != null" class="project-display-slide w-slide"><img :src="project.ProjectPhotoUrl3" alt="Lagos Delegates understudy Edo State Education Sector Transformation" width="916" loading="eager" class="news-img"></div>
                  <div v-if=" project.ProjectPhotoUrl4 != null" class="project-display-slide w-slide"><img :src="project.ProjectPhotoUrl4" alt="Lagos Delegates understudy Edo State Education Sector Transformation" width="916" loading="eager" class="news-img"></div>
                    <div v-if=" project.ProjectPhotoUrl5 != null" class="project-display-slide w-slide"><img :src="project.ProjectPhotoUrl5" alt="Lagos Delegates understudy Edo State Education Sector Transformation" width="916" loading="eager" class="news-img"></div>
              </div>
              <div class="left-arrow w-slider-arrow-left">
                <div class="w-icon-slider-left"></div>
              </div>
              <div class="right-arrow w-slider-arrow-right">
                <div class="w-icon-slider-right"></div>
              </div>
              <div class="w-slider-nav w-slider-nav-invert w-round w-num"></div>
            </div>
            <p class="news-info-details w-clearfix">by LASUBEB Project unit | {{ project.created_at | moment}}</p>
            <p class="p-detail-news">{{ project.ProjectDescription}}</p>
          </div>
        </div>
        <div class="news-detail-col side-col w-col w-col-4 w-col-stack">
          <div data-hover="" data-delay="0" class="events-type-dropdown w-dropdown">
            <div class="events-dropdwn-toggle w-dropdown-toggle">
              <div class="w-icon-dropdown-toggle"></div>
              <div class="events-type-text-block">Display projects by</div>
            </div>
            <nav class="events-dropdown-list w-dropdown-list">
              <a href="lasubeb-events-international.html" class="events-type w-dropdown-link">Completed projects</a>
              <a href="#" class="events-type w-dropdown-link">On-going projects</a>
              <a href="#" class="events-type w-dropdown-link">New Construction</a>
              <a href="#" class="w-dropdown-link">Renovation &amp; Rehabilitation</a>
              <a href="#" class="w-dropdown-link">School Supplies</a>
            </nav>
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
import Search from '~/components/search/search.vue'

export default {
  components:{
    newsletter,
    subebPartner,
    dataSection,
    Search

  },
  filters: {
    marked: marked
  },
  data(){
    return{
      currentId: '',
      class1: 'board-member-list',
      class2: 'w-inline-block',
      class3: 'w--current'
    }
  },
    async asyncData({ params }) {
    const  data  = await axios.get('http://admin-cms.lasubeb.lg.gov.ng/lasubeb-projects/' + params.id)
    return {
      project: data.data
      }
  },
       filters:{
   moment: function(date){
      return moment(date).format('MMMM Do YYYY');
   }
  },
  created(){
  this.currentId = this.$route.params.id
  },
  methods: {
    marked: function(input) {
      return marked(input);
    }
  },
  head(){
    return{
        htmlAttrs: {
        'data-wf-page': "5fdb998145b18d0a594cf11b",
        'data-wf-site': "5eff351b1692982c192ff95b"
              },
          title: 'LASUBEB Projects details',
          meta: [
      { hid: 'description', name: 'description', content: 'LASUBEB ongoing, completed, rehabilitation, school supplies projects' },
      { hid: 'description', property:'og:description', content: 'LASUBEB ongoing, completed, rehabilitation, school supplies projects' },
      { hid: 'description', property:'twitter:description', content: 'LASUBEB ongoing, completed, rehabilitation, school supplies projects' }
],
    }
  }
}
</script>

<style scoped>
a {
  text-decoration: none;
}

p {
width: auto;
    color: #818181;
    font-size: 0.9em !important;
    line-height: 2.3em !important;
    font-weight: 300;
    text-align: justify;
    -webkit-column-count: auto;
    column-count: auto;
    -webkit-column-gap: 39px;
    column-gap: 39px;
    -webkit-column-rule: 0.1em none #f4f9ff;
    column-rule: 0.1em none #f4f9ff;
}
</style>

