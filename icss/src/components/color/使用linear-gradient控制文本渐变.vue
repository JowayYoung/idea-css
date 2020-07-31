<template>
	<div class="bruce flex-ct-x" data-title="使用linear-gradient控制文本渐变">
		<h1 class="gradient-text">Full Stack Developer</h1>
	</div>
</template>

<style lang="scss" scoped>
.gradient-text {
	background-image: linear-gradient(90deg, #f66, #f90);
	background-clip: text;
	line-height: 60px;
	font-size: 60px;
	animation: hue 5s linear infinite;
	-webkit-text-fill-color: transparent;
}
@keyframes hue {
	from {
		filter: hue-rotate(0);
	}
	to {
		filter: hue-rotate(-1turn);
	}
}
</style>