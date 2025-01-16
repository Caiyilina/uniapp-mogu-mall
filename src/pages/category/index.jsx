import { View, Text } from "@tarojs/components";
import React, { memo } from "react";
import styles from "./index.modules.scss";

const Category = memo(() => {
  return (
    <View className={styles["category"]}>
      <Text>Hello world!</Text>
    </View>
  );
});

export default Category;
