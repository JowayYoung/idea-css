<template>
	<div ref="bg" class="bruce flex-ct-x" data-title="使用filter描绘动态背景">
		<a class="dynamic-bg" @mousemove="move"></a>
	</div>
</template>

<style lang="scss" scoped>
.bruce {
	--x: 0;
	--width: 400;
	--Θ: calc(var(--x) / var(--width) * 1turn);
	padding: 0;
	background-color: #3c9;
	filter: hue-rotate(var(--Θ));
}
.dynamic-bg {
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
</style>

<script>
export default {
	mounted() {
		this.bgStyle = this.$refs.bg.style;
	},
	methods: {
		move(e) {
			this.bgStyle.setProperty("--x", e.offsetX);
		}
	}
};
</script>