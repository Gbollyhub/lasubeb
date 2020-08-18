<template>
  <div data-w-id="89adaaaa-2335-f8b3-5bc9-bf6f952a2fc5" class="page-wrapper">
    <section id="feature-section" class="feature-section">
      <div class="board-intro-container w-container">
        <h2 class="heading-2 featured"><span class="text-span">THE BOARD</span> COMPOSITION</h2>
        <p class="board-composiiton-p">The Board under the Chairmanship of Hon. Wahab Alawiye-King was appointed by the Lagos State Governor, His Excellency, Mr. Babajide Olushola Sanwo-Olu on 11th September, 2019</p>
      </div>
      <div class="lasubeb-row">
  <div v-for="member in getBoardMembers" :key="member.id" class="lasubeb-col">
    <div class="lasubeb-col-div">
<a style="text-decoration:none" :href="`/lasubeb-board/${member.id}`"> 
    <div class="board-img-mask"><img :src="getAdminUrl + member.MemberImage.url" :alt="member.MemberName" width="338"  class="board-img admin-img"></div>
  <h4 class="boardname-h4">{{member.MemberName}}</h4></a>  
          <div class="board-position">{{member.Position}}</div>
          <p class="block-with-text board-paragraph w-clearfix">{{ member.Biography}}<a href="lasubeb-board-member-detail-page.html" class="inline-link-board"></a></p>
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
     'getBoardMembers'
   ])
  },
  head(){
    return{
          title: 'LASUBEB BOARD',
          meta: [
      { hid: 'description', name: 'description', content: 'The Board under the Chairmanship of Hon. Wahab Alawiye-King was appointed by the Lagos State Governor, His Excellency, Mr. Babajide Olushola Sanwo-Olu on 11th September, 2019' },
      { hid: 'description', property:'og:description', content: 'The Board under the Chairmanship of Hon. Wahab Alawiye-King was appointed by the Lagos State Governor, His Excellency, Mr. Babajide Olushola Sanwo-Olu on 11th September, 2019' },
      { hid: 'description', property:'twitter:description', content: 'The Board under the Chairmanship of Hon. Wahab Alawiye-King was appointed by the Lagos State Governor, His Excellency, Mr. Babajide Olushola Sanwo-Olu on 11th September, 2019' }
],
    }
  }
}
</script>

  <style scoped>
  .admin-img{
    -webkit-filter: grayscale(100%); /* Safari 6.0 - 9.0 */
  filter: grayscale(100%);
  }
  .admin-img:hover{
      -webkit-filter: none; /* Safari 6.0 - 9.0 */
  filter: none;
  }
  .lasubeb-row{
max-width: 100%;
    margin: 0 auto;
    height: 100vh;
  }

  .lasubeb-row::after {
      content: "";
    display: table;
    clear: both;  
    } 
  .lasubeb-col{
    float: left;
  width: 33.33%;
  padding: 10px;
  height: auto;
  margin-bottom: 30px;
  text-align: center;
  }
    .lasubeb-col-div{
display: block;
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