<template>
  <div data-w-id="61eb59ef-3efb-8e23-10aa-9a7cd933685f" class="page-wrapper">
         <section id="feature-section" class="feature-section news">
           <search/>
      <h2 class="heading-2 featured"><span class="text-span">GALLERY</span> @LAGOS_SUBEB</h2>
      <div class="news-container-list w-container">
        <a href="#" class="gallery-pic-holder w-inline-block w-lightbox" v-for=" item in getGallery" :key="item.id">
          <img :src="item.PostPhoto1" width="370" alt="" class="gallery-img">
          <div class="gallery-caption">
          {{ item.PostDescription }}
          </div>
          <script type="application/json" class="w-json">
              {
                    "items": [
                    {
                    "width": 1080,
                    "caption": "",
                    "height": 606,
                    "fileName": "131887779_191151789345347_3332186044764685104_n.jpg",
                    "origFileName": "131887779_191151789345347_3332186044764685104_n.jpg",
                    "url":   "{{ item.PostPhoto1 }}",
                    "_id":  "{{item.id}}",
                    "type": "image",
                    "fileSize": 68355
                  },
                  {
                    "width": 1080,
                    "caption": "",
                    "height": 606,
                    "fileName": "131887779_191151789345347_3332186044764685104_n.jpg",
                    "origFileName": "131887779_191151789345347_3332186044764685104_n.jpg",
                    "url":   "{{ item.PostPhoto2 }}",
                    "_id": "{{item.id}}",
                    "type": "image",
                    "fileSize": 68355
                  },
                  {
                    "width": 1080,
                    "caption": "",
                    "height": 606,
                    "fileName": "131887779_191151789345347_3332186044764685104_n.jpg",
                    "origFileName": "131887779_191151789345347_3332186044764685104_n.jpg",
                    "url":   "{{ item.PostPhoto3 }}",
                    "_id": "{{item.id}}",
                    "type": "image",
                    "fileSize": 68355
                  },
                  {
                    "width": 1080,
                    "caption": "",
                    "height": 606,
                    "fileName": "131887779_191151789345347_3332186044764685104_n.jpg",
                    "origFileName": "131887779_191151789345347_3332186044764685104_n.jpg",
                    "url":   "{{ item.PostPhoto4 }}",
                    "_id":  "{{item.id}}",
                    "type": "image",
                    "fileSize": 68355
                  },
                  {
                    "width": 1080,
                    "caption": "",
                    "height": 606,
                    "fileName": "131887779_191151789345347_3332186044764685104_n.jpg",
                    "origFileName": "131887779_191151789345347_3332186044764685104_n.jpg",
                    "url":   "{{ item.PostPhoto5 }}",
                    "_id":  "{{item.id}}",
                    "type": "image",
                    "fileSize": 68355
                  }
                ],
                "group": {{ item.id }}
              }
            </script>
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
import marked from 'marked'
import moment from 'moment'
import Search from '~/components/search/search.vue'
export default {
  components:{
    newsletter,
    subebPartner,
    Search
  },
      computed:{
   ...mapGetters([
     'getGallery'
   ])
  },
  head(){
    return{
        htmlAttrs: {
        'data-wf-page': "5fc21dc6e5b830c1fbd2b9eb",
        'data-wf-site': "5eff351b1692982c192ff95b"
              },
          title: 'LASUBEB Gallery',
          meta: [
      { hid: 'description', name: 'description', content: 'LASUBEB Gallery' },
      { hid: 'description', property:'og:description', content: 'LASUBEB Gallery' },
      { hid: 'description', property:'twitter:description', content: 'LASUBEB Gallery' }
],
    }
  }
}
</script>

