<template>
	<div class="bruce flex-ct-x" data-title="使用:hover控制悬浮边框">
		<div class="dynamic-border">iCSS</div>
	</div>
</template>

<style lang="scss" scoped>
.dynamic-border {
	width: 200px;
	height: 80px;
	background: linear-gradient(0, #f66 2px, #f66 2px) no-repeat left top/0 2px,
		linear-gradient(-90deg, #f66 2px, #f66 2px) no-repeat right top/2px 0,
		linear-gradient(-180deg, #f66 2px, #f66 2px) no-repeat right bottom/0 2px,
		linear-gradient(-270deg, #f66 2px, #f66 2px) no-repeat left bottom/2px 0;
	cursor: pointer;
	line-height: 80px;
	text-align: center;
	font-weight: bold;
	font-size: 50px;
	color: #f66;
	transition: all 300ms;
	&:hover {
		background-size: 100% 2px, 2px 100%, 100% 2px, 2px 100%;
	}
}
</style>