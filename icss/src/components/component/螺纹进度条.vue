<template>
	<div class="bruce flex-ct-x" data-title="螺纹进度条">
		<div class="thread-progressbar"></div>
	</div>
</template>

<style lang="scss" scoped>
.thread-progressbar {
	position: relative;
	padding-right: 200px;
	width: 500px;
	height: calc(1.4142 * 20px);
	background: repeating-linear-gradient(45deg, #3c9, #3c9 10px, transparent 11px, transparent 19px, #3c9 20px) 0 0 content-box;
	animation: twill 1s linear infinite;
	&::after {
		position: absolute;
		width: 100%;
		height: 100%;
		background-image: linear-gradient(rgba(#000, .5), rgba(#fff, .5), rgba(#000, .5));
		content: "";
	}
}
@keyframes twill {
	to {
		background-position-y: calc(-1 * 1.4142 * 40px);
	}
}
</style>