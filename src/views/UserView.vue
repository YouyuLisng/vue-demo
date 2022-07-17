<template>
<div class="container-fluid">
  <Toast></Toast>
  <router-view />
</div>
<LoadingView :active="isLoading"></LoadingView>
 <Nav></Nav>
 <Banner></Banner>
 <Section></Section>
 <Lottery></Lottery>
 <Sale></Sale>
 <From></From>
 <Footer></Footer>
  <router-view />
</template>

<script>
import Toast from '@/components/ToastList.vue'
import emitter from '@/methods/emitter'
import Nav from '@/components/NavUser.vue'
import Banner from '@/components/BannerView.vue'
import Section from '@/components/SectionView.vue'
import Lottery from '@/components/LotteryView.vue'
import Sale from '@/components/SaleView.vue'
import From from '@/components/FromView.vue'
import Footer from '@/components/FooterView.vue'
export default {
  data () {
    return {
      isLoading: false
    }
  },
  provide () {
    return {
      emitter
    }
  },
  components: {
    Banner,
    Nav,
    Section,
    Lottery,
    Sale,
    From,
    Footer,
    Toast
  }
}
</script>
