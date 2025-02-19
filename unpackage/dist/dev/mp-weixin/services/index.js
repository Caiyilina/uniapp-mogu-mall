"use strict";
const common_vendor = require("../common/vendor.js");
let BASE_URL;
BASE_URL = "http://localhost:3000";
const TIME_OUT = 1e4;
class Request {
  request(url, method, params) {
    return new Promise((resolve, reject) => {
      common_vendor.index.request({
        url: BASE_URL + url,
        timeout: TIME_OUT,
        method,
        data: params,
        sslVerify: false,
        success: (res) => {
          resolve(res.data);
        },
        fail: reject
      });
    });
  }
  get(url, params) {
    return this.request(url, "GET", params);
  }
  post(url, data) {
    return this.request(url, "POST", data);
  }
}
const request = new Request();
exports.request = request;
