<template>
	<div class="bruce flex-ct-x" data-title="标签导航">
		<div class="tab-navbar">
			<input id="tab1" type="radio" name="tabs" hidden checked>
			<input id="tab2" type="radio" name="tabs" hidden>
			<input id="tab3" type="radio" name="tabs" hidden>
			<input id="tab4" type="radio" name="tabs" hidden>
			<nav>
				<label for="tab1">标题1</label>
				<label for="tab2">标题2</label>
				<label for="tab3">标题3</label>
				<label for="tab4">标题4</label>
			</nav>
			<main>
				<ul>
					<li>内容1</li>
					<li>内容2</li>
					<li>内容3</li>
					<li>内容4</li>
				</ul>
			</main>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.active {
	background-color: #3c9;
	color: #fff;
}
.tab-navbar {
	display: flex;
	overflow: hidden;
	flex-direction: column-reverse;
	border-radius: 10px;
	width: 300px;
	height: 400px;
	input {
		&:nth-child(1):checked {
			& ~ nav label:nth-child(1) {
				@extend .active;
			}
			& ~ main ul {
				background-color: #f66;
				transform: translate3d(0, 0, 0);
			}
		}
		&:nth-child(2):checked {
			& ~ nav label:nth-child(2) {
				@extend .active;
			}
			& ~ main ul {
				background-color: #66f;
				transform: translate3d(-25%, 0, 0);
			}
		}
		&:nth-child(3):checked {
			& ~ nav label:nth-child(3) {
				@extend .active;
			}
			& ~ main ul {
				background-color: #f90;
				transform: translate3d(-50%, 0, 0);
			}
		}
		&:nth-child(4):checked {
			& ~ nav label:nth-child(4) {
				@extend .active;
			}
			& ~ main ul {
				background-color: #09f;
				transform: translate3d(-75%, 0, 0);
			}
		}
	}
	nav {
		display: flex;
		height: 40px;
		background-color: #f0f0f0;
		line-height: 40px;
		text-align: center;
		label {
			flex: 1;
			cursor: pointer;
			transition: all 300ms;
		}
	}
	main {
		flex: 1;
		ul {
			display: flex;
			flex-wrap: nowrap;
			width: 400%;
			height: 100%;
			transition: all 300ms;
		}
		li {
			display: flex;
			justify-content: center;
			align-items: center;
			flex: 1;
			font-weight: bold;
			font-size: 20px;
			color: #fff;
		}
	}
}
</style>