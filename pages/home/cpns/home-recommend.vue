<template>
	<view class="recommend">
		<view class="recommend-item" v-for="(item,index) in recommends" :key="index" @click="handleItemClick(item)">
			<image class="image" :src="item.image" mode="widthFix"></image>
			<view class="title">
				{{item.title}}
			</view>
		</view>
	</view>
</template>

<script setup>
	const props = defineProps({
		recommends: {
			type: Array,
			default: () => []
		}
	})
	const emit = defineEmits(['itemClick'])
	const handleItemClick = (item) => {

		emit('itemClick', item)
	}
</script>

<style lang="scss">
	.recommend {
		width: 100%;
		// display: flex;
		// flex-direction: row;
		// justify-content: center;
		// align-items: center;
		// 使用混合 替代flex布局
		@include normalFlex;

		.recommend-item {
			flex: 1;
			@include normalFlex(column);
			padding: 20rpx;
			font-size: $gFontSize;

			.image {
				width: 150rpx;
				height: 150rpx;
			}

			.title {
				margin-top: 10rpx;
			}
		}
	}
</style>