import React, { memo } from "react";
import PropTypes from "proptypes";

import { useDispatch } from "react-redux";
import { Image, Text, View } from "@tarojs/components";

import { setPopularListAction } from "@/store/modules/home";
import styles from "./index.module.scss";

const HomePopular = memo(() => {
  return <View className={styles["home-popular"]}>HomePopular</View>;
});

export default HomePopular;
HomePopular.prototype = {};
