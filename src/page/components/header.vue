<template>
	<div class='header'>
		<div class="goback">
			<span class="iconfont back-icon">&#xe624</span>
		</div>
	</div>
</template>

<script>
	export default {
		name:'Header'
	}
</script>

<style>
	.goback{
		width: 1rem;
		text-align: center;
		background-color: rgba(0, 0, 0, 0.3);
		height: 1rem;
		/*background: #000;*/
		position:fixed;
		top: .2rem;
		left: .2rem;
		border-radius: 50%;
		display: flex;
		flex-direction:column;

	}
	.back-icon{
		font-weight: bolder;
		line-height: 1rem;
		align-self: center;
	}
</style>
