<template>
	<div class="bruce" data-title="使用transform模拟视差滚动">
		<ul class="parallax-scrolling">
			<li>translateZ(-1px)</li>
			<li>translateZ(-2px)</li>
			<li>translateZ(-3px)</li>
		</ul>
		<p>内容</p>
		<ul class="parallax-scrolling">
			<li>translateZ(-1px)</li>
			<li>translateZ(-2px)</li>
			<li>translateZ(-3px)</li>
		</ul>
	</div>
</template>

<style lang="scss" scoped>
$bg: "https://static.yangzw.vip/codepen/lake.jpg";
.bruce {
	overflow-x: hidden;
	overflow-y: auto;
	padding: 0;
	height: 400px;
	perspective: 1px;
	transform-style: preserve-3d;
	p {
		height: 300px;
		line-height: 300px;
		text-align: center;
		font-size: 20px;
		color: #f66;
	}
}
.parallax-scrolling {
	display: flex;
	justify-content: center;
	align-items: center;
	height: 1000px;
	background: url($bg) no-repeat center fixed;
	li {
		width: 500px;
		text-align: center;
		font-weight: bold;
		font-size: 60px;
		&:nth-child(1) {
			color: #f66;
			transform: translateZ(-1px);
		}
		&:nth-child(2) {
			color: #09f;
			transform: translateZ(-2px);
		}
		&:nth-child(3) {
			color: #3c9;
			transform: translateZ(-3px);
		}
	}
}
</style>