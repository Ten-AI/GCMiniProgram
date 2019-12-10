<!-- 列组件 -->
<template>		
    <view :class="'col-'+span">		
        <slot></slot>
    </view>	
</template>
<script>    
    export default {
        name: 'Col',
        props: {
            span: {
                type: [Number, String]
            }         
        },
        data() {               
            return {              
            }
        }
    }
</script>
<style scoped lang="less">
    .loop(@n, @i:1) when (@i <= @n) {
        .col-@{i} {
            width: (@i / 100) *750upx;           
        }
        .loop(@n, (@i + 1));
    }  
    .loop(100);    
</style>