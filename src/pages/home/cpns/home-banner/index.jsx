import React, { memo } from "react";
import PropTypes from "proptypes";

import { useDispatch } from "react-redux";
import { Image, Swiper, SwiperItem, View } from "@tarojs/components";

import { setBannerListAction } from "@/store/modules/home";

import imgDamage from "@/assets/images/svg/img-damage.svg";

import styles from "./index.module.scss";

const HomeBanner = memo((props) => {
  const { bannerList = [] } = props;
  const dispatch = useDispatch();
  const handleImageError = (item) => {
    const newBannerList = bannerList.map((i) => {
      if (i.id === item.id) {
        return {
          ...i,
          imgError: true,
        };
      }
      return i;
    });

    dispatch(setBannerListAction(newBannerList));
  };
  return (
    <Swiper
      className={styles["home-banner"]}
      indicatorDots
      indicatorActiveColor="#ff464e"
      indicatorColor="#999"
      autoplay
      interval={3000}
    >
      {bannerList.map((item) => {
        return (
          <SwiperItem key={item.id}>
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
                src={item.pic}
                mode="widthFix"
                defaultSource={imgDamage}
                onError={() => handleImageError(item)}
              ></Image>
            )}
          </SwiperItem>
        );
      })}
    </Swiper>
  );
});

export default HomeBanner;
HomeBanner.prototype = {
  bannerList: PropTypes.array,
};
