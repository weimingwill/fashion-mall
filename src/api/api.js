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
//查询商品详情信息
const getGoodsDetail = (params) => wxRequest(params, apiMall + '/api/mall/goods');
//商品收藏
const favoriteGoods = (params) => wxRequest(params, apiMall + '/api/mall/goodsFavorite/add');
//商品收藏删除
const unfavoriteGoods = (params) => wxRequest(params, apiMall + '/api/mall/goodsFavorite/delete');
//商品是否已收藏
const isGoodsFavorite = (params) => wxRequest(params, apiMall + '/api/mall/goodsFavorite/goodsIsFavorite');

// 购物车
// 加入购物车
const addToCart = (params) => wxRequest(params, apiMall + '/api/mall/goodsCart/add');

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
  getGoodsDetail,
  favoriteGoods,
  unfavoriteGoods,
  isGoodsFavorite,
  getRootCategoryList,
  getChildCategoryList,
  addToCart,
}
