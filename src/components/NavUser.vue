<template>
  <div class="container-fuild">
    <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top nav mb-5">
      <div class="container">
        <router-link class="nav-link active logo" to="/">
        HOME Furniture
        </router-link>
        <!-- <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button> -->
        <button class="btn fs-4 d-lg-none" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasTop" aria-controls="offcanvasTop"><span class="navbar-toggler-icon"></span></button>

<div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasTop" aria-labelledby="offcanvasTopLabel">
  <div class="offcanvas-header">
    <h5 id="offcanvasTopLabel">
      <router-link class="nav-link active text-black logo" to="/">HOME Furniture</router-link>
    </h5>
    <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body d-lg-none">
    <ul class="navbar-nav ms-auto text-center">
            <li class="nav-item">
              <router-link class="nav-link active text-success" to="/user/cart"
                >商品</router-link
              >
            </li>
            <li class="nav-item">
               <router-link class="nav-link active text-success" to="/user/shopcart"
                >購物車</router-link
              >
            </li>
            <li class="nav-item me-2 ms-2">
              <a
                class="nav-link text-success" href="#"
                @click.prevent="openRegister(true)"
              >
                登入
              </a>
            </li>
          </ul>
  </div>
</div>
        <div class="collapse navbar-collapse d-none" id="navbarNav">
          <ul class="navbar-nav ms-auto text-center">
            <li class="nav-item">
              <router-link class="nav-link active text-success" to="/user/cart"
                >商品</router-link
              >
            </li>
            <li class="nav-item">
              <router-link class="nav-link active text-success" to="/user/shopcart"
                >購物車</router-link
              >
            </li>
            <li class="nav-item me-2 ms-2">
              <a
                class="nav-link text-success" href="#"
                @click.prevent="openRegister(true)"
              >
                登入
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
  <register ref="registermodal"></register>
</template>

<style>
.logo{
  color:#000;
  font-size: 20px;
  font-weight: 1000;
  font-family: Marcellus SC, serif;
}
</style>

<script>
import register from '@/components/RegisterView.vue'
export default {
  data () {
    return {
      showMenu: false,
      status: {
        loadingitem: ''
      },
      totalqty: ''
    }
  },
  components: {
    register
  },
  inject: ['emitter'],
  methods: {
    openRegister () {
      const registerComponent = this.$refs.registermodal
      registerComponent.showModal()
    }
  }
}
</script>
