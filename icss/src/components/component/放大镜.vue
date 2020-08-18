<template>
	<div class="bruce flex-ct-y" data-title="放大镜">
		<div class="magnifier" @mousemove="move"></div>
	</div>
</template>

<style lang="scss" scoped>
$ratio: 2;
$box-w: 600px;
$box-h: 400px;
$box-bg: "https://yangzw.vip/static/codepen/gz.jpg";
$outbox-w: $box-w * $ratio;
$outbox-h: $box-h * $ratio;
.magnifier {
	overflow: hidden;
	position: relative;
	width: $box-w;
	height: $box-h;
	background: url($box-bg) no-repeat center/100% 100%;
	&::before {
		--size: 0;
		$scale-x: calc(-1 * #{$ratio} * var(--x) + var(--size) / #{$ratio});
		$scale-y: calc(-1 * #{$ratio} * var(--y) + var(--size) / #{$ratio});
		position: absolute;
		left: var(--x);
		top: var(--y);
		border-radius: 100%;
		width: var(--size);
		height: var(--size);
		background: #333 url($box-bg) no-repeat;
		background-position-x: $scale-x;
		background-position-y: $scale-y;
		background-size: $outbox-w $outbox-h;
		box-shadow: 1px 1px 3px rgba(#000, .5);
		content: "";
		transform: translate3d(-50%, -50%, 0);
		transition: all 200ms ease;
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