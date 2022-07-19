import { defineStore } from 'pinia'
import axios from 'axios'
import statusStore from '@/stores/statusStore'

const status = statusStore()
export default defineStore('cartStore', {
  state: () => ({
    cart: {},
    total: null,
    cartqty: null
  }),
  actions: {
    addToCart (id, qty = 1) {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`
      status.cartLodaingItem = id
      status.isLoading = false
      const cart = {
        product_id: id,
        qty
      }
      axios.post(url, { data: cart })
        .then((res) => {
          status.pushMessage({ title: '加入購物車' })
          status.cartLodaingItem = ''
          console.log(res)
          this.getCart()
        })
    },
    getCart () {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`
      status.isLoading = true
      axios.get(url).then((response) => {
        this.cart = response.data.data
        status.isLoading = false
        this.total = this.cart.total
        this.cartqty = this.cart.carts.length
        console.log(this.cartqty)
      })
    },
    updateCart (item) {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart/${item.id}`
      status.isLoading = true
      status.cartLodaingItem = item.id
      const cart = {
        product_id: item.product_id,
        qty: item.qty
      }
      axios.put(url, { data: cart }).then((res) => {
        console.log(res)
        this.getCart()
        status.pushMessage({ title: '更新購物車資訊', content: res.data.message })
        status.cartLodaingItem = ''
        status.isLoading = false
      })
    },
    delcart (id) {
      status.cartLodaingItem = id
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart/${id}`
      status.isLoading = true
      axios.delete(url).then((response) => {
        console.log(response)
        status.pushMessage({ title: '移除購物車品項', content: response.data.message })
        status.cartLodaingItem = ''
        this.getCart()
        status.isLoading = false
      })
    }
  }
})
