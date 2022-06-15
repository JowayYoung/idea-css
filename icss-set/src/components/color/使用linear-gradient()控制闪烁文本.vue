<template>
	<div class="bruce flex-ct-x" data-title="使用linear-gradient()控制闪烁文本">
		<p class="blink-text tac">🔥若对CSS技巧很感兴趣，请关注我喔</p>
	</div>
</template>

<style lang="scss" scoped>
.blink-text {
	width: 100%;
	background-image: linear-gradient(-45deg, #f66 30%, #fff 50%, #f66 70%);
	background-size: 200%;
	background-clip: text;
	background-blend-mode: hard-light;
	font-weight: bold;
	font-size: 20px;
	color: transparent;
	animation: shine 2s infinite;
	// -webkit-text-fill-color: transparent;
}
@keyframes shine {
	from {
		background-position: 100%;
	}
	to {
		background-position: 0;
	}
}
</style>