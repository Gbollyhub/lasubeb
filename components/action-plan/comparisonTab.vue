<template>
    <div>

        <div class="text-block-9 margin-bottom">Breakdown Of Funds Into Programme Components</div>
   
        <div>
         <form>
            <div class="auth-form-col half-col margin-bottom"><label for="name" class="auth-form-label black">Select a Project</label>
            <select v-model="project" class="app-select w-select">
                <option v-for="item in projectArray" :key="item.code" :value="item.code">{{item.title}}</option>
              </select></div>

            <div class="auth-form-col half-col margin-bottom"><label for="name" class="auth-form-label black">Select LGA</label>
            <select v-model="lgea" class="app-select w-select">
              <option value= 0 >All LGA</option>
                <option v-for="item in LGEASList" :key="item.code" :value="item.code">{{item.title}}</option>
              </select></div>

            <div class="auth-form-col margin-bottom"><label for="name" class="auth-form-label black">Select years</label>
              <div class="div-block-19">
                <label class="w-checkbox checkbox-field" v-for="(item, index) in yearArray" :key="item.year">
                  <input :checked="regulateCheckbox ? false : false" type="checkbox" @click="addToActivity(item, index)" :id="`A${item.year}`" name="checkbox" data-name="Checkbox" class="w-checkbox-input">
                  <span class="checkbox-label w-form-label" for="checkbox">{{item.year}}</span>
                </label>
                      </div>
            </div>

          </form>
         
        </div>
        <div v-show="isNoResult" @click="compare" style="cursor:pointer" class="app-btn primary margin-top">Generate Comparison</div>
        <div v-show="regulateCheckbox ? false : true" @click="refreshPage" style="cursor:pointer" class="app-btn primary margin-top">Retry Another Comparison</div>
        <br><br><br><br>
        <div v-show="seriesArray.length > 0" class="text-block-9 margin-bottom">Result</div>
        <div class="app-space-between">
          <div class="comparison-col" v-for="(item, index) in seriesArray" :key="index">
            <div class="comparison-year">{{item.year}}</div>
          <VueApexCharts type="bar" height="350" :options="chartOptions" :series="item.series"></VueApexCharts>
          </div>
         
        </div>
      </div>

</template>

<script>
import axios from "axios"

