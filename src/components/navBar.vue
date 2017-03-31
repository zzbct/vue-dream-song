<style lang="less">
   .tc-navbar {
   	 height: 2em;
   	 line-height: 2em;
   	 display: flex;
   	 justify-content: space-around;
   	 align-items: center;
   	 color: #666;
   	 div {
   	 	flex: 1;
   	 	height: 100%;
   	 	text-align: center;
   	 	font-size: 0.7em;
   	 }
   	 &-lock {
   	 	position: relative;
   	 	&:after {
   	 		content: "";
   	 		position: absolute;
   	 		top: 100%;
   	 		left: 0;
   	 		width: 100%;
   	 		height: 0.2em;
   	 		background-color: #ce3d3e;
   	 	}
         a {
            color: #ce3d3e;
         }
   	 }
   }
</style>
<template>
   <div class="tc-navbar">
   	  <div @click="splitState(item)" v-for='item in navs' :class="['tc-navbar-'+item.state]">
   	     <router-link :to=item.name>{{item.value}}</router-link>
   	  </div>
   </div>
</template>
<script>
   export default {
   	 name: 'tc-navbar',
   	 props: {
   	   navs: {
   	     type: Array,
   	     default: []
   	   }
   	 },
       methods: {
         splitState (property) {
           for(let unit of this.navs){
             unit.state = 'active';
           }
           property.state = 'lock';
         }
       }
   }
</script>