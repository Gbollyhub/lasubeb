<template>
  <div class="lasubeb-body">
    <navbar/>
    <banner/>
    <Nuxt/>
    <sitefooter/>
  </div>
</template>

<script>
import navbar from '@/components/navigation/navbar.vue'
import banner from '@/components/banner/banner.vue'
import newsletter from '@/components/newsletter/newsletter.vue'
import sitefooter from '@/components/sitefooter/sitefooter.vue'
export default {
  components:{
    navbar,
    banner,
    newsletter,
    sitefooter
  },
  head(){
    return{
          title: 'LASUBEB:: LAGOS STATE UNIVERSAL BASIC EDUCATION BOARD',
          meta: [
      { hid: 'description', name: 'description', content: 'The Lagos State Universal Basic Education is an agency under Lagos state Ministry of Education setup according to Law to co-ordinate, manage, implement the Universal Basic Education program of the Lagos State in conjunction with the Federal Government of Nigeria.' }
    ],
    }
  }
}
</script>

<style>
.lasubeb-body{
  font-family: Ubuntu, Helvetica, sans-serif;
  font-size: 15px;
  line-height: 1.4em;
}
</style>

