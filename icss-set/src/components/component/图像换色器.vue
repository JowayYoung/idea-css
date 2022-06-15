<template>
	<div class="bruce" data-title="图像换色器">
		<div class="color-changer">
			<input type="color" value="#ff6666">
			<img src="https://static.yangzw.vip/codepen/car.jpg">
		</div>
	</div>
</template>

<style lang="scss" scoped>
.bruce {
	padding: 0;
}
.color-changer {
	overflow: hidden;
	position: relative;
	height: 100%;
	input {
		position: absolute;
		width: 100%;
		height: 100%;
		mix-blend-mode: hue;
		cursor: pointer;
	}
	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
}
</style>