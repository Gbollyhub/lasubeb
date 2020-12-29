<template>
  <div data-w-id="61eb59ef-3efb-8e23-10aa-9a7cd933685f" class="page-wrapper">
<section id="feature-section" class="feature-section news">
      <h2 class="heading-2 featured"><span class="text-span">global educational EVENTS@</span> LASUBEB</h2>
      <div data-hover="" data-delay="0" class="events-type-dropdown w-dropdown">
        <div class="events-dropdwn-toggle w-dropdown-toggle">
          <div class="w-icon-dropdown-toggle"></div>
          <div class="events-type-text-block">Show events by</div>
        </div>
        <nav class="events-dropdown-list w-dropdown-list">
          <a href="#" aria-current="page" class="events-type w-dropdown-link" @click="filterAll">All Events</a>
          <a href="#" aria-current="page" class="events-type w-dropdown-link" @click="filterInt">International Events</a>
          <a href="#" class="events-type w-dropdown-link">Lagos State School Calendar </a>
          <a href="#" class="events-type w-dropdown-link" @click="filterLocal">Local Educational Events</a>
        </nav>
      </div>
      <div class="events-container-list w-container">
        <a v-for="item in getEvents" :key="item.id" :href="item.EventUrl" target="_blank" class="events-card-block w-inline-block">
          <div class="news-image-mask"><img :src="item.EventPhotoUrl" alt="Lagos Delegates understudy Edo State Education Sector Transformation" loading="eager" class="news-img-list"></div>
          <h2 class="events-title">{{ item.EventTitle }}</h2>
          <p class="event-description w-clearfix">{{ item.EventDescription }}</p>
          <p class="event-date w-clearfix">{{ item.EventDate }}.</p>
        </a>
      </div>
    </section>
<subebPartner/>
<newsletter/>
  </div>
</template>
<script>
import newsletter from '@/components/newsletter/newsletter.vue'
import subebPartner from '@/components/subeb-partner/subeb-partner.vue'
import { mapGetters } from 'vuex'
export default {
  components:{
    newsletter,
    subebPartner
  },
  data(){
    return{

    }
  },
  created(){
    // this.events = this.getEvents
  },
      computed:{
   ...mapGetters([
     'getEvents',
     'getFilterEvent',
     'getIntEvents',
     'getLocalEvents'
   ]),
  },
  methods:{
      filterAll(){
         const project = this.getFilterEvent
      this.$store.state.events = project
   },
   filterInt(){
         const project = this.getIntEvents
      this.$store.state.events = project
   },
    filterLocal(){
             const project = this.getLocalEvents
      this.$store.state.events = project
   }

  },
  head(){
    return{
        htmlAttrs: {
        'data-wf-page': "5fe34840354a9ac00e9f7406",
        'data-wf-site': "5eff351b1692982c192ff95b"
              },
          title: 'LASUBEB Events International',
          meta: [
      { hid: 'description', name: 'description', content: 'LASUBEB International events commemorations' },
      { hid: 'description', property:'og:description', content: 'LASUBEB International events commemorations' },
      { hid: 'description', property:'twitter:description', content: 'LASUBEB International events commemorations' }
],
    }
  }
}
</script>

