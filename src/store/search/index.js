import { reqGetSearchInfo } from '@/api/index'
const state = {
  searchInfo: {}
}
const mutations = {
  GETSEARCHINFO(state, value) {
    state.searchInfo = value
  }
}
const actions = {
  async getSearchInfo({ commit }, params = {}) {
    //dispatch时，传入params,至少是一个空对象
    let result = await reqGetSearchInfo(params)
    if (result.code === 200) {
      commit('GETSEARCHINFO', result.data)
    }
  }
}
const getters = {
  goodsList(ownState) {
    //假如数据获取失败，至少应该返回一个[]
    return ownState.searchInfo.goodsList || []
  },
  trademarkList(ownState) {
    return ownState.searchInfo.trademarkList || []
  },
  attrsList(ownState) {
    return ownState.searchInfo.attrsList || []
  }
}
export default {
  state,
  mutations,
  actions,
  getters
}
