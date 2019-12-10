<template>
	<view>
		<vrow class="row" align="center">
			<vcol span="75"><view class="col">
			<image class="icon" src="../../static/logo.png" mode=""></image>
			</view></vcol>
		</vrow>
		<vrow class="row" align="center">
			<vcol span="75"><view class="col">
			<view>垃圾分类小程序</view>	
			</view>
			</vcol>
		</vrow>
		<vrow class="row" align="center">
			<vcol span="75"><view class="col">
			<view>Version 0.0.1</view>	
			</view>
			</vcol>
		</vrow>
		<vrow class="row" align="center">
			<vcol span="75"><view class="col">
				<list text="功能介绍" class="list"></list>
			</view></vcol>
		</vrow>
		<vrow class="row" align="center">
			<vcol span="75"><view class="col">
				<list text="团队介绍" class="list"></list>
			</view></vcol>
		</vrow>
		<vrow class="row" align="center">
			<vcol span="75"><view class="col">
				<list text="郑重鸣谢" class="list"></list>
			</view></vcol>
		</vrow>
		<view class="foot">
				<view>Ten-AI团队 版权所有</view>
				<view>Copyright&copy;2019 TA All Rights Reserved.</view>
				<view></view>
		</view>
		
	</view>
</template>

<script>
import vrow from '../../components/lml-layout/row.vue';
import vcol from '../../components/lml-layout/col.vue';
import list from "../../components/andy-adcell/andy-adcell.vue"
export default {
	data() {
		return {};
	},
	components:{
		list
	}
};
</script>

<style lang="scss">
.row {
	background: #FFFFFF;
}
.col {
	display: flex;
	justify-content: center;
	flex-wrap: wrap;
	background: #FFFFFF;
	border-radius: 20upx;
	color:  #000000;
	font-size: 30upx;
	line-height: 45upx;
	margin-top: 10upx;
	
	.icon{
		width: 300upx;
		height: 300upx;	
	}
	.list{
		width: 600upx;
		line-height: 30upx;
		border: 0upx !important;
		
	}
}
.foot{
		position: fixed;
		bottom: 145upx;
		color: #999999;
		font-size: 25upx;
		line-height: 35upx;
		width: 100%;
		text-align: center;
	}
</style>
