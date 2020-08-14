<template>
	<div class="index-page">
		<div class="header flex-ct-y">
			<h1>
				<span class="gradient">iDea CSS</span>
				<img src="./assets/img/logo.svg" />
			</h1>
			<p>我是JowayYoung，一位CSS爱好者</p>
			<p>欢迎来到<strong class="vue">Pure CSS World</strong></p>
			<p>更多好看的纯CSS特效，请往下滚动浏览👇</p>
			<p>依据美学标准将以下纯CSS特效划分为五大类</p>
			<p>布局-行为-色彩-图形-组件</p>
			<p>大部分纯CSS特效为原创，也有少部分参考其他</p>
			<p>若你有更多想象空间，也可贡献出你的iDea❤️</p>
			<p>目前已发布<strong class="default">{{count}}</strong>个，争取每周更新<strong class="react">2</strong>个</p>
			<p>为了让更多开发者关注CSS，一起Star该项目好吗😜</p>
			<div>
				<iframe src="https://ghbtns.com/github-btn.html?user=JowayYoung&repo=idea-css&type=star&count=true&size=large" frameborder="0" scrolling="0" width="130" height="30" title="GitHub"></iframe>
				<iframe src="https://ghbtns.com/github-btn.html?user=JowayYoung&repo=idea-css&type=fork&count=true&size=large" frameborder="0" scrolling="0" width="130" height="30" title="GitHub"></iframe>
				<iframe src="https://ghbtns.com/github-btn.html?user=JowayYoung&repo=idea-css&type=watch&count=true&size=large&v=2" frameborder="0" scrolling="0" width="140" height="30" title="GitHub"></iframe>
			</div>
		</div>
		<div class="content layout">
			<layout1></layout1>
			<layout2></layout2>
			<layout3></layout3>
			<layout4></layout4>
		</div>
		<div class="content behavior">
			<behavior1></behavior1>
			<behavior2></behavior2>
			<behavior3></behavior3>
			<behavior4></behavior4>
			<behavior5></behavior5>
			<behavior6></behavior6>
			<behavior7></behavior7>
			<behavior8></behavior8>
			<behavior9></behavior9>
			<behavior10></behavior10>
			<behavior11></behavior11>
		</div>
		<div class="content color">
			<color1></color1>
			<color2></color2>
		</div>
		<div class="content figure">
			<figure1></figure1>
			<figure2></figure2>
		</div>
		<div class="content component">
			<component1></component1>
			<component2></component2>
			<component3></component3>
			<component4></component4>
			<component5></component5>
			<component6></component6>
			<component7></component7>
		</div>
	</div>
</template>

<style lang="scss">
::-webkit-scrollbar {
	width: 6px;
	height: 6px;
}
::-webkit-scrollbar-track {
	background-color: rgba(#ccc, .3);
}
::-webkit-scrollbar-thumb {
	border-radius: 3px;
	background-color: #ccc;
}
.header {
	overflow: hidden;
	height: 100vh;
	background-color: #282c34;
	h1 {
		margin: 20px 0;
		font-size: 10vmin;
	}
	img {
		display: inline-block;
		height: 10vmin;
		vertical-align: super;
		animation: swing 3s infinite;
	}
	p {
		line-height: 1.5;
		font-size: 1.8vmin;
		color: #fff;
		& + p {
			margin-top: 10px;
		}
	}
	strong {
		display: inline-block;
		margin: 0 3px;
		padding: 0 6px;
		border-radius: 5px;
		line-height: 20px;
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
	div {
		display: flex;
		margin-top: 20px;
	}
	.gradient {
		background-image: linear-gradient(92deg, #f66 0%, #f90 100%);
		background-clip: text;
		color: #f66;
		animation: hue 5s infinite linear;
		-webkit-text-fill-color: transparent;
	}
}
.bruce {
	position: relative;
	padding: 50px 0;
	border-bottom: 1px solid #ccc;
	min-height: 300px;
	&::before {
		position: absolute;
		left: 50%;
		top: 0;
		z-index: 99999;
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
		z-index: 99999;
		padding: 5px 10px;
		border-top-left-radius: 5px;
		background-color: #ccc;
		font-weight: bold;
		font-size: 16px;
		color: #fff;
	}
}
.content {
	overflow: auto;
	transition: all 300ms;
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
	&.color .bruce {
		&::before {
			background-color: #f90;
		}
		&::after {
			content: "颜色";
		}
	}
	&.figure .bruce {
		&::before {
			background-color: #09f;
		}
		&::after {
			content: "图形";
		}
	}
	&.component .bruce {
		&::before {
			background-color: #3c9;
		}
		&::after {
			content: "组件";
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
import Behavior1 from "./components/behavior/使用+或~美化选项框.vue";
import Behavior2 from "./components/behavior/使用attr()抓取data-.vue";
import Behavior3 from "./components/behavior/使用focus-within分发冒泡响应.vue";
import Behavior4 from "./components/behavior/使用hover描绘鼠标跟随.vue";
import Behavior5 from "./components/behavior/使用max-height切换自动高度.vue";
import Behavior6 from "./components/behavior/使用not()去除无用属性.vue";
import Behavior7 from "./components/behavior/使用object-fit规定图像尺寸.vue";
import Behavior8 from "./components/behavior/使用pointer-events禁用事件触发.vue";
import Behavior9 from "./components/behavior/使用text-align-last对齐两端文本.vue";
import Behavior10 from "./components/behavior/使用transform模拟视差滚动.vue";
import Behavior11 from "./components/behavior/使用valid和invalid校验表单.vue";

import Color1 from "./components/color/使用linear-gradient控制背景渐变.vue";
import Color2 from "./components/color/使用linear-gradient控制文本渐变.vue";

import Component1 from "./components/component/迭代计数器.vue";
import Component2 from "./components/component/故障文本.vue";
import Component3 from "./components/component/滚动指示器.vue";
import Component4 from "./components/component/换色器.vue";
import Component5 from "./components/component/气泡背景墙.vue";
import Component6 from "./components/component/下划线跟随导航栏.vue";
import Component7 from "./components/component/状态悬浮球";

import Figure1 from "./components/figure/使用linear-gradient描绘波浪线.vue";
import Figure2 from "./components/figure/使用mask雕刻镂空背景.vue";

import Layout1 from "./components/layout/使用nth-child()选择指定元素.vue";
import Layout2 from "./components/layout/使用overflow-x排版横向列表.vue";
import Layout3 from "./components/layout/使用text-overflow控制文本溢出.vue";
import Layout4 from "./components/layout/使用writing-mode排版竖文.vue";

export default {
	name: "app",
	components: {
		// 行为
		Behavior1,
		Behavior2,
		Behavior3,
		Behavior4,
		Behavior5,
		Behavior6,
		Behavior7,
		Behavior8,
		Behavior9,
		Behavior10,
		Behavior11,
		// 色彩
		Color1,
		Color2,
		// 组件
		Component1,
		Component2,
		Component3,
		Component4,
		Component5,
		Component6,
		Component7,
		// 图形
		Figure1,
		Figure2,
		// 布局
		Layout1,
		Layout2,
		Layout3,
		Layout4
	},
	data() {
		return {
			count: 0
		};
	},
	mounted() {
		const items = document.getElementsByClassName("bruce") || [];
		this.count = items.length;
	}
};
</script>