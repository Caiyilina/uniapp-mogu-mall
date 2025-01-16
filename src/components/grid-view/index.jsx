import React, { memo } from "react";

import { View } from "@tarojs/components";
import styles from "./index.module.scss";

const GridView = memo(() => {
  return <View className={styles["grid-view"]}>GridView</View>;
});

export default GridView;
