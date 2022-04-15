<template>
    <div>
      <div class="lg-modal"  v-show="lg_details">

              <div class="app-card modal-card">


                
         <div class="app-space-between">
        <div class="table-header" style=" font-size:16px;font-weight:600; color:black;text-transform:uppercase">{{lg_data.lgea}} DETAILS</div>
        <div  @click="lg_details = false" style="cursor:pointer;font-size:16px;font-weight:600">X</div>
         </div>
        <br><br>
          <div class="table-div"  v-if="!lg_data.school <= 0">
        <table>
            <thead>
  <tr>
    <th><div class="table-header">S/N</div></th>
    <th><div class="table-header">CREATED DATE</div></th>
    <th><div class="table-header">SCHOOL NAME</div></th>
        <th><div class="table-header">CATEGORY</div></th>
    <th><div class="table-header">STAGE OF COMPLETION</div></th>
    <th><div class="table-header">IMAGES</div></th>
  </tr>
            </thead>
            <tbody>
  <tr v-for="(item,index) in lg_data.school" :key="index" >
    <td><div class="table-data">{{index + 1}}</div></td>
    <td><div class="table-data">{{item.date | moment }}</div></td>
    <td><div class="table-data">{{item.school_name}}</div></td>
    <td><div class="table-data">{{item.school_cat}}</div></td>
    <td><div class="table-data">{{
      item.stages == 1 ? 'Completed' :
      item.stages == 2 ? 'Ongoing' :
      item.stages == 3 ? 'Abandoned' :
      item.stages == 4 ? 'Not Started' : ''
    }}</div></td>
    <td>
      <div  v-if="item.images.length > 0" @click="imageIndex = 0" style="text-align:left;cursor:pointer"  class="link">View Images</div>
       <div v-else style="color:red;text-align:left;cursor:pointer"  class="link">No Images</div>
        <VueCoolLightBox 
            :items="item.images" 
            :index="imageIndex"
            @close="imageIndex = null">
          </VueCoolLightBox>
    </td>

  </tr>
            </tbody>
</table>
       </div>
       
              </div>
      </div>
           <div class="app-card">

  
        <div class="card-heading">
          <div>
            <div class="text-block-9">TEP Monitoring Report</div>
          </div>
          <div>
            <div class="form-block ">
              <select v-model="project" class="app-card-select w-select">
                   <option :disabled="item.code == 1 ? false : item.code == 2 ? false : true" v-for="item in ProjectsList" :key="item.code" :value="item.code">{{item.title}}</option>
                </select>
     
            </div>
          </div>
        </div>
        <button @click="getReport" class="app-btn primary">Reset Report</button>
        <br><br><br>
        <div class="project-detail-row">
          <div class="prject-detail-col" v-for="(item, index) in seriesArray" :key="index">
            <div class="monitoring-header">{{item.lgea}} LGEA</div>
            <div class="div-block-16">
              <div class="monitoring-value"><span class="text-span-2">{{item.completed}} </span>/ {{item.expected}}</div>
              <div class="report-graph">
   <VueApexCharts type="radialBar" height="150" :options="chartOptions" :series="item.series"></VueApexCharts>
              </div>
                
            </div>
            <div class="monitoring-text">{{item.completed}} Completed Projects</div>
            <div class="monitoring-text">{{item.expected - item.completed}} Uncompleted Projects</div>

             <div class="monitoring-text">Uploaded by : {{item.volunteer_id.first_name}} {{item.volunteer_id.last_name}}</div>
            <div style="cursor:pointer" @click="openLgDetails(item)"  class="link">View Details</div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import axios from 'axios'
