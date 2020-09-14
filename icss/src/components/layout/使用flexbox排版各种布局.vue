<template>
	<div class="bruce flex-ct-x" data-title="使用flexbox排版各种布局">
		<div class="layout-box">
			<div class="fullscreen-layout" title="全屏布局">
				<header></header>
				<main></main>
				<footer></footer>
			</div>
			<div class="two-column-layout" title="多列布局-两列布局">
				<div class="left"></div>
				<div class="right"></div>
			</div>
			<div class="three-column-layout" title="多列布局-三列布局">
				<div class="left"></div>
				<div class="center"></div>
				<div class="right"></div>
			</div>
			<div class="grail-layout" title="多列布局-圣杯布局">
				<div class="left"></div>
				<div class="center"></div>
				<div class="right"></div>
			</div>
			<div class="average-layout" title="多列布局-均分布局">
				<div class="one"></div>
				<div class="two"></div>
				<div class="three"></div>
				<div class="four"></div>
			</div>
			<div class="center-layout" title="居中布局">
				<div></div>
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.layout-box {
	display: flex;
	overflow-x: auto;
	flex-wrap: nowrap;
	justify-content: space-between;
	margin: 0 50px;
	> div {
		flex-shrink: 0;
		flex-basis: 400px;
		& + div {
			margin-left: 50px;
		}
	}
}
.fullscreen-layout {
	display: flex;
	flex-direction: column;
	width: 400px;
	height: 400px;
	header {
		height: 50px;
		background-color: #f66;
	}
	footer {
		height: 50px;
		background-color: #66f;
	}
	main {
		flex: 1;
		background-color: #3c9;
	}
}
.two-column-layout {
	display: flex;
	width: 400px;
	height: 400px;
	.left {
		width: 100px;
		background-color: #f66;
	}
	.right {
		flex: 1;
		background-color: #66f;
	}
}
.three-column-layout {
	display: flex;
	width: 400px;
	height: 400px;
	.left {
		width: 50px;
		background-color: #f66;
	}
	.center {
		width: 100px;
		background-color: #66f;
	}
	.right {
		flex: 1;
		background-color: #3c9;
	}
}
.grail-layout {
	display: flex;
	width: 400px;
	height: 400px;
	.left {
		width: 100px;
		background-color: #f66;
	}
	.center {
		flex: 1;
		background-color: #3c9;
	}
	.right {
		width: 100px;
		background-color: #66f;
	}
}
.average-layout {
	display: flex;
	width: 400px;
	height: 400px;
	div {
		flex: 1;
	}
	.one {
		background-color: #f66;
	}
	.two {
		background-color: #66f;
	}
	.three {
		background-color: #f90;
	}
	.four {
		background-color: #09f;
	}
}
.center-layout {
	display: flex;
	width: 400px;
	height: 400px;
	background-color: #f66;
	div {
		margin: auto;
		width: 100px;
		height: 100px;
		background-color: #66f;
	}
}
</style>