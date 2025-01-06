<template>
	<view>
		{{iid}}
	</view>
</template>

<script setup>
	import {
		onLoad
	} from "@dcloudio/uni-app"

	const props = defineProps({
		iid: {
			type: String,
			default: ''
		}
	})
	onLoad((options) => {
		console.log('detail-- onLoad', options);
	})
</script>

<style>

</style>