import { defineStore } from 'pinia'
export default defineStore('statusStores', {
  state: () => ({
    isLoading: false,
    cartLodaingItem: '',
    messages: []
  }),
  actions: {
    pushMessage (data) {
      const { title, content, style = 'success' } = data
      this.messages.push({ style, title, content })
    }
  }
})
