<template>
	<view class="main">
		<image class="icon" src="../../static/logo.png" mode=""></image>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss">
.main{
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: center;
	flex-wrap: nowrap;
	width: 100vw;
	height: 100vh;
}
.icon{
	top: 20rpx;
	position: absolute;
	width: 150rpx;
	height: 150rpx;
	border-radius: 10rpx;
}
</style>
