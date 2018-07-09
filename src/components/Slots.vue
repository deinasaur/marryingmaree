<template>
  <a
    v-bind:href="url"
    class="nav-link"
  >
    <slot></slot>
  </a>
</template>

<script>
export default {
  name: 'slots-sample'
}
</script>

<style scoped lang="scss">
  a {
    font-weight: bolder;
  }

</style>
