import React, { memo } from "react";

import { View } from "@tarojs/components";
import styles from "./index.module.scss";
import HomeSearch from "./cpns/home-search";

const Home = memo(() => {
  return (
    <View className={styles["home"]}>
      <HomeSearch></HomeSearch>
    </View>
  );
});

export default Home;
