//api统一管理
import requests from "./ajax";
import mockRequests from './mockAjax';
//三级联动接口
//  /api/product/getBaseCategoryList  get 无参数

//发请求:axios发请求返回结果是Promise对象
export const reqgetCategoryList = () => requests.get(`/product/getBaseCategoryList`);

//获取banner首页轮播图接口
export const reqGetBannerList = () => mockRequests.get('/banner');