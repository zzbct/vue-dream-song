<!-- 作为置顶导航菜单 -->
<style lang="less">
  .tc-topbar {
  	height: 3em;
  	padding: 0 0.5em;
  	background: #ce3d3e;
  	display: flex;
  	justify-content: space-between;
  	align-items: center;
  	color: #fff;
  	&-subject {
  	  display: flex;
  	  width: 50%;
  	  justify-content: space-around;
  	  font-size: 1em;
    }
    &-subject-active {
    	color: #e0e0e0;
    }
  }
</style>
<template>
  <div class="tc-topbar">
  	<div class="tc-topbar-left">
  		<slot name="left"></slot>
  	</div>
  	<div class="tc-topbar-subject">
  		<slot>
  			<div v-for="title in titles">
  			      <span :class="['tc-topbar-subject-' + title.state]">{{title.value}}</span>
  			</div>
  		</slot>
  	</div>
  	<div class="tc-topbar-right">
  		<slot name="right"></slot>
  	</div>
  </div>
</template>
<script>
   export default {
	 name: 'tc-topbar',
	 props: {
	   titles: {
	     type: Array,
	     default: []
	   }
	 }
   }
</script>
