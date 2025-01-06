<template>
	<view class="goods-item">
		<!-- #ifdef H5 -->
		<img class="image" v-lazy="item.show.img" />
		<!-- #endif -->
		<!-- #ifndef H5 -->
		<image :lazy-load="true" class="image" :src="item.show.img" mode="scaleToFill"></image>

		<!-- #endif -->


		<view class="desc-info">
			<view class="title">{{item.title}}</view>
			<view class="info">
				<text class="price">￥{{item.price}} </text>
				<image class="icon" src="@/static/images/common/favor.png" mode=""></image>
				<text class="favorNum">{{item.cfav}}</text>
			</view>
		</view>
	</view>
</template>

<script setup>
	import { ref } from 'vue'
	const props = defineProps({
		item: {
			type: Object,
			default: () => {}
		}
	})
	const emit = defineEmits(['itemClick'])
	const handleItemClick = (item) => {

		emit('itemClick', item)
	}
</script>

<style lang="scss" scoped>
	.goods-item {
		padding: 10px;
		box-sizing: border-box;
		color: #333;

		.image {
			width: 100%;
			border-radius: 10rpx;

		}

		.desc-info {
			margin-top: 6rpx;

			.title {
				font-size: 28rpx;
				// 一行显示
				@include textEllipsis
			}

			.info {
				font-size: $gFontSize;
				text-align: center;

				@include normalFlex(row, center);

				.price {
					color: $gPriceColor;
				}

				.icon {
					width: 30rpx;
					height: 30rpx;
					// position: relative;
					// top: 6rpx;
					padding: 0 10rpx 0 6rpx;
				}

				.favorNum {
					// position: relative;
					// top: 2rpx;
				}
			}
		}
	}
</style>