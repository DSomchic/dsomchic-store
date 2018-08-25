import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Buefy from 'buefy'
import Web3 from 'web3'
import 'buefy/lib/buefy.css'
import 'begeta/css/begeta.min.css'
import contract from './contracts'
Vue.config.productionTip = false
Vue.use(Buefy)

const web3 = new Web3(Web3.givenProvider)
Vue.prototype['$web3'] = web3
Vue.prototype['$contract'] = new web3.eth.Contract(contract.abi, contract.address)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
