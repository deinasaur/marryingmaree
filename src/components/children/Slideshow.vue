<template>
<section class="slide-show-container">
  <div class="text">
    <h1>Sample Banners</h1>
  </div>
  <div class="images">
    <div class="slide">
      <img src="../../assets/slide-show/banner-01.jpg">
    </div>
    <div class="slide">
      <img src="../../assets/slide-show/banner-02.jpg">
    </div>
    <div class="slide">
      <img src="../../assets/slide-show/banner-03.jpg">
    </div>
  </div>
</section>
</template>

<script>
export default {
  name: 'slideshow',
  mounted: function () {
  }
}
</script>

<style scoped lang="scss">
.slide-show-container {
  position: relative;
  width: 99.9%;
  height: 500px;
  display: flex;
  justify-content: center;
  align-content: center;
  .images {
    position: relative;
    z-index: 0;
    .slide {
      display: none;
    }
    div > img {
      width: 100%;
    }
  }
  .text {
    width: 93.75rem;
    height: 25rem;
    border: 0.5rem solid WHITE;
    position: absolute;
    top: 50px;
    z-index: 50;
    h1 {
      color: WHITE;
    }
  }

}

.fade {
   -webkit-animation-name: fade;
   -webkit-animation-duration: 1.5s;
   animation-name: fade;
   animation-duration: 1.5s;
 }

@-webkit-keyframes fade {
  from {opacity: .4}
  to {opacity: 1}
}

@keyframes fade {
  from {opacity: .4}
  to {opacity: 1}
}
</style>
