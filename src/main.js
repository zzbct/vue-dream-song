// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './muStore'
import axios from 'axios'
import '../src/assets/reset.css'
import '../src/assets/style.css'
import '../src/assets/special.css'
Vue.prototype.$http = axios

axios.defaults.baseURL = 'http://localhost:4040'
//axios.defaults.headers.post['Conten-Type'] = 'http://localhost:4040/first'
Vue.use(axios)
Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
