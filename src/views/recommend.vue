<!-- 个性推荐 -->
<template>
	<div>
	   <!-- 走马灯区域 -->
	   <magic-lamp></magic-lamp>
	   <!-- 推荐歌单 -->
	   <second-bar>
	   	  <router-link to="songList">推荐歌单 ></router-link>
	   </second-bar>
	   <grid-bar></grid-bar>
	</div>
</template>
<script>
   import magicLamp from '../components/magicLamp'
   import secondBar from '../components/secondBar'
   import gridBar from '../components/gridBar'
   export default {
   	 components: {
   	 	magicLamp,
   	 	secondBar,
   	 	gridBar
   	 }
   }
</script>