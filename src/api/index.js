import requests from './request'
import mockRequests from './mockAjax'
//对外暴露一个函数，外部掉用该函数时，就向服务器发起ajax请求。
export const reqCategoryList = () => {
  //axios发请求返回结果为 promise 对象
  return requests({ url: '/product/getBaseCategoryList', method: 'get' })
}

//获取banner轮播图数据
export const reqGetBannerList = () => {
  return mockRequests.get('/banner')
}

//获取floor数据
export const reqGetFloorList = () => {
  return mockRequests.get('/floor')
}

//搜索框获取数据
//param至少是一个空对象，否则请求会失败
export const reqGetSearchInfo = (params) => {
  return requests({url:'/list',method:'post',data:params})
}