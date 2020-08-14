<template>
	<div class="bruce flex-ct-x" data-title="使用margin-left排版左重右轻列表">
		<ul class="left-list">
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
.left-list {
	display: flex;
	align-items: center;
	padding: 0 10px;
	width: 600px;
	height: 60px;
	background-color: #3c9;
	li {
		padding: 0 10px;
		height: 40px;
		background-color: #3c9;
		line-height: 40px;
		font-size: 16px;
		color: #fff;
		& + li {
			margin-left: 10px;
		}
		&:last-child {
			margin-left: auto;
		}
	}
}
</style>