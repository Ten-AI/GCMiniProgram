<template>
	<view class='bg' :style="{backgroundImage: 'url(http://122.51.162.235:8080/static/image/'+result.type+'.jpg)'}" >
		<view class="result">
				<image class="pic" src="../../static/logo.png" mode=""></image>
			<view class="res_name">
				{{result.name}}&nbsp属于
			</view>
			<view class="res_feedback">
				识别不对戳这里>
			</view>
				<image class="share_button" src="../../static/button2.png" mode=""></image>
			<view class="foot">
				识别结果仅供参考，具体分类请以当地主管部门相关规定为准
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data(){
			return{
				result:[]
			}
		},
		onLoad() {
			this.getBg();
		},
		methods:{
			getBg(){
				var _self = this;
				uni.request({
					url:'https://service.xiaoyuan.net.cn/garbage/index/search?kw=可乐瓶子',
					header:{
						'content-type':'application/x-www-form-urlencoded',
					},
					success:(res) => {
						_self.result = res.data.data[0];
						console.log(_self.result.type);
					}
				})
			}
		}
	}
</script>

<style>
	.bg {
		top: 0;
		/* position:relative;
		top:0;
		left:0; */
		position: absolute;
		width:100%;
		height:70%;
		background-size: cover;
		z-index: -1;
	} 
	.result{
		display: flex;
		flex-direction: column;
	    justify-content: flex-start;
		align-items: center;
		flex-wrap: nowrap;
		width: 100vw;
		height: 100vh;
	}
	.pic{
		top: 20rpx;
		position: absolute;
		width: 150rpx;
		height: 150rpx;
		border-radius: 10rpx;
		/* border:solid #FF0000; */
	}
	.res_name{
		position: absolute;
		color: #FFFFFF;
		font-size: 50rpx;
		margin: 195rpx auto;
		align-content: center;
	}
	.res_feedback{
		top: 770rpx;
		position: absolute;
		color: #FFFFFF;
		font-size: 25rpx;
	}
	.share_button{
		top: 900rpx;
		position: absolute;
		height: 90rpx;
	}
	.foot{
		position: absolute;
		top: 1160rpx;
		font-size: 20rpx;
		color:  #999999;
	}
</style>
