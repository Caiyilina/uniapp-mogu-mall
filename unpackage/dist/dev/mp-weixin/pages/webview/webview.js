"use strict";
const _sfc_main = {
  __name: "webview",
  props: {
    link: {
      type: String,
      default: ""
    }
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return {
        a: __props.link
      };
    };
  }
};
wx.createPage(_sfc_main);
