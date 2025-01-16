import React, { memo } from "react";

import { View } from "@tarojs/components";
import styles from "./index.module.scss";

const Home = memo(() => {
  return <View className={styles["home"]}>Home</View>;
});

export default Home;
