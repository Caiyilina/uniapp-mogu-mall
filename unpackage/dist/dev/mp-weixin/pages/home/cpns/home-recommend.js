"use strict";
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  __name: "home-recommend",
  props: {
    recommends: {
      type: Array,
      default: () => []
    }
  },
  emits: ["itemClick"],
  setup(__props, { emit: __emit }) {
    const emit = __emit;
    const handleItemClick = (item) => {
      emit("itemClick", item);
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(__props.recommends, (item, index, i0) => {
          return {
            a: item.image,
            b: common_vendor.t(item.title),
            c: index,
            d: common_vendor.o(($event) => handleItemClick(item), index)
          };
        })
      };
    };
  }
};
wx.createComponent(_sfc_main);
