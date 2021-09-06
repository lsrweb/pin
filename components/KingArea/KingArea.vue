<template>
	<view class="line_flex">
		<view v-for="(item,index) in data" :key="index" :style="{width: 95 / Number(line) + '%'}" class="line_flex_chil">
			<image mode="widthFix" :src="item.src" style="width: 40%;"></image>
			<view style="margin-top: 5rpx;">{{item.txt}}</view>
		</view>
		<u-gap v-if="showGap" style="width: 100%;margin-top: 17rpx;" height="4" bg-color="#f6f7f6"></u-gap>
	</view>
</template>

<script>
	export default {
		name: "KingArea",
		data() {
			return {
				lineNumber: this.line
			};
		},
		props: {
			line: {
				type: Number,
				default: 4
			},
			data: {
				type: [Array, Object],
				required: true
			},
			showGap: {
				type: Boolean,
				default: true
			}
		}
	}
</script>

<style lang="scss" scoped>
	.line_flex {
		background-color: #FFFFFF;
		width: 100%;
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		padding: 10rpx 0;

		.line_flex_chil {
			text-align: center;
			font-size: 20rpx;
		}
	}
</style>
