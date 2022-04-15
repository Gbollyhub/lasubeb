<template>
  <div data-w-id="61eb59ef-3efb-8e23-10aa-9a7cd933685f" class="page-wrapper">
  <section id="feature-section" data-w-id="5140f89c-d73a-5b04-4de6-765fd78f9495" class="feature-section">
    <search/>
    <div class="flex-container w-container">
       <div class="app-space-between">
           <div>
                <h2 class="heading-2 featured"><span class="text-span">LASUBEB ACTION PLAN AND MONITORING REPORT</span></h2>
           </div>
           <div>
                 <select v-model="year"  class="app-select w-select">
                   <option v-for="item in actionplans" :key="item.year" :value="item.year">{{item.year}}</option>
                </select>   
           </div>
 
       </div>
       <br>
     <div class="content-tab">
        <div class="tab-title" :class= "[ actionplan ? activeTabClass : '']" @click= "openActionPlanTab">ACTION PLAN DATA</div>
        <div v-show="reports.publish" class="tab-title" :class= "[ report ? activeTabClass : '']" @click= "openReportTab">MONITORING REPORT DATA</div>
        <div v-show="reports.publish" class="tab-title" :class= "[ comparison ? activeTabClass : '']" @click= "openComparisonTab">COMPARISON</div>
      </div>
      <ActionPlan  :year="year" v-show="actionplan"/>
      <MonitoringReport :year="year" v-show="report"/>
       <Comparison :year="year" v-show="comparison"/>
    </div>
  </section>
<subebPartner/>
<newsletter/>
  </div>
</template>
<script>
import newsletter from '@/components/newsletter/newsletter.vue'
import subebPartner from '@/components/subeb-partner/subeb-partner.vue'
import ActionPlan from '@/components/action-plan/actionplanTab.vue'
import MonitoringReport from '@/components/action-plan/reportTab.vue'
import Comparison from '@/components/action-plan/comparisonTab.vue'
import Search from '~/components/search/search.vue'
import axios from 'axios'
export default {
  components:{
    newsletter,
    subebPartner,
    Search,
    ActionPlan,
    MonitoringReport,
    Comparison
  },
     async asyncData({ params }) {
    
      const response = await axios.get(`https://tep-dashboard.herokuapp.com/get-allocation`)

    return {
      actionplans: response.data,
      
      }
   },
   data(){
   return{
    activeTabClass: 'active-tab',
      actionplan: true,
      report: false,
      comparison:false,
      year: 0,
      reports: {}
   }
   },
   created(){
    this.setYear()
    this.getReports()
   },
   methods:{
       async getReports() {
 
   
      const response = await axios.get(`https://tep-dashboard.herokuapp.com/get-publish`)
      if(response.data.length <= 0) {
       
           return      this.$notify({
                        text: "No publish records found",
                        type: 'warn',
                        duration: 3000,
                        speed: 1000,
                      })
         }
    this.reports =response.data[0];
     
   },
       setYear(){
           if(process.client) {
  this.year = localStorage.getItem('sy');
           }
       },
             openActionPlanTab(){
     this.actionplan = true;
     this.report = false;
     this.comparison =false
      },
      openReportTab(){
       this.actionplan = false;
     this.report = true;
     this.comparison = false
      },
      openComparisonTab(){
 this.actionplan = false;
     this.report = false;
     this.comparison = true
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
.content-tab {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  margin-bottom: 2rem;
  padding-top: 8px;
  padding-bottom: 8px;
}

.tab-title {
  margin-right: 2rem;
  color: #b1b1b1;
  font-size: 0.8rem;
  font-weight: 500;
  cursor: pointer;
}

.tab-title.active-tab {
  border-bottom: 2px solid #0093dd;
  color: #252525;
  font-weight: 700;
}

.app-space-between {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  -ms-flex-pack: justify;
  justify-content: space-between;
  -webkit-flex-wrap: wrap;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  align-items: center;
}
.app-select {
  margin-bottom: 0px;
  border-radius: 3px;
  background-color: #fff;
  font-weight: 500;
  border: 1px solid #cccccc;
}
.w-input,
.w-select {
  display: block;
  width: 100%;
  padding: 8px 12px;
  line-height: 1.428571429;
  color: #333333;
  vertical-align: middle;
  
}

 @media screen and (max-width: 479px) {
.app-space-between {
  -webkit-box-pack: justify;
  -webkit-justify-content: flex-start;
  justify-content: flex-start;

}
 }
</style>

