<!-- 一个歌单下的页面 -->
<template>
    <div>
       <view-control>歌单</view-control>
	     <view-choose>播放全部</view-choose>
	     <view-list></view-list>
       <footbar></footbar>
    </div>
</template>
<script>
   import viewControl from '../components/listInfo/viewControl'
   import viewChoose from '../components/listInfo/viewChoose'
   import viewList from '../components/listInfo/viewList'
   import footbar from '../components/footBar'
   export default {
   	 components: {
   	 	viewControl,
   	 	viewChoose,
   	 	viewList,
      footbar
   	 }
   }
</script>