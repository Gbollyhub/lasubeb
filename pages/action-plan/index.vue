<template>
  <div data-w-id="61eb59ef-3efb-8e23-10aa-9a7cd933685f" class="page-wrapper">
  <section id="feature-section" data-w-id="5140f89c-d73a-5b04-4de6-765fd78f9495" class="feature-section">
    <search/>
    <div class="flex-container w-container">
      <h2 class="heading-2 featured"><span class="text-span">LASUBEB ACTION PLAN</span></h2>
     <div class="page-img-mask"><img src="../../assets/images/actionplan-banner.jpg" alt="LASUBEB Pillars" class="feature-image-pillars"></div>
      <div class="page-content-block ekoexcel">
                <p class="paragraph-2">The Education Partnership (TEP) Centre is proud to collaborate with the Lagos State Universal 
                  Basic Education Board (LASUBEB) on the digital dissemination of her Action Plans and our independent projects monitoring data, 
                  as part of efforts to increase citizen awareness and agency, as well as facilitate public sector accountability and transparency. 
                  This initiative serves a sustainable mechanism to establish the gains of TEP Centre's collaboration with Lagos SUBEB under the On Nigeria programme.


        </p>
        <br><br>
       
       <h4 style="font-family:Oswald, sans-serif;font-size:20px">On Nigeria</h4>
        <br>
         <p class="paragraph-2">The On Nigeria programme is targeted at promoting accountability, transparency and good 
           governance in Nigeria by reducing retail corruption and strengthening Nigerian-led anti-corruption efforts. TEP 
           Centre with support from the John D. & Catherine T. MacArthur Foundation was commissioned from 2017 to 2021 to track 
           the utilisation of the Universal Basic Education (UBE) funds in Lagos State in order to improve public sector accountability 
           and transparency. In line with this mandate, Lagos state Action Plans are simplified for education stakeholders at state and 
           community levels, to equip them with information to assess the relevance and effectiveness of UBE interventions and carry out 
           effective monitoring, course correction and advocacy. 
Furthermore, during this four-year period, TEP Centre also recruited and trained community-based volunteers and supervisors to monitor and 
track the status of projects assigned to their schools and communities from the annual Lagos SUBEB action plans. Consequently, 
TEP Centre has compiled and published an independent monitoring report of UBE-funded projects within the 2015-2017 action plans.


        </p>
           <br><br><br>
            <h4 style="font-family:Oswald, sans-serif;font-size:20px">Lagos SUBEB Action Plans  & TEP Monitoring Report</h4>
        <br>
         <p class="paragraph-2">
           The action plan is an essential document prepared annually by the State Universal Basic Education Boards (SUBEB) as part of the requirements for accessing the UBE matching grant from the Universal Basic Education Commission (UBEC). It is a comprehensive document that describes in detail intervention projects and activities proposed to be implemented in Early Childhood Care Development and Education (ECCDE), primary and junior secondary schools across the state.
The action plan is a document that should be made public by all State Universal Education Boards (SUBEBs), for citizens to be better informed in order for them to assess the relevance and effectiveness of UBE interventions. This, ultimately, helps in promoting inclusion and strengthening of public service delivery in their communities. Please view available action plans below.

         </p>
         <br><br>
         <div class="actionplan-row">
        <div @click="toActionPlan(item.year)" v-for="(item, index) in actionplans" :key="item.id" class="actionplan-col" :style="{background: index == 0 ? 'rgba(0, 143, 251, 0.85)' : 
                                                       index == 1 ? 'rgba(0, 227, 150, 0.85)' : 
                                                       index == 2 ? 'rgba(254, 176, 25, 0.85)' : 
                                                       index == 3 ? 'rgba(255, 69, 96, 0.85)' : 
                                                       index == 4 ? 'rgba(119, 93, 208, 0.85)' : 
                                                       index == 5 ? 'rgba(0, 143, 251, 0.85)' : 
                                                       index == 6 ? 'rgba(0, 227, 150, 0.85)' : 
                                                       index == 7 ? 'rgba(254, 176, 25, 0.85)' : 
                                                       index == 8 ? 'rgba(255, 69, 96, 0.85)' : 'rgba(0, 143, 251, 0.85)'}">
               Y{{item.year}} ACTION PLAN                                        
        
        </div>
         </div>
      </div>
    </div>
  </section>
<subebPartner/>
<newsletter/>
  </div>
</template>
<script>
import newsletter from '@/components/newsletter/newsletter.vue'
import subebPartner from '@/components/subeb-partner/subeb-partner.vue'
import Search from '~/components/search/search.vue'
import axios from 'axios'
export default {
  components:{
    newsletter,
    subebPartner,
    Search
  },
     async asyncData({ params }) {
    
      const response = await axios.get(`https://tep-dashboard.herokuapp.com/get-allocation`)

    return {
      actionplans: response.data
      }
   },
   methods:{
    toActionPlan(year){
        localStorage.setItem('sy', year)
        this.$router.push('/actionplan-report')
    }
   },
  head(){
    return{
        htmlAttrs: {
        'data-wf-page': "5f42a37a689671d267880140",
        'data-wf-site': "5eff351b1692982c192ff95b"
              },
          title: 'LASUBEB Action Plan',
          meta: [
      { hid: 'description', name: 'description', content: 'LASUBEB Action Plan' },
      { hid: 'description', property:'og:description', content: 'LASUBEB Action Plan' },
      { hid: 'description', property:'twitter:description', content: 'LASUBEB Action Plan' }
],
    }
  }
}
</script>

<style scoped>
.actionplan-row {
display: flex;
flex-direction: row;
flex-wrap: wrap;
}
.actionplan-col {
  margin-right: 2rem;
    margin-bottom: 3px;
    cursor: pointer;
    border-radius: 10px;
    height: 200px;
    color: rgb(28, 28, 28);
flex-basis: 24%;
display: flex;
justify-content: center;
align-items: center;
font-size: 16px;
font-weight: 600;
font-family: Oswald, sans-serif  !important;
}

@media screen and (max-width: 479px) {
.actionplan-col {
    cursor: pointer;
    border-radius: 10px;
    height: 200px;
    color: rgb(28, 28, 28);
flex-basis: 100%;
display: flex;
justify-content: center;
align-items: center;
font-size: 16px;
font-weight: 600;
font-family: Oswald, sans-serif  !important;
}
 }
</style>

