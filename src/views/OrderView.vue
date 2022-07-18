<template>
<div class="text-end">
        <button class="btn btn-primary" type="button" @click="openorderModal(true)">
            開啟Model
        </button>
    </div>
  <table class="table mt-4">
  <thead>
    <tr>
      <th width="120">購買時間</th>
      <th>Email</th>
      <th width="120">購買款項</th>
      <th width="120">應付金額</th>
      <th width="100">是否付款</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="item in orderproduct" :key="item.id">
      <td>{{$filters.date(item.create_at)}}</td>
      <td>{{item.user.email}}</td>
      <td class="text-right">
        {{item.products.product}}
      </td>
      <td class="text-right">
        {{item.total}}元
      </td>
      <td>
        <span class="text-success" v-if="item.is_paid">已付款</span>
        <span class="text-muted" v-else>未付款</span>
      </td>
    </tr>
  </tbody>
</table>
<ordermodal ref="ordermodal"></ordermodal>
</template>

<script>
import ordermodal from '@/components/OderModal.vue'
export default {
  data () {
    return {
      creattime: null,
      orderproduct: [],
      pagination: {},
      tempProduct: {},
      isLoading: false
    }
  },
  components: {
    ordermodal
  },
  inject: ['emitter'],
  methods: {
    getorder () {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/orders`
      this.$http.get(api)
        .then((res) => {
          this.isLoading = false
          if (res.data.success) {
            console.log(res.data.orders[0])
            this.orderproduct = res.data.orders
            this.pagination = res.data.pagination
            this.creattime = res.data.creat_at
          }
        })
    },
    openorderModal (item) {
      this.tempProduct = { ...item }
      const orderComponent = this.$refs.ordermodal
      orderComponent.showModal()
    },
    tiem () {
    }
  },
  created () {
    this.getorder()
  }
}
</script>
