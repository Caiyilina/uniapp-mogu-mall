import React, { memo } from "react";

import { useDispatch, useSelector } from "react-redux";
import { useLoad } from "@tarojs/taro";
import { View } from "@tarojs/components";

import {
  fetchHomeInfoAction,
  fetchRecommendDataAction,
  fetchGoodsDataAction,
} from "@/store/modules/home";

import TabControl from "@/components/tab-control";
import styles from "./index.module.scss";
import HomeSearch from "./cpns/home-search";
import HomeBanner from "./cpns/home-banner";
import HomePopular from "./cpns/home-popular";
import HomeRecommend from "./cpns/home-recommend";

const Home = memo(() => {
  const dispatch = useDispatch();
  const { bannerList, popularList, recommend } = useSelector((state) => {
    return {
      bannerList: state.home.bannerList,
      popularList: state.home.popularList,
      recommend: state.home.recommend,
    };
  });
  useLoad(() => {
    console.log("页面加载");
    dispatch(fetchHomeInfoAction());
    dispatch(fetchRecommendDataAction());
    dispatch(fetchGoodsDataAction({ type: 0, page: 1 }));
  });
  const handleTabClick = (index) => {
    console.log(index);
  };
  return (
    <View className={styles["home"]}>
      <HomeSearch></HomeSearch>
      <HomeBanner bannerList={bannerList}></HomeBanner>
      <HomePopular popularList={popularList}></HomePopular>
      <HomeRecommend recommend={recommend}></HomeRecommend>
      <TabControl
        titles={["精选专场", "精选单品"]}
        onTabClick={handleTabClick}
      ></TabControl>
    </View>
  );
});

export default Home;
