import Taro from "@tarojs/taro";

const TIME_OUT = 10000;
const BASE_URL = "http://codercba.com:9060/juanpi/api";
export class Request {
  request(url, method, data) {
    return new Promise((resolve, reject) => {
      Taro.request({
        url: BASE_URL + url,
        method: method,
        data: data,
        timeout: TIME_OUT,
        header: {
          "content-type": "application/json",
        },
        success: (res) => {
          resolve(res.data);
        },
        fail: (err) => {
          reject(err.errMsg);
        },
      });
    });
  }
  get(url, data) {
    return this.request(url, "GET", data);
  }
  post(url, data) {
    return this.request(url, "POST", data);
  }
}
export default new Request();
