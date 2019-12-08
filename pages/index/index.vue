<template>
    <view class="index">
        <!-- 轮播图视图 swiper-item是每页的元素 -->
        <view class="swi">
        	<swiper :indicator-dots="false" :autoplay="true" :interval="5000" :duration="500" circular="true">
        	    <swiper-item>
        	         <image class="swpic" src="http://122.51.162.235:8080/static/image/banner1.png" mode="widthFix"></image>
        	    </swiper-item>
        	    <swiper-item>
        	         <image class="swpic" src="http://122.51.162.235:8080/static/image/banner2.png" mode="widthFix"></image>
        	    </swiper-item>
        	    <swiper-item>
        	         <image class="swpic" src="http://122.51.162.235:8080/static/image/banner3.png" mode="widthFix"></image>
        	    </swiper-item>
        		<swiper-item>
        		     <image class="swpic" src="http://122.51.162.235:8080/static/image/banner4.png" mode="widthFix"></image>
        		</swiper-item>
        	</swiper>
        </view>
		<image class="title" style="width: 100%; height: 80px;" src="http://122.51.162.235:8080/static/image/title.png" mode="aspectFit" ></image>
		<view class="search_wrapper">
			<inputSearch :dataSource="dataSource" @select="handleChange" placeholder="请输入垃圾名称" />
		</view>
		<image class="title2" src="../../static/title2.png" mode=""></image>
		<view class="image_wrapper">
			<image class="camera" @click="camera()" src="http://122.51.162.235:8080/static/image/button.png"></image>
	</view>
	<view  class="album" @click="image()" >从相册上传 ></view>
	<view class="foot">
		Powered By TenAI
	</view>
	</view>
</template>

<script>
	import inputSearch from '../../components/inputSearch/inputSearch.vue'
    export default {
        data() {
        			return {
        				dataSource: [{
        						id: 1,
        						name: '耐克1'
        					},
        					{
        						id: 2,
        						name: '耐克2'
        					}
        				],
        			};
        		},
		components: {
		        inputSearch
		    },
        methods: {
			camera:function(){
				uni.chooseImage({
					count: 1,
					sizeType:['original','compressed'],
					sourceType:['camera'],
					success:function(res){
						console.log(JSON.stringify(res.tempFilePaths));
					}
				});
			},
			image:function(){
				uni.chooseImage({
					count: 1,
					sizeType:['original','compressed'],
					sourceType:['album'],
					success:function(res){
						console.log(JSON.stringify(res.tempFilePaths));
					}
				});
			}
        }
    }
</script>

<style lang="scss">
    .index{
    		display: flex;
    		flex-direction: column;
    		justify-content: flex-start;
    		align-items: center;
    		flex-wrap: nowrap;
    		width: 100vw;
    		height: 100vh;
    	}
		.swi{
			width: 88%;
		}
        swiper{
    		margin: 50upx 20upx ;
    		width: 100%;
        }
		.swpic{
			width: 100%;
		}
        .title{
    		top: 340upx;
    		position: absolute;
    	}
		.search_wrapper{
			margin-top: 120upx;
			padding: 20upx;
			width: 480upx;
		}
		.image_wrapper{
			margin-top: 50upx;
		}
		.camera{
			height: 82upx;
			width: 328upx;
			top: 100upx;
		}
		.album{
			margin-top: 10upx;	
			align-content: center;
			color: #999999;
			font-size: 28upx;
		}
		.title2{
			margin-top: 20upx;
			height: 95upx;
			width: 285upx;
			
		}
		.foot{
			position: fixed;  
			bottom: 60upx;
			color: #999999;
		}
</style>
