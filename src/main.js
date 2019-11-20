// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'
import VueDisqus from 'vue-disqus' 
import {VueMasonryPlugin} from 'vue-masonry';
Vue.use(VueMasonryPlugin)
Vue.use(Buefy)
Vue.use(VueDisqus) 
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
