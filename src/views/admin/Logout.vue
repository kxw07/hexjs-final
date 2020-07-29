<template>
  <div>
    <h2>This is a logout page</h2>
  </div>
</template>

<script>
export default {
  name: 'Logout',
  created () {
    this.deleteAllCookies()
    this.$router.push('/')
  },
  methods: {
    deleteAllCookies () {
      const cookies = document.cookie.split(';')

      for (let i = 0; i < cookies.length; i++) {
        const cookie = cookies[i]
        const eqPos = cookie.indexOf('=')
        const name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie
        document.cookie = name + '=;expires=Thu, 01 Jan 1970 00:00:00 GMT'
      }
    }
  }
}
</script>
