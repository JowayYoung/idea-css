<template>
	<div class="bruce flex-ct-y" data-title="使用overflow-x排版横向列表">
		<div class="horizontal-list flex">
			<ul>
				<li>Alibaba</li>
				<li>Tencent</li>
				<li>Baidu</li>
				<li>Jingdong</li>
				<li>Ant</li>
				<li>Netease</li>
				<li>Meituan</li>
				<li>ByteDance</li>
				<li>360</li>
				<li>Sina</li>
			</ul>
		</div>
		<div class="horizontal-list inline">
			<ul>
				<li>Alibaba</li>
				<li>Tencent</li>
				<li>Baidu</li>
				<li>Jingdong</li>
				<li>Ant</li>
				<li>Netease</li>
				<li>Meituan</li>
				<li>ByteDance</li>
				<li>360</li>
				<li>Sina</li>
			</ul>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.horizontal-list {
	overflow: hidden;
	width: 300px;
	height: 100px;
	& + .horizontal-list {
		margin-top: 10px;
	}
	ul {
		overflow-x: auto;
		cursor: pointer;
		&::-webkit-scrollbar {
			height: 10px;
		}
		&::-webkit-scrollbar-track {
			background-color: #f0f0f0;
		}
		&::-webkit-scrollbar-thumb {
			border-radius: 5px;
			background-color: #f66;
		}
	}
	li {
		overflow: hidden;
		height: 90px;
		background-color: #66f;
		line-height: 90px;
		text-align: center;
		font-size: 16px;
		color: #fff;
		& + li {
			margin-left: 10px;
		}
	}
	&.flex {
		ul {
			display: flex;
			flex-wrap: nowrap;
			justify-content: space-between;
		}
		li {
			flex-shrink: 0;
			flex-basis: 90px;
		}
	}
	&.inline {
		height: 102px;
		ul {
			overflow-y: hidden;
			white-space: nowrap;
		}
		li {
			display: inline-block;
			width: 90px;
		}
	}
}
</style>