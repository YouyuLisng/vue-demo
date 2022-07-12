<template>
<div class="container">
    <button
    type="button"
    class="btn btn-primary float-end"
    @click="showOffcanvasMenu()"
  >
    Primary
  </button>
  <div
    class="offcanvas offcanvas-end"
    :class="showMenu ? 'show' : ''"
    tabindex="-1"
    :style="{ visibility: showMenu ? 'visible' : 'hidden' }"
  >
    <div class="offcanvas-header">
      <h5 class="offcanvas-title" id="">購物清單</h5>
      <button
        type="button"
        class="btn-close text-reset"
        @click.prevent="showOffcanvasMenu()"
      ></button>
    </div>
    <div class="offcanvas-body">
      <div class="cart d-flex" v-for="item in cart.carts" :key="item.id">
        <img class="pb-3" :src="item.product.imageUrl" alt="" />
        <div class="cart-info ms-3">
            <p class="fs-5 text-primary">{{item.product.title}}</p>
            <span>數量:{{item.qty}}</span>
            <p class="">NT${{item.product.origin_price}}</p>
        </div>
        <div class="mt-4">
            <button type="button" class="btn btn-danger"><i class="bi bi-trash3"></i></button>
        </div>
      </div>
       <button type="button" class="btn btn-warning float-end mt-3">結帳</button>
      <!-- <table>
        <thead>
          <tr>
            <th class="text-center" style="width: 130px">品名</th>
            <th class="text-center" style="width: 130px">數量</th>
            <th class="text-center" style="width: 130px">單價</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in cart.carts" :key="item.id">
            <td class="text-center pb-3">{{ item.product.title }}</td>
             <td class="text-center">{{ item.qty }}</td>
             <td class="text-center">{{ item.product.origin_price }}</td>
          </tr>
        </tbody>
      </table> -->
    </div>
  </div>
</div>
</template>

<style>
.cart img {
  width: 30%;
  height: 30%;
  background-position: center;
}
.cart-info {
  width: 70%;
  height: 70%;
}
</style>

<script>
export default {
  data () {
    return {
      cart: [],
      showMenu: false,
      status: {
        loadingitem: ''
      }
    }
  },
  methods: {
    showOffcanvasMenu () {
      this.showMenu ? (this.showMenu = false) : (this.showMenu = true)
    },
    getCart () {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`
      this.isLoading = true
      this.$http.get(url).then((response) => {
        console.log(response)
        this.cart = response.data.data
        this.isLoading = false
        console.log(this.cart.carts)
      })
    }
  },
  created () {
    this.getCart()
  }
}
</script>
