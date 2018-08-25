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
      <router-link to="/trade" class="navbar-item title is-5">Trade</router-link>
    </div>
    <div class="navbar-end">
      <span class="navbar-item title cl-white">{{parseFloat(balance).toFixed(3)}} SOMC</span>
    </div>
  </nav>
</template>

<script>
export default {
  props: {
    balance: {
      type: [String, Number]
    }
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
