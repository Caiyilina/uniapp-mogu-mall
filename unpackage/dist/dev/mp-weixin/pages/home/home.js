"use strict";
const common_vendor = require("../../common/vendor.js");
const store_home = require("../../store/home.js");
if (!Array) {
  const _easycom_tab_control2 = common_vendor.resolveComponent("tab-control");
  const _easycom_grid_view_item2 = common_vendor.resolveComponent("grid-view-item");
  const _easycom_uni_grid_item2 = common_vendor.resolveComponent("uni-grid-item");
  const _easycom_uni_grid2 = common_vendor.resolveComponent("uni-grid");
  (_easycom_tab_control2 + _easycom_grid_view_item2 + _easycom_uni_grid_item2 + _easycom_uni_grid2)();
}
const _easycom_tab_control = () => "../../components/tab-control/tab-control.js";
const _easycom_grid_view_item = () => "../../components/grid-view-item/grid-view-item.js";
const _easycom_uni_grid_item = () => "../../uni_modules/uni-grid/components/uni-grid-item/uni-grid-item.js";
const _easycom_uni_grid = () => "../../uni_modules/uni-grid/components/uni-grid/uni-grid.js";
if (!Math) {
  (homeBanner + homeRecommend + homePopular + _easycom_tab_control + _easycom_grid_view_item + _easycom_uni_grid_item + _easycom_uni_grid)();
}
const homeBanner = () => "./cpns/home-banner.js";
const homeRecommend = () => "./cpns/home-recommend.js";
const homePopular = () => "./cpns/home-popular.js";
const _sfc_main = {
  __name: "home",
  setup(__props) {
    const homeStore = store_home.useHomeStore();
    const { banners, recommends, goodsList } = common_vendor.storeToRefs(homeStore);
    const initData = () => {
      homeStore.fetchHomeMultiData();
      homeStore.fetchHomeData("pop", 1);
      homeStore.fetchHomeData("sell", 1);
      homeStore.fetchHomeData("new", 1);
    };
    common_vendor.onLoad(() => {
      initData();
    });
    common_vendor.onShow(() => {
      initData();
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
    const handleGridItemClick = (item) => {
      console.log("详情页面", item);
      common_vendor.index.navigateTo({
        url: "/pages/detail/detail?iid=" + item.iid
      });
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
        }),
        g: common_vendor.f(common_vendor.unref(goodsList)["pop"].list, (itemInfo, index, i0) => {
          return {
            a: common_vendor.o(handleGridItemClick, index),
            b: "e7207910-6-" + i0 + "," + ("e7207910-5-" + i0),
            c: common_vendor.p({
              item: itemInfo
            }),
            d: "e7207910-5-" + i0 + ",e7207910-4",
            e: index
          };
        }),
        h: common_vendor.p({
          column: 2,
          ["border-color"]: "#ff8198",
          square: false,
          showBorder: false,
          highlight: false
        })
      };
    };
  }
};
wx.createPage(_sfc_main);
