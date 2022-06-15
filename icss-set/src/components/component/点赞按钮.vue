<template>
	<div class="bruce flex-ct-x" data-title="点赞按钮">
		<button class="like-btn">
			<div class="like-wrapper">
				<div class="like-ripple"></div>
				<svg class="like-heart" width="24" height="24" viewBox="0 0 24 24">
					<path d="M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z"></path>
				</svg>
				<div class="like-particle" style="--line-count: 6">
					<div v-for="v in 6" :key="v" class="like-particle-item" :style="`--line-index: ${v}`"></div>
				</div>
			</div>
		</button>
	</div>
</template>

<style lang="scss" scoped>
$heart-color: #f66;
$easing: cubic-bezier(.7, 0, .3, 1);
$duration: 500ms;
.bruce {
	padding: 150px 0;
}
.like-btn {
	position: relative;
	z-index: 1;
	border: none;
	border-radius: 100%;
	width: 1em;
	height: 1em;
	appearance: none;
	background-color: #fff;
	cursor: pointer;
	font-size: 200px;
	transition: all $duration $easing;
	&::before {
		position: absolute;
		left: 0;
		top: 0;
		z-index: -1;
		border-radius: inherit;
		width: 100%;
		height: 100%;
		box-shadow: 0 .3em .6em rgba(#000, .3);
		content: "";
		transition: inherit;
	}
	&::after {
		position: absolute;
		left: 0;
		top: 0;
		z-index: -1;
		border-radius: inherit;
		width: 100%;
		height: 100%;
		background-color: #fff;
		content: "";
	}
	&:active {
		&::before {
			animation: depress-shadow $duration $easing both;
		}
	}
	&:focus::after {
		animation: depress $duration $easing both;
	}
}
.like-wrapper {
	display: grid;
	justify-content: center;
	align-items: center;
	> * {
		grid-area: 1/1;
		margin: auto;
	}
}
.like-ripple {
	overflow: hidden;
	position: relative;
	border-radius: 100%;
	width: 1em;
	height: 1em;
	&::before {
		position: absolute;
		left: 0;
		top: 0;
		border: .4em solid $heart-color;
		border-radius: inherit;
		width: 100%;
		height: 100%;
		content: "";
		transform: scale(0);
	}
	.like-btn:focus & {
		&::before {
			animation: ripple-out $duration $easing;
		}
	}
}
.like-heart {
	display: block;
	width: .5em;
	height: .5em;
	transform-origin: center 80%;
	path {
		transition: all $duration $easing;
		stroke: $heart-color;
		stroke-width: 2;
		fill: transparent;
		.like-btn:focus & {
			fill: $heart-color;
		}
	}
	.like-btn:focus & {
		animation: heart-bounce $duration $easing;
	}
}
.like-particle {
	position: relative;
	width: 1px;
	height: 1px;
}
.like-particle-item {
	--Θ: calc(var(--line-index) / var(--line-count) * 1turn);
	$color-list: #f66 #66f #f90 #09f #9c3 #3c9;
	position: absolute;
	left: 0;
	top: 0;
	border-radius: .05em;
	width: .1em;
	height: .1em;
	transform: translate(-50%, -50%) rotate(var(--Θ)) translateY(0) scaleY(0);
	transition: all $duration $easing;
	@each $v in $color-list {
		$index: index($color-list, $v);
		&:nth-child(#{$index}) {
			background-color: $v;
		}
	}
	.like-btn:focus & {
		animation: particle-out calc(#{$duration} * 1.2) $easing forwards;
	}
}
.like-btn:focus {
	cursor: normal;
	pointer-events: none;
}
@keyframes depress {
	0%,
	100% {
		transform: none;
	}
	50% {
		transform: translateY(5%) scale(.9);
	}
}
@keyframes depress-shadow {
	0%,
	100% {
		transform: none;
	}
	50% {
		transform: scale(.5);
	}
}
@keyframes heart-bounce {
	0%,
	80%,
	100% {
		transform: scale(1);
	}
	40% {
		transform: scale(.7);
	}
}
@keyframes particle-out {
	50% {
		height: .3em;
	}
	50%,
	60% {
		height: .3em;
		transform: translate(-50%, -50%) rotate(var(--Θ)) translateY(.8em) scale(1);
	}
	60% {
		height: .2em;
	}
	100% {
		transform: translate(-50%, -50%) rotate(var(--Θ)) translateY(1em) scale(0);
	}
}
@keyframes ripple-out {
	from {
		transform: scale(0);
	}
	to {
		transform: scale(5);
	}
}
</style>