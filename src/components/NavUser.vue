<template>
  <div class="container-fuild" style="margin-bottom: 58px">
    <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
      <div class="container">
        <router-link class="nav-link active" to="/">
        HOME Furniture
        </router-link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ms-auto text-center">
            <li class="nav-item">
              <router-link class="nav-link active text-success" to="/user/cart"
                >商品</router-link
              >
            </li>
            <li class="nav-item">
              <a class="nav-link text-success" href="#">優惠卷</a>
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
