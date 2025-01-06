"use strict";
const common_vendor = require("../common/vendor.js");
const services_home = require("../services/home.js");
const types = ["pop", "new", "sell"];
function getDefaultGoodsListData() {
  let goodListOrign = {};
  types.forEach((type) => {
    goodListOrign[type] = {
      page: 0,
      list: []
    };
  });
  return goodListOrign;
}
const useHomeStore = common_vendor.defineStore("home", {
  state: () => {
    return {
      banners: [],
      recommends: [],
      goodsList: getDefaultGoodsListData()
    };
  },
  actions: {
    async fetchHomeMultiData() {
      const res = await services_home.getHomeMultidata();
      let data = res.data.banner.list || [];
      let data2 = res.data.recommend.list || [];
      this.banners = data;
      this.recommends = data2;
    },
    async fetchHomeData(type, page) {
      let res = await services_home.getHomeData(type, page);
      let data = res.data.list || [];
      this.goodsList[type].list.push(...data);
      this.goodsList[type].page = page;
    }
  }
});
exports.useHomeStore = useHomeStore;
