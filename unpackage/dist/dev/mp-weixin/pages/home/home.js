"use strict";
const common_vendor = require("../../common/vendor.js");
const store_home = require("../../store/home.js");
if (!Array) {
  const _easycom_tab_control2 = common_vendor.resolveComponent("tab-control");
  _easycom_tab_control2();
}
const _easycom_tab_control = () => "../../components/tab-control/tab-control.js";
if (!Math) {
  (homeBanner + homeRecommend + homePopular + _easycom_tab_control)();
}
const homeBanner = () => "./cpns/home-banner.js";
const homeRecommend = () => "./cpns/home-recommend.js";
const homePopular = () => "./cpns/home-popular.js";
const _sfc_main = {
  __name: "home",
  setup(__props) {
    const homeStore = store_home.useHomeStore();
    const { banners, recommends } = common_vendor.storeToRefs(homeStore);
    common_vendor.onLoad(() => {
      homeStore.fetchHomeMultiData();
    });
    const handleBannerClick = (link) => {
      common_vendor.index.navigateTo({
        url: "/pages/webview/webview?link=" + link
      });
    };
    const handleRecommendClick = (item) => {
      common_vendor.index.navigateTo({
        url: "/pages/webview/webview?link=" + item.link
      });
    };
    const handleTabClick = (item, index) => {
      console.log("点击了", item, index);
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(handleBannerClick),
        b: common_vendor.p({
          banners: common_vendor.unref(banners)
        }),
        c: common_vendor.o(handleRecommendClick),
        d: common_vendor.p({
          recommends: common_vendor.unref(recommends)
        }),
        e: common_vendor.o(handleTabClick),
        f: common_vendor.p({
          titles: ["流行", "新款", "精选"]
        })
      };
    };
  }
};
wx.createPage(_sfc_main);
