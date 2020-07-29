<template>
  <div>
    <h2>This is a logout page</h2>
  </div>
</template>

<script>
export default {
  name: 'Logout',
  created () {
    this.$router.push('/')
  }
}
</script>
