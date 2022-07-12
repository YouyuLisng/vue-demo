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
      <th width="200">編輯</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="item in orderproduct" :key="item.id">
      <td>{{item.paid_date}}</td>
      <td>{{item.Email}}</td>
      <td class="text-right">
        {{item.products}}
      </td>
      <td class="text-right">
        {{item.total}}
      </td>
      <td>
        <span class="text-success" v-if="item.is_enabled">是否付款</span>
        <span class="text-muted" v-else>未啟用</span>
      </td>
      <td>
        <div class="btn-group">
          <button class="btn btn-outline-primary btn-sm" @click="openorderModal">檢視</button>
          <button class="btn btn-outline-danger btn-sm">刪除</button>
        </div>
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
            console.log(res.data)
            this.products = res.data.products
            this.pagination = res.data.pagination
          }
        })
    },
    openorderModal (item) {
      this.tempProduct = { ...item }
      const orderComponent = this.$refs.ordermodal
      orderComponent.showModal()
    }
  },
  created () {
    this.getorder()
  }
}
</script>
