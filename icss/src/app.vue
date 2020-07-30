<template>
	<div class="index-page">
		<div class="header flex-ct-y">
			<h1>
				<span class="gradient">iDea CSS</span>
				<img src="./assets/img/logo.svg" />
			</h1>
			<p>I am JowayYoung, Welcome to <strong class="vue">CSS World</strong></p>
			<p>请往下滚动浏览</p>
		</div>
		<div class="content layout">
			<layout1></layout1>
			<layout2></layout2>
		</div>
		<div class="content behavior">
			<behavior1></behavior1>
			<behavior2></behavior2>
			<behavior3></behavior3>
			<behavior4></behavior4>
		</div>
	</div>
</template>

<style lang="scss">
@import "./assets/css/global.scss";
.header {
	overflow: hidden;
	height: 100vh;
	background-color: #282c34;
	h1 {
		margin: 20px 0;
		font-size: 10vmin;
	}
	span {
		animation-duration: 10s !important;
	}
	img {
		display: inline-block;
		height: 10vmin;
		vertical-align: super;
		animation: swing 3s infinite;
	}
	p {
		line-height: 1.5;
		font-size: 20px;
		color: #fff;
	}
	strong {
		display: inline-block;
		margin: 0 3px;
		padding: 0 6px;
		border-radius: 5px;
		line-height: 20px;
		font-size: 18px;
		color: #fff;
		&.default {
			background-color: #f66;
		}
		&.react {
			background-color: #61dafb;
		}
		&.vue {
			background-color: #42b983;
		}
	}
	.gradient {
		background-image: linear-gradient(92deg, #f66 0%, #f90 100%);
		background-clip: text;
		color: #f66;
		animation: hue 60s infinite linear;
		-webkit-text-fill-color: transparent;
	}
}
.content {
	display: flex;
	overflow: auto;
	flex-wrap: wrap;
	min-height: 500px;
	transition: all 300ms;
	.bruce {
		position: relative;
		border-bottom: 1px solid #ccc;
		width: 50%;
		height: 500px;
		&:nth-child(odd) {
			border-right: 1px solid #ccc;
		}
		&::before {
			position: absolute;
			left: 50%;
			top: 0;
			padding: 0 10px;
			border-radius: 0 0 5px 5px;
			line-height: 20px;
			color: #fff;
			content: attr(data-title);
			transform: translateX(-50%);
		}
		&::after {
			position: absolute;
			right: 0;
			bottom: 0;
			padding: 5px 10px;
			border-top-left-radius: 5px;
			background-color: #ccc;
			font-weight: bold;
			font-size: 16px;
			color: #fff;
		}
		@include autoResponse(lg) {
			width: 100%;
		}
	}
	&.layout .bruce {
		&::before {
			background-color: #f66;
		}
		&::after {
			content: "布局";
		}
	}
	&.behavior .bruce {
		&::before {
			background-color: #66f;
		}
		&::after {
			content: "行为";
		}
	}
}
@keyframes hue {
	from {
		filter: hue-rotate(0);
	}
	to {
		filter: hue-rotate(-360deg);
	}
}
@keyframes swing {
	0%,
	65% {
		transform: rotate(0);
	}
	70% {
		transform: rotate(6deg);
	}
	75% {
		transform: rotate(-6deg);
	}
	80% {
		transform: rotate(6deg);
	}
	85% {
		transform: rotate(-6deg);
	}
	90% {
		transform: rotate(6deg);
	}
	95% {
		transform: rotate(-6deg);
	}
	100% {
		transform: rotate(0);
	}
}
</style>

<script>
import Behavior1 from "./components/behavior/使用attr()抓取data-x.vue";
import Behavior2 from "./components/behavior/使用max-height切换自动高度.vue";
import Behavior3 from "./components/behavior/使用pointer-events禁用事件触发.vue";
import Behavior4 from "./components/behavior/使用valid和invalid校验表单.vue";

import Layout1 from "./components/layout/使用nth-child()选择指定元素.vue";
import Layout2 from "./components/layout/使用writing-mode排版竖文.vue";

export default {
	name: "app",
	components: {
		Behavior1,
		Behavior2,
		Behavior3,
		Behavior4,
		Layout1,
		Layout2
	}
};
</script>