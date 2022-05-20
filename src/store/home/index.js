import { reqgetCategoryList } from "@/api";
//home模块的仓库
const state = {
  //state中的数据默认初始值不能乱写
  categoryList: [],
};

const mutations = {
  GETCATEGORYLIST(state, categoryList) {
    state.categoryList = categoryList;
  }
};
const actions = {
  //通过api里面的接口函数调用，向服务器发送请求，获取服务器的数据
  async getCategoryList({ commit }) {
    let result = await reqgetCategoryList();
    if (result.code == 200) {
      commit("GETCATEGORYLIST", result.data);
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