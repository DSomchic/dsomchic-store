<template>
  <nav class="navbar navbar--black pd-10px" role="navigation" aria-label="main navigation" >
    <div class="navbar-brand">
      <router-link to="/" class="navbar-item">
        <img alt="Vue logo" src="@/assets/logo.png">
        <h1 class="title cl-white">Somchoic</h1>
      </router-link>
      <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>
    <div class="navbar-end">
      <span class="navbar-item title cl-white">{{balance}} SC</span>
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
