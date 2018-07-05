<template>
<div class="home">
  <!--<section class="sample">-->
    <!--<div id="app-3">-->
      <!--<h1 v-if="seen">Congratulations!</h1>-->
    <!--</div>-->
  <!--</section>-->
  <slideshow></slideshow>
  <about-us title-text="newInformation" sample="sample"></about-us>
</div>
</template>

<script>
import Slideshow from './children/Slideshow'
import AboutUs from './children/AboutUs'
export default {
  name: 'home',
  components: {
    AboutUs,
    Slideshow
  },
  data () {
    return {
      seen: true,
      newInformation: {
        title: 'About The Couple',
        text: 'The quick brown fox jumps over the lazy dog.'
      },
      sample: 1
    }
  }
}
</script>

<style scoped lang="scss">
.home {
  /*section.banner {
    #app-3 {
      h1 {
        color: #111111;
      }
    }
  }*/

}
</style>
