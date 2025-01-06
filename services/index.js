const BASE_URL = "http://localhost:3000"
const TIME_OUT = 10000

class Request {
	request(url, method, params) {
		return new Promise((resolve, reject) => {
			uni.request({
				url: BASE_URL + url,
				timeout: TIME_OUT,
				method: method,
				data: params,
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