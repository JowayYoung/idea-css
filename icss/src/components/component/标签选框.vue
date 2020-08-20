<template>
	<div class="bruce flex-ct-x" data-title="标签选框">
		<div class="tab-page">
			<nav>
				<h3>
					<input type="radio" name="tab">
					<label for="tab1">标题1</label>
				</h3>
				<h3>
					<input type="radio" name="tab">
					<label for="tab2">标题2</label>
				</h3>
				<h3>
					<input type="radio" name="tab">
					<label for="tab3">标题3</label>
				</h3>
			</nav>
			<ul>
				<li>
					<input id="tab1">
					<p>内容1</p>
				</li>
				<li>
					<input id="tab2">
					<p>内容2</p>
				</li>
				<li>
					<input id="tab3">
					<p>内容3</p>
				</li>
			</ul>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.tab-page {
	width: 300px;
	nav {
		display: flex;
		border: 1px solid #3c9;
		height: 40px;
		line-height: 40px;
		text-align: center;
		h3 {
			position: relative;
			flex: 1;
			background-color: #3c9;
			color: #fff;
			& + h3 {
				border-left: 1px solid #fff;
			}
		}
		input {
			display: none;
		}
		label {
			display: block;
			width: 100%;
			height: 100%;
			cursor: pointer;
		}
	}
	ul {
		overflow: hidden;
		scroll-behavior: smooth;
		border: 1px solid #3c9;
		border-top: none;
		height: 100px;
		li {
			display: flex;
			position: relative;
			justify-content: center;
			align-items: center;
			height: 100%;
			font-size: 20px;
			color: #09f;
		}
		input {
			position: absolute;
			width: 0;
			height: 0;
			opacity: 0;
		}
	}
}
</style>