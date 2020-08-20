<template>
	<div class="bruce flex-ct-x" data-title="使用box-shadow描绘彩虹色带">
		<div class="rainbow-bar bar-1"></div>
		<div class="rainbow-bar bar-2"></div>
	</div>
</template>

<style lang="scss" scoped>
$rainbow: 0 0 0 8px #f66 inset,
	0 0 0 16px #f90 inset,
	0 0 0 24px #ff3 inset,
	0 0 0 32px #3c9 inset,
	0 0 0 40px #9c3 inset,
	0 0 0 48px #09f inset,
	0 0 0 56px #66f inset;
.rainbow-bar {
	width: 250px;
	&.bar-1 {
		overflow: hidden;
		position: relative;
		height: 125px;
		&::after {
			display: block;
			border-radius: 100%;
			width: 100%;
			height: 200%;
			box-shadow: $rainbow;
			content: "";
		}
	}
	&.bar-2 {
		margin: 125px 0 0 50px;
		border-radius: 100%;
		height: 250px;
		box-shadow: $rainbow;
		clip-path: polygon(0 0, 100% 0, 100% 50%, 0 50%);
	}
}
</style>