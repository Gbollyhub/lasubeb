<template>
  <div data-w-id="61eb59ef-3efb-8e23-10aa-9a7cd933685f" class="page-wrapper">
        <section id="feature-section" class="feature-section">
      <h2 class="heading-2 featured"><span class="text-span">lASUBEB PROJECTS</span></h2>
      <div class="content-news-block w-row">
        <div class="news-detail-col fullcontent w-col w-col-8 w-col-stack">
          <h2 class="news-headline-detail">LASUBEB Ongoing Projects</h2>
          <div class="news-image-mask"><img src="../../assets/images/107536921_618535135435944_4930387759885671887_n.jpg" alt="Lagos Delegates understudy Edo State Education Sector Transformation" width="916" loading="eager" class="news-img">
            <p class="news-info-details w-clearfix">by LASUBEB Project unit | 23rd August 2020</p>
            <p class="p-detail-news">The Executive Chairman of Lagos State Universal Basic Education Board, Hon Wahab Alawiye-King, today led Permanent Members of the Board on a tour to inspect on-going projects under UBEC/SUBEB Intervention Programme to create a conducive teaching and learning condition for staff and pupils in the Basic Education Sector of the State.<br><br>Sites visited comprise school rehabilitation, water and sanitation and classroom construction projects. <br><br>The Chairman noted that the inspection was necessary to ensure that the projects were built to specification and delivered within the specified period. He urged the contractors to ensure the projects are concluded within record time.</p>
          </div>
          <div class="news-image-mask"><img src="../../assets/images/101699002_164554868417833_8161408517259889794_n.jpg" alt="Lagos Delegates understudy Edo State Education Sector Transformation" width="916" loading="eager" class="news-img">
            <p class="news-info-details w-clearfix">by LASUBEB Project unit | 2nd June 2020</p>
            <p class="p-detail-news">On Thursday, 2nd of June, 2020, the Executive Chairman of LASUBEB, Hon. Wahab Alawiye-King led Permanent Board Members, Board Secretary, Education Secretary, Project Consultant and the Project department&#x27;s team on an inspection tour of the proposed permanent site of LASUBEB at Ogudu, Kosofe, LGEA.</p>
          </div>
        </div>
        <div class="news-detail-col side-col w-col w-col-4 w-col-stack">
          <div data-hover="" data-delay="0" class="project-archive-dropdown w-dropdown">
            <div class="project-archive-toggle w-dropdown-toggle">
              <div class="project-archive-icon w-icon-dropdown-toggle"></div>
              <div class="project-archive-text-block">2020 Projects</div>
            </div>
            <nav class="project-dropdown-list w-dropdown-list">
              <a href="#" class="project-archive-dropdown-link w-dropdown-link">Completed Projects</a>
              <a href="#" aria-current="page" class="project-archive-dropdown-link w-dropdown-link w--current">Ongoing Projects</a>
            </nav>
          </div>
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
export default {
  components:{
    newsletter,
    subebPartner,
     dataSection
  },
  head(){
    return{
        htmlAttrs: {
        'data-wf-page': "5fdb998145b18d0a594cf11b",
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
