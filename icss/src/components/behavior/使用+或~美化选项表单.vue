<template>
	<div class="bruce flex-ct-x" data-title="使用+或~美化选项表单">
		<ul class="beauty-selection">
			<li>
				<input id="fed-engineer" type="radio" name="radioName" hidden>
				<label for="fed-engineer"></label>
				<span>前端工程师</span>
			</li>
			<li>
				<input id="bed-engineer" type="radio" name="radioName" hidden>
				<label for="bed-engineer"></label>
				<span>后端工程师</span>
			</li>
			<li>
				<input id="fsd-engineer" type="radio" name="radioName" hidden>
				<label for="fsd-engineer"></label>
				<span>全栈工程师</span>
			</li>
		</ul>
	</div>
</template>

<style lang="scss" scoped>
.beauty-selection {
	display: flex;
	li {
		display: flex;
		align-items: center;
		& + li {
			margin-left: 20px;
		}
	}
	input:checked + label {
		background-color: #f90;
	}
	label {
		margin-right: 5px;
		padding: 2px;
		border: 1px solid #f90;
		border-radius: 100%;
		width: 18px;
		height: 18px;
		background-clip: content-box;
		cursor: pointer;
		transition: all 300ms;
		&:hover {
			border-color: #09f;
			background-color: #09f;
			box-shadow: 0 0 7px #09f;
		}
	}
	span {
		font-size: 16px;
	}
}
</style>