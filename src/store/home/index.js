import { reqCategoryList,reqGetBannerList,reqGetFloorList } from '@/api/index'
const state = {
  categoryList: [],
  bannerList: [],
  floorList: []

}
const mutations = {
  CATEGORYLIST(state, value) {
    value.splice(16)
    state.categoryList = value
  },
  GETBANNERLIST(state, value) {
    state.bannerList = value
  },
  GETFLOORLIST(state, value) {
    state.floorList = value
  }
}
const actions = {
  ///async await 获取axios返回到promise对象中的值
  async categoryList({ commit }) {
    let result = await reqCategoryList()
    if (result.code === 200) {
      commit('CATEGORYLIST', result.data)
    }
  },
  async getBannerList({ commit }) {
    let result = await reqGetBannerList()
    if (result.code === 200) {
      commit('GETBANNERLIST', result.data)
    }
  },
  async getFloorList({ commit }) {
    let result = await reqGetFloorList()
    if (result.code === 200) {
      commit('GETFLOORLIST', result.data)
    }
  }

}
const getters = {}
export default {
  state,
  mutations,
  actions,
  getters
}
