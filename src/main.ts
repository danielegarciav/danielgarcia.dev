import './environment-setup';
import Vue from 'vue';
import router from './router';
import App from './App.vue';

new Vue({
  router,
  el: '#app-container',
  render: h => h(App),
});
