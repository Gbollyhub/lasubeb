<template>
  <div style="position:relative">
      <div class="details-modal" v-show="modal">
         <div class="app-card screen-control">
             <div class="app-space-between">
             <div class="table-header">PROJECT DETAILS</div>   
             <button @click="modal=false" class="app-btn danger">CLOSE</button> 
             </div>
        
        <div class="details-div">
          <div class="app-space-between with-border-bottom" v-for="(value, key, index) in viewDetailsData" :key="index">
            <div class="details-text">{{key}}</div>
            <div>
              <div style="color:#808080" class="details-text">{{value}}</div>
            </div>
          </div>
        </div>
      </div>
      </div>

       <button @click="getAllReport" class="app-btn primary">Reset Action Plan</button>
       <br><br>
 <div class="actionplan-tab-div">
 <div class="allocation">TOTAL ALLOCATION: N{{ allocation.allocation ? allocation.allocation.toLocaleString() : 0}}</div>
 <div class="actionplan-tabs">
  <p @click="openBreakdown"  class="actionplan-tab-item" :class ="[ currentTab == 0 ? activeTabClass : '']">Breakdown</p>
  <p @click="openProject(1)" class="actionplan-tab-item" :class ="[ currentTab == 1 ? activeTabClass : '']">Building</p>
  <p @click="openProject(2)" class="actionplan-tab-item" :class ="[ currentTab == 2 ? activeTabClass : '']">Fencing</p>
  <p @click="openProject(3)" class="actionplan-tab-item" :class ="[ currentTab == 3 ? activeTabClass : '']">Rehabilitation</p>
  <p @click="openProject(4)" class="actionplan-tab-item" :class ="[ currentTab == 4 ? activeTabClass : '']">Furniture & Equipment</p>
  <p @click="openProject(5)" class="actionplan-tab-item" :class ="[ currentTab == 5 ? activeTabClass : '']">Water Supply</p>
  <p @click="openProject(6)" class="actionplan-tab-item" :class ="[ currentTab == 6 ? activeTabClass : '']">Agricultural Education</p>
  <p @click="openProject(7)" class="actionplan-tab-item" :class ="[ currentTab == 7 ? activeTabClass : '']">Sport Development</p>
  <p @click="openProject(8)" class="actionplan-tab-item" :class ="[ currentTab == 8 ? activeTabClass : '']">Quality Assurance</p>
  <p @click="openProject(9)" class="actionplan-tab-item" :class ="[ currentTab == 9 ? activeTabClass : '']">Project Monitoring</p>
 </div>
 </div>

 <br><br>

 <div v-show="breakdown" class="actionplan-summary">
         <div class="projects-indicator-row">
          <div class="project-indicator">
            <div class="indicator-box"></div>
            <div class="indicator-text">(A) Building</div>
          </div>
          <div class="project-indicator">
            <div class="indicator-box _2"></div>
            <div class="indicator-text">(B) Fencing</div>
          </div>
          <div class="project-indicator">
            <div class="indicator-box _3"></div>
            <div class="indicator-text">(C) Rehabilitation</div>
          </div>
          <div class="project-indicator">
            <div class="indicator-box _4"></div>
            <div class="indicator-text">(D) Furniture and Equipment</div>
          </div>
          <div class="project-indicator">
            <div class="indicator-box _5"></div>
            <div class="indicator-text">(E) Water Supply</div>
          </div>
           <div class="project-indicator">
            <div class="indicator-box _6"></div>
            <div class="indicator-text">(F) Agricultural Education</div>
          </div>
          <div class="project-indicator">
            <div class="indicator-box _7"></div>
            <div class="indicator-text">(G) Sport Development</div>
          </div>
          <div class="project-indicator">
            <div class="indicator-box _8"></div>
            <div class="indicator-text">(H) Quality Assurance</div>
          </div>
          <div class="project-indicator">
            <div class="indicator-box _9"></div>
            <div class="indicator-text">(I) Project Monitoring</div>
          </div>
        </div>
        <br><br><br><br>
 <div class="chart-area">
      <VueApexCharts type="pie" width="500" :options="pie_chartOptions" :series="pie_series"></VueApexCharts>
 </div>

  <div>
  <h2 style="text-align:left" class="heading-2 featured"><span class="text-span">YEAR {{year}} COST SUMMARY</span></h2>
  <br><br>
         <div class="table-div">
        <table>
            <thead>
  <tr>
    <th><div class="table-header">S/N</div></th>
    <th><div class="table-header">COMPONENT</div></th>
    <th><div class="table-header">AREA OF INTERVENTION</div></th>
    <th><div class="table-header">NO OF PROJECTS</div></th>
    <th><div class="table-header">EXPECTED OUTCOME</div></th>
    <th><div class="table-header">AMOUNT</div></th>
     <th><div class="table-header">%</div></th>

  </tr>
            </thead>
            <tbody>
  <tr v-for="(user, index) in breakdownReport" :key="index" >
    <td><div class="table-data">{{index + 1}}</div></td>
    <td><div class="table-data">{{user.component}}</div></td>
    <td><div class="table-data">{{user.area_of_intervention}}</div></td>
    <td><div class="table-data">{{user.no_of_projects}}</div></td>
    <td><div class="table-data">{{user.expected_outcome}}</div></td>
    <td><div class="table-data">N{{user.actual_amount ? user.actual_amount.toLocaleString() : 0}}</div></td>
    <td><div class="table-data">{{user.percentage}}</div></td>
   
  </tr>
            </tbody>
