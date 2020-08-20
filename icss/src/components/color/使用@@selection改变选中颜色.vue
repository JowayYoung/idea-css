<template>
	<div class="bruce flex-ct-x" data-title="使用::selection改变选中颜色">
		<div class="select-color">
			<p>全局选择文字颜色</p>
			<p>全局选择文字颜色</p>
			<p class="special">局部选择文字颜色</p>
		</div>
	</div>
</template>

<style lang="scss" scoped>
::selection {
	background-color: #66f;
	color: #fff;
}
.select-color {
	line-height: 50px;
	font-weight: bold;
	font-size: 30px;
	color: #f66;
	p.special::selection {
		background-color: #3c9;
	}
}
</style>