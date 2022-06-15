<template>
	<div class="bruce flex-ct-x" data-title="混沌加载圈">
		<ul class="chaos-loading">
			<li v-for="v in 4" :key="v"></li>
		</ul>
	</div>
</template>

<style lang="scss" scoped>
.chaos-loading {
	overflow: hidden;
	position: relative;
	border-radius: 100%;
	width: 200px;
	height: 200px;
	&::after {
		display: block;
		filter: drop-shadow(2px 4px 6px #000);
		line-height: 200px;
		text-align: center;
		font-weight: bold;
		font-size: 30px;
		color: #fff;
		content: "Loading...";
	}
	li {
		position: absolute;
		left: 0;
		top: 0;
		border-radius: 100%;
		width: 100px;
		height: 100px;
		filter: blur(25px);
		animation: move 2s linear infinite;
		&:nth-child(1) {
			background-color: #f66;
		}
		&:nth-child(2) {
			background-color: #66f;
			animation-delay: -500ms;
		}
		&:nth-child(3) {
			background-color: #f90;
			animation-delay: -1s;
		}
		&:nth-child(4) {
			background-color: #09f;
			animation-delay: -1.5s;
		}
	}
}
@keyframes move {
	0%,
	100% {
		transform: translate3d(0, 0, 0);
	}
	25% {
		transform: translate3d(100%, 0, 0);
	}
	50% {
		transform: translate3d(100%, 100%, 0);
	}
	75% {
		transform: translate3d(0, 100%, 0);
	}
}
</style>