"use strict";
const services_index = require("./index.js");
function getHomeMultidata() {
  return services_index.request.get("/home/multidata");
}
function getHomeData(type, page) {
  return services_index.request.get("/home/data", {
    type,
    page
  });
}
exports.getHomeData = getHomeData;
exports.getHomeMultidata = getHomeMultidata;
