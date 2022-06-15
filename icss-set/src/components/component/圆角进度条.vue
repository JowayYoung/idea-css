<template>
	<div class="bruce flex-ct-x" data-title="圆角进度条">
		<div class="fillet-progressbar"></div>
	</div>
</template>

<style lang="scss" scoped>
@mixin progress-bar($width: 100px, $height: 10px, $color: #f66, $percent: 0) {
	border-radius: $height / 2;
	width: $width;
	height: $height;
	background-color: #ccc;
	background-image: radial-gradient(closest-side circle at $percent, $color, $color 100%, transparent),
		linear-gradient($color, $color);
	background-repeat: no-repeat;
	background-size: 100%, $percent;
}
.fillet-progressbar {
	@include progress-bar(500px, 10px, #66f, 50%);
}
</style>