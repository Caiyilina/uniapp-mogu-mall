import React, { memo } from "react";

import { View } from "@tarojs/components";
import styles from "./index.module.scss";

const HomeSearch = memo(() => {
  return <View className={styles["home-search"]}>HomeSearch</View>;
});

export default HomeSearch;
