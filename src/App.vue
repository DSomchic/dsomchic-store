<template>
  <div id="app">
    <base-navbar :balance="balance" :address="address"></base-navbar>
    <router-view @getBalance="getBalance"/>
  </div>
</template>

<script>
import BaseNavbar from '@/components/BaseNavbar.vue'

import bn from './utils'
export default {
  components: { BaseNavbar },
  data () {
    return {
      balance: '0',
      address: ''
    }
  },
  async created () {
    this.getBalance()
  },
  methods: {
    async getBalance () {
      try {
        const accouts = await this.$web3.eth.getAccounts()
        this.$web3.eth.defaultAccount = accouts[0]
        this.address = this.$web3.eth.defaultAccount
        const balance = await this.$contract.methods.balanceOf(this.$web3.eth.defaultAccount).call()
        console.log(balance, bn.toHumanNumber(balance))
        this.balance = bn.toHumanNumber(balance)
      } catch (err) {
        console.log(err)
      }
    }
  }
}
</script>
