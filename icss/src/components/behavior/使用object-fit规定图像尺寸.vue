<template>
	<div class="bruce flex-ct-x" data-title="使用object-fit规定图像尺寸">
		<ul class="image-size">
			<li>
				<h3>Cover</h3>
				<img class="cover" src="https://jowayyoung.github.io/static/img/icss/ab-1.jpg">
			</li>
			<li>
				<h3>Contain</h3>
				<img class="contain" src="https://jowayyoung.github.io/static/img/icss/ab-1.jpg">
			</li>
			<li>
				<h3>Fill</h3>
				<img class="fill" src="https://jowayyoung.github.io/static/img/icss/ab-2.jpg">
			</li>
			<li>
				<h3>ScaleDown</h3>
				<img class="scale-down" src="https://jowayyoung.github.io/static/img/icss/ab-2.jpg">
			</li>
		</ul>
	</div>
</template>

<style lang="scss" scoped>
.image-size {
	display: flex;
	justify-content: space-between;
	width: 1000px;
	height: 300px;
	li {
		width: 200px;
	}
	h3 {
		height: 40px;
		line-height: 40px;
		text-align: center;
		font-weight: bold;
		font-size: 16px;
	}
	img {
		width: 100%;
		height: 260px;
		background-color: #3c9;
		&.cover {
			object-fit: cover;
		}
		&.contain {
			object-fit: contain;
		}
		&.fill {
			object-fit: fill;
		}
		&.scale-down {
			object-fit: scale-down;
		}
	}
}
</style>