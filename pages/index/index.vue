<template>
	<view class="index">
		<!-- 轮播图视图 swiper-item是每页的元素 -->
		<view class="swi">
			<swiper :indicator-dots="false" :autoplay="true" :interval="5000" :duration="500" circular="true">
				<swiper-item>
					<image class="swpic" src="http://qiniu.gc.ncucoder.com/banner1.png" mode="widthFix"></image>
				</swiper-item>
				<swiper-item>
					<image class="swpic" src="http://qiniu.gc.ncucoder.com/banner2.png" mode="widthFix"></image>
				</swiper-item>
				<swiper-item>
					<image class="swpic" src="http://qiniu.gc.ncucoder.com/banner3.png" mode="widthFix"></image>
				</swiper-item>
				<swiper-item>
					<image class="swpic" src="http://qiniu.gc.ncucoder.com/banner4.png" mode="widthFix"></image>
				</swiper-item>
			</swiper>
		</view>
		<image class="title" style="width: 100%; height: 80px;" src="http://qiniu.gc.ncucoder.com/title.png"
		 mode="aspectFit"></image>
		<view class="search_wrapper">
			<navigator url="../search/search"><inputSearch  placeholder="请输入垃圾名称搜索" /></navigator>
		</view>
		<image class="title2" src="http://qiniu.gc.ncucoder.com/title2.png" mode=""></image>
		<view class="image_wrapper">
			<image class="camera" @click="camera()" src="http://qiniu.gc.ncucoder.com/button.png"></image>
		</view>
		<view class="album" @click="image()">从相册上传 ></view>
	</view>
</template>

<script>
	import inputSearch from '../../components/inputSearch/inputSearch.vue'
	export default {
		data() {
			return {
				baseApi: 'https://gc.ncucoder.com/garbage/'
			}
		},
		components: {
			inputSearch
		},
		methods: {
			garbageClassify(fp) {
				uni.uploadFile({
					url: this.baseApi,
					filePath: fp,
					name: 'image',
					success: (uploadFileRes) => {
						// console.log(uploadFileRes)
						const data = JSON.parse(uploadFileRes.data)
						if (data.code === 200 || data.code === 404) {
							uni.navigateTo({
								url: '../result/result?name=' + data.name + '&t=' + data.kind + '&uploadImage=' + data.image_url
							})
						} else {
							console.log(data.content)
						}
						uni.hideLoading()
					}
				});
			},
			getSearch() {
				var _self = this;
				uni.request({
					url: 'https://service.xiaoyuan.net.cn/garbage/index/search',
					method: "GET",
					data: {
						kw: _self.searchKey
					},
					header: {
						'content-type': 'application/x-www-form-urlencoded',
					},
					success: (res) => {
						_self.dataSource = res.data.data;
						// console.log(_self.dataSource);
					}
				})
			},
			handleChange(data) {
				console.log(data);
			},
			camera: function() {
				const _self = this
				uni.chooseImage({
					count: 1,
					sizeType: ['original', 'compressed'],
					sourceType: ['camera'],
					success: function(res) {
						// console.log(res)
						uni.showLoading({
							title: '识别中'
						})
						_self.garbageClassify(res.tempFilePaths[0])
					}
				});
			},
			image: function() {
				const _self = this
				uni.chooseImage({
					count: 1,
					sizeType: ['original', 'compressed'],
					sourceType: ['album'],
					success: function(res) {
						// console.log(res)
						uni.showLoading({
							title: '识别中'
						})
						_self.garbageClassify(res.tempFilePaths[0])
					}
				});
			}
		}
	}
</script>

<style lang="scss">
	.index {
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: center;
		flex-wrap: nowrap;
		width: 100vw;
		height: 100vh;
	}

	.swi {
		width: 77%;
		margin: 50upx 30upx;
	}

	swiper {

		width: 99%;
	}

	.swpic {
		width: 100%;
	}

	.title {
		top: 340upx;
		position: absolute;
	}

	.search_wrapper {
		margin-top: 120upx;
		padding: 20upx;
		width: 480upx;
	}

	.image_wrapper {
		margin-top: 50upx;
	}

	.camera {
		height: 82upx;
		width: 328upx;
		top: 100upx;
	}

	.album {
		margin-top: 10upx;
		align-content: center;
		color: #999999;
		font-size: 28upx;
	}

	.title2 {
		margin-top: 20upx;
		height: 95upx;
		width: 285upx;

	}
</style>
