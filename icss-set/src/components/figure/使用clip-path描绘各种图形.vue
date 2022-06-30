<template>
	<div class="bruce flex-ct-x" data-title="使用clip-path描绘各种图形">
		<ul class="figure-box" style="--count: 12">
			<li class="star" style="--index: 0"></li>
			<li class="ellipse" style="--index: 1"></li>
			<li class="circle" style="--index: 2"></li>
			<li class="triangle" style="--index: 3"></li>
			<li class="rhombus" style="--index: 4"></li>
			<li class="trapezoid" style="--index: 5"></li>
			<li class="parallelogram" style="--index: 6"></li>
			<li class="pentagon" style="--index: 7"></li>
			<li class="left-arrow" style="--index: 8"></li>
			<li class="right-arrow" style="--index: 9"></li>
			<li class="close" style="--index: 10"></li>
			<li class="message" style="--index: 11"></li>
		</ul>
	</div>
</template>

<style lang="scss" scoped>
.figure-box {
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	max-width: 720px;
	li {
		--Θ: calc(var(--index) / var(--count) * 1turn);
		margin: 10px;
		width: 100px;
		height: 100px;
		background-color: #3c9;
		filter: hue-rotate(var(--Θ));
		&.star {
			clip-path: polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%);
		}
		&.ellipse {
			clip-path: ellipse(40% 50% at 50% 50%);
		}
		&.circle {
			clip-path: circle(50% at 50% 50%);
		}
		&.triangle {
			clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
		}
		&.rhombus {
			clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);
		}
		&.trapezoid {
			clip-path: polygon(20% 0%, 80% 0%, 100% 100%, 0% 100%);
		}
		&.parallelogram {
			clip-path: polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%);
		}
		&.pentagon {
			clip-path: polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%);
		}
		&.left-arrow {
			clip-path: polygon(40% 0%, 40% 20%, 100% 20%, 100% 80%, 40% 80%, 40% 100%, 0% 50%);
		}
		&.right-arrow {
			clip-path: polygon(0% 20%, 60% 20%, 60% 0%, 100% 50%, 60% 100%, 60% 80%, 0% 80%);
		}
		&.close {
			clip-path: polygon(20% 0%, 0% 20%, 30% 50%, 0% 80%, 20% 100%, 50% 70%, 80% 100%, 100% 80%, 70% 50%, 100% 20%, 80% 0%, 50% 30%);
		}
		&.message {
			clip-path: polygon(0% 0%, 100% 0%, 100% 75%, 75% 75%, 75% 100%, 50% 75%, 0% 75%);
		}
	}
}
</style>