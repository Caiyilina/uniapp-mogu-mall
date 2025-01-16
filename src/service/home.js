import request from "./index";

// 获取首页数据 banner
export const getHomeInfoData = () => {
  return request.get("/homeinfo", {});
};

// 获取推荐数据
export const getRecommendData = () => {
  return request.get("/recommend", {});
};
// 获取商品列表
export const getGoodsData = (type = 0, page = 1) => {
  return request.post("/goods", {
    type, // 类型 0-精选 1-单品
    page, // 页码
  });
};
