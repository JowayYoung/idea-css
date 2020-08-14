<template>
	<div class="bruce flex-ct-x" data-title="使用animation-delay保留动画起始帧">
		<ul class="initial-keyframe">
			<li></li>
			<li></li>
			<li></li>
		</ul>
	</div>
</template>

<style lang="scss" scoped>
.bruce {
	padding: 150px 0;
}
.initial-keyframe {
	position: relative;
	width: 100px;
	height: 100px;
	li {
		position: absolute;
		border-radius: 100%;
		width: 100%;
		height: 100%;
		background-color: #3c9;
		transform: rotate(0) translate(-80px, 0);
		animation: rotate 3s linear infinite;
		&:nth-child(2) {
			animation-delay: -1s;
		}
		&:nth-child(3) {
			animation-delay: -2s;
		}
	}
}
@keyframes rotate {
	to {
		transform: rotate(1turn) translate(-80px, 0);
	}
}
</style>