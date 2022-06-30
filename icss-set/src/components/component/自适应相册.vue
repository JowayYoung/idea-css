<template>
	<div class="bruce flex-ct-x" data-title="自适应相册">
		<ul class="response-album">
			<li v-for="v in 9" :key="v" class="item">
				<img src="https://static.yangzw.vip/codepen/ab-3.jpg">
			</li>
		</ul>
	</div>
</template>

<style lang="scss" scoped>
@mixin square($count: 2) {
	$length: calc((100% - #{$count} * 10px) / #{$count});
	width: $length;
	height: $length;
}
.response-album {
	display: flex;
	flex-wrap: wrap;
	justify-content: flex-start;
	align-content: flex-start;
	padding: 5px;
	border: 1px solid #ccc;
	border-radius: 5px;
	width: 400px;
	height: 400px;
	li {
		display: flex;
		overflow: hidden;
		justify-content: center;
		margin: 5px;
		background-color: #f0f0f0;
		@include square(3);
	}
	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
}
// 一个元素
.item:only-child {
	border-radius: 10px;
	width: auto;
	max-width: 80%;
	height: auto;
	max-height: 80%;
}
// 两个元素
.item:first-child:nth-last-child(2),
.item:first-child:nth-last-child(2) ~ .item:nth-child(2) {
	@include square(2);
}
.item:first-child:nth-last-child(2) {
	border-radius: 10px 0 0 10px;
}
.item:first-child:nth-last-child(2) ~ .item:nth-child(2) {
	border-radius: 0 10px 10px 0;
}
// 三个元素
.item:first-child:nth-last-child(3),
.item:first-child:nth-last-child(3) ~ .item:nth-child(2),
.item:first-child:nth-last-child(3) ~ .item:nth-child(3) {
	@include square(2);
}
.item:first-child:nth-last-child(3) {
	border-top-left-radius: 10px;
}
.item:first-child:nth-last-child(3) ~ .item:nth-child(2) {
	border-top-right-radius: 10px;
}
.item:first-child:nth-last-child(3) ~ .item:nth-child(3) {
	border-bottom-left-radius: 10px;
}
// 四个元素
.item:first-child:nth-last-child(4),
.item:first-child:nth-last-child(4) ~ .item:nth-child(2),
.item:first-child:nth-last-child(4) ~ .item:nth-child(3),
.item:first-child:nth-last-child(4) ~ .item:nth-child(4) {
	@include square(2);
}
.item:first-child:nth-last-child(4) {
	border-top-left-radius: 10px;
}
.item:first-child:nth-last-child(4) ~ .item:nth-child(2) {
	border-top-right-radius: 10px;
}
.item:first-child:nth-last-child(4) ~ .item:nth-child(3) {
	border-bottom-left-radius: 10px;
}
.item:first-child:nth-last-child(4) ~ .item:nth-child(4) {
	border-bottom-right-radius: 10px;
}
// 五个元素
.item:first-child:nth-last-child(5) {
	border-top-left-radius: 10px;
}
.item:first-child:nth-last-child(5) ~ .item:nth-child(3) {
	border-top-right-radius: 10px;
}
.item:first-child:nth-last-child(5) ~ .item:nth-child(4) {
	border-bottom-left-radius: 10px;
}
// 六个元素
.item:first-child:nth-last-child(6) {
	border-top-left-radius: 10px;
}
.item:first-child:nth-last-child(6) ~ .item:nth-child(3) {
	border-top-right-radius: 10px;
}
.item:first-child:nth-last-child(6) ~ .item:nth-child(4) {
	border-bottom-left-radius: 10px;
}
.item:first-child:nth-last-child(6) ~ .item:nth-child(6) {
	border-bottom-right-radius: 10px;
}
// 七个元素
.item:first-child:nth-last-child(7) {
	border-top-left-radius: 10px;
}
.item:first-child:nth-last-child(7) ~ .item:nth-child(3) {
	border-top-right-radius: 10px;
}
.item:first-child:nth-last-child(7) ~ .item:nth-child(7) {
	border-bottom-left-radius: 10px;
}
// 八个元素
.item:first-child:nth-last-child(8) {
	border-top-left-radius: 10px;
}
.item:first-child:nth-last-child(8) ~ .item:nth-child(3) {
	border-top-right-radius: 10px;
}
.item:first-child:nth-last-child(8) ~ .item:nth-child(7) {
	border-bottom-left-radius: 10px;
}
// 九个元素
.item:first-child:nth-last-child(9) {
	border-top-left-radius: 10px;
}
.item:first-child:nth-last-child(9) ~ .item:nth-child(3) {
	border-top-right-radius: 10px;
}
.item:first-child:nth-last-child(9) ~ .item:nth-child(7) {
	border-bottom-left-radius: 10px;
}
.item:first-child:nth-last-child(9) ~ .item:nth-child(9) {
	border-bottom-right-radius: 10px;
}
</style>