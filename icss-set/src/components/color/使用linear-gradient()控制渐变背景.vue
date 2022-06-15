<template>
	<div class="bruce" data-title="使用linear-gradient()控制渐变背景">
		<div class="gradient-bg">iCSS</div>
	</div>
</template>

<style lang="scss" scoped>
.bruce {
	padding: 0;
	height: 400px;
}
.gradient-bg {
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100%;
	background: linear-gradient(135deg, #f66, #f90, #3c9, #09f, #66f) left center/400% 400%;
	font-weight: bold;
	font-size: 100px;
	color: #fff;
	animation: move 10s infinite;
}
@keyframes move {
	0%,
	100% {
		background-position-x: left;
	}
	50% {
		background-position-x: right;
	}
}
</style>