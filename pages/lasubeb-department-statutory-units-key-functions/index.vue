<template>
  <div data-w-id="128243f3-7cbd-ad35-e990-3c0d89260f56" class="page-wrapper">
    <section id="feature-section" class="feature-section">
    <search/>
      <h2 class="heading-2 featured"><span class="text-span">DEPARTMENTS &amp; STATUTORY UNITS</span> &amp; KEY FUNCTIONS </h2>

      <div class="page-content-block">
        <p class="paragraph-2">LASUBEB as a government agency is duly constituted by law and efficiently run with the following departments, statutory units and experienced personnel.</p>
      </div>
      <div class="dept-units-container w-container">
        <div class="dept-units-div-block">
          <div data-hover="" data-delay="0" class="sublink-accordion w-dropdown">
            <div data-w-id="143df61d-ed3e-66da-7665-449ae7ae1ee9" class="sublink-accordion-toggle w-dropdown-toggle">
              <div class="sublink-accordion-icon w-icon-dropdown-toggle"></div>
              <div class="sublink-text-block">Departments</div>
            </div>
            <nav class="sublink-dropdown-list dropdown-list w-dropdown-list">
            <a v-for="(item,index) in getDepartment" :key="index" :href="'#'+ item.id" class="sublink-accordion-link w-dropdown-link">{{item.DepartmentName}}</a>
            </nav>
          </div>
          <div data-hover="" data-delay="0" class="sublink-accordion w-dropdown">
            <div data-w-id="8cec91cb-a367-4ca9-0dea-7e6178ff605c" class="sublink-accordion-toggle w-dropdown-toggle">
              <div class="sublink-accordion-icon w-icon-dropdown-toggle"></div>
              <div class="sublink-text-block"> Statutory Units</div>
            </div>
            <nav class="sublink-dropdown-list dropdown-list w-dropdown-list">
              <a v-for="(item,index) in getStatutory" :key="index" :href="'#'+ item.id" class="sublink-accordion-link w-dropdown-link">{{item.UnitName}}</a>
            </nav>
          </div>
        </div>
        <div class="dept-units-div-block accordio">
          <div v-for="(item,index) in getDepartment" :key="index" data-hover="" data-delay="0" :id="item.id" data-w-id="da158f76-dbe5-09ee-982a-0d6448b19133" class="dept-units-accordion w-dropdown">
            <div class="dept-unit-accordion-toggle w-dropdown-toggle">
              <div class="dept-unit-icon w-icon-dropdown-toggle"></div>
              <div class="accordion-text-block">{{item.DepartmentName}}</div>
            </div>
            <nav class="dept-unit-accordion-list w-dropdown-list">
              <div class="dept-column w-row">
                <div class="hod-img-col w-col w-col-3">
                  <div class="hod-img-mask"><img :src="item.HodPhoto" :alt="item.DepartmentName" class="hod-img"></div>
                  <div>
                    <h5 class="hod-data"><strong>{{item.HodName}}</strong></h5>
                    <div class="title-position">Head of Department<br><br><a :href="'tel:' + item.HodPhone" class="dept-hod-phone-nos">{{item.HodPhone}}</a></div>
                  </div>
                </div>
                <div class="dept-function-detail-col w-col w-col-9">
                  <div class="section-unit-title">DEPARTMENTS</div>
                  <div>
                    <h3 class="dept-title-h3"><strong class="bold-text">{{item.DepartmentName}}</strong></h3>
                    <div class="unit-title-line">Key functions</div>
                 <ul role="list" class="list-holder">
                      <div class="list-item" v-html="marked(item.KeyFunctions)"></div>
                    </ul>
                    <div class="unit-title-line">Units</div>
                    <ul role="list" class="list-holder">
                    <div v-if="item.Units" class="list-item" v-html="marked(item.Units)"></div>
                    </ul>
                  </div>
                </div>
              </div>
            </nav>
          </div>



          <div  v-for="(item,index) in getStatutory" :key="index" data-hover="" data-delay="0" id="procurement" data-w-id="0c5118c5-59eb-a56f-b15f-d37c47bb84f5" class="dept-units-accordion w-dropdown">
            <div class="dept-unit-accordion-toggle w-dropdown-toggle">
              <div class="dept-unit-icon w-icon-dropdown-toggle"></div>
              <div class="accordion-text-block">{{item.UnitName}}</div>
            </div>
            <nav class="dept-unit-accordion-list w-dropdown-list">
              <div class="dept-column w-row">
                <div class="hod-img-col w-col w-col-3">
                  <div class="hod-img-mask"><img :src="item.HodPhoto" :alt="item.DepartmentName" class="hod-img"></div>
                  <div>
                    <h5 class="hod-data"><strong>{{ item.HodName }}</strong></h5>
                    <div class="title-position">Head of Unit<br><br><a :href="'tel:' + item.HodPhoneNumber" class="dept-hod-phone-nos">{{item.HodPhoneNumber}}</a></div>
                  </div>
                </div>
                <div class="dept-function-detail-col w-col w-col-9">
                  <div>
                    <h3 class="dept-title-h3"><strong class="bold-text">{{ item.UnitName }}</strong></h3>
                    <div class="unit-title-line">Key functions</div>
                    <ul role="list" class="list-holder">
                      <div class="list-item" v-html="marked(item.KeyFunctions)"></div>
                    </ul>
                  </div>
                </div>
              </div>

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
import { mapGetters } from 'vuex'
import marked from 'marked'
import axios from 'axios'
import Search from '~/components/search/search.vue'
export default {
  components:{
    newsletter,
    subebPartner,
    dataSection,
    Search
  },
    filters: {
    marked: marked
  },

  computed:{
   ...mapGetters([
      'getDepartment',
     'getStatutory'
   ])
  },
  methods: {
    marked: function(input) {
      return marked(input);
    }
  },

  head(){
    return{
        htmlAttrs: {
        'data-wf-page': "5f1417f9ca411a056f4b8311",
        'data-wf-site': "5eff351b1692982c192ff95b"
              },
          title: 'LASUBEB Department Statutory units Key functions',
          meta: [
      { hid: 'description', name: 'description', content: 'LASUBEB Department &amp; Statutory units &amp; Key functions' },
      { hid: 'description', property:'og:description', content: 'LASUBEB Department &amp; Statutory units &amp; Key functions' },
      { hid: 'description', property:'twitter:description', content: 'LASUBEB Department &amp; Statutory units &amp; Key functions' }
],
    }
  }
}
</script>

<style scoped>
li {
  padding-top: 6px;
  padding-bottom: 6px;
  font-size: 0.9em;
  line-height: 1.4em;
}

</style>
