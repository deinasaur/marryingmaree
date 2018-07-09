<template>
<div class="home">
  <!--<section class="sample">-->
    <!--<div id="app-3">-->
      <!--<h1 v-if="seen">Congratulations!</h1>-->
    <!--</div>-->
  <!--</section>-->
  <!--<slideshow></slideshow>-->
  <!--<about-us title-text="newInformation" sample="this.sample"></about-us>-->
  <!--<slots-sample url="/wechat">We Chat</slots-sample>-->
  <!--<named-slots slot="header">-->
    <!--<h1>Here might be a page title</h1>-->
  <!--</named-slots>-->

  <!--<p>A paragraph for the main content.</p>-->
  <!--<p>And another one.</p>-->

  <!--<named-slots slot="footer">-->
    <!--<p>Here's some contact info</p>-->
  <!--</named-slots>-->
</div>
</template>

<script>
import Slideshow from './children/Slideshow'
import AboutUs from './children/AboutUs'
import SlotsSample from './Slots'
import NamedSlots from './slots-example/NamedSlots'
export default {
  name: 'home',
  components: {
    NamedSlots,
    SlotsSample,
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
  },
  mounted () {

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
