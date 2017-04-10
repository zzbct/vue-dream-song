<!-- 用于歌单路由的筛选栏 -->
<style lang="less">
   .tc-shiftbar {
     padding: 1em 0;
     &-left {
      display: inline-block;
     	height: 2em;
      margin-bottom: 0.8em;
     	padding: 0 0.8em;
     	box-sizing: border-box;
     	background: none;
     	border-radius: 0.4em;
     	border: 1px solid #bbb;
     	font-size: 0.7em;
     	line-height: 2em;
     	span {
     		color: #333;
     	}
      &:hover {
        background-color: #eee;
      }
     }
     &-tags {
          font-size: 0.7em;
          color: #333;
     }
     &-item {
          position: relative;
          padding: 0 0.8em;
          font-size: 0.7em;
          color: #777;
          &:hover {
            cursor: pointer;
            color: #333;
          }
          &:after{
               position: absolute;
               content: "";
               top: 10%;
               right: 0;
               width: 1px;
               height: 80%;
               background-color: #777;
          }
          &:last-child {
               &:after {
                  background-color: #fff;
               }
          }
     }
   }
</style>
<template>
   <div class="tc-shiftbar">
	<div class="tc-shiftbar-left">
	  <span>{{cat}}</span>
	  <span>></span>
	</div>
	<div>
        <span class="tc-shiftbar-tags">热门标签:</span>
        <span class="tc-shiftbar-item" v-for="item in items">
            {{item}}
        </span>
	</div>
  </div>
</template>
<script>
   export default {
	name: 'tc-shiftbar',
	props: {
	  items: {
	    type: Array,
	    default: function(){
	      return ['华语','流行','摇滚','民谣','电子','轻音乐','影视原声','ACG','怀旧','治愈']
	    }
	  }
	},
     data() {
       return {
         cat:  '全部歌单'
       }
     }
   }
</script>