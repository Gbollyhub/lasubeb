<template>
  <div data-w-id="61eb59ef-3efb-8e23-10aa-9a7cd933685f" class="page-wrapper">
    <section id="feature-section" class="feature-section news">
      <h2 class="heading-2 featured">
        <span class="text-span">LESSON NOTES</span> - LASUBEB
      </h2>
      <!-- <div class="paragraph-2 center">Get informed access to LASUBEB EMIS education data of Lagos State.</div> -->
      <div v-show="!isLogged">
      <div v-if="isLoginScreen">
        <Login @eventname="updateparent" />
        <div class="auth-text">
          Already a member?
          <div class="auth-form-label" style="cursor: pointer; text-decoration: underline;" @click="changeScreen">Don't have an account? Register</div>
        </div>
      </div>

      <div v-else>
        <Register />
        <div class="auth-text">
          <div class="auth-form-label" style="cursor: pointer; text-decoration: underline;" @click="changeScreen">Already have an account? Login</div>
        </div>
      </div>
      </div>

      <!-- <div class="education-data-container w-container"></div> -->
      <div v-show="isLogged">
        <button @click="logout" type="submit" class="auth-btn2" style="background: #ca3232;">LOGOUT</button>
<br>
        <div data-hover="" data-delay="0" class="emis-data-dropdown w-dropdown">
          <div class="emis-data-toggle w-dropdown-toggle">
            <div class="w-icon-dropdown-toggle"></div>
            <div class="events-type-text-block">Lesson Notes Download list</div>
          </div>
          <nav class="emis-data-dropdown-list w-dropdown-list">
            <a
              @click="filterPost(0)"
              href="#"
              class="events-type w-dropdown-link"
              >All</a
            >
            <a
              @click="filterPost(item.id)"
              href="#"
              class="events-type w-dropdown-link"
              v-for="item in posts"
              :key="item.id"
              >{{ item.Title }}</a
            >
          </nav>
        </div>
        <div
          v-for="item in posts"
          :key="item.id"
          data-hover=""
          data-delay="0"
          id="school-support-services"
          data-w-id="c4ed7f41-ecf5-0801-d027-e0b9094dc4fa"
          class="data-accordion w-dropdown"
        >
          <div class="data-accordion-toggle w-dropdown-toggle">
            <div class="dept-unit-icon w-icon-dropdown-toggle"></div>
            <div class="accordion-text-block w-clearfix">
              {{ item.Title }}<span class="academic-dat-inline-span"></span>
            </div>
          </div>
          <nav class="emis-data-detail w-dropdown-list">
            <a
              target="_blank"
              download
              :href="item.Url"
              class="data-narrative-block"
              ><span class="file-download-icon"></span> Download Report</a
            >
          </nav>
        </div>
      </div>
    </section>
    <subebPartner />
    <dataSection />
    <newsletter />
  </div>
</template>
<script>
import newsletter from "@/components/newsletter/newsletter.vue";
import subebPartner from "@/components/subeb-partner/subeb-partner.vue";
import dataSection from "@/components/data-section/data-section.vue";
import Search from "~/components/search/search.vue";
import axios from "axios";
import Login from "~/components/auth/login.vue";
import Register from "~/components/auth/register.vue";
export default {
  components: {
    newsletter,
    subebPartner,
    dataSection,
    Search,
    Login,
    Register
  },
  async asyncData({ params }) {
    const postdata = await axios.get(
      "http://admin-cms.lasubeb.lg.gov.ng/lesson-notes"
    );
    const newData = postdata.data.sort(function(a, b) {
      var c = new Date(a.created_at);
      var d = new Date(b.created_at);
      return c - d;
    });
    return {
      posts: newData,
      isLogged: false,
      isLoginScreen: true
    };
  },
  methods: {
    logout(){
      localStorage.removeItem('pk')
      this.isLogged =false
      this.isLoginScreen= true
    },
    changeScreen() {
      this.isLoginScreen = !this.isLoginScreen;
    },
    updateparent(variable) {
      this.isLogged = true;
    },
    async filterPost(id) {
      if (id == 0) {
        const postdata = await axios.get(
          "http://admin-cms.lasubeb.lg.gov.ng/lesson-notes"
        );
        const newData = postdata.data.sort(function(a, b) {
          var c = new Date(a.created_at);
          var d = new Date(b.created_at);
          return c - d;
        });
        this.posts = newData;
      } else {
        const data = await axios.get(
          "http://admin-cms.lasubeb.lg.gov.ng/lesson-notes"
        );
        const newpost = data.data.filter(x => {
          return x.id == id;
        });
        this.posts = newpost;
      }
    }
  },
  head() {
    return {
      htmlAttrs: {
        "data-wf-page": "5fe85d4afd13f725aada0c33",
        "data-wf-site": "5eff351b1692982c192ff95b"
      },
      title: "LASUBEB Download Lesson Notes",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "LASUBEB Download Lesson Notes"
        },
        {
          hid: "description",
          property: "og:description",
          content: "LASUBEB Download Lesson Notes"
        },
        {
          hid: "description",
          property: "twitter:description",
          content: "LASUBEB Download Lesson Notes"
        }
      ]
    };
  }
};
</script>
