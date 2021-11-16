<template>
 <div data-w-id="61eb59ef-3efb-8e23-10aa-9a7cd933685f" class="page-wrapper">
    <section id="feature-section" class="feature-section news w-clearfix">
      <search/>
      <h2 class="heading-2 featured"><span class="text-span">lasubeb </span>LGEA head teachers data</h2>
      <select @change="filterPost($event)"  class="events-dropdwn-toggle events-type-text-block w-dropdown-toggle data-dropdown w-dropdown">
        <option value=0 selected>Display by All LGEA</option>
        <option :value="item.id"  v-for="item in posts" :key="item.id">{{item.lasubeb_lg_education_authority.LgeaTitle}}</option>
      </select>

      <div class="data-container-list">
        <div v-for="post in newPosts" :key="post.id"  data-hover="" data-delay="0" id="school-support-services" data-w-id="95e98a35-6bef-259a-c1c9-ddd0625da56b" class="acdemic-accordion w-dropdown">
          <div class="data-accordion-toggle w-dropdown-toggle" @click="showDropper">
            <div class="dept-unit-icon w-icon-dropdown-toggle"></div>
            <div class="accordion-text-block w-clearfix">{{post.lasubeb_lg_education_authority.LgeaTitle}} LGEA - SCHOOLS &amp; DATA<span class="academic-dat-inline-span"></span></div>
          </div>
          <nav class="acsdemic-calendar-details" v-show="isSelected">
            <div  v-for="lgeaData in post.LgeaData" :key="lgeaData.id" class="education-data-column">
              <div class="data-col w-col w-col-3 w-col-stack">
                <div class="data-title">Name of School</div>
                <div class="data_emisteachers">{{ lgeaData.NAME }}</div>
              </div>
              <div class="data-col w-col w-col-3 w-col-stack">
                <div class="data-title">Address</div>
                <div class="data_emisteachers">{{ lgeaData.ADDRESS }}</div>
              </div>
              <div class="data-col w-col w-col-3 w-col-stack">
                <div class="data-title">Phone</div>
                <a class="data_emisteachers">{{ lgeaData.PHONE }}</a>
              </div>
              <div class="data-col w-col w-col-3 w-col-stack">
                <div class="data-title">Year of establishment</div>
                <div class="data_emisteachers">{{ lgeaData.YEAR }}</div>
              </div>
            </div>
          </nav>
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
import Search from '~/components/search/search.vue'
import axios from 'axios'
export default {
  components:{
    newsletter,
    subebPartner,
     dataSection,
    Search
  },
   async asyncData({ params }) {
    const  data  = await axios.get('http://admin-cms.lasubeb.lg.gov.ng/head-teachers-data')
    return {
      posts: data.data,
      newPosts:data.data,
      allPosts:data.data,
      isSelected: false
      }
   },

   methods:{
     showDropper(){
     this.isSelected = !this.isSelected
     },
     filterPost(event){
              this.newPosts = []
       if(event.target.value == 0){
         return this.newPosts = this.allPosts
       }
    let result = this.posts.filter( result => {
      return result.id == event.target.value;
    })

    this.newPosts = result
     }

   },
  head(){
    return{
        htmlAttrs: {
        'data-wf-page': "5fec9f5c98387960ebe91ca4",
        'data-wf-site': "5eff351b1692982c192ff95b"
              },
          title: 'LASUBEB EMIS LGEA Contact Data',
          meta: [
      { hid: 'description', name: 'description', content: 'LASUBEB EMIS LGEA Contact Data' },
      { hid: 'description', property:'og:description', content: 'LASUBEB EMIS LGEA Contact Data' },
      { hid: 'description', property:'twitter:description', content: 'LASUBEB EMIS LGEA Contact Data' }
],
    }
  }
}
</script>
