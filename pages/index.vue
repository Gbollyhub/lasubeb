<template>
<div data-w-id="661b91c8-2114-6795-2e17-1bba3da77fd7" class="page-wrapper">
  <section id="feature-section" class="feature-section">
      <h2 class="heading-2 featured"><span class="text-span">Message</span> from LASUBEB chairman</h2>
      <div class="message-container w-container">
        <div class="message-div-block w-clearfix">
          <div class="home-message-img-mask"><img src="../assets/images/lasubeb_wahab_alawiye-king.jpg" alt="Hon. Dr. Alawiye-King, Executive Chairman, LASUBEB" srcset="../assets/images/lasubeb_wahab_alawiye-king-p-500.jpeg 500w, images/lasubeb_wahab_alawiye-king.jpg 767w" sizes="(max-width: 479px) 41vw, (max-width: 767px) 44vw, (max-width: 991px) 41vw, 248.0113525390625px" class="home-feature-img"></div>
        </div>
        <div class="message-div-block mesage-content">
          <p class="home-p w-clearfix">In 2019, Lagos State Governor Babajide Sanwo-Olu initiated the EKO EXCEL 
            (Excellence in Child Education and Learning) initiative, an “educational transformation programme … to reposition basic education in Lagos State to enhance teacher effectiveness through leveraging technology…” 
            EKOEXCEL is already having a noticeable impact on the quality of classroom instruction, judging by the enthusiasm of the teachers and head teachers 
            who have experienced its technology-integrated learning platform and practical professional development!<br><br>Now, to ensure that EKO EXCEL lives upto its promise, 
            the Lagos State Universal Basic Education Board (LASUBEB) must institutionalise the conditions and support structures that would facilitate full-scale implementation 
            and long-term sustainability.<br><br>This Strategic Plan outlines how LASUBEB will step up to that responsibility. The plan was developed during a 3-day retreat of 
            50 participants, including SUBEB board members, SUBEB directors and heads of unit, LGEA education secretaries, and union leaders. 
          <br><br>Now that we have a results-focused strategic plan, the next step is disciplined implementation; that is how we will turn our good intentions into 
          positive outcomes for our learners. LASUBEB is totally committed to following through on this plan, to ensure full realisation of 
          Governor Sanwo-Olu’s EKOEXCEL initiative and to <strong>LEAVE NO CHILD BEHIND! </strong>I invite you to join us.<br><br>‍<br><strong>Hon. Alawiye-King | Executive Chairman, Lagos Universal Basic Education Board </strong>
          <a href="/lasubeb-board" class="inline-link-reverse message"><strong data-title="learn more" class="bold-text-2"></strong></a></p>
        </div>
      </div>
    </section>
     <div class="role-featured-section">
      <div class="role-wrapper w-container">
        <div class="subeb-featured-role-section w-row">
          <div class="role-feature-col w-clearfix w-col w-col-7 w-col-stack">
            <h1 class="heading">What We Do At LASUBEB</h1>
            <div data-hover="" data-delay="0" class="accordion w-dropdown">
              <div class="role-feature-toggle _1 w-dropdown-toggle">
                <div class="w-icon-dropdown-toggle"></div>
                <div class="all-text-block">Formulate the policy guidelines</div>
              </div>
              <nav class="accordion-list w-dropdown-list">
                <div class="accordion-content">Formulate the policy guidelines for the successful operation of the Universal Basic Education Programme in the State.</div>
              </nav>
            </div>
            <div data-hover="" data-delay="0" class="accordion _2 w-dropdown">
              <div class="role-feature-toggle _2 w-dropdown-toggle">
                <div class="w-icon-dropdown-toggle"></div>
                <div class="all-text-block">Support State Capacity Building</div>
              </div>
              <nav class="accordion-list w-dropdown-list">
                <div class="accordion-content">Support State Capacity Building for teachers and managers of basic education in the State.</div>
              </nav>
            </div>
            <div data-hover="" data-delay="0" class="accordion w-dropdown">
              <div class="role-feature-toggle _3 w-dropdown-toggle">
                <div class="w-icon-dropdown-toggle"></div>
                <div class="all-text-block">Co-ordinate and supervise teaching and learning</div>
              </div>
              <nav class="accordion-list w-dropdown-list">
                <div class="accordion-content">Co-ordinate and supervise teaching and learning in Public Primary Schools and Junior Secondary Schools in the State.</div>
              </nav>
            </div><a data-title="More" href="/about-lasubeb-and-statutory-roles" class="inline-link-reverse message card"></a></div>
          <div class="role-feature-col pic w-col w-col-5 w-col-stack"></div>
        </div>
      </div>
    </div>

       <div class="featured-news-section">
      <h1 class="heading featured-news">LASUBEB <span class="text-span">NEWS &amp; BLOG</span></h1>
            <div class="wrapper">
        <div class="news-wrap w-clearfix">
<div class="home-news-list owl-carousel">
  <div v-for="news in getNews" :key="news.id">
     <a :data-title="news.NewsTitle" :href="`/lasubeb-news/${news.NewsTitle}/${news.id}`" class="news-list w-inline-block">
              <div class="featured-headin">{{news.NewsTitle}}</div>
              <div class="featured-date-block">{{news.created_at | moment }}</div>
               <div v-if="news.NewsImages.length > 0">
              <div v-for="image in news.NewsImages.slice(0,1)" :key="image.id">
                   <img :src="getAdminUrl + image.url" :alt="news.NewsTitle" class="news-featured-img">
              </div>
               </div>
                 <p class="paragraph block-with-text">
              {{ news.NewsBody }}
            </p>
            </a>
    </div>
        </div>
            </div>
       </div> 
       </div>
  
<newsletter/>
</div>
</template>
<script>
import newsletter from '@/components/newsletter/newsletter.vue'
import sitefooter from '@/components/sitefooter/sitefooter.vue'
import { mapGetters } from 'vuex'
import moment from 'moment'
import marked from 'marked'
export default {
  components:{
    newsletter
  },
    data(){
    return{
      img: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg",
      gradient: 'linear-gradient(180deg, hsla(0, 0%, 100%, 0) 60%, rgba(0, 45, 97, 0.88) 86%),'
    }
  },
    filters:{
       marked: marked,
   moment: function(date){
      return moment(date).format('MMMM Do YYYY');
   }
  },
  computed:{
    ...mapGetters([
      'Homepage',
       'getImageSlider',
      'getAdminUrl',
       'getNews'
    ])
  },
  head(){
    return{
       htmlAttrs: {
        'data-wf-page': "5f1417f9ca411a586c4b8305",
        'data-wf-site': "5eff351b1692982c192ff95b"
              },
          title: 'LASUBEB:: LAGOS STATE UNIVERSAL BASIC EDUCATION BOARD',
          meta: [
      { hid: 'description', name: 'description', content: 'The Lagos State Universal Basic Education is an agency under Lagos state Ministry of Education setup according to Law to co-ordinate, manage, implement the Universal Basic Education program of the Lagos State in conjunction with the Federal Government of Nigeria.' }
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

      