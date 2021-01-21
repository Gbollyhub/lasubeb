<template>
 <div data-w-id="61eb59ef-3efb-8e23-10aa-9a7cd933685f" class="page-wrapper">
    <section id="feature-section" class="feature-section news w-clearfix">
      <search/>
      <div class="search-wrapper w-clearfix">
        <form action="/search" class="searchbox w-clearfix w-form"><input type="search" class="search-input inline w-input" maxlength="256" name="query" placeholder="Search…" id="search" required=""><input type="submit" value="" class="search-btn w-button"></form>
      </div>
      <h2 class="heading-2 featured"><span class="text-span">lasubeb </span>LGEA head teachers data</h2>
      <div data-hover="" data-delay="0" class="data-dropdown w-dropdown">
        <div class="events-dropdwn-toggle w-dropdown-toggle">
          <div class="w-icon-dropdown-toggle"></div>
          <div class="events-type-text-block">Display by LGEA</div>
        </div>
        <nav class="events-dropdown-list w-dropdown-list">
          <a href="#" class="events-type w-dropdown-link">AGEGE LGEA</a>
          <a href="#" class="events-type w-dropdown-link">aJEROMI-IFELODUN LGEA</a>
          <a href="#" class="events-type w-dropdown-link">ALIMOSHO LGEA</a>
        </nav>
      </div>
      <div class="data-container-list w-container">
        <div data-hover="" data-delay="0" id="school-support-services" data-w-id="95e98a35-6bef-259a-c1c9-ddd0625da56b" class="acdemic-accordion w-dropdown">
          <div class="data-accordion-toggle w-dropdown-toggle">
            <div class="dept-unit-icon w-icon-dropdown-toggle"></div>
            <div class="accordion-text-block w-clearfix">AGEGE LGEA - SCHOOLS &amp; HEAD TEACHERS DATA<span class="academic-dat-inline-span"></span></div>
          </div>
          <nav class="acsdemic-calendar-details w-dropdown-list">
            <div class="education-data-column w-row">
              <div class="data-col w-col w-col-3 w-col-stack">
                <div class="data-title">Name of School</div>
                <div class="data_emisteachers">AANUOLUWAPO PRIMARY SCHOOL</div>
              </div>
              <div class="data-col w-col w-col-3 w-col-stack">
                <div class="data-title">Address</div>
                <div class="data_emisteachers">AANUOLUWAPO PRIMARY SCHOOL</div>
              </div>
              <div class="data-col w-col w-col-3 w-col-stack">
                <div class="data-title">Phone</div>
                <a href="tel:+2348074571301" class="data_emisteachers">08074571301</a>
              </div>
              <div class="data-col w-col w-col-3 w-col-stack">
                <div class="data-title">Year of establishment</div>
                <div class="data_emisteachers">1983</div>
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
export default {
  components:{
    newsletter,
    subebPartner,
     dataSection,
    Search
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
