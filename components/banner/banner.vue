<template>
          <div data-delay="14000" data-animation="cross" data-autoplay="1" data-easing="ease-in-expo" data-duration="1000" data-infinite="1" class="hero-slider w-slider">
    <div class="hero-mask w-slider-mask">
      <div v-for="slide in getImageSlider" :key="slide.id" id="subeb-hero-1" data-w-id="41b69d52-9a1f-da94-47d9-2dd97932bb5a" class="hero-slide w-slide">
        <div class="container-2 w-container">
          <h1 class="heading hero">{{slide.HeadingHero}}</h1>
          <div class="text-block">{{slide.BannerText}}</div>
        </div>
        <div class="hero-img-holder">
          <div class="hero-img-bg" :style="{ backgroundImage: gradient + `url('${ slide.Url }')` }"></div>
        </div>
      </div>
    </div>
    <div class="hero-slider-arrow w-slider-arrow-left">
      <div class="w-icon-slider-left"></div>
    </div>
    <div class="hero-slider-arrow w-slider-arrow-right">
      <div class="w-icon-slider-right"></div>
    </div>
    <div class="hero-slide-nav w-slider-nav w-round"></div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex' ;
export default {
  data(){
    return{
      img: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg",
      gradient: 'linear-gradient(180deg, hsla(0, 0%, 100%, 0) 60%, rgba(0, 45, 97, 0.88) 86%),'
    }
  },
  computed:{
    ...mapGetters([
      'getImageSlider',
      'getAdminUrl'
    ])
  }
}
</script>
