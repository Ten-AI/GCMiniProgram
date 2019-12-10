<!-- 行组件 -->
<template>
    <view class="row" :style="'justify-content:'+align ">
		<view v-if="retract!=0" :class="'row-'+retract"></view>
        <slot></slot>
    </view>
</template>
<script>
    export default {
        name: 'Row',
        props: {           
            align:{
                type:String,
				default: 'flex-start',                
            },
		   retract: {
			   type: [Number, String],
			   default:0
		   }
			
        },        
        mounted() {            
        }
    }
</script>
<style scoped lang="less">
	view {
		box-sizing: border-box;
	}
    .row {
		box-sizing: border-box;
        display: flex;
        flex-wrap: wrap;
    }
	.loop(@n, @i:1) when (@i <= @n) {
	    .row-@{i} {
	        width: (@i / 100) *750upx;           
	    }
	    .loop(@n, (@i + 1));
	}  
	.loop(100);	
</style>