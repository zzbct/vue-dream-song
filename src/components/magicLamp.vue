<!-- 走马灯 -->
<style lang="less">
   .tc-magiclamp {
	 margin-top: 0.14em;
	 text-align: center;
	   &-control {
	   	 position: relative;
	   	 top: -1em;
	   	 display: flex;
	   	 justify-content: center;
	   	 div {
	   	   width: 0.4em;
	   	   height: 0.4em;
	   	   margin: 0 0.4em;
	   	   border-radius: 50%;
	   	   opacity: 0.5;
	   	 }
	   	 &-lock {
	   	 	background-color: #ce3d3e;
	   	 }
	   	 &-active {
	   	 	background-color: gray;
	   	 }
	   }
   }
</style>
<template>
	<div class="tc-magiclamp">
		<div class="tc-magiclamp-img">
			<img :src='path'>
		</div>
		<div class="tc-magiclamp-control">
			<div v-for="i in 6" :class="i==pos?'tc-magiclamp-control-lock':'tc-magiclamp-control-active'"></div>
		</div>
	</div>
</template>
<script>
   export default {
     name: 'tc-magiclamp',
     created () {
     	this.rotateImg(6)
     },
	 data () {
	   return {
	   	 path: require('../resource/img/lamp' + 0 + '.jpg'),
	   	 pos: 0
	   }
	 },
	 methods: {
	 	//limit---幻灯片张数
	 	rotateImg (limit) {
	 	  let vm = this;
 	  	  setInterval(function(){
 	  	    if(vm.pos==limit) vm.pos=0
 	  	  	vm.path = require('../resource/img/lamp' + vm.pos + '.jpg')
 	  	  	vm.pos++;
 	  	  },3000)
	    }
	 }
   }
</script>