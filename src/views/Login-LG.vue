<template>
<Toast></Toast>
<div class="container">
</div>
  <div class="container mt-5">
    <form class="row justify-content-center" @submit.prevent="signIn">
      <div class="col-md-6">
        <h1 class="h3 mb-3 font-weight-normal">請先登入</h1>
        <div class="mb-2">
          <label for="inputEmail" class="sr-only">請輸入電子郵件</label>
          <input
            type="email"
            id="inputEmail"
            class="form-control"
            placeholder="Email address"
            required
            autofocus
            v-model="user.username"
          />
        </div>
        <div class="mb-2">
          <label for="inputPassword" class="sr-only">請輸入密碼</label>
          <input
            type="password"
            id="inputPassword"
            class="form-control"
            placeholder="Password"
            required
            v-model="user.password"
          />
        </div>
        <div class="text-end mt-4">
          <button class="btn btn-lg btn-primary btn-block" type="submit">
            登入
          </button>
        </div>
      </div>
    </form>
    <p>a0979534311@gmail.com</p>
    <p>a24751243</p>
  </div>
</template>

<script>
import emitter from '@/methods/emitter'
import Toast from '@/components/ToastList.vue'
export default {
  data () {
    return {
      user: {
        username: '',
        password: ''
      }
    }
  },
  components: {
    Toast
  },
  provide () {
    return {
      emitter
    }
  },
  inject: ['emitter'],
  methods: {
    signIn () {
      const api = `${process.env.VUE_APP_API}admin/signin`
      this.$http.post(api, this.user)
        .then((res) => {
          this.isLoading = true
          if (res.data.success) {
            const { token, expired } = res.data
            document.cookie = `testToken = ${token}; expired = ${new Date(expired)}`
            console.log(res)
            this.$router.push('/dashboard/products')
          }
        })
    }
  }
}
</script>
