<template>
	<div class="bruce flex-ct-x" data-title="倒影加载条">
		<ul class="reflect-loading">
			<li v-for="v in 10" :key="v"></li>
		</ul>
	</div>
</template>

<style lang="scss" scoped>
$count: 10;
$color: #66f #09f;
.bruce {
	padding-bottom: 150px;
}
.reflect-loading {
	display: flex;
	padding: 50px;
	height: 200px;
	-webkit-box-reflect: below -100px linear-gradient(rgba(#fff, 0), rgba(#fff, .7));
	li {
		width: 20px;
		@for $i from 0 to $count {
			$args: append($color, $i * 100% / ($count - 1));
			&:nth-child(#{$i + 1}) {
				background-color: mix($args...);
				animation: rotate 3s cubic-bezier(.81, .04, .4, .7) infinite;
				animation-delay: $i * 50ms;
			}
		}
	}
}
@keyframes rotate {
	0% {
		transform: rotate(-.5turn) rotateX(-1turn);
	}
	75%,
	100% {
		transform: none;
	}
}
</style>