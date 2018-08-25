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
    <div class="navbar-start hover">
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
    <div class="navbar-end">
      <!-- <span class="navbar-item title cl-white">{{parseFloat(balance).toFixed(3)}} SOMC</span> -->
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
    onCopy: function (e) {
      this.$toast.open('You just copied: ' + e.text)
    },
    onError: function (e) {
      this.$toast.open('Failed to copy texts')
    }
  },
  created () {
    this.message = this.$web3.eth.defaultAccount
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
