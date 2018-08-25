<template>
  <nav class="navbar navbar--black pd-10px" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <a class="navbar-item" href="https://bulma.io">
        <img alt="Vue logo" src="@/assets/logo.png">
        <h1 class="title cl-white">Somchoic</h1>
      </a>
      <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>
    <div class="navbar-end">
      <router-link to="/transfer" class="navbar-item">Transfer</router-link>
      <router-link to="/trade" class="navbar-item">Trade</router-link>
    </div>
  </nav>
</template>

<style scoped>
.navbar--black {
  background: #191919;
}
/* DISABLE HOVER */
.navbar-item:hover {
  background: #191919 !important;
}
</style>
