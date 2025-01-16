import React, { memo } from "react";

import { useDispatch } from "react-redux";
import { useLoad } from "@tarojs/taro";
import { View } from "@tarojs/components";
import styles from "./index.module.scss";
import HomeSearch from "./cpns/home-search";
import {
  fetchHomeInfoAction,
  fetchRecommendDataAction,
} from "../../store/modules/home";

const Home = memo(() => {
  const dispatch = useDispatch();
  useLoad(() => {
    console.log("页面加载");
    dispatch(fetchHomeInfoAction());
    dispatch(fetchRecommendDataAction());
  });
  return (
    <View className={styles["home"]}>
      <HomeSearch></HomeSearch>
    </View>
  );
});

export default Home;
