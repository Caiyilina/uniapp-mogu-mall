"use strict";
const common_vendor = require("../common/vendor.js");
const services_home = require("../services/home.js");
const useHomeStore = common_vendor.defineStore("home", {
  state: () => {
    return {
      banners: [],
      recommends: []
    };
  },
  actions: {
    async fetchHomeMultiData() {
      const res = await services_home.getHomeMultidata();
      let data = res.data.banner.list || [];
      let data2 = res.data.recommend.list || [];
      console.log("打印--", data);
      this.banners = data;
      this.recommends = data2;
    }
  }
});
exports.useHomeStore = useHomeStore;
