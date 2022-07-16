<template>
  <LoadingView :active="isLoading"></LoadingView>
  <Nav></Nav>
  <div class="container-fuild position-relative">
    <div class="img-fluid productbanner">
       <div class="position-absolute top-50 start-50 translate-middle">
      <h3
        class="
          text-white text-center
          lh-base
          productTitle
          animate__animated animate__fadeInDown animate__delay-1s
        "
      >
        商品資訊
      </h3>
    </div>
    </div>
  </div>
  <div class="container">
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb mt-3">
        <li class="breadcrumb-item">
          <router-link to="/user/frontpage" style="color:#846267;text-decoration: none;">首頁</router-link>
        </li>
        <li class="breadcrumb-item">
          <router-link to="/user/cart" style="color:#846267;text-decoration: none;">家具列表</router-link>
        </li>
        <li class="breadcrumb-item active" aria-current="page">
          {{ product.title }}
        </li>
      </ol>
    </nav>
    <div class="row mt-5">
      <div class="col-md-7 mb-5">
        <div class="bg product-pic">
          <img
            :src="product.imageUrl"
            alt=""
            class="img-fluid mb-3 d-flex mx-auto p-4"
          />
        </div>
      </div>
      <div class="col-md-5 mb-5 col-11 mx-auto">
        <h2 class="text-center pb-3">{{ product.title }}</h2>
        <div class="fs-5">{{ product.content }}</div>
        <div class="position-relative">
          <hr/>
          <div>{{ product.description }}</div>
          <hr>
          <div style="text-secondary" class="h5 pb-3" v-if="!product.price">
            {{ product.origin_price }} 元
          </div>
          <del style="text-secondary" class="h6 pb-3" v-if="product.price"
            >原價 {{ product.origin_price }} 元</del
          >
          <div style="color: #d9794d" class="h5" v-if="product.price">
            現在只要 {{ product.price }} 元
          </div>
          <button
            type="button"
            class="btn btn-outline-danger position-absolute bottom-0 end-0"
            @click="addToCart(product.id)"
            :disabled="this.status.loadingitem === product.id"
          >
           <div v-if="this.status.loadingitem === product.id" class="spinner-border text-warning spinner-border-sm" role="status">
            <span class="visually-hidden">Loading...</span>
           </div>
            加到購物車
          </button>
        </div>
      </div>
    </div>
  </div>
  <From></From>
  <Footer></Footer>
</template>

<style>
.productbanner {
  background-image: url(../images/roberto-nickson-bwIqQ5qQhXs-unsplash.jpg);
  background-position: center;
  background-size: cover;
  height: 400px;
}
.product-pic{
  background-color: rgb(170,192,170,0.4);
}
.product-pic img{
  max-height: 450px;
  position: relative;
}
.productTitle {
  padding: 1em;
  background-color: rgb(59, 142, 165, 0.5);
  opacity: 0.8;
}
</style>

<script>
import Nav from '@/components/NavUser.vue'
import From from '@/components/FromView.vue'
import Footer from '@/components/FooterView.vue'
export default {
  data () {
    return {
      isLoading: false,
      product: {},
      id: '',
      status: {
        loadingitem: ''
      }
    }
  },
  components: {
    Nav,
    From,
    Footer
  },
  methods: {
    getProduct () {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/product/${this.id}`
      this.isLoading = true
      this.$http.get(api).then((response) => {
        console.log(response.data)
        this.isLoading = false
        if (response.data.success) {
          this.product = response.data.product
        }
      })
    },
    addToCart (id) {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`
      this.status.loadingitem = id
      this.isLoading = true
      const cart = {
        product_id: id,
        qty: 1
      }
      this.$http.post(url, { data: cart })
        .then((res) => {
          this.isLoading = false
          this.status.loadingitem = ''
          console.log(res, '已加入購物車')
          console.log(cart)
          location.reload()
        })
      console.log(id)
    }
  },
  created () {
    this.id = this.$route.params.productId
    this.getProduct()
  }
}

</script>
