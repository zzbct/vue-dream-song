<!-- 排行榜 -->
<template>
   <div>
     <button @click="getdata">get</button>
	 <button @click="posdata">post</button>
   </div>
</template>
<script>
	export default {
      methods: {
      	getdata: function() {
      	  this.$http.get('img')
      	  .then(function (response) {
      	  	console.log(response.data)
      	  })
      	  .catch(function (response) {
      	  	console.log(response)
      	  });
      	},
      	posdata: function() {
      	  this.$http.post('/first',{})
      	  .then(function (response) {
      	  	console.log(response.data)
      	  })
      	  .catch(function (response) {
      	  	console.log(response)
      	  });
      	}
      }
	}
</script>