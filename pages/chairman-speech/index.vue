<template>
<div data-w-id="661b91c8-2114-6795-2e17-1bba3da77fd7" class="page-wrapper">
  <section id="feature-section" class="feature-section">
    <search/>
     <h2 class="heading-2 featured"><span class="text-span">Message</span> Hon. Alawiye-King | Executive Chairman LASUBEB</h2>
      <div class="message-container w-container">
        <div class="message-div-block w-clearfix">
          <div class="home-message-img-mask"><img :src="getHomepage.section1Image" alt="Hon. Dr. Alawiye-King, Executive Chairman, LASUBEB"  class="home-feature-img"></div>
        </div>
        <div class="message-div-block mesage-content">
           <div class="p-detail-news" v-html="marked(getHomepage.ChairmanFullMessage)"></div>
           <p style="float:right;font-size:14px" class="home-p w-clearfix"><strong style="margin-right:20px">View Board Composition</strong>
          <a href="/lasubeb-board" class="inline-link-reverse message"><strong data-title="learn more" class="bold-text-2"></strong></a></p>

        </div>
      </div>
    </section>
</div>
</template>
<script>
import newsletter from '@/components/newsletter/newsletter.vue'
import sitefooter from '@/components/sitefooter/sitefooter.vue'
import { mapGetters } from 'vuex'
import moment from 'moment'
import marked from 'marked'
import Search from '~/components/search/search.vue'
export default {
  components:{
    newsletter,
    Search
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
      'getHomepage',
       'getImageSlider',
      'getAdminUrl',
       'getNews'
    ])
  },
  methods:{
    marked: function(input) {
      return marked(input);
    }
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
p {
margin-bottom: 33px;
    padding-left: 26px;
    font-family: Ubuntu,Helvetica,sans-serif;
    color: #818181;
    font-size: 12px;
    line-height: 1.8em;
    text-align: justify;
}
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

