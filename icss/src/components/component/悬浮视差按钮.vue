<template>
	<div class="bruce flex-ct-x" data-title="悬浮视差按钮">
		<a class="parallax-btn" data-name="妙用CSS变量，让你的CSS变得更心动"></a>
	</div>
</template>

<style lang="scss" scoped>
.bruce {
	transform: perspective(800px);
	transform-style: preserve-3d;
}
.parallax-btn {
	position: relative;
	width: 400px;
	height: 50px;
	cursor: pointer;
	user-select: none;
	line-height: 50px;
	text-align: center;
	font-size: 18px;
	color: #fff;
	&::before {
		position: absolute;
		left: 0;
		right: 0;
		top: 0;
		bottom: 0;
		border-radius: 4px;
		background: linear-gradient(135deg, #6e8efb, #a777e3);
		box-shadow: 0 2px 5px rgba(#000, .2);
		content: "";
		will-change: transform;
		transform: translateY(var(--ty, 0)) rotateX(var(--rx, 0)) rotateY(var(--ry, 0)) translateZ(var(--tz, -12px));
		transition: box-shadow 500ms ease, transform 200ms ease;
	}
	&::after {
		display: inline-block;
		position: relative;
		font-weight: bold;
		content: attr(data-name);
		will-change: transform;
		transform: translateY(var(--ty, 0)) rotateX(var(--rx, 0)) rotateY(var(--ry, 0));
		transition: transform 200ms ease;
	}
	&:hover::before {
		box-shadow: 0 5px 15px rgba(#000, .3);
	}
}
</style>

<script lang="ts">
import { defineComponent, onMounted } from "vue";

export default defineComponent({
	setup() {
		onMounted(() => {
			const btn = document.getElementsByClassName("parallax-btn")[0];
			const btnStyle = btn.style;
			const btnRect = btn.getBoundingClientRect();
			btn.addEventListener("mousemove", e => {
				const dx = e.offsetX - btnRect.width / 2;
				const dy = e.offsetY - btnRect.height / 2;
				btnStyle.setProperty("--rx", `${dy / -1}deg`);
				btnStyle.setProperty("--ry", `${dx / 10}deg`);
			});
			btn.addEventListener("mouseup", () => {
				btnStyle.setProperty("--tz", "-12px");
			});
			btn.addEventListener("mousedown", () => {
				btnStyle.setProperty("--tz", "-25px");
			});
			btn.addEventListener("mouseleave", () => {
				btnStyle.setProperty("--ty", "0");
				btnStyle.setProperty("--rx", "0");
				btnStyle.setProperty("--ry", "0");
			});
		});
	}
});
</script>