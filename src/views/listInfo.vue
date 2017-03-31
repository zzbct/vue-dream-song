<!-- 一个歌单下的页面 -->
<template>
    <div>
       <view-control>歌单</view-control>
	   <view-choose>播放全部</view-choose>
    </div>
</template>
<script>
   import viewControl from '../components/listInfo/viewControl'
   import viewChoose from '../components/listInfo/viewChoose.vue'
   export default {
   	 components: {
   	 	viewControl,
   	 	viewChoose
   	 }
   }
</script>