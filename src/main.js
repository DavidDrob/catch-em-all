import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'
import router from './router'
import store from './store'
Vue.config.productionTip = false

Vue.prototype.$store = store;
Vue.use(Vuex)

// Instance
new Vue({
  router,
  store,
  components:{
    App
  },
  render: h => h(App)
}).$mount('#app')
