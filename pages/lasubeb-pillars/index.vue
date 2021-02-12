<template>
  <div>
<section id="feature-section" data-w-id="5140f89c-d73a-5b04-4de6-765fd78f9495" class="feature-section">
  <search/>
    <div class="flex-container w-container">
      <h2 class="heading-2 featured"><span class="text-span">OUR FOUR PILLARS</span></h2>
      <div class="page-img-mask"><img src="../../assets/images/classroom.jpg" alt="LASUBEB Pillars" class="feature-image-pillars"></div>
      <div class="page-content-block">
        <p class="paragraph-2">The Four Pillars are the building blocks for purposeful action. They define the capabilities and competencies that we must develop to achieve the outcomes for our learners.</p>
      </div>
    </div>
  </section>
  <section id="cards-section" class="cards-section">
    <div class="centered-container w-container">
      <div class="pillar-grid-container-copy">
        <div id="w-node-0f527d453c54-334b830e" class="pillar-block">
          <h3 class="pillar-h3">Pillar 1</h3>
          <div class="pillar-text-block">focuses on</div>
          <p class="pillar-paragrapg">“teaching &amp; learning”</p>
        </div>
        <div id="w-node-0f527d453c5b-334b830e" class="pillar-block _2">
          <h3 id="w-node-0f527d453c5e-334b830e" class="pillar-h3">Pillar 2</h3>
          <div class="pillar-text-block">recognises that</div>
          <p id="w-node-0f527d453c60-334b830e" class="pillar-paragrapg">“schools can’t <br>do it alone”</p>
        </div>
        <div id="w-node-0f527d453c62-334b830e" class="pillar-block _3">
          <h3 id="w-node-0f527d453c65-334b830e" class="pillar-h3">Pillar 3</h3>
          <div class="pillar-text-block">promotes</div>
          <p id="w-node-0f527d453c67-334b830e" class="pillar-paragrapg">“investing in people”</p>
        </div>
        <div class="pillar-block _4">
          <h3 class="pillar-h3">Pillar 4</h3>
          <div class="pillar-text-block">is about</div>
          <p class="pillar-paragrapg">“managing the whole”</p>
        </div>
      </div>
    </div>
  </section>
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
        'data-wf-page': "5f1417f9ca411a2a334b830e",
        'data-wf-site': "5eff351b1692982c192ff95b"
              },
          title: 'LASUBEB Pillars',
          meta: [
      { hid: 'description', name: 'description', content: 'The Four Pillars are the building blocks for purposeful action. They define the capabilities and competencies that we must develop to achieve the outcomes for our learners.' },
      { hid: 'description', property:'og:description', content: 'The Four Pillars are the building blocks for purposeful action. They define the capabilities and competencies that we must develop to achieve the outcomes for our learners.' },
      { hid: 'description', property:'twitter:description', content: 'The Four Pillars are the building blocks for purposeful action. They define the capabilities and competencies that we must develop to achieve the outcomes for our learners.' }
],
    }
  }
}
</script>

