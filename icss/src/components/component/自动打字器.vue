<template>
	<div class="bruce flex-ct-x" data-title="自动打字器">
		<div class="auto-typing">Do You Want To Know More About CSS Development Skill</div>
	</div>
</template>

<style lang="scss" scoped>
@mixin typing($count: 0, $duration: 0, $delay: 0) {
	overflow: hidden;
	border-right: 1px solid transparent;
	width: #{$count + 1}ch;
	font-family: Consolas, Monaco, monospace;
	white-space: nowrap;
	animation: typing #{$duration}s steps($count + 1) #{$delay}s infinite backwards,
		caret 500ms steps(1) #{$delay}s infinite forwards;
	// animation: typing #{$duration}s steps($count + 1) #{$delay}s backwards,
	// 	caret 500ms steps(1) #{$delay}s $duration * 2 forwards;
}
.auto-typing {
	font-weight: bold;
	font-size: 30px;
	color: #09f;
	@include typing(52, 5);
}
@keyframes caret {
	50% {
		border-right-color: currentColor;
	}
}
@keyframes typing {
	from {
		width: 0;
	}
}
</style>