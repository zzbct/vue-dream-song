<!-- 个性推荐 -->
<template>
	<div>
	   <!-- 走马灯区域 -->
	   <magic-lamp></magic-lamp>
	   <!-- 底部音乐播放状态 -->
	   <footbar></footbar>
	</div>
</template>
<script>
   import footbar from '../components/footBar'
   import magicLamp from '../components/magicLamp.vue'
   export default {
   	 components: {
   	 	footbar,
   	 	magicLamp
   	 }
   }
</script>