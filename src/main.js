import Vue from 'vue'
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';

import Buefy from 'buefy';
import 'buefy/lib/buefy.css';

import App from './App.vue'
import { routes } from './routes';

Vue.use(VueResource);
Vue.http.options.root = 'http://gymstudioapi';

Vue.use(Buefy);
Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  routes,
});

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
