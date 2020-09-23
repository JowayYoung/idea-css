<template>
	<div class="bruce flex-ct-x" data-title="专栏头像">
		<div class="article-avatar">
			<p class="left">JowayYoung</p>
			<p class="right">谈前端</p>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.article-avatar {
	display: flex;
	flex-flow: column wrap;
	justify-content: center;
	align-items: center;
	border-radius: 100%;
	width: 250px;
	height: 250px;
	background-color: #f66;
	box-shadow: 0 0 50px 5px rgba(#000, .2) inset;
	line-height: 50px;
	text-shadow: 5px 5px 10px rgba(#000, .5);
	font-weight: bold;
	font-size: 30px;
	color: #fff;
	.left {
		border-top: 3px solid #fff;
		text-indent: -1em;
	}
	.right {
		text-indent: 2em;
		font-size: 40px;
	}
}
</style>