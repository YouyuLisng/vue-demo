<template>
  <div class="cart-table d-flex container p-3 mt-5">
    <div class="col-3" style="flex-basis: 30%">商品名稱</div>
    <div class="col-1" style="flex-basis: 10%">規格</div>
    <div class="col-1" style="flex-basis: 10%">單價</div>
    <div class="col-1" style="flex-basis: 20%">數量</div>
    <div class="col-3" style="flex-basis: 15%">金額</div>
    <div class="col-3" style="flex-basis: 15%">移除</div>
  </div>
  <div class="container mt-5 p-2 cart-list d-flex" v-for="item in cart.carts" :key="item.id">
    <div class="col-3 d-flex align-items-center" style="flex-basis: 30%">
        {{item.product.title}}
    </div>
    <div class="col-1 d-flex align-items-center" style="flex-basis: 10%"></div>
    <div class="col-1 d-flex align-items-center" style="flex-basis: 10%">
        {{item.product.price}}
    </div>
    <div class="col-1 d-flex align-items-center" style="flex-basis: 20%">
        {{item.qty}}
    </div>
    <div class="col-3 d-flex align-items-center" style="flex-basis: 15%">
        {{item.total}}
    </div>
    <div class="col-3 d-flex align-items-center" style="flex-basis: 15%">
        <button type="button" class="btn btn-danger" @click="delcart(item.id)">
            <i class="bi bi-trash3"></i>
          </button>
    </div>
  </div>
</template>

<style>
.cart-table {
  background-color: #00a6a6;
  border-radius: 10px;
}
.cart-list{
    border: 1px solid #000;
    border-radius: 5px;
}
</style>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      cart: {}
    }
  },
  methods: {
    getCart () {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`
      //   status.isLoading = true
      axios.get(url).then((response) => {
        this.cart = response.data.data
        // status.isLoading = false
        console.log(this.cart)
      })
    },
    delcart (id) {
      //   status.cartLodaingItem = id
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart/${id}`
      //   status.isLoading = true
      axios.delete(url).then((response) => {
        console.log(response)
        // status.pushMessage({ title: '移除購物車品項', content: response.data.message })
        // status.cartLodaingItem = ''
        this.getCart()
        // status.isLoading = false
      })
    }
  },
  created () {
    this.getCart()
  }
}
</script>
