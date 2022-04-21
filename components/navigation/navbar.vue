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
      <a href="/" aria-current="page" class="logo-brand w-clearfix w-nav-brand w--current">
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
      </a>
      <nav role="navigation" class="nav-menu w-nav-menu">
        <div data-hover data-delay="0" class="navlink w-dropdown">
          <div class="navlink dropdown-toggle w-dropdown-toggle">
            <div class="w-icon-dropdown-toggle"></div>
            <div>ABOUT LASUBEB</div>
          </div>
          <nav class="navlink-dropdown-list-container w-dropdown-list">
            <a
              href="/about-lasubeb-and-statutory-roles"
              class="navlink dropdown w-dropdown-link"
            >LASUBEB STATUTORY ROLES</a>
            <a
              href="/lasubeb-vision-mission-values"
              class="navlink dropdown w-dropdown-link"
            >VISION, MISSION</a>
            <a
              href="/lasubeb-goals-and-measure-of-success"
              class="navlink dropdown w-dropdown-link"
            >MEASUREs OF LEARNER&#x27;S SUCCESS</a>
            <a href="/lasubeb-pillars" class="navlink dropdown w-dropdown-link">OUR PILLARS</a>
            <a
              href="/lasubeb-department-statutory-units-key-functions"
              class="navlink dropdown w-dropdown-link"
            >DEPARTMENTS/STATUTORY UNITS</a>
            <a
              href="/lasubeb-lg-education-authority"
              class="navlink dropdown w-dropdown-link"
            >LOCAL GOVERNMENT EDUCATION AUTHORITY (LGEA)</a>
          </nav>
        </div>
        <div data-hover data-delay="0" class="navlink w-dropdown">
          <div class="navlink dropdown-toggle w-dropdown-toggle">
            <div class="w-icon-dropdown-toggle"></div>
            <div>THE BOARD</div>
          </div>
          <nav class="navlink-dropdown-list-container w-dropdown-list">
            <a href="/lasubeb-board" class="navlink dropdown w-dropdown-link">COMPOSITION</a>
            <a
              href="/lasubeb-strategic-priorities"
              class="navlink dropdown w-dropdown-link"
            >STRATEGIC PRIORITIES</a>
          </nav>
        </div>
        <div data-hover data-delay="0" class="navlink w-dropdown">
          <div class="navlink dropdown-toggle w-dropdown-toggle">
            <div class="w-icon-dropdown-toggle"></div>
            <div>Programs</div>
          </div>
          <nav class="navlink-dropdown-list-container w-dropdown-list">
            <a href="/lasubeb-projects" class="navlink dropdown w-dropdown-link">projects</a>
            <a href="#" class="navlink dropdown w-dropdown-link">INFRASTRUCTURE</a>
            <a href="#" class="navlink dropdown w-dropdown-link">recruitment</a>
            <a href="#" class="navlink dropdown w-dropdown-link">training</a>
            <a href="/lasubeb-ekoexcel" class="navlink dropdown w-dropdown-link">eko excel</a>
            <a href="#" class="navlink dropdown w-dropdown-link">homegrown feeding</a>
            <a href="/lasubeb-structured-displance-learning" class="navlink dropdown w-dropdown-link">structured distance learning</a>
             <a href="/project-zero" class="navlink dropdown w-dropdown-link">Project Zero</a>
          </nav>
        </div>
        <div data-hover data-delay="0" class="navlink w-dropdown">
          <div class="navlink dropdown-toggle w-dropdown-toggle">
            <div class="w-icon-dropdown-toggle"></div>
          <div>EDUCATION DATA</div>
          </div>
          <nav class="navlink-dropdown-list-container w-dropdown-list">
            <a href="/education-data" class="navlink dropdown w-dropdown-link">education mis</a>
            <a href="/download-education-data-report" class="navlink w-dropdown-link">download lasubeb emis report</a>
            <!-- <a href="/action-plan" class="navlink w-dropdown-link">Action Plan</a> -->
          </nav>
        </div>
        <div data-hover data-delay="0" class="navlink w-dropdown">
          <div class="navlink dropdown-toggle w-dropdown-toggle">
            <div class="w-icon-dropdown-toggle"></div>
            <div>partnership</div>
          </div>
          <nav class="navlink-dropdown-list-container w-dropdown-list">
            <a
              href="/lasubeb-partners"
              class="navlink dropdown w-dropdown-link"
            >become a lasubeb partner</a>
          </nav>
        </div>
        <div data-hover data-delay="0" class="navlink w-dropdown">
          <div class="navlink dropdown-toggle w-dropdown-toggle">
            <div class="w-icon-dropdown-toggle"></div>
            <div>NEWS</div>
          </div>
          <nav class="navlink-dropdown-list-container w-dropdown-list">
            <a href="/lasubeb-news" class="navlink dropdown w-dropdown-link">NEWS</a>
            <a href="/gallery" class="navlink dropdown w-dropdown-link">GALLERY</a>
            <a href="/lasubeb-events-international" class="navlink dropdown w-dropdown-link">EVENTS</a>
            <a href="/lasubeb-online-video-channel" target="_blank" class="navlink dropdown w-dropdown-link">VIDEOS</a>
          </nav>
        </div>
        <a href="/contact-us" class="navlink w-nav-link" style="font-size:13px">contact</a>
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

