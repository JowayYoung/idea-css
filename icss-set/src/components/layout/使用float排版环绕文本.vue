<template>
	<div class="bruce flex-ct-x" data-title="使用float排版环绕文本">
		<div class="text-wrapping">
			<img src="https://static.yangzw.vip/codepen/thor.jpg">
			XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
		</div>
	</div>
</template>

<style lang="scss" scoped>
.text-wrapping {
	overflow: hidden;
	width: 400px;
	height: 300px;
	font-size: 20px;
	color: #f66;
	word-break: break-all;
	img {
		float: left;
		margin: 10px;
		height: 200px;
	}
}
</style>