import React, { memo } from "react";
import PropTypes from "proptypes";

import { Image, Text, View } from "@tarojs/components";

import classNames from "classnames";
import imgDamage from "@/assets/images/svg/img-damage.svg";
import styles from "./index.module.scss";

const HomeRecommend = memo((props) => {
  const { recommend } = props;
  if (!recommend) return;

  //TODO recommend 的图片都不能访问
  return (
    <View className={styles["home-recommend"]}>
      <View className={classNames(styles["com"], styles["ad-big-top"])}>
        <Image
          className={classNames(styles["com-img"], styles["ad-big-top-pic"])}
          src={imgDamage}
          mode="heightFix"
        ></Image>
      </View>
      {/* 中间 */}
      <View className={classNames(styles["com"], styles["center"])}>
        <View className={classNames(styles["com"], styles["center-left"])}>
          <Text>品牌清仓</Text>
        </View>
        <View className={classNames(styles["com"], styles["center-right"])}>
          <View
            className={classNames(styles["com"], styles["center-right-top"])}
          >
            <Text>限量秒杀</Text>
          </View>
          <View
            className={classNames(styles["com"], styles["center-right-bottom"])}
          >
            <Text>生活超市</Text>
          </View>
        </View>
      </View>
      <View className={classNames(styles["com"], styles["ad-big-bottom"])}>
        <Image
          className={classNames(styles["com-img"], styles["ad-big-bottom-pic"])}
          src={imgDamage}
          mode="heightFix"
        ></Image>
      </View>
      <View className={classNames(styles["com"], styles["ad-big-bottom"])}>
        <Image
          className={classNames(styles["com-img"], styles["ad-big-bottom-pic"])}
          src={imgDamage}
          mode="heightFix"
        ></Image>
      </View>
    </View>
  );
});

export default HomeRecommend;
HomeRecommend.prototype = {
  recommend: PropTypes.object,
};
