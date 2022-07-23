<template>
  <Nav></Nav>
  <div
    class="text-center fs-3 pt-5 mt-5 ms-4"
    style="font-family: Marcellus SC, serif"
  >
    確認購物車商品數量是否正確
  </div>
  <div class="pt-5 container">
    <div class="position-relative m-4" style="margin-top: 56px">
      <div class="progress" style="height: 1px">
        <div
          class="progress-bar"
          role="progressbar"
          style="width: 100%"
          aria-valuenow="50"
          aria-valuemin="0"
          aria-valuemax="100"
        ></div>
      </div>
      <button
        type="button"
        class="
          position-absolute
          top-0
          start-0
          translate-middle
          btn btn-sm btn-primary
          rounded-pill
        "
        style="width: 4rem; height: 4rem"
      >
        <i class="bi bi-bag" style="font-size: 25px"></i>
      </button>
      <button
        type="button"
        class="
          position-absolute
          top-0
          start-50
          translate-middle
          btn btn-sm btn-danger
          rounded-pill
        "
        style="width: 4rem; height: 4rem"
      >
        <i class="bi bi-cart-check" style="font-size: 25px"></i>
      </button>
      <button
        type="button"
        class="
          position-absolute
          top-0
          start-100
          translate-middle
          btn btn-sm btn-secondary
          rounded-pill
        "
        style="width: 4rem; height: 4rem"
      >
        <i class="bi bi-credit-card-2-back" style="font-size: 25px"></i>
      </button>
    </div>
  </div>
  <div class="container mx-auto pt-3">
    <div class="row">
      <div class="col-4 text-start fs-5">商品</div>
      <div class="col-4 text-center fs-5">購物車</div>
      <div class="col-4 text-end fs-5">結帳</div>
    </div>
  </div>
  <div class="container">
    <div class="col-12 col-lg-8">
      <div class="cart-table d-flex container p-3 mt-5 text-white">
        <div class="col-3" >商品名稱</div>
        <div class="col-2">單價</div>
        <div class="col-3 ms-5">數量</div>
        <div class="col-2">金額</div>
        <div class="col-2">移除</div>
      </div>
    </div>
    <div class="row mb-5">
        <div class="col-12 col-lg-8 d-flex shadow p-1 mb-3 bg-body rounded" style="height:200px"  v-for="item in cart.carts" :key="item.id">
            <div class="col-3 ps-3 pt-3">
                <img class="pb-1 pic" :src="item.product.imageUrl" alt="" />
                <p class="">{{item.product.title}}</p>
            </div>
            <div class="col-2 ms-3 d-flex align-items-center">
                <p>{{ item.product.price}}元</p>
            </div>
            <div class="col-3 d-flex align-items-center">
                <div class="input-group input-group-sm" style="width:140px">
              <input
                min="1"
                type="number"
                class="form-control"
                v-model.number="item.qty"
                @change="updateCart(item)"
              />
              <div class="input-group-text">/ {{ item.product.unit }}元</div>
            </div>
            </div>
            <div class="col-2 d-flex align-items-center ms-4">
                {{ item.total}}元
            </div>
            <div class="col-2 d-flex align-items-center">
                <button type="button" class="btn btn-danger" style="margin-top:10px;" @click="delcart(item.id)">
                <i class="bi bi-trash3"></i>
                </button>
            </div>
        </div>
        <div class="col-12 col-lg-4">
            <div class="row">
            <div class="col-10 mx-auto shadow p-1 mb-3 bg-body rounded">
                <div class="row m-4">
                    <p class="col-8">小計</p>
                    <div class="col-4">{{total}}元</div>
                    <p class="col-8">運費</p>
                    <div class="col-4">免費</div>
                    <hr>
                    <p class="col-8">總計</p>
                    <div class="col-4">{{total}}元</div>
                    <router-link to="/user/order" class="btn btn-warning">結帳</router-link>
                </div>
            </div>
        </div>
        </div>
    </div>
  </div>
  <Footer></Footer>
</template>

<style>
.cart-table {
  background-color: #386150;
  border-radius: 10px;
}
.cart-list {
  border-radius: 5px;
}
.pic {
  display: flex;
  align-items: center;
  width: 120px;
  height: 120px;
}
@media (max-width: 500px) {
  .pic {
    width: 90px;
    height: 90px;
    margin: 0;
  }
}
</style>

<script>
import Nav from '@/components/NavUser.vue'
import Footer from '@/components/FooterView.vue'
import { mapState, mapActions } from 'pinia'
import cart from '@/stores/cart'
import statusStore from '@/stores/statusStore'
export default {
  components: {
    Nav,
    Footer
  },
  computed: {
    ...mapState(cart, ['cart', 'total']),
    ...mapState(statusStore, ['isLoading'])
  },
  methods: {
    ...mapActions(cart, ['addToCart', 'getCart', 'delcart', 'updateCart'])
  },
  created () {
    this.getCart()
  }
}

</script>
