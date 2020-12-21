<template>
  <div data-w-id="61eb59ef-3efb-8e23-10aa-9a7cd933685f" class="page-wrapper">
   <section id="feature-section" class="feature-section news">
      <h2 class="heading-2 featured"><span class="text-span">video learning channel</span> @LAGOSSUBEB</h2>
      <div class="news-container-list w-container">
        <a href="#" class="gallery-pic-holder w-inline-block w-lightbox" v-for="item in getVideos" :key="item.id">
          <img :src="item.VideoPhoto"  width="370" alt="" class="gallery-img">
          <script type="application/json" class="w-json">
              {
                "items": [{
                  "type": "video",
                  "originalUrl": "https://www.youtube.com/watch?v=GrLogpJ31Y0",
                  "url": "https://www.youtube.com/watch?v=GrLogpJ31Y0",
                  "html": "<iframe class=\"embedly-embed\" src=\"//cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2FGrLogpJ31Y0%3Ffeature%3Doembed&display_name=YouTube&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DGrLogpJ31Y0&image=https%3A%2F%2Fi.ytimg.com%2Fvi%2FGrLogpJ31Y0%2Fhqdefault.jpg&key=96f1f04c5f4143bcb0f2e68c87d65feb&type=text%2Fhtml&schema=youtube\" width=\"940\" height=\"528\" scrolling=\"no\" title=\"YouTube embed\" frameborder=\"0\" allow=\"autoplay; fullscreen\" allowfullscreen=\"true\"></iframe>",
                  "thumbnailUrl": "https://i.ytimg.com/vi/GrLogpJ31Y0/hqdefault.jpg",
                  "width": 940,
                  "height": 528
                }],
                "group": "vgallery1"
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
