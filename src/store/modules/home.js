import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getHomeInfoData, getRecommendData } from "../../service/home";

// 异步action
export const fetchHomeInfoAction = createAsyncThunk(
  "home/fetchHomeInfo",
  async (_, { dispatch }) => {
    const res = await getHomeInfoData();

    const bannerList = res.data.adsInfo.slide_ads.config.slide;
    dispatch(setBannerList(bannerList));
  }
);
export const fetchRecommendDataAction = createAsyncThunk(
  "home/fetchRecommendData",
  async () => {
    const res = await getRecommendData();

    return res.data;
  }
);

const home = createSlice({
  name: "home",
  initialState: {
    bannerList: [],
    popularList: [],

    recommend: null,
  },
  reducers: {
    setBannerList(state, action) {
      state.bannerList = action.payload;
    },

    setPopularList(state, action) {
      state.popularList = action.payload;
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

export const { setBannerList, setRecommendList } = home.actions;
export default home.reducer;
