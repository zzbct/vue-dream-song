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
			<div v-for="i in limit" :class="i==pos?'tc-magiclamp-control-lock':'tc-magiclamp-control-active'"></div>
		</div>
	</div>
</template>
<script>
   export default {
     name: 'tc-magiclamp',
     created () {
     	this.getdata()
     },
	 data () {
	   return {
	   	 path: '',
	   	 pos: 0,
	   	 limit: 0
	   }
	 },
	 methods: {
	    //获取图片url
	    getdata: function() {
	      let vm =this;
      	  vm.$http.get('img')
      	    .then(function (response) {
      	       vm.path = response.data[vm.pos++].picUrl
      	  	   vm.rotateImg(response.data)
      	    })
      	   .catch(function (response) {
      	  	  console.log(response)
      	   });
      	},
        //limit---幻灯片张数
	 	rotateImg (data) {
	 	  let vm = this;
	 	  vm.limit = data.length;
 	  	  setInterval(function(){
 	  	    if(vm.pos == vm.limit) vm.pos=0
 	  	  	vm.path = data[vm.pos].picUrl
 	  	  	vm.pos++
 	  	  },3000)
	    },
	 }
   }
</script>