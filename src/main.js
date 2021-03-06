import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import axios from 'axios';
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
// import qs from 'qs'
import { Indicator } from 'mint-ui'

Vue.config.productionTip = false;
// axios.defaults.baseURL = "https://www.thenewstep.cn/v1/eleme";s
Vue.prototype.$axios = axios;

//请求拦截
axios.interceptors.request.use(config=>{
  // if (config.method == 'post'){
  //   config.data = qs.stringify(config.data);
  // }
  //加载动画
  Indicator.open();
  return config
},error => {
  return Promise.reject(error)
})

//响应拦截
axios.interceptors.response.use(response => {
  Indicator.close();
  return response
},error => {
  Indicator.close();
  return Promise.reject(error)
})

Vue.use(MintUI);


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
