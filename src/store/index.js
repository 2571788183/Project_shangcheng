import Vue from "vue";
import Vuex from "vuex";
//需要使用插件
Vue.use(Vuex);
// //state：仓库存储数据
// const state = {};
// //mutations:修改state数据的唯一手段
// const mutations = {};
// //actions:处理action，可以书写自己的业务逻辑，也可以异步处理数据
// const actions = {};
// //getters:理解为计算属性，用于简化参仓库数据，让组件获取仓库数据更加方便
// const getters = {};

//引入小仓库
import home from './home';
import search from './search';

//对外暴露store类的一个实例
export default new Vuex.Store({
  // state,
  // mutations,
  // actions,
  // getters

  //注册仓库模块
  modules: {
    home,
    search
  }
});