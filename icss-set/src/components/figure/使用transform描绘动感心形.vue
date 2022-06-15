<template>
	<div class="bruce flex-ct-y" data-title="使用transform描绘动感心形">
		<div class="heart-shape"></div>
	</div>
</template>

<style lang="scss" scoped>
.bruce {
	padding: 150px 0 100px;
}
.heart-shape {
	position: relative;
	width: 200px;
	height: 200px;
	background-color: #f66;
	transform: rotate(45deg);
	&::before,
	&::after {
		position: absolute;
		left: 0;
		top: 0;
		border-radius: 100%;
		width: 100%;
		height: 100%;
		background-color: #f66;
		content: "";
	}
	&::before {
		transform: translateX(-50%);
	}
	&::after {
		transform: translateY(-50%);
	}
}
</style>