<template>
	<div class="bruce flex-ct-x" data-title="使用content提升反爬效果">
		<div class="crawler-box">
			<p>提升反爬虫效果</p>
			<p class="uncrawler"></p>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.crawler-box {
	line-height: 2;
	font-weight: bold;
	font-size: 30px;
	color: #3c9;
	.uncrawler::after {
		content: "提升反爬虫效果";
	}
}
</style>