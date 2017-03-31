<!-- 歌单 -->
<template>
	<div>
	   <div>
	      <img src="../resource/img/lamp6.jpg">
	   </div>
	   <shift-bar>
	    欧美
	   </shift-bar>
	   <grid-bar></grid-bar>
	</div>
</template>
<script>
   import gridBar from '../components/gridBar'
   import shiftBar from '../components/songlist/shiftBar'
   export default {
   	 components: {
   	 	gridBar,
   	 	shiftBar
   	 }
   }
</script>