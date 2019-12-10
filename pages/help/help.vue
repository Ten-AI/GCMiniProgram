<template>
	<view>
		<uni-section title="关于图片识别机制" type="line"></uni-section>
		<uni-notice-bar showIcon="true" text="本小程序图片识别部分采用深度学习算法,自主训练模型,非调用API实现"></uni-notice-bar>
	</view>
</template>

<script>
	import uniNoticeBar from "../../components/uni-notice-bar/uni-notice-bar.vue"
	import uniSection from "../../components/uni-section/uni-section.vue"
	export default {
		data() {
			return {
				
			};
		},
		components:{
			uniNoticeBar,
			uniSection
		}
	}
</script>

<style lang="scss">

</style>
