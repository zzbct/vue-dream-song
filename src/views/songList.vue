<!-- 歌单 -->
<template>
	<div>
	   <shift-bar></shift-bar>
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