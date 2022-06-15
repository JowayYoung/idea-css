<template>
	<div class="bruce flex-ct-y" data-title="放大镜">
		<div class="magnifier" @mousemove="move"></div>
	</div>
</template>

<style lang="scss" scoped>
$ratio: 2;
$box-w: 600px;
$box-h: 400px;
$box-bg: "https://static.yangzw.vip/codepen/gz.jpg";
$outbox-w: $box-w * $ratio;
$outbox-h: $box-h * $ratio;
.magnifier {
	--x: 0;
	--y: 0;
	overflow: hidden;
	position: relative;
	width: $box-w;
	height: $box-h;
	background: url($box-bg) no-repeat center/100% 100%;
	cursor: pointer;
	&::before {
		--size: 0;
		$scale-x: calc(var(--size) / #{$ratio} - #{$ratio} * var(--x));
		$scale-y: calc(var(--size) / #{$ratio} - #{$ratio} * var(--y));
		position: absolute;
		left: var(--x);
		top: var(--y);
		border-radius: 100%;
		width: var(--size);
		height: var(--size);
		background: #333 url($box-bg) no-repeat $scale-x $scale-y/$outbox-w $outbox-h;
		box-shadow: 1px 1px 3px rgba(#000, .5);
		content: "";
		will-change: left, top;
		transform: translate(-50%, -50%);
	}
	&:hover::before {
		--size: 100px;
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