<!-- 播放设置--播放全部、多选 -->
<style lang="less">
	.tc-viewchoose {
		height: 3em;
		line-height: 3em;
		display: flex;
		justify-content: space-between;
		&-left {
			font-size: 0.8em;
		}
		&-right {
			font-size: 0.72em;
		}
	}
</style>
<template>
    <div class="tc-viewchoose">
       <div class="tc-viewchoose-left">
       	  <span class="icon-solid-play-off"></span>
    	  <slot></slot>
    	  <span style="color:gray;font-size:0.9em">(歌曲数)</span>
       </div>
       <div class="tc-viewchoose-right">
       	  <span class="icon-pick-more"></span>
       	  <span>多选</span>
       </div>
    </div>
</template>