<template>
  <div>
    <h2>This is a admin coupons page</h2>
  </div>
</template>

<script>
export default {
  name: 'Coupons',
  data () {
    return {
      user: {
        token: '',
        uuid: ''
      }
    }
  },
  created () {
    this.isValidToken()
  },
  methods: {
    isValidToken () {
      document.cookie.split(';').forEach(keyValue => {
        const key = keyValue.trim().split('=')[0]
        const value = keyValue.trim().split('=')[1]
        this.user[key] = value
      })

      console.log(this.user)

      if (this.user.token === '' || this.user.uuid === '') {
        this.$router.push('/login')
      }

      this.axios({
        url: `${process.env.VUE_APP_API_URL}/api/auth/check`,
        method: 'post',
        headers: {
          'Content-Type': 'application/json'
        },
        data: {
          api_token: this.user.token
        }
      }).then(res => {
        console.log('Token is valid')
      }).catch(err => {
        this.msg = err.response.data.message
        console.log(err)
        this.$router.push('/login')
      })
    }
  }
}
</script>
