<template>
  <div class="home">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/products">Products</router-link> |
      <router-link to="/cart">Cart</router-link> |
      <router-link to="/payment">Payment</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/login">Manager Login</router-link>
    </div>
    <router-view/>
  </div>
</template>
