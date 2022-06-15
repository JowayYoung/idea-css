<template>
	<div class="bruce flex-ct-y" data-title="气泡对话框">
		<div class="bubble-box">iCSS</div>
		<div class="bubble-empty-box">iCSS</div>
	</div>
</template>

<style lang="scss" scoped>
.bubble-box {
	position: relative;
	border-radius: 5px;
	width: 200px;
	height: 50px;
	background-color: #f90;
	line-height: 50px;
	text-align: center;
	font-size: 20px;
	color: #fff;
	&::after {
		position: absolute;
		left: 100%;
		top: 50%;
		margin-top: -5px;
		border: 5px solid transparent;
		border-left-color: #f90;
		content: "";
	}
}
.bubble-empty-box {
	position: relative;
	margin-top: 10px;
	border: 2px solid #f90;
	border-radius: 5px;
	width: 200px;
	height: 50px;
	line-height: 46px;
	text-align: center;
	font-size: 20px;
	color: #f90;
	&::before {
		position: absolute;
		left: 100%;
		top: 50%;
		margin: -5px 0 0 2px;
		border: 5px solid transparent;
		border-left-color: #f90;
		content: "";
	}
	&::after {
		position: absolute;
		left: 100%;
		top: 50%;
		margin-top: -4px;
		border: 4px solid transparent;
		border-left-color: #fff;
		content: "";
	}
}
</style>