import moment from 'moment'
export default {
    filters:{
   moment: function(date){
       return moment(date).format('MMMM Do YYYY, h:mm:ss a');
   }
  },
    props:['year'],

  data() {
    return {
    lg_data: {},
          lg_details: false,
          imageIndex: null,
          seriesArray: [],
          chartOptions: {
            chart: {
              height: 150,
              type: 'radialBar',
            },
            plotOptions: {
              radialBar: {
                offsetY: 0,
                startAngle: 0,
                endAngle: 270,
                hollow: {
                  margin: 5,
                  size: '30%',
                  background: 'transparent',
                  image: undefined,
                },
                dataLabels: {
                  name: {
                    show: false,
                  },
                  value: {
                    show: false,
                  }
                }
              }
            },
            colors: ['#1ab7ea'],
            legend: {
              show: true,
              floating: true,
              fontSize: '16px',
              position: 'left',
              offsetX: 160,
              offsetY: 15,
              labels: {
                useSeriesColors: true,
              },
              markers: {
                size: 0
              },
              formatter: function(seriesName, opts) {
                return seriesName + ":  " + opts.w.globals.series[opts.seriesIndex]
              },
              itemMargin: {
                vertical: 3
              }
            },
  
          },
     projectArray:[],
     project:1,
     loading:false,
     report:[],
    ProjectsList: [
      {
      "code": 1,
      "title": "Building"
    },
    {
      "code": 2,
      "title": "Fencing"
      },
      {
      "code": 3,
      "title": "Rehabilitation"
      },
      {
      "code": 4,
      "title": "Furniture and Equipment"
      },
      {
          "code": 5,
          "title": "Water Supply"
        },
        {
          "code": 6,
          "title": "Agricultural Education"
        },
       {
        "code": 7,
        "title": "Sport Development"
       },
       {
        "code": 8,
        "title": "Quality Assurance"
       },
       {
        "code": 9,
        "title": "Project Monitoring"
       },


],
LGEASList:[
    {
    "code": 1,
    "title": "Alimosho"
   },
   {
     "code": 2,
     "title": "Epe"
    },
    {
     "code": 3,
     "title": "Ikorodu"
    },
    {
     "code": 4,
     "title": "Oshodi-Isolo"
    },
    {
        "code": 5,
        "title": "Lagos Mainland"
       },
       {
        "code": 6,
        "title": "Shomolu"
       },
       {
        "code": 7,
        "title": "Badagry"
       },
       {
        "code": 8,
        "title": "Ifako-Ijaye"
       },
       {
        "code": 9,
        "title": "Ikeja"
       },

],

    }
  },
           created(){   
   
    this.getReport()
    },
    methods:{

        async openLgDetails(item){
    this.lg_details = true;
    this.lg_data = item;
    },

     async getReport(){

        this.loading = true;
        

        const result = await axios.get(`https://tep-dashboard.herokuapp.com/get-allocation-by-year?year=${this.year}`)

    const allocation =result.data[0];
    this.$emit('update', allocation);

      
        
         const response = await axios.get(`https://tep-dashboard.herokuapp.com/comparison?year=${this.year}&project=${this.project}`)

           
         const final_array = [];
         let num = 1;
          for(let j = 0; j < response.data.length ; j++) {
            
       if(response.data[j].lgea === num){
          let final_obj = {
            'series': [],
            'project': response.data[j].project,
            'lgea': response.data[j].lgea,
            'expected': response.data[j].expected,
            'completed': 0,
            'year': response.data[j].year,
            'school':[],
            'volunteer_id': response.data[j].volunteer_id,
         }

        
         for(let i = 0; i < response.data.length ; i++) {
            
           if(response.data[i].lgea === num){
               
            final_obj.completed += response.data[i].stages == 1 ? 1 : 0,
            final_obj.school.push({
              'date': response.data[i].createdAt,
              'school_name': response.data[i].school_name,
              'school_cat': response.data[i].school_category,
              'stages': response.data[i].stages,
              'images': response.data[i].images
              })
           }
         }
          
          final_obj.series = [(final_obj.completed/final_obj.expected) * 100]
         
          final_array.push(final_obj);
          num += 1;
       }
          }
          


   
           const temp = final_array.map(x => {
          return {
            ...x,
            project: this.ProjectsList.find((entry)=>{return x.project === entry.code}).title,
            lgea: this.LGEASList.find((entry)=>{return x.lgea === entry.code}).title,
          }
        })
         this.loading = false;
        

        this.seriesArray = temp  

   
      }
    }
}
</script>

<style scoped>
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
.link {
  color: #0093dd;
  font-size: 0.7rem;
  font-weight: 500;
  text-decoration: none;
}
.app-card {
  position: relative;
  margin-bottom: 2.5rem;
  padding: 28px;
  -webkit-box-flex: 0;
  -webkit-flex: 0 30%;
  -ms-flex: 0 30%;
  flex: 0 30%;
  border-radius: 10px;
  background-color: #fff;
}
.lg-modal {
      display: flex;
    background: rgba(22, 22, 22, 0.6);
    position: fixed;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    z-index: 99999999999999;
}
.modal-card {
  flex: none !important;
  width: 60% !important;
  width: 70vh;
  overflow: auto;
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
.card-heading {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  margin-bottom: 2rem;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  -ms-flex-pack: justify;
  justify-content: space-between;
  -webkit-flex-wrap: wrap;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
}

.text-block-9 {
  font-size: 1rem;
  font-weight: 600;
}
.text-block-9.margin-bottom {
  margin-bottom: 2rem;
}
  .form-block-2 {
    margin-bottom: 0px;
  }
  .app-card-select {
  margin-bottom: 0px;
  border: 1px none #000;
  border-radius: 5px;
  background-color: #f6f8f9;
  font-size: 0.8rem;
}
.project-detail-row {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -webkit-justify-content: left;
  -ms-flex-pack: justify;
  justify-content:left;
  -webkit-flex-wrap: wrap;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
}

.prject-detail-col {
  height:auto;
  margin-bottom: 1.5rem;
  padding: 1.5rem;
  -webkit-box-flex: 0;
  -webkit-flex: 0 23%;
  -ms-flex: 0 23%;
  flex: 0 23%;
  border: 1px solid #f4f4f4;
  border-radius: 10px;
  margin-right: 2%;
}
.monitoring-header {
  margin-bottom: 1.5rem;
  padding-bottom: 5px;
  border-bottom: 1px solid #f4f4f4;
  font-size: 0.8rem;
}

.div-block-16 {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  margin-bottom: 1.5rem;
  justify-content: space-between;
  align-items: center;
}

.monitoring-value {
  color: #969696;
  font-size: 1rem;
  font-weight: 700;
  flex-basis: 50%;
}
.report-graph{
  flex-basis: 50%;
}

.text-span-2 {
  color: #272727;
  font-size: 2rem;
}

.monitoring-text {
  margin-bottom: 0.5rem;
  font-size: 0.7rem;
}



 @media screen and (max-width: 479px) {
   .modal-card {

  width: 90% !important;
}
       .prject-detail-col {
    -webkit-flex-basis: 100%;
    -ms-flex-preferred-size: 100%;
    flex-basis: 100%;
  }
  .app-card-select {
    margin-bottom: 20px;
  }
  .form-block-2 {
    width: 100%;
  }

  .form-block-3 {
    width: 100%;
  }

 }
</style>