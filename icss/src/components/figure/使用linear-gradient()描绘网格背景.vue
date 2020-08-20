<template>
	<div class="bruce flex-ct-x" data-title="使用linear-gradient()描绘网格背景">
		<div class="grid-bg"></div>
	</div>
</template>

<style lang="scss" scoped>
.grid-bg {
	width: 500px;
	height: 300px;
	background-color: #3c9;
	background-image: linear-gradient(0deg, #fff 5%, transparent 5%, transparent),
		linear-gradient(90deg, #fff 5%, transparent 5%, transparent);
	background-position: 0 0, 20px 20px;
	background-size: 20px 20px;
}
</style>