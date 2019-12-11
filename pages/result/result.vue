<template>
	<view class='bg' :style="{backgroundImage: backgroundImageUrl}" >
		<view class="result">
			<image class="pic" :src="uploadImage" mode=""></image>
			<view class="res_name">
				{{name}} 属于
			</view>
			<view class="res_feedback">
				识别不对戳这里>
			</view>
			<image class="share_button" src="cloud://gca-thyu2.6763-gca-thyu2-1254459705/button2.png" mode=""></image>
			<view class="foot">
				识别结果仅供参考，具体分类请以当地主管部门相关规定为准
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				t: 1,
				name: '',
				uploadImage: ''
			}
		},
		onLoad(option) {
			this.t = option.t
			this.name = option.name
			this.uploadImage = option.uploadImage
		},
		methods: {
			// getBg() {
			// 	var _self = this;
			// 	uni.request({
			// 		url: 'https://service.xiaoyuan.net.cn/garbage/index/search?kw=可乐瓶子',
			// 		header: {
			// 			'content-type': 'application/x-www-form-urlencoded',
			// 		},
			// 		success: (res) => {
			// 			_self.t = res.data.data[0].type;
			// 			_self.name = res.data.data[0].name;
			// 		}
			// 	})
			// }
		},
		computed: {
			backgroundImageUrl() {
				return "url(http://qiniu.ncucoder.com/" + this.t + ".jpg)"
			}
		}
	}
</script>

<style>
	.bg {
		top: 80upx;
		/* position:relative;
		top:0;
		left:0; */
		position: absolute;
		width: 100%;
		height: 70%;
		background-size: cover;
		z-index: -1;
	}

	.result {
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: center;
		flex-wrap: nowrap;
		width: 100vw;
		height: 100vh;
	}

	.pic {
		top: 7upx;
		position: absolute;
		width: 150upx;
		height: 150upx;
		border-radius: 10upx;
		/* border:solid #FF0000; */
	}

	.res_name {
		position: absolute;
		color: #FFFFFF;
		font-size: 50upx;
		margin: 170upx auto;
		align-content: center;
	}

	.res_feedback {
		top: 770upx;
		position: absolute;
		color: #FFFFFF;
		font-size: 25upx;
	}

	.share_button {
		top: 1000upx;
		position: absolute;
		height: 90upx;
	}

	.foot {
		position: fixed;
		bottom: 60upx;
		font-size: 20upx;
		color: #999999;
	}
</style>
