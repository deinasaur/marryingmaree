<template>
<div class="home">
  <section class="sample">
    <div id="app-3">
      <h1 v-if="seen">Congratulations!</h1>
    </div>
  </section>
</div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      seen: true
    }
  }
}
</script>

<style scoped lang="scss">
.home {
  section.banner {
    #app-3 {
      h1 {
        color: #111111;
      }
    }
  }
}
</style>
