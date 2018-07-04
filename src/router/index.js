import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/Home'
import WeChat from '@/components/WeChat'

Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'HelloWorld',
    //   component: HelloWorld
    // },
    {
      path: '/',
      name: 'home'
    },
    {
      path: '#',
      name: 'home'
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/wechat',
      name: 'we-chat',
      component: WeChat
    }
  ]
})
