<template>
	<div class="bruce flex-ct-x" data="使用clip-path排版蜂窝布局">
		<input id="a" type="checkbox" hidden>
		<input id="b" type="checkbox" hidden>
		<input id="c" type="checkbox" hidden>
		<input id="d" type="checkbox" hidden>
		<div class="cellular-layout tac" style="--count: 16">
			<label for="a" style="--index: 0">我</label>
			<label class="a" style="--index: 1">武</label>
			<label class="a" style="--index: 2">惟</label>
			<label class="a" style="--index: 3">扬</label>
			<label for="b" style="--index: 4">爱</label>
			<label class="b" style="--index: 5">日</label>
			<label class="b" style="--index: 6">惜</label>
			<label class="b" style="--index: 7">力</label>
			<label for="c" style="--index: 8">掘</label>
			<label class="c" style="--index: 9">井</label>
			<label class="c" style="--index: 10">及</label>
			<label class="c" style="--index: 11">泉</label>
			<label for="d" style="--index: 12">金</label>
			<label class="d" style="--index: 13">榜</label>
			<label class="d" style="--index: 14">题</label>
			<label class="d" style="--index: 15">名</label>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.cellular-layout {
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	margin-top: -50px;
	width: 400px;
	label {
		--Θ: calc(var(--index) / var(--count) * 1turn);
		margin-left: -15px;
		width: 100px;
		height: 100px;
		background-color: #3c9;
		filter: hue-rotate(var(--Θ));
		clip-path: polygon(25% 5%, 75% 5%, 100% 50%, 75% 95%, 25% 95%, 0 50%);
		cursor: pointer;
		line-height: 100px;
		font-size: 20px;
		color: #fff;
		transition: all 300ms;
		&:nth-child(even) {
			transform: translateY(50px);
		}
		&:nth-child(4n-3) {
			margin-left: 0;
		}
	}
}
#a:checked ~ .cellular-layout .a {
	opacity: 0;
}
#b:checked ~ .cellular-layout .b {
	opacity: 0;
}
#c:checked ~ .cellular-layout .c {
	opacity: 0;
}
#d:checked ~ .cellular-layout .d {
	opacity: 0;
}
</style>