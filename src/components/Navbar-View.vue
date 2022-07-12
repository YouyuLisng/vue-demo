<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container-fluid">
    <router-link class="nav-link active navbar-brand" to="/User">泡芙專家</router-link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <router-link class="nav-link active" to="/dashboard/products">販售商品</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link active" to="/dashboard/order">訂單</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link active" to="/dashboard/temp">優惠卷</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link active" to="/login">登出</router-link>
        </li>
      </ul>
    </div>
  </div>
</nav>
</template>

<script>
export default {
  methods: {
    logout () {
      const api = `${process.env.VUE_APP_API}logout`
      this.$http.post(api, this.user)
        .then((res) => {
          if (res.data.success) {
            console.log(res)
            this.$router.push('/login')
          }
        })
    }
  }
}
</script>
