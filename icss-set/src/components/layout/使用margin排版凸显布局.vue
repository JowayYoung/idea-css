<template>
	<div class="bruce flex-ct-y" data-title="使用margin排版凸显布局">
		<ul class="highlight-list left">
			<li>Alibaba</li>
			<li>Tencent</li>
			<li>Baidu</li>
			<li>Jingdong</li>
			<li>Ant</li>
			<li>Netease</li>
		</ul>
		<ul class="highlight-list right">
			<li>Alibaba</li>
			<li>Tencent</li>
			<li>Baidu</li>
			<li>Jingdong</li>
			<li>Ant</li>
			<li>Netease</li>
		</ul>
	</div>
</template>

<style lang="scss" scoped>
.highlight-list {
	display: flex;
	align-items: center;
	padding: 0 10px;
	width: 600px;
	height: 60px;
	background-color: #3c9;
	& + .highlight-list {
		margin-top: 10px;
	}
	li {
		padding: 0 10px;
		height: 40px;
		background-color: #3c9;
		line-height: 40px;
		font-size: 16px;
		color: #fff;
	}
	&.left li {
		& + li {
			margin-left: 10px;
		}
		&:last-child {
			margin-left: auto;
		}
	}
	&.right li {
		& + li {
			margin-left: 10px;
		}
		&:first-child {
			margin-right: auto;
		}
	}
}
</style>