<template>
	<div class="bruce flex-ct-x" data-title="使用filter雕刻高斯模糊">
		<div class="glass-layer">
			<p>我武惟扬</p>
			<p>爱日惜力</p>
			<p>掘井及泉</p>
			<p>金榜题名</p>
		</div>
	</div>
</template>

<style lang="scss" scoped>
$mask-bg: "https://jowayyoung.github.io/static/img/icss/mountain.jpg";
.bruce {
	padding: 0;
}
.bruce,
.glass-layer::before {
	background: url($mask-bg) no-repeat center/cover fixed;
}
.glass-layer {
	display: flex;
	overflow: hidden;
	position: absolute;
	left: 50%;
	top: 50%;
	flex-flow: column wrap;
	justify-content: center;
	align-items: center;
	border-radius: 10px;
	width: 400px;
	height: 200px;
	background-color: rgba(#fff, .3);
	box-shadow: 0 0 5px rgba(#000, .3);
	line-height: 1.5;
	font-size: 16px;
	color: #fff;
	transform: translate(-50%, -50%);
	&::before {
		position: absolute;
		left: 0;
		right: 0;
		top: 0;
		bottom: 0;
		z-index: -1;
		filter: blur(30px);
		content: "";
	}
}
</style>