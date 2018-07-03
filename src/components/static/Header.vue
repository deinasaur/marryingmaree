<template>
<div class="header">
  <div class="container">
    <h3>Mari + Dann</h3>
    <p>May 08, 2019</p>
    <ul v-for="(item, v) in navList" :key="v">
      <li>{{ item }}</li>
    </ul>
  </div>
</div>
</template>

<script>
export default {
  name: 'top-header',
  data () {
    return {
      navList: [
        'Home',
        'Proposal',
        'Photographs',
        'Wedding',
        'Party',
        'RSVP',
        'Registry'
      ]
    }
  }
}
</script>

<style scoped lang="scss">
.header {
  position: fixed;
  top: 0;
  width: 100%;
  height: 90px;
  background: rgba( 255, 255, 255, 0.95);
  border-bottom: 1px solid #F5F5F5;
  transition: top 0.3s ease-in-out;
  display: flex;
  justify-content: center;
  align-items: center;
  .container {
    width: 1200px;
    margin: 0 auto;
    justify-content: center;
    align-items: center;
    display: flex;
    h3 {
      color: #896075;
      text-transform: uppercase;
      margin-right: 10px;
    }
    p {
      margin-right: 100px;
      font-size: 0.8rem;
    }
    ul {
      li {
        list-style-type: none;
        text-transform: uppercase;
        cursor: pointer;
        font-size: 0.65rem;
        transition: all 0.5s ease;
        font-weight: bold;
        &:hover {
          color: #896075;
        }
      }
    }
  }
}
</style>
