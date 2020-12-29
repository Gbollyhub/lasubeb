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
}
</script>

<style>
.lasubeb-body{
  font-family: Ubuntu, Helvetica, sans-serif;
  font-size: 15px;
  line-height: 1.4em;
}
</style>

