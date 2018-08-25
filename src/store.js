import Vue from 'vue'
import Vuex from 'vuex'
import getWeb3 from '@/utils/getWeb3.js'

Vue.use(Vuex)
const state = {
  web3: {
    isInjected: false,
    web3Instance: null,
    networkId: null,
    coinbase: null,
    balance: null,
    error: null
  },
  contractInstance: null
}

const getters = {
  getWeb3: state => state.web3
}

const mutations = {
  SET_WEB3 (state, payload) {
    console.log('SET_WEB3 Mutation being executed', payload)
    let result = payload
    let web3Copy = state.web3
    web3Copy.coinbase = result.coinbase
    web3Copy.networkId = result.networkId
    web3Copy.balance = parseInt(result.balance, 10)
    web3Copy.isInjected = result.injectedWeb3
    web3Copy.web3Instance = result.web3
    state.web3 = web3Copy
  }
}

const actions = {
  registerWeb3: ({ commit }) => {
    console.log('registerWeb3 Action being executed')
    getWeb3.then(result => {
      console.log('committing result to SET_WEB3 mutation')
      commit('SET_WEB3', result)
    }).catch(e => {
      console.log('error in action registerWeb3', e)
    })
  }
}

const store = () => {
  return new Vuex.Store({
    state,
    getters,
    actions,
    mutations
  })
}

export default store
