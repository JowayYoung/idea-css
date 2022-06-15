<template>
	<div class="bruce flex-ct-x" data-title="粘粘球">
		<ul class="sticky-ball">
			<li class="ball-1"></li>
			<li class="ball-2"></li>
		</ul>
	</div>
</template>

<style lang="scss" scoped>
.sticky-ball {
	position: relative;
	width: 320px;
	height: 80px;
	filter: contrast(10);
	li {
		position: absolute;
		top: 0;
		padding: 10px;
		border-radius: 100%;
		width: 80px;
		height: 80px;
		background-color: #f66;
		filter: blur(5px);
		animation: 6s infinite;
		&.ball-1 {
			left: 0;
			animation-name: move-1 !important;
		}
		&.ball-2 {
			left: 240px;
			animation-name: move-2 !important;
		}
	}
}
@keyframes move-1 {
	0%,
	20%,
	100% {
		width: 80px;
		height: 80px;
	}
	50% {
		left: 110px;
		top: -15px;
		width: 110px;
		height: 110px;
	}
	85% {
		left: 75px;
		width: 90px;
		height: 70px;
	}
	90% {
		top: -2px;
		width: 75px;
		height: 85px;
	}
}
@keyframes move-2 {
	0%,
	20%,
	100% {
		width: 80px;
		height: 80px;
	}
	50% {
		left: 110px;
		top: -15px;
		width: 110px;
		height: 110px;
	}
	85% {
		left: 165px;
		width: 90px;
		height: 70px;
	}
	90% {
		top: -2px;
		width: 75px;
		height: 85px;
	}
}
</style>