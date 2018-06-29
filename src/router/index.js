import Vue from 'vue'
import Router from 'vue-router'



Vue.use(Router)

const HelloWorld = (resolve) => {
  import('@/components/HelloWorld').then((module) => {
    resolve(module);
  })
}

const Header = (resolve) => {
  import('@/components/header/header.vue').then((module) => {
    resolve(module);
  })
}

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

