import request from "./index";

// 获取首页数据 banner
export const getHomeInfoData = () => {
  return request.get("/homeinfo", {});
};

// 获取推荐数据
export const getRecommendData = () => {
  return request.get("/recommend", {});
};
