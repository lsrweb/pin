<template>
	<view class="swipe_box">
		<bar></bar>
		<view class="head_swiper">
			<u-search :placeholder="placeholder" :disabled="true" v-model="keyword" :show-action="true" @click="toSearch"></u-search>
			<u-swiper ref="getSwiperHeight" height="350" :list="swiperList" indicator-pos="bottomRight"></u-swiper>
		</view>
	</view>
</template>

<script>
	export default {
		name: "swiper",
		props: {
			swiperList: {
				required: true,
				type: [Array, Object]
			}
		},
		methods: {
			toSearch() {
				uni.navigateTo({
					url:'pages/Index/children/search'
				})
			}
		},
		data() {
			return {
				keyword: "",
				placeholder: "", 

			};
		},
		mounted() {
			// 获取swiper高度
			const height = this.$refs.getSwiperHeight.height
			this.$emit('getSwiperHeight',height)
			
			
			const placeholder = ['商品打折折扣,点击拼购立即对焊', '免费商品限时兑换', '夏季促销,全场商品1折起购']
			let i = 0
			this.placeholder = placeholder[i]
			setInterval(() => {
				if (i == placeholder.length - 1) {
					i = 0
					this.placeholder = placeholder[0]
				} else {
					i++
					this.placeholder = placeholder[i]
				}
			}, 3000)

		}
	}
</script>

<style lang="scss" scoped>
	.head_swiper {
		// width: 95vw;
		margin: 0 auto;
		position: relative;

		.u-search {
			position: absolute;
			z-index: 2;
			width: 95%;
			left: 2.5%;
			top: 20rpx;

			/deep/ .u-content {
				background-color: rgba(255, 255, 255, 0.5) !important;
			}

			/deep/ .u-action {
				position: absolute;
				right: 0;
				height: 100%;
				background-color: #faa81f;
				color: #FFFFFF;
				font-size: 24rpx;
				width: 120rpx;
				border-radius: 50rpx;
				padding-top: 15rpx;
			}

			/deep/ .u-input {
				background: none !important;

				.uni-input-placeholder {
					color: #000;
				}

			}
		}

		.u-swiper-wrap {
			position: absolute;
			top: 0;
			width: 100%;
			// height: 300rpx;
			z-index: 1;
		}
	}
</style>
