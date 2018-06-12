<template lang="html">
<div class="list">
	<ul>

		<li v-for="(item,index) of categoryList">
				<span class="item-titile-iocn"></span>
			{{item.title}}</li>
	</ul>
</div>
</template>

<script>
export default {
	props: {
		categoryList:Array
	}
}
</script>

<style lang="css">
/*@import "@/assets/styles/varibies.styl"*/

.item-titile-iocn{
	position: relative;
  left:.06rem;
  top:.06rem;
  display:inline-block;
  width:.36rem;
  height:.36rem;
  background:url(http://s.qunarzz.com/piao/image/touch/sight/detail.png) 0 -0.45rem no-repeat;
  margin-right:.1rem;
  background-size:.4rem 3rem;
			}
</style>
