<!-- 首页 -->
<template>
   <div>
   	 <topbar :titles='title'>
		<span class="icon-menu" slot="left"></span>
		<span class="icon-search" slot="right"></span>
	 </topbar>
	 <navbar :navs="navs"></navbar>
	 <router-view></router-view>
	 <!-- 底部音乐播放状态 -->
	 <footbar></footbar>
   </div>
</template>
<script>
import topbar from '../components/topBar'
import navbar from '../components/navBar'
import footbar from '../components/footBar'
export default {
  data () {
  	return {
  	  title: [
	    {value: "我的",state: "active"},
	    {value: "发现",state: "lock"},
	    {value: "动态",state: "active"}
	  ],
      navs: [
	    {value: '个性推荐',state: 'lock',name: '/recommend'},
   		{value: '歌单',state: 'active',name: '/songList'},
   		{value: '主播电台',state: 'active',name: '/radio'},
   	    {value: '排行榜',state: 'active',name: '/charts'}
	  ]
  	}
  },
  components: {
	topbar,
	navbar,
	footbar
  }
}
</script>
