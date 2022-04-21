<template>
  <div data-w-id="61eb59ef-3efb-8e23-10aa-9a7cd933685f" class="page-wrapper">
  <section id="feature-section" data-w-id="5140f89c-d73a-5b04-4de6-765fd78f9495" class="feature-section">
    <search/>
    <div class="flex-container w-container">
      <h2 class="heading-2 featured"><span class="text-span">Project Zero</span></h2>
    
      <div class="page-content-block ekoexcel">
        <p class="paragraph-2">Project Zero symbolizes Zero Tolerance For Out-Of-School-Children Project Zero re-emphasizes the 
Lagos State 2007 Child’s Right Law, which provides for the right to FREE and COMPULSORY primary 
education (Section 14) It is an initiative of the Lagos State Government which was launched in 2020, 
to mobilize and accelerate support to tackle the menace of Out of School Children in the state. 
The goal of Project Zero is to enrol and where applicable re-enrol pupils of school-going age who are out of school, due 
to the pandemic or societal challenges back into government owned primary schools
 </p>
<br><br>
<div style="display:flex;justify-content:center;">
  <a href="https://lasubeb.fra1.cdn.digitaloceanspaces.com/PDF_Document/lasubeb_ProjectZero.pdf" class="action-btn emis w-button" download="project-zero">Read more about Project Zero</a>
</div>

      </div>
    </div>
  </section>
<subebPartner/>
<newsletter/>
  </div>
</template>
<script>
import newsletter from '@/components/newsletter/newsletter.vue'
import subebPartner from '@/components/subeb-partner/subeb-partner.vue'
import Search from '~/components/search/search.vue'
export default {
  components:{
    newsletter,
    subebPartner,
    Search
  },
  head(){
    return{
        htmlAttrs: {
        'data-wf-page': "5f42a37a689671d267880140",
        'data-wf-site': "5eff351b1692982c192ff95b"
              },
          title: 'LASUBEB Project Zero',
          meta: [
      { hid: 'description', name: 'description', content: 'LASUBEB Project Zero' },
      { hid: 'description', property:'og:description', content: 'LASUBEB Project Zero' },
      { hid: 'description', property:'twitter:description', content: 'LASUBEB Project Zero' }
],
    }
  }
}
</script>

