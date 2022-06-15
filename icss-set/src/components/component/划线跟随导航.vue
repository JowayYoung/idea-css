<template>
	<div class="bruce flex-ct-x" data-title="划线跟随导航">
		<ul class="underline-navbar">
			<li>Alibaba阿里巴巴</li>
			<li>Tencent腾讯</li>
			<li>Baidu百度</li>
			<li>Jingdong京东</li>
			<li>Ant蚂蚁金服</li>
			<li>Netease网易</li>
		</ul>
	</div>
</template>

<style lang="scss" scoped>
.underline-navbar {
	display: flex;
	li {
		position: relative;
		padding: 10px;
		cursor: pointer;
		font-size: 20px;
		color: #09f;
		transition: all 300ms;
		&::before {
			position: absolute;
			left: 100%;
			top: 0;
			border-bottom: 2px solid transparent;
			width: 0;
			height: 100%;
			content: "";
			transition: all 300ms;
		}
		&:active {
			background-color: #09f;
			color: #fff;
		}
		&:hover {
			&::before {
				left: 0;
				top: 0;
				z-index: -1;
				border-bottom-color: #09f;
				width: 100%;
				transition-delay: 100ms;
			}
			& + li::before {
				left: 0;
			}
		}
	}
}
</style>