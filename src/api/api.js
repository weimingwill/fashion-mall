import { wxRequest } from '@/utils/wxRequest';

let env = "-test" //-dev 或者 -test
const apiMall = 'https://sujiefs.com/'

//微信的jscode换取sessionKey
const wxJsCode2Session = (params) => wxRequest(params, apiMall + "/api/wechat/jscode2session");

//用户是否绑定手机号
const getUserInfo = (params) => wxRequest(params, apiMall + '/api/userCenter/getUserInfo');


//商品接口
//首页发现商品接口
const getHomeDisvocerList = (params) => wxRequest(params, apiMall + '/api/mall/discoverList');
//查询广告列表
const getAdList = (params) => wxRequest(params, apiMall + '/api/adverts/list');
//广告商品列表
const getAdGoodsList = (params) => wxRequest(params, apiMall + '/api/home/hostGoodsList');

//一级分类
const getRootCategoryList = (params) => wxRequest(params, apiMall + '/api/mall/rootCtegoryList');
//二级三级分类
const getChildCategoryList = (params) => wxRequest(params, apiMall + '/api/mall/childGoodsCatetoryList');

export default {
  wxJsCode2Session,
  getUserInfo,
  getHomeDisvocerList,
  getAdList,
  getAdGoodsList,
  getRootCategoryList,
  getChildCategoryList,
}
