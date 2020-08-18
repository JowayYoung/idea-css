<template>
	<div class="bruce flex-ct-x" data-title="悬浮跟踪按钮">
		<a class="track-btn" @mousemove="move">
			<span>妙用CSS变量，让你的CSS变得更心动</span>
		</a>
	</div>
</template>

<style lang="scss" scoped>
.track-btn {
	overflow: hidden;
	position: relative;
	border-radius: 25px;
	width: 400px;
	height: 50px;
	background-color: #66f;
	cursor: pointer;
	line-height: 50px;
	text-align: center;
	font-weight: bold;
	font-size: 18px;
	color: #fff;
	span {
		position: relative;
		pointer-events: none; // 不加会卡顿
	}
	&::before {
		--size: 0;
		position: absolute;
		left: var(--x);
		top: var(--y);
		width: var(--size);
		height: var(--size);
		background-image: radial-gradient(circle closest-side, #09f, transparent);
		content: "";
		transform: translate3d(-50%, -50%, 0);
		transition: width 200ms ease, height 200ms ease;
	}
	&:hover::before {
		--size: 400px;
	}
}
</style>

<script>
export default {
	methods: {
		move(e) {
			e.target.style.setProperty("--x", `${e.offsetX}px`);
			e.target.style.setProperty("--y", `${e.offsetY}px`);
		}
	}
};
</script>