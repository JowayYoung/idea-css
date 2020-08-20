<template>
	<div class="bruce flex-ct-x" data-title="使用linear-gradient()描绘方格背景">
		<div class="square-bg"></div>
	</div>
</template>

<style lang="scss" scoped>
.square-bg {
	width: 500px;
	height: 300px;
	background-image: linear-gradient(45deg, #eee 25%, transparent 25%, transparent 75%, #eee 75%),
		linear-gradient(45deg, #eee 25%, transparent 25%, transparent 75%, #eee 75%);
	background-position: 0 0, 20px 20px;
	background-size: 40px 40px;
}
</style>