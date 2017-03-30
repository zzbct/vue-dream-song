<!-- 作为置顶导航菜单 -->
<style lang="less">
  .mu-topbar {
  	height: 50px;
  	padding: 0 20px;
  	background: #ce3d3e;
  	display: flex;
  	justify-content: space-between;
  	align-items: center;
  	font-size: 2em;
  	color: #fff;
  	&-subject {
  	  display: flex;
  	  width: 50%;
  	  justify-content: space-around;;
    }
    &-subject-active {
    	color: #e0e0e0;
    }
  }
</style>
<template>
  <div class="mu-topbar">
  	<div class="mu-topbar-left">
  		<slot name="left"></slot>
  	</div>
  	<div class="mu-topbar-subject">
  		<slot>
  			<div v-for="title in titles">
  			      <span :class="['mu-topbar-subject-' + title.state]">{{title.value}}</span>
  			</div>
  		</slot>
  	</div>
  	<div class="mu-topbar-right">
  		<slot name="right"></slot>
  	</div>
  </div>
</template>
<script>
	export default {
		name: 'mu-topbar',
		props: {
			titles: {
				type: Array,
				default: []
			}
		}
	}
</script>
