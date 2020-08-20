<template>
	<div class="bruce flex-ct-x" data-title="使用outline描绘内部边框">
		<div class="outside-border"></div>
	</div>
</template>

<style lang="scss" scoped>
.outside-border {
	border: 10px dashed #f90;
	width: 300px;
	height: 300px;
	outline: 10px dashed #09f;
	outline-offset: -50px;
	background-color: #3c9;
}
</style>