</table>
       </div>
    </div>
 </div>

<div v-show="project" class="project-table">
<div class="table-div">
        <table>
            <thead>
  <tr>
    <th><div class="table-header">S/N</div></th>
    <th><div class="table-header">CREATED DATE</div></th>
    <th><div class="table-header">ACTIVITIES</div></th>
    <th><div class="table-header">DURATION</div></th>
    <th><div class="table-header">TOTAL COST</div></th>
   <th><div class="table-header">.</div></th>
  </tr>
            </thead>
            <tbody>
  <tr v-for="(item, index) in report" :key="index"  >
    <td><div class="table-data">{{index + 1}}</div></td>
      <td><div class="table-data">{{item.createdAt}}</div></td>
    <td><div class="table-data">{{item.activities}}</div></td>
    <td><div class="table-data">{{item.duration}}</div></td>
    <td><div class="table-data">N{{item.total_cost.toLocaleString()}}</div></td>
     <td><div class="table-data"><div style="cursor:pointer" @click="openModal(item)" class="link">View Details</div></div></td>

  </tr>
            </tbody>
</table>
       </div>
</div>

  </div>
</template>

<script>
import axios from 'axios'
export default {
    props:['year'],

  data() {
    return {
        viewDetailsData: {},
        modal: false,
        activeTabClass: 'active',
        currentTab :0,
        report:[],
        breakdown:true,
        project: false,
        loading:false,
        breakdownReport: [],
        allocation: 0,
     pie_series: [],
         pie_chartOptions: {
            chart: {
              width: 500,
              type: 'pie',
            },
            labels: ['A', 'B', 'C', 'D', 'E','F','G', 'H', 'I'],
            responsive: [{
              breakpoint: 480,
              options: {
                chart: {
                  width: 300
                },
                legend: {
                  position: 'bottom'
                }
              }
            }]
          },
    }
  },
      created(){
     
    this.getAllReport();
    },
    methods:{
        openModal(item){
         this.modal = true;
         this.viewDetailsData = item
        },
      openBreakdown(){
          this.currentTab = 0
      this.breakdown = true
      this.project = false
      },
       openProject(value){
           this.currentTab = value
      this.breakdown = false
      this.project = true
      this.getProject(value)
      },
         async getProject(value) {
         
     this.loading = true;
        const token = localStorage.getItem('pk');
         const response = await axios.get(`https://services-tep.lasubeb.lg.gov.ng/get-projectdata?year=${this.year}&project=${value}`)
         
       this.loading = false;
        this.report = response.data; 
     
   },
     async getAllReport(){
        this.loading = true
        const result = await axios.get(`https://services-tep.lasubeb.lg.gov.ng/get-allocation-by-year?year=${this.year}`)
        this.allocation = result.data[0];
 

         const response = await axios.get(`https://services-tep.lasubeb.lg.gov.ng/get-breakdown?year=${this.year}`)

        this.breakdownReport = response.data; 


        const temp = response.data.map(x => {
          return {
            actual_amount: x.actual_amount
          }
        })
         this.loading = false;
        

        for (let index = 0; index < temp.length; index++) {
          this.pie_series.push(temp[index].actual_amount)
         
        }
 
      }
    }
}
</script>
<style scoped>
.link {
  color: #0093dd;
  font-size: 0.7rem;
  font-weight: 500;
  text-decoration: none;
}

