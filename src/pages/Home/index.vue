<template>
  <TypeNav />
  <ListContainer />
  <Recommend />
  <Rank />
  <Like />
  <Floor v-for="f1 in floorList" :key="f1.id" :f1="f1"/>
  <Brand />
</template>

<script>
import ListContainer from './ListContainer/index.vue'
import Recommend from './Recommend/index.vue'
import Rank from './Rank/index.vue'
import Like from './Like/index.vue'
import Floor from './Floor/index.vue'
import Brand from './Brand/index.vue'
import { mapState } from 'vuex'
export default {
  name: 'Home',
  components: { ListContainer, Recommend, Rank, Like, Floor, Brand },
  computed:{...mapState({floorList:state => state.home.floorList})}
}
</script>

<style></style>
