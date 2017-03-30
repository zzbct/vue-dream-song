<!-- 栅格3*x -->
<style lang="less">
   .tc-gridbar {
     display: flex;
	 justify-content: space-between;
	 flex-wrap: wrap;
	 &-list {
	   margin-bottom: 1em;
	   padding-left: 1em;
	   &-unit {
	   	  width: 7em;
	   	  height: 7em;
	   	  img {
	   	  	width: 100%;
	   	  	height: 100%;
	   	  }
	   }
	 }
  }
</style>
<template>
   <div class="tc-gridbar">
	  <div class="tc-gridbar-list" v-for="p in path">
	    <div class="tc-gridbar-list-unit">
	    	<img :src="p">
	    </div>
	  </div>
	</div>
</template>
<script>
	export default {
		data () {
			return {
				path: [
					require('../resource/img/list0.jpg'),
					require('../resource/img/list1.jpg'),
					require('../resource/img/list2.jpg'),
					require('../resource/img/list3.jpg'),
					require('../resource/img/list4.jpg'),
					require('../resource/img/list5.jpg'),
					require('../resource/img/list6.jpg'),
					require('../resource/img/list7.jpg'),
				]
			}
		}
	}
</script>