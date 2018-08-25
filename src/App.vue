<template>
  <div id="app">
    <base-navbar></base-navbar>
    <router-view/>
  </div>
</template>

<script>
import BaseNavbar from '@/components/BaseNavbar.vue'
export default {
  components: { BaseNavbar }
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
