<template>
	<div class="bruce" data-title="使用mask雕刻镂空背景">
		<div class="mask-bg">
			<div></div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
$mask-bg: "https://static.yangzw.vip/codepen/mountain.jpg";
$mask-text: "https://static.yangzw.vip/codepen/snow.jpg";
$logo: "../../assets/img/logo-netease.svg";
.bruce {
	padding: 0;
	height: 400px;
}
.mask-bg {
	display: flex;
	overflow: hidden;
	justify-content: center;
	align-items: center;
	position: relative;
	height: 100%;
	&::after {
		position: absolute;
		left: -20px;
		right: -20px;
		top: -20px;
		bottom: -20px;
		background: url($mask-bg) no-repeat center/cover;
		filter: blur(10px);
		content: "";
	}
	div {
		position: relative;
		z-index: 9;
		width: 600px;
		height: 300px;
		background: url($mask-text) left center/150% auto;
		mask: url($logo) center/cover;
		animation: move 10s infinite;
	}
}
@keyframes move {
	0% {
		background-position-x: 0;
	}
	50% {
		background-position-x: 100%;
	}
}
</style>