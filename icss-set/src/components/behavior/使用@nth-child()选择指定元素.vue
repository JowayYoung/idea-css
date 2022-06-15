<template>
	<div class="bruce flex-ct-x" data-title="使用:nth-child()选择指定元素">
		<ul class="specified-scope">
			<li>10001</li>
			<li>10002</li>
			<li>10003</li>
			<li>10004</li>
			<li>10005</li>
			<li>10006</li>
			<li>10007</li>
			<li>10008</li>
			<li>10009</li>
			<li>10010</li>
		</ul>
	</div>
</template>

<style lang="scss" scoped>
.specified-scope {
	width: 300px;
	li {
		padding: 0 20px;
		height: 40px;
		line-height: 40px;
		color: #fff;
		&:nth-child(odd) {
			background-color: #f66;
		}
		&:nth-child(even) {
			background-color: #66f;
		}
		&:nth-child(n+6):nth-child(-n+10) {
			background-color: #3c9;
		}
	}
}
</style>