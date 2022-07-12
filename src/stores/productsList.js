import axios from 'axios'
import statusStore from '@/stores/statusStore'
import { defineStore } from 'pinia'
const status = statusStore()
export default defineStore('productsList', {
  state: () => ({
    products: []
  }),
  getters: {
    sortproducts: (state) => state.products.sort((a, b) => a.price - b.price)
  },
  actions: {
    getProducts () {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/products/all`
      status.isLoading = true
      axios.get(url).then((response) => {
        this.products = response.data.products
        status.isLoading = false
      })
    },
    showOffcanvasMenu () {
      this.showMenu ? (this.showMenu = false) : (this.showMenu = true)
    }
  }
})
