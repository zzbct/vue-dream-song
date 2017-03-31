import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: require('../views/index'),
      children: [
      	{
      		path: 'recommend',
      		component: require('../views/recommend')
      	},
      	{
      		path: 'songList',
      		component: require('../views/songList')
      	},
      	{
      		path: 'radio',
      		component: require('../views/radio')
      	},
      	{
      		path: 'charts',
      		component: require('../views/charts')
      	}
      ]
    },
    {
      path: '/second/listInfo',
      component: require('../views/listInfo.vue')
    }
  ]
})
