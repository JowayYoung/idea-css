<template>
	<div class="bruce flex-ct-x" data-title="使用:nth-child()描绘信号彩带">
		<ul class="signal-bar" style="--line-count: 5">
			<li v-for="v in 5" :key="v" :style="`--line-index: ${v}`">
				<em></em>
			</li>
		</ul>
	</div>
</template>

<style lang="scss" scoped>
.signal-bar {
	display: flex;
	justify-content: space-between;
	align-items: flex-end;
	width: 200px;
	height: 200px;
	li {
		--Θ: calc(var(--line-index) / var(--line-count) * .5turn);
		--height: calc((var(--line-index) + 1) * 30px);
		--time: calc(var(--line-index) * 100ms);
		display: flex;
		align-items: flex-end;
		width: 30px;
		height: var(--height);
	}
	em {
		border-radius: 5px;
		width: 100%;
		height: 10px;
		background-color: #3c9;
		filter: hue-rotate(var(--Θ));
		animation: beat 2s ease-in-out var(--time) infinite alternate;
	}
}
@keyframes beat {
	0%,
	20% {
		height: 10px;
	}
	80%,
	100% {
		height: 100%;
	}
}
</style>