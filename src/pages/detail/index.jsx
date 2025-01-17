import React, { memo } from "react";
import PropTypes from "proptypes";

import { useLoad } from "@tarojs/taro";
import { View } from "@tarojs/components";
import styles from "./index.module.scss";

const Detail = memo(() => {
  useLoad((options) => {
    console.log("options", options);
  });
  return <View className={styles["detail"]}>Detail</View>;
});

export default Detail;
Detail.prototype = {};
