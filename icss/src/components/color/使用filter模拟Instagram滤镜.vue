<template>
	<div class="bruce flex-ct-x" data-title="使用filter模拟Instagram滤镜">
		<ul class="instagram-filter">
			<li>
				<img src="https://static.yangzw.vip/codepen/gz.jpg">
				<p>Default</p>
			</li>
			<li class="_1977">
				<img src="https://static.yangzw.vip/codepen/gz.jpg">
				<p>1977</p>
			</li>
			<li class="aden">
				<img src="https://static.yangzw.vip/codepen/gz.jpg">
				<p>Aden</p>
			</li>
			<li class="brannan">
				<img src="https://static.yangzw.vip/codepen/gz.jpg">
				<p>Brannan</p>
			</li>
			<li class="brooklyn">
				<img src="https://static.yangzw.vip/codepen/gz.jpg">
				<p>Brooklyn</p>
			</li>
			<li class="clarendon">
				<img src="https://static.yangzw.vip/codepen/gz.jpg">
				<p>Clarendon</p>
			</li>
			<li class="earlybird">
				<img src="https://static.yangzw.vip/codepen/gz.jpg">
				<p>Earlybird</p>
			</li>
			<li class="gingham">
				<img src="https://static.yangzw.vip/codepen/gz.jpg">
				<p>Gingham</p>
			</li>
			<li class="hudson">
				<img src="https://static.yangzw.vip/codepen/gz.jpg">
				<p>Hudson</p>
			</li>
			<li class="inkwell">
				<img src="https://static.yangzw.vip/codepen/gz.jpg">
				<p>Inkwell</p>
			</li>
			<li class="kelvin">
				<img src="https://static.yangzw.vip/codepen/gz.jpg">
				<p>Kelvin</p>
			</li>
			<li class="lark">
				<img src="https://static.yangzw.vip/codepen/gz.jpg">
				<p>Lark</p>
			</li>
			<li class="lofi">
				<img src="https://static.yangzw.vip/codepen/gz.jpg">
				<p>LoFi</p>
			</li>
			<li class="maven">
				<img src="https://static.yangzw.vip/codepen/gz.jpg">
				<p>Maven</p>
			</li>
			<li class="mayfair">
				<img src="https://static.yangzw.vip/codepen/gz.jpg">
				<p>Mayfair</p>
			</li>
			<li class="moon">
				<img src="https://static.yangzw.vip/codepen/gz.jpg">
				<p>Moon</p>
			</li>
			<li class="nashville">
				<img src="https://static.yangzw.vip/codepen/gz.jpg">
				<p>Nashville</p>
			</li>
			<li class="perpetua">
				<img src="https://static.yangzw.vip/codepen/gz.jpg">
				<p>Perpetua</p>
			</li>
			<li class="reyes">
				<img src="https://static.yangzw.vip/codepen/gz.jpg">
				<p>Reyes</p>
			</li>
			<li class="rise">
				<img src="https://static.yangzw.vip/codepen/gz.jpg">
				<p>Rise</p>
			</li>
			<li class="slumber">
				<img src="https://static.yangzw.vip/codepen/gz.jpg">
				<p>Slumber</p>
			</li>
			<li class="stinson">
				<img src="https://static.yangzw.vip/codepen/gz.jpg">
				<p>Stinson</p>
			</li>
			<li class="toaster">
				<img src="https://static.yangzw.vip/codepen/gz.jpg">
				<p>Toaster</p>
			</li>
			<li class="valencia">
				<img src="https://static.yangzw.vip/codepen/gz.jpg">
				<p>Valencia</p>
			</li>
			<li class="walden">
				<img src="https://static.yangzw.vip/codepen/gz.jpg">
				<p>Walden</p>
			</li>
			<li class="willow">
				<img src="https://static.yangzw.vip/codepen/gz.jpg">
				<p>Willow</p>
			</li>
			<li class="xpro2">
				<img src="https://static.yangzw.vip/codepen/gz.jpg">
				<p>X-pro II</p>
			</li>
			<li class="obscure">
				<img src="https://static.yangzw.vip/codepen/gz.jpg">
				<p>自定义：Obscure</p>
			</li>
		</ul>
	</div>
</template>

<style lang="scss" scoped>
.bruce {
	padding: 0;
}
.instagram-filter {
	display: flex;
	overflow: auto;
	flex-wrap: wrap;
	justify-content: space-between;
	align-content: space-between;
	width: 1635px;
	max-width: 100%;
	min-height: 630px;
	li {
		overflow: hidden;
		position: relative;
		width: 225px;
		height: 150px;
		&.obscure {
			filter: brightness(80%) grayscale(20%) contrast(1.2) opacity(.6);
		}
	}
	img {
		width: 100%;
		height: 100%;
	}
	p {
		position: absolute;
		right: 0;
		bottom: 0;
		padding: 0 10px;
		width: fit-content;
		height: 30px;
		background-color: #000;
		filter: none;
		line-height: 30px;
		color: #fff;
	}
}
</style>

<script>
import "../../assets/css/cssgram.min.css";
export default {};
</script>