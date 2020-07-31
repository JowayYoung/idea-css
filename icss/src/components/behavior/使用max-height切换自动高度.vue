<template>
	<div class="bruce flex-ct-x" data-title="使用max-height切换自动高度">
		<ul class="auto-height">
			<li>
				<h3>列表1</h3>
				<p>内容1<br>内容2<br>内容3<br>内容4</p>
			</li>
			<li>
				<h3>列表2</h3>
				<p>内容1<br>内容2<br>内容3<br>内容4</p>
			</li>
			<li>
				<h3>列表3</h3>
				<p>内容1<br>内容2<br>内容3<br>内容4</p>
			</li>
		</ul>
	</div>
</template>

<style lang="scss" scoped>
.auto-height {
	width: 300px;
	li {
		cursor: pointer;
		& + li {
			margin-top: 5px;
		}
		&:hover p {
			border-bottom-width: 1px;
			max-height: 600px;
		}
	}
	h3 {
		padding: 0 20px;
		height: 40px;
		background-color: #f66;
		cursor: pointer;
		line-height: 40px;
		font-size: 16px;
		color: #fff;
	}
	p {
		overflow: hidden;
		padding: 0 20px;
		border: 1px solid #f66;
		border-top: none;
		border-bottom-width: 0;
		max-height: 0;
		line-height: 30px;
		transition: all 500ms;
	}
}
</style>