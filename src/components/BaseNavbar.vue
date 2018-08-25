<template>
  <nav class="navbar navbar--black pd-10px" role="navigation" aria-label="main navigation" >
    <div class="navbar-brand">
      <a class="navbar-item" href="/">
        <img alt="Vue logo" src="@/assets/logo.png">
        <h1 class="title cl-white">Somchoic</h1>
      </a>
    </div>
    <div class="navbar-start">
      <router-link to="/transfer" class="navbar-item title is-5 is-marginless">Transfer</router-link>
      <router-link to="/trade" class="navbar-item title is-5">Exchange</router-link>
    </div>
    <div class="navbar-start">
      <span v-if="address"
        class="navbar-item title is-6 cl-white cs-pointer"
        v-clipboard:copy="address"
        v-clipboard:success="onCopy"
        v-clipboard:error="onError"
      >
        {{address}}
      </span>
      <span v-else class="navbar-item title is-6 cl-white cs-pointer"  >Loading...</span>
    </div>
    <div class="navbar-end pd-t-15px pd-r-15px" @click="openEtherScan">
      <b-icon icon="open-in-new" type="is-primary"></b-icon>
    </div>
  </nav>
</template>

<script>
export default {
  props: {
    address: {
      type: String
    }
  },
  methods: {
    async getTokenBalnce () {
      const tokenBalance = await this.$contract.methods.balanceOf(this.userAddr).call()
      this.somcTokenBalance = bn.toHumanNumber(tokenBalance)
    },
    onCopy: function (e) {
      this.$toast.open('You just copied: ' + e.text)
    },
    onError: function (e) {
      this.$toast.open('Failed to copy texts')
    },
    openEtherScan () {
      const url = `https://kovan.etherscan.io/address/${this.userAddr}`
      const win = window.open(url, '_blank')
      win.focus()
    }
  },
  created () {
    this.message = this.address
  },
  async mounted () {
    const accounts = await this.$web3.eth.getAccounts()
    this.userAddr = accounts[0]
    await this.getTokenBalnce()
  }
}
</script>

<style scoped>
.navbar--black {
  background: #191919;
}
/* DISABLE HOVER */
.navbar-item:hover {
  background: #191919 !important;
}

</style>
