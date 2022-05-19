import { reqCategoryList } from "@/api";
//home模块的仓库
const state = {
  //state中的数据默认初始值不能乱写
  categoryList: [],
};
const actions = {
  //通过api里面的接口函数调用，向服务器发送请求，获取服务器的数据
  async categoryList({ commit }) {
    let result = await reqCategoryList();
    if (result.code == 200) {
      commit("CATEGORYLIST", result.data);
    }
  }
};
const mutations = {
  CATEGORYLIST(state, categoryList) {
    state.categoryList = categoryList;
  }
};
const getters = {};

export default {
  state,
  mutations,
  actions,
  getters
}