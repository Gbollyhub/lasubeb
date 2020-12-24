<template>
  <div data-w-id="61eb59ef-3efb-8e23-10aa-9a7cd933685f" class="page-wrapper">
   <section id="feature-section" class="feature-section news">
      <h2 class="heading-2 featured"><span class="text-span">lasubeb </span>education calendar</h2>
      <div data-hover="" data-delay="0" class="events-type-dropdown w-dropdown">
        <div class="events-dropdwn-toggle w-dropdown-toggle">
          <div class="w-icon-dropdown-toggle"></div>
          <div class="events-type-text-block">Show events by</div>
        </div>
        <nav class="events-dropdown-list w-dropdown-list">
          <a href="/lasubeb-events-international" class="events-type w-dropdown-link">International Events</a>
          <a href="#" class="events-type w-dropdown-link">Lagos State School Calendar</a>
          <a href="/lasubeb-local-education-calendar" aria-current="page" class="events-type w-dropdown-link w--current">Local Educational Events</a>
        </nav>
      </div>
      <div class="events-container-list w-container">
        <a data-title="Lagos State Delegates understudy Edo State Education sector transformation" href="https://en.unesco.org/commemorations/worldlogicday" target="_blank" class="events-card-block w-inline-block">
          <div class="news-image-mask"><img src="../../assets/images//lasubeb_worldlogicday.jpg" alt="Lagos Delegates understudy Edo State Education Sector Transformation" loading="eager" class="news-img-list"></div>
          <h2 class="events-title">GOVERNOR&#x27;S DAY</h2>
          <p class="event-description w-clearfix">The ability to think is one of the most defining features of humankind. In different cultures, the definition of humanity is associated with concepts such as consciousness, knowledge and reason.</p>
          <p class="event-date w-clearfix">14TH JAN - 15TH JAN</p>
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
export default {
  components:{
    newsletter,
    subebPartner
  },
  head(){
    return{
        htmlAttrs: {
        'data-wf-page': "5fe395b90091ee8bb7a29a52",
        'data-wf-site': "5eff351b1692982c192ff95b"
              },
          title: 'LASUBEB local education calendar',
          meta: [
      { hid: 'description', name: 'description', content: 'LASUBEB and Lagos State Ministry of Education events calendar' },
      { hid: 'description', property:'og:description', content: 'LASUBEB and Lagos State Ministry of Education events calendar' },
      { hid: 'description', property:'twitter:description', content: 'LASUBEB and Lagos State Ministry of Education events calendar' }
],
    }
  }
}
</script>

