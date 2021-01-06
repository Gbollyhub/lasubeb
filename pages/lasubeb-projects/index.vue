<template>
  <div data-w-id="61eb59ef-3efb-8e23-10aa-9a7cd933685f" class="page-wrapper">
    <section id="feature-section" class="feature-section news">
      <h2 class="heading-2 featured"><span class="text-span">PROJECT @</span> LASUBEB</h2>
      <div data-hover="" data-delay="0" class="events-type-dropdown w-dropdown">
        <div class="events-dropdwn-toggle w-dropdown-toggle">
          <div class="w-icon-dropdown-toggle"></div>
          <div class="events-type-text-block">Display projects by</div>
        </div>
        <nav class="events-dropdown-list w-dropdown-list">
            <a href="#" class="events-type w-dropdown-link" @click="filterAll" >All</a>
          <a href="#" class="events-type w-dropdown-link" @click="filterCompleted">Completed projects</a>
          <a href="#" class="events-type w-dropdown-link" @click="filterOngoing">On-going projects</a>
          <a href="#" class="events-type w-dropdown-link" @click="filterNew">New Construction</a>
          <a href="#" class="events-type w-dropdown-link" @click="filterRehabilitation">Renovation &amp; Rehabilitation </a>
          <a href="#" class="events-type w-dropdown-link" @click="filterSchool">School Supplies</a>
        </nav>
      </div>
      <div class="project-container-list w-container" v-if="getProjects.length > 0">
        <a :href="`/lasubeb-projects/${item.id}`" v-for="item in getProjects" :key="item.id" data-title="Lagos State Delegates understudy Edo State Education sector transformation" target="_blank" class="project-card-block w-inline-block">
          <div class="news-image-mask"><img :src="item.ProjectPhotoUrl" :alt="item.ProjectTitle" loading="eager" class="news-img-list"></div>
          <h2 class="events-title">{{ item.ProjectTitle }}</h2>
          <p class="project-description w-clearfix">{{ item.ProjectDescription }}</p>
          <div class="project-details">LOCATION:{{ item.Location }}</div>
          <div class="project-details">VALUE: {{ item.Value }}</div>
          <div class="project-details">STATUS: {{ item.Status }} </div>
        </a>
      </div>
      <div v-else style="padding:5px; height:300px;text-align:center">

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
export default {
  components:{
    newsletter,
    subebPartner,
     dataSection
  },
    computed:{
   ...mapGetters([
     'getFilterProject',
     'getProjects',
     'getcompProjects',
     'getnewProjects',
     'getrehabProjects',
     'getschoolProjects',
     'getongProjects'

   ])
  },
    methods:{
      filterAll(){
    const project = this.getFilterProject
      this.$store.state.projects = project
   },
    filterCompleted(){
    const project = this.getcompProjects
      this.$store.state.projects = project
   },
    filterOngoing(){
    const project = this.getongProjects
      this.$store.state.projects = project
   },
     filterNew(){
            const project = this.getnewProjects
      this.$store.state.projects = project
   },
     filterRehabilitation(){
            const project = this.getrehabProjects
      this.$store.state.projects = project
   },
     filterSchool(){
             const project = this.getschoolProjects
      this.$store.state.projects = project
   },

  },
  head(){
    return{
        htmlAttrs: {
        'data-wf-page': "5fe7143dd9572073c1b0354b",
        'data-wf-site': "5eff351b1692982c192ff95b"
              },
          title: 'LASUBEB Projects',
          meta: [
      { hid: 'description', name: 'description', content: 'LASUBEB Projects' },
      { hid: 'description', property:'og:description', content: 'LASUBEB Projects' },
      { hid: 'description', property:'twitter:description', content: 'LASUBEB Projects' }
],
    }
  }
}
</script>
