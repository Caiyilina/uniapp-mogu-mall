import React, { memo } from "react";
import PropTypes from "proptypes";

import { useDispatch } from "react-redux";
import { Image, Text, View } from "@tarojs/components";
import styles from "./index.module.scss";
import imgDamage from "@/assets/images/svg/img-damage.svg";
import { setPopularListAction } from "@/store/modules/home";

const HomePopular = memo((props) => {
  const dispatch = useDispatch();
  const { popularList = [] } = props;
  const handleImageError = (item) => {
    const newList = popularList.map((i) => {
      if (i.id === item.id) {
        return {
          ...i,
          imgError: true,
        };
      }
      return i;
    });

    dispatch(setPopularListAction(newList));
  };
  return (
    <View className={styles["home-popular"]}>
      {popularList.map((item) => {
        return (
          <View key={item.id} className={styles["popular-item"]}>
            {item?.imgError ? (
              <View className={styles["damage-box"]}>
                <Image
                  src={imgDamage}
                  mode="widthFix"
                  className={styles["img-damage"]}
                ></Image>
              </View>
            ) : (
              <Image
                className={styles["img-box"]}
                src={item.pic}
                mode="widthFix"
                onError={() => handleImageError(item)}
              ></Image>
            )}

            <Text className={styles["popular-title"]}>{item.title}</Text>
          </View>
        );
      })}
    </View>
  );
});

export default HomePopular;
HomePopular.prototype = {
  popularList: PropTypes.array,
};
