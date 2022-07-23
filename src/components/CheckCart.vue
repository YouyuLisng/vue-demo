<template>
<LoadingView :active="isLoading"></LoadingView>
  <div class="cart-table d-flex container p-3 mt-5 text-white">
    <div class="col-3" style="flex-basis: 30%">商品名稱</div>
    <div class="col-1" style="flex-basis: 20%">單價</div>
    <div class="col-1" style="flex-basis: 20%">數量</div>
    <div class="col-3" style="flex-basis: 15%">金額</div>
    <div class="col-3" style="flex-basis: 15% ">移除</div>
  </div>
  <div class="container mt-5 cart-list d-flex mb-5 shadow p-1 mb-3 bg-body rounded" v-for="item in cart.carts" :key="item.id">
    <div class="col-3 d-flex align-items-center" style="flex-basis: 30%">
        <img class="me-5 pic" :src="item.product.imageUrl" alt="" />
        <span class="d-none d-md-block">{{item.product.title}}</span>
    </div>
    <div class="col-1 d-flex align-items-center text" style="flex-basis: 20%">
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
  <div class="row flex-column-reverse flex-md-row mt-5">
    <div class="col-md-6">
        <OrderInfo></OrderInfo>
    </div>
    <div class="col-md-6 mt-5 pt-5 cartinfo">
        <div class="row">
            <div class="col-10 mx-auto shadow p-1 mb-3 bg-body rounded">
                <div class="row m-5">
                    <p class="col-9">小計</p>
                    <div class="col-3">{{total}}</div>
                    <p class="col-9">運費</p>
                    <div class="col-3">免費</div>
                    <hr>
                    <p class="col-9">總計</p>
                    <div class="col-3">{{total}}</div>
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
.cart-list{
    border-radius: 5px;
}
.pic{
    display: flex;
    align-items: center;
    max-width: 150px;
    height: 150px;
}
@media(max-width:500px){
    .pic{
        width: 90px;
        height: 90px;
        margin: 0;
    }
    .cartinfo{
      padding: 0;
    }
}
</style>

<script>
import Footer from '@/components/FooterView.vue'
import OrderInfo from '@/components/OrderInfo.vue'
import { mapState, mapActions } from 'pinia'
import statusStore from '@/stores/statusStore'
import cart from '@/stores/cart'
export default {
  data () {
    return {
      // cart: {},
      // total: null
    }
  },
  components: {
    OrderInfo,
    Footer
  },
  computed: {
    ...mapState(statusStore, ['isLoading']),
    ...mapState(cart, ['cart', 'total'])
  },
  methods: {
    ...mapActions(cart, ['getCart', 'delcart'])
    // getCart () {
    //   const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`
    //   status.isLoading = true
    //   axios.get(url).then((response) => {
    //     this.cart = response.data.data
    //     status.isLoading = false
    //     console.log(this.cart)
    //     this.total = this.cart.total
    //   })
    // },
    // delcart (id) {
    //   //   status.cartLodaingItem = id
    //   const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart/${id}`
    //   status.isLoading = true
    //   axios.delete(url).then((response) => {
    //     console.log(response)
    //     status.pushMessage({ title: '移除購物車品項', content: response.data.message })
    //     // status.cartLodaingItem = ''
    //     this.getCart()
    //     status.isLoading = false
    //   })
    // }
  },
  created () {
    this.getCart()
  }
}
</script>
