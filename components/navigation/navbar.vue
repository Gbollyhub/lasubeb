<template>
  <div
    data-collapse="medium"
    data-animation="default"
    data-duration="400"
    data-w-id="13ae2dcf-7665-0d99-ad9f-e35f748912f7"
    role="banner"
    class="navbar w-nav"
  >
    <div class="container w-container">
      <nuxt-link to="/" aria-current="page" class="logo-brand w-clearfix w-nav-brand w--current">
        <img
          :src="getLogo.LogoUrl"
          width="86"
          alt="LAGOS STATE UNIVERSAL BASIC EDUCATION BOARD"
          class="brand-logo"
        />
        <div class="brandname">
          LAGOS STATE UNIVERSAL
          <br />BASIC EDUCATION BOARD
        </div>
      </nuxt-link>
      <nav role="navigation" class="nav-menu w-nav-menu">
        <div data-hover data-delay="0" class="navlink w-dropdown">
          <div class="navlink dropdown-toggle w-dropdown-toggle">
            <div class="w-icon-dropdown-toggle"></div>
            <div>ABOUT LASUBEB</div>
          </div>
          <nav class="navlink-dropdown-list-container w-dropdown-list">
            <nuxt-link
              to="/about-lasubeb-and-statutory-roles"
              class="navlink dropdown w-dropdown-link"
            >LASUBEB STATUTORY ROLES</nuxt-link>
            <nuxt-link
              to="/lasubeb-vision-mission-values"
              class="navlink dropdown w-dropdown-link"
            >VISION, MISSION</nuxt-link>
            <nuxt-link
              to="/lasubeb-goals-and-measure-of-success"
              class="navlink dropdown w-dropdown-link"
            >MEASUREs OF LEARNER&#x27;S SUCCESS</nuxt-link>
            <nuxt-link to="/lasubeb-pillars" class="navlink dropdown w-dropdown-link">OUR PILLARS</nuxt-link>
            <nuxt-link
              to="/lasubeb-department-statutory-units-key-functions"
              class="navlink dropdown w-dropdown-link"
            >DEPARTMENTS/STATUTORY UNITS</nuxt-link>
            <nuxt-link
              to="/lasubeb-lg-education-authority"
              class="navlink dropdown w-dropdown-link"
            >LOCAL GOVERNMENT EDUCATION AUTHORITY (LGEA)</nuxt-link>
          </nav>
        </div>
        <div data-hover data-delay="0" class="navlink w-dropdown">
          <div class="navlink dropdown-toggle w-dropdown-toggle">
            <div class="w-icon-dropdown-toggle"></div>
            <div>THE BOARD</div>
          </div>
          <nav class="navlink-dropdown-list-container w-dropdown-list">
            <nuxt-link to="/lasubeb-board" class="navlink dropdown w-dropdown-link">COMPOSITION</nuxt-link>
            <nuxt-link
              to="/lasubeb-strategic-priorities"
              class="navlink dropdown w-dropdown-link"
            >STRATEGIC PRIORITIES</nuxt-link>
          </nav>
        </div>
        <div data-hover data-delay="0" class="navlink w-dropdown">
          <div class="navlink dropdown-toggle w-dropdown-toggle">
            <div class="w-icon-dropdown-toggle"></div>
            <div>Programs</div>
          </div>
          <nav class="navlink-dropdown-list-container w-dropdown-list">
            <nuxt-link to="/lasubeb-projects" class="navlink dropdown w-dropdown-link">projects</nuxt-link>
            <nuxt-link to="#" class="navlink dropdown w-dropdown-link">INFRASTRUCTURE</nuxt-link>
            <nuxt-link to="#" class="navlink dropdown w-dropdown-link">recruitment</nuxt-link>
            <nuxt-link to="#" class="navlink dropdown w-dropdown-link">training</nuxt-link>
            <nuxt-link to="/lasubeb-ekoexcel" class="navlink dropdown w-dropdown-link">eko excel</nuxt-link>
            <nuxt-link to="#" class="navlink dropdown w-dropdown-link">homegrown feeding</nuxt-link>
            <nuxt-link to="/lasubeb-structured-displance-learning" class="navlink dropdown w-dropdown-link">structured distance learning</nuxt-link>
             <nuxt-link to="/project-zero" class="navlink dropdown w-dropdown-link">Project Zero</nuxt-link>
          </nav>
        </div>
        <div data-hover data-delay="0" class="navlink w-dropdown">
          <div class="navlink dropdown-toggle w-dropdown-toggle">
            <div class="w-icon-dropdown-toggle"></div>
          <div>EDUCATION DATA</div>
          </div>
          <nav class="navlink-dropdown-list-container w-dropdown-list">
            <nuxt-link to="/education-data" class="navlink dropdown w-dropdown-link">education mis</nuxt-link>
            <nuxt-link to="/download-education-data-report" class="navlink w-dropdown-link">download lasubeb emis report</nuxt-link>
            <!-- <nuxt-link to="/action-plan" class="navlink w-dropdown-link">Action Plan</nuxt-link> -->
          </nav>
        </div>
        <div data-hover data-delay="0" class="navlink w-dropdown">
          <div class="navlink dropdown-toggle w-dropdown-toggle">
            <div class="w-icon-dropdown-toggle"></div>
            <div>partnership</div>
          </div>
          <nav class="navlink-dropdown-list-container w-dropdown-list">
            <nuxt-link
              to="/lasubeb-partners"
              class="navlink dropdown w-dropdown-link"
            >become a lasubeb partner</nuxt-link>
          </nav>
        </div>
        <div data-hover data-delay="0" class="navlink w-dropdown">
          <div class="navlink dropdown-toggle w-dropdown-toggle">
            <div class="w-icon-dropdown-toggle"></div>
            <div>NEWS</div>
          </div>
          <nav class="navlink-dropdown-list-container w-dropdown-list">
            <nuxt-link to="/lasubeb-news" class="navlink dropdown w-dropdown-link">NEWS</nuxt-link>
            <nuxt-link to="/gallery" class="navlink dropdown w-dropdown-link">GALLERY</nuxt-link>
            <nuxt-link to="/lasubeb-events-international" class="navlink dropdown w-dropdown-link">EVENTS</nuxt-link>
            <nuxt-link to="/lasubeb-online-video-channel" target="_blank" class="navlink dropdown w-dropdown-link">VIDEOS</nuxt-link>
          </nav>
        </div>
        <nuxt-link to="/contact-us" class="navlink w-nav-link" style="font-size:12.15px">contact</nuxt-link>
      </nav>
      <div class="menubtn w-nav-button">
        <div class="w-icon-nav-menu"></div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    data(){
    return{
      img: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg",
      gradient: 'linear-gradient(180deg, hsla(0, 0%, 100%, 0) 60%, rgba(0, 45, 97, 0.88) 86%),'
    }
  },
  computed:{
    ...mapGetters([
      'getLogo'
    ])
  }
}
</script>

