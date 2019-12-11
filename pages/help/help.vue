<template>
	<view>
		<uni-section title="关于软件使用Tips" type="line"></uni-section>
		<uni-notice-bar  text="在使用图片识别分类功能时,为了提升识别准确率,请确保识别主体背景通透,不包含杂物."></uni-notice-bar>
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
