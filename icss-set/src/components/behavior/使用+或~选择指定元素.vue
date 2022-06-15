<template>
	<div class="bruce flex-ct-y" data-title="使用+或~选择指定元素">
		<div class="specify-selector">
			<ul class="list">
				<li>同胞元素</li>
				<li class="next">当前元素</li>
				<li>同胞元素</li>
				<li>同胞元素</li>
				<li>同胞元素</li>
			</ul>
			<ul class="list">
				<li>同胞元素</li>
				<li class="next-all">当前元素</li>
				<li>同胞元素</li>
				<li>同胞元素</li>
				<li>同胞元素</li>
			</ul>
			<ul class="list">
				<li>同胞元素</li>
				<li class="next-filter">当前元素</li>
				<li>同胞元素</li>
				<li class="filter">同胞元素</li>
				<li>同胞元素</li>
			</ul>
		</div>
		<div class="specify-selector">
			<div class="button">
				<input id="btn1" type="radio" name="btns" hidden>
				<label for="btn1">点击我切换样式</label>
			</div>
			<div class="button">
				<input id="btn2" type="radio" name="btns" hidden>
				<label for="btn2">点击我切换样式</label>
			</div>
			<div class="button">
				<input id="btn3" type="radio" name="btns" hidden>
				<label for="btn3">点击我切换样式</label>
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.specify-selector {
	display: flex;
	& + .specify-selector {
		margin-top: 20px;
	}
	.list {
		border: 1px solid #f66;
		width: 200px;
		line-height: 2;
		font-weight: bold;
		font-size: 20px;
		color: #f66;
		& + .list {
			margin-left: 20px;
		}
		li {
			padding: 0 10px;
		}
		.next {
			background-color: #66f;
			color: #fff;
			& + li {
				background-color: #f90;
				color: #fff;
			}
		}
		.next-all {
			background-color: #66f;
			color: #fff;
			& ~ li {
				background-color: #09f;
				color: #fff;
			}
		}
		.next-filter {
			background-color: #66f;
			color: #fff;
			& ~ .filter {
				background-color: #09f;
				color: #fff;
			}
		}
	}
	.button {
		& + .button {
			margin-left: 20px;
		}
		label {
			display: block;
			padding: 0 10px;
			height: 40px;
			background-color: #3c9;
			cursor: pointer;
			line-height: 40px;
			font-size: 16px;
			color: #fff;
			transition: all 300ms;
		}
		input:checked + label {
			padding: 0 20px;
			border-radius: 20px;
			background-color: #f66;
		}
	}
}
</style>