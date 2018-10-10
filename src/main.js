// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

//import VConsole from "vconsole/dist/vconsole.min"
// 初始化vConsole
//const vConsole = new VConsole();

//import iView from 'iview';
//import 'iview/dist/styles/iview.css';

import Vant from 'vant';
import 'vant/lib/vant-css/index.css';


import './assets/style/reset.css';
import './assets/style/public.less';
//Vue.use(iView);
Vue.use(Vant);

Vue.config.productionTip = false

new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})
