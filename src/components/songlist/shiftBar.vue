<!-- 用于歌单路由的筛选栏 -->
<style lang="less">
   .tc-shiftbar {
   	 display: flex;
     justify-content: space-between;
     padding: 0.5em;
     &-left {
     	height: 2em;
     	padding: 0 0.8em;
     	box-sizing: border-box;
     	background: none;
     	border-radius: 1em;
     	border: 1px solid #bbb;
     	font-size: 0.7em;
     	line-height: 2em;
     	span {
     		color: #666;
     	}
     }
     &-item {
     	position: relative;
     	padding-left: 0.3em;
     	font-size: 0.7em;
     	color: #666;
     	&:after{
     		position: absolute;
     		content: "";
     		top: 0;
     		right: 0;
     		width: 1px;
     		height: 100%;
     		background-color: gray;
     	}
     	&:last-child {
     		&:after {
     		   background-color: #fff;
     		}
     	}
     }
   }
</style>
<template>
	<div class="tc-shiftbar">
	   <div class="tc-shiftbar-left">
			<slot></slot>
			<span>></span>
	   </div>
		<div>
			<span class="tc-shiftbar-item" v-for="item in items">
			   {{item}}
			</span>
		</div>
	</div>
</template>
<script>
	export default {
		name: 'tc-shiftbar',
		props: {
			items: {
				type: Array,
				default: function(){
				           return ['欧美','电子','古风']
			             }
			    }
		}
	}
</script>