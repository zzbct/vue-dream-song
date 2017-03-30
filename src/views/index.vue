<!-- 首页 -->
<template>
    <top :titles="title">
		<span class="icon-menu" slot="left"></span>
		<span class="icon-search" slot="right"></span>
	</top>
</template>
<script>
import top from '../components/topBar'
export default {
  data () {
  	return {
  	  title: [
	    {value: "我的",state: "active"},
	    {value: "发现",state: "lock"},
	    {value: "动态",state: "active"},
	  ]
  	}
  },
  components: {
	top
  }
}
</script>
