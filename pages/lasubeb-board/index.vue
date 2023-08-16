<template>
  <div data-w-id="937d40df-8ce4-010b-69f5-b421e2944efd" class="page-wrapper">
    <section id="feature-section" class="feature-section">
      <search/>
      <div class="board-intro-container w-container">
        <h2 class="heading-2 featured"><span class="text-span">THE BOARD</span> COMPOSITION</h2>
        <p class="board-composiiton-p">{{description.PageDescription}}</p>
      </div>
      <div class="board-container-list w-container">
        <div v-for="member in getBoardMembers" :key="member.id" class="board-member-div-block">
          <div class="board-img-mask">
            <img :src="member.MemberImage" :alt="member.MemberName"  width="338" :class="[class1 , (member.isBoardMember == true) ? class2 : '']">
            </div>
          <h4 class="boardname-h4">{{member.MemberName}}</h4>
          <div class="board-position">{{member.Position}}</div>
          <p class="board-paragraph block-with-text w-clearfix">{{ member.Biography}} </p>
           <p style="margin-top:-22px;" class="board-paragraph w-clearfix">
       <a @click="addIdToStore(member.id)" :href="`/lasubeb-board/${member.MemberName}/${member.id}`" class="inline-link-board"></a>
             </p>
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
import Search from '~/components/search/search.vue'
export default {
  components:{
    newsletter,
    subebPartner,
    dataSection,
    Search
  },
  async asyncData({ params }) {
    const  data  = await axios.get('http://admin-cms.lasubeb.lg.gov.ng/board-composition-page')
    return {
      description: data.data
      }
   },
  data(){
  return{
    class1: 'board-img',
    class2: 'others'
  }
  },
  computed:{
   ...mapGetters([
      'getBoardMembers',
      'getHomepage'
   ])
  },
  methods:{
   addIdToStore(id){
     this.$store.commit('setMemberId',id)
   }
  },
  head(){
    return{
       htmlAttrs: {
        'data-wf-page': "5f1417f9ca411ab1744b8310",
        'data-wf-site': "5eff351b1692982c192ff95b"
              },
          title: 'LASUBEB BOARD COMPOSITION',
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
