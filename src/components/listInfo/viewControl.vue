<style lang="less">
   .tc-viewcontrol {
   	 background-color: #bbbb00;
   	 color: #fff;
   	 &-head {
   	 	padding: 0.5em;
   	 	display: flex;
   	    justify-content: space-between;
   	 }
   	 &-body {
   	 	display: flex;
   	 	justify-content: start;
   	 	div {
   	 		margin-left: 1em;
   	 	}
   	 	&-left {
   	 		position: relative;
   	 		&-detail {
   	 			position: absolute;
   	 			top: 0.5em;
   	 			right: 0.5em;
   	 			font-size: 0.6em;
		   	    span {
		   	      font-weight: 600;
		   	    }
   	 		}
   	 	}
   	 	&-right {
   	 		display: flex;
   	 		flex-direction: column;
   	 		justify-content: space-around;
   	 		font-size: 0.8em;
   	 	}
   	 }
   	 &-foot {
   	 	display: flex;
   	 	justify-content: space-around;
   	 	padding: 0.5em 0;
   	 	div {
   	 		text-align: center;
   	 	}
   	 }
   }
</style>
<template>
	<div class="tc-viewcontrol">
		<div class="tc-viewcontrol-head">
		    <div>
		    	<span class="icon-arrow-left"></span>
			    <slot></slot>
		    </div>
			<div>
				<span class="icon-search"></span>
			    <span class="icon-song-detail"></span>
			</div>
		</div>
		<div class="tc-viewcontrol-body">
			<div class="tc-viewcontrol-body-left">
				<img src="../../resource/img/list2.jpg">
				<div class="tc-viewcontrol-body-left-detail">
	    		  <span class="icon-headset"></span>
	    	      <span>165万</span>
	    	    </div>
			</div>
			<div class="tc-viewcontrol-body-right">
				<div>【节奏控】那些超带感的音乐（典藏版)</div>
				<div>KFM981 ></div>
			</div>
		</div>
		<div class="tc-viewcontrol-foot">
		    <div>
		        <span class="icon-new-folder"></span>
		        <div>252</div>
		    </div>
		    <div>
		        <span class="icon-comment"></span>
		        <div>4</div>
			</div>
			<div>
			    <span class="icon-share"></span>
			    <div>2</div>
			</div>
			<div>
			    <span class="icon-download"></span>
			    <div>下载</div>
		    </div>
		</div>
	</div>
</template>