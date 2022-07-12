<template>
<Navbar></Navbar>
<div class="container-fluid mt-4">
  <Toast></Toast>
  <router-view />
</div>
</template>

<script>
import Navbar from '../components/Navbar-View.vue'
import emitter from '@/methods/emitter'
import Toast from '@/components/ToastList.vue'

export default {
  components: {
    Navbar,
    Toast
  },
  provide () {
    return {
      emitter
    }
  },
  created () {
    const token = document.cookie.replace(/(?:(?:^|.*;\s*)testToken\s*=\s*([^;]*).*$)|^.*$/, '$1')
    console.log(token)
    this.$http.defaults.headers.common.Authorization = token
    const api = `${process.env.VUE_APP_API}api/user/check`
    this.$http.post(api, this.user)
      .then((res) => {
        if (!res.data.success) {
          this.$router.push('/login')
        }
      })
  }
}
</script>
