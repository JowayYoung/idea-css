<template>
	<div ref="bg" class="bruce flex-ct-x" data-title="悬浮视差按钮">
		<a ref="btn" class="parallax-btn" data-name="妙用CSS变量，让你的CSS变得更心动" @mousemove="move" @mouseup="up" @mousedown="down" @mouseleave="leave"></a>
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

<script>
export default {
	mounted() {
		this.bgStyle = this.$refs.bg.style;
		this.btnRect = this.$refs.btn.getBoundingClientRect();
	},
	methods: {
		down(e) {
			this.bgStyle.setProperty("--tz", "-25px");
		},
		leave(e) {
			this.bgStyle.setProperty("--ty", "0");
			this.bgStyle.setProperty("--rx", "0");
			this.bgStyle.setProperty("--ry", "0");
		},
		move(e) {
			const dx = e.offsetX - this.btnRect.width / 2;
			const dy = e.offsetY - this.btnRect.height / 2;
			this.bgStyle.setProperty("--rx", `${dy / -1}deg`);
			this.bgStyle.setProperty("--ry", `${dx / 10}deg`);
		},
		up() {
			this.bgStyle.setProperty("--tz", "-12px");
		}
	}
};
</script>