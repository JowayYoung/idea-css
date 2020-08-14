<template>
	<div class="index-page">
		<div class="header flex-ct-y">
			<h1>
				<span class="gradient">iDea CSS</span>
				<img src="./assets/img/logo.svg">
			</h1>
			<p>我是JowayYoung，一位重度CSS爱好者</p>
			<p>欢迎来到<strong class="vue">Pure CSS World</strong></p>
			<p>请往下滚动浏览更多好看实用的纯CSS特效👇</p>
			<p>依据美学标准将以下纯CSS特效划分为五大类</p>
			<p>布局-行为-色彩-图形-组件</p>
			<p>大部分纯CSS特效为原创，亦有少部分参考他人</p>
			<p>2019年在掘金社区发布一篇纯CSS特效文章</p>
			<p>目前已斩获4000+点赞量和110k+阅读量</p>
			<p>稳居掘金社区点赞量前10排行榜并深受好评</p>
			<p>若你有更多想象空间也可贡献出你的iDea CSS❤️</p>
			<p>目前已发布<strong class="default">{{count}}</strong>个，争取每周更新<strong class="react">1~2</strong>个</p>
			<p>CSS没有想象中的简单也没有实际中的难用</p>
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
			<layout5></layout5>
			<layout6></layout6>
			<layout7></layout7>
			<layout8></layout8>
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
			<behavior12></behavior12>
			<behavior13></behavior13>
		</div>
		<div class="content color">
			<color1></color1>
			<color2></color2>
			<color3></color3>
			<color4></color4>
			<color5></color5>
		</div>
		<div class="content figure">
			<figure1></figure1>
			<figure2></figure2>
			<figure3></figure3>
			<figure4></figure4>
			<figure5></figure5>
			<figure6></figure6>
			<figure7></figure7>
			<figure8></figure8>
			<figure9></figure9>
		</div>
		<div class="content component">
			<component1></component1>
			<component2></component2>
			<component3></component3>
			<component4></component4>
			<component5></component5>
			<component6></component6>
			<component7></component7>
			<component8></component8>
			<component9></component9>
			<component10></component10>
			<component11></component11>
			<component12></component12>
			<component13></component13>
			<component14></component14>
			<component15></component15>
			<component16></component16>
			<component17></component17>
			<component18></component18>
			<component19></component19>
			<component20></component20>
			<component21></component21>
			<component22></component22>
			<component23></component23>
			<component24></component24>
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
	overflow: hidden;
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
		max-width: 300px;
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
import Behavior1 from "./components/behavior/使用@focus-within分发冒泡响应";
import Behavior2 from "./components/behavior/使用@hover描绘鼠标跟随";
import Behavior3 from "./components/behavior/使用@not()去除无用属性";
import Behavior4 from "./components/behavior/使用@valid和@invalid校验表单";
import Behavior5 from "./components/behavior/使用+或~美化选项框";
import Behavior6 from "./components/behavior/使用animation-delay保留动画起始帧";
import Behavior7 from "./components/behavior/使用attr()抓取data-";
import Behavior8 from "./components/behavior/使用max-height切换自动高度";
import Behavior9 from "./components/behavior/使用object-fit规定图像尺寸";
import Behavior10 from "./components/behavior/使用pointer-events禁用事件触发";
import Behavior11 from "./components/behavior/使用resize拉伸分栏";
import Behavior12 from "./components/behavior/使用text-align-last对齐两端文本";
import Behavior13 from "./components/behavior/使用transform模拟视差滚动";

import Color1 from "./components/color/使用@@selection改变文本选择颜色";
import Color2 from "./components/color/使用filter开启网站悼念模式";
import Color3 from "./components/color/使用filter模拟Instagram滤镜";
import Color4 from "./components/color/使用linear-gradient控制背景渐变";
import Color5 from "./components/color/使用linear-gradient控制文本渐变";

import Component1 from "./components/component/标签导航栏";
import Component2 from "./components/component/标签页";
import Component3 from "./components/component/倒影加载条";
import Component4 from "./components/component/迭代计数器";
import Component5 from "./components/component/动态边框";
import Component6 from "./components/component/故障文本";
import Component7 from "./components/component/滚动指示器";
import Component8 from "./components/component/换色器";
import Component9 from "./components/component/混沌加载圈";
import Component10 from "./components/component/加载指示器";
import Component11 from "./components/component/立体按钮";
import Component12 from "./components/component/螺纹进度条";
import Component13 from "./components/component/气泡背景墙";
import Component14 from "./components/component/三维立方体";
import Component15 from "./components/component/商城票券";
import Component16 from "./components/component/蛇形边框";
import Component17 from "./components/component/下划线跟随导航栏";
import Component18 from "./components/component/星级评分";
import Component19 from "./components/component/圆角进度条";
import Component20 from "./components/component/粘粘球";
import Component21 from "./components/component/折叠面板";
import Component22 from "./components/component/状态悬浮球";
import Component23 from "./components/component/自动打字";
import Component24 from "./components/component/自适应相册";

import Figure1 from "./components/figure/使用box-shadow裁剪图像";
import Figure2 from "./components/figure/使用box-shadow描绘单侧投影";
import Figure3 from "./components/figure/使用conic-gradient描绘饼图";
import Figure4 from "./components/figure/使用filter描绘头像彩色阴影";
import Figure5 from "./components/figure/使用linear-gradient描绘波浪线";
import Figure6 from "./components/figure/使用linear-gradient描绘彩带";
import Figure7 from "./components/figure/使用linear-gradient描绘方格背景";
import Figure8 from "./components/figure/使用mask雕刻镂空背景";
import Figure9 from "./components/figure/使用outline描绘内边框";

import Layout1 from "./components/layout/使用@nth-child()选择指定元素";
import Layout2 from "./components/layout/使用letter-spacing排版倒序文本";
import Layout3 from "./components/layout/使用margin-left排版左重右轻列表";
import Layout4 from "./components/layout/使用overflow-x排版横向列表";
import Layout5 from "./components/layout/使用text-overflow控制文本溢出";
import Layout6 from "./components/layout/使用transform翻转内容";
import Layout7 from "./components/layout/使用transform描绘1px边框";
import Layout8 from "./components/layout/使用writing-mode排版竖文";

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
		Behavior12,
		Behavior13,
		// 色彩
		Color1,
		Color2,
		Color3,
		Color4,
		Color5,
		// 组件
		Component1,
		Component2,
		Component3,
		Component4,
		Component5,
		Component6,
		Component7,
		Component8,
		Component9,
		Component10,
		Component11,
		Component12,
		Component13,
		Component14,
		Component15,
		Component16,
		Component17,
		Component18,
		Component19,
		Component20,
		Component21,
		Component22,
		Component23,
		Component24,
		// 图形
		Figure1,
		Figure2,
		Figure3,
		Figure4,
		Figure5,
		Figure6,
		Figure7,
		Figure8,
		Figure9,
		// 布局
		Layout1,
		Layout2,
		Layout3,
		Layout4,
		Layout5,
		Layout6,
		Layout7,
		Layout8
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