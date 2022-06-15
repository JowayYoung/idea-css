<template>
	<div class="bruce flex-ct-x" data-title="使用transform翻转容器内容">
		<ul class="flip-content">
			<li>正常文本</li>
			<li class="x-axis">水平翻转</li>
			<li class="y-axis">垂直翻转</li>
			<li class="reverse">倒序翻转</li>
		</ul>
	</div>
</template>

<style lang="scss" scoped>
.flip-content {
	li {
		position: relative;
		width: 121px;
		height: 51px;
		line-height: 51px;
		text-align: center;
		font-weight: bold;
		font-size: 30px;
		color: #f66;
		&::before,
		&::after {
			position: absolute;
			background-color: #66f;
			content: "";
		}
		& + li {
			margin-top: 10px;
		}
		&.x-axis {
			transform: scale(1, -1);
			&::after {
				left: 0;
				top: 25px;
				width: 100%;
				height: 1px;
			}
		}
		&.y-axis {
			transform: scale(-1, 1);
			&::after {
				left: 60px;
				top: 0;
				width: 1px;
				height: 100%;
			}
		}
		&.reverse {
			transform: scale(-1, -1);
			&::before {
				left: 0;
				top: 25px;
				width: 100%;
				height: 1px;
			}
			&::after {
				left: 60px;
				top: 0;
				width: 1px;
				height: 100%;
			}
		}
	}
}
</style>