<template>

</template>

<script>
export default {
  name: 'swiper',
  data () {
    return {
      infinite: true
    }
  },
  props: ['url'],
  mounted: function () {
    var Swiper = new Swiper('.swiper-container', {
      centeredSlides: true,
      direction: 'horizontal',
      loop: this.infinite,
      pagination: '.swiper-pagination',
      paginationType: 'bullets'
    })
  }
}
</script>

<style scoped>

</style>
