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
	   	 position: relative;
	   	 width: 7em;
	   	 height: 7em;
	   	 img {
	   	   width: 100%;
	   	   height: 100%;
	   	 }
	   	 &-data {
	   	   position: absolute;
	   	   top: 0.5em;
	   	   right: 0.5em;
	   	   color: #fff;
	   	   font-size: 0.6em;
	   	   span {
	   	     font-weight: 600;
	   	   }
	   	 }
	   }
	   &-detail {
	   	 box-sizing: border-box;
	   	 padding: 0.5em;
	   	 width: 10em;
	   	 font-size: 0.7em;
	   	 color: black;
	   }
	 }
  }
</style>
<template>
   <div class="tc-gridbar">
	  <div class="tc-gridbar-list" v-for="list in lists">
	    <div class="tc-gridbar-list-unit">
	    	<img :src="list.path">
	    	<div class="tc-gridbar-list-unit-data">
	    		<span class="icon-headset"></span>
	    	    <span>165万</span>
	    	</div>
	    </div>
	    <div class="tc-gridbar-list-detail">
	    	{{list.details}}
	    </div>
	  </div>
	</div>
</template>
<script>
	export default {
		data () {
			return {
				lists: [
					{
						path: require('../resource/img/list0.jpg'),
						details: '入耳便喜欢上的英文歌'
					},
					{
						path: require('../resource/img/list1.jpg'),
						details: '那些只听前奏就中毒的英文歌'
					},
					{
						path: require('../resource/img/list2.jpg'),
						details: '【节奏控】那些超带感的音乐（典藏版)'
					},
					{
						path: require('../resource/img/list3.jpg'),
						details: '入耳便喜欢上的英文歌'
					},
					{
						path: require('../resource/img/list4.jpg'),
						details: '入耳便喜欢上的英文歌'
					},
					{
						path: require('../resource/img/list5.jpg'),
						details: '入耳便喜欢上的英文歌'
					},
					{
						path: require('../resource/img/list6.jpg'),
						details: '入耳便喜欢上的英文歌'
					},
					{
						path: require('../resource/img/list7.jpg'),
						details: '入耳便喜欢上的英文歌'
					}
				]
			}
		}
	}
</script>