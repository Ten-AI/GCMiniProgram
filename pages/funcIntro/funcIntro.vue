<template>
	<view>
		<uni-section title="0.0.1版本更新" type="line"></uni-section>
		<view class="update">
			<view>1.更新了文字搜索功能,用户可以根据搜索垃圾名查询垃圾种类；</view>
			<view>2.更新了图片分类功能，用户可以对垃圾进行拍摄识别或者上传图片进行识别分类;</view>
			<view>3.更新了个人中心功能，用户可以通过识别垃圾，反馈识别结果等行为累计积分。</view>
		</view>
	</view>
</template>

<script>
	import uniSection from "../../components/uni-section/uni-section.vue"
	export default {
		data() {
			return {
				
			};
		},
		components:{
			uniSection
		}
	}
</script>

<style lang="scss">
.update{
	position: absolute;
	margin: 50upx 50upx;
	line-height: 50upx;
	
}
</style>
