<template>
	<div class="bruce flex-ct-x" data-title="使用conic-gradient()描绘彩色饼图">
		<div class="pie-chart"></div>
	</div>
</template>

<style lang="scss" scoped>
.pie-chart {
	border-radius: 100%;
	width: 300px;
	height: 300px;
	background-image: conic-gradient(#f66 0 25%, #66f 25% 30%, #f90 30% 55%, #09f 55% 70%, #3c9 70% 100%);
}
</style>