.screen-control {
    width: 60% !important;
    height: 70vh;
    overflow: auto;
}
.details-modal{
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    z-index: 9999;
    position: fixed;
    background: #12121287;
    display: flex;
    justify-content: center;
    align-items: center;
}
.details-text {
  font-size: 0.8rem;
  font-weight: 500;
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
}

.app-space-between.with-border-bottom {
  padding-top: 20px;
  padding-bottom: 20px;
  border-bottom: 1px solid #eaeaea;
}
.details-div {
  margin-top: 2rem;
}
.app-card {
  position: relative;
  padding: 28px;
  border-radius: 10px;
  background-color: #fff;
}
.app-btn {
  display: inline-block;
  padding: 8px 59px;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  border-radius: 3px;
  background-color: #b3b3b3;
  color: #fff;
  font-size: 0.8rem;
}

.app-btn.margin-top {
  margin-top: 2rem;
  -webkit-transition: all 400ms ease;
  transition: all 400ms ease;
}

.app-btn.margin-top:hover {
  background-color: #313131;
}

.app-btn.danger {
  background-color: #d00;
}

.app-btn.primary {
  padding-right: 45px;
  padding-left: 45px;
  background-color: #0093dd;
}
.chart-area{
    height: 300px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 7rem;
}
.actionplan-tab-div{
    height: 150px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background: #0D203E;
    color: white;
    padding: 20px;
    border-radius: 5px;
    font-family: Oswald, sans-serif  !important;
}
.actionplan-tabs {
 display: flex;
 width: 100%;
 overflow: auto;
}
.actionplan-tab-item{
    cursor: pointer;
 font-size: 13px;   
 margin-right: 2rem;
 color: rgba(255, 255, 255, 0.49);
  font-family: Oswald, sans-serif  !important;
}

.actionplan-tab-item.active{
    padding-bottom: 10px;
    color: white;
    border-bottom: 2px solid white;
}

.projects-indicator-row {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  margin-bottom: 2rem;
  -webkit-flex-wrap: wrap;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
}

.project-indicator {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  margin-right: 1.5rem;
  margin-bottom: 1.5rem;
  -webkit-box-pack: start;
  -webkit-justify-content: flex-start;
  -ms-flex-pack: start;
  justify-content: flex-start;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
}

.indicator-box {
  width: 15px;
  height: 15px;
  margin-right: 0.4rem;
  border-radius: 3px;
  background-color: rgba(0, 143, 251, 0.85);
}

.indicator-box._2 {
  background-color: rgba(0, 227, 150, 0.85);
}

.indicator-box._3 {
  background-color: rgba(254, 176, 25, 0.85);
}

.indicator-box._4 {
  background-color: rgba(255, 69, 96, 0.85);
}

.indicator-box._5 {
  background-color: rgba(119, 93, 208, 0.85);
}

.indicator-box._6 {
  background-color: rgba(0, 143, 251, 0.85);
}

.indicator-box._7 {
  background-color: rgba(0, 227, 150, 0.85);
}

.indicator-box._8 {
  background-color: rgba(254, 176, 25, 0.85);
}

.indicator-box._9 {
  background-color: rgba(255, 69, 96, 0.85);
}

.indicator-text {
  font-size: 0.8rem;
}

 @media screen and (max-width: 479px) {
     .screen-control {
    width: 90%;
    height: 70vh;
    overflow: auto;
}
       .details-text {
    margin-bottom: 1rem;
  }
  .app-space-between.with-border-bottom {
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-pack: start;
    -webkit-justify-content: flex-start;
    -ms-flex-pack: start;
    justify-content: flex-start;
  }

 }
</style>