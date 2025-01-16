import React, { memo } from "react";
import PropTypes from "proptypes";

import { View } from "@tarojs/components";
import styles from "./index.module.scss";

const HomePopular = memo(() => {
  return <View className={styles["home-popular"]}>HomePopular</View>;
});

export default HomePopular;
HomePopular.prototype = {};
