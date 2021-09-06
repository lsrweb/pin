<template>
	<view class="content">
		<!-- swiper -->
		<view :style="{height: swiperHeight + 'px'}">
			<Swiper :swiperList="swiperList" @getSwiperHeight="getSwiperHeight"></Swiper>
		</view>
		<!-- King -->
		<KingArea :data="king"></KingArea>
		<!-- notice  -->
		<view class="notice">
			<view class="notice_new">最新公告:</view>
			<u-notice-bar type="none" mode="vertical" :volume-icon="false" :list="notice" :showRed="true" :duration="4000"></u-notice-bar>
		</view>
		<!-- con -->
		<view class="point">
			<view class="point_title">
				<view class="title">积分兑换</view>
				<view class="more">更多福利</view>
			</view>
			<view class="main_shop">
				<view v-for="(data,index) in con" :key="index" @click="goDuiHuan(data)">
					<image :src="data.src" mode="widthFix" style="width: 50%;"></image>
					<view class="text">{{data.txt}}</view>
					<view class="much">{{`${data.money}积分`}}</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	const notice = ['掌上优选商城上线啦!', '秋季大促销,商品7折促销!', '我是一条公告']
	const swiperList = [
		{ image: 'https://cdn.uviewui.com/uview/swiper/1.jpg', title: '昨夜星辰昨夜风，画楼西畔桂堂东' },
		{ image: 'https://cdn.uviewui.com/uview/swiper/2.jpg', title: '身无彩凤双飞翼，心有灵犀一点通' },
		{ image: 'https://cdn.uviewui.com/uview/swiper/3.jpg', title: '谁念西风独自凉，萧萧黄叶闭疏窗，沉思往事立残阳' }]

	const king = [
		{ src: '../../static/index/index_kin1.png', txt: '关于我们' },
		{ src: '../../static/index/index_kin2.png', txt: '玩法介绍' },
		{ src: '../../static/index/index_kin3.png', txt: '新人帮助' },
		{ src: '../../static/index/index_kin4.png', txt: '在线客服' }]

	const con = [
		{ id: 1, src: '../../static/index/index_kin1.png', txt: "新一代牛逼机器人", money: '168' },
		{ id: 2, src: '../../static/index/index_kin1.png', txt: "新一代牛逼机器人", money: '168' },
		{ id: 3, src: '../../static/index/index_kin1.png', txt: "新一代牛逼机器人", money: '168' }
	]

	export default {
		data() {
			return {
				swiperList,
				notice,
				king,
				con,

				swiperHeight: "",
			}
		},
		onLoad() {},
		methods: {
			// 积分兑换点击事件
			goDuiHuan(value) {
				const { id } = value
				// push router
			},

			// app H5 swiper高度适应
			getSwiperHeight(height) {
				// #ifdef APP-PLUS
				this.swiperHeight = (Number(height) + 66) / 2
				// #endif
				// #ifndef APP-PLUS
				this.swiperHeight = Number(height) / 2
				// #endif
			}
		}
	}
</script>

<style scoped lang="scss">
	page {
		background-color: #f6f7f6;
	}

	.notice {
		background-color: #FFFFFF;
		overflow: hidden;
		padding: 0 5%;

		.notice_new {
			height: inherit;
			float: left;
			height: 68rpx;
			line-height: 68rpx;
			font-size: 33rpx;
			font-weight: bolder;
			color: #f8a91f;
		}
	}

	.point {
		width: 90%;
		border-radius: 15rpx;
		margin: 0 auto;
		margin-top: 20rpx;
		background-image: linear-gradient(to right, #fc5e47, #f7a423);
		padding: 15rpx 15rpx;

		.point_title {
			color: #FFFFFF;
			display: flex;
			justify-content: space-between;
			margin-bottom: 30rpx;

			.title {
				font-size: 30rpx;
				font-weight: bold;
			}
		}

		.main_shop {
			display: flex;
			flex-direction: row;
			justify-content: space-around;
			background-color: #FFFFFF;
			border-radius: 15rpx;

			>view {
				width: 30%;
				text-align: left;

				/* #ifdef APP-PLUS */
				font-size: 20rpx;
				/* 	#endif */
				/* #ifdef H5 */
				font-size: 16rpx;
				/* #endif */
				
				.much{
					color: #edac33;
					font-size: 18rpx;
				}
			}

		}
	}
</style>
