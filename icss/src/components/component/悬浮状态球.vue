<template>
	<div class="bruce flex-ct-x" data-title="悬浮状态球">
		<div class="state-ball warning">
			<div class="wave"></div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.state-ball {
	overflow: hidden;
	position: relative;
	padding: 5px;
	border: 3px solid #3c9;
	border-radius: 100%;
	width: 150px;
	height: 150px;
	background-color: #fff;
	&::before,
	&::after {
		position: absolute;
		left: 50%;
		top: 0;
		z-index: 20;
		margin-left: -100px;
		width: 200px;
		height: 200px;
		content: "";
	}
	&::before {
		margin-top: -150px;
		border-radius: 45%;
		background-color: rgba(#fff, .5);
		animation: rotate 10s linear -5s infinite;
	}
	&::after {
		margin-top: -160px;
		border-radius: 40%;
		background-color: rgba(#fff, .8);
		animation: rotate 15s infinite;
	}
	&.warning {
		border-color: #f90;
		.wave {
			background-image: linear-gradient(-180deg, #f0c78a 13%, #f90 91%);
		}
	}
	&.danger {
		border-color: #f66;
		.wave {
			background-image: linear-gradient(-180deg, #f78989 13%, #f66 91%);
		}
	}
	.wave {
		position: relative;
		border-radius: 100%;
		width: 100%;
		height: 100%;
		background-image: linear-gradient(-180deg, #af8 13%, #3c9 91%);
	}
}
@keyframes rotate {
	to {
		transform: rotate(1turn);
	}
}
</style>