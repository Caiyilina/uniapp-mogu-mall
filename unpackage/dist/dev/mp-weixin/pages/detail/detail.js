"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "detail",
  props: {
    iid: {
      type: String,
      default: ""
    }
  },
  setup(__props) {
    common_vendor.onLoad((options) => {
      console.log("detail-- onLoad", options);
    });
    return (_ctx, _cache) => {
      return {
        a: common_vendor.t(__props.iid)
      };
    };
  }
};
wx.createPage(_sfc_main);
