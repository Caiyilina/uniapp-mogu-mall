import React, { memo, useState } from "react";

import PropTypes from "proptypes";
import { View } from "@tarojs/components";
import styles from "./index.module.scss";
import classNames from "classnames";

const TabControl = memo((props) => {
  const { titles = [], onTabClick } = props;
  const [currentIndex, setCurrentIndex] = useState(0);
  return (
    <View className={styles["tab-control"]}>
      {titles.map((item, index) => {
        return (
          <View
            key={index}
            className={classNames(
              styles["tab-item"],
              index === currentIndex && styles["active"]
            )}
            onClick={() => {
              setCurrentIndex(index);
              onTabClick(index);
            }}
          >
            {item}
          </View>
        );
      })}
    </View>
  );
});

export default TabControl;
TabControl.prototype = {
  titles: PropTypes.array,
  onTabClick: PropTypes.func,
};
