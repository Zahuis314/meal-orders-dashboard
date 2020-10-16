import moment from 'moment'
import Vue from 'vue'
import App from './App.vue'
import config from '@/config'

Vue.config.productionTip = false
Vue.prototype.moment = moment
Vue.prototype.config = config.config

new Vue({
  render: function (h) { return h(App) },
}).$mount('#app')
