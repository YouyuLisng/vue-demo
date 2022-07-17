<template class="position-relative">
<LoadingView :active="isLoading"></LoadingView>
  <Nav></Nav>
  <div class="banner">
    <div class="position-absolute top-50 start-50 translate-middle">
      <h3
        class="
          text-white text-center
          lh-base
          productTitle
          animate__animated animate__fadeInDown animate__delay-1s
        "
      >
        質感與美感都兼備的家具 <br />
        就在這裡！
      </h3>
    </div>
  </div>
  <section>
    <div class="container">
       <a
      class=" position-absolute position-fixed shopping"
      @click.prevent="showOffcanvasMenu()"
      >
     <img src="../images/shopping-cart-01.svg" style="width:40px; height:40px;" alt="">
       </a>
    <div
    class="offcanvas offcanvas-end"
    :class="showMenu ? 'show' : ''"
    tabindex="-1"
    :style="{ visibility: showMenu ? 'visible' : 'hidden' }"
  >
    <div class="offcanvas-header" style="margin-top:10px;">
      <h5 class="offcanvas-title">購物清單</h5>
      <button
        type="button"
        class="btn-close text-reset"
        @click.prevent="showOffcanvasMenu()"
      ></button>
    </div>
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
           <router-link type="button" class="btn btn-warning mb-1" to="/user/order">結帳</router-link>
        </div>
      </div>
    </div>
    </div>
    </div>
    <div class="container mb-5">
      <div
        class="
          title
          text-center
          animate__animated animate__fadeInDown animate__delay-0.5s
          mb-4
        "
      >
        <h3 class="">商品列表</h3>
        <div class="line mx-auto"></div>
      </div>
      <!-- <div class="mx-auto text-center">
        <ul class="list p-0">
          <li class="active">全部家俱</li>
          <li class="active">沙發</li>
          <li class="active">椅子</li>
          <li class="active">桌子</li>
        </ul>
      </div> -->
      <div class="row">
        <div
          class="col-xl-3 col-lg-4 col-sm-6 px-xl-3 px-2 gy-5"
          v-for="item in sortproducts"
          :key="item.id"
        >
          <div class="productbox">
            <div class="position-relative">
              <a href="" @click.prevent="getProduct(item.id)">
                <div
                  class="salepic chiar position-relative"
                  :style="{ backgroundImage: `url(${item.imageUrl})` }"
                ></div>
              </a>
              <div class="p-2">
                <div class="text-secondary fs-4 text-center pb-3">
                  {{ item.title }}
                </div>
                <p v-if="!item.price">{{ item.origin_price }}</p>
                <del style="color: #d9794d; font-size: 1rem" v-if="item.price"
                  >原價 {{ item.origin_price }} 元</del
                >
                <div class="d-flex justify-content-between">
                  <div style="color: #d9794d; font-size: 1.25rem">
                    NT${{ item.price }}
                  </div>
                </div>
                <div class="d-flex justify-content-between pt-3">
                  <button
                    type="button"
                    @click="getProduct(item.id)"
                    class="btn btn-warning"
                  >
                    商品資訊
                  </button>
                  <button
                    type="button"
                    class="btn btn-outline-warning"
                    @click="addToCart(item.id)"
                    :disabled="this.status.loadingitem === item.id"
                  >
                    <div
                      v-if="this.status.loadingitem === item.id"
                      class="spinner-border text-danger spinner-border-sm"
                      role="status"
                    >
                      <span class="visually-hidden">Loading...</span>
                    </div>
                    <i class="bi bi-cart-plus-fill"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <From></From>
  <Footer></Footer>
</template>

<style>
.banner {
  margin-top: 56px;
  background-image: url(../images/pic/banner/spacejoy-9M66C_w_ToM-unsplash.jpg);
  background-position: center center;
  background-size: cover;
  height: 400px;
  position: relative;
}
.title h3 {
  margin-top: 1em;
  font-family: Marcellus SC, serif;
}
.line {
  width: 130px;
  height: 5px;
  background-color: darkgoldenrod;
}
.chiar {
  background-image: url(../images/hutomo-abrianto-Q_fZcn8vlWY-unsplash.jpg);
  background-position: center center;
  background-size: cover;
  width: 100%;
  height: 250px;
  cursor: pointer;
  transform: scale(1, 1);
  transition: all 1s ease-out;
}
.productbox {
  box-shadow: 0 0 5px rgb(0 0 0 / 20%);
}
.productTitle {
  padding: 1em;
  background-color: rgb(59, 142, 165, 0.5);
  opacity: 0.8;
}
.list {
  list-style-type: none;
}
.list li {
  border-right: 2px solid #000;
  font-size: 20px;
  display: inline-block;
  cursor: pointer;
  padding-right: 1em;
  padding-left: 1em;
}
.shopping{
  border-radius: 50%;
  padding: 1em;
  border: 3px solid #A9A9A9;
  background-color: #A9A9A9;
  position: fixed;
  z-index: 10;
  bottom: 50px;
  right: 30px;
  cursor: pointer;
}
.shopping:hover{
  background-color: #b4d4ee;
}
.cart img{
  width: 30%;
  height: 30%;
}
</style>
<script>
import 'animate.css'
import Nav from '@/components/NavUser.vue'
import From from '@/components/FromView.vue'
import Footer from '@/components/FooterView.vue'
import { mapState, mapActions } from 'pinia'
import productList from '@/stores/productsList'
import statusStore from '@/stores/statusStore'
import cart from '@/stores/cart'
export default {
  data () {
    return {
      showMenu: false,
      status: {
        loadingitem: ''
      }
    }
  },
  inject: ['emitter'],
  components: {
    Nav,
    From,
    Footer
  },
  computed: {
    ...mapState(productList, ['sortproducts']),
    ...mapState(statusStore, ['isLoading']),
    ...mapState(cart, ['cart', 'total'])
  },
  methods: {
    ...mapActions(productList, ['getProducts']),
    ...mapActions(cart, ['addToCart', 'getCart', 'delcart', 'updateCart']),
    showOffcanvasMenu () {
      this.showMenu ? this.showMenu = false : this.showMenu = true
    },
    getProduct (id) {
      this.$router.push(`/user/product/${id}`)
    }
  },
  created () {
    this.getProducts()
    this.getCart()
  }
}
</script>
