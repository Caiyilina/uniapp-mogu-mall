"use strict";
const services_index = require("./index.js");
function getHomeMultidata() {
  return services_index.request.get("/home/multidata");
}
exports.getHomeMultidata = getHomeMultidata;
