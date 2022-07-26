<template>
<button class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">Toggle right offcanvas</button>

<div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel" ref="Offcanvas">
  <div class="offcanvas-header">
    <h5 id="offcanvasRightLabel">購物清單</h5>
    <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body">
    <div class="offcanvas-body">
      <div class="cart d-flex justify-content-evenly" v-for="item in cart.carts" :key="item.id">
        <img class="pb-3" :src="item.product.imageUrl" alt="" />
        <div class="cart-info ms-3">
          <p class="fs-5 m-0">{{ item.product.title }}</p>
          <div class="input-group input-group-sm pt-2" style="width:140px">
              <input
              min="1"
                type="number"
                class="form-control"
                v-model.number="item.qty"
                :disabled="status.loadingitem === item.id"
                @change="updateCart(item)"
              />
              <div class="input-group-text">/ {{ item.product.unit }}</div>
            </div>
          <p class="pt-2 fs-5">NT${{ item.product.price }}</p>
        </div>
        <div class="mt-4">
          <button type="button" class="btn btn-danger" style="margin-top:10px;" @click="delcart(item.id)">
            <i class="bi bi-trash3"></i>
          </button>
        </div>
      </div>
      <div class="row">
        <div class="text-end">
          <span class="text-danger me-4 mt-2" style="font-size:24px">總計:{{ total }}</span>
           <router-link class="btn btn-warning mb-1" to="/user/shopcart" @click="hide">結帳</router-link>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<style>
.cart img {
  width: 30%;
  height: 30%;
}
</style>

<script>
import Offcanvas from 'bootstrap/js/dist/offcanvas'
import { mapState, mapActions } from 'pinia'
import statusStore from '@/stores/statusStore'
import cart from '@/stores/cart'
export default {
  data () {
    return {
      Offcanvas: {}
    }
  },
  computed: {
    ...mapState(statusStore, ['isLoading', 'messages']),
    ...mapState(cart, ['cart', 'total', 'cartqty'])
  },
  methods: {
    ...mapActions(cart, ['addToCart', 'getCart', 'delcart', 'updateCart']),
    showCart () {
      this.Offcanvas.show()
    },
    hideCart () {
      this.Offcanvas.hide()
    }
  },
  mounted () {
    this.Offcanvas = new Offcanvas(this.$refs.Offcanvas)
    this.Offcanvas.show()
  },
  created () {
    this.getCart()
    console.log(cart)
  }
}
</script>
