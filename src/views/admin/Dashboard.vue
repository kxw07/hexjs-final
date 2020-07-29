<template>
  <div id="app">
    <div id="nav">
      <router-link to="/admin">Admin Home</router-link> |
      <router-link to="/admin/products">Admin Products</router-link> |
      <router-link to="/admin/coupons">Admin Coupons</router-link> |
      <router-link to="/admin/orders">Admin Orders</router-link> |
      <router-link to="/admin/pictures">Admin Pictures</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

  #nav {
    padding: 30px;

    a {
      font-weight: bold;
      color: #2c3e50;

      &.router-link-exact-active {
        color: #42b983;
      }
    }
  }
</style>
