let BASE_URL
// #ifndef APP 
BASE_URL = "http://localhost:3000"
// #endif
// #ifdef APP
BASE_URL = "http://192.168.1.115:3000"
// #endif

const TIME_OUT = 10000

class Request {
	request(url, method, params) {
		return new Promise((resolve, reject) => {
			uni.request({
				url: BASE_URL + url,
				timeout: TIME_OUT,
				method: method,
				data: params,
				sslVerify: false,
				success: res => {
					resolve(res.data)
				},
				fail: reject
			})
		})
	}

	get(url, params) {
		return this.request(url, "GET", params)
	}

	post(url, data) {
		return this.request(url, "POST", data)
	}
}

export default new Request()