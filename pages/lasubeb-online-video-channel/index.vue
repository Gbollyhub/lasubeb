<template>
  <div data-w-id="61eb59ef-3efb-8e23-10aa-9a7cd933685f" class="page-wrapper">
   <section id="feature-section" class="feature-section news">
      <h2 class="heading-2 featured"><span class="text-span">video learning channel</span> @LAGOSSUBEB</h2>
      <div class="news-container-list w-container">
         <a href="#" class="gallery-pic-holder w-inline-block w-lightbox" v-for="item in getVideos" :key="item.id">
          <div class="video-title" style="text-transform:uppsercase;">{{ item.VideoTitle }}</div>
 <img :src="item.VideoPhoto"  width="370" alt="" class="gallery-img">
          <script type="application/json" class="w-json">
              {
                "items": [{
                  "type": "video",
                  "originalUrl": "{{ item.VideoUrl }}",
                  "url": "{{ item.VideoUrl }}",
                  "html": "<iframe class=\"embedly-embed\" src=\"{{ item.VideoUrl }}\" width=\"940\" height=\"528\" scrolling=\"no\" title=\"YouTube embed\" frameborder=\"0\" allow=\"autoplay; fullscreen\" allowfullscreen=\"true\"></iframe>",
                  "thumbnailUrl": "{{item.VideoPhoto}}",
                  "width": 940,
                  "height": 528
                }],
                "group": "{{ item.id }}"
              }
            </script>
        </a>

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
import marked from 'marked'
import moment from 'moment'
export default {
  components:{
    newsletter,
    subebPartner,
     dataSection
  },
    computed:{
   ...mapGetters([
     'getVideos'
   ])
  },
  head(){
    return{
        htmlAttrs: {
        'data-wf-page': "5fde543da6f3f14519bb3dec",
        'data-wf-site': "5eff351b1692982c192ff95b"
              },
          title: 'LASUBEB Video Channel',
          meta: [
      { hid: 'description', name: 'description', content: 'LASUBEB Video Channel' },
      { hid: 'description', property:'og:description', content: 'LASUBEB Video Channel' },
      { hid: 'description', property:'twitter:description', content: 'LASUBEB Video Channel' }
],
    }
  }
}
</script>
