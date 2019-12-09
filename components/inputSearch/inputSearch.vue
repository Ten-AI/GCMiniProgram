<template>
	<!--
	<inputSearch :dataSource="dataSource" @select="handleChange" placeholder="请输入商品名称" />
	//数据源
	dataSource: [{
			id: 1,
			name: '耐克1'
		},
		{
			id: 2,
			name: '耐克2'
		}
	],
	 
	 //用户点击获取的数据
	 handleChange(data) {
	 	console.log(data)
	 }
	 
	 -->
	<view class="input-group">
		<input :placeholder="placeholder" @input="search"  v-model="name" />
		<view class="ul" v-if="list.length > 0">
			<view class="li" v-for="(item,index) in list" :key="index" @tap="select(item)">{{item.key}}
			<view class="mini-btn">{{item.type}}</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			placeholder: String, //默认提示
			searchKey: String, //模糊搜索的key值
			dataSource: {
				type: Array,
				default: function() { //数据源
					return [];
				}
			}
		},
		data() {
			return {
				list: [],
				showControl:false
			};
		},
		destroyed() {
			clearTimeout(this.t);
		},
		methods: {
			search(e) {
				let val = e.detail.value;
				if(val){
					uni.request({
						url:'https://www.98api.cn/api/rubbish.php',
						method:"GET",
						data:{
							kw:val
						},
						header:{
							'content-type':'application/x-www-form-urlencoded',
						},
						success:(res) => {
							console.log(res)
							let dataSource = res.data;
							console.log("成功后",dataSource);
							// console.log(dataSource.length);
							this.list = dataSource;
						}
					});	
				} else {
					this.list = [];
				}
			}
		}
	}
</script>


<style lang="scss">
	.input-group {
		position: relative;


		input {
			border: 4upx solid gray;
			border-radius: 30upx;
			height: 90upx;
			padding-left: 10upx;
			font-size: 30upx;
			box-sizing: border-box;
		}

		.ul {
			display: block;
			border: 1upx solid #C0C0C0;
			border-radius: 25upx;
			position: absolute;
			margin-top: 5upx;
			margin-left: 5upx;
			left: 0;
			top: 100%;
			width: 100%;
			background:  #FFFFFF;

			.li {
				line-height: 60upx;
				margin: 20upx 15upx;
				
				.mini-btn{
				float: right;
				display: inline-block;
				text-align: center;
				color: #FFFFFF;
				background-color: #007AFF;
				border : 1upx solid #007AFF;
				border-radius: 10upx;
				}
			}
				
		}
	}
</style>
