import { View, Text } from "@tarojs/components";
import React, { memo } from "react";
import styles from "./index.modules.scss";

const Cart = memo(() => {
  return (
    <View className={styles["cart"]}>
      <Text>Hello world!</Text>
    </View>
  );
});

export default Cart;
