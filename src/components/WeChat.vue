<template>
<div class="wc-body">
  <div class="header">
    <h1>We Chat Emojis</h1>
  </div>
  <div class="show-area">
    <div class="message-proper">
      <h2>{{ emojiList[currentEmoji].value }}</h2>
      <img :src="emojiList[currentEmoji].img">
    </div>
  </div>
  <div class="select-area">
    <p>SMILEYS & PEOPLE</p>
    <div class="swiper-container">
      <div class="container-1">
        <label v-for="(i, v) in emojiList" :key="v" @click="selectEmoji(v)">
          <input type="radio" name="emoji" :value="i.value"/>
          <img :src="i.img"/>
        </label>
      </div>
      <div class="container-2">
        <label v-for="(i, v) in emojiList1" :key="v" @click="selectEmoji(v)">
          <input type="radio" name="emoji" :value="i.value"/>
          <img :src="i.img"/>
        </label>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import emoji1 from '../assets/wechat/emoji1.png'
import emoji2 from '../assets/wechat/emoji2.png'
import emoji3 from '../assets/wechat/emoji3.png'
import emoji4 from '../assets/wechat/emoji4.png'
import emoji5 from '../assets/wechat/emoji5.png'
import emoji6 from '../assets/wechat/emoji6.png'
import emoji7 from '../assets/wechat/emoji7.png'
import emoji8 from '../assets/wechat/emoji8.png'
import emoji9 from '../assets/wechat/emoji9.png'
import emoji10 from '../assets/wechat/emoji10.png'
import emoji11 from '../assets/wechat/emoji11.png'
import emoji12 from '../assets/wechat/emoji12.png'
import emoji13 from '../assets/wechat/emoji13.png'
import emoji14 from '../assets/wechat/emoji14.png'
import emoji15 from '../assets/wechat/emoji15.png'
import emoji16 from '../assets/wechat/emoji16.png'
import emoji17 from '../assets/wechat/emoji17.png'
import emoji18 from '../assets/wechat/emoji18.png'
import emoji19 from '../assets/wechat/emoji19.png'
import emoji20 from '../assets/wechat/emoji20.png'
export default {
  name: 'we-chat',
  data () {
    return {
      active: 1,
      currentEmoji: 0,
      emojiList: [
        { id: 0, img: emoji1, active: false, value: 'forced happy' },
        { id: 1, img: emoji2, active: false, value: 'scared' },
        { id: 2, img: emoji3, active: false, value: 'like' },
        { id: 3, img: emoji4, active: false, value: 'surprised' },
        { id: 4, img: emoji5, active: false, value: 'unwell' },
        { id: 5, img: emoji6, active: false, value: 'shy' },
        { id: 6, img: emoji7, active: false, value: 'sleepy' },
        { id: 7, img: emoji8, active: false, value: 'sulking' },
        { id: 8, img: emoji9, active: false, value: 'shout' },
        { id: 9, img: emoji10, active: false, value: 'awkward' }
      ],
      emojiList1: [
        { id: 10, img: emoji11, active: false, value: 'cool' },
        { id: 11, img: emoji12, active: false, value: 'quiet' },
        { id: 12, img: emoji13, active: false, value: 'embarrassed' },
        { id: 13, img: emoji14, active: false, value: 'happy' },
        { id: 14, img: emoji15, active: false, value: 'giggling' },
        { id: 15, img: emoji16, active: false, value: 'nauseous' },
        { id: 16, img: emoji17, active: false, value: 'macho' },
        { id: 17, img: emoji18, active: false, value: 'sad' },
        { id: 18, img: emoji19, active: false, value: 'disbelief' },
        { id: 20, img: emoji20, active: false, value: 'happy' }
      ],
      infinite: true
    }
  },
  methods: {
    selectEmoji (index) {
      this.currentEmoji = index
    }
  }
}
</script>

<style scoped lang="scss">
.wc-body {
  width: 375px;
  height: 667px;
  border: 1px solid rgba(0, 0, 0, 0.9);
  margin: 50px auto;
  border-radius: 10px;
  padding: 20px 0;
  .header {
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    h1 {
      color: BLACK;
      margin: 0;
    }
  }
  .show-area {
    width: 375px;
    height: 450px;
    margin: 0 auto;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    .message-proper {
      width: 250px;
      background: linear-gradient(to bottom, #04eb45, #01e64d);
      border-radius: 100px;
      padding: 10px;
      h2 {
        color: WHITE;
        margin: 0;
      }
      img {
        margin-top: 5px;
        width: 60px;
        height: 60px;
      }
    }
  }
  .select-area {
    width: 355px;
    background: #edeef2;
    padding: 10px;
    border-top: 1px solid #dddddd;
    p {
      color: #a1a2a6;
      text-align: left;
      margin: 0;
      font-size: 0.8rem;
    }
    label {
      width: 20px;
      height: 20px;
      display: inline-flex;
      flex-direction: row;
      justify-content: flex-start;
      padding: 5px;
      cursor: pointer;
      input {
        visibility: hidden;
        position: absolute;
      }
      img {
        width: 100%;
      }
      &:hover {
      }
    }
  }
}
</style>
