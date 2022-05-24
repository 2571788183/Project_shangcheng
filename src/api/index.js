//api统一管理
import requests from "./ajax";
import mockRequests from './mockAjax';
//三级联动接口
//  /api/product/getBaseCategoryList  get 无参数

//发请求:axios发请求返回结果是Promise对象
export const reqgetCategoryList = () => requests.get(`/product/getBaseCategoryList`);

//获取banner首页轮播图接口
export const reqGetBannerList = () => mockRequests.get('/banner');

//获取floor的数据
export const reqFloorList = () => mockRequests.get('/floor');

//获取搜索模块数据 地址：api/list 方式： post  需要带参数
//
export const reqGetSearchInfo = (params) => requests({ url: "/list", method: "post", data: params })
