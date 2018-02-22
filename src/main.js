import Vue from 'vue'
import VueRouter from 'vue-router';
import Buefy from 'buefy';
import 'buefy/lib/buefy.css';

import App from './App.vue'
import { routes } from './routes';

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
