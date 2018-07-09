<template>
<section class="about-us">
  <h1>Lorem ipsum</h1>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse quis porta tortor. Maecenas hendrerit magna quis lorem ornare lacinia. Sed sed cursus lorem. Pellentesque vitae purus massa. Duis laoreet, felis vitae dictum suscipit, nisl nulla cursus tellus, eu varius lorem nibh at nisi. Ut feugiat, lacus sed luctus auctor, elit ex hendrerit sapien, vitae pharetra turpis elit tempor urna. Proin nisl augue, consectetur et mollis ut, tristique at ipsum. Duis erat nibh, eleifend nec sem sit amet, condimentum consequat nisi. Sed erat ex, suscipit a maximus vitae, consequat ac sapien. Etiam ultrices est ut ligula imperdiet, at elementum sem luctus. Nunc elit mauris, auctor id urna vestibulum, efficitur viverra dui.</p>
  <h2>{{ titleText.title }}</h2>
  <p>{{ titleText.text }}</p>
  <p>{{ sample }}</p>
</section>
</template>

<script>
export default {
  name: 'about-us',
  props: [
    'titleText',
    'sample'
  ]
}
</script>

<style scoped lang="scss">
section.about-us {
  padding: 100px;
  background: linear-gradient(to bottom, #FFF, #EEE);
}
</style>
