<template>
  <div id="app">
    <base-navbar :address="accountAddress"></base-navbar>
    <router-view :ethBalance="ethBalance" :somcBalance="somcBalance" @getBalance="getTokenBalance"/>
  </div>
</template>

<script>
import BaseNavbar from '@/components/BaseNavbar.vue'

import bn from './utils'
export default {
  components: { BaseNavbar },
  data () {
    return {
      ethBalance: '',
      somcBalance: '',
      accountAddress: ''
    }
  },
  async mounted () {
    this.accountAddress = await this.$web3.eth.getAccounts()
    this.accountAddress = this.accountAddress[0]
    this.ethBalance = bn.toHumanNumber(await this.$web3.eth.getBalance(this.accountAddress))
    this.getTokenBalance()
  },
  async created () {
    this.getTokenBalance()
  },
  methods: {
    async getTokenBalance () {
      try {
        const accouts = await this.$web3.eth.getAccounts()
        this.$web3.eth.defaultAccount = accouts[0]
        this.address = this.$web3.eth.defaultAccount
        const balance = await this.$contract.methods.balanceOf(this.$web3.eth.defaultAccount).call()
        console.log(balance, bn.toHumanNumber(balance))
        this.somcBalance = bn.toHumanNumber(balance)
      } catch (err) {
        console.log(err)
      }
    }
  }
}
</script>
