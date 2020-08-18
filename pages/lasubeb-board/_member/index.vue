<template>
<div data-w-id="937d40df-8ce4-010b-69f5-b421e2944efd" class="page-wrapper">
          <section id="feature-section" class="feature-section board-detail">
      <h2 class="heading-2 board-profile-detailed"><span class="text-span">THE BOARD</span> COMPOSITION | {{boardMember.MemberName}}</h2>
    </section>
    <div class="board-detail-container w-container">
      <div class="testimonial-block"><img :src="getAdminUrl + boardMember.MemberImage.url"  :alt="boardMember.MemberName" class="image"></div>
      <div class="testimonial-block blank">
        <h2 class="board-member-h2-detailed">{{boardMember.MemberName}}</h2>
        <div class="board-member-profile w-clearfix"> {{ boardMember.Biography }}</div>
      </div>
    </div>
    <br><br>
    <div class="featured-board-members">
      <div class="wrapper">
        <h1 class="heading other-board-members">OTHER LASUBEB <span class="text-span">BOARD MEMBERS</span></h1>
        <div class="news-wrap w-clearfix">
          <div class="board-others-list">
            <div v-for="member in getBoardMembers.slice(0,4)" :key="member.id" class="board-member-list w-inline-block">
               <a :href="`/lasubeb-board/${member.id}`" aria-current="page" >
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
export default {
  components:{
    newsletter,
    subebPartner,
    dataSection
    
  },
    async asyncData({ params }) {
    const  data  = await axios.get('http://admin-lasubeb.correctornot.com/board-compositions/' + params.member)
    return {
      boardMember: data.data
      }
  },
   computed:{
   ...mapGetters([
      'getAdminUrl',
      'getBoardMembers'
   ])
  },
  head(){
    return{
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

      