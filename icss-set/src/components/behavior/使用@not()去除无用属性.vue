<template>
	<div class="bruce flex-ct-x" data-title="使用:not()去除无用属性">
		<ul class="cleared-attr">
			<li class="first-line">
				<span>A</span>
				<span>B</span>
				<span>C</span>
				<span>D</span>
				<span>E</span>
			</li>
			<li class="second-line">
				<span>A</span>
				<span>B</span>
				<span>C</span>
				<span>D</span>
				<span>E</span>
			</li>
		</ul>
	</div>
</template>

<style lang="scss" scoped>
.cleared-attr {
	li {
		height: 40px;
		line-height: 40px;
	}
	span {
		display: inline-block;
		color: #66f;
	}
	.first-line span:not(:last-child)::after {
		content: ",";
	}
	.second-line span:not(:nth-child(-n+3)) {
		display: none;
	}
}
</style>