import { defineStore } from "pinia"
import { getHomeData, getHomeMultidata } from "@/services/home"

export const types = ['pop', 'new', 'sell']

function getDefaultGoodsListData() {
	let goodListOrign = {}
	types.forEach((type) => {
		goodListOrign[type] = {
			page: 0,
			list: []
		}
	})
	return goodListOrign

}

export const useHomeStore = defineStore('home', {
	state: () => {
		return {
			banners: [],
			recommends: [],
			goodsList: getDefaultGoodsListData()
		}
	},
	actions: {
		async fetchHomeMultiData() {
			const res = await getHomeMultidata()
			let data = res.data.banner.list || []
			let data2 = res.data.recommend.list || []
			this.banners = data
			this.recommends = data2
		},
		async fetchHomeData(type, page) {
			let res = await getHomeData(type, page)
			let data = res.data.list || []
			this.goodsList[type].list.push(...data)
			this.goodsList[type].page = page

		}

	}
})