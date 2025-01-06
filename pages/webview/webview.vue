<template>
	<web-view :src="link"></web-view>
</template>

<script setup>
	// 接收页面传递的url
	const props = defineProps({
		link: {
			type: String,
			default: ''
		}
	})
</script>

<style lang="scss">

</style>