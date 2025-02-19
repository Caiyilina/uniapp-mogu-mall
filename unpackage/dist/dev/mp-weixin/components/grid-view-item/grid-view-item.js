"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
const _sfc_main = {
  __name: "grid-view-item",
  props: {
    item: {
      type: Object,
      default: () => {
      }
    }
  },
  emits: ["itemClick"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const handleItemClick = () => {
      emit("itemClick", props.item);
    };
    return (_ctx, _cache) => {
      return {
        a: __props.item.show.img,
        b: common_vendor.t(__props.item.title),
        c: common_vendor.t(__props.item.price),
        d: common_assets._imports_0,
        e: common_vendor.t(__props.item.cfav),
        f: common_vendor.o(handleItemClick)
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-8ed22fda"]]);
wx.createComponent(Component);
