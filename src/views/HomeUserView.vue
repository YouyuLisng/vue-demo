<template>
<div class="container-fulid">
  <Toast></Toast>
  <router-view />
</div>
</template>

<script>
import Toast from '@/components/ToastList.vue'
import emitter from '@/methods/emitter'
export default {
  components: {
    Toast
  },
  provide () {
    return {
      emitter
    }
  }
}
</script>
