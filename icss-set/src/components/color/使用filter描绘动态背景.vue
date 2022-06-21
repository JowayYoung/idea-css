<template>
	<div class="bruce flex-ct-x" data-title="使用filter描绘动态背景">
		<div class="dynamic-desc-bg">
			<a></a>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.dynamic-desc-bg {
	--x: 0;
	--width: 400;
	--angle: calc(var(--x) / var(--width) * 1turn);
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 100px;
	background-color: #3c9;
	filter: hue-rotate(var(--angle));
	a {
		overflow: hidden;
		border-radius: 25px;
		width: calc(var(--width) * 1px);
		height: 50px;
		background-color: #66f;
		box-shadow: 0 0 2px rgba(#000, .5);
		cursor: pointer;
		line-height: 50px;
		font-weight: bold;
		font-size: 18px;
		color: #fff;
	}
}
</style>

<script lang="ts">
import { defineComponent, onMounted } from "vue";

export default defineComponent({
	setup() {
		onMounted(() => {
			const bg = document.getElementsByClassName("dynamic-desc-bg")[0];
			const btn = bg.getElementsByTagName("a")[0];
			btn.addEventListener("mousemove", e => bg.style.setProperty("--x", e.offsetX));
		});
	}
});
</script>