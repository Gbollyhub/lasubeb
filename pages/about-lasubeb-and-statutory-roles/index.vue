<template>
  <div>
  <div data-w-id="89adaaaa-2335-f8b3-5bc9-bf6f952a2fc5" class="page-wrapper">
        <section id="feature-section" class="feature-section">
      <h2 class="heading-2 featured"><span class="text-span">ABOUT LASUBEB</span> &amp; STATUTORY ROLES</h2>
      <div class="statutory-container w-container">
        <div class="statutory-div-block">
          <div class="page-img-mask"><img src="../../assets/images/lasubeb_about.jpg" alt="Hon. Dr. Alawiye-King, Executive Chairman, LASUBEB" srcset="../../assets/images/lasubeb_about-p-800.jpeg 800w, ../../assets/images/lasubeb_about.jpg 1323w" sizes="(max-width: 479px) 63vw, (max-width: 767px) 70vw, (max-width: 991px) 33vw, 35vw" class="feature-image"></div>
        </div>
        <div class="statutory-div-block">
          <p class="paragraph-2-copy"> The <strong>Lagos State Universal Basic Education</strong> is an agency under Lagos state Ministry of Education step up according to Law to co-ordinate, manage, implement the Universal Basic Education program of the Lagos State in conjunction with the Federal Government of Nigeria. </p>
        </div>
      </div>
    </section>
<subebPartner/>
<newsletter/>
  </div>
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
          title: 'ABOUT LASUBEB  AND STATUTORY ROLES',
          meta: [
      { hid: 'description', name: 'description', content: 'The Lagos State Universal Basic Education is an agency under Lagos state  Ministry of Education step up according to Law to co-ordinate, manage, implement the Universal Basic Education program of the Lagos State in conjunction with the Federal Government of Nigeria.' },
      { hid: 'description', property:'og:description', content: 'The Lagos State Universal Basic Education is an agency under Lagos state  Ministry of Education step up according to Law to co-ordinate, manage, implement the Universal Basic Education program of the Lagos State in conjunction with the Federal Government of Nigeria.' },
      { hid: 'description', property:'twitter:description', content: 'The Lagos State Universal Basic Education is an agency under Lagos state  Ministry of Education step up according to Law to co-ordinate, manage, implement the Universal Basic Education program of the Lagos State in conjunction with the Federal Government of Nigeria.' }
],
    }
  }
}
</script>

      