<template>
  <div class="container">
    <form class="form-signin text-center" v-on:submit.prevent="login">
      <h1 class="h3 mb-3 font-weight-normal">Please sign in</h1>

      <div class="form-group">
        <label for="inputEmail" class="sr-only">Email address</label>
        <input type="email" id="inputEmail" class="form-control" v-model="user.email" placeholder="Email Address"
               required autofocus>
      </div>

      <div class="form-group">
        <label for="inputPwd" class="sr-only">Password</label>
        <input type="password" id="inputPwd" class="form-control" v-model="user.password" placeholder="Password"
               required>
      </div>
      <span class="text-danger">{{msg}}</span>

      <button type="submit" class="btn btn-lg btn-primary btn-block">Sign in</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      user: {
        email: '',
        password: ''
      },
      msg: ''
    }
  },
  methods: {
    login () {
      const headers = {
        'Content-Type': 'application/json'
      }
      this.axios({
        url: 'https://course-ec-api.hexschool.io/api/auth/login',
        method: 'post',
        headers: headers,
        data: this.user
      }).then(res => {
        document.cookie = `token=${res.data.token}; max-age=1800; path=/`
        document.cookie = `uuid=${res.data.uuid}; max-age=1800; path=/`
        this.$router.push('admin/products')
      }).catch(err => {
        this.msg = err.response.data.message
        console.log(err)
      })
    }
  }
}
</script>

<style scoped>

</style>
