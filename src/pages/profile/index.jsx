import { View, Text } from "@tarojs/components";
import React, { memo } from "react";
import styles from "./index.modules.scss";

const Profile = memo(() => {
  return (
    <View className={styles["profile"]}>
      <Text>Hello world!</Text>
    </View>
  );
});

export default Profile;
