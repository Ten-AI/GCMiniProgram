<template>
	<view>
		<profileList text="头像" showArrow="false">
			<view class="icon">
				<image :src="user.icon"></image>
			</view>
		</profileList>
		<profileList text="昵称" :detail = "user.nickName"></profileList>
		<profileList text="性别" :detail="user.gender"></profileList>
		<profileList text="地址" :detail="user.address"></profileList>
		<profileList text="电子邮箱" :detail="user.email"></profileList>
		<profileList text="个性签名" :detail="user.motto"></profileList>
	</view>
</template>

<script>
import profileList from '../../components/andy-adcell/andy-adcell.vue';
export default {
	data() {
		return {
			user: {
				icon:'../../static/logo.png',
				nickName: 'Jack',
				gender: '男',
				address: '江西赣州',
				email: '1473675314@qq.com',
				motto: '江东子弟多才俊，卷土重来未可知。'
			}
		};
	},
	components: {
		profileList
	}
};
</script>

<style lang="scss">
	.icon{
		width: 50upx;
		height: 50upx;
		margin-right: 30upx;
		margin-bottom: 20upx;
		
		image{
		width: 40px;
		height: 70upx;
		line-height: 30upx;
		}
	}
</style>
