<!-- 二级顶部 -->
<style lang="less">
   .tc-secondbar {
   	  height: 2.5em;
   	  font-size: 1em;
   	  border-top: 0.05em solid #ddd;
   	  &-span {
   	  	position: relative;
   	  	line-height: 2.5em;
   	  	padding: 0 0.5em;
   	  	&:after {
   	  		position: absolute;
   	  		content: "";
   	  		top: 0;
   	  		left: 0;
   	  		width: 0.1em;
   	  		height: 100%;
   	  		background-color: #ce3d3e;
   	  	}
   	  }
   }
</style>
<template>
	<div class="tc-secondbar">
		<span class="tc-secondbar-span">
			<slot></slot>
		</span>
	</div>
</template>