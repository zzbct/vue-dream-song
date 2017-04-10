<!-- 栅格3*x -->
<style lang="less">
   .tc-gridbar {
     display: flex;
	 justify-content: start;
	 flex-wrap: wrap;
	 &-list {
	   box-sizing: border-box;
	   margin-bottom: 1em;
	   padding-right: 8px;
	   &-unit {
	   	 position: relative;
	   	 width: 7em;
	   	 height: 7em;
	   	 img {
	   	   width: 100%;
	   	   height: 100%;
	   	   &:hover {
	   	   	cursor: pointer;
	   	   }
	   	 }
	   	 div {
	   	   position: absolute;
	   	   color: #fff;
	   	   font-size: 0.6em;
	   	   span {
	   	   	 vertical-align: middle;
	   	   }
	   	 }
	   	 &-data {
	   	   padding: 0.2em 0.5em 0.2em 2em;
	   	   top: 0;
	   	   right: 0;
	   	   filter: progid:DXImageTransform.Microsoft.Gradient(startColorStr='#878787',endColorStr='#363636',gradientType='0');
           background: -moz-linear-gradient(left, rgba(135,135,135,0.1), rgba(54,54,54,0.5));
           background: -o-linear-gradient(left,rgba(135,135,135,0.1), rgba(54,54,54,0.5));
           background: -webkit-gradient(linear, 0% 0%, 100% 0%, from(rgba(135,135,135,0.1)), to(rgba(54,54,54,0.6)));
	   	 }
	   	 &-by {
	   	   box-sizing: border-box;
	   	   white-space: nowrap;
	   	   cursor: pointer;
	   	   padding: 0.5em;
	   	   width: 100%;
	   	   bottom: 0;
	   	   left: 0;
	   	   filter: progid:DXImageTransform.Microsoft.Gradient(startColorStr='#878787',endColorStr='#363636',gradientType='0');
           background: -moz-linear-gradient(left, rgba(135,135,135,0.1), rgba(54,54,54,0.5));
           background: -o-linear-gradient(left,rgba(135,135,135,0.1), rgba(54,54,54,0.5));
           background: -webkit-gradient(linear, 0% 0%, 0% 100%, from(rgba(135,135,135,0.1)), to(rgba(54,54,54,0.5)));
	   	   &-person {
	   	   	 display: inline-block;
	   	   	 overflow: hidden;
             text-overflow: ellipsis;
             white-space: nowrap;
             word-wrap: normal;
	   	   }
	   	 }
	   }
	   &-detail {
	   	 box-sizing: border-box;
	   	 padding: 0.5em;
	   	 width: 10em;
	   	 font-size: 0.7em;
	   	 color: black;
	   	 line-height: 160%;
	   	 word-wrap:break-word;
	   }
	 }
	 .icon-red {
	 	color: red;
	 }
	 .icon-yellow {
	 	color: #FFA500;
	 }
  }
</style>
<template>
   <div class="tc-gridbar">
	  <div @click="skipTo(list.id)" class="tc-gridbar-list" v-for="list in lists">
	    <div class="tc-gridbar-list-unit">
	    	<img :src="list.src">
	    	<div class="tc-gridbar-list-unit-data">
	    		<span class="icon-headset"></span>
	    	    <span>{{list.nb}}</span>
	    	</div>
	    	<div class="tc-gridbar-list-unit-by" :title="list.creater">
	    		<span class="icon-person-head"></span>
	    		<span class="tc-gridbar-list-unit-by-person">{{list.creater}}</span>
	    		<span :class="list.hasV>0?'icon-v icon-red':(list.hasWy>0?'icon-wy icon-red':(list.hasStar>0?'icon-star icon-yellow':''))"></span>
	    	</div>
	    </div>
	    <div class="tc-gridbar-list-detail">
	    	{{list.title}}
	    </div>
	  </div>
	</div>
</template>
<script>
	export default {
		created () {
			this.rennderList();
		},
		data () {
			return {
				lists: []
			}
		},
		methods: {
			rennderList () {
			  let _this = this;
	      	  _this.$http.get('songList')
	      	  .then(function (response) {
	      	  	_this.lists = response.data;
	      	  })
	      	  .catch(function (response) {
	      	  	console.log('err')
	      	  });
			},
			skipTo (id) {
			  var _this = this;
			  _this.$http.get('songList?id='+id)
	      	  .then(function (response) {
	      	  	console.log(response.data);
	      	  })
	      	  .catch(function (response) {
	      	  	console.log('err')
	      	  });
			    this.$router.push({ path: 'second/listInfo' });
			}
		}
	}
</script>