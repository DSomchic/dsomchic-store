<template>
  <div id="app">
    <base-navbar :balance="balance"></base-navbar>
    <!-- <button class="button" @click="buyToken(0.001)">buy 0.001eth</button> -->
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
      balance: '0'
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
  // methods: {
  //   buyToken (amount) {
  //     const value = bn.toWei(amount)
  //     this.$contract.methods.buyToken().send({ from: this.$web3.eth.defaultAccount, value })
  //   }
  // }
}
</script>
