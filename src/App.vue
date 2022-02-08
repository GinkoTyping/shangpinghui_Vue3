<template>
  <Header></Header>
  <router-view></router-view>
  <Footer></Footer>
</template>

<script>
import Header from './components/Header/index.vue'
import Footer from './components/Footer/index.vue'
import { useStore } from 'vuex'
import { onMounted } from 'vue'

export default {
  name: 'App',
  components: {
    Header,
    Footer
  },
  setup() {
    //动态获取数据
    const store = useStore()
    onMounted(() => {
      store.dispatch('categoryList')
      store.dispatch('getBannerList')
      store.dispatch('getFloorList')
    })
  }
}
</script>

<style></style>
