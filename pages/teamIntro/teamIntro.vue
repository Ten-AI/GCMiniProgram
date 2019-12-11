<template>
	<view>
		<specialBanner :banner-list="bannerList" :swiper-config="swiperConfig"></specialBanner>
	</view>
</template>

<script>
	import specialBanner from "../../components/EtherealWheat-banner/specialBanner.vue"
	export default {
		data() {
		    return {
		        bannerList: [{
		            picture: 'http://image.mishi.cn/r/yry_h5_test/detail/3_1535359279285.png',
		            title: '七夕将至：时光足够久，韧性也能炖出味',
		            description: '一万年太久，就现在，给你爱',
		            path: ''
		        }, {
		            picture: 'http://image.mishi.cn/r/yry_h5_test/detail/2_1535359240426.png',
		            title: '新菜上架：无边海洋，找到顺眼的那尾鱼',
		            description: '花中樱，鱼乃鲷花中樱，鱼乃鲷',
		            path: ''
		        }, {
		            picture: 'http://image.mishi.cn/r/yry_h5_test/detail/1_1535359204228.png',
		            title: '在湘西的烟火气里，发现苗族少女的神明',
		            description: '取材自湘西苗族传统的烟熏文化',
		            path: ''
		        }, {
		            picture: 'http://image.mishi.cn/r/yry_h5_test/detail/4_1535359327213.png',
		            title: '福利降临，陪伴独自行走的丰盛旅程',
		            description: '在自己的小世界里，日日好日，夜夜好清宵',
		            path: ''
		        }],
		        swiperConfig: {
		            indicatorDots: true,
		            indicatorColor: 'rgba(255, 255, 255, .4)',
		            indicatorActiveColor: 'rgba(255, 255, 255, 1)',
		            autoplay: false,
		            interval: 3000,
		            duration: 300,
		            circular: true,
		            previousMargin: '58rpx',
		            nextMargin: '58rpx'
		        }
		    }
		},
		components:{
			specialBanner
		}
	}
</script>

<style lang="scss">

</style>
