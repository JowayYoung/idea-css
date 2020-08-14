<template>
	<div class="bruce flex-ct-x" data-title="立体按钮">
		<button class="stereo-btn">iCSS</button>
	</div>
</template>

<style lang="scss" scoped>
.stereo-btn {
	padding: 10px 20px;
	border: none;
	border-radius: 10px;
	outline: none;
	background-image: linear-gradient(#09f, #3c9);
	box-shadow: 0 10px 0 #09f;
	cursor: pointer;
	text-shadow: 0 5px 5px #ccc;
	font-size: 50px;
	color: #fff;
	transition: all 300ms;
	&:active {
		box-shadow: 0 5px 0 #09f;
		transform: translate3d(0, 5px, 0);
	}
}
</style>