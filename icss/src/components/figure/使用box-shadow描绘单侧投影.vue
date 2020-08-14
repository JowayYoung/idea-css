<template>
	<div class="bruce flex-ct-x" data-title="使用box-shadow描绘单侧投影">
		<div class="aside-shadow">投影</div>
	</div>
</template>

<style lang="scss" scoped>
.aside-shadow {
	display: flex;
	justify-content: center;
	align-items: center;
	border: 1px solid;
	width: 100px;
	height: 100px;
	box-shadow: -7px 0 5px -5px #f90;
	font-weight: bold;
	font-size: 30px;
	color: #f90;
}
</style>