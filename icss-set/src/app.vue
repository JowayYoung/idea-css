<template>
	<div class="main-page pr">
		<div class="header-layout flex-ct-y">
			<h1 class="header-title">
				<span class="header-title-text gradient">iDea CSS</span>
				<img class="header-title-logo" src="./assets/img/logo.svg">
			</h1>
			<p class="header-desc">我是JowayYoung，一位重度CSS爱好者</p>
			<p class="header-desc">欢迎来到<strong class="header-tag vue">Pure CSS World</strong></p>
			<p class="header-desc">请往下滚动浏览更多好看实用的纯CSS特效👇</p>
			<p class="header-desc">根据美学标准将以下纯CSS特效划分为五大类</p>
			<nav class="header-nav">
				<router-link class="header-nav-item" active-class="active" to="/layout">布局</router-link>-
				<router-link class="header-nav-item" active-class="active" to="/behavior">行为</router-link>-
				<router-link class="header-nav-item" active-class="active" to="/color">色彩</router-link>-
				<router-link class="header-nav-item" active-class="active" to="/figure">图形</router-link>-
				<router-link class="header-nav-item" active-class="active" to="/component">组件</router-link>
			</nav>
			<p class="header-desc">大部分纯CSS特效为原创，亦有少部分参考他人</p>
			<p class="header-desc">2019年在掘金社区发布一篇纯CSS特效文章</p>
			<p class="header-desc">目前已斩获5000+点赞量和155k+阅读量</p>
			<p class="header-desc">稳居掘金社区点赞量前10排行榜并深受好评</p>
			<p class="header-desc">若你有更多想象空间也可贡献出你的iDea CSS❤️</p>
			<p class="header-desc">目前已发布<strong class="default">{{count}}</strong>个，争取每月更新<strong class="react">1~2</strong>个</p>
			<p class="header-desc">CSS没有想象中的简单也没有实际中的难用</p>
			<p class="header-desc">为了让更多开发者关注CSS，一起Star该项目好吗😜</p>
			<div class="header-stats">
				<iframe src="https://ghbtns.com/github-btn.html?user=JowayYoung&repo=idea-css&type=star&count=true&size=large" frameborder="0" scrolling="0" width="130" height="30" title="GitHub"></iframe>
				<iframe src="https://ghbtns.com/github-btn.html?user=JowayYoung&repo=idea-css&type=fork&count=true&size=large" frameborder="0" scrolling="0" width="130" height="30" title="GitHub"></iframe>
				<iframe src="https://ghbtns.com/github-btn.html?user=JowayYoung&repo=idea-css&type=watch&count=true&size=large&v=2" frameborder="0" scrolling="0" width="140" height="30" title="GitHub"></iframe>
			</div>
		</div>
		<router-view></router-view>
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
	&-layout {
		overflow: hidden;
		height: 100vh;
		background-color: #282c34;
	}
	&-title {
		margin: 20px 0;
		font-size: 10vmin;
		&-text.gradient {
			background-image: linear-gradient(92deg, #f66 0%, #f90 100%);
			background-clip: text;
			color: #f66;
			animation: hue 5s infinite linear;
			-webkit-text-fill-color: transparent;
		}
		&-logo {
			display: inline-block;
			height: 10vmin;
			vertical-align: super;
			animation: swing 3s infinite;
		}
	}
	&-desc {
		line-height: 1.5;
		font-size: 1.8vmin;
		color: #fff;
		& + p {
			margin-top: 10px;
		}
	}
	&-nav {
		display: flex;
		line-height: 1.5;
		font-size: 1.8vmin;
		color: #fff;
		&-item {
			margin: 0 5px;
			color: #fff;
			&.active {
				font-weight: bold;
				color: #f66;
			}
		}
	}
	&-tag {
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
	&-stats {
		display: flex;
		margin-top: 20px;
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

<script lang="ts">
export default {
	name: "app"
};
</script>