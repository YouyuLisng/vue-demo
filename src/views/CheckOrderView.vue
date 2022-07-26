<template style="overflow: unset;">
<Nav></Nav>
<Shop></Shop>
<CartList></CartList>
</template>

<script>
import Nav from '@/components/NavUser.vue'
import Shop from '@/components/ShopView.vue'
import CartList from '@/components/CheckCart.vue'
export default {
  data () {
    return {
    }
  },
  components: {
    Nav,
    Shop,
    CartList
  }
}
</script>
