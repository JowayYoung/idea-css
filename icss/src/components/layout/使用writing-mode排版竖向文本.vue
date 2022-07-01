<template>
	<div class="bruce flex-ct-x" data-title="使用writing-mode排版竖向文本">
		<div class="vertical-text">
			<h3>名</h3>
			<p>我武惟扬，<br>爱日惜力。<br>掘井及泉，<br>金榜题名。</p>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.vertical-text {
	writing-mode: vertical-rl;
	h3 {
		padding-left: 20px;
		font-weight: bold;
		font-size: 18px;
		color: #f66;
	}
	p {
		line-height: 30px;
		color: #66f;
	}
}
</style>