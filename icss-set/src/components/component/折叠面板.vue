<template>
	<div class="bruce flex-ct-x" data-title="折叠面板">
		<div class="accordion">
			<input id="collapse1" type="checkbox" hidden>
			<input id="collapse2" type="checkbox" hidden>
			<input id="collapse3" type="checkbox" hidden>
			<article>
				<label for="collapse1">列表1</label>
				<p>内容1<br>内容2<br>内容3<br>内容4</p>
			</article>
			<article>
				<label for="collapse2">列表2</label>
				<p>内容1<br>内容2<br>内容3<br>内容4</p>
			</article>
			<article>
				<label for="collapse3">列表3</label>
				<p>内容1<br>内容2<br>内容3<br>内容4</p>
			</article>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.accordion {
	width: 300px;
	article {
		cursor: pointer;
		& + article {
			margin-top: 5px;
		}
	}
	input {
		&:nth-child(1):checked ~ article:nth-of-type(1) p,
		&:nth-child(2):checked ~ article:nth-of-type(2) p,
		&:nth-child(3):checked ~ article:nth-of-type(3) p {
			border-bottom-width: 1px;
			max-height: 600px;
		}
	}
	label {
		display: block;
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