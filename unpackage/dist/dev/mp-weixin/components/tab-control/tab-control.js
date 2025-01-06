"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "tab-control",
  props: {
    titles: {
      type: Array,
      default: () => []
    }
  },
  emits: ["itemClick"],
  setup(__props, { emit: __emit }) {
    const emit = __emit;
    const currentIndex = common_vendor.ref(0);
    const handleItemClick = (item, index) => {
      currentIndex.value = index;
      emit("itemClick", item, index);
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(__props.titles, (item, index, i0) => {
          return {
            a: common_vendor.t(item),
            b: common_vendor.n(currentIndex.value === index ? "active" : ""),
            c: common_vendor.o(($event) => handleItemClick(item, index), item),
            d: item
          };
        })
      };
    };
  }
};
wx.createComponent(_sfc_main);
