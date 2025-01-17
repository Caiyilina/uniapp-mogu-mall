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
  async ({ type = 0, page = 1 }) => {
    const res = await getGoodsData(type, page);

    console.log("类型", type, "页码", page);

    const newGoods = res.data.goods || [];
    return {
      goods: newGoods,
      type,
      page,
    };
  }
);
export const tabTypes = ["specific", "single"];
function getDefaultGoodsList() {
  const list = {};
  tabTypes.forEach((item) => {
    list[item] = {
      page: 1,
      list: [],
    };
  });

  return list;
}
const home = createSlice({
  name: "home",
  initialState: {
    bannerList: [],
    popularList: [],

    recommend: null,
    goodsList: getDefaultGoodsList(),
    currentTabName: tabTypes[0], //默认显示的tab
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
      console.log("setGoodsListAction", action.payload);

      state.goodsList = action.payload;
    },

    setCurrentTabNameAction(state, action) {
      //设置当前显示的tab
      const { payload = 0 } = action;
      state.currentTabName = tabTypes[payload];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchRecommendDataAction.fulfilled, (state, action) => {
        const { payload } = action;
        const { recommend, populars = [] } = payload;
        state.popularList = populars;
        state.recommend = recommend;
      })
      .addCase(fetchGoodsDataAction.fulfilled, (state, { payload }) => {
        const { type, page, goods } = payload;
        if (goods?.length == 0) return;
        if (page == 1) {
          state.goodsList[tabTypes[type]].list = goods;
          state.goodsList[tabTypes[type]].page = page;
          return;
        }
        state.goodsList[tabTypes[type]].list = [
          ...state.goodsList[tabTypes[type]].list,
          ...goods,
        ];
        state.goodsList[tabTypes[type]].page = page;
      });
  },
});

export const {
  setBannerListAction,
  setPopularListAction,
  setRecommendListAction,
  setGoodsListAction,
  setCurrentTabNameAction,
} = home.actions;
export default home.reducer;
