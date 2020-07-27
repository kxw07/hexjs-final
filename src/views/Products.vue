<template>
  <div class="products">
    <h1>This is a products page</h1>
    <table v-for="item in products" :key="item.id">
      <td>{{item.title}}</td>
    </table>
  </div>
</template>

<script>
export default {
  name: 'Products',
  data () {
    return {
      products: []
    }
  },
  created () {
    console.log(process.env.VUE_APP_UUID)
    this.axios.get(`${process.env.VUE_APP_API_URL}/api/${process.env.VUE_APP_UUID}/ec/products`).then(res => {
      this.products = res.data.data
    }).catch(err => {
      console.log(err)
    })
  }
}
</script>
