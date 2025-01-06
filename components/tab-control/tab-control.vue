<template>
	<view class="tab-control">
		<template v-for="(item,index) in titles" :key="item">
			<view :class="['item',currentIndex===index?'active':'']" @click="handleItemClick(item,index)">
				<text class="title"> {{item}}</text>
			</view>
		</template>

	</view>
</template>

<script setup>
	import { ref } from 'vue'
	const props = defineProps({
		titles: {
			type: Array,
			default: () => []
		}
	})
	const emit = defineEmits(['itemClick'])
	const currentIndex = ref(0)

	const handleItemClick = (item, index) => {
		currentIndex.value = index
		emit('itemClick', item, index)
	}
</script>

<style lang="scss">
	.tab-control {
		@include normalFlex();
		padding: 10rpx;
		box-sizing: border-box;

		.item {
			flex: 1;
			text-align: center;
			box-sizing: border-box;

			.title {
				display: inline-block;
				border-bottom: 4rpx solid #fff;
				padding: 16rpx;


			}

			&.active {

				color: $gPrimaryColor;

				.title {
					border-color: $gPrimaryColor;
				}
			}
		}
	}
</style>