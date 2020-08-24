<template>
	<div class="bruce flex-ct-x" data-title="使用:empty监听清空状态">
		<ul class="empty-list">
			<li v-for="v in 10" :key="v">Data {{v}}</li>
		</ul>
		<ul class="empty-list"></ul>
	</div>
</template>

<style lang="scss" scoped>
$empty: "https://yangzw.vip/img/empty.svg";
.empty-list {
	overflow: auto;
	width: 200px;
	height: 150px;
	outline: 1px solid #3c9;
	&:empty {
		display: flex;
		justify-content: center;
		align-items: center;
		background: url($empty) no-repeat center/100px auto;
		&::after {
			margin-top: 90px;
			font-weight: bold;
			content: "没钱就没数据";
		}
	}
	& + .empty-list {
		margin-left: 20px;
	}
	li {
		padding: 0 10px;
		height: 30px;
		background-color: #09f;
		line-height: 30px;
		color: #fff;
		&:nth-child(even) {
			background-color: #f90;
		}
	}
}
</style>