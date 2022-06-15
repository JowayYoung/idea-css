<template>
	<div class="bruce flex-ct-x" data-title="加载指示器">
		<div class="loading-indicator">加载中<span></span></div>
	</div>
</template>

<style lang="scss" scoped>
.loading-indicator {
	font-size: 16px;
	color: #09f;
	span {
		display: inline-block;
		overflow: hidden;
		height: 1em;
		line-height: 1;
		vertical-align: -.25em;
		&::after {
			display: block;
			white-space: pre-wrap;
			content: "...\A..\A.";
			animation: loading 3s infinite step-start both;
		}
	}
}
@keyframes loading {
	33% {
		transform: translate3d(0, -2em, 0);
	}
	66% {
		transform: translate3d(0, -1em, 0);
	}
}
</style>