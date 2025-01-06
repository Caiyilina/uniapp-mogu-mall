<template>
	<view class="content">
		<!-- 1、轮播图组件 -->
		<home-banner :banners="banners" @bannerItemClick="handleBannerClick"></home-banner>
		<!-- 2、推荐栏组件 -->
		<home-recommend :recommends="recommends" @itemClick="handleRecommendClick"></home-recommend>
		<!-- 3、热门栏组件 -->
		<home-popular></home-popular>
		<!-- 4、选项卡组件 -->
		<tab-control :titles="['流行','新款','精选']" @itemClick="handleTabClick"></tab-control>
	</view>
</template>

<script setup>
	import { onMounted } from "vue";
	import {
		onLoad,
		onShow
	} from "@dcloudio/uni-app"
	import { storeToRefs } from "pinia"
	import { useHomeStore } from "@/store/home.js";
	import homeBanner from "./cpns/home-banner.vue";
	import homeRecommend from "./cpns/home-recommend.vue";
	import homePopular from "./cpns/home-popular.vue";

	const homeStore = useHomeStore()
	const { banners, recommends } = storeToRefs(homeStore)
	onLoad(() => {

		// 触发一个异步的action
		console.log('home- onLoad');
		homeStore.fetchHomeMultiData()
	})

	onShow(() => {

		// 触发一个异步的action
		console.log('home- onShow');
		homeStore.fetchHomeMultiData()
	})

	const handleBannerClick = (link) => {
		uni.navigateTo({
			url: '/pages/webview/webview?link=' + link,

		})
	}
	const handleRecommendClick = (item) => {
		uni.navigateTo({
			url: '/pages/webview/webview?link=' + item.link,

		})
	}
	const handleTabClick = (item, index) => {
		console.log('点击了', item, index);
	}
</script>

<style>

</style>