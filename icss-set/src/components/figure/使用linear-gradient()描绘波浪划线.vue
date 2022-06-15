<template>
	<div class="bruce flex-ct-x" data-title="使用linear-gradient()描绘波浪划线">
		<p class="waveline-text">波浪线文字</p>
	</div>
</template>

<style lang="scss" scoped>
@mixin waveline($h, $color: #f66) {
	position: relative;
	&::after {
		position: absolute;
		left: 0;
		top: 100%;
		width: 100%;
		height: $h;
		background: linear-gradient(135deg, transparent, transparent 45%, $color, transparent 55%, transparent 100%),
			linear-gradient(45deg, transparent, transparent 45%, $color, transparent 55%, transparent 100%);
		background-size: $h * 2 $h * 2;
		content: "";
	}
}
.waveline-text {
	height: 20px;
	line-height: 20px;
	letter-spacing: 10px;
	@include waveline(10px);
}
</style>