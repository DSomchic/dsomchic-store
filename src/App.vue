<template>
  <div id="app">
    <div id="nav">
      <div id="nav-left">
        <img alt="Vue logo" width="50" height="50" src="./assets/logo.png">
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link>
      </div>
    </div>
    <router-view/>
  </div>
</template>

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

#nav-right {
  
}

</style>
