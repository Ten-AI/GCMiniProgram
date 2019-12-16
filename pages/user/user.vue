<template>
	<view>
		<view class="header">
			<view class="bg">
				<view class="box">
					<view class="box-hd">
						<view class="avator">
							<img v-if='user.avatarUrl' :src="user.avatarUrl" alt="">
							<img v-else src="cloud://gca-thyu2.6763-gca-thyu2-1254459705/face.jpg">
						</view>
						<view class="phone-number">
							<view v-if="user.nickName" class="phone-number">{{user.nickName}}</view>
							<button v-else class="login" type="primary" @click="login" open-type="getUserInfo">点击登录</button>
						</view>
					</view>
					<view class="box-bd">
						<view class="item">
							<view class="icon">{{user.classificate}}</view>
							<view class="text">识别次数</view>
						</view>
						<view class="item">
							<view class="icon">{{user.score}}</view>
							<view class="text">我的积分</view>
						</view>
						<view class="item">
							<view class="icon">{{user.share}}</view>
							<view class="text">分享次数</view>
						</view>
					</view>
				</view>
			</view>
		</view>
		<view class="list-content">
			<view class="list">
				<view class="li noborder">
					<view class="icon">
						<image src="cloud://gca-thyu2.6763-gca-thyu2-1254459705/card.png"></image>
					</view>
					<view class="text">
						<navigator url="../Profile/Profile">个人资料</navigator>
					</view>
					<image class="to" src="cloud://gca-thyu2.6763-gca-thyu2-1254459705/to.png"></image>
				</view>
			</view>
			<view class="list">
				<view class="li ">
					<view class="icon">
						<image src="cloud://gca-thyu2.6763-gca-thyu2-1254459705/help.png"></image>
					</view>
					<view class="text">
						<navigator url="../help/help">帮助中心</navigator>
					</view>
					<image class="to" src="cloud://gca-thyu2.6763-gca-thyu2-1254459705/to.png"></image>
				</view>
				<view class="li ">
					<view class="icon">
						<image src="cloud://gca-thyu2.6763-gca-thyu2-1254459705/about.png"></image>
					</view>
					<view class="text">
						<navigator url="../about/about">关于我们</navigator>
					</view>
					<image class="to" src="cloud://gca-thyu2.6763-gca-thyu2-1254459705/to.png"></image>
				</view>
				<view class="li ">
					<view class="icon">
						<image src="cloud://gca-thyu2.6763-gca-thyu2-1254459705/opinion.png"></image>
					</view>
					<view class="text">
						<navigator url="../feedback/feedback">意见反馈</navigator>
					</view>
					<image class="to" src="cloud://gca-thyu2.6763-gca-thyu2-1254459705/to.png"></image>
				</view>
			</view>
		</view>
		<view class="foot">
			Powered by Ten-AI
		</view>
	</view>
</template>
<script>
	export default {
		data() {
			return {
				user: {
					avatarUrl: '',
					nickName: '',
					gender: '',
					province: '',
					city: '',
					classify_count: 99,
					point: 99,
					share_count: 99
				}
			};
		},
		onLoad() {},
		methods: {
			login() {
				const _self = this;
				// uni.showLoading({
				// 		mask:true,
				// 		title: '正在登录···',
				// 		complete:()=>{
				// 			if(this.nickName){
				// 			 uni.hideLoading();								
				// 			}
				// 		}
				// 	});
				uni.login({
					provider: 'weixin',
					success: function(loginRes) {
						let js_code = loginRes.code; //js_code可以给后台获取unionID或openID作为用户标识
						uni.request({
							url: 'http://localhost:8000/user/code/',
							method: 'GET',
							data: {
								code: js_code
							},
							success: (res) => {
								console.log(res)
							}
						})
						// 获取用户信息
						uni.getUserInfo({
							provider: 'weixin',
							success: function(res) {
								var userInfo = res.userInfo;
								console.log(res);
								_self.user.nickName = userInfo.nickName;
								_self.user.avatarUrl = userInfo.avatarUrl;
								_self.user.gender = userInfo.gender;
								_self.user.province = userInfo.province;
								_self.user.city = userInfo.city;
							}
						});
					}
				});
			},
			onGotUserInfo: function(e) {
				console.log(e.detail.errMsg)
				console.log(e.detail.userInfo)
				console.log(e.detail.rawData)
			}
		},
		// computed:{
		// 	let _this = this;
		// 	setValue:function(){
		// 		var avatarUrl = _this.infoRes.userInfo.avatarUrl;
		// 		var nickName = _this.infoRes.userInfo.nickName;
		// 		return avatarUrl,nickName;
		// 	}
		// }
	}
</script>

<style lang="scss">
	page {
		background-color: #f1f1f1;
		font-size: 30upx;
	}

	.header {
		background: #fff;
		height: 290upx;
		padding-bottom: 110upx;

		.bg {
			width: 100%;
			height: 200upx;
			padding-top: 100upx;
			background-color: #4191ea;
		}
	}

	.box {
		width: 650upx;
		height: 300upx;
		border-radius: 20upx;
		margin: 0 auto;
		background: #fff;
		box-shadow: 0 5upx 20upx 0upx rgba(0, 0, 150, .2);

		.box-hd {
			display: flex;
			flex-wrap: wrap;
			flex-direction: row;
			justify-content: center;

			.avator {
				width: 140upx;
				height: 140upx;
				background: #fff;
				border: 5upx solid #fff;
				border-radius: 50%;
				margin-top: -80upx;
				margin-bottom: 15upx;
				overflow: hidden;

				img {
					width: 100%;
					height: 100%;
				}
			}

			.phone-number {
				width: 100%;
				text-align: center;
				top: 5upx;

				.login {
					width: 30%;
					height: 80%;
					background-color: #1296db;
				}
			}
		}

		.box-bd {
			display: flex;
			flex-wrap: nowrap;
			flex-direction: row;
			justify-content: center;

			.item {
				flex: 1 1 auto;
				display: flex;
				flex-wrap: wrap;
				flex-direction: row;
				justify-content: center;
				border-right: 1px solid #f1f1f1;
				margin: 10upx 0;

				&:last-child {
					border: none;
				}

				.icon {
					width: 60upx;
					height: 60upx;
					text-align: center;
					font-size: 50upx;
					color: #FFE409;
				}

				.text {
					width: 100%;
					text-align: center;
					margin-top: 10upx;
				}
			}
		}
	}

	.list-content {
		background: #fff;
	}

	.list {
		width: 100%;
		border-bottom: 15upx solid #f1f1f1;
		background: #fff;

		&:last-child {
			border: none;
		}

		.li {
			width: 92%;
			height: 100upx;
			padding: 0 4%;
			border-bottom: 1px solid rgb(243, 243, 243);
			display: flex;
			align-items: center;

			&.noborder {
				border-bottom: 0
			}

			.icon {
				flex-shrink: 0;
				width: 50upx;
				height: 50upx;

				image {
					width: 50upx;
					height: 50upx;
				}
			}

			.text {
				padding-left: 20upx;
				width: 100%;
				color: #666;
			}

			.to {
				flex-shrink: 0;
				width: 40upx;
				height: 40upx;
			}
		}
	}

	.foot {
		position: fixed;
		width: 100%;
		text-align: center;
		bottom: 60upx;
		color: #999999;
	}
</style>
