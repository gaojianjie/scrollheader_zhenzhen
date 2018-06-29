import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Header from '@/components/header/header.vue'

Vue.use(Router)


 let routes =  [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/header',
      name: 'header',
      component: Header,
    }
  ]


export default new Router({
  mode: 'history',
  base: '/',
  routes
})

