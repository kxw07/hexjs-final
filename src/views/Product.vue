<template>
  <div>
    <h1>This is a product page</h1>
    <div>{{product.title}}</div>
    <div>{{product.content}}</div>
    <div>{{product.price}}</div>
  </div>
</template>

<script>
export default {
  name: 'Product',
  data () {
    return {
      product: {}
    }
  },
  created () {
    this.axios.get(`${process.env.VUE_APP_API_URL}api/${process.env.VUE_APP_UUID}/ec/product/${this.$route.params.id}`)
      .then(res => {
        this.product = res.data.data
      })
      .catch(err => {
        console.log(err)
      })
  }
}
</script>
