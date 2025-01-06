import { defineStore } from "pinia"
import { getHomeMultidata } from "@/services/home"

export const useHomeStore = defineStore('home', {
	state: () => {
		return {
			banners: []
		}
	},
	actions: {
		async fetchHomeMultiData() {
			const res = await getHomeMultidata()
			let data = res.data.banner.list || []
			console.log('打印--', data);
			this.state.banners = data
		}
	}
})