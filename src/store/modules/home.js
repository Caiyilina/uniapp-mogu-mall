import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  getGoodsData,
  getHomeInfoData,
  getRecommendData,
} from "@/service/home";

// 异步action
export const fetchHomeInfoAction = createAsyncThunk(
  "home/fetchHomeInfo",
  async (_, { dispatch }) => {
    const res = await getHomeInfoData();

    const bannerList = res.data.adsInfo.slide_ads.config.slide;
    dispatch(setBannerListAction(bannerList));
  }
);
export const fetchRecommendDataAction = createAsyncThunk(
  "home/fetchRecommendData",
  async () => {
    const res = await getRecommendData();

    return res.data;
  }
);
// 获取商品列表
export const fetchGoodsDataAction = createAsyncThunk(
  "home/fetchGoodsData",
  async ({ type = 0, page = 1 }, { dispatch, getState }) => {
    const res = await getGoodsData(type, page);
    const goods = res.data.goods || [];
    console.log("商品列表", goods);
    const goodsList = getState().home.goodsList;
    // 判断是否第一页
    if (page === 1) {
      dispatch(setGoodsListAction(goods));
      return;
    } else {
      goodsList.push(...goods);

      dispatch(setGoodsListAction(goodsList));
    }

    return res.data;
  }
);

const home = createSlice({
  name: "home",
  initialState: {
    bannerList: [],
    popularList: [],

    recommend: null,
    goodsList: [],
  },
  reducers: {
    setBannerListAction(state, action) {
      state.bannerList = action.payload;
    },

    setPopularListAction(state, action) {
      state.popularList = action.payload;
    },

    setRecommendListAction(state, action) {
      state.recommend = action.payload;
    },
    setGoodsListAction(state, action) {
      state.goodsList = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchRecommendDataAction.fulfilled, (state, action) => {
      const { payload } = action;
      const { recommend, populars = [] } = payload;
      state.popularList = populars;
      state.recommend = recommend;
    });
  },
});

export const {
  setBannerListAction,
  setPopularListAction,
  setRecommendListAction,
  setGoodsListAction,
} = home.actions;
export default home.reducer;
