<template>
  <div class="container">
    <header>
      <slot name="header"></slot>
    </header>
    <main>
      <slot></slot>
    </main>
    <footer>
      <slot name="footer"></slot>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'named-slots'
}
</script>

<style scoped lang="scss">
  .container {
    width: 50%;
    text-align: center;
    color: RED;
  }
</style>
