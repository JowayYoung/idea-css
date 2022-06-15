<template>
	<div class="bruce" data-title="气泡背景墙">
		<ul class="bubble-bgwall">
			<li v-for="v in 10" :key="v">Love</li>
		</ul>
	</div>
</template>

<style lang="scss" scoped>
.bruce {
	padding: 0;
	height: 400px;
	background-image: linear-gradient(270deg, #8146b4, #6990f6);
}
.bubble-bgwall {
	overflow: hidden;
	position: relative;
	margin: 0 auto;
	width: 100%;
	max-width: 1200px;
	height: 100%;
	li {
		display: flex;
		position: absolute;
		bottom: -200px;
		justify-content: center;
		align-items: center;
		border-radius: 10px;
		width: 50px;
		height: 50px;
		background-color: rgba(#fff, .15);
		color: #ccc;
		animation: bubble 15s infinite;
		&:nth-child(1) {
			left: 10%;
		}
		&:nth-child(2) {
			left: 20%;
			width: 90px;
			height: 90px;
			animation-duration: 7s;
			animation-delay: 2s;
		}
		&:nth-child(3) {
			left: 25%;
			animation-delay: 4s;
		}
		&:nth-child(4) {
			left: 40%;
			width: 60px;
			height: 60px;
			background-color: rgba(#fff, .3);
			animation-duration: 8s;
		}
		&:nth-child(5) {
			left: 70%;
		}
		&:nth-child(6) {
			left: 80%;
			width: 120px;
			height: 120px;
			background-color: rgba(#fff, .2);
			animation-delay: 3s;
		}
		&:nth-child(7) {
			left: 32%;
			width: 160px;
			height: 160px;
			animation-delay: 2s;
		}
		&:nth-child(8) {
			left: 55%;
			width: 40px;
			height: 40px;
			font-size: 12px;
			animation-duration: 15s;
			animation-delay: 4s;
		}
		&:nth-child(9) {
			left: 25%;
			width: 40px;
			height: 40px;
			background-color: rgba(#fff, .3);
			font-size: 12px;
			animation-duration: 12s;
			animation-delay: 2s;
		}
		&:nth-child(10) {
			left: 85%;
			width: 160px;
			height: 160px;
			animation-delay: 5s;
		}
	}
}
@keyframes bubble {
	0% {
		opacity: .5;
		transform: translateY(0) rotate(45deg);
	}
	25% {
		opacity: .75;
		transform: translateY(-400px) rotate(90deg);
	}
	50% {
		opacity: 1;
		transform: translateY(-600px) rotate(135deg);
	}
	100% {
		opacity: 0;
		transform: translateY(-1000px) rotate(180deg);
	}
}
</style>