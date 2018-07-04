<template>
  <div id="app">
    <top-header v-if="active"></top-header>
    <!--<img src="./assets/logo.png">-->
    <router-view/>
  </div>
</template>

<script>
import TopHeader from './components/static/Header'
export default {
  name: 'App',
  components: {TopHeader},
  data () {
    return {
      active: false
    }
  }
}
</script>

<style lang="scss">
  @font-face {
    font-family: Montserrat;
    src: url(assets/fonts/Montserrat-Regular.ttf) format('truetype');
  }
  @font-face {
    font-family: Roboto;
    src: url(assets/fonts/Roboto-Regular.ttf) format('truetype');
  }
  @font-face {
    font-family: Roboto Slab;
    src: url(assets/fonts/RobotoSlab-Regular.ttf) format('truetype');
  }

#app {
  font-family: 'Montserrat', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
