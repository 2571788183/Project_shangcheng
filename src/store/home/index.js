import { reqgetCategoryList, reqGetBannerList, reqFloorList } from "@/api";
//home模块的仓库
const state = {
  //state中的数据默认初始值不能乱写,仓库中的数据格式要和服务器返回的数据
  categoryList: [],
  //轮播图数据
  bannerList: [],
  //floor组件数据
  floorList: []
};

const mutations = {
  GETCATEGORYLIST(state, categoryList) {
    state.categoryList = categoryList;
  },
  GETBANNERLIST(state, bannerList) {
    state.bannerList = bannerList;
  },
  GETFLOORLIST(state, floorList) {
    state.floorList = floorList;
  }
};
const actions = {
  //通过api里面的接口函数调用，向服务器发送请求，获取服务器的数据
  async getCategoryList({ commit }) {
    let result = await reqgetCategoryList();
    if (result.code == 200) {
      commit("GETCATEGORYLIST", result.data);
    }
  },
  //获取首页轮播图的数据
  async getBannerList({ commit }) {
    let result = await reqGetBannerList();
    if (result.code == 200) {
      commit('GETBANNERLIST', result.data);
    }
  },
  //获取floor数据
  async getFloorList({ commit }) {
    let result = await reqFloorList();
    if (result.code == 200) {
      //提交mutation
      commit('GETFLOORLIST', result.data);
    }
  }
};
const getters = {};

export default {
  state,
  mutations,
  actions,
  getters
}