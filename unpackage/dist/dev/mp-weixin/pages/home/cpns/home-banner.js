"use strict";
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  __name: "home-banner",
  props: {
    banners: {
      type: Array,
      default: () => []
    }
  },
  emits: ["bannerItemClick"],
  setup(__props, { emit: __emit }) {
    const emit = __emit;
    const handleItemClick = (item) => {
      const link = item.link;
      emit("bannerItemClick", link);
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(__props.banners, (item, index, i0) => {
          return {
            a: item.image,
            b: common_vendor.o(($event) => handleItemClick(item), index),
            c: index
          };
        })
      };
    };
  }
};
wx.createComponent(_sfc_main);
