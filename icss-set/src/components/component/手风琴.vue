<template>
	<div class="bruce flex-ct-x" data-title="手风琴">
		<ul class="accordion">
			<li v-for="v in 6" :key="v"></li>
		</ul>
	</div>
</template>

<style lang="scss" scoped>
.accordion {
	display: flex;
	width: 600px;
	height: 200px;
	li {
		flex: 1;
		cursor: pointer;
		transition: all 300ms;
		&:nth-child(1) {
			background-color: #f66;
		}
		&:nth-child(2) {
			background-color: #66f;
		}
		&:nth-child(3) {
			background-color: #f90;
		}
		&:nth-child(4) {
			background-color: #09f;
		}
		&:nth-child(5) {
			background-color: #9c3;
		}
		&:nth-child(6) {
			background-color: #3c9;
		}
		&:hover {
			flex: 2;
			background-color: #ccc;
		}
	}
}
</style>