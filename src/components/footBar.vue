<!-- 显示上次播放的歌曲 -->
<style lang="less">
	.tc-footbar {
		height: 2.5em;
		padding: 0 0.5em;
		color: gray;
		display: flex;
		justify-content: space-between;
		align-items: center;
		&-left {
			display: flex;
			justify-content: space-between;
		    align-items: center;
			img {
				width: 1.5em;
				height: 100%;
				margin-right: 0.5em;
			}
			&-name {
				font-size: 0.7em;
				color: black;
				padding-bottom: 0.2em;
			}
			&-info {
				font-size: 0.6em;
			}
		}
	}
</style>
<template>
	<div class="tc-footbar">
	   <div class="tc-footbar-left">
	   	  <img src="../resource/img/song.png">
	   	  <div>
			<div class="tc-footbar-left-name">Tulips</div>
			<div class="tc-footbar-left-info">横划可以切换上下首哦</div>
		  </div>
	   </div>
	   <div class="tc-footbar-right">
	   	  <span class="icon-play-off"></span>
		  <span class="icon-menu"></span>
	   </div>
	</div>
</template>
<script>
   export default {
   	 name: 'tc-footbar'
   }
</script>