export default {

        data(){
    return{
         isNoResult : true,
          seriesArray:[],
          chartOptions: {
            chart: {
              height: 350,
              type: 'bar'
            },
            plotOptions: {
              bar: {
                horizontal: true,
              }
            },
            colors: ['#00E396'],
            dataLabels: {
              formatter: function(val, opt) {
                const goals =
                  opt.w.config.series[opt.seriesIndex].data[opt.dataPointIndex]
                    .goals
            
                if (goals && goals.length) {
                  return `${val} / ${goals[0].value}`
                }
                return val
              }
            },
            legend: {
              show: true,
              showForSingleSeries: true,
              customLegendItems: ['Actual', 'Expected'],
              markers: {
                fillColors: ['#00E396', '#775DD0']
              }
            }
          },
              
  
      activeTabClass: 'active-tab',
    admins:[],
    yearArray: [],
      projectArray: [
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
      lgeaArray: [],
      project: 1,
      activityArray:[],
      compareData: [],
        loading:false,
        lgea: 0,
        regulateCheckbox: true
    }   
    },
      created(){
     this.getAllocation()
    },
       methods:{
      async getAllocation() {
 

   
      const response = await axios.get(`https://services-tep.lasubeb.lg.gov.ng/get-allocation`)
      
    this.yearArray = response.data;
    this.year = response.data[0].year
   
   },
               async addToActivity(activity){
        let Avalue = await parseInt(activity.year)
      var checkbox = document.getElementById(`A${activity.year}`);
       const state = await this.activityArray.some(activity => { return activity == Avalue })
      
      if (state == false && checkbox.checked == true){
   
    this.activityArray.push(Avalue);
  }
  else{
   
     const newIndex = this.activityArray.findIndex( result => { return result == Avalue})
       await this.activityArray.splice(newIndex, 1); 
      
      }
      },
      async compare(){
        if(this.project == '' || this.activityArray.length < 0){
            alert("Project or Year cannot be empty. Try Agaim")
        }
        this.compareData = []
        this.loading =true;
           
      for (let index = 0; index < this.activityArray.length; index++) {
 
        const response = await axios.get(`https://services-tep.lasubeb.lg.gov.ng/comparison?year=${this.activityArray[index]}&project=${this.project}`)

         if(response.data.length <= 0) {
           this.loading =false;
         }


       let new_arr = response.data.sort((a, b) => {
        return a.lgea - b.lgea;
      });

      let lgea_Arr = new_arr.map((y) => {
        return y.lgea;
      });
      const final_array = [];
      const lgea_regulator = [];
      let num = 1;


      for (let j = 0; j < new_arr.length; j++) {
        let isNumRepeated = lgea_regulator.some((x) => {
          return x === new_arr[j].lgea;
        });
        let isNumAmong = lgea_Arr.some((x) => {
          return x === num;
        });

        if (isNumAmong) {
          if (!isNumRepeated) {
            if (new_arr[j].lgea === num) {
              let final_obj = {
                series: [],
                project: new_arr[j].project,
                lgea: new_arr[j].lgea,
                expected: new_arr[j].expected - 1,
                completed: 0,
                year: new_arr[j].year,
                school: [],
                volunteer_id: new_arr[j].volunteer_id,
              };

              for (let i = 0; i < new_arr.length; i++) {
                if (new_arr[i].lgea === num) {
                  (final_obj.expected =
                    final_obj.expected + new_arr[i].expected),
                    (final_obj.completed += new_arr[i].stages == 1 ? 1 : 0),
                    final_obj.school.push({
                      date: new_arr[i].createdAt,
                      school_name: new_arr[i].school_name,
                      school_cat: new_arr[i].school_category,
                      stages: new_arr[i].stages,
                      images: new_arr[i].images,
                    });
                }
              }

              final_obj.series = [
                (final_obj.completed / final_obj.expected) * 100,
              ];

              final_array.push(final_obj);
              lgea_regulator.push(new_arr[j].lgea);
              num += 1;
            }
          }
        } else {
          num += 1;

          let max = Math.max(...lgea_Arr);
          for (let k = num; k <= max; k++) {
            let newIsNumAmong = lgea_Arr.some((x) => {
              return x === num;
            });

            if (!newIsNumAmong) {
              num += 1;
            } else {
              let newIsNumRepeated = lgea_regulator.some((x) => {
                return x === new_arr[j].lgea;
              });

              if (!newIsNumRepeated) {
                if (new_arr[j].lgea === num) {
                  let final_obj = {
                    series: [],
                    project: new_arr[j].project,
                    lgea: new_arr[j].lgea,
                    expected: new_arr[j].expected - 1,
                    completed: 0,
                    year: new_arr[j].year,
                    school: [],
                    volunteer_id: new_arr[j].volunteer_id,
                  };

                  for (let i = 0; i < new_arr.length; i++) {
                    if (new_arr[i].lgea === num) {
                      (final_obj.expected =
                        final_obj.expected + new_arr[i].expected),
                        (final_obj.completed += new_arr[i].stages == 1 ? 1 : 0),
                        final_obj.school.push({
                          date: new_arr[i].createdAt,
                          school_name: new_arr[i].school_name,
                          school_cat: new_arr[i].school_category,
                          stages: new_arr[i].stages,
                          images: new_arr[i].images,
                        });
                    }
                  }

                  final_obj.series = [
                    (final_obj.completed / final_obj.expected) * 100,
                  ];

                  final_array.push(final_obj);

                  num += 1;

                  lgea_regulator.push(new_arr[j].lgea);
                }
              } else {
                console.log("bounce");
              }
              break;
            }
          }
        }
      }
          
           const temp = final_array.map(x => {
          return {
            ...x,
            project: this.projectArray.find((entry)=>{return x.project === entry.code}).title,
            lgea: this.LGEASList.find((entry)=>{return x.lgea === entry.code}).title,
          }
        })
        this.compareData.push(temp)
      }

          this.plotGraph()
       this.loading =false;
       this.regulateCheckbox = false
       },

       plotGraph(){
        for (let index = 0; index < this.compareData.length; index++) {
 

         this.seriesArray.push(

                      { 
                        year: this.compareData[index][0].year,
                        series: [
                        {
                        name: this.projectArray.find((entry)=>{return this.project === entry.code}).title,
                        data: []
                       }
                          ]
                        }   
                        );
        }
         
        
         for (let j = 0; j < this.seriesArray.length; j++) {
           const temp = []
          for (let k = 0; k <  this.compareData[j].length; k++) {
            
           temp.push(           
              {
                  x: this.compareData[j][k].lgea,
                  y: this.compareData[j][k].completed,
                  goals: [
                    {
                      name: 'Expected',
                      value: this.compareData[j][k].expected,
                      strokeWidth: 4,
                      strokeDashArray: 2,
                      strokeColor: '#775DD0'
                    }
                  ]
                })
            
          }
            if(this.lgea != 0){
                     const newData = temp.filter((yk => {
            return yk.code === this.lgea;
          }))

            this.seriesArray[j].series[0].data = newData;
            this.isNoResult =false;
          }
          else{
                        this.seriesArray[j].series[0].data = temp;
            this.isNoResult =false;
          }

         
         }
  
       },

       refreshPage(){
        this.isNoResult =true
         this.seriesArray = []
        this.project = 1
        this.lgea = 0

        this.regulateCheckbox = true
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

.app-space-between.with-border-bottom {
  padding-top: 20px;
  padding-bottom: 20px;
  border-bottom: 1px solid #eaeaea;
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
.text-block-9 {
  font-size: 1rem;
  font-weight: 600;
}
.text-block-9.margin-bottom {
  margin-bottom: 2rem;
}

.auth-form-col {
  margin-bottom: 1.5rem;
  -webkit-box-flex: 0;
  -webkit-flex: 0 auto;
  -ms-flex: 0 auto;
  flex: 0 auto;
}
.auth-form-col.margin-bottom {
  margin-bottom: 3rem;
}

.auth-form-col.half-col {
  width: 46%;
  -webkit-box-flex: 0;
  -webkit-flex: 0 46%;
  -ms-flex: 0 46%;
  flex: 0 46%;
}

.auth-form-label {
  margin-bottom: 10px;
  color: #fff;
  font-size: 0.8rem;
  font-weight: 400;
}

.auth-form-label.black {
  color: #242424;
  font-size: 0.8rem;
}

.auth-input {
  height: 40px;
  margin-bottom: 0px;
  border-radius: 3px;
  font-size: 0.8rem;
  background-color: #ffffff;
  border: 1px solid #cccccc;
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

.div-block-19 {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex-wrap: wrap;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
}

.checkbox-label {
  font-size: 0.75rem;
}

.checkbox-field {
  margin-right: 2rem;
}

.comparison-col {
  height: auto;
  padding: 1.4rem;
  -webkit-box-flex: 0;
  -webkit-flex: 0 48%;
  -ms-flex: 0 48%;
  flex: 0 48%;
  border-style: solid;
  border-width: 1px;
  border-color: #dadada;
  border-radius: 10px;
  margin-bottom: 3rem;
}

.comparison-year {
  font-size: 1rem;
  font-weight: 600;
}

</style>

