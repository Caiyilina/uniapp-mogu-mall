import request from './index.js'

export function getHomeMultidata() {
	return request.get("/home/multidata")
}

export function getHomeData(type, page) {
	return request.get("/home/data", {
		type,
		page
	})
}