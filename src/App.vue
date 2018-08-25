<template>
  <div id="app">
    <base-navbar :balance="balance"></base-navbar>
    <button class="button" @click="buyToken(0.001)">buy 0.001eth</button>
    <router-view/>
  </div>
</template>

<script>
import BaseNavbar from '@/components/BaseNavbar.vue'

import bn from './utils'
export default {
  components: { BaseNavbar },
  data () {
    return {
      balance: '-'
    }
  },
  async created () {
    try {
      const accouts = await this.$web3.eth.getAccounts()
      this.$web3.eth.defaultAccount = accouts[0]
      const balance = await this.$contract.methods.balanceOf(this.$web3.eth.defaultAccount).call()
      this.balance = bn.toHumanNumber(balance)
    } catch (err) {
      console.log(err)
    }
  },
  methods: {
    buyToken (amount) {
      const value = bn.toWei(amount)
      this.$contract.methods.buyToken().send({ from: this.$web3.eth.defaultAccount, value })
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 20px;
  background-color: #191919;
}

#nav a {
  font-weight: bold;
  color: #F9C332;
}

#nav a.router-link-exact-active {
  color: #EE5935;
}

#nav-left {
  left: 0;
}

</style>
