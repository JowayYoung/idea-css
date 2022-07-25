<template>
	<div class="bruce flex-ct-x" data-title="使用box-shadow描绘单侧投影">
		<ul class="aside-shadow">
			<li class="left"></li>
			<li class="up"></li>
			<li class="left"></li>
			<li class="down"></li>
			<li class="left-up"></li>
			<li class="left-down"></li>
			<li class="right-up"></li>
			<li class="right-down"></li>
		</ul>
	</div>
</template>

<style lang="scss" scoped>
.aside-shadow {
	display: flex;
	flex-wrap: wrap;
	padding: 20px;
	width: 500px;
	li {
		border: 1px solid #f66;
		width: 100px;
		height: 100px;
		&:not(:nth-child(4n-3)) {
			margin-left: 20px;
		}
		&:nth-child(n+5) {
			margin-top: 20px;
		}
		&.left {
			box-shadow: -10px 0 5px -5px #f66;
		}
		&.right {
			box-shadow: 10px 0 5px -5px #f66;
		}
		&.up {
			box-shadow: 0 -10px 5px -5px #f66;
		}
		&.down {
			box-shadow: 0 10px 5px -5px #f66;
		}
		&.left-up {
			box-shadow: -10px 0 5px -5px #f66, 0 -10px 5px -5px #f66;
		}
		&.left-down {
			box-shadow: -10px 0 5px -5px #f66, 0 10px 5px -5px #f66;
		}
		&.right-up {
			box-shadow: 10px 0 5px -5px #f66, 0 -10px 5px -5px #f66;
		}
		&.right-down {
			box-shadow: 10px 0 5px -5px #f66, 0 10px 5px -5px #f66;
		}
	}
}
</style>