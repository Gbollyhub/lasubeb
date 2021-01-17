<template>
<div data-w-id="5140f89c-d73a-5b04-4de6-765fd78f9495"  class="page-wrapper">

  <section id="feature-section" class="feature-section">
    <div class="flex-container w-container">
      <div class="search-wrapper w-clearfix">
        <form action="/search" class="searchbox w-clearfix w-form"><input type="search" class="search-input inline w-input" maxlength="256" name="query" placeholder="Search…" id="search" required=""><input type="submit" value="" class="search-btn w-button"></form>
      </div>
      <h2 class="heading-2 featured"><span class="text-span">SEARCH RESULTS</span></h2>
      <div class="page-img-mask"></div>
      <div class="page-content-block ekoexcel">
        <div class="result-block">
          <a href="#" class="page-result-lnk">Page name link</a>
          <p class="paragraph-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.</p>
        </div>
      </div>
    </div>
  </section>
<newsletter/>
</div>
</template>
<script>
import newsletter from '@/components/newsletter/newsletter.vue'
import subebPartner from '@/components/subeb-partner/subeb-partner.vue'
import dataSection from '@/components/data-section/data-section.vue'
export default {
  components:{
    newsletter,
    subebPartner,
    dataSection
  },
  head(){
    return{
        htmlAttrs: {
        'data-wf-page': "5ffee9b7ab4e52d8af49d8f2",
        'data-wf-site': "5eff351b1692982c192ff95b"
              },
          title: 'Search Result page',
          meta: [
      { hid: 'description', name: 'description', content: 'Search Result page' },
      { hid: 'description', property:'og:description', content: 'Search Result page' },
      { hid: 'description', property:'twitter:description', content: 'Search Result page' }
],
    }
  }
}
</script>

