<template>
	<div class="bruce flex-ct-y" data-title="使用text-overflow控制溢出文本">
		<p class="ellipsis-text s-line sl-ellipsis">CSS非常有趣和搞怪，可以做一些JS也能做的事情</p>
		<p class="ellipsis-text m-line ml-ellipsis">层叠样式表(CSS)是一种用来表现HTML(标准通用标记语言的一个应用)或XML(标准通用标记语言的一个子集)等文件样式的计算机语言。CSS不仅可以静态地修饰网页，还可以配合各种脚本语言动态地对网页各元素进行格式化。</p>
		<p class="ellipsis-text m-line mls-ellipsis">层叠样式表(CSS)是一种用来表现HTML(标准通用标记语言的一个应用)或XML(标准通用标记语言的一个子集)等文件样式的计算机语言。CSS不仅可以静态地修饰网页，还可以配合各种脚本语言动态地对网页各元素进行格式化。</p>
	</div>
</template>

<style lang="scss" scoped>
.ellipsis-text {
	line-height: 30px;
	font-size: 20px;
	&.s-line {
		width: 200px;
	}
	&.m-line {
		margin-top: 10px;
		width: 400px;
		text-align: justify;
	}
	&.sl-ellipsis {
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}
	&.ml-ellipsis {
		display: -webkit-box;
		overflow: hidden;
		text-overflow: ellipsis;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 3;
	}
	&.mls-ellipsis {
		overflow: hidden;
		position: relative;
		max-height: 90px;
		&::after {
			position: absolute;
			right: 0;
			bottom: 0;
			padding-left: 40px;
			background: linear-gradient(to right, transparent, #fff 50%);
			content: "...";
		}
	}
}
</style>