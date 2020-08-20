<template>
	<div class="bruce flex-ct-x" data-title="使用resize拉伸多列分栏">
		<div class="stretching-column">
			<div class="left">
				<div class="resize-bar"></div>
				<div class="resize-line"></div>
				<div class="resize-text">ABCDEFGHIJKLMNOPQRSTUVWXYZ</div>
			</div>
			<div class="right">ABCDEFGHIJKLMNOPQRSTUVWXYZ</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.stretching-column {
	overflow: hidden;
	border: 1px solid #09f;
	width: 600px;
	height: 300px;
	line-height: 20px;
	font-size: 16px;
	color: #f90;
	.left {
		overflow: hidden;
		float: left;
		position: relative;
		height: 100%;
	}
	.right {
		overflow: hidden;
		padding: 10px;
		height: 100%;
		background-color: #f0f0f0;
		word-break: break-all;
	}
	.resize-bar {
		overflow: scroll;
		width: 200px;
		height: 100%;
		opacity: 0;
		resize: horizontal;
		&::-webkit-scrollbar {
			width: 200px;
			height: 100%;
		}
		&:hover,
		&:active {
			& ~ .resize-line {
				border-left: 1px dashed #09f;
			}
		}
	}
	.resize-line {
		position: absolute;
		right: 0;
		top: 0;
		bottom: 0;
		border-left: 1px solid #ccc;
		border-right: 2px solid #f0f0f0;
		pointer-events: none;
	}
	.resize-text {
		overflow-x: hidden;
		position: absolute;
		left: 0;
		right: 5px;
		top: 0;
		bottom: 0;
		padding: 10px;
		word-break: break-all;
	}
}
</style>