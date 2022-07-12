<template>
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon" @click="showOffcanvasMenu"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav" :class="showMenu ? 'show' : ''" tabindex="-1" :style="{ visibility: showMenu ? 'visible' : 'hidden' }">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Features</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Pricing</a>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled">Disabled</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
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
