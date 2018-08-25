import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Buefy from 'buefy'
import Web3 from 'web3'
import VueClipboard from 'vue-clipboard2'
import 'buefy/lib/buefy.css'
import 'begeta/css/begeta.min.css'
import 'mdi/css/materialdesignicons.min.css'
import contract from './contracts'
<<<<<<< HEAD

=======
import Spinner from 'vue-spinkit'
>>>>>>> 42353d8b81e2fa7b5e490d1de269f65e3dbf76ae
Vue.config.productionTip = false
Vue.use(Buefy)
Vue.use(VueClipboard)

Vue.component('Spinner', Spinner)

let web3 = null
if (typeof window.web3 !== 'undefined') {
  web3 = new Web3(window.web3.currentProvider)
} else {
  console.log('Please login Metamask.')
}

Vue.prototype['$web3'] = web3
Vue.prototype['$contract'] = new web3.eth.Contract(contract.abi, contract.address)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
