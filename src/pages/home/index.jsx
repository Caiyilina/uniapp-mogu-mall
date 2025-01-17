import React, { memo, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { useLoad, useReachBottom } from "@tarojs/taro";
import { View } from "@tarojs/components";

import {
  fetchHomeInfoAction,
  fetchRecommendDataAction,
  fetchGoodsDataAction,
  setCurrentTabNameAction,
  tabTypes,
} from "@/store/modules/home";

import TabControl from "@/components/tab-control";

import GridView from "@/components/grid-view";

import styles from "./index.module.scss";
import HomeSearch from "./cpns/home-search";
import HomeBanner from "./cpns/home-banner";
import HomePopular from "./cpns/home-popular";
import HomeRecommend from "./cpns/home-recommend";

const Home = memo(() => {
  const dispatch = useDispatch();
  const { bannerList, popularList, recommend, currentTabName, goodsList } =
    useSelector((state) => {
      return {
        bannerList: state.home.bannerList,
        popularList: state.home.popularList,
        recommend: state.home.recommend,
        currentTabName: state.home.currentTabName,
        goodsList: state.home.goodsList,
      };
    });
  useLoad(() => {
    console.log("页面加载");
    dispatch(fetchHomeInfoAction());
    dispatch(fetchRecommendDataAction());
    dispatch(fetchGoodsDataAction({ type: 0, page: 1 }));
    dispatch(fetchGoodsDataAction({ type: 1, page: 1 }));
  });
  useReachBottom(() => {
    console.log("触底了");
    const nextPage = goodsList[currentTabName].page + 1;

    const type = tabTypes[0] === currentTabName ? 0 : 1;

    dispatch(fetchGoodsDataAction({ type: type, page: nextPage }));
  });
  const handleTabClick = (index) => {
    console.log(index);
    dispatch(setCurrentTabNameAction(index));
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
      <GridView goods={goodsList[currentTabName].list}></GridView>
    </View>
  );
});

export default Home;
