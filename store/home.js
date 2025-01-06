import { defineStore } from "pinia"
import { getHomeMultidata } from "@/services/home"

export const useHomeStore = defineStore('home', {
	state: () => {
		return {
			banners: [],
			recommends: []
		}
	},
	actions: {
		async fetchHomeMultiData() {
			const res = await getHomeMultidata()
			let data = res.data.banner.list || []
			let data2 = res.data.recommend.list || []
			console.log('打印--', data);
			this.banners = data
			this.recommends = data2
		},

	}
})