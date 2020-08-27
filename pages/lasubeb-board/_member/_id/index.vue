<template>
<div data-w-id="61eb59ef-3efb-8e23-10aa-9a7cd933685f" class="page-wrapper">
          <section id="feature-section" class="feature-section board-detail">
      <h2 class="heading-2 board-profile-detailed"><span class="text-span">THE BOARD</span> COMPOSITION | {{boardMember.MemberName}}</h2>
    </section>
    <div class="board-detail-container w-container">
      <div class="testimonial-block"><img :src="getAdminUrl + boardMember.MemberImage.url"  :alt="boardMember.MemberName" class="image"></div>
      <div class="testimonial-block blank">
        <h2 class="board-member-h2-detailed"><span class="text-span" style="text-transform:uppercase">{{boardMember.MemberName}}</span></h2>
        <div class="board-member-profile w-clearfix bio" style="color: #fff;" v-html="marked(boardMember.Biography)"></div>
      </div>
    </div>
    <br><br>
    <div class="featured-board-members">
      <div class="wrapper">
        <h1 class="heading other-board-members">OTHER LASUBEB<span class="text-span">BOARD MEMBERS</span></h1>
        <div class="news-wrap w-clearfix">
          <div class="board-others-list owl-carousel">
            <div v-for="member in getBoardMembers" :key="member.id" :class="[class1, class2, (member.id == currentId) ? class3 : '']">
               <a :href="`/lasubeb-board/${member.MemberName}/${member.id}`" aria-current="page" >
              <img :src="getAdminUrl + member.MemberImage.url" :alt="member.MemberName" width="250" class="board-others-img">
              <div class="board-name">{{member.MemberName}}</div></a>
            </div>
              </div>
        </div>
      </div>
    </div>
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
export default {
  components:{
    newsletter,
    subebPartner,
    dataSection
    
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
    const  data  = await axios.get('http://admin-lasubeb.correctornot.com/board-compositions/' + params.id)
    return {
      boardMember: data.data
      }
  },
  created(){
  this.currentId = this.$route.params.id
  },
   computed:{
   ...mapGetters([
      'getAdminUrl',
      'getBoardMembers',
      'getMemberId'
      
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
          title: 'LASUBEB Board Member Detail Page',
          meta: [
      { hid: 'description', name: 'description', content: 'The Lagos State Universal Basic Education is an agency under Lagos state  Ministry of Education step up according to Law to co-ordinate, manage, implement the Universal Basic Education program of the Lagos State in conjunction with the Federal Government of Nigeria.' },
      { hid: 'description', property:'og:description', content: 'The Lagos State Universal Basic Education is an agency under Lagos state  Ministry of Education step up according to Law to co-ordinate, manage, implement the Universal Basic Education program of the Lagos State in conjunction with the Federal Government of Nigeria.' },
      { hid: 'description', property:'twitter:description', content: 'The Lagos State Universal Basic Education is an agency under Lagos state  Ministry of Education step up according to Law to co-ordinate, manage, implement the Universal Basic Education program of the Lagos State in conjunction with the Federal Government of Nigeria.' }
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
    color: #fff;
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

      