<!-- 个性推荐 -->
<template>
	<div>
	   <!-- 走马灯区域 -->
	   <magic-lamp></magic-lamp>
	   <!-- 推荐歌单 -->
	   <second-bar>
	   	  <router-link to="songList">推荐歌单 ></router-link>
	   </second-bar>
	   <!-- 底部音乐播放状态 -->
	   <footbar></footbar>
	</div>
</template>
<script>
   import footbar from '../components/footBar'
   import magicLamp from '../components/magicLamp'
   import secondBar from '../components/secondBar'
   export default {
   	 components: {
   	 	footbar,
   	 	magicLamp,
   	 	secondBar
   	 }
   }
</script>