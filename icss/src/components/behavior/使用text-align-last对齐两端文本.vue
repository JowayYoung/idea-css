<template>
	<div class="bruce flex-ct-x" data-title="使用text-align-last对齐两端文本">
		<ul class="justify-text">
			<li>账号</li>
			<li>密码</li>
			<li>电子邮件</li>
			<li>通讯地址</li>
		</ul>
	</div>
</template>

<style lang="scss" scoped>
.justify-text {
	li {
		padding: 0 20px;
		width: 100px;
		height: 40px;
		background-color: #f66;
		line-height: 40px;
		text-align-last: justify;
		color: #fff;
		& + li {
			margin-top: 5px;
		}
	}
}
</style>