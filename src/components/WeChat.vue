<template>
<div class="wc-body">
  <div class="header">
    <h2>We Chat Emojis</h2>
  </div>
  <div class="show-area">
    <div class="message-proper">
      <h2>{{ emojiList[currentEmoji].value }}</h2>
      <img :src="emojiList[currentEmoji].img">
    </div>
  </div>
  <div class="text-area">
    <input type="text"/>
    <button> › </button>
  </div>
  <div class="select-area">
    <p>SMILEYS & PEOPLE</p>
    <div class="swiper-container">
      <div class="container-1">
        <label v-for="(i, v) in emojiList" :key="v" @click="selectEmoji(v)" :class="active ">
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
import emoji21 from '../assets/wechat/emoji21.png'
import emoji22 from '../assets/wechat/emoji22.png'
import emoji23 from '../assets/wechat/emoji23.png'
import emoji24 from '../assets/wechat/emoji24.png'
import emoji25 from '../assets/wechat/emoji25.png'
import emoji26 from '../assets/wechat/emoji26.png'
import emoji27 from '../assets/wechat/emoji27.png'
import emoji28 from '../assets/wechat/emoji28.png'
import emoji29 from '../assets/wechat/emoji29.png'
import emoji30 from '../assets/wechat/emoji30.png'
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
        { id: 9, img: emoji10, active: false, value: 'awkward' },

        { id: 10, img: emoji11, active: false, value: 'cool' },
        { id: 11, img: emoji12, active: false, value: 'quiet' },
        { id: 12, img: emoji13, active: false, value: 'embarrassed' },
        { id: 13, img: emoji14, active: false, value: 'happy' },
        { id: 14, img: emoji15, active: false, value: 'giggling' },
        { id: 15, img: emoji16, active: false, value: 'nauseous' },
        { id: 16, img: emoji17, active: false, value: 'macho' },
        { id: 17, img: emoji18, active: false, value: 'sad' },
        { id: 18, img: emoji19, active: false, value: 'disbelief' },
        { id: 20, img: emoji20, active: false, value: 'happy' },

        { id: 21, img: emoji21, active: false, value: 'cheeky' },
        { id: 22, img: emoji22, active: false, value: 'mad' },
        { id: 23, img: emoji23, active: false, value: 'thinking' },
        { id: 24, img: emoji24, active: false, value: 'dizzy' },
        { id: 25, img: emoji25, active: false, value: 'frustrated' },
        { id: 26, img: emoji26, active: false, value: 'malicious smile' },
        { id: 27, img: emoji27, active: false, value: 'kill' },
        { id: 28, img: emoji28, active: false, value: 'doubting' },
        { id: 29, img: emoji29, active: false, value: 'disappointed' },
        { id: 30, img: emoji30, active: false, value: 'begging' }
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
  .header {
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    h2 {
      color: BLACK;
      margin: 10px 0;
    }
  }
  .show-area {
    width: 375px;
    height: 436px;
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
  .text-area {
    height: 30px;

    input[type=text] {
      height: 20px;
      font-size: 0.9rem;
      font-family: "Montserrat", sans-serif;
      border-radius: 50px;
      padding-left: 5px;
      border: 1px solid rgba(0, 0, 0, 0.2);
      outline: 0;
    }
    button {

      width: 25px;
      height: 25px;
      background: linear-gradient(to bottom, #04eb45, #01e64d);
      outline: 0;
      font-size: 1.2rem;
      border: 0;
      color: WHITE;
      font-weight: bold;
      transform: rotate(-90deg);
      cursor: pointer;
      &:hover {
        background: #04eb45;
      }
    }
  }
  .select-area {
    width: 355px;
    border-radius: 0 0 10px 10px;
    background: #edeef2;
    padding: 10px;
    border-top: 1px solid #dddddd;
    p {
      color: #a1a2a6;
      text-align: left;
      margin: 0 0 10px;
      font-size: 0.8rem;
      font-weight: bolder;
      width: 355px;
    }
    .swiper-container {
      width: 350px;
      display: flex;
      justify-content: center;
      .container-1 {
        align-content: center;
        label {
          width: 25px;
          height: 25px;
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
  }
}
